<?php namespace ACellShop\Http\Controllers;

use ACellShop\Http\Requests;
use ACellShop\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class CartController extends Controller {
    /**
     * Display the shopping cart.
     *
     * @return Response
     * @internal param Request $request
     * @internal param Cart $cart
     */
	public function index(Request $request)
	{
		$value = array();
		if ($request->session()->has('cart')){
			$value = $request->session()->get('cart');
		}
		$new_data = array();
		foreach($value as $item){
			$new_item = explode(',', $item);
			array_push($new_data,$new_item);
		}
		$data = array('cart'=>$new_data);
        return view('public.OldDBrand.cart')->with($data);;
	}

    /**
     * Add a product to the shopping cart.
     *
     * @param $productId
     * @return Response
     * @internal param Request $request
     */
	public function store(Request $request, $cellName)
	{
		$cart = $request->cart;
		if ($request->session()->has('cart')){
			$value = $request->session()->get('cart');
			if(!is_array($value)){
				$value = array();
			}
			array_push($value, $cart);
			$request->session()->forget('cart');
			$request->session()->put('cart', $value);
		}else{
			$request->session()->put('cart', [$cart]);
		}
		
		$value = $request->session()->get('cart');
		echo implode("|",$value);
	}

    /**
     * Update a product in the shopping cart.
     *
     * @param $productId
     * @return Response
     * @internal param Request $request
     * @internal param int $id
     */
	public function update($productId)
	{
        return redirect('cart');
	}

    /**
     * Delete a product from the shopping cart.
     *
     * @param $productId
     * @return Response
     * @internal param Request $request
     * @internal param int $id
     */
	public function destroy($productId)
	{
        return redirect('cart');
	}
}
