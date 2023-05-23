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
Route::post('/AddAddress', [loginController::class, 'AddAddress']);
Route::post('/getAddress', [loginController::class, 'getAddress']);
Route::put('/updateAddress', [loginController::class, 'updateAddress']);
Route::post('/deleteAddress', [loginController::class, 'deleteAddress']);

Route::get('/AllProducts', [productsController::class, 'getAllProducts']);
Route::get('/MenProducts', [productsController::class, 'getMenProducts']);
Route::get('/WomenProducts', [productsController::class, 'getWomenProducts']);
Route::get('/AccesoriesProducts', [productsController::class, 'getAccesoriesProducts']);
Route::post('/getTheShoppinCart', [productsController::class, 'getTheShoppinCart']);
Route::post('/addToShoppinCart', [productsController::class, 'addToShoppinCart']);
Route::post('/deleteItemFromTheCart', [productsController::class, 'DeleteItemFromTheCart']);
Route::post('/ClearShopingCart', [productsController::class, 'ClearShopingCart']);
Route::post('/getWishlist', [productsController::class, 'getWishlist']);
Route::post('/addToWishlist', [productsController::class, 'addToWishlist']);
Route::post('/removeFromWishlist', [productsController::class, 'removeFromWishlist']);
Route::post('/AddReview', [productsController::class, 'AddReview']);
Route::post('/getReviews', [productsController::class, 'getReviews']);
Route::post('/getRating', [productsController::class, 'getRating']);
