export class ParkTECclient {
    async getParkTECData(arg) {
        const rawResponse = await fetch("http://localhost/parkTEC/spaces?arg="+arg);
        const parsedResponse = await rawResponse.json();
        let a = new Map(parsedResponse)
        console.log(a)
        return a;
    }

    async postParkTECDataPT(plate) {
        const rawResponse = await fetch("http://localhost/parkTEC/reservations",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({placa: plate})
        });
        const parsedResponse = await rawResponse.json();
        let a = new Map(parsedResponse)
        console.log(a)
        return a;
    }
    async postParkTECDataPTdel(id) {
        const rawResponse = await fetch("http://localhost/parkTEC/reservations/"+id);
        const parsedResponse = await rawResponse.json();
        let a = new Map(parsedResponse)
        console.log(a)
        return a;
    }
}