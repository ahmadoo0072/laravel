<?php namespace ACellShop\src\Checkout\Interfaces;

interface CheckoutInterface {

    public function charge(array $data);
}