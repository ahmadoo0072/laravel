e<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('orders', function(Blueprint $table)
		{
            $table->increments('order_id');
            //$table->integer('customer_id')->unsigned()->index();
            //$table->foreign('customer_id')->references('customer_id')->on('order_customers')->onDelete('cascade');
            $table->string('customer_name');
            $table->string('customer_phone');
            $table->string('shipping_address');
            $table->string('customer_city');
            $table->string('customer_note');
            //$table->decimal('order_total', 19, 2);
            //$table->decimal('tax_total', 19, 2);
            //$table->decimal('shipping_total', 19, 2);
            $table->string('status');
            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('orders');
	}

}
