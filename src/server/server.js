import cors from "cors";
import express from "express";
import { searchParkingLot, searchParkingLots , deleteParkingLot, newParkingLot , 
    editParkingLot, 
    searchReservations,
    addReservation,
    deleteReservations} from "../components/ParkingLots.js"

var app = express()
app.use(express.json())
app.use(cors());

app.all('/', function(req, res, next)  {   
    // Set respons header (geen idee of dit compleet is)   
    res.header("Access-Control-Allow-Origin","");   
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");   
    // Set response contenttype   res.contentType('application/json');   
    if (req.get('Content-Type')=== 'application/json'){       
        next();   
    }else{       
        res.status(405).send('This API only accepts JSON!')   
    } 
});

app.get("/parkTEC/spaces", function (request, response){
    const name = request.query.arg;
    if(name === "free"){
        const result = searchParkingLots("free");
        response.send(result);
    }else if(name === "in-use"){
        const result = searchParkingLots("in-use");
        response.send(result);
    }else{
        response.send("Wrong!");
    }
});

app.get("/parkTEC/spaces/:id", function (request, response){
    const id = request.params.id;
    const result = searchParkingLot(id)
    response.send(result);
});

app.post("/parkTEC/spaces", function(request, response){
    const preferencial = request.body.esPreferencial;
    const result = newParkingLot(preferencial);
    response.send(result);
});

app.put("/parkTEC/spaces/:id", function (request, response){
    const id = request.params.id;
    const preferencial = request.body.esPreferencial;
    const result = editParkingLot(id, preferencial)
    response.send(result);
});

app.delete("/parkTEC/spaces/:id", function(request, response){
    const id = request.params.id;
    const result = deleteParkingLot(id);
    response.send(result);
});

app.get("/parkTEC/reservations", function(request, response){
    const result = searchReservations();
    response.send(result);
});

app.post("/parkTEC/reservations", function(request, response){
    const placa = request.body.placa;
    const result = addReservation(placa);
    response.send(result);
});

app.delete("/parkTEC/reservations/:id", function(request, response){
    const id = request.params.id;
    const result = deleteReservations(id);
    response.send(result);
});

var server = app.listen(80, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s",host,port);
})