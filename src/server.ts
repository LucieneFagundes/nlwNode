import express, { Response, Request } from "express";
const app = express();

app.get('/teste' , (request, response) => {
    return response.send("Testando a rota GET");
});

app.post('/teste', (request, response) => {
    return response.send("Testando a rota POST");
});


// http://localhost:3000
app.listen(3000, () => console.log("Server is running... "));