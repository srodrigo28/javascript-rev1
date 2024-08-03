const comUTC = new Date('2023-04-16T12:00:05.123Z');
const semUTC = new Date('2024-08-03T12:42:00.000');

console.log(" ======================= Condição 01 =======================")
console.log("Com UTC: " + semUTC);
console.log("Com UTC: " + semUTC.toUTCString());

console.log("\n\n======================= Condição 02 =======================")
console.log("Com UTC: " + comUTC);
console.log("Com UTC: " + comUTC.toUTCString());
