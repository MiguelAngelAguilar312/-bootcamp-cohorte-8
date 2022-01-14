/*
Buenos dias 6 ---- 11
Buenas tarde 12 ---- 18
Buenas noches 19 ----- 23
Dejame dormir 0 ----- 5
*/

let hora = parseInt(prompt('Que hora tienes?'));



if((hora>=6) && (hora<=11)){
    console.log('Buenos dias')
    document.write('Buenos dias')
}
else if((hora>=12) && (hora<= 18)){
    console.log('Buenos tardes')
    document.write('Buenos tardes')
}
else if((hora>=19) && (hora<=23)){
    console.log('Buenas noches')
    document.write('Buenos noches')
}
else if((hora>=0) && (hora<=5)){
    console.log('Dejame dormir')
    document.write('Dejame dormir')
}
else if((hora>=24)){
    console.log('No existe')
    document.write('No existe')
}