<?php

namespace App\Helper;

class ObjectHydrate
{
    public static function hydrate(array $content, object $input): object
    {
        foreach ($content as $key => $value) {
            $setter = 'set' . ucfirst($key);
            if (method_exists($input, $setter)) {
                $input->$setter($value);
            }
        }
        return $input;
    }
}