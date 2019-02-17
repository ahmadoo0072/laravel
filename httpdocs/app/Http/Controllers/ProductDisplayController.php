<?php namespace ACellShop\Http\Controllers;

use Exception;
use ACellShop\Http\Requests;
use ACellShop\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class ProductDisplayController extends Controller {

	/**
	 * Display the shop (product list) page.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('public.OldDBrand.shop');
	}
	public function singleProduct($cellName)
	{
		return view('public.OldDBrand.shop.'.$cellName);
	}
	
}