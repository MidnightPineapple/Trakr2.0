<?php

namespace App\Traits;

trait HasNodeId {

    use DecodesNodeId;

    public static function findByNodeId($id) {
        $idArray = static::decodeNodeId($id);

        $explodedClassPath = explode("\\", get_called_class());
        $className = array_pop($explodedClassPath);

        if(array_key_exists($className, $idArray)) {
            $id = $idArray[$className];
            return static::find($id);
        }

        return null;
    }
    
}