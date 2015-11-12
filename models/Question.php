<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 14/09/2015
 * Time: 12:55
 */

class Question {
    public function __construct($data) {
        $this->name = $data["name"];
        $this->text = $data["text"];
    }

} 