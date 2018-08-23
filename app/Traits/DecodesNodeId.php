<?php 

namespace App\Traits;

trait DecodesNodeId {

    protected static function decodeNodeId($id)
    {
        $nodeIdComposition = base64_decode($id);
        $components = explode(":", $nodeIdComposition);
        $model = $components[0];
        $id = $components[1];
        if(is_numeric($id)) {
            $id = (int) $id;
        }

        return array_merge(array( $model => $id ), compact("id", "model"));
    }

}