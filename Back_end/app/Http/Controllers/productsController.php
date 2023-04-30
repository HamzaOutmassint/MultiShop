<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ShoppingCart;
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
    public function addToShoppinCart(Request $request){
        $shoppingCart = new ShoppingCart();

        $shoppingCart->product_id = $request->product_id;
        $shoppingCart->product_quantity = $request->product_quantity;
        $shoppingCart->user_token = $request->token;
        $shoppingCart->save();

        $returnData = [
            "success" => true ,
            "message" => "Add to shopping cart successfully",
        ];
        echo json_encode($returnData);
    }
    public function DeleteItemFromTheCart(Request $request){
        $item = ShoppingCart::where("product_id", $request->id)->first();
        $item->delete();

        $returnData = [
            "success" => true ,
            "message" => "the item is deleted successfully from shopping cart ",
        ];
        echo json_encode($returnData);
    }
    public function ClearShopingCart(){
        $item = ShoppingCart::truncate();

        $returnData = [
            "success" => true
        ];
        echo json_encode($returnData);
    }
}
