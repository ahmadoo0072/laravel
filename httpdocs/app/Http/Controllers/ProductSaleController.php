<?php namespace ACellShop\Http\Controllers;

use ACellShop\Http\Requests;
use ACellShop\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use ACellShop\src\Product;

class ProductSaleController extends Controller {

    protected $_product;

    public function __construct(Product $product)
    {
        $this->_product = $product;
    }

	/**
	 * Display the on-sale products page.
	 *
	 * @return Response
	 */
	public function index()
	{
        //Set the page title
        $title = 'On Sale';

        //Cache results
        $products = Cache::rememberForever('sale-products', function()
        {
            return $this->_product->getSaleList();
        });

        return view('public.product-list')
            ->withTitle($title)
            ->withProducts($products);
	}
}
