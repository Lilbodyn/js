<?php

$inp = $_POST['ourForm_inp']

switch($inp) {
    case 'Гарри':
        echo 'Гриффиндор';
    break;
    case 'Гермиона':
     echo 'Ко мне в кабинет';
     break;
     default:
     echo 'Фу Магл';
}