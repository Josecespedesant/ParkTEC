export const parkingLots = new Map();

for(var i = 0; i<=25;i++){
        //[Placa (0 por default),
        //hora de entrada (str vacío por default),
        //disponiblidad de espacio]
    let infoSpace = [0,"","free"]  
    parkingLots.set(i,infoSpace);
}

export const searchParkingLots = (arg)=>{
    let specifiedLots = [...parkingLots.entries()]
            .filter(({ 1: v }) => v[2] === arg);
    return specifiedLots;
}

export const searchParkingLot = (arg)=>{
    const index = parseInt(arg);
    if(parkingLots.has(index)){
        return parkingLots.get(index)[2];
    }else{
        return "No se encuentra dicho parqueo";
    }
}