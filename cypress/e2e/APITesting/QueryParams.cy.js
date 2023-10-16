describe("API testing", ()=>{
    
    it("Passing Query Parameters", ()=> {

        const queryParam = {page:2};
         
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            qs: queryParam
        })
        .then((response) => {
            expect(response.status).to.equals(201)
            // expect(response.body.page).to.eq(2)
            // expect(response.body.data).has.length(6)

            expect(response.body.data[0]).have.property('id', 7);
        })
    })
})