<?php
namespace ACellShop\Http\Controllers;

use Exception;
use ACellShop\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller {

	/**
	 * Display the home page.
     * Send slideshow to home page.
     * Send on-sale list to home page
	 *
	 * @return Response
	 */

	public function index()
	{
        return view('public.OldDBrand.index');
	}
}
