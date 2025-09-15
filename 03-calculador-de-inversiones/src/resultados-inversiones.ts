// Usa este código como ayuda
// Por ejemplo, puedes integrarlo a un servicio o a un componente
// Puedes necesitar modificarlo, dependiendo dónde y cómo lo uses

function calcularResultadosInversion() {
  const datosAnuales = [];
  let valorInversion = inversionInicial;

  for (let i = 0; i < duracion; i++) {
    const anio = i + 1;
    const interesGanadoEnAnio = valorInversion * (rendimientoEsperado / 100);
    valorInversion += interesGanadoEnAnio + inversionAnual;
    const interesTotal =
      valorInversion - inversionAnual * anio - inversionInicial;
    datosAnuales.push({
      anio: anio,
      interes: interesGanadoEnAnio,
      valorFinalAnio: valorInversion,
      inversionAnual: inversionAnual,
      interesTotal: interesTotal,
      montoTotalInvertido: inversionInicial + inversionAnual * anio,
    });
  }

  return datosAnuales;
}
