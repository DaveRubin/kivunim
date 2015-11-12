<?php

//foreach ($_GET as $key => &$val){
//    print "<span>
//                {$key} : {$val}
//            </span><br>";
//}
$Rm_arr = array(1,2,3);
$Ri_arr = array(4,5,6);
$Rd_arr = array(8,9,10,11);

$V1_arr = array(7); //>4
$V2_arr = array(12); //<5

$Lp_arr = array(13,14,15);
$Ls_arr = array(16,17,18,19);
$Lo_arr = array(20,21,22);
$La_arr = array(23,24);

$Iu_arr = array(25,26,27);
$Ii_arr = array(28,29,30,31,32);
$Ie_arr = array(33,34);


$Rm = average($Rm_arr);
$Ri = average($Ri_arr);
$Rd = average($Rd_arr);
$Lp = average($Lp_arr);
$Ls = average($Ls_arr);
$Lo = average($Lo_arr);
$La = average($La_arr);
$Iu = average($Iu_arr);
$Ii = average($Ii_arr);
$Ie = average($Ie_arr);
$V1 = average($V1_arr);
$V2 = average($V2_arr);
print "<span>Rm is {$Rm}</span><br>";
print "<span>Ri is {$Ri}</span><br>";
print "<span>Rd is {$Rd}</span><br>";
print "<span>Lp is {$Lp}</span><br>";
print "<span>Ls is {$Ls}</span><br>";
print "<span>Lo is {$Lo}</span><br>";
print "<span>La is {$La}</span><br>";
print "<span>Iu is {$Iu}</span><br>";
print "<span>Ii is {$Ii}</span><br>";
print "<span>Ie is {$Ie}</span><br>";
print "<span>V1 is {$V1}</span><br>";
print "<span>V2 is {$V2}</span><br>";
print "<span>----------------------------------</span><br>";

//Readiness               (Rm+Ri+Rd)/3
//Lack of Information  (Lp+Ls+Lo+La)/4
//Inconsistent Information (Iu+Ii+Ie)/3

$Readiness = ($Rm + $Ri + $Rd)/3;
$LackOfInformation = ($Lp + $Ls+ $Lo + $La)/4;
$Readiness = ($Iu + $Ii + $Ie )/3;
print "<span>----------------------------------</span><br>";
print "<span>Readiness is {$Readiness}</span><br>";
print "<span>Lack of Information is {$LackOfInformation}</span><br>";
print "<span>Inconsistent is {$Readiness}</span><br>";

function average($arr){
    $sum = 0;
    for ($x = 0; $x< count($arr); $x++) {
        $index = $arr[$x];
        //print "<span> $arr[$x] : $_GET[$index] </span><br>";
        $sum+= $_GET[$arr[$x]];
    }
    $average = $sum / count($arr);
    return $average;
}

//
//Rm-Lack of motivation   1-3
//Ri-General indecisiveness 4-6
//7 - validity >4
//Rd-Dysfunctional beliefs 8-11
//12 - validity <5
//Lp-The stages of the cdm process 13-15
//Ls-Self 16-19
//Lo-Occupations 20-22
//La-Ways of obtaining additional inform. 23-24
//Iu-Unreliable information 25-27
//Ii-Internal conflicts 28-32
//Ie-External conflicts 33-34
//
//Readiness               (Rm+Ri+Rd)/3
//Lack of Information  (Lp+Ls+Lo+La)/4
//Inconsistent Information (Iu+Ii+Ie)/3
//
//Total     Mean of the ten scales --
//                          (Rm+Ri+Rd+Lp+Ls+Lo+La+Iu+Ii+Ie)/10