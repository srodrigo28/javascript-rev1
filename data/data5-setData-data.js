const data = new Date('2023-04-16T12:00:05.123Z')
console.log("\n \n  Data original: " + data + "\n\n")

// alterando data
data.setFullYear(2024)
data.setMonth(8)+1
data.setDate(8);

// alterando hora
data.setHours(13, 21, 10)
data.setMinutes(40)

console.log(" Data modificada: " + data)