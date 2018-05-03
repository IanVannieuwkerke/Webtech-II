<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>voorbeeld 1</h1>
    <?php
    /**
     * maak een idex.php aam met daarin 5 variablelen
     * steek in elke variabele repectivelijk volgene datatypes
     * 
     * dump alle variabelen dmv var_dump
     * 
     * vb $myfavoriteNumber = 13
     */
    
     // integer
     $myAge = 18;
     // floating point
     $someNumber = 2.56;
     // string
     $coolword = "bescheten";
     //boolean
     $isEverybodyHappy = Yes;
     // array
     $lostNumbers = [4, 8, 16, 23, 42];

     var_dump($myAge);
     var_dump($someNumber);
     var_dump($coolword);
     var_dump($isEverybodyHappy);
     var_dump($lostNumbers);
     
     ?>
</body>
</html>