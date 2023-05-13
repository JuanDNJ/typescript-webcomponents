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
    window.addEventListener("popstate", () => this.handlePopState)
  }
  handlePopState(event: PopStateEvent) {
    event.preventDefault()
    console.log(event)
  
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
    
    let route = this.router.find(rec=>rec.path === location.pathname)!
    if(!route){
      route = this.router[0]
    }
    this.shadowRoot!.appendChild(route.component)
  }
  handleEvent(event: CustomEvent) {
    console.log(event, event.detail)
    let route = this.router.find(rec=>rec.path === event.detail)!
    if(route){
      route = route
    }else{
      route = this.router[this.router.length]
    }
    this.shadowRoot!.appendChild(route.component)
  }
  render(appTag: string = '#app'){
    const app = document.querySelector<HTMLDivElement>(appTag)!
    app.appendChild(this)
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 
    if(typeof attr !== 'string'){
      throw new Error(`Invalid attribute, this should be a string`)
    }
    console.log(`attribute changed: ${attr} = ${old} -> ${now} `)
  }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("njv-app",NJV);