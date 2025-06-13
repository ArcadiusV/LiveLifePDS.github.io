document.getElementById('cnrForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const dataOraString = new Date().toLocaleString('it-IT');

  const getFieldValue = id => document.getElementById(id)?.value || "Campo non compilato";

  const fotoUrls = getFieldValue('fotoUrls')
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.startsWith('http'));

  const payload = {
    content: `**📄 Modulo Rilascio Porto D'armi compilato**\n
**👮 Nome Agente:** ${getFieldValue('nomeAgente')}
**🧑‍💼 Nome Cittadino:** ${getFieldValue('nomeCittadino')}
**🎂 Data di nascita:** ${getFieldValue('dataNascita')}
**📌 In qualità di:** ${getFieldValue('qualita')}
**🔫 Tipo di Porto D'armi Rilasciato:** ${getFieldValue('portoRilasciato')}
**📞 Recapito Telefonico:** ${getFieldValue('telefono')}
**📧 E-mail:** ${getFieldValue('email')}
**🕒 Data e ora di compilazione:** ${dataOraString}`,
    embeds: []
  };

  fotoUrls.slice(0, 10).forEach(url => {
    payload.embeds.push({ image: { url } });
  });

  const formData = new FormData();
  formData.append("payload_json", JSON.stringify(payload));

  // Webhook Base64 encoded
  const encodedWebhook = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM4MDI3MTAyNzg2NjcwMTk0NS8tMlVVbi1kTjZiTjlGUE5BeTlyZW0yaVplbEJXenFBaFhYc2JHSkRnTFZ3dGFkM0JobVo0V042VTJWbFhjZEREQy1nZz90aHJlYWRfaWQ9MTM2NTQwODQ1NTQ5NzYxMzQwMw==";
  const webhookUrl = atob(encodedWebhook); // Decode

  try {
    const response = await fetch(webhookUrl, {
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
