const header = document.createElement("header");

header.innerHTML = `
  <div class="top-bar">
    <nav aria-label="Main navigation" data-i18n="accessibility.mainNavigation" data-i18n-attr="aria-label">
      <a href="/index.html" data-i18n="nav.home"><img class="nav-icon nav-icon--modern" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtaG91c2UgcHJldmlldy1pY29uIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTZhMiAyIDAgMCAxIDIuNTgyIDBsNyA2QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg==" alt=""><img class="nav-icon nav-icon--classic" aria-hidden="true" src="https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/png/house.png" alt="">Home</a>
      <span class="Separator" aria-hidden="true">|</span>
      <a href="/pages/portfolio.html" data-i18n="nav.portfolio"><img class="nav-icon nav-icon--modern" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyaWVmY2FzZS1idXNpbmVzcyBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0xMiAxMmguMDEiLz48cGF0aCBkPSJNMTYgNlY0YTIgMiAwIDAgMC0yLTJoLTRhMiAyIDAgMCAwLTIgMnYyIi8+PHBhdGggZD0iTTIyIDEzYTE4LjE1IDE4LjE1IDAgMCAxLTIwIDAiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjYiIHJ4PSIyIi8+PC9zdmc+" alt=""><img class="nav-icon nav-icon--classic" aria-hidden="true" src="https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/png/briefcase.png" alt="">Portfolio</a>
      <span class="Separator" aria-hidden="true">|</span>
      <a href="/pages/contact.html" data-i18n="nav.contact"><img class="nav-icon nav-icon--modern" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNtYXJ0cGhvbmUgcHJldmlldy1pY29uIj48cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHg9IjUiIHk9IjIiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik0xMiAxOGguMDEiLz48L3N2Zz4=" alt=""><img class="nav-icon nav-icon--classic" aria-hidden="true" src="https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/png/phone.png" alt="">Contact</a>
      <!-- <a href="/pages/cv-resume.html" data-i18n="nav.resume">CV / Resume</a> -->
    </nav>

    <div class="header-actions">
      <div class="lang-select-wrap" data-lang-select>
        <button type="button" class="lang-select-trigger" aria-haspopup="listbox" aria-expanded="false">
          <img id="lang-flag-preview" class="lang-flag-preview" src="https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/gb.png" alt="Selected language flag" />
          <span class="lang-select-label">English</span>
          <span class="lang-select-caret" aria-hidden="true">▾</span>
        </button>

        <ul class="lang-select-menu" role="listbox" aria-label="Language" data-i18n="accessibility.languageMenu" data-i18n-attr="aria-label">
          <li data-value="en" data-label="English" role="option" aria-selected="true">English</li>
          <li data-value="fr" data-label="French" role="option">French</li>
          <li data-value="de" data-label="German" role="option">German</li>
          <li data-value="it" data-label="Italian" role="option">Italian</li>
          <li data-value="jp" data-label="Japanese" role="option">Japanese</li>
          <li data-value="kr" data-label="Korean" role="option">Korean</li>
          <li data-value="pt" data-label="Portuguese" role="option">Portuguese</li>
          <li data-value="ru" data-label="Russian" role="option">Russian</li>
          <li data-value="es" data-label="Spanish" role="option">Spanish</li>
        </ul>
      </div>

      <button class="color-theme-button" type="button" aria-label="Switch to dark theme" data-color-theme-toggle>
        <img class="color-theme-icon color-theme-icon--sun" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1biBwcmV2aWV3LWljb24iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45MyA0LjkzIDEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xNy42NiAxNy42NiAxLjQxIDEuNDEiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zNCAxNy42Ni0xLjQxIDEuNDEiLz48cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiLz48L3N2Zz4=" alt="">
        <img class="color-theme-icon color-theme-icon--moon" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vb24tc3RhciBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0xOCA1aDQiLz48cGF0aCBkPSJNMjAgM3Y0Ii8+PHBhdGggZD0iTTIwLjk4NSAxMi40ODZhOSA5IDAgMSAxLTkuNDczLTkuNDcyYy40MDUtLjAyMi42MTcuNDYuNDAyLjgwM2E2IDYgMCAwIDAgOC4yNjggOC4yNjhjLjM0NC0uMjE1LjgyNS0uMDA0LjgwMy40MDEiLz48L3N2Zz4=" alt="">
      </button>

      <button class="theme-button" type="button" aria-label="Change theme" data-theme-toggle>
        <img src="../assets/images/icons/classic_r_logo_disabled.png" alt="Classic mode disabled" />
      </button>
    </div>
  </div>
`;

const clickSound = new Audio(
  new URL("../audio/classic_roblox_button_sfx.mp3", document.currentScript.src)
);
clickSound.preload = "auto";

document.addEventListener("click", (event) => {
  const clickable = event.target.closest("button, a");

  if (!clickable || !document.body.classList.contains("classicmode")) {
    return;
  }

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {
    // The browser may block playback in unusual cases.
  });

  if (
    clickable.closest("nav") &&
    clickable.tagName === "A" &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    !event.altKey &&
    clickable.target !== "_blank"
  ) {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = clickable.href;
    }, 120);
  }
});

let translations = {};
const defaultLang = localStorage.getItem("lang") || "en";
const isPortfolioPage = window.location.pathname.includes("portfolio");
const iconBase = window.location.pathname.includes("/pages/")
  ? "../assets/images/icons/"
  : "assets/images/icons/";
const flagBase = window.location.pathname.includes("/pages/")
  ? "../assets/images/flags/"
  : "assets/images/flags/";
const disabledIcon = `${iconBase}classic_r_logo_disabled.png`;
const activatedIcon = `${iconBase}classic_r_logo_activated.png`;

const classicFlagMap = {
  de: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/de.png",
  en: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/gb.png",
  es: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/es.png",
  fr: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/fr.png",
  it: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/it.png",
  jp: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/jp.png",
  kr: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/kr.png",
  pt: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/br.png",
  ru: "https://raw.githubusercontent.com/legacy-icons/famfamfam-flags/master/dist/png/ru.png",
};

const modernFlagMap = {
  de: `${flagBase}flag_germany.png`,
  en: `${flagBase}flag_united_kingdom.png`,
  es: `${flagBase}flag_spain.png`,
  fr: `${flagBase}flag_france.png`,
  it: `${flagBase}flag_italy.png`,
  jp: `${flagBase}flag_japan.png`,
  kr: `${flagBase}flag_south_korea.png`,
  pt: `${flagBase}flag_brazil.png`,
  ru: `${flagBase}flag_russia.png`,
};

function getFlagUrl(lang) {
  const useClassic = document.body.classList.contains("classicmode");
  const map = useClassic ? classicFlagMap : modernFlagMap;
  return map[lang] || classicFlagMap.en;
}

document.body.prepend(header);

function applyThemeButtonState() {
  const toggleButton = document.querySelector("[data-theme-toggle]");
  if (!toggleButton) return;

  const isActive = document.body.classList.contains("classicmode");
  const icon = toggleButton.querySelector("img");

  if (icon) {
    icon.src = isActive ? activatedIcon : disabledIcon;
    icon.alt = isActive
      ? translations["theme.classicEnabled"] || "Classic mode enabled"
      : translations["theme.classicDisabled"] || "Classic mode disabled";
  }

  const preview = document.getElementById("lang-flag-preview");
  const activeLang = localStorage.getItem("lang") || "en";

  if (preview) {
    preview.src = getFlagUrl(activeLang);
    preview.alt = translations["accessibility.selectedLanguageFlag"] || `${activeLang.toUpperCase()} flag`;
  }

  toggleButton.setAttribute("aria-pressed", String(isActive));
  toggleButton.setAttribute(
    "aria-label",
    translations["theme.changeTheme"] || "Change theme"
  );
}

function applyColorThemeButtonState() {
  const toggleButton = document.querySelector("[data-color-theme-toggle]");
  if (!toggleButton) return;

  const isDark = document.body.classList.contains("darktheme");
  toggleButton.setAttribute(
    "aria-label",
    isDark
      ? translations["theme.switchToLight"] || "Switch to light theme"
      : translations["theme.switchToDark"] || "Switch to dark theme"
  );
  toggleButton.setAttribute("aria-pressed", String(isDark));
}

async function loadTranslations(lang) {
  const localeBase = window.location.pathname.includes("/pages/")
    ? "../locales/"
    : "locales/";

  const response = await fetch(`${localeBase}${lang}.json`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Locale not found: ${lang}`);
  }

  return await response.json();
}

async function applyTranslations(lang) {
  document.documentElement.lang = lang;
  translations = await loadTranslations(lang);
  window.getTranslation = (key, fallback) => translations[key] || fallback;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      const navIcon = el.querySelector(".nav-icon");
      if (navIcon) {
        const labelNode = Array.from(el.childNodes).find(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );
        if (labelNode) {
          labelNode.textContent = translations[key];
        }
      } else if (!el.dataset.i18nAttr) {
        el.textContent = translations[key];
      }

      (el.dataset.i18nAttr || "").split(",").filter(Boolean).forEach((attribute) => {
        el.setAttribute(attribute, translations[key]);
      });
    }
  });

  const langTrigger = document.querySelector(".lang-select-trigger");
  const langLabel = document.querySelector(".lang-select-label");
  const preview = document.getElementById("lang-flag-preview");
  const selectedLanguage = translations[`languages.${lang}`] || lang;

  if (langLabel) {
    langLabel.textContent = selectedLanguage;
  }

  if (langTrigger) {
    langTrigger.setAttribute(
      "aria-label",
      `${translations["accessibility.selectedLanguage"] || "Selected language"}: ${selectedLanguage}`
    );
  }

  if (preview) {
    const flagUrl = getFlagUrl(lang);
    preview.src = flagUrl;
    preview.alt = translations["accessibility.selectedLanguageFlag"] || `${lang.toUpperCase()} flag`;
  }

  const langMenu = document.querySelector(".lang-select-menu");
  if (langMenu) {
    langMenu.querySelectorAll("li").forEach((item) => {
      const isSelected = item.dataset.value === lang;
      item.setAttribute("aria-selected", String(isSelected));
      item.classList.toggle("selected", isSelected);
    });
  }

  document.dispatchEvent(new CustomEvent("translationsApplied"));
  applyColorThemeButtonState();
  applyThemeButtonState();
}

async function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  await applyTranslations(lang);
}

const langSelectWrap = document.querySelector("[data-lang-select]");
const langTrigger = document.querySelector(".lang-select-trigger");
const langMenu = document.querySelector(".lang-select-menu");
if (langSelectWrap && langTrigger && langMenu) {
  langTrigger.addEventListener("click", () => {
    const isOpen = langSelectWrap.classList.contains("open");
    langSelectWrap.classList.toggle("open", !isOpen);
    langTrigger.setAttribute("aria-expanded", String(!isOpen));
  });

  langMenu.addEventListener("click", (event) => {
    const option = event.target.closest("li[data-value]");
    if (!option) return;

    const nextLang = option.dataset.value;
    setLanguage(nextLang);
    langSelectWrap.classList.remove("open");
    langTrigger.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (!langSelectWrap.contains(event.target)) {
      langSelectWrap.classList.remove("open");
      langTrigger.setAttribute("aria-expanded", "false");
    }
  });
}

const themeToggle = document.querySelector("[data-theme-toggle]");
const colorThemeToggle = document.querySelector("[data-color-theme-toggle]");
const savedColorTheme = localStorage.getItem("colorTheme") || "light";
document.body.classList.toggle("darktheme", savedColorTheme === "dark");
document.body.classList.toggle("lighttheme", savedColorTheme !== "dark");

if (colorThemeToggle) {
  colorThemeToggle.addEventListener("click", () => {
    const nextIsDark = !document.body.classList.contains("darktheme");
    document.body.classList.toggle("darktheme", nextIsDark);
    document.body.classList.toggle("lighttheme", !nextIsDark);
    localStorage.setItem("colorTheme", nextIsDark ? "dark" : "light");
    applyColorThemeButtonState();
  });

  applyColorThemeButtonState();
}

if (isPortfolioPage && themeToggle) {
  const savedTheme = localStorage.getItem("classicTheme") === "on";
  if (savedTheme) {
    document.body.classList.add("classicmode");
  }

  themeToggle.addEventListener("click", () => {
    const nextState = !document.body.classList.contains("classicmode");
    document.body.classList.toggle("classicmode", nextState);
    localStorage.setItem("classicTheme", nextState ? "on" : "off");
    applyTranslations(localStorage.getItem("lang") || "en");
    applyThemeButtonState();
  });

  applyThemeButtonState();
} else if (themeToggle) {
  themeToggle.remove();
}

applyTranslations(defaultLang);