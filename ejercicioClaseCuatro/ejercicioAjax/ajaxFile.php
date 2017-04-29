<?php
sleep(8); //para notar la diferencia de async o async
if(isset($_GET["valor"]))
{
    echo "valor recuperado por GET: ".$_GET["valor"];
}
else if(isset($_POST["valor"]))
{
    echo "valor recuperado por POST: ".$_POST["valor"];
}

?>
