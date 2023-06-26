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
      .not-found{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 5vmin;
      }
      router-link{
        text-decoration: underline;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${PageNotFound.styles}</style>
        <section class="not-found">
          <article>
            <div>
              <h1>404</h1>
              <span>PageNotFound</span>
            </div>
            <router-link cRLink="rgba(244,10,60,1)" href="/">Home</router-link>
          </article>
        </section>
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