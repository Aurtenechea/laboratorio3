<?php
class HomeController
{
    public function actionIndex($id){

        $user = User::find($id);

        /* response se puede usar porque desde el index fue
        incluida (y este archivo tamb).
        Al Response se le pueden pasar parametros que pueden ser usados en
        las vistas como variables del nombre de la clave. */
        Response::render('home', [
                                'name' => $user->name,
                                'age' => $user->age,
                                'email'=> $user->email
                            ]);
    }

    public function actionLogin(){
        Response::render('login', []);
    }
    
    public function actionVerify(){
        /*  se deberia hacer uso de la clase user y buscar el usuario en la base
            de datos. Verificar la contrasena y luego responder el objeto json. */
            session_start();

            if( isset($_POST["usuario"]) && isset($_POST["pass"]) ){
                $user = new stdClass();
                $user->loged_in = false;
                $user->name =  $_POST['usuario'];

                $_SESSION["loged_in"] = false;
                $_SESSION["name"] = $_POST['usuario'];
                // $_SESSION["email"] = $_POST['email'];

            	if( $_POST["usuario"] == "admin" &&  $_POST["pass"]== "admin"){
                    $user->loged_in = true;
                    $_SESSION["loged_in"] = true;
                }

                $userJson = json_encode($user);
                echo $userJson;
            }
    }

    public function actionConfidency(){
        session_start();

        if( !isset($_SESSION['loged_in']) || !$_SESSION['loged_in']){
            header("location:/home/index/1");
        }
        Response::render('confidency', []);
    }

    public function actionAbout(){
        echo "Hola desde el about";
    }
}
