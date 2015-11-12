<?php
include "index.html";
$string = file_get_contents("../test.json");

print "<script>";
print "var questions = {$string} ";
print "</script>";