@extends('admin.layouts.admin-main')

@section('title')
    @parent Order Detail
@stop

@section('content')
    @if($order['order'] != NULL)
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1>Order Detail</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <h4>Address</h4>
                                                    <p>
                                                        {{ $order['order']->customer_name }}<br />
                                                        {{ $order['order']->customer_phone }} <br />
                                                        {{ $order['order']->shipping_address }}, {{ $order['order']->customer_city }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <h4>Order Date</h4>
                                                    <p>
                                                        {{ $order['order']->getFormattedCreatedAt() }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <h4 id="order_status">Order Status</h4>
                                                    {!! Form::open(['method' => 'PUT', 'route' => ['admin.orders.update', $order['order']->order_id],  'id' => 'status-form']) !!}
                                                    {!! Form::select('status', ['Shipped' => 'Shipped', 'Paid' => 'Paid', 'Cancelled' => 'Cancelled', 'Complete' => 'Complete', 'Not-Paid' => 'Not-Paid'], $order['order']->status, ['class' => 'form-control']) !!}
                                                    <br />
                                                    <button type="submit" class="btn btn-primary pull-right" aria-label="Save Changes">
                                                        <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Save
                                                    </button>
                                                    {!! Form::close() !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="admin_orders_list" class="table table-striped table-responsive table-hover table-bordered text-center">
                                        <thead>
                                        <tr>
                                            <th class="col-sm-4">Color</th>
                                            <th class="col-sm-2">Mobile Model</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @if(sizeof($order['products'])>0)
                                            @foreach($order['products'] as $product)
                                                <tr>
                                                    <td>
                                                        {{ $product->color }}
                                                    </td>
                                                    <td>
                                                        {{ $product->model }}
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @endif
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @else
        <p>Hahahahahaaha</p>
    @endif
@stop
