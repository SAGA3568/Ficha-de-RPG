<?php

namespace App\Helper;

abstract class ObjectHydrator
{
    /**
     * @param array $content
     * @param object $input
     * @return object
     */
    public static function hydrate(array $content, object $input): object
    {
        foreach ($value as $key => $value) {
            if (property_exists($key, $key)) {
                $key->$key = $value;
            }
        }
        return $input;
    }
}
