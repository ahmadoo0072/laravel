<?php namespace ACellShop\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Exception;
use ACellShop\Http\Requests;
use ACellShop\Http\Controllers\Controller;
use ACellShop\Http\Requests\SubmitOrderRequest;
use ACellShop\src\Customer;
use ACellShop\src\Order;
use ACellShop\src\OrderProduct;



class OrderController extends Controller {

    protected $_request;
    protected $_order;
    protected $_checkout;



	/**
	 * Show a list of all orders.
	 *
	 * @return Response
	 */
	public function index()
	{
        try {
            $orders = Order::all();
        } catch(Exception $e)
        {
            $orders = null;
        }
        return view('admin.orders')
            ->withOrders($orders);
	}

    /**
     * Show the form for placing a new order.
     *
     * @return Response
     * @internal param Request $request
     */
	public function create(Request $request)
	{
        //Redirect back to the cart page if cart===empty
        if(empty($request->session()->has('cart')))
        {
            return redirect('/cart');
        }
        return view('public.OldDBrand.checkout');
	}

    /**
     * Submit the order
     * Save order details to DB
     * Charge the user's credit card
     *
     * @param SubmitOrderRequest $request
     * @return Response
     */
    
	/*public function store1(Request $cart)
	{
        var_dump($contents);
        echo 'MKRNaqeebi';
    }*/
	public function store(Request $contents)
	{
        $order=new Order;
        //$contents = $cart->getCartContents();

        try {
            //Start the transaction.
            DB::beginTransaction();

            //Create the new order.

            $order->customer_name = $contents['customer_name'];
            $order->customer_phone = $contents['customer_phone'];
            if(!$contents['is_ajax']){
                $order->shipping_address = $contents['shipping_address'];
                $order->customer_city = 'do not know'; //$contents['customer_city'];
                $order->customer_note = $contents['customer_note'];
            }
            $order->status = 'Not-Paid';
            $order->save();


            //Add each item from the cart to the order.
            foreach (array_combine($contents['color'], $contents['model']) as $color => $model){
                $product = new OrderProduct;
                $product->order_id      = $order->order_id;
                $product->model         = $model;
                $product->color         = $color;
                $product->save();
            }
            //Commit the transaction.
            DB::commit();


            //Unset the cart cookie
            //$cookie = Cookie::forget('cart');

            //Remove the total amount session var
            //$request->session()->forget('cartTotal');


            return redirect('/');//, ['order' => $order]);

        } /*catch (Throwable $e) {
            //Rollback the transaction if any part fails.
            DB::rollback();
            //Return the user to the checkoust form with a generic error.
            return view('public.home')
                ->withError('An error has occurred. Please try again later.');
        }*/
         catch (Exception $e) {
            //Rollback the transaction if any part fails.
            DB::rollback();
            //Return the user to the checkoust form with a generic error.
            return redirect('/');
                //->withError('An error has occurred. Please try again later.');
        // Executed only in PHP 5.x, will not be reached in PHP 7
        }
	}

    /**
     * Show the order-detail page.
     *
     * @param $order_id
     * @return Response
     * @internal param int $id
     */
	public function show($order_id)
	{
		try {
            $order = Order::where('order_id',$order_id) -> first();
            $products = OrderProduct::where('order_id',$order_id) ->get();
            $data=array('order'=>$order,'products'=>$products);
        } catch(Exception $e)
        {
            $data = null;
        }
        return view('admin.order-detail')
            ->withOrder($data);
	}

    /**
     * Update the order status in the DB.
     *
     * @param $order_id
     * @return Response
     * @internal param Request $request
     * @internal param int $id
     */
	public function update($order_id,Request $contents)
	{
		try {
            $order = Order::where('order_id',$order_id) -> first();
            $order->status = $contents['status'];
            $order->save();
            return redirect('admin/orders');
        } catch(Exception $e) {
            return redirect('admin/orders');
        }
	}

    /**
     * Delete the order from DB.
     *
     * @param $order_id
     * @return Response
     * @throws Exception
     * @internal param int $id
     */
	public function destroy($order_id, OrderProduct $product, Customer $customer)
	{
        try {
            DB::beginTransaction();

            //Get the customer ID from the order.
            //Then, delete the order.
            $order = Order::where('order_id',$order_id) -> first();
            $customerId = $order->customer_id;
            $order->delete();

            //Delete order products.
            $product->deleteOrderProducts($order_id);

            //Delete the customer who placed the order.
            //We shouldn't hang on to anyone's personal info for longer than we have to.
            $customer->deleteCustomer($customerId);

            DB::commit();

            return redirect('admin/orders');
        } catch (Exception $e) {
            DB::rollback();
            return redirect('admin/orders');
        }
	}
}
