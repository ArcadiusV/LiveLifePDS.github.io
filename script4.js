document.getElementById('cnrForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = e.target;

  const dataOraString = new Date().toLocaleString('it-IT');

  // Get field values or fallback
  const getFieldValue = id => document.getElementById(id)?.value || "Campo non compilato";

  // Get image URLs from textarea
  const fotoUrls = getFieldValue('fotoUrls')
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.startsWith('http'));

  const payload = {
    content: `**📄 Modulo Rilascio Licenza di caccia compilato**\n
**👮 Nome Agente:** ${getFieldValue('nomeAgente')}
**🧑‍💼 Nome Cittadino:** ${getFieldValue('nomeCittadino')}
**🎂 Data di nascita:** ${getFieldValue('dataNascita')}
**📞 Recapito Telefonico:** ${getFieldValue('telefono')}
**📧 E-mail:** ${getFieldValue('email')}
**🕒 Data e ora di compilazione:** ${dataOraString}`,
    embeds: []
  };

  // Add images as embeds (max 10)
  fotoUrls.slice(0, 10).forEach(url => {
    payload.embeds.push({ image: { url } });
  });

  const formData = new FormData();
  formData.append("payload_json", JSON.stringify(payload));

  try {
    const response = await fetch("https://discord.com/api/webhooks/1380271027866701945/-2UUn-dN6bN9FPNAy9rem2iZelBWzqAhXXsbGJDgLVwtad3BhmZ4WN8U2VlXcdDDA-gg?thread_id=1365408455497613403", {
      method: 'POST',
      body: formData,
    });

    const responseText = await response.text();
    if (!response.ok) {
      console.error("Errore invio Discord:", response.status, responseText);
      throw new Error(`Errore invio Discord: ${response.status}`);
    }

    alert("Modulo inviato correttamente!");
  } catch (err) {
    console.error("Errore nel webhook:", err);
    alert("Errore nell'invio del modulo. Controlla la console.");
  }
});
