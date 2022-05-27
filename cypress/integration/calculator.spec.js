//http://127.0.0.1:5501/index.html


//test or it

describe("should display the calculator",()=>{
  it ("should show the calculator on the screen",()=>{

  })
})

it("should show the calculator on the screen", () => {
  //arrange -> get things ready
  cy.visit("http://127.0.0.1:5501/index.html")
  //act -> doing it 
  // assert -> seeing if it is what you want it to be
  //pass in a css selector
  //combine act + assert
  cy.get(".calculator").should("exist");
});

//
it("should show all of the 19 buttons", () => {
 
  cy.visit("http://127.0.0.1:5501/index.html")

  cy.get("button").should("have.length",19);
});
//do something  -> simultale a user

beforeEach(() => {
  cy.visit("/");
});

describe("should perform addition", () => {
  it ("should calculate single digit addition, 7 + 8 = 15", () => {

  cy.visit("http://127.0.0.1:5501/index.html");

  cy.get("#button-seven").click();

  cy.get ("#button-plus").click();

  cy.get("#button-eight").click();
  });
});

describe("should perform abstraction", () => {
  it ("should calculate single digit substraction, 9 - 8 = 2", () => {

  cy.visit("/");

  cy.get("#button-nine").click();

  cy.get ("#button-minus").click();

  cy.get("#button-eight").click();
  });
});

describe("should perform multiplication", () => {
  it ("should calculate single digit multiplication, 7 x 8 = 15", () => {

  cy.visit("http://127.0.0.1:5501/index.html");

  cy.get("#button-seven").click();

  cy.get ("#button-multiply").click();

  cy.get("#button-eight").click();[]
  });
});

describe("should perform division", () => {
  it ("should calculate single digit division, 9/3 = 3", () => {

  cy.visit("http://127.0.0.1:5501/index.html");

  cy.get("#button-nine").click();

  cy.get ("#button-division").click();

  cy.get("#button-three").click();
  });
});

describe("should perform addition", () => {
  it ("should calculate two digits addition, 11 + 20 = 35", () => {

  cy.visit("http://127.0.0.1:5501/index.html");

  cy.get("#button-one").click();
  cy.get("#button-one").click();


  cy.get ("#button-plus").click();

  cy.get("#button-two").click();
  cy.get("#button-zero").click();
  });
});

