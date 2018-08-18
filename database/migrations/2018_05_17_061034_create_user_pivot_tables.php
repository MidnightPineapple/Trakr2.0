<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPivotTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_user', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('role_id');
            $table->primary(['user_id', 'role_id']);
        });
        Schema::create('task_user', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('task_id');
            // $table->float('rate'); // TODO: ADD PIVOT TABLE META AT SOME POINT
            $table->primary(['user_id', 'task_id']);
        });
        Schema::create('team_user', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('team_id');
            $table->primary(['user_id', 'team_id']);
        });
        Schema::create('project_user', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('project_id');
            $table->primary(['user_id', 'project_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('task_user');
        Schema::dropIfExists('team_user');
        Schema::dropIfExists('project_user');
    }
}
