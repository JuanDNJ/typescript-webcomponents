export default class Navegacion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("click", this.handleEvent)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      nav{
        display: flex;
        place-content: center;
        flex-direction: row;
        width: 100vw;
        padding: calc(var(--heigth-header) / 2 ) 0;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(2,0,36,1) 100%);
        column-gap: 1rem;
        position: fixed;
        top: 0;
      }
      @media (min-width: 768px) {
        nav{
          
          background: linear-gradient(90deg, rgba(50,0,36,1) 0%, rgba(0,100,121,1) 50%, rgba(50,0,36,1) 100%);
        }
      }
      @media (min-width: 1280px) {
        nav{
          width: var(--max-width);
          background: linear-gradient(90deg, rgba(52,212,255,1) 0%, rgba(58,9,121,1) 50%, rgba(52,212,255,1) 100%);
        }
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Navegacion.styles}</style>
        <nav>
            <router-link goto="/">JuanDFE</router-link>
            <router-link goto="/about">Quien soy?</router-link>
            <router-link goto="/proyectos">Proyectos</router-link>
            <router-link goto="/contact">Contacto</router-link>
        </nav>
      `
  }
  handleEvent(event: Event): void {
    console.log(event)
  }

  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
    this.removeEventListener("click", this.handleEvent)
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("main-nav",Navegacion);