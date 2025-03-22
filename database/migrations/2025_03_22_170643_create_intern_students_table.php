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
        Schema::create('intern_students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id');
            $table->string('period');
            $table->date('start')->nullable();
            $table->date('end')->nullable();
            $table->foreignId('village_id');
            $table->string('address_duty')->nullable();
            $table->string('manager_name')->nullable();
            $table->string('manager_contact')->nullable();
            $table->enum('status', ['aktif', 'purna'])->default('aktif');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('intern_students');
    }
};
