<?php namespace ACellShop\Providers;

use Illuminate\Support\ServiceProvider;

class CheckoutServiceProvider extends ServiceProvider {

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
	 * Bind the Checkout implementation to the Checkout interface.
	 *
	 * @return void
	 */
	public function register()
	{
        $this->app->bind('ACellShop\src\Checkout\Interfaces\CheckoutInterface', 'ACellShop\src\Checkout\Checkout');
	}

}
