export default class RouterLink extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.shadowRoot!.querySelector("a")!.addEventListener("click", this.handlerEvent)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      a{
        text-decoration: none;
        color: var(--color-text);
        font-weight: bolder;
        font-size: 2vmin;
      }
      a:hover{
       
        color: var(--color-text);
       
      }
    `
  }
  handlerEvent(event: Event) {
    event.preventDefault();
    history.pushState({}, "", this.getAttribute("href"))
    this.dispatchEvent(new CustomEvent("router-link", {
      composed: true,
      bubbles: true,
      detail: this.getAttribute("href")
    }))
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${RouterLink.styles}</style>
        <a href="${this.hasAttribute("goto") ? this.getAttribute("goto") : '/'}">
          <slot></slot>
        </a>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr: any, old: any, now: any) {
    if (typeof attr !== "string") {
      throw new Error("This Arg so much string")
    }
    console.log(`attribute changed: ${attr} = ${old} -> ${now} `)
  }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("router-link", RouterLink);