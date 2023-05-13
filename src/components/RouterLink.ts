export default class RouterLink extends HTMLAnchorElement {
  constructor() {
    super()
    this.textContent = "LInk"
    this.href = "http://google.es"
    console.log(this)
    this.addEventListener("click", this.handlerEvent)
  }
  handlerEvent(event: Event) {
   
    event.preventDefault()

    this.dispatchEvent(new CustomEvent("router-link", {
      composed: true,
      bubbles: true,
      detail: this.getAttribute("href")
    }))

  }
}
window.customElements.define("router-link",RouterLink, {extends: "a"});