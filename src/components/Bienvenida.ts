export default class BienvenidaNjv extends HTMLElement {
  nameUser: string = JSON.parse(localStorage.getItem('nameUser')!) ?? 'unknown';
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("router-link", this.eventHandler)
    this.shadowRoot!.querySelector("input[name='nameUser']")?.addEventListener("keyup", this.eventHandler)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
    `
  }
  eventHandler(e: any) {
    console.log(e)
    this.nameUser =  e.target.value;
    
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${BienvenidaNjv.styles}</style>
        <h1 class="clickMe">Bienvenid@ ${this.hasAttribute("nameUser") ? this.getAttribute("nameUser"): this.nameUser}</h1>
        <input name="nameUser" type="text" placeholder="name" />
      `
      
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 

    if(typeof attr !== "string"){
      throw new Error("This attribute must be a string")
    }
   
   
    console.log(  this.setAttribute("nameUser", now))

  }


  static get observedAttributes() {
    return ['nameUser'];
  }
}
window.customElements.define("bienvenida-njv",BienvenidaNjv);