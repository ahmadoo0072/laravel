<?php namespace ACellShop\Providers;

use Illuminate\Support\ServiceProvider;
use ACellShop\src\Image\ImageCropper;
class ImageCropServiceProvider extends ServiceProvider {

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
	 * Bind the ImageCrop implementation with the ImageCrop interface.
	 *
	 * @return void
	 */
	public function register()
	{
        $this->app->bind('ACellShop\src\Image\Interfaces\ImageCropInterface', 'ACellShop\src\Image\ImageCropper');
	}

}
