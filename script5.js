const questions = [
  {
    question: "1. Di fronte a una situazione tesa con una persona aggressiva, cosa fai per primo?",
    options: ["Reagisco con forza per controllarla", "Mantengo la calma e cerco di de-escalare verbalmente", "Chiamo subito rinforzi", "Aspetto che sia lei a fare la prima mossa"],
    answer: 1
  },
  {
    question: "2. Un collega ti chiede di coprire un comportamento non conforme alle regole. Come reagisci?",
    options: ["Lo copro, ma gli dico di non farlo più", "Lo segnalo secondo le procedure interne", "Lo ignoro, non sono affari miei", "Ne parlo solo con altri colleghi"],
    answer: 1
  },
  {
    question: "3. Durante un controllo, un cittadino ti provoca verbalmente. Cosa fai?",
    options: ["Lo ignoro e continuo il controllo con professionalità", "Rispondo con fermezza e tono duro", "Interrompo il controllo per evitarlo", "Minaccio una sanzione per farlo smettere"],
    answer: 0
  },
  {
    question: "4. Ti trovi a dover prendere una decisione rapida in un contesto di pericolo. Come procedi?",
    options: ["Seguo l’istinto", "Valuto rapidamente rischi e priorità", "Aspetto ordini superiori", "Mi affido a quello che fanno gli altri"],
    answer: 1
  },
  {
    question: "5. Un superiore ti assegna un compito che ritieni inutile. Come ti comporti?",
    options: ["Lo svolgo comunque con impegno", "Lo rifiuto spiegando perché", "Cerco di convincere un collega a farlo", "Lo faccio in modo superficiale"],
    answer: 0
  },
  {
    question: "6. In squadra, un collega ha difficoltà a gestire una situazione. Cosa fai?",
    options: ["Lo ignoro", "Mi offro subito di aiutarlo", "Aspetto che chieda aiuto", "Lo critico"],
    answer: 1
  },
  {
    question: "7. Noti un comportamento sospetto mentre sei fuori servizio. Come reagisci?",
    options: ["Intervengo solo se è urgente", "Non è mio compito", "Informo le autorità competenti", "Affronto la situazione da solo"],
    answer: 0
  },
  {
    question: "8. Hai un forte carico emotivo dopo un intervento difficile. Come gestisci lo stress?",
    options: ["Mi isolo", "Ne parlo con colleghi o supporto", "Lo ignoro", "Mi sfogo in modo aggressivo"],
    answer: 1
  },
  {
    question: "9. Devi lavorare con persone di culture diverse. Come ti comporti?",
    options: ["Agisco come sempre", "Adatto l’approccio con rispetto", "Evito di comunicare", "Chiedo a un altro di gestire"],
    answer: 1
  },
  {
    question: "10. Vedi un errore di un collega. Cosa fai?",
    options: ["Lo segnalo con spirito costruttivo", "Lo ignoro", "Lo critico davanti agli altri", "Lo uso a mio favore"],
    answer: 0
  },
  {
    question: "11. Un cittadino ha paura di collaborare. Come ti comporti?",
    options: ["Lo rassicuro", "Gli faccio capire che è obbligato", "Lo ignoro", "Gli faccio pressioni"],
    answer: 0
  },
  {
    question: "12. Ricevi ordini poco chiari. Come ti muovi?",
    options: ["Li eseguo comunque", "Chiedo chiarimenti", "Chiedo ai colleghi", "Li ignoro"],
    answer: 1
  },
  {
    question: "13. Un collega compromette la sicurezza. Che fai?",
    options: ["Lo segnalo", "Ne parlo con lui in privato", "Lascio che se ne accorgano", "Lo affronto davanti a tutti"],
    answer: 0
  },
  {
    question: "14. In un contesto operativo complesso, qual è la priorità?",
    options: ["Missione a ogni costo", "Sicurezza di tutti", "Fare bella figura", "Seguire la maggioranza"],
    answer: 1
  },
  {
    question: "15. Ti accorgi di un errore in un rapporto. Cosa fai?",
    options: ["Lo correggo e lo segnalo", "Lo lascio com’è", "Chiedo a un collega", "Aspetto che se ne accorgano"],
    answer: 0
  }
];

const form = document.getElementById('quiz-form');

questions.forEach((q, index) => {
  const div = document.createElement('div');
  div.className = 'question';
  div.innerHTML = `<p><strong>${q.question}</strong></p>`;
  const optionsHTML = q.options.map((opt, i) => `
    <label>
      <input type="radio" name="q${index}" value="${i}"> ${opt}
    </label>
  `).join('');
  div.innerHTML += `<div class="options">${optionsHTML}</div>`;
  form.appendChild(div);
});

document.getElementById('submit-btn').addEventListener('click', () => {
  const resultDiv = document.getElementById('result');
  let correct = 0;
  let allAnswered = true;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const questionDiv = form.children[i];
    questionDiv.classList.remove('correct', 'incorrect');

    if (!selected) {
      allAnswered = false;
      return;
    }

    const selectedIndex = parseInt(selected.value);
    if (selectedIndex === q.answer) {
      correct++;
      questionDiv.classList.add('correct');
    } else {
      questionDiv.classList.add('incorrect');
    }
  });

  if (!allAnswered) {
    resultDiv.textContent = "⚠️ Rispondi a tutte le domande prima di inviare.";
    resultDiv.style.color = "red";
    return;
  }

  const passThreshold = 12; // minimo 12 su 15 per superare
  resultDiv.innerHTML = correct >= passThreshold
    ? `✅ Hai superato il test con ${correct}/15 risposte corrette.`
    : `❌ Test non superato. Hai totalizzato ${correct}/15 risposte corrette.`;
  resultDiv.style.color = correct >= passThreshold ? "green" : "red";
});
