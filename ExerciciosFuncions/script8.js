function monedasBilletes(enteiro) {
  const valores = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  for (const valor of valores) {
    if (enteiro >= valor) {
      let cantidade = Math.floor(enteiro / valor);

      let tipo = "";
      if (valor >= 5) {
        tipo = "billetes";
      } else {
        tipo = "monedas"
      }
      console.log(`${cantidade} ${tipo} de ${valor}`);
      enteiro = enteiro % valor;
    }
  }
}
monedasBilletes(555);