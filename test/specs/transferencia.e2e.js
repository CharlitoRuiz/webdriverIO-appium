import TransferenciaPage from '../pageobjects/transferencias.page.js'
import LoginPage from '../pageobjects/login.page.js'
import LoginData from '../../data/login.json'
import TransferenciasData from '../../data/transferencias.json'


describe('Transferencias en BNM App', () => {
    beforeEach(async() => {
        const usuario = LoginData.usuario,
        password = LoginData.password

        await LoginPage.loginApp(usuario,password)
        await LoginPage.aceptarPermisosApp();
    })
    it('Hacer una transferencia TFT', async () => {
        const montoTFT = TransferenciasData.montoTFT,
        conceptoTFT = TransferenciasData.conceptoTFT

        await TransferenciaPage.IngresarTransferencias();
        await TransferenciaPage.IngresarTransferenciasHaciaOtrosBancos();
        await TransferenciaPage.AceptarTerminosTransferencias();
        await TransferenciaPage.clickBotonContinuarTFT();

        // llenar los datos de la transferencia
        await TransferenciaPage.seleccionarCuentaCreditoTFT();
        await TransferenciaPage.seleccionarCuentaDebitoTFT();
        await TransferenciaPage.ingresarMontoTFT(montoTFT);
        await TransferenciaPage.ingresarConceptoTFT(conceptoTFT);
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
