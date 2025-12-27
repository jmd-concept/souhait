
const imageEvent1 = document.getElementById("preload-image-1")
const imageEvent2 = document.getElementById("preload-image-2")
const boxHidden = document.getElementById('hidden');

setTimeout(() => {
    imageEvent1.classList.add("hidden");
    imageEvent2.classList.remove("hidden");

    if (imageEvent1) {
        setTimeout(() => {
            imageEvent2.classList.add("hidden");
            boxHidden.classList.remove("hidden");
            boxHidden.classList.add("flex");
        }, 8000);
    }
}, 5000);

const formulaire = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Version 1 : Réinitialisation après soumission
formulaire.addEventListener('submit', function (e) {
    // Le formulaire sera envoyé normalement à Formspree
    // Après l'envoi, on peut réinitialiser les champs
    setTimeout(() => {
        nom.value = "";
        email.value = "";
        message.value = "";
    }, 100);
});

/* // Version alternative : Avec prévention d'envoi pour traitement supplémentaire
 formulaire.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi immédiat

// Ici vous pouvez ajouter une validation supplémentaire
if (nom.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Veuillez remplir tous les champs obligatoires.');
return;
     }

// Validation d'email basique
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.value)) {
    alert('Veuillez entrer une adresse email valide.');
return;
     }

// Si tout est valide, on soumet le formulaire
this.submit();

// Réinitialisation après envoi
nom.value = "";
email.value = "";
message.value = "";
 });




/* paste this in verbatim */
/*
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments); };

/* customize formbutton here*/
/*
formbutton("create", {
    action: "https://formspree.io/https://formspree.io/f/xaqywvok",
    title: "Comment pouvons-nous vous aider?",
    fields: [
        {
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "example@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "Que pensez-vous ?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "darkred"
        },
        fields: {
            borderBottom: "1px solid gray"
        },
        button: {
            color: "red",
            backgroundColor: "darkred"
        }
    },
    initiallyVisible: true
});
*/