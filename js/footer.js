const footerContent = `<!-- Footer -->
<br>
<h2 class="w3-wide">#GPDMusic</h2>
<br>
<footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
	<a href="https://www.facebook.com/CwmamanMusicFestival/" target="_blank"><i class="fa-brands fa-facebook fa-2x"></i></a>
	<a href="https://www.instagram.com/cwmaman_music_festival/" target="_blank"><i class="fa-brands fa-instagram fa-2x"></i></a>
	<a href="https://twitter.com/CwmFest" target="_blank"><i class="fa-brands fa-twitter fa-2x"></i></a>
	<a href="https://www.flickr.com/photos/127740634@N02/" target="_blank"><i class="fa-brands fa-flickr fa-2x"></i></a>
	<a href="https://www.youtube.com/user/CwmFest" target="_blank"><i class="fa-brands fa-youtube fa-2x"></i></a>
</footer>
<br>
<credits class="w3-container w3-center w3-content">
	<h5 class="w3-wide">Website and app design by Ryan at GPD Music</h5>
</credits>`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerContent;
  }
}

customElements.define("footer-component", Footer);