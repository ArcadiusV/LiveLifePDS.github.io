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
  },
  {
  question: "16. Durante una rapina, il sospetto è armato. Cosa fai?",
  options: ["Agisco subito con la forza", "Valuto la situazione e chiedo rinforzi", "Mi nascondo", "Aspetto che vada via"],
  answer: 1
  },
  {
    question: "17. Un ostaggio è in pericolo immediato. Qual è la tua priorità?",
    options: ["Neutralizzare il rapitore", "Liberare l’ostaggio in sicurezza", "Attendere ordini", "Mettersi al riparo"],
    answer: 1
  },
  {
    question: "18. In caso di rapimento, qual è la prima cosa da fare?",
    options: ["Inseguire i rapitori", "Allertare la centrale e raccogliere informazioni", "Cercare l’ostaggio da solo", "Ignorare se non c’è pericolo"],
    answer: 1
  },
  {
    question: "19. Durante una situazione con ostaggi, cosa è fondamentale?",
    options: ["Parlare con gli ostaggi", "Mantenere la calma e comunicare col team", "Entrare subito", "Urlare per intimidire"],
    answer: 1
  },
  {
    question: "20. Un collega entra in panico durante una rapina. Cosa fai?",
    options: ["Lo ignoro", "Lo allontano dalla scena", "Lo supporto e lo tranquillizzo", "Me ne vado"],
    answer: 2
  },
  {
    question: "21. Sei il primo a intervenire in una situazione con un ostaggio. Cosa fai?",
    options: ["Agisci d’impulso", "Chiami rinforzi e valuti la situazione", "Entri da solo", "Aspetti che finisca"],
    answer: 1
  },
  {
    question: "22. Un sospetto minaccia un ostaggio con un'arma. Qual è la tua reazione?",
    options: ["Cerchi un tiro sicuro se possibile", "Spari subito", "Ti mostri per distrarlo", "Te ne vai"],
    answer: 0
  },
  {
    question: "23. Un civile ti chiede di intervenire durante una rapina. Cosa fai?",
    options: ["Intervieni senza pensarci", "Agisci seguendo i protocolli", "Ignori la richiesta", "Aspetti altri colleghi"],
    answer: 1
  },
  {
    question: "24. Ti trovi davanti a un sospetto con un ostaggio. Qual è la priorità?",
    options: ["Bloccare l’uscita", "Liberare l’ostaggio in sicurezza", "Parlare con il sospetto", "Agire senza valutare"],
    answer: 1
  },
  {
    question: "25. Ricevi informazioni parziali su un rapimento in corso. Cosa fai?",
    options: ["Aspetti altre conferme", "Ignori la segnalazione", "Inizi a raccogliere dati e segnali la situazione", "Intervieni subito"],
    answer: 2
  },
  {
    question: "26. Un individuo sospetto entra in banca con un borsone. Come reagisci?",
    options: ["Lo ignori", "Chiami rinforzi e osservi", "Lo affronti subito", "Aspetti che esca"],
    answer: 1
  },
  {
    question: "27. Durante una crisi con ostaggi, il negoziatore è in ritardo. Cosa fai?",
    options: ["Prendi il suo posto", "Aspetti il suo arrivo gestendo la calma", "Intervieni d’impulso", "Te ne vai"],
    answer: 1
  },
  {
    question: "28. Un ostaggio riesce a liberarsi. Come reagisci?",
    options: ["Lo ignori", "Lo proteggo e lo metto in sicurezza", "Lo interrogo sul posto", "Lo rimando indietro"],
    answer: 1
  },
  {
    question: "29. Durante una perquisizione in una situazione pericolosa, cosa non deve mancare?",
    options: ["Fretolosità", "Coordinazione e comunicazione", "Solitudine operativa", "Decisioni impulsive"],
    answer: 1
  },
  {
    question: "30. In una rapina con più sospetti, qual è il tuo approccio?",
    options: ["Dividersi e attaccare", "Coordinarsi con la squadra e isolare le minacce", "Entrare da solo", "Attendere senza agire"],
    answer: 1
  },
  {
    question: "31. Durante una rapina, il sospetto inizia a fuggire. Cosa fai?",
    options: ["Lo insegui da solo", "Chiedi supporto e lo insegui mantenendo le distanze", "Lo ignori", "Spari per fermarlo"],
    answer: 1
  },
  {
    question: "32. Un ostaggio è ferito. Qual è la tua priorità?",
    options: ["Cercare il responsabile", "Prestare primo soccorso se l’area è sicura", "Proseguire l’azione", "Lasciarlo ai civili"],
    answer: 1
  },
  {
    question: "33. Durante un’irruzione, senti spari. Come agisci?",
    options: ["Entri subito", "Avvisi la squadra e agisci in coordinamento", "Scappi", "Aspetti che smettano"],
    answer: 1
  },
  {
    question: "34. Un testimone ti dà informazioni discordanti. Cosa fai?",
    options: ["Lo ignori", "Verifichi con calma e raccogli più testimonianze", "Lo accusi di mentire", "Lo lasci andare"],
    answer: 1
  },
  {
    question: "35. Hai una linea visiva sul sospetto ma vicino a lui c’è un ostaggio. Cosa fai?",
    options: ["Spari lo stesso", "Valuti se puoi colpire in sicurezza", "Aspetti ordini", "Ti mostri per attirare attenzione"],
    answer: 1
  },
  {
    question: "36. Un rapinatore ti chiede un’auto per fuggire con ostaggi. Come reagisci?",
    options: ["Accetti subito", "Cerchi di guadagnare tempo e informare la centrale", "Rifiuti", "Attacchi"],
    answer: 1
  },
  {
    question: "37. In una situazione pericolosa con civili presenti, cosa è più importante?",
    options: ["Neutralizzare il nemico", "Proteggere i civili e valutare i rischi", "Agire velocemente", "Non fare nulla"],
    answer: 1
  },
  {
    question: "38. Sei in un centro commerciale durante una rapina. Qual è la tua priorità?",
    options: ["Allontanare i civili e contenere la minaccia", "Raggiungere subito il rapinatore", "Urlare un avviso", "Bloccare tutte le uscite"],
    answer: 0
  },
  {
    question: "39. Un collega prende una decisione pericolosa. Cosa fai?",
    options: ["Lo supporti comunque", "Intervieni per correggerlo", "Non dici nulla", "Segui anche tu il suo errore"],
    answer: 1
  },
  {
    question: "40. Ti trovi da solo davanti a una scena di rapina. Cosa fai?",
    options: ["Agisci da solo", "Richiedi supporto e osservi", "Ti ritiri", "Fermi i passanti"],
    answer: 1
  },
  {
    question: "41. Durante un'operazione con ostaggi, ti viene chiesto di temporeggiare. Cosa fai?",
    options: ["Intervieni comunque", "Segui la strategia e mantieni la calma", "Protesti", "Ignori la richiesta"],
    answer: 1
  },
  {
    question: "42. Un civile ti chiede cosa sta succedendo durante un’operazione. Cosa fai?",
    options: ["Dai tutte le informazioni", "Gli dici di allontanarsi per la sua sicurezza", "Ignori la domanda", "Lo coinvolgi"],
    answer: 1
  },
  {
    question: "43. Sei coinvolto in un'azione sotto tiro. Qual è la tua priorità?",
    options: ["Rispondere subito al fuoco", "Cercare copertura e valutare", "Fuggire", "Chiedere aiuto ai civili"],
    answer: 1
  },
  {
    question: "44. In un’operazione con un ostaggio minacciato, cosa è sconsigliato fare?",
    options: ["Parlare con il sospetto", "Intervenire senza piano", "Mantenere il contatto visivo", "Stabilire una linea di comunicazione"],
    answer: 1
  },
  {
    question: "45. Hai l’ordine di non entrare in un edificio con ostaggi. Cosa fai?",
    options: ["Segui gli ordini", "Ignori l’ordine", "Agisci per conto tuo", "Aspetti che esca qualcuno"],
    answer: 0
  },
  {
    question: "46. Durante una trattativa con un sequestratore, cosa è più importante?",
    options: ["Parlare senza provocare", "Minacciarlo", "Urlare", "Ignorarlo"],
    answer: 0
  },
  {
    question: "47. Un sospetto si arrende. Cosa fai?",
    options: ["Lo colpisci per sicurezza", "Lo arresti seguendo il protocollo", "Lo lasci andare", "Lo ignori"],
    answer: 1
  },
  {
    question: "48. In caso di dubbio su un’identificazione durante una rapina, cosa fai?",
    options: ["Agisci subito", "Verifichi con attenzione", "Ignori il sospetto", "Chiedi al sospetto se è lui"],
    answer: 1
  },
  {
    question: "49. Hai catturato un sospetto, ma manca l’ostaggio. Cosa fai?",
    options: ["Festeggi la cattura", "Continui la ricerca dell’ostaggio", "Ti rilassi", "Chiudi il caso"],
    answer: 1
  },
  {
    question: "50. In un ambiente chiuso con minaccia attiva, qual è la tattica migliore?",
    options: ["Entrare subito", "Coordinarsi con la squadra e usare coperture", "Gridare all’interno", "Mandare un civile"],
    answer: 1
  },
  {
  question: "51. Un collega ti chiede supporto via radio durante un intervento. Cosa fai?",
  options: ["Ignori la richiesta", "Rispondi subito e valuti come aiutare", "Aspetti che qualcun altro risponda", "Dici che sei occupato"],
  answer: 1
  },
  {
    question: "52. Durante un’operazione, ricevi una chiamata privata. Cosa fai?",
    options: ["Rispondi subito", "La ignori e ti concentri sull’operazione", "Ti allontani per rispondere", "La giri a un collega"],
    answer: 1
  },
  {
    question: "53. Un collega ti parla in tono aggressivo. Cosa fai?",
    options: ["Rispondi allo stesso modo", "Mantieni la calma e chiarisci più tardi", "Lo ignori per sempre", "Segnali subito il comportamento"],
    answer: 1
  },
  {
    question: "54. Durante una chiamata d’emergenza, l’operatore fornisce dati confusi. Cosa fai?",
    options: ["Segui comunque le indicazioni", "Fai domande chiare e confermi le informazioni", "Ignori tutto", "Chiudi la comunicazione"],
    answer: 1
  },
  {
    question: "55. Dopo un intervento, un collega è visibilmente scosso. Come ti comporti?",
    options: ["Lo lasci solo", "Gli offri supporto e lo ascolti", "Lo prendi in giro", "Eviti l’argomento"],
    answer: 1
  },
  {
    question: "56. Sei testimone di un errore commesso da un collega. Cosa fai?",
    options: ["Lo segnali con intento costruttivo", "Lo rimproveri davanti a tutti", "Lo copri", "Lo ignori"],
    answer: 0
  },
  {
    question: "57. In una situazione concitata, ricevi più messaggi via radio. Come agisci?",
    options: ["Ignori tutto", "Ascolti con attenzione e rispondi in ordine di priorità", "Parli sopra gli altri", "Rispondi solo al primo"],
    answer: 1
  },
  {
    question: "58. Una persona è ferita ma respira. Qual è il primo passo?",
    options: ["Spingerla a muoversi", "Controllare che sia in sicurezza e chiamare i soccorsi", "Interrogarla subito", "Lasciarla dove si trova"],
    answer: 1
  },
  {
    question: "59. Un collega ti chiede aiuto per compilare un rapporto. Cosa fai?",
    options: ["Gli dici di farlo da solo", "Lo aiuti se possibile o lo indirizzi", "Lo ignori", "Ti lamenti"],
    answer: 1
  },
  {
    question: "60. Durante un’operazione, perdi il contatto radio con il team. Cosa fai?",
    options: ["Continui da solo", "Cerchi un punto sicuro per ristabilire il contatto", "Spegni la radio", "Tenti di risolvere da solo"],
    answer: 1
  },
  {
    question: "61. Ti assegnano un compito in squadra. Cosa fai prima di agire?",
    options: ["Agisci subito", "Ti coordini con gli altri membri", "Aspetti che lo facciano loro", "Controlli il cellulare"],
    answer: 1
  },
  {
    question: "62. Un civile ti chiama per segnalare un’emergenza. Cosa fai?",
    options: ["Lo ascolti con attenzione e raccogli i dati", "Gli dici di richiamare", "Lo interrompi", "Passi la chiamata a caso"],
    answer: 0
  },
  {
    question: "63. Un collega ha un’opinione diversa sulla strategia. Come gestisci la situazione?",
    options: ["Litighi con lui", "Discuti con calma e trovi un compromesso", "Fai di testa tua", "Lo ignori"],
    answer: 1
  },
  {
    question: "64. Durante un turno, devi comunicare un cambio di piano. Cosa fai?",
    options: ["Non dici nulla", "Lo comunichi chiaramente via radio", "Aspetti che se ne accorgano", "Mandi un messaggio vago"],
    answer: 1
  },
  {
    question: "65. Una persona è svenuta ma respira. Qual è la posizione corretta da adottare?",
    options: ["Supina con le gambe sollevate", "Posizione laterale di sicurezza", "Seduta", "Pancia in giù"],
    answer: 1
  },
  {
    question: "66. Dopo un intervento complesso, cosa è utile fare con i colleghi?",
    options: ["Tornare a casa subito", "Fare un debriefing e confrontarsi", "Ignorarsi", "Parlare solo dei propri meriti"],
    answer: 1
  },
  {
    question: "67. Un civile ti fornisce dati fondamentali ma è agitato. Cosa fai?",
    options: ["Lo zittisci", "Lo calmi e raccogli le informazioni con calma", "Lo ignori", "Lo allontani"],
    answer: 1
  },
  {
    question: "68. Durante un’operazione, un collega ti chiede via radio di coprirlo. Cosa fai?",
    options: ["Rifiuti", "Accetti e ti coordini subito", "Dici che non puoi", "Aspetti che lo faccia qualcun altro"],
    answer: 1
  },
  {
    question: "69. Mentre sei al telefono con un superiore, ricevi una chiamata urgente via radio. Cosa fai?",
    options: ["Ignori la radio", "Valuti la priorità e chiedi di mettere in attesa il superiore", "Chiudi la chiamata", "Rispondi a entrambe contemporaneamente"],
    answer: 1
  },
  {
    question: "70. Un collega in difficoltà non riesce a completare un’azione. Cosa fai?",
    options: ["Lo rimproveri", "Gli offri supporto immediato", "Ti allontani", "Critichi il suo operato con altri"],
    answer: 1
  },
  {
  question: "71. Durante un'azione interforze, chi ha il compito di coordinare le comunicazioni tra i reparti?",
  options: ["Ogni singolo agente", "Il comandante dell’unità locale", "L’operatore radio", "Il responsabile dell’operazione"],
  answer: 3
  },
  {
    question: "72. Cosa devi comunicare per primo via radio in una situazione di emergenza?",
    options: ["La tua posizione", "Il tuo nome", "La gravità della situazione", "Il numero di targa dei veicoli coinvolti"],
    answer: 0
  },
  {
    question: "73. Un collega ha subito un trauma. Cosa fai per primo nel primo soccorso?",
    options: ["Lo sposti in una posizione comoda", "Chiami i soccorsi e valuti lo stato di coscienza", "Gli dai acqua", "Lo sollevi per farlo camminare"],
    answer: 1
  },
  {
    question: "74. In caso di arresto, entro quanto tempo la persona deve essere portata davanti a un giudice?",
    options: ["Entro 24 ore", "Entro 48 ore", "Entro 72 ore", "Non c’è un limite"],
    answer: 1
  },
  {
    question: "75. Il fermo di polizia giudiziaria si applica quando:",
    options: ["Il soggetto è colto in flagrante", "Il soggetto è ritenuto pericoloso ma non colto in flagranza", "La persona ha già confessato", "Il soggetto è minorenne"],
    answer: 1
  },
  {
    question: "76. Qual è una differenza chiave tra arresto e stato di fermo?",
    options: ["L’arresto è deciso solo dal giudice", "Il fermo è sempre su ordine del magistrato", "L’arresto è in flagranza, il fermo su presunzione di reato", "Lo stato di fermo non comporta restrizione della libertà"],
    answer: 2
  },
  {
    question: "77. Cosa significa la comunicazione radio 'codice rosso'?",
    options: ["Operazione completata", "Emergenza in corso", "Richiesta di supporto logistico", "Cambio di pattuglia"],
    answer: 1
  },
  {
    question: "78. Se un collega ignora ripetutamente i protocolli, come agisci?",
    options: ["Lo segnali con una relazione al superiore", "Lo affronti con aggressività", "Ignori la cosa", "Lo imiti per non creare conflitti"],
    answer: 0
  },
  {
    question: "79. Quando più forze operano insieme in una retata, è importante che:",
    options: ["Ogni corpo agisca secondo il proprio metodo", "Le comunicazioni siano unificate e chiare", "Non ci siano scambi di informazioni", "Solo la polizia locale agisca"],
    answer: 1
  },
  {
    question: "80. Qual è la priorità in un primo soccorso su una scena di incidente?",
    options: ["Verificare se c’è stato un reato", "Raccogliere i documenti", "Mettere in sicurezza la scena e controllare i segni vitali", "Informare i media"],
    answer: 2
  },
  {
    question: "81. Un agente ha un conflitto personale con un collega. Cosa è opportuno fare?",
    options: ["Evitarlo del tutto", "Parlare con un superiore o mediatore interno", "Sfogarsi con altri colleghi", "Affrontarlo durante un'operazione"],
    answer: 1
  },
  {
    question: "82. Durante un arresto, il soggetto rifiuta di fornire generalità. Cosa fai?",
    options: ["Lo lasci andare", "Procedi al foto-segnalamento e informi l’autorità giudiziaria", "Lo interroghi sul posto", "Lo accompagni a casa per verificarle"],
    answer: 1
  },
  {
    question: "83. Cosa deve fare il primo agente che arriva su una scena del crimine?",
    options: ["Iniziare subito le indagini", "Toccare tutto per trovare prove", "Isolare l’area e segnalare ai colleghi", "Chiedere ai presenti di aiutare"],
    answer: 2
  },
  {
    question: "84. In una comunicazione radio, cosa indica il termine '10-4'?",
    options: ["Aiuto richiesto", "Ricevuto e compreso", "Minaccia in corso", "Arrivo sul posto"],
    answer: 1
  },
  {
    question: "85. Quale di queste azioni è corretta durante un fermo?",
    options: ["Lasciare il soggetto libero dopo 10 minuti", "Informarlo dei motivi del fermo e dei suoi diritti", "Trattenerlo senza motivazioni", "Portarlo subito in carcere"],
    answer: 1
  },
  {
    question: "86. In un'azione interforze, una forza prende decisioni non condivise. Cosa fai?",
    options: ["Intervieni da solo", "Riferisci al comando centrale per chiarimenti", "Ti adegui senza obiezioni", "Interrompi la collaborazione"],
    answer: 1
  },
  {
    question: "87. La funzione principale del primo soccorso è:",
    options: ["Diagnosticare", "Stabilizzare e salvare vite in attesa dei soccorsi", "Curare definitivamente", "Effettuare indagini"],
    answer: 1
  },
  {
    question: "88. Qual è il tono corretto da usare in radio durante un’operazione?",
    options: ["Urgenza e velocità massima", "Calmo, chiaro e conciso", "Rabbioso e diretto", "Silenzioso per non disturbare"],
    answer: 1
  },
  {
    question: "89. Se ricevi una comunicazione radio non chiara, cosa fai?",
    options: ["Ignori", "Rispondi comunque", "Chiedi conferma o ripetizione", "Spegni la radio"],
    answer: 2
  },
  {
    question: "90. Un collega si trova in difficoltà con una procedura di fermo. Cosa fai?",
    options: ["Critichi la sua preparazione", "Ti allontani per evitare complicazioni", "Intervieni offrendo supporto", "Fai finta di nulla"],
    answer: 2
  }
];

