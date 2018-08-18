<?php 

namespace App\Traits;

trait DecodesNodeId {

    protected static function decodeNodeId($id)
    {
        $nodeIdComposition = base64_decode($id);
        $components = explode(":", $nodeIdComposition);
        $model = $components[0];
        $id = (int)$components[1];

        return array_merge(array( $model => $id ), compact("id", "model"));
    }

}