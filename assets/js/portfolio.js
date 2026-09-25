const portfolioTabs = document.querySelectorAll("[data-portfolio-tab]");
const portfolioPanels = document.querySelectorAll("[data-portfolio-panel]");
const portfolioCarousels = document.querySelectorAll("[data-portfolio-carousel]");
const portfolioDetailsButtons = document.querySelectorAll(".portfolio-details-button");
const previousModernIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tbGVmdCBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Im0xNSAxOC02LTYgNi02Ii8+PC9zdmc+";
const nextModernIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQgcHJldmlldy1pY29uIj48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+";
const previousClassicIcon = "https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/png/arrow_left.png";
const nextClassicIcon = "https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/png/arrow_right.png";

const updateCarouselButtons = (carousel) => {
  const grid = carousel.querySelector(".portfolio-grid");
  const previousButton = carousel.querySelector("[data-portfolio-previous]");
  const nextButton = carousel.querySelector("[data-portfolio-next]");

  previousButton.innerHTML = `<img class="portfolio-arrow-icon portfolio-arrow-icon--modern" src="${previousModernIcon}" alt="" aria-hidden="true"><img class="portfolio-arrow-icon portfolio-arrow-icon--classic" src="${previousClassicIcon}" alt="" aria-hidden="true">`;
  nextButton.innerHTML = `<img class="portfolio-arrow-icon portfolio-arrow-icon--modern" src="${nextModernIcon}" alt="" aria-hidden="true"><img class="portfolio-arrow-icon portfolio-arrow-icon--classic" src="${nextClassicIcon}" alt="" aria-hidden="true">`;
  const hasOverflow = grid.scrollWidth > grid.clientWidth + 1;

  carousel.classList.toggle("has-overflow", hasOverflow);
  previousButton.disabled = !hasOverflow || grid.scrollLeft <= 1;
  nextButton.disabled = !hasOverflow || grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
};

portfolioCarousels.forEach((carousel) => {
  const grid = carousel.querySelector(".portfolio-grid");
  const previousButton = carousel.querySelector("[data-portfolio-previous]");
  const nextButton = carousel.querySelector("[data-portfolio-next]");

  previousButton.addEventListener("click", () => {
    grid.scrollBy({ left: -grid.clientWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    grid.scrollBy({ left: grid.clientWidth, behavior: "smooth" });
  });

  grid.addEventListener("scroll", () => updateCarouselButtons(carousel));
  window.addEventListener("resize", () => updateCarouselButtons(carousel));
  updateCarouselButtons(carousel);
});

portfolioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.portfolioTab;

    portfolioTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    portfolioPanels.forEach((panel) => {
      const isSelected = panel.dataset.portfolioPanel === selectedCategory;
      panel.hidden = !isSelected;
    });

    const selectedPanel = document.querySelector(`[data-portfolio-panel="${selectedCategory}"]`);
    updateCarouselButtons(selectedPanel.querySelector("[data-portfolio-carousel]"));

    portfolioDropdowns.forEach((dropdown) => {
      dropdown.removeAttribute("open");
      const toggle = dropdown.querySelector(".portfolio-dropdown-toggle");
      const menu = dropdown.querySelector(".portfolio-dropdown-menu");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });
});

const portfolioDropdowns = document.querySelectorAll("[data-portfolio-dropdown]");

portfolioDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".portfolio-dropdown-toggle");
  const menu = dropdown.querySelector(".portfolio-dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdown.hasAttribute("open");
    dropdown.toggleAttribute("open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  menu.querySelectorAll("[data-portfolio-tab]").forEach((item) => {
    item.addEventListener("click", () => {
      dropdown.removeAttribute("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });
});

document.addEventListener("click", (e) => {
  portfolioDropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.removeAttribute("open");
      const toggle = dropdown.querySelector(".portfolio-dropdown-toggle");
      const menu = dropdown.querySelector(".portfolio-dropdown-menu");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });
});

portfolioDetailsButtons.forEach((button) => {
  const modalId = button.dataset.portfolioModal;
  const detailsId = button.getAttribute("aria-controls");

  if (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;
      button.setAttribute("aria-expanded", String(nextState));
      modal.setAttribute("aria-hidden", String(!nextState));
      modal.classList.toggle("is-visible", nextState);
    });

    modal.querySelectorAll("[data-portfolio-modal-close]").forEach((closeEl) => {
      closeEl.addEventListener("click", () => {
        modal.classList.remove("is-visible");
        modal.setAttribute("aria-hidden", "true");
        button.setAttribute("aria-expanded", "false");
      });
    });
  } else if (detailsId) {
    const details = document.getElementById(detailsId);
    if (!details) return;

    button.addEventListener("click", () => {
      const isVisible = details.classList.toggle("is-visible");
      button.setAttribute("aria-expanded", String(isVisible));
      details.setAttribute("aria-hidden", String(!isVisible));
      button.textContent = isVisible
        ? window.getTranslation?.("portfolio.actions.hideDetails", "Hide Details")
        : window.getTranslation?.("portfolio.actions.viewDetails", "View Details");
    });
  }
});