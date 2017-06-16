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
