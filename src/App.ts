export default class App extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${App.styles}</style>
        <h1>Bienvenido a la App NJV</h1>
       
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr: any, old: any, now: any) {
    if(typeof attr !== "string"){
      throw new Error("Attribute has to be a string")
    }
    console.log(attr,old,now)
  }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("app-njv", App);