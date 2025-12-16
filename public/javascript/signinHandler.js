async function singInn(event) {
    event.preventDefault();

    const id =  Math.floor(Math.random() * 1000000);
    const fornavn = document.querySelector('#fornavn').value;
    const etternavn = document.querySelector('#etternavn').value;
    const epost = document.querySelector('#epost').value;
    const tlf = document.querySelector('#tlf').value;
    const passord = document.querySelector('#passord').value;

    const response = await fetch('/signin', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ id, fornavn, etternavn, epost, tlf, passord })
    })

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        window.location.href = "/beskyttet";
    } else {
        alert(result.message);
    };
}