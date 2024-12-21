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
        Schema::create('parent_profiles', function (Blueprint $table) {
            $table->id('kk');
            $table->unsignedBigInteger('main_id')->nullable();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->enum('parent_as', ['ayah', 'ibu'])->default('ayah');
            $table->string('nik')->unique();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->enum('gender', ['L','P'])->default('L');
            $table->string('card_address')->nullable();
            $table->string('domicile_address')->nullable();
            $table->foreignId('village_id')->constrained()->cascadeOnDelete();
            $table->foreignId('phone_id')->constrained()->cascadeOnDelete();
            $table->text('photo')->nullable();
            $table->timestamps();

            $table->foreign('main_id')->references('kk')->on('parent_profiles')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parent_profiles');
    }
};
