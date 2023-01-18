describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=itemlistcomponent--primary&args=items;')
  );
  it('should render the component', () => {
    cy.get('happyorg-item-list').should('exist');
  });
});
