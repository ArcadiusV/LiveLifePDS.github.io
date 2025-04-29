let reatiData = [
  { title: 'Articolo 9 ter - Gare clandestine', description: 'Punisce la partecipazione a gare non autorizzate su strade pubbliche, con sequestro del veicolo.', price: 3500, month: 0 },
  { title: 'Art. 72 - Veicolo non omologato', description: 'Sanziona l\'uso di veicoli non omologati secondo le normative di sicurezza (neon si, Fari colorati no).', price: 1000, month: 0 },
  { title: 'Art. 78 - Veicolo modificato illegalmente', description: 'Pena per veicoli modificati senza omologazione, come fari non conformi (Kit Turbo, N2o) con sequestro.', price: 7500, month: 0 },
  { title: 'Art. 78-bis - Produzione e vendita di bombole NOS', description: 'Se produce o possiede o detiene materiale verso la produzione di bombole NOS o la bombola NOS stessa.', price: 7500, month: 0 },
  { title: 'Art. 100 - Targa mancante o illeggibile', description: 'Prevede sanzioni per veicoli con targa mancante o illeggibile.', price: 3500, month: 0 },
  { title: 'Art. 116 - Guida senza patente o revocata', description: 'Guida senza patente o con patente revocata, con multa e sequestro del veicolo.', price: 1000, month: 0 },
  { title: 'Art. 126 - Guida con patente scaduta', description: 'Guida con patente scaduta, con multa e obbligo di rinnovo.', price: 500, month: 0 },
  { title: 'Art. 141 - Guida spericolata', description: 'Guida imprudente che mette in pericolo la sicurezza stradale, con multa e sanzione temporanea in cella.', price: 3000, month: 0 },
  { title: 'Art. 143 - Guida in contromano', description: 'Guida contromano con multa e possibile sequestro in base al contromano.', price: 1000, month: 0 },
  { title: 'Art. 154 - Limiti di velocità - Più 100 dal limite', description: 'Superamento del limite di velocità oltre i 180 km/h, con sanzioni severe (DA APPLICARE IN CITTA\').', price: 1500, month: 0 },
  { title: 'Art. 154-bis - Limite di velocità - Più 70 dal limite', description: 'Superamento del limite oltre i 230 km/h, con multe.', price: 1000, month: 0 },
  { title: 'Art. 158 - Divieto di sosta', description: 'Sosta in aree vietate, con multa e rimozione del veicolo.', price: 350, month: 0 },
  { title: 'Art. 171 - Obbligo del casco', description: 'Obbligo di casco per motociclisti.', price: 350, month: 0 },
  { title: 'Art. 180 - Obbligo di possesso dei documenti', description: 'Obbligo di portare con sé i documenti di circolazione e la patente, con multa se non esibiti.', price: 1000, month: 0 },
  { title: 'Art. 186 - Guida in stato di ebbrezza', description: 'Guida sotto effetto di alcol oltre i limiti consentiti, con multa e ritiro della patente (USARE ETILOMETRO).', price: 2000, month: 0 },
  { title: 'Art. 192 - Mancato ALT', description: 'Se il conducente non si ferma all\'alt. Se in mancato alt è accompagnato da una fuga spericolata può configurare il reato Resistenza a pubblico ufficiale (Art. 337).', price: 1500, month: 0 },
  { title: 'Art. 193 - Obbligo di assicurazione', description: 'Guida senza assicurazione obbligatoria, con multa e sequestro del veicolo.', price: 1500, month: 0 },
  { title: 'Art. 223 - Recidiva 1', description: 'In caso di recidiva, aumento del 30% della pena e della multa.', price: 0, month: 0 },
  { title: 'Art. 223 bis - Recidiva 2', description: 'In caso di recidiva, aumento del 60% della pena e della multa.', price: 0, month: 0 },
  { title: 'Art. 477-482 - Targhe oscurate o contraffatte', description: 'Se produce o possiede una targa oscurata o contraffatta.', price: 0, month: 0 },
  { title: 'Art. 56 & Art. 575 – Tentato omicidio', description: 'Chi compie atti idonei e diretti a uccidere, ma senza riuscirci.', price: 7000, month: 10 },
  { title: 'Art. 575 – Omicidio', description: 'Chiunque cagiona la morte (definitiva) di un soggetto.', price: 35000, month: 25 },
  { title: 'Art. 580 – Istigazione o aiuto al suicidio', description: 'Indurre o agevolare il suicidio di una persona.', price: 10000, month: 10 },
  { title: 'Art. 581 – Percosse', description: 'Usare violenza fisica senza causare lesioni gravi.', price: 2000, month: 0 },
  { title: 'Art. 583 – Lesioni gravi o gravissime', description: 'Lesioni con conseguenze gravi o permanenti (Detenzione in cella).', price: 5000, month: 0 },
  { title: 'Art. 583 - Q.Q – Deformazione dell’aspetto', description: 'Causare lesioni permanenti al viso.', price: 10000, month: 3 },
  { title: 'Art. 588 – Rissa', description: 'Partecipare o Aizzare una colluttazione tra più persone.', price: 3500, month: 0 },
  { title: 'Art. 56 & 589-ter – Fuga dopo tentato omicidio stradale', description: 'Non fermarsi dopo un incidente mortale (Tentata morte di uno o più non pensanti o pensanti).', price: 9000, month: 12 },
  { title: 'Art. 593 – Omissione di soccorso', description: 'Non aiutare una persona in pericolo.', price: 2000, month: 0 },
  { title: 'Art. 595 – Diffamazione', description: 'Offendere la reputazione altrui davanti a terzi o per vie traverse.', price: 1500, month: 0 },
  { title: 'Art. 610 – Violenza privata', description: 'Costringere qualcuno ad agire contro la sua volontà.', price: 4000, month: 2 },
  { title: 'Art. 612 – Minaccia', description: 'Intimidire una persona verbalmente o con gesti.', price: 0, month: 0 },
  { title: 'Art. 612-bis – Atti persecutori (Stalking)', description: 'Minacce o molestie ripetute che causano ansia o paura (da portare in tribunale).', price: 0, month: 0 },
  { title: 'Art. 614 – Violazione di domicilio', description: 'Entrare o trattenersi nell’abitazione altrui contro la volontà.', price: 3500, month: 2 },
  { title: 'Art. 615 ter - Accesso abusivo a sistemi informatici', description: 'Entrare illegalmente in database o reti private (Hacking Bancomat / Cartelloni Stradali).', price: 2500, month: 3 },
  { title: 'Art. 624 Comma 1 – Furto Di Corrispondenza', description: 'Sottrarre cosa mobile altrui per trarne profitto.', price: 1500, month: 2 },
  { title: 'Art. 624 Comma 2 – Furto Di Veicolo', description: 'Sottrarre cosa mobile altrui per trarne profitto.', price: 3500, month: 4 },
  { title: 'Art. 624 Comma 3 – Furto Di Beni Diretto', description: 'Borseggio.', price: 2000, month: 1 },
  { title: 'Art. 624 Comma 4 – Furto con Scasso', description: 'Sottrarre cosa mobile altrui per trarne profitto.', price: 4500, month: 3 },
  { title: 'Art. 628 Comma 1 – Rapina (Bangladino)', description: 'Sottrarre beni altrui con violenza o minaccia.', price: 3500, month: 2 },
  { title: 'Art. 628 Comma 2 – Rapina (Unicredit)', description: 'Sottrarre beni altrui con violenza o minaccia.', price: 12000, month: 10 },
  { title: 'Art. 628 Comma 3 – Rapina (Gioielleria/Portavalori)', description: 'Sottrarre beni altrui con violenza o minaccia.', price: 10000, month: 10 },
  { title: 'Art. 628 Comma 4 – Rapina (Banca Centrale)', description: 'Sottrarre beni altrui con violenza o minaccia.', price: 20000, month: 15 },
  { title: 'Art. 629 – Estorsione', description: 'Costringere qualcuno a dare o fare qualcosa con minacce o violenza per trarne profitto.', price: 0, month: 0 },
  { title: 'Art. 605 - Sequestro di persona', description: 'Privare della libertà una persona per ottenere un riscatto.', price: 5000, month: 6 },
  { title: 'Art. 631 – Appropriazione indebita di cose smarrite', description: 'Trattenere una cosa smarrita senza restituirla.', price: 4000, month: 0 },
  { title: 'Art. 633 - Invasione di terreni o edifici', description: 'Occupare illegalmente proprietà altrui o suolo pubblico senza permesso.', price: 2000, month: 0 },
  { title: 'Art. 635 - Danneggiamento / Atti vandalici', description: 'Distruggere o deteriorare beni altrui.', price: 1000, month: 0 },
  { title: 'Art. 640 – Truffa', description: 'Ottenere un profitto ingannando qualcuno con artifizi o raggiri.', price: 500, month: 0 },
  { title: 'Art. 641 – Insolvenza fraudolenta', description: 'Acquistare beni o servizi senza intenzione di pagare.', price: 2500, month: 0 },
  { title: 'Art. 648 – Ricettazione', description: 'Acquistare o ricevere beni provenienti da fonti illecite.', price: 3000, month: 3 },
  { title: 'Art. 648-bis Comma 1 – Presunto riciclaggio', description: 'Importi da 5001€ A 14.999€ con sequestro totale del denaro.', price: 3500, month: 0 },
  { title: 'Art. 648-bis Comma 2 – Presunto riciclaggio', description: 'Importi da 15.000€ a 34.999€ con sequestro totale del denaro.', price: 7000, month: 0 },
  { title: 'Art. 648-bis Comma 3 – Presunto riciclaggio', description: 'Importi da 35.000€ a 84.999€ con sequestro totale del denaro.', price: 14000, month: 0 },
  { title: 'Art. 648-bis Comma 4 – Riciclaggio', description: 'Importi da 85.000€ a 199.999€ con sequestro totale del denaro.', price: 25000, month: 15 },
  { title: 'Art. 648-bis Comma 5 – Riciclaggio', description: 'Importi da 200.000€ a salire con sequestro totale del denaro.', price: 40000, month: 20 },
  { title: 'Art. 294 – Usurpazione di funzioni pubbliche', description: 'Fingere di essere un pubblico ufficiale o esercitarne i poteri senza titolo.', price: 4500, month: 5 },
  { title: 'Art. 56 & 319 – Tentata corruzione', description: 'Tentativo di corrompere una figura amministrativa.', price: 4000, month: 3 },
  { title: 'Art. 319 – Corruzione', description: 'Pubblico ufficiale riceve denaro o favori per compiere o omettere atti.', price: 8000, month: 6 },
  { title: 'Art. 323 – Abuso d’ufficio', description: 'Uso del ruolo per ottenere vantaggi personali o per altri.', price: 3000, month: 0 },
  { title: 'Art. 331 - Interruzione di pubblico servizio', description: 'Ostacolare o interrompere il normale funzionamento di un servizio pubblico.', price: 7500, month: 0 },
  { title: 'Art. 336 – Violenza o minaccia a Pubblico Ufficiale', description: 'Aggressione o minaccia a pubblico ufficiale in servizio ed in divisa.', price: 5000, month: 4 },
  { title: 'Art. 337 – Resistenza a Pubblico Ufficiale', description: 'Opporsi con forza o minaccia a un agente nell’esercizio delle funzioni.', price: 4000, month: 3 },
  { title: 'Art. 341-bis – Oltraggio a Pubblico Ufficiale', description: 'Offese verbali a un pubblico ufficiale durante il servizio.', price: 2000, month: 0 },
  { title: 'Art. 374 – Favoreggiamento personale', description: 'Aiutare qualcuno a eludere le indagini o sottrarsi alla cattura.', price: 3000, month: 0 },
  { title: 'Art. 414 - Istigazione a delinquere', description: 'Incitare pubblicamente alla commissione di reati (In base al contesto, applicare da 500€ a 3000€).', price: 0, month: 0 },
  { title: 'Art. 476 – Falso materiale', description: 'Falsificazione fisica di documenti pubblici e/o personali.', price: 10000, month: 4 },
  { title: 'D.P.R. 309/1990 – Art. 73 – Spaccio e detenzione di stupefacenti', description: 'Coltivare, detenere o vendere droga.', price: 6500, month: 6 },
  { title: 'D.P.R. 309/1990 – Art. 74 – Associazione finalizzata al traffico di droga', description: 'Gruppo organizzato per gestire lo spaccio.', price: 10000, month: 10 },
  { title: 'D.P.R. 309/1990 – Art. 75 – Uso personale di stupefacenti (max 10)', description: 'Possesso di droga per uso personale; reato amministrativo, non penale.', price: 4500, month: 0 },
  { title: 'Art. 416 – Associazione a delinquere', description: 'Due o più persone si associano per commettere reati.', price: 4000, month: 3 },
  { title: 'Art. 416-bis – Associazione di tipo mafioso', description: 'Associazione con metodi mafiosi e controllo del territorio.', price: 7500, month: 5 },
  { title: 'Art. 421 – Pubblica intimidazione', description: 'Minacciare pubblicamente di commettere delitti contro la pubblica incolumità (detenzione in cella).', price: 2500, month: 0 },
  { title: 'Art. 435 – Fabbricazione o possesso di ordigni esplosivi', description: 'Costruire o detenere esplosivi senza autorizzazione (anche petardi e simili).', price: 5000, month: 3 },
  { title: 'Art. 452-bis – Inquinamento ambientale', description: 'Causare inquinamento (in tutte le sue forme) all’ambiente.', price: 2000, month: 0 },
  { title: 'Art. 707-bis – Possesso di grimaldelli o chiavi alterate', description: 'Chiunque è in possesso di grimaldelli o chiavi alterate senza previa autorizzazione o giustifazione.', price: 2000, month: 0 },
  { title: 'Art. 727-bis – Uccisione di animali', description: 'Reati contro la fauna selvatica.', price: 3000, month: 0 },
  { title: 'Art. 28 Legge 110/75 – Detenzione materiale d\'armamento militare', description: 'Chiunque, senza la prescritta autorizzazione, detiene materiali di armamento militare (tra cui giubotti balistici di tipo militare).', price: 4000, month: 3 },
  { title: 'Art. 697 – Detenzione abusiva di armi', description: 'Possesso di armi da fuoco senza licenza o autorizzazione.', price: 4000, month: 3 },
  { title: 'Art. 698 – Detenzione di armi da guerra o tipo guerra', description: 'Detenere armi da guerra senza autorizzazione speciale (Fucili a pompa o Fucili d\'assalto).', price: 10000, month: 10 },
  { title: 'Art. 699 – Porto abusivo di armi / Omessa custodia', description: 'Portare armi in luogo pubblico o aperto al pubblico senza permesso o non all\'interno della valigetta.', price: 3000, month: 3 },
  { title: 'Art. 701 – Fabbricazione o commercio non autorizzato di armi', description: 'Costruire o vendere armi senza licenza.', price: 6000, month: 6 },
  { title: 'Art. 702 – Alterazione di armi', description: 'Modificare armi per aumentarne l’offensività o per nasconderle.', price: 3000, month: 0 },
  { title: 'Art. 703 – Accensioni ed esplosioni pericolose', description: 'Accendere fuochi o far esplodere materiale pericoloso in pubblico.', price: 3000, month: 0 },
  { title: 'Art. 705 – Uso improprio di armi o oggetti atti ad offendere', description: 'Usare armi o oggetti per intimidire, minacciare o ferire.', price: 3000, month: 3 }
];

let agentiData = [
  { id: 'e.ttone', text: 'Dir. Gnr. Erminio Ttone' },
  { id: 'c.marshal', text: 'Dir. Gnr. Chris Marshall' },
  { id: 'c.perna', text: 'Comm. Ciccio Perna' },
  { id: 'j.wick', text: 'Ispt. John Wick' },
  { id: 'd.cicchettini', text: 'Ispt. Damian Cicchettini' },
  { id: 's.vega', text: 'Ispt. Soleil Vega' },
  { id: 'm.rieti', text: 'Sovr. Matteo Rieti' },
  { id: 't.esposito', text: 'Sovr. Tony Esposito' },
  { id: 'r.esposito', text: 'Comm. Raffaele Esposito' },
  { id: 'd.zelenskyi', text: 'Comm. Dima Zelenskyi' },
  { id: 'c.costa', text: 'Sovr. Ciro Costa' },
  { id: 'a.boccuni', text: 'Ass. Andrea Boccuni' },
  { id: 'a.pessina', text: 'Ass. Adolfo Pessina' },
  { id: 'c.zalone', text: 'Ass. Checco Zalone' },
  { id: 'd.grillo', text: 'Sovr. Dario Grillo' },
  { id: 'b.provenzano', text: 'Sovr. Bernardo Provenzano' },
  { id: 'g.esposito', text: 'Ass. Gennaro Esposito' },
  { id: 'f.sanchez', text: 'Ass. Felipe Sanchez' },
  { id: 'a.capuano', text: 'Ass. Andrea Capuano' },
  { id: 'g.martinez', text: 'Agt. Grecya Martinez' },
  { id: 's.vitale', text: 'Agt. Stefano Vitale' },
  { id: 'g.marrone', text: 'Ass. Gennaro Marrone' },
  { id: 'g.leroy', text: 'Agt. Giuseppe Leroy' },
  { id: 'f.mangiagatti', text: 'Ass. Franco Mangiagatti' },
  { id: 'e.tackleberry', text: 'Ass .Eugene Tackleberry' }
];

let reatiList = [];

$(document).ready(function () {
  $('#agentiSelect').select2({
    placeholder: 'Seleziona uno o più agenti',
    data: agentiData,
    allowClear: true
  });

  $('#reatiSelect').select2({
    placeholder: '-- Seleziona uno o più reati --',
    width: '100%',
    allowClear: true
  });

  reatiData.forEach((reato, index) => {
    let option = new Option(`${reato.title} (€${reato.price}, ${reato.month} mesi)`, index, false, false);
    $('#reatiSelect').append(option);
  });

  $('#reatiSelect').trigger('change');
});

document.getElementById('reatiSelect').addEventListener('change', function () {
  let selectedIndexes = Array.from(this.selectedOptions).map(option => option.value);
  selectedIndexes.forEach(index => {
    let reato = reatiData[index];
    if (!reatiList.find(r => r.title === reato.title)) {
      reatiList.push(reato);
    }
  });
  updateReatiList();
});

function removeReato(title) {
  let index = reatiList.findIndex(r => r.title === title);
  if (index > -1) {
    reatiList.splice(index, 1);
    updateReatiList();
  }
}

function updateReatiList() {
  let reatiListDiv = document.getElementById('reatiList');
  reatiListDiv.innerHTML = '';
  reatiList.forEach(reato => {
    let div = document.createElement('div');
    div.className = 'reato-item';
    div.innerHTML = `
      <span>${reato.title} - €${reato.price} - ${reato.month} mesi</span>
      <button type="button" onclick="removeReato('${reato.title}')">Rimuovi</button>
    `;
    reatiListDiv.appendChild(div);
  });
}

function calcolaPena(reati) {
  return reati.reduce((totale, r) => {
    totale.totalePena += r.price;
    totale.totaleMesi += r.month;
    return totale;
  }, { totalePena: 0, totaleMesi: 0 });
}

document.getElementById('cnrForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = e.target;

  const selectedIndexes = $('#reatiSelect').val();
  if (!selectedIndexes || selectedIndexes.length === 0) {
    alert("Seleziona almeno un reato.");
    return;
  }

  const selectedReati = selectedIndexes.map(index => reatiData[index]);
  const reatiText = selectedReati.map(r => `• ${r.title} (€${r.price}, ${r.month} mesi)`).join('\n');
  const { totalePena, totaleMesi } = calcolaPena(selectedReati);
  const dataOraString = new Date().toLocaleString('it-IT');

  const getFieldValue = name => form[name]?.value || "Campo non compilato";

  const agentiSelected = $('#agentiSelect').val() || [];
  const agentiValue = agentiSelected
    .map(id => agentiData.find(a => a.id === id)?.text)
    .filter(Boolean)
    .join(', ') || "Campo non compilato";

  const fotoUrls = form.fotoUrls?.value?.split('\n').map(url => url.trim()).filter(Boolean) || [];

  const payload = {
    content: `**📝 Rapporto CNR compilato**\n
**👮 Nome Agente:** ${getFieldValue('nomeAgente')}
**📄 CNR #:** ${getFieldValue('cnr')}
**📆 Data e ora dell'arresto:** ${dataOraString}
**📍 Luogo dell'intervento:** ${getFieldValue('luogo')}
**👮‍♂️ Agente/i intervenuti:** ${agentiValue}
\`\`\`📚 Reati:
${reatiText}
\`\`\`
\`\`\`📖 Dinamica dei fatti:
${getFieldValue('dinamica')}
\`\`\`
\`\`\`📦 Oggetti sequestrati:
${getFieldValue('oggetti')}
\`\`\`
**⚖️ Pena Totale:** €${totalePena} - ${totaleMesi} mesi
**🧾 In attesa di giudizio:** ${getFieldValue('giudizio')}
**🧑‍⚖️ Procuratore:** ${getFieldValue('procuratore')}
**📞 Recapito Telefonico:** ${getFieldValue('telefono')}
**📧 E-mail:** ${getFieldValue('email')}
**📑 Rapporto Interno:** ${getFieldValue('rapporto')}`,
    embeds: []
  };

  // Aggiungi foto da URL come embed (massimo 10 totali)
  fotoUrls.forEach(url => {
    if (payload.embeds.length < 10) {
      payload.embeds.push({ image: { url } });
    }
  });

  // Crea FormData per invio multipart
  const formData = new FormData();
  formData.append("payload_json", JSON.stringify(payload));

  try {
    const response = await fetch("https://discord.com/api/webhooks/1364602770254204958/OyPynSQEPLVmBRRUHS2rsD83RdptajUNyNID64FcG9zlPexKRcDbdGkKcJ54Q0LVHDX3?thread_id=1358105993841610994", {
      method: 'POST',
      body: formData,
    });

    const responseText = await response.text();
    if (!response.ok) {
      console.error("Errore invio Discord:", response.status, responseText);
      throw new Error(`Errore invio Discord: ${response.status}`);
    }

    alert("Rapporto inviato correttamente!");
  } catch (err) {
    console.error("Errore nel webhook:", err);
    alert("Errore nell'invio del rapporto. Controlla la console.");
  }
});
