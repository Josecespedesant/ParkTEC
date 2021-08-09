//Creando Map
export const parkingLots = new Map();
//Rellenando el map
for(var i = 0; i<=25;i++){
        //[Placa (0 por default),
        //hora de entrada (str vacío por default),
        //disponiblidad de espacio,
        //esPreferencial (0 no, 1 si)]
    let infoSpace = [0,"","free",0]  
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
        return parkingLots.get(index);
    }else{
        return "No se encuentra dicho parqueo";
    }
}

export const newParkingLot = (pref)=>{
    if(pref === 0 || pref === 1){
        const newIndex = parkingLots.size + 1;
        let infoSpace = [0,"","free", pref];
        parkingLots.set(newIndex, infoSpace);
        return "Se ha agregado el espacio ".concat(newIndex); 
    }else{
        
        return "El parámetro preferencial debe ser un 0 (no) o un 1 (si)"
    }
} 
export const editParkingLot = (index, pref)=>{
    if(parkingLots.has(parseInt(index)) && parkingLots.get(parseInt(index))[0] === 0){
        if(pref === 0 || pref === 1){
            let infoSpace = [0,"","free", pref];
            parkingLots.set(parseInt(index), infoSpace);
            return "Se ha editado el espacio ".concat(parseInt(index)); 
        }else{
            return "El parámetro preferencial debe ser un 0 (no) o un 1 (si)"
        }
    }else{
        return "No se encuentra dicho parqueo"
    }
    
} 
export const deleteParkingLot = (arg)=>{
    const index = parseInt(arg);
    if(parkingLots.has(index) && parkingLots.get(index)[0] === 0){
        parkingLots.delete(index);
        return "Se ha borrado el parqueo en la posición ".concat(arg);
    }else{
        return "No se encuentra dicho parqueo";
    }
}

export const searchReservations = ()=>{
    let specifiedLots = [...parkingLots.entries()]
            .filter(({ 1: v }) => v[2] === "in-use");
    return specifiedLots;
}

export const addReservation = (arg)=>{
    for(let i = 0; i<parkingLots.size; i++){
        if(parkingLots.get(i)[0] === 0){
            let infoSpace = parkingLots.get(i);
            infoSpace[0] = arg;
            var newDate = new Date().toLocaleTimeString();
            infoSpace[1] = newDate;
            infoSpace[2] = "in-use";
            return "Espacio reservado";
        }else{
            return "No hay espacios disponibles";
        }

    }
}

export const deleteReservations = (arg)=>{
    const infoSpace  = parkingLots.get(parseInt(arg));
    if(infoSpace[2] === "in-use"){
        infoSpace[0] = 0;
        infoSpace[1] = "";
        infoSpace[2] = "free";
        return "Reservación eliminada";
    }else{
        return "El espacio no tenía una reservación";
    }
    
}
