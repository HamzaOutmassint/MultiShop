<?php

use App\Http\Controllers\loginController;
use App\Http\Controllers\productsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [loginController::class, 'register']);
Route::post('/login', [loginController::class, 'login']);
Route::post('/getCustomerInfo', [loginController::class, 'getCustomerInfo']);
Route::put('/updateFullNameOfCustomer', [loginController::class, 'updateFullNameOfCustomer']);
Route::put('/updatePassword', [loginController::class, 'updatePassword']);
Route::put('/updateEmail', [loginController::class, 'updateEmail']);

Route::get('/AllProducts', [productsController::class, 'getAllProducts']);
Route::get('/MenProducts', [productsController::class, 'getMenProducts']);
Route::get('/WomenProducts', [productsController::class, 'getWomenProducts']);
Route::get('/AccesoriesProducts', [productsController::class, 'getAccesoriesProducts']);
Route::post('/getTheShoppinCart', [productsController::class, 'getTheShoppinCart']);
Route::post('/addToShoppinCart', [productsController::class, 'addToShoppinCart']);
Route::post('/deleteItemFromTheCart', [productsController::class, 'DeleteItemFromTheCart']);
Route::post('/ClearShopingCart', [productsController::class, 'ClearShopingCart']);
