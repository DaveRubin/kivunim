<?php
require_once 'Question.php';
class Form {
    public function __construct($data) {

        $this->name = $data["name"];
        $this->questions = array();
        foreach( $data["questions"] as $q) {

            array_push($this->questions, new Question($q));
        }
    }
} 