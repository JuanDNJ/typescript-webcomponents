import "./RouterLink";
import { OptionsApp, Route } from "./types";
import "../components/Navegacion";
export default class NJV extends HTMLElement {
  _router: Route[];

  constructor(options: OptionsApp) {
    super();
    this._router = options.router;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.ready();
    this.renderRouter();
    this.addEventListener<any>("router-link", this.handleEvent);
  }

  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
     
    `;
  }

  get router(): Route[] {
    return this._router;
  }

  set router(router: Route[]) {
    this._router = [...router];
  }

  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>${NJV.styles}</style>
      <main-nav></main-nav>
      <section class="router-view"></section>
    `;
  }
  render(appTag: string = "#app") {
    const app = document.querySelector(appTag) as HTMLDivElement;
    app.appendChild(this);
  }

  renderRouter() {
    let route = this.router.find((rec) => rec.path === location.pathname)!;
    if (!route) {
      route = this.router[this.router.length - 1];
    }
    const routerView = this.shadowRoot!.querySelector(
      ".router-view"
    ) as HTMLElement;
    routerView.innerHTML = "";
    routerView.appendChild(route.component);
  }

  handleEvent(event: CustomEvent) {
    console.log(event, event.detail);
    this.renderRouter();
  }

  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
    this.removeEventListener<any>("router-link", this.handleEvent);
  }

  attributeChangedCallback(attr: any, old: any, now: any) {
    if (typeof attr !== "string") {
      throw new Error(`Invalid attribute, this should be a string`);
    }
    console.log(`attribute changed: ${attr} = ${old} -> ${now} `);
  }

  static get observedAttributes() {
    return [""];
  }
}
window.customElements.define("njv-app", NJV);
