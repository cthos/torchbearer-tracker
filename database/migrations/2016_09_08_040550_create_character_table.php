<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCharacterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('stock');
            $table->string('class');
            $table->integer('will');
            $table->integer('health');
            $table->integer('nature');
            $table->integer('max_nature');
            $table->integer('resources');
            $table->integer('circles');
            $table->integer('level');
            $table->json('extras'); // This is where enemy, parents, etc goes.
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
