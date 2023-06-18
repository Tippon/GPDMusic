const headerContent = `			<div class="banner">
				<a href="index.html"><img src="images/Cover.png" alt="GPD Music"></a>
			</div>
		<br>
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About GPD Music</a></li>
			</ul>
		</nav>
		<br>
		<nav>
			<ul>
				<li><a href="bandfinder.html">BandFinder</a></li>
			</ul>
		</nav>`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerContent;
  }
}

customElements.define("header-component", Header);