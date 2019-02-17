@extends('public.layouts.main')

@section('title')
    @parent Order
@stop

@section('content')
    <div class="container">
        <div class="row row-top-buffer">
            @if($errors->any())
                <div class="row">
                    <div class="col-sm-12 alert alert-danger">
                        <h1>Error <span class="glyphicon glyphicon-exclamation-sign"></span></h1>
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
            {!! Form::open(['url' => '/order', 'id' => 'checkout-form']) !!}
                <div class="board">
					<ul class="nav nav-tabs">
						<div class="liner"></div>
						<li rel-index="0" class="active">
							<a href="#step-1" class="btn" aria-controls="step-1" role="tab" data-toggle="tab">
								<span><i class="glyphicon glyphicon-user"></i></span>
							</a>
						</li>
						<li rel-index="1">
							<a href="#step-2" class="btn disabled" aria-controls="step-2" role="tab" data-toggle="tab">
								<span><i class="glyphicon glyphicon-gift"></i></span>
							</a>
						</li>
						<!--li rel-index="2">
							<a href="#step-3" class="btn disabled" aria-controls="step-3" role="tab" data-toggle="tab">
								<span><i class="glyphicon glyphicon-ok"></i></span>
							</a>
						</li-->
					</ul>
				</div>
                <div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="step-1">
						<div class="col-md-12">
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Name</label>
                                    {!! Form::text('customer_name', null, ['class' => 'form-control required', 'id' => 'firstName', 'placeholder' => 'Name']) !!}
                                </div>
                            </div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Phone</label>
                                    {!! Form::text('customer_phone', null, ['class' => 'form-control required', 'id' => 'homePhone', 'placeholder' => 'Last Name']) !!}
								</div>
							</div>

							<div class="col-md-12">
								<div class="form-group">
									<input type="button" value="Next" id="step-1-next" class='form-control btn-primary'>
								</div>
							</div>
						</div>
					</div>

					<div role="tabpanel" class="tab-pane" id="step-2">
						<div class="col-md-12">
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Full Address:</label>
									{!! Form::text('shipping_address', null, ['class' => 'form-control required', 'id' => 'address', 'placeholder' => 'Shipping Address']) !!}
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">City</label>
									{!! Form::text('customer_city', null, ['class' => 'form-control required', 'id' => 'firstName', 'placeholder' => 'Lahore']) !!}
								</div>
							</div>
                            <div class="kuba">
								<div class="col-md-6">
									<div class="form-group">
										<select name="color[]" class="form-control">
											<option value="matte_black">Matte Black</option>
											<option value="jet_black">Jet Black</option>
											<option value="matte_white">Matte White</option>
											<option value="white_carbon_fiber">White Carbon Fiber</option>
											<option value="black_carbon_fiber">Black Carbon Fiber</option>
											<option value="red_carbon_fiber">Red Carbon Fiber</option>
											<option value="blue_carbon_fiber">Blue Carbon Fiber</option>
											<option value="hyper_black_titanium">Hyper Black Titanium</option>
											<option value="brushed_silver">Brushed Silver</option>
											<option value="brushed_gold">Brushed Gold</option>
											<option value="matte_purple">Matte Purple</option>
											<option value="matte_blue">Matte Blue</option>
											<option value="matte_yellow">Matte Yellow</option>
											<option value="matte_orange">Matte Orange</option>
											<option value="matte_red">Matte Red</option>
											<option value="nacked">Nacked</option>
											<option value="transparent_matte">Transparent Matte</option>
											<option value="dark_wooden">Dark Wooden</option>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control required" placeholder="" name="model[]" type="text">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<input id="kubahub" type="button" value="An other skin" class='form-control btn-primary'>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Special Note</label>
									{!! Form::text('customer_note', null, ['class' => 'form-control required', 'id' => 'note', 'placeholder' => '']) !!}
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Full Address:</label>
									{!! Form::text('shipping_address1', null, ['class' => 'form-control required', 'id' => 'address1', 'placeholder' => 'Shipping Address']) !!}
								</div>
							</div>

							<div class="col-md-12">
								<div class="form-group">
									{!! Form::submit('Purchase', ['id' => 'subBtn', 'class' => 'form-control btn-primary']) !!}
								</div>
							</div>
						</div>
					</div>

					<div role="tabpanel" class="tab-pane" id="step-3">
						<div class="col-md-12">
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label">Name</label>
                                    {!! Form::text('again_address', null, ['class' => 'form-control required', 'placeholder' => 'Name']) !!}
                                </div>
                            </div>

							<div class="col-md-12">
								<div class="form-group">

								</div>
							</div>
						</div>
					</div>
				</div>
            {!! Form::close() !!}
        </div>
    </div>
@stop
@section('footer')
    <script src="/js/script.js"></script>
@stop