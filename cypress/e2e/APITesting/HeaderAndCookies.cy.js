describe("Cookies and headers",()=> {

    let authToken = null;

    before("Creating access token", ()=>{

        
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {'Content-Type': 'Application/json'},
            body:{
                clientName: "name",
                clientEmail: Math.random().toString(6).substring(2) + "@gmail.com"
            }
        })
        .then((response)=>{
            authToken = response.body.accessToken;
        });
    })

    it("Creating order", ()=>{

        
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'Application/json',
                Authorization: 'Bearer'+ authToken
                },
            
            body:{
                bookId: "123",
                customerName: "abc "
            }
        })
        .then((response)=>{
            expect(response.body).to.eq(201)
            expect(response.body.created).to.eq(true)
        });
    })
})