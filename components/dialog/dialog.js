customElements.define(
    "gallery-thumbnail",
    class extends HTMLElement {
        async connectedCallback() {
            const res = await fetch("components/dialog/index.html")
            const shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.innerHTML = await res.text();

            const src = this.getAttribute("src")
            const img = shadowRoot.getElementById("thumbnail")
            const dialog = shadowRoot.getElementById("full-photo-dialog")
            img.setAttribute("src", src)
            img.addEventListener('click', () => {
                dialog.showModal()
            })

            const fullImgSrc = this.getAttribute("full-src")
            const dialogFullPhoto = shadowRoot.getElementById("full-photo")
            dialogFullPhoto.setAttribute("src", fullImgSrc)
        }
    },
);