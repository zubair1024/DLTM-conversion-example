const codes = require('@esri/proj-codes');
const proj4 = require('proj4');

const FROM_CRS = codes.lookup(4326);
const TO_CRS = codes.lookup(3997);

const getDLTMCoordinates = (lat, lng) => {
  const [x, y] = proj4(FROM_CRS.wkt, TO_CRS.wkt, [lat, lng]);
  return { x, y };
};

console.log(getDLTMCoordinates(25, 55));
