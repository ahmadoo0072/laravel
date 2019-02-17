<?php 
namespace ACellShop\Http\Requests;

use ACellShop\Http\Requests\Request;

class SubmitOrderRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
        return [
            'customer_name' => 'required',
            'customer_phone' => 'required'
        ];
	}

}
