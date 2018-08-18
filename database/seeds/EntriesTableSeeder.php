<?php

use Illuminate\Database\Seeder;

class EntriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $taskChunks = App\Task::all()->chunk(100);
        foreach( $taskChunks as $chunk ) {
            $chunk->each( function($t) {
                $taskMembers = $t->users->pluck('id')->toArray(); 
                $taskId = $t->id;
                if(count($taskMembers)) {
                    factory(App\Entry::class, rand(1,2))->make()->each( function($e) use ($taskMembers, $taskId) {
                        $entryAuthor = $taskMembers[rand(0,count($taskMembers) - 1)];
                        $e->user()->associate($entryAuthor);
                        $e->task()->associate($taskId);
                        $e->save();
                    });
                }
            });
        }
    }
}
