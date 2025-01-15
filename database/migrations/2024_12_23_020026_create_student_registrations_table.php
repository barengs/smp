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
        Schema::create('student_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('reg_no')->nullable();
            $table->string('nik');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->enum('gender', ['L', 'P'])->default('L');
            $table->integer('last_formal_edu_id')->nullable();
            $table->integer('last_nonformal_edu_id')->nullable();
            $table->string('photo')->nullable();
            $table->integer('parent_id');
            $table->string('address')->nullable();
            $table->integer('village_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_registrations');
    }
};
