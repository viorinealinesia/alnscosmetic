/* =========================
   ALNS SKINCARE
   JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menu =
  document.querySelector(".menu");

const nav =
  document.querySelector("nav");


if (menu) {

  menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (
      nav.classList.contains("open")
    ) {

      nav.style.display = "flex";

      nav.style.position =
        "absolute";

      nav.style.top =
        "72px";

      nav.style.left =
        "0";

      nav.style.right =
        "0";

      nav.style.background =
        "#ffffff";

      nav.style.padding =
        "20px 6%";

      nav.style.flexDirection =
        "column";

      nav.style.alignItems =
        "flex-start";

      nav.style.gap =
        "18px";

    } else {

      nav.style.display =
        "none";

    }

  });

}


/* =========================
   CLOSE MENU
========================= */

const navLinks =
  document.querySelectorAll(
    "nav a"
  );


navLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      if (
        window.innerWidth <= 900
      ) {

        nav.classList.remove(
          "open"
        );

        nav.style.display =
          "none";

      }

    }
  );

});


/* =========================
   HEADER SHADOW
========================= */

window.addEventListener(
  "scroll",
  () => {

    const header =
      document.querySelector(
        "header"
      );

    if (
      window.scrollY > 20
    ) {

      header.style.boxShadow =
        "0 8px 25px #31506b18";

    } else {

      header.style.boxShadow =
        "0 4px 20px #31506b10";

    }

  }
);


/* =========================
   PRODUCT BUTTON
========================= */

const productButtons =
  document.querySelectorAll(
    ".products button"
  );


productButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const message =
          "Halo ALNS Skincare, saya ingin memesan produk.";

        const whatsappURL =
          "https://wa.me/6283128844922?text=" +
          encodeURIComponent(message);

        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );

  }
);


/* =========================
   SMOOTH SCROLL
========================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      function (event) {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });


/* =========================
   IMAGE ERROR
========================= */

const images =
  document.querySelectorAll(
    "img"
  );


images.forEach((image) => {

  image.addEventListener(
    "error",
    () => {

      image.style.background =
        "linear-gradient(135deg,#e8f5fb,#ffe8ef)";

      image.alt =
        "ALNS Skincare";

    }
  );

});


/* =========================
   CONSOLE
========================= */

console.log(
  "✨ ALNS Skincare — Simple care. Beautiful confidence."
);
