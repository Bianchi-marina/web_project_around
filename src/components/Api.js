export default class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getInitialCards() {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/cards", {
          headers: {
            authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5"
          }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        });
    }

    getUserInformation() {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/users/me", {
          headers: {
            authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5"
          }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        });
    }

    editProfile(dataProfile) {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/users/me", {
            method: "PATCH",
            headers: {
              authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dataProfile)
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        });
    }

    createNewCard(dataCard) {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/cards", {
            method: "POST",
            headers: {
              authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: dataCard.name,
              link: dataCard.link
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        });
    }

    likeCard() {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/cards/likes/cardId", {
          method: "PUT",
          headers: {
            authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
            "Content-Type": "application/json"
            }
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        });
      }
    
      unlikeCard() {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/cards/likes/cardId", {
          method: "DELETE",
          headers: {
            authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
            "Content-Type": "application/json"
            }
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        });
      }

    editAvatar(avatarUrl) {
        return fetch("https://around.nomoreparties.co/v1/web_ptbr_08/users/me/avatar ", {
            method: "PATCH",
            headers: {
              authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              avatar: avatarUrl,
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        });
    }
}
  