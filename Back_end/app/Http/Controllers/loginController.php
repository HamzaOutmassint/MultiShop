<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Login;
use Illuminate\Http\Request;

class loginController extends Controller
{
    function register(Request $request)
    {
        $userExist = Login::where("email", $request->email)->get();

        if (count($userExist) > 0) {
            $returnData = [
                "seccess" => false,
                "message" => "Email address '" . $request->email . "' already in use. try with another email",
            ];
            echo json_encode($returnData);
        } else {
            $user = new Login();
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->token = $user->generateToken();
            $user->save();

            $returnData = [
                "seccess" => true,
                "message" => "Registered successfully",
                "token" => $user->generateToken()
            ];
            echo json_encode($returnData);
        }
    }

    function login(Request $request)
    {
        $user = Login::where("email", $request->email)->where("password", $request->password)->get();

        if (count($user) > 0) {
            $returnData = [
                "seccess" => true,
                "message" => "You have successfully logged in",
                "token" => $user->value("token"),
                "First_name" => $user->value("first_name"),
                "Last_name" => $user->value("last_name"),
                "Email" => $user->value("email")
            ];
            echo json_encode($returnData);
        } else {
            $returnData = [
                "seccess" => false,
                "message" => "failed"
            ];
            echo json_encode($returnData);
        }
    }

    public function getCustomerInfo(Request $request){
        return Login::where("token" , $request->token)->get(["first_name","last_name","email","password"]);
    }

    public function updateFullNameOfCustomer(Request $request){
        $customer = Login::where("token" , $request->token)->first();

        if($customer){
            $customer->first_name = $request->first_name;
            $customer->last_name = $request->last_name;
            $customer->save();

            $returnData = [
                "seccess" => true ,
                "message" => "The name of the customer has been updated successfully.",
            ];
            echo json_encode($returnData);
        }else{
            $returnData = [
                "seccess" => false ,
                "message" => "Updating the name of the customer has failed.",
            ];
            echo json_encode($returnData);
        }
    }
    public function updatePassword(Request $request){
        $customer = Login::where("token" , $request->token)->first();

        if($customer){
            $customer->password = $request->password;
            $customer->save();

            $returnData = [
                "seccess" => true ,
                "message" => "The password of the customer has been updated successfully.",
            ];
            echo json_encode($returnData);
        }else{
            $returnData = [
                "seccess" => false ,
                "message" => "Updating the password of the customer has failed.",
            ];
            echo json_encode($returnData);
        }
    }
    public function updateEmail(Request $request){
        $customer = Login::where("token" , $request->token)->first();

        if($customer){
            $customer->email = $request->email;
            $customer->save();

            $returnData = [
                "seccess" => true ,
                "message" => "The email of the customer has been updated successfully.",
            ];
            echo json_encode($returnData);
        }else{
            $returnData = [
                "seccess" => false ,
                "message" => "Updating the email of the customer has failed.",
            ];
            echo json_encode($returnData);
        }
    }
    public function AddAddress(Request $request){
        $address = new Address();

        $address->full_name = $request->full_name;
        $address->user_address = $request->address;
        $address->city = $request->city;
        $address->country = $request->country;
        $address->phone = $request->phone;
        $address->postal_code = $request->postal_code;
        $address->state = $request->state;
        $address->token = $request->token;
        $address->save();

        $returnData = [
            "success" => true ,
            "message" => $request,
        ];
        echo json_encode($returnData);
    }
    public function getAddress(Request $request){
        return Address::where("token" , $request->token)->get();
    }
    public function updateAddress(Request $request){
        $address = Address::find($request->id);

        if($address){
            $address->full_name = $request->full_name;
            $address->user_address = $request->address;
            $address->city = $request->city;
            $address->country = $request->country;
            $address->phone = $request->phone;
            $address->postal_code = $request->postal_code;
            $address->state = $request->state;
            $address->token = $request->token;
            $address->save();

            $returnData = [
                "success" => true ,
                "message" => "the address is updated successfully",
            ];
            echo json_encode($returnData);
        }else{
            $returnData = [
                "success" => false ,
                "message" => "the address is not found",
            ];
            echo json_encode($returnData);
        }
    }
    public function deleteAddress(Request $request){
        $address = Address::where("id", $request->idAddress)->where("token",$request->token)->first();
        $address->delete();

        $returnData = [
            "success" => true ,
            "message" => "the address is deleted successfully",
        ];
        echo json_encode($returnData);
    }
}
