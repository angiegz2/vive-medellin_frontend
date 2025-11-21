describe("Validación de acceso para usuario no autenticado", () => {
  it("Puede ver lista de eventos sin autenticarse", () => {
    cy.visit("/");
    cy.contains("Eventos").should("exist");
  });

  it("NO puede guardar eventos", () => {
    cy.contains("Guardar").click();
    cy.contains("Debes registrarte").should("exist");
  });

  it("NO puede registrarse a eventos", () => {
    cy.contains("Ver más").first().click();
    cy.contains("Registrarme").click();
    cy.contains("Debes iniciar sesión").should("exist");
  });

  it("Puede ver información básica del evento", () => {
    cy.contains("Descripción").should("exist");
    cy.contains("Guardar").should("exist");
  });
});
