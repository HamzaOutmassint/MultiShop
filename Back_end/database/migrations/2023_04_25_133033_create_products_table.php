<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id("product_id");
            $table->string("product_image");
            $table->decimal("product_price",7,2);
            $table->decimal("old_price",7,2);
            $table->text("description");
            $table->string("product_name");
            $table->integer("favorite_product");
            $table->string("status");
            $table->string("categorie");
            $table->string("size");
            $table->integer("product_quantity");
            $table->string("department");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
