<?php

use Illuminate\Database\Seeder; 

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\Team::class, 10)->create()->each( function($t) {

            $userIds = App\User::all()->pluck("id");
            $memberIds = [];
            for($i=0; $i<rand(5,10); $i++) {
                array_push($memberIds, $userIds->pull(rand(0,count($userIds))));
                $userIds = $userIds->shuffle();
                // BUG: this shouldn't be able to put null values into memberIds array, but it does...
            }
            $memberIds = array_filter($memberIds);

            $t->users()->attach($memberIds);

            $t->templates()->saveMany(factory(App\Template::class,rand(1,4))->make());
            $t->roles()->saveMany(factory(App\Role::class,rand(1,5))->make()); // TODO: attach permissions
            $t->invitations()->saveMany(factory(App\Invitation::class, rand(1,5))->make());

            factory(App\Client::class, rand(5,14))->make()->each( function($c) use ($t) {
                $t->clients()->save($c);
                factory(App\Division::class, rand(1,5))->make()->each( function($d) use ($c) {
                    $c->divisions()->save($d);
                    factory(App\Project::class, rand(1,5))->make()->each( function($p) use ($d) {
                        $d->projects()->save($p);
                        $projectMembers = $p->division->client->team->users->pluck("id")->filter( function() {
                            return rand(1,100) > 50;
                        });
                        $p->users()->attach($projectMembers);
                        $tasks = factory(App\Task::class, rand(5,10))->make();
                        $p->tasks()->saveMany($tasks);
                        $tasks->each( function($t) use ($p) {
                            $taskMembers = $p->users->filter( function() { return rand(1,100) < 31; });
                            $t->users()->attach($taskMembers);
                        });
                    });
                });
            });



        });
    }
}
