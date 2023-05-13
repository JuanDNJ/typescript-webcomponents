import '../style.css'
import './RouterLink'
import { OptionsApp, Route } from "./types"

export default class NJV extends HTMLElement {
  tagRender: HTMLElement
  _router: Route[]
  constructor(options: OptionsApp) {
    super()
    this.tagRender = options.app
    this._router = options.router
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    if(this.router.length >= 1){
      this. renderRouter()
    }else{
      this.ready()
    }
    this.addEventListener<any>("router-link", this.handleEvent)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
    `
  }
  get router():  Route[] {
    return this._router
  }
  set router(router: Route[]){
    this._router = [...router]
  }
  ready() {
    console.log(this.router[0])
    this.shadowRoot!.appendChild(this.tagRender)
  }
  renderRouter() {
    
    this.shadowRoot!.appendChild(this.router[0].component)
  }
  handleEvent(event: CustomEvent) {
    console.log(event, event.detail)
    this.shadowRoot!.appendChild(this.router.find(rec=>rec.path === event.detail)?.component!)
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("njv-app",NJV);