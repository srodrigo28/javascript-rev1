const data = new Date('2023-04-16T12:00:05.123Z'); // com utc

const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC'
})

const dateTimeFormat2 = new Intl.DateTimeFormat('pt-BR', {
    // dateStyle: 'full', 
    // timeStyle: 'full'

    
    // dateStyle: 'long', 
    // timeStyle: 'long',

    // dateStyle: 'medium', 
    // timeStyle: 'medium',
    
    dateStyle: 'short', 
    timeStyle: 'short',
})

const dataFormatada = dateTimeFormat2.format(data);

console.log(dataFormatada);