async function loggInn(event) {  // async brukes for når bruker await i funksjonen. 
    event.preventDefault(); // Forhindrer at siden refresher ved submit. Vanlig 

    const epost = document.querySelector('#epost').value; // Henter verdier fra login skjema
    const passord = document.querySelector('#passord').value;

    const response = await fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ epost, passord })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        window.location.href = "/beskyttet";
    } else {
        alert(result.message);
    };
}