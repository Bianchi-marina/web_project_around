fetch("https://around.nomoreparties.co/v1/web_ptbr_08", {
  headers: {
    authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

fetch("https://around.nomoreparties.co/v1/web_ptbr_08/users/me", {
    headers: {
      authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5"
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });