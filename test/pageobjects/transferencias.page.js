import { $ } from '@wdio/globals'
import Page from './page.js';

class TransferenciaPage extends Page {
  get menuTransferencias () {
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/imv_transferencias")');
  }
  get SubmenuOtrosBancos () {
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/layoutMenuItem").instance(1)')
  }
  get btnEnviarFondos(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/btn_hacia_otros")')
  }
  get chkAceptarCondiciones(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/switch_acepto")')
  }
  get btnContinuarTFT(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/btn_continuar")')
  }
  // ==== Seleccionar cuenta debito TFT ====
  get cmbCuentaCreditoTFT(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/sel_cuenta_acreditar")')
  }
  get CuentaCreditoTFT(){
    return $('android=new UiSelector().className("android.widget.LinearLayout").instance(6)')
  }

  // ==== Seleccionar cuenta debito TFT ====
  get cmbCuentaDebitarTFT(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/sel_cuenta_debitar")')
  }
  get cuentaDebitoTFT(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/consultas_cuenta_debitar_layout").instance(0)')
  }

  get txtMonto(){
    return $('android=new UiSelector().text("Monto a transferir")')
  }
  get conceptoTFT(){
    return $('android=new UiSelector().text("Concepto")')
  }

  get tituloConfirmacionTFT(){
    return $('android=new UiSelector().resourceId("cr.fi.bncr.bnmovil.bncr:id/lblCurrentTran")')
  }
  get checkListo(){
    return $('android=new UiSelector().className("android.widget.ImageView").instance(5)')
  }

  // Metodo para transferencias TFT
  async IngresarTransferencias () {
    await this.menuTransferencias.click();
  }
  async IngresarTransferenciasHaciaOtrosBancos () {
    await this.SubmenuOtrosBancos.click();
    await this.btnEnviarFondos.click();
  }
  async AceptarTerminosTransferencias () {
    await this.chkAceptarCondiciones.click();
  }
  async clickBotonContinuarTFT(){
    await this.btnContinuarTFT.click();
  }
  async seleccionarCuentaCreditoTFT(){
    await this.cmbCuentaCreditoTFT.click();
    await this.CuentaCreditoTFT.click();
  }
  async seleccionarCuentaDebitoTFT(){
    await this.cmbCuentaDebitarTFT.click();
    await this.cuentaDebitoTFT.click();
  }
  async ingresarMontoTFT(){
    await this.txtMonto.setValue("1000");
  }
  async ingresarConceptoTFT(concepto){
    await this.conceptoTFT.setValue(concepto);
  }
}

export default new TransferenciaPage();