export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    _clear() {
      this._container.innerHTML = '';
    }
  
    render() {
      this._clear();
      this._items.forEach(item => {
        const renderedItem = this._renderer(item);
        this._container.appendChild(renderedItem);
      });
    }
  
    addItem(element) {
      this._container.appendChild(element);
    }
  }