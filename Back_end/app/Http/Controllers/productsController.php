<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class productsController extends Controller
{
    public function getAllProducts(){
        return Product::get();
    }

    public function getMenProducts(){
        return Product::where("categorie","men")->get();
    }
    public function getWomenProducts(){
        return Product::where("categorie","women")->get();
    }
    public function getAccesoriesProducts(){
        return Product::where("categorie","accesories")->get();
    }
    public function getTheShoppinCart(Request $request){
        $products = DB::table('shopping_carts')
        ->join('products', 'shopping_carts.product_id', '=', 'products.product_id')
        ->join('logins', 'shopping_carts.user_token', '=', 'logins.token')
        ->select('products.product_id', 'shopping_carts.product_quantity', 'product_name', 'product_price', 'old_price', 'product_image', 'description', 'categorie', 'size', 'department', 'favorite_product')
        ->where('shopping_carts.user_token', '=', $request->token)
        ->distinct()
        ->get();

        if($products->count() > 0){
            echo $products->toJson();
        } else {
            echo "[]";
        }
    }
}
