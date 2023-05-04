<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class productsController extends Controller
{
    public function getAllProducts()
    {
        return Product::get();
    }
    public function getMenProducts()
    {
        return Product::where("categorie", "men")->get();
    }
    public function getWomenProducts()
    {
        return Product::where("categorie", "women")->get();
    }
    public function getAccesoriesProducts()
    {
        return Product::where("categorie", "accesories")->get();
    }

    /*-------------------------------shopping cart--------------------------------- */
    public function getTheShoppinCart(Request $request)
    {
        $products = DB::table('shopping_carts')
            ->join('products', 'shopping_carts.product_id', '=', 'products.product_id')
            ->join('logins', 'shopping_carts.user_token', '=', 'logins.token')
            ->select('products.product_id', 'shopping_carts.product_quantity', 'product_name', 'product_price', 'old_price', 'product_image', 'description', 'categorie', 'size', 'department', 'favorite_product')
            ->where('shopping_carts.user_token', '=', $request->token)
            ->distinct()
            ->get();

        if ($products->count() > 0) {
            echo $products->toJson();
        } else {
            echo "[]";
        }
    }
    public function addToShoppinCart(Request $request)
    {
        $shoppingCart = new ShoppingCart();

        $shoppingCart->product_id = $request->product_id;
        $shoppingCart->product_quantity = $request->product_quantity;
        $shoppingCart->user_token = $request->token;
        $shoppingCart->save();

        $returnData = [
            "success" => true,
            "message" => "Add to shopping cart successfully",
        ];
        echo json_encode($returnData);
    }
    public function DeleteItemFromTheCart(Request $request)
    {
        $item = ShoppingCart::where("product_id", $request->id)->first();
        $item->delete();

        $returnData = [
            "success" => true,
            "message" => "the item is deleted successfully from shopping cart ",
        ];
        echo json_encode($returnData);
    }
    public function ClearShopingCart()
    {
        $item = ShoppingCart::truncate();

        $returnData = [
            "success" => true
        ];
        echo json_encode($returnData);
    }

    /*-------------------------------review--------------------------------- */
    // public function getWishlist(Request $request){

    // }

    /*-------------------------------review--------------------------------- */
    public function AddReview(Request $request)
    {
        $review = new Review();

        $review->name = $request->name;
        $review->email = $request->email;
        $review->value = $request->value;
        $review->title = $request->title;
        $review->content = $request->content;
        $review->product_id = $request->product_id;
        $review->dateReview = $request->date;
        $review->save();

        $returnData = [
            "success" => true ,
            "message" => "Your review is added successfully",
        ];
        echo json_encode($returnData);
    }
    public function getReviews(Request $request)
    {
        $reviews = Review::where("product_id", $request->product_id)->get(["name" , "title" , "content" , "value" , "dateReview"]);

        if(count($reviews)>0){
            return $reviews;
        }else{
            return [];
        }
    }

    public function getRating(Request $request)
    {
        $data = $request->json()->all();
        $total_review = 0;
        $five_star_review = 0;
        $four_star_review = 0;
        $three_star_review = 0;
        $two_star_review = 0;
        $one_star_review = 0;

        $reviews = DB::select("SELECT name , title , content , value , dateReview from `reviews` where product_id = ?;", [$data["product_id"]]);
        $row = count($reviews);
        if ($row > 0) {
            foreach ($reviews as $key => $value) {
                $total_review++;
                if ($value->value == 5) {
                    $five_star_review++;
                };
                if ($value->value == 4) {
                    $four_star_review++;
                };
                if ($value->value == 3) {
                    $three_star_review++;
                };
                if ($value->value == 2) {
                    $two_star_review++;
                };
                if ($value->value == 1) {
                    $one_star_review++;
                };
            }
            $avg = (
                ((5 * $five_star_review) + (4 * $four_star_review) + (3 * $three_star_review) + (2 * $two_star_review) + (1 * $one_star_review))
                /
                ($one_star_review + $two_star_review + $three_star_review + $four_star_review + $five_star_review)
            );
            $output = array(
                "total_review" => $total_review,
                "one_star_review" => $one_star_review,
                "two_star_review" => $two_star_review,
                "three_star_review" => $three_star_review,
                "four_star_review" => $four_star_review,
                "five_star_review" => $five_star_review,
                "product_id" => $data["product_id"],
                "avg" => round($avg, 2)
            );
            return response()->json($output);
        } else {
            $output = array(
                "total_review" => $total_review,
                "one_star_review" => $one_star_review,
                "two_star_review" => $two_star_review,
                "three_star_review" => $three_star_review,
                "four_star_review" => $four_star_review,
                "five_star_review" => $five_star_review,
                "product_id" => $data["product_id"],
                "avg" => 0
            );
            return response()->json($output);
        }
    }
}
