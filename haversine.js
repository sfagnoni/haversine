/**
 * Calcula la distancia en kilómetros entre dos puntos geográficos usando la fórmula de Haversine.
 *
 * @param {number} lat1 - Latitud del primer punto en grados decimales.
 * @param {number} lon1 - Longitud del primer punto en grados decimales.
 * @param {number} lat2 - Latitud del segundo punto en grados decimales.
 * @param {number} lon2 - Longitud del segundo punto en grados decimales.
 * @returns {number} La distancia entre los dos puntos en kilómetros.
 */
const calcularDistanciaHaversine = (lat1, lon1, lat2, lon2) => {
  // Radio promedio de la Tierra en kilómetros.
  const R = 6371;

  // Diferencia de latitudes y longitudes en radianes.
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  // Convertir las latitudes originales a radianes.
  const lat1Rad = lat1 * (Math.PI / 180);
  const lat2Rad = lat2 * (Math.PI / 180);

  // Parte 'a' de la fórmula de Haversine.
  // a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  // Parte 'c' de la fórmula de Haversine.
  // c = 2 ⋅ atan2(√a, √(1−a))
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distancia final.
  // d = R ⋅ c
  const distancia = R * c;

  return distancia;
};


export default calcularDistanciaHaversine;
