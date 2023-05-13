export default class PageNotFound extends HTMLElement {
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
        <style>${PageNotFound.styles}</style>
        <article>
          <h1>404</h1>
          <span>PageNotFound</span>
        </article>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr: any, old: any, now: any) {
    if (typeof attr !== "string") {
      throw new Error("Invalid attribute, this attribute must be a string")
    }
    console.log(`Attribute changed: ${attr}: ${old} -> ${now}`)
  }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("page-404", PageNotFound);