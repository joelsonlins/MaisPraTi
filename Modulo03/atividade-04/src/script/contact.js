function SendMail(event) {
  event.preventDefault(); 

  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_5xfsfin", "template_89r4uwr", params)
    .then(function(res) {
      alert("Success! Status: " + res.status);
    })
    .catch(function(error) {
      alert("Erro ao enviar o e-mail: " + error.text);
    });
}
