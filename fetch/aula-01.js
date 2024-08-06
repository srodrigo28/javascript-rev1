
let url = "https://prmeaxkbaquohnzvyrwr.supabase.co/rest/v1/rpc/total_contratos"
let body = { "p_final": "value", "p_inicial": "value" }
let apiKey

fetch(url, {
    method: 'POST',
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybWVheGtiYXF1b2huenZ5cndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NTc3MTgsImV4cCI6MjAzNTMzMzcxOH0.tCIyQFuVUuzTmYkTUA7RpbwIfpAkcbTD6yEct02XwrY'
    },
})
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
