// Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
// 'mandarinas'];) , fai os seguintes apartados co método splice:
// Despois de realizar cada operación mostra por pantalla a lista de froitas do array
// separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe
// mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

// a. Elimina as mazás.

froitas.splice(1, 1);
console.log(froitas.join(', '));

// b. Engade laranxas e sandía detrás dos plátanos,.
froitas.splice(3, 0, 'laransa', 'sandía');
console.log(froitas.join(', '));

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
froitas.splice(1, 1, 'cereisa', 'nésperas');
console.log(froitas.join(', '));
