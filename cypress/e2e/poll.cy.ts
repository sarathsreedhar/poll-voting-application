/// <reference types ="cypress"/>

describe('API testing', () => {
  it('We have a active API for getting list of Question', () => {
    cy.request(`https://polls.apiblueprint.org/questions`).then((response) => {
      expect(response.body).to.be.a('array')
    })
  })

  it('We have a active API for getting Questions Details', () => {
    cy.request(`https://polls.apiblueprint.org/questions/19`).then((response) => {
      expect(response.body).to.have.property('question')
    })
  })
})

describe('Index page', () => {
  it('We have loaded the page index page', () => {
    cy.visit('/')
  })

  it('We have loaded  title', () => {
    cy.get('[data-testid="question-title"]').should('exist')
  })
})

describe('Question List  Component', () => {
  it('loading mock data for testing', () => {
    cy.fixture('questionList.json').as('questions')

    it('We have tested questions component', () => {
      cy.get('@questions').then(() => {
        cy.visit('/')
        it('Loaded question box', () => {
          cy.get('[data-testid="question-box"]').should('have.length', 20)
        })
        it('Loaded question box title', () => {
          cy.get('[data-testid="question-box-title"]').should('have.length', 20)
        })
        it('Loaded question box', () => {
          cy.get('[data-testid="question-box-choice"]').eq(1).should('have.length', 4)
        })
      })
    })
  })
})

describe('Question details page', () => {
  it('We have loaded the Question details page', () => {
    cy.visit('/questions/19')
  })

  it('We have loaded Question details page title', () => {
    cy.get('[data-testid="question-details-title"]').should('exist')
  })
})

describe('Question Detail Page Component', () => {
  it('loading mock data for testing', () => {
    cy.fixture('questionDetail.json').as('questionDetail')
    cy.get('@questionDetail').then(() => {
      cy.visit(`/questions/19`)

      it('Loaded question box', () => {
        cy.get('[data-testid="poll-box-choice"]').should('have.length', 4)
      })
    })
  })
})
