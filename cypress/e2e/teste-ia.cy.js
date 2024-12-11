describe('API Test - Listar Clínicas', () => {
    it('Deve retornar uma lista de clínicas com status 200', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('api_clinica'),
        }).then((response) => {
            // Verifica se o status da resposta é 200
            expect(response.status).to.eq(200);

            // Verifica se o corpo da resposta é um array
            expect(response.body).to.be.an('array');

            expect(response.body.length).to.be.greaterThan(0); // Substitua pelos campos reais da entidade Clínica
        });
    });
});

