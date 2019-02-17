<?php namespace ACellShop\Providers;

use Illuminate\Support\ServiceProvider;
use ACellShop\src\Cart\Cart;

class CartServiceProvider extends ServiceProvider {

	/**
	 * Bootstrap the application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		//
	}

	/**
	 * Bind the Cart implementation to the Cart interface.
	 *
	 * @return void
	 */
	public function register()
	{
        $this->app->bind('ACellShop\src\Cart\Interfaces\CartInterface', function($app, $parameters)
        {
            return new Cart($parameters[0]);
        });
	}

}
