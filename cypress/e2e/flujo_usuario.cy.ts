describe("Flujo general de usuario no registrado", () => {
  it("1. Carga de lista de eventos", () => {
    cy.visit("/");
    cy.contains("Eventos").should("exist");
  });

  it("2. Búsqueda por palabra clave", () => {
    cy.get("input[placeholder='Buscar']").type("música");
    cy.contains(/música/i).should("exist");
  });

  it("3. Aplicación de filtro por categoría", () => {
    cy.get("[data-testid='filter-categoria']").click();
    cy.contains("Música").click();
    cy.contains(/Música/i).should("exist");
  });

  it("4. Entrar al detalle del evento", () => {
    cy.contains(/música/i).first().click();
    cy.contains("Descripción").should("exist");
  });

  it("5. Intentar guardar (debe pedir registro)", () => {
    cy.contains("Guardar").click();
    cy.contains("Debes registrarte").should("exist");
  });

  it("6. Ir al Dashboard y validar carga", () => {
    cy.contains("Dashboard").click();
    cy.url().should("include", "/dashboard");

    // Valida gráficas
    cy.contains("Categorías").should("exist");

    // Valida ranking
    cy.contains("Top 10").should("exist");
  });
});
