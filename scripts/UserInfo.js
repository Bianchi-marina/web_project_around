export default class UserInfo {
  constructor(config) {
    this._nameElement = document.querySelector(config.name);
    this._aboutElement = document.querySelector(config.about);
    console.log( this._aboutElement,this._nameElement);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}