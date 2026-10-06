const gameEvents = new Map([
[17, "GOAL"],
[36, "Substitution"],
[47, "GOAL"],
[61, "Substitution"],
[64, "Yellow card"],
[69, "Red card"],
[70, "Substitution"],
[72, "Substitution"],
[76, "GOAL"],
[80, "GOAL"],
[92, "Yellow card"],
]);

const eventosSet = new Set();

for (const [key,value] of gameEvents) {
    eventosSet.add(value);
}
const eventos = [...eventosSet];

console.log(eventos);


for (const [key,value] of gameEvents) {
    if(key < 45){
        console.log(`[PRIMEIRA PARTE] ${key}: ${value}`);
    }else{
        console.log(`[SEGUNDA PARTE] ${key}: ${value}`);
        
    }
}