

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    let selectedTactic = null;

    menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            menuItems.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");

            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            let rect = this.getBoundingClientRect();
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            selectedTactic = this.innerText.trim();
        });

        item.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });

        item.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });
    });

    window.runFunction = function () {
        const traceText = document.getElementById("code").innerText.trim();

        if (!selectedTactic) {
            alert("Veuillez choisir une tactique avant d'exécuter.");
            return;
        }
        if (!traceText) {
            alert("Veuillez entrer une trace avant d'exécuter.");
            return;
        }

        fetch("http://localhost:3000/run-parser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tactic: selectedTactic, trace: traceText })
        })
        .then(response => response.json())
        .then(data => {
            //document.getElementById("output").innerText = data.result || "Erreur lors de l'exécution.";
            document.getElementById("output-frame").contentDocument.body.innerHTML = `<pre>${data.result || "Erreur lors de l'exécution."}</pre>`;

        })
        .catch(error => {
            document.getElementById("output").innerText = "Erreur lors de la connexion au serveur.";
        });
    };
});


