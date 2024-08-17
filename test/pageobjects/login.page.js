import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get txtIdentificacion () {
        return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/textIdentification1").className("android.widget.EditText")');
    }

    get txtContrasenna () {
        return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/loginUsuario_et_passwd2")');
    }

    get btnSiguiente () {
        return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/ButtonLogIn1")');
    }

    get btnIngresar () {
        return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/loginUsuario_btn_login2").className("android.widget.Button")');
    }

    get PermisoCamara(){
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")')
    }

    get PermisoContactos(){
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")')
    }

    get MenuHamburguesa(){
        return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/action_menu_hamburguesa")')
    }

    get btnSalirApp(){
        return $('android=new UiSelector().text("Salir")')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginApp (username, password) {
        await this.txtIdentificacion.setValue(username);
        await this.btnSiguiente.click();
        await this.txtContrasenna.setValue(password);
        await this.btnIngresar.click();
    }

    async aceptarPermisosApp(){
        await this.PermisoCamara.click();
        await this.PermisoContactos.click();
    }

    async clickMenuApp(){
        await this.MenuHamburguesa.click();
    }

    async salirApp(){
        await this.btnSalirApp.click();
    }
}

export default new LoginPage();