const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const submitBtn = document.getElementById('submit-btn');

// Mischia le domande e prendi le prime 15
function getRandomQuestions(allQuestions, count) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Estrai 15 domande casuali
const selectedQuestions = getRandomQuestions(questions, 15);

// Mostra le domande nel form
selectedQuestions.forEach((q, index) => {
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

// Gestione del bottone "Invia"
submitBtn.addEventListener('click', () => {
  let correct = 0;
  let allAnswered = true;

  selectedQuestions.forEach((q, i) => {
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

  const passThreshold = 12;
  resultDiv.innerHTML = correct >= passThreshold
    ? `✅ Hai superato il test con ${correct}/15 risposte corrette.`
    : `❌ Test non superato. Hai totalizzato ${correct}/15 risposte corrette.`;
  resultDiv.style.color = correct >= passThreshold ? "green" : "red";

  // --- Recupera il nome e la data di nascita ---
  const nomeEsaminato = document.getElementById('nome-utente').value.trim();
  const dataNascita = document.getElementById('data-nascita').value;

  if (!nomeEsaminato || !dataNascita) {
    alert('Per favore, inserisci il nome e la data di nascita.');
    return;
  }

  const dataTest = new Date().toLocaleDateString('it-IT');

  const risultatoTest = correct >= passThreshold
    ? `✅ Hai superato il test con ${correct}/15 risposte corrette.`
    : `❌ Test non superato. Hai totalizzato ${correct}/15 risposte corrette.`;

  const rapporto = `**RAPPORTO DI TEST PSICOATTITUDINALI**

**Idonietà al grado:** ${correct >= passThreshold ? "IDONEO" : "NON IDONEO"}
**Nome:** ${nomeEsaminato}
**Data di nascita:** ${dataNascita}
**Data del test:** ${dataTest}
**Esaminatore:** Soleil Ttone
**Scopo del test:** Valutazione delle attitudini cognitive e comportamentali.

**Introduzione**
Il presente rapporto riassume i risultati ottenuti da ${nomeEsaminato} nel corso della valutazione psicoattitudinale, con particolare riferimento alle sue capacità cognitive, attitudini professionali e tratti di personalità rilevanti per il suo ruolo.  

**Strumenti Utilizzati**
- Test di intelligenza generale  
- Test di personalità  
- Test di problem-solving e decision-making  
- Test di gestione dello stress  
- Colloquio strutturato con domande situazionali  

**Risultati e Analisi**
${risultatoTest}

**Conclusioni e Raccomandazioni**
${nomeEsaminato} presenta un profilo cognitivo e psicoattitudinale ${correct >= passThreshold ? "altamente compatibile" : "attualmente non compatibile"} con il grado assegnatoli. ${correct >= passThreshold ? "Le sue eccellenti capacità di ragionamento logico, problem-solving e gestione dello stress lo rendono un candidato per la Polizia di Stato. Si consiglia un percorso di formazione per affinare ulteriormente le sue competenze." : "Si consiglia di ripetere la valutazione dopo un percorso formativo mirato al miglioramento delle capacità di gestione dello stress e di risposta situazionale."}

**Firma dell'esaminatore:**  
Soleil Ttone`;

  const discordMessage = {
    content: rapporto
  };

  // --- Webhook Discord ---
  const webhookURL = 'https://discord.com/api/webhooks/1383935005734211594/kQmLUU8jR_GyqQky9WwbHGa8SJw0oQ35CfjXK65G6X6FGyCELIIfgcrsSpNBY_yOU34H';

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(discordMessage)
  }).catch(error => {
    console.error("Errore durante l'invio al webhook Discord:", error);
  });
});
