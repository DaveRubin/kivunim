<?php require_once 'vendor/autoload.php'; ?>
<?php require_once 'models/Form.php'; ?>
<?php $loader = new Twig_Loader_Filesystem('views/'); ?>
<?php
$twig = new Twig_Environment($loader);
$string = file_get_contents("koshi.json");
$json_a = json_decode($string, true);
$form = new Form($json_a);
?>
<?php echo $twig->render('page.twig', array('form' => $form )); ?>