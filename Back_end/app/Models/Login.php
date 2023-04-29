<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;

    public function generateToken()
    {
        $this->token = bin2hex(random_bytes(8));
        $this->save();

        return $this->token;
    }
}
