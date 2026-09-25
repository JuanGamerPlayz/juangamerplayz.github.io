const footer = document.createElement("footer");

footer.innerHTML = `
  <p>&copy; 2026 JuanGamerPlayz</p>
  <p>
    <a href="mailto:you@example.com" data-i18n="footer.contact">Contact me</a>
  </p>
`;

document.body.appendChild(footer);

function translateFooter() {
  const contactLink = footer.querySelector("[data-i18n]");
  const translatedContact = window.getTranslation?.("footer.contact", "Contact me");

  if (contactLink) {
    contactLink.textContent = translatedContact;
  }
}

translateFooter();
document.addEventListener("translationsApplied", translateFooter);