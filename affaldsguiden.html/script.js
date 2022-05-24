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
    console.log("Affaldssortere du?: " + spg4);

    // Spg5
    const spg5 = document.querySelector('input[name="spg5"]:checked').value;
    console.log("Kunne du have brug for mere hjælp/vejledning til at affaldssortere?: " + spg5);

    // Spg6
    const spg6 = document.querySelector('input[name="spg6"]:checked').value;
    console.log("Hvis vi designede en app i samarbejde med miljøstyrelsen og Danmarks kommuner, hvor du ville kunne få hjælp til at affaldssortere i din hverdag, ville det så anvende den?: " + spg6);

    // Spg7
    const spg7 = document.querySelector('input[name="spg7"]:checked').value;
    console.log("Kunne du have lyst til at downloade denne app hvis du så den i App-store/Google-store?: " + spg7);

    // Spg8
    const spg8 = document.querySelector('input[name="spg8"]:checked').value;
    console.log("Vores app kommer til at have en funktion hvor du scanner affaldet du skal til og smide ud, ville du foretrække appen scannede stregkoden eller selve objektet?:  " + spg8);

    // Spg9
    const spg9 = document.getElementById("spg9tekst").value;
    console.log("Har du spørgsmål, forslag til design, funktioner mv. skal du være velkommen til at skrive dem her, det vil vi sætte stor pris på.: " + spg9)

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
