export default class Contact extends HTMLElement {
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
        <style>${Contact.styles}</style>
        <h1>Contact</h1>
        <p>  sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor.</p>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("contact-njv",Contact);