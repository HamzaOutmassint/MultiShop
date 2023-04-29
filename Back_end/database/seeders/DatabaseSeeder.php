<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\Product::factory()->create([
            "product_image" => "jacket-3.jpg",
            "product_price" => 100.00,
            "old_price" => 150.00,
            "description" => "EKLENTSON Jackets for Men Thick Thermal Winter Fleece Lined Lapel Cargo Jackets",
            "product_name" => "Jacket",
            "favorite_product" => 0,
            "status" => "out of stock",
            "categorie" => "men",
            "size" => "xl",
            "product_quantity" => 1,
            "department" => "winter"
        ]);
        \App\Models\Product::factory()->create([
            "product_image" => "clothes-1.jpg",
            "product_price" => 120.00,
            "old_price" => 170.00,
            "description" => "nice sweetshirt for mans and jdshs sjdhshd sjdhjsh",
            "product_name" => "Sweetshirt",
            "favorite_product" => 0,
            "status" => "in stock",
            "categorie" => "women",
            "size" => "xl",
            "product_quantity" => 1,
            "department" => "summer"
        ]);
    }
}
