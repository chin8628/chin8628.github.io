const html = `
	<style>
		#thumbnail {
			max-height: 200px;
			height: 25vw;
			object-fit: cover;
			object-position: center;
			cursor: pointer;
		}

		#thumbnail:hover {
			filter: brightness(1.2);
		}

		dialog {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			border: 0;
			background: rgba(40, 40, 40, 0.8);
		}

		#full-photo {
			width: 100%;
			height: 100%;
			max-width: 95vw;
			max-height: 95vh;
			object-fit: contain;
		}

		#close {
			position: absolute;
			top: 24px;
			right: 24px;
			background: none;
			border: 0;
			color: white;
			cursor: pointer;
			outline: none;
		}
	</style>

	<img id="thumbnail" src="" alt=""/>
	<dialog id="full-photo-dialog">
		<img id="full-photo" src="" alt="" loading="lazy">
		<form method="dialog">
			<button id="close">X</button>
		</form>
	</dialog>
`

customElements.define(
  "gallery-thumbnail",
  class extends HTMLElement {
    async connectedCallback() {
      const shadowRoot = this.attachShadow({mode: "open"});
      shadowRoot.innerHTML = html

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