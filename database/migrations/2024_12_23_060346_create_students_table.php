<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('parent_id');
            $table->string('nis')->unique();
            $table->string('nik')->unique()->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->enum('gender', ['L', 'P'])->default('L');
            $table->string('address')->nullable();
            $table->string('born_in')->nullable();
            $table->timestamp('born_at')->nullable();
            $table->bigInteger('village_id');
            $table->string('district')->nullable();
            $table->string('postal_code')->nullable();
            $table->bigInteger('education_type_id');
            $table->enum('status', ['Aktif', 'Lulus', 'Dikeluarkan'])->default('Aktif')->nullable();
            $table->string('photo')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
