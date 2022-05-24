function indsendSvar(){
    // Hiv fat i elementerne via Id
    const serviceID = "service_m8dt1wy";
    const templateID = "template_cmyz9mo";
    const userID = "RZulrk_SwNVD9SSvu";

    // Spg1
    const spg1 = document.querySelector('input[name="koen"]:checked').value;
    console.log("Køn: " + spg1);

    // Spg2
    const spg2 = document.getElementById("alder").value;
    console.log("Alder: " + spg2);

    // Spg3
    const spg3 = document.querySelector('input[name="job"]:checked').value;
    console.log("Beskæftigelse: " + spg3);

    // Spg4
    const spg4 = document.querySelector('input[name="spg4"]:checked').value;
    console.log("Ved du hvad Datatilsynet er?: " + spg4);

    // Spg5
    const spg5 = document.querySelector('input[name="spg5"]:checked').value;
    console.log("Ved du hvad GDPR er?: " + spg5);

    // Spg6
    const spg6 = document.querySelector('input[name="spg6"]:checked').value;
    console.log("Har du været udsat for at dine oplysninger er blevet videregivet mod din vilje?: " + spg6);

    // Spg7
    const spg7 = document.querySelector('input[name="spg7"]:checked').value;
    console.log("Har du fået delt et billede offentligt mod din vilje?: " + spg7);

    // Spg8
    const spg8 = document.querySelector('input[name="spg8"]:checked').value;
    console.log("Synes du at der bliver sat nok fokus på GDPR reglerne?:  " + spg8);

    // Spg9
    const spg9 = document.getElementById("spg9tekst").value;
    console.log("Hvad kunne der gøres for at danskerne bliver mere opmærksomme på GDPR?: " + spg9)

    // Lav objekt med alle svar
    const svarFraSkema = {
        spg1: spg1,
        spg2: spg2,
        spg3: spg3,
        spg4: spg4,
        spg5: spg5,
        spg6: spg6,
        spg7: spg7,
        spg8: spg8,
        spg9: spg9
    }

    // Connect til EmailJS
    emailjs.send(serviceID, templateID, svarFraSkema, userID);

    // Giv alert når man har svaret
    alert("Tak for dine svar!");

    // Gå op til toppen når man har trykket send
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
