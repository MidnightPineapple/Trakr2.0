<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagPivotTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('division_tag', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('division_id');
            $table->primary(['tag_id', 'division_id']);
        });
        Schema::create('project_tag', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('project_id');
            $table->primary(['tag_id', 'project_id']);
        });
        Schema::create('client_tag', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('client_id');
            $table->primary(['tag_id', 'client_id']);
        });
        Schema::create('entry_tag', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('entry_id');
            $table->primary(['tag_id', 'entry_id']);
        });
        Schema::create('tag_task', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('task_id');
            $table->primary(['tag_id', 'task_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('division_tag');
        Schema::dropIfExists('project_tag');
        Schema::dropIfExists('client_tag');
        Schema::dropIfExists('entry_tag');
        Schema::dropIfExists('tag_task');
    }
}
