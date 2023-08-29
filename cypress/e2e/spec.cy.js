describe('collect prices', () => {
  it('sales department', () => {
    cy.visit("https://www.automationteststore.com/");
    let sumOldPrices = 0;
    let sumNewPrices = 0;

    
    cy.get('#special > .container-fluid').find('.pricenew').each(($new_price) => {
      let newPrice = parseFloat($new_price.text().replace("$", ""));
      sumNewPrices += newPrice;
      cy.log(sumNewPrices)
    });

    cy.get('#special > .container-fluid').find('.priceold').each(($old_price) => {
      let oldPrice = parseFloat($old_price.text().replace("$", ""));
      sumOldPrices += oldPrice;
      cy.log(sumOldPrices)
    }).then(() => {
      
      alert(`Hey, the sum of the old prices is $${sumOldPrices}, and the sum of the new prices is $${sumNewPrices}.`);
      
      
    });
  });
});
