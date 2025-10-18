class MobileNavBar {
    constructor(menuicon, navitens, navlinks) {
        this.menuicon = document.querySelector(menuicon);
        this.navitens = document.querySelector(navitens);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animatelinks() {
        this.navlinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navitens.classList.toggle(this.activeClass);
        this.menuicon.classList.toggle(this.activeClass);
        this.animatelinks();
    }

    addClickEvent() {
        this.menuicon.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuicon) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    "#menu-icon",
    "#nav-itens",
    "#nav-itens li"
);

mobileNavbar.init();
