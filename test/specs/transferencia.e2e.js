import TransferenciaPage from '../pageobjects/transferencias.page.js'
import LoginPage from '../pageobjects/login.page.js'

describe('Transferencias en BNM App', () => {
    beforeEach(async() => {
        await LoginPage.loginApp('503260547','zxcv1234')
        await LoginPage.aceptarPermisosApp();
    })
    it('Hacer una transferencia TFT', async () => {
        await TransferenciaPage.IngresarTransferencias();
        await TransferenciaPage.IngresarTransferenciasHaciaOtrosBancos();
        await TransferenciaPage.AceptarTerminosTransferencias();
        await TransferenciaPage.clickBotonContinuarTFT();

        // llenar los datos de la transferencia
        await TransferenciaPage.seleccionarCuentaCreditoTFT();
        await TransferenciaPage.seleccionarCuentaDebitoTFT();
        await TransferenciaPage.ingresarMontoTFT();
        await TransferenciaPage.ingresarConceptoTFT("E021 prueba de auto");
        await TransferenciaPage.clickBotonContinuarTFT();

        // pantalla confirmacion
        await expect(TransferenciaPage.tituloConfirmacionTFT).toHaveText("Confirmación enviar fondos")
        await TransferenciaPage.clickBotonContinuarTFT();
        
        // pantalla procesada
        await expect(TransferenciaPage.checkListo).toExist()
        
    });
    afterEach(async() => {
        await LoginPage.clickMenuApp();
        await LoginPage.salirApp();
    });
});
