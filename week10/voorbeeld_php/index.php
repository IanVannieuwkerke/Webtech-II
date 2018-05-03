<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>voorbeeld 1</title>
</head>
<body>
    <h1>voorbeeld 1</h1>  
    <h2>De dag van vandaag</h2>  

        <?php

            // dit is een single line comment
            # single line comment in lumix stijl

            /**
             * 
             * 
             *  comment voor php!
             * 
             * 
             */

            echo "<strong>";
            echo date();
            echo "</strong>";


            echo "<br>";


            $i = 2;
            $j = 4.5;
            $k = $i + $j;

            echo $k;

            echo "<br>";

            var_dump($k);

            echo "<br>";

            echo "-----------------------------------------------";
            echo "<br>";

             // integer
             $myAge = 18;
            // floating point
             $someNumber = 2.56;
             // string
            $coolword = "bescheten";
            //boolean
            $isEverybodyHappy = true;
            // array
            $lostNumbers = [4, 8, 16, 23, 42];

             echo 'integer: '; var_dump($myAge); echo '<br>';
             echo 'floating: '; var_dump($someNumber); echo '<br>';
             echo 'strin: '; var_dump($coolword); echo '<br>';
             echo 'boolean: '; var_dump($isEverybodyHappy); echo '<br>';
             echo 'array: '; var_dump($lostNumbers); echo '<br>';



        ?>

    <script>
        //deze comentaar kan iedereen lezen
    </script>

</body>
</html>