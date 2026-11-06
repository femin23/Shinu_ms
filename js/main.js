/**
 * SHINU M. S. — Official Author Website
 * Interactive Controller Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const mainNav = document.getElementById('mainNav');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Modals
  const bookModal = document.getElementById('bookModal');
  const book2Modal = document.getElementById('book2Modal');
  const authorModal = document.getElementById('authorModal');
  const contactModal = document.getElementById('contactModal');
  const searchModal = document.getElementById('searchModal');

  // Triggers
  const btnExploreBook = document.getElementById('btnExploreBook');
  const btnExploreBook2 = document.getElementById('btnExploreBook2');
  const btnPreOrderBook2 = document.getElementById('btnPreOrderBook2');
  const book2CoverTrigger = document.getElementById('book2CoverTrigger');
  const modalOrderBtn = document.getElementById('modalOrderBtn');
  const modalOrderBook2Btn = document.getElementById('modalOrderBook2Btn');
  const btnAboutAuthor = document.getElementById('btnAboutAuthor');
  const btnKnowMore = document.getElementById('btnKnowMore');
  const btnOpenContact = document.getElementById('btnOpenContact');
  const searchTrigger = document.getElementById('searchTrigger');

  // Close buttons
  const closeBookModal = document.getElementById('closeBookModal');
  const closeBook2Modal = document.getElementById('closeBook2Modal');
  const closeAuthorModal = document.getElementById('closeAuthorModal');
  const closeContactModal = document.getElementById('closeContactModal');
  const closeSearchModal = document.getElementById('closeSearchModal');

  // Contact form
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  // Search
  const siteSearchInput = document.getElementById('siteSearchInput');
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  const searchResults = document.getElementById('searchResults');
  const suggestionTags = document.querySelectorAll('.suggestion-tag');

  /* --------------------------------------------------------------------------
     1. STICKY HEADER & SCROLL BEHAVIOR
     -------------------------------------------------------------------------- */
  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Tracking
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* --------------------------------------------------------------------------
     2. MOBILE MENU TOGGLE
     -------------------------------------------------------------------------- */
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. MODAL CONTROLS (OPEN / CLOSE)
     -------------------------------------------------------------------------- */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Reset contact form state when modal closes
    if (modal === contactModal && contactForm && formSuccess) {
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'flex';
        formSuccess.classList.remove('show');
      }, 400);
    }
  }

  // Open triggers
  if (btnExploreBook) {
    btnExploreBook.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(bookModal);
    });
  }

  const btnFeaturedHotspot = document.getElementById('btnFeaturedHotspot');
  const featuredBookImg = document.getElementById('featuredBookImg');
  const btnFeaturedExplore = document.getElementById('btnFeaturedExplore');
  if (btnFeaturedHotspot) {
    btnFeaturedHotspot.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(bookModal);
    });
  }
  if (featuredBookImg) {
    featuredBookImg.addEventListener('click', () => {
      openModal(bookModal);
    });
  }
  if (btnFeaturedExplore) {
    btnFeaturedExplore.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(bookModal);
    });
  }

  if (btnExploreBook2) {
    btnExploreBook2.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(book2Modal);
    });
  }

  const btnBook2Hotspot = document.getElementById('btnBook2Hotspot');
  const book2CoverImg = document.getElementById('book2CoverImg');
  if (btnBook2Hotspot) {
    btnBook2Hotspot.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(book2Modal);
    });
  }
  if (book2CoverImg) {
    book2CoverImg.addEventListener('click', () => {
      openModal(book2Modal);
    });
  }

  if (book2CoverTrigger) {
    book2CoverTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(book2Modal);
    });
    book2CoverTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(book2Modal);
      }
    });
  }

  function handleOrderBook1() {
    closeModal(bookModal);
    openModal(contactModal);
    const msgInput = document.getElementById('senderSubject');
    const msgText = document.getElementById('senderMessage');
    if (msgInput) msgInput.value = "Order: Jahanna: The Rise of Martha";
    if (msgText) msgText.value = "Hello Shinu, I would like to order a collector's copy of Jahanna: The Rise of Martha.";
  }

  function handleOrderBook2() {
    closeModal(book2Modal);
    openModal(contactModal);
    const msgInput = document.getElementById('senderSubject');
    const msgText = document.getElementById('senderMessage');
    if (msgInput) msgInput.value = "Pre-Order: Jahanna 2: Life of Evil";
    if (msgText) msgText.value = "Hello Shinu, I would like to pre-order a collector's edition copy of Jahanna 2: Life of Evil.";
  }

  if (modalOrderBtn) modalOrderBtn.addEventListener('click', handleOrderBook1);

  if (btnAboutAuthor) {
    btnAboutAuthor.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(authorModal);
    });
  }

  if (btnKnowMore) {
    btnKnowMore.addEventListener('click', () => {
      openModal(authorModal);
    });
  }

  if (btnOpenContact) {
    btnOpenContact.addEventListener('click', () => {
      openModal(contactModal);
    });
  }

  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      openModal(searchModal);
      setTimeout(() => siteSearchInput && siteSearchInput.focus(), 100);
    });
  }

  // Close triggers
  if (closeBookModal) closeBookModal.addEventListener('click', () => closeModal(bookModal));
  if (closeBook2Modal) closeBook2Modal.addEventListener('click', () => closeModal(book2Modal));
  if (closeAuthorModal) closeAuthorModal.addEventListener('click', () => closeModal(authorModal));
  if (closeContactModal) closeContactModal.addEventListener('click', () => closeModal(contactModal));
  if (closeSearchModal) closeSearchModal.addEventListener('click', () => closeModal(searchModal));

  // Click outside to close
  [bookModal, book2Modal, authorModal, contactModal, searchModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [bookModal, book2Modal, authorModal, contactModal, searchModal].forEach(closeModal);
    }
  });

  /* --------------------------------------------------------------------------
     4. CONTACT FORM SUBMISSION -> shinuvjmd@gmail.com
     -------------------------------------------------------------------------- */
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const senderName = document.getElementById('senderName');
      const senderEmail = document.getElementById('senderEmail');
      const senderSubject = document.getElementById('senderSubject');
      const senderMessage = document.getElementById('senderMessage');

      const name = senderName ? senderName.value.trim() : '';
      const email = senderEmail ? senderEmail.value.trim() : '';
      const subjectText = senderSubject ? senderSubject.value.trim() : '';
      const messageText = senderMessage ? senderMessage.value.trim() : '';

      const targetEmail = 'shinuvjmd@gmail.com';
      const mailSubject = subjectText ? `[Shinu M. S. Website] ${subjectText}` : `Reader Message from ${name || 'Website Visitor'}`;

      const mailBody = 
`From: ${name} (${email})
Subject: ${subjectText}

Message:
${messageText}

--------------------------------------------------
Sent via Shinu M. S. Official Website`;

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'TRANSMIT MESSAGE';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>DISPATCHING...</span>';
      }

      // Update direct send links on success view
      const directSendMailto = document.getElementById('directSendMailto');
      if (directSendMailto) directSendMailto.href = mailtoUrl;

      const directSendGmail = document.getElementById('directSendGmail');
      if (directSendGmail) directSendGmail.href = gmailWebUrl;

      // Trigger user default email client automatically
      try {
        const mailAnchor = document.createElement('a');
        mailAnchor.href = mailtoUrl;
        mailAnchor.style.display = 'none';
        document.body.appendChild(mailAnchor);
        mailAnchor.click();
        document.body.removeChild(mailAnchor);
      } catch (err) {
        window.location.href = mailtoUrl;
      }

      // Show confirmation dialog with direct links
      setTimeout(() => {
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 500);
    });
  }

  /* --------------------------------------------------------------------------
     5. SITE SEARCH FUNCTIONALITY
     -------------------------------------------------------------------------- */
  const searchIndex = [
    {
      title: "Jahanna 2: Life of Evil",
      desc: "When ancient evil awakens, even faith becomes a weapon. Following The Rise of Martha, the reckoning begins.",
      action: () => openModal(book2Modal)
    },
    {
      title: "Pre-Order Jahanna 2 on WhatsApp (+91 8848392959)",
      desc: "Connect directly on WhatsApp to reserve your collector's edition copy of Jahanna 2: Life of Evil.",
      action: () => window.open('https://wa.me/918848392959?text=Hello%20Shinu%2C%20I%20would%20like%20to%20pre-order%20a%20copy%20of%20Jahanna%202%3A%20Life%20of%20Evil.', '_blank')
    },
    {
      title: "Life of Evil (Book 2)",
      desc: "Deluxe hardcover chronicle following The Rise of Martha. Pre-order and collector editions available.",
      action: () => openModal(book2Modal)
    },
    {
      title: "Jahanna: The Rise of Martha",
      desc: "A dark fantasy where faith, fear, and evil intertwine. The birthplace of all sins is this book.",
      action: () => openModal(bookModal)
    },
    {
      title: "Buy Jahanna: The Rise of Martha (BookBangTheory)",
      desc: "Pre-book or order your print copy online via BookBangTheory.",
      action: () => window.open('https://www.bookbangtheory.co.in/product/jahanna-the-rise-of-martha-pre-booking/', '_blank')
    },
    {
      title: "Listen to Jahanna on Storytel (Audiobook)",
      desc: "Immerse yourself in the audiobook edition of Jahanna: The Rise of Martha on Storytel.",
      action: () => window.open('https://www.storytel.com/tv/books/jahanna-12840825', '_blank')
    },
    {
      title: "About Shinu M. S.",
      desc: "Novelist, storyteller, and creator of the Era Universe exploring deep psychological and existential themes.",
      action: () => openModal(authorModal)
    },
    {
      title: "ERA UNIVERSE",
      desc: "One Universe. Countless Stories. A Shared Destiny. Pioneering shared fictional universe in Malayalam literature.",
      action: () => {
        const el = document.getElementById('era-universe');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: "6th Collector's Edition",
      desc: "Revised and expanded release featuring enriched lore, author annotations, and collector binding.",
      action: () => openModal(bookModal)
    },
    {
      title: "A Note from the Author — Shinu M. S.",
      desc: "Reflections on Jahanna, Parvathi, the M Universe, and creating a story not about heroes, but solely about sinners.",
      action: () => {
        const el = document.getElementById('author-note');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: "Contact & Literary Enquiries",
      desc: "Reach out for publishing, speaking engagements, interviews, or reader communications.",
      action: () => openModal(contactModal)
    }
  ];

  function performSearch(query) {
    if (!searchResults) return;
    const cleanQuery = query.trim().toLowerCase();
    searchResults.innerHTML = '';

    if (!cleanQuery) return;

    const matches = searchIndex.filter((item) =>
      item.title.toLowerCase().includes(cleanQuery) ||
      item.desc.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-result-item"><p>No archives matching "<em>${escapeHTML(query)}</em>". Try searching for Jahanna or Era Universe.</p></div>`;
      return;
    }

    matches.forEach((item) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'search-result-item';
      itemEl.innerHTML = `
        <h4>${escapeHTML(item.title)}</h4>
        <p>${escapeHTML(item.desc)}</p>
      `;
      itemEl.addEventListener('click', () => {
        closeModal(searchModal);
        item.action();
      });
      searchResults.appendChild(itemEl);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  if (searchSubmitBtn && siteSearchInput) {
    searchSubmitBtn.addEventListener('click', () => performSearch(siteSearchInput.value));
    siteSearchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') performSearch(siteSearchInput.value);
    });
  }

  suggestionTags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (siteSearchInput) {
        siteSearchInput.value = tag.textContent;
        performSearch(tag.textContent);
      }
    });
  });

  /* --------------------------------------------------------------------------
     6. SUBTLE 3D TILT ON BOOK VISUALS (DESKTOP)
     -------------------------------------------------------------------------- */
  const tiltElements = document.querySelectorAll('.hero-artwork-wrapper, .featured-image-wrapper');

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });

  /* --------------------------------------------------------------------------
     7. DARK FANTASY BLOOD PARTICLES ATMOSPHERE
     -------------------------------------------------------------------------- */
  function initBloodAtmosphere() {
    const canvas = document.getElementById('bloodCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    });

    const particles = [];
    const particleCount = 42;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.55 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        fadingOut: Math.random() > 0.5
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.fadingOut) {
          p.alpha -= p.fadeSpeed;
          if (p.alpha <= 0.08) p.fadingOut = false;
        } else {
          p.alpha += p.fadeSpeed;
          if (p.alpha >= 0.75) p.fadingOut = true;
        }

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Draw glowing blood droplet / ember
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        grad.addColorStop(0, `rgba(225, 25, 35, ${p.alpha})`);
        grad.addColorStop(0.45, `rgba(145, 12, 18, ${p.alpha * 0.75})`);
        grad.addColorStop(1, 'rgba(40, 2, 5, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    render();
  }

  initBloodAtmosphere();
});
