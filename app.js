/**
 * Capy-Cool Studio - Vector Character Customizer & LATAM Flags
 * Interactive vector SVG clothing and accessory customizer with Latin American national flags.
 */

const CAPY_PALETTE = {
  capyOrange: "#E27E36",
  streetBlue: "#266BB0",
  cargoGreen: "#237E44",
  fieryRed: "#DE3D32",
  deepBlack: "#26292E",
  softPurple: "#8F7BB8",
  sandBeige: "#CEBA8A",
  navyBlue: "#3B4D68",
  classicBrown: "#8B5A3C",
  heatherGrey: "#9EA2A7",
  darkCharcoal: "#373B40",
  customTeal: "#2D8D90",
  denimBlue: "#4F738E",
  camoGreen: "#6B744A",
  orangePuffer: "#D47029",
  sunnyYellow: "#E5A93B",
  creamWhite: "#F8F5EE"
};

const SVG_BUILTIN_PRESETS = [
  {
    id: "svg_classic",
    name: "Classic Streetwear (Original)",
    description: "The iconic Capy-Cool: Blue hoodie, cargo green shorts, rainbow sneakers, and rainbow shades.",
    state: {
      hoodie: { base: "#2572C0", drawstring: "#FBFAF6" },
      pants: { base: "#338D52" },
      shoes: { main: "#D7413D", stripeMode: "rainbow", soles: "#FFFFFF", laces: "#FBFAF6" },
      glasses: { mode: "rainbow", color: "#2572C0", lens: "#36383F" },
      fur: { base: "#EF8241", snout: "#B86342", blush: "#F23A34" }
    }
  },
  {
    id: "svg_fiery_skater",
    name: "Fiery Street Skater",
    description: "Hot crimson hoodie, stealth black cargo shorts, matching red kicks, and flame style.",
    state: {
      hoodie: { base: "#DE3D32", drawstring: "#FCBE2D" },
      pants: { base: "#26292E" },
      shoes: { main: "#DE3D32", stripeMode: "gold", soles: "#FFFFFF", laces: "#FCBE2D" },
      glasses: { mode: "solid", color: "#DE3D32", lens: "#26292E" },
      fur: { base: "#EF8241", snout: "#B86342", blush: "#F23A34" }
    }
  },
  {
    id: "svg_stealth_tech",
    name: "Stealth Techwear",
    description: "Monochrome urban ninja: all-black garments with sleek dark gray accents.",
    state: {
      hoodie: { base: "#22252B", drawstring: "#4A5260" },
      pants: { base: "#1B1D22" },
      shoes: { main: "#1E2127", stripeMode: "monochrome", soles: "#1E2127", laces: "#4A5260" },
      glasses: { mode: "solid", color: "#373B40", lens: "#111317" },
      fur: { base: "#EF8241", snout: "#B86342", blush: "#F23A34" }
    }
  },
  {
    id: "svg_camo_explorer",
    name: "Tactical Camo Explorer",
    description: "Earth-toned outdoor fit: olive green hoodie, khaki beige shorts, tan boots style.",
    state: {
      hoodie: { base: "#5B683E", drawstring: "#CEBA8A" },
      pants: { base: "#CEBA8A" },
      shoes: { main: "#8B5A3C", stripeMode: "white", soles: "#FFFFFF", laces: "#FBFAF6" },
      glasses: { mode: "solid", color: "#5B683E", lens: "#2D3421" },
      fur: { base: "#EF8241", snout: "#B86342", blush: "#F23A34" }
    }
  },
  {
    id: "svg_vintage_denim",
    name: "Vintage Denim Casual",
    description: "Washed indigo denim hoodie, heather grey sweatpants, and crisp white kicks.",
    state: {
      hoodie: { base: "#4F738E", drawstring: "#FBFAF6" },
      pants: { base: "#9EA2A7" },
      shoes: { main: "#FFFFFF", stripeMode: "white", soles: "#FFFFFF", laces: "#4F738E" },
      glasses: { mode: "solid", color: "#4F738E", lens: "#36383F" },
      fur: { base: "#E09353", snout: "#AD6935", blush: "#F23A34" }
    }
  },
  {
    id: "svg_lavender_chill",
    name: "Lavender Chill",
    description: "Pastel purple aesthetic hoodie with navy shorts, clean vibes and friendly face.",
    state: {
      hoodie: { base: "#9D84C7", drawstring: "#FBFAF6" },
      pants: { base: "#3B4D68" },
      shoes: { main: "#9D84C7", stripeMode: "white", soles: "#FFFFFF", laces: "#FBFAF6" },
      glasses: { mode: "hidden", color: "#9D84C7", lens: "#36383F" },
      fur: { base: "#F09B5E", snout: "#BA6F3B", blush: "#FF6B8B" }
    }
  },
  {
    id: "svg_cyberpunk",
    name: "Cyberpunk Neon",
    description: "Vibrant high-contrast cyberpunk: electric cyan hoodie with neon pink cargo shorts.",
    state: {
      hoodie: { base: "#06B6D4", drawstring: "#EC4899" },
      pants: { base: "#EC4899" },
      shoes: { main: "#8B5CF6", stripeMode: "rainbow", soles: "#111827", laces: "#06B6D4" },
      glasses: { mode: "rainbow", color: "#06B6D4", lens: "#111827" },
      fur: { base: "#EF8241", snout: "#B86342", blush: "#EC4899" }
    }
  }
];

class CapyStudio {
  constructor() {
    this.svgState = {
      hoodie: {
        base: "#2572C0",
        drawstring: "#FBFAF6"
      },
      pants: {
        base: "#338D52"
      },
      shoes: {
        main: "#D7413D",
        stripeMode: "rainbow",
        soles: "#FFFFFF",
        laces: "#FBFAF6"
      },
      glasses: {
        mode: "rainbow",
        color: "#2572C0",
        lens: "#36383F"
      },
      fur: {
        base: "#EF8241",
        snout: "#B86342",
        blush: "#F23A34"
      }
    };

    this.activeLatamFlag = null;
    this.latamFlags = typeof LATAM_FLAGS !== "undefined" ? [...LATAM_FLAGS].sort((a, b) => a.name.localeCompare(b.name)) : [];
    this.rawSvgText = "";

    this.svgContainer = document.getElementById("svgStageContainer");
    this.canvasWrapper = document.getElementById("canvasWrapper");
    this.floatingPreview = document.getElementById("floatingPreview");
    this.floatingSvgContainer = document.getElementById("floatingSvgContainer");
    this.floatingLatamBgLayer = document.getElementById("floatingLatamBgLayer");

    this.init();
  }

  async init() {
    this.showToast("Loading Capy-Cool Vector Assets...", "info");
    
    try {
      this.rawSvgText = await this.loadSvgText("capyrinha.svg");
      this.injectSvgToStage();
    } catch (err) {
      console.error("Failed to load capyrinha.svg:", err);
      this.showToast("Could not load capyrinha.svg", "error");
      return;
    }

    this.setupLatamFlags();
    this.setupSvgUI();
    this.setupSvgPresets();
    this.setupEventListeners();
    this.setupFloatingPreview();
    this.loadUserSvgPresets();
    this.updateSvgColors();

    this.showToast("Capy-Cool Vector Studio Ready! 🦫✨", "success");
  }

  // ==================== ASSET LOADERS ====================

  async loadSvgText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.text();
  }

  injectSvgToStage() {
    if (this.svgContainer) {
      this.svgContainer.innerHTML = this.rawSvgText;

      const svgEl = this.svgContainer.querySelector("svg");
      if (svgEl) {
        svgEl.id = "capySvg";
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgEl.style.width = "100%";
        svgEl.style.height = "100%";
        svgEl.style.display = "block";
      }
    }

    if (this.floatingSvgContainer) {
      // Avoid clip-path ID collisions by renaming in the floating preview copy
      const floatingText = this.rawSvgText.replace(/clip0_11_2/g, "clip0_11_2_floating");
      this.floatingSvgContainer.innerHTML = floatingText;

      const fSvgEl = this.floatingSvgContainer.querySelector("svg");
      if (fSvgEl) {
        fSvgEl.id = "floatingCapySvg";
        fSvgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        fSvgEl.style.width = "100%";
        fSvgEl.style.height = "100%";
        fSvgEl.style.display = "block";
      }
    }
  }

  // ==================== COLOR SHADING ENGINE ====================

  adjustColor(hex, percent) {
    let num = parseInt(hex.replace("#", ""), 16);
    if (isNaN(num)) return hex;

    let r = (num >> 16) + Math.round(255 * (percent / 100));
    let g = ((num >> 8) & 0x00FF) + Math.round(255 * (percent / 100));
    let b = (num & 0x0000FF) + Math.round(255 * (percent / 100));

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  updateSvgColors() {
    const svgs = [document.getElementById("capySvg"), document.getElementById("floatingCapySvg")].filter(Boolean);
    if (svgs.length === 0) return;

    // Trigger color update pulse on floating preview card if active
    if (this.floatingPreview && this.floatingPreview.classList.contains("visible")) {
      const card = this.floatingPreview.querySelector(".floating-preview-card");
      if (card) {
        card.classList.remove("preview-pulse");
        void card.offsetWidth; // force DOM reflow to replay pulse
        card.classList.add("preview-pulse");
      }
    }

    // 1. Hoodie & Outerwear
    const hBase = this.svgState.hoodie.base;
    const hLight = this.adjustColor(hBase, 12);
    const hDark = this.adjustColor(hBase, -18);
    const hShadow = this.adjustColor(hBase, -32);

    // Drawstrings
    const dColor = this.svgState.hoodie.drawstring;
    const dDark = this.adjustColor(dColor, -22);

    // 2. Pants / Cargo Shorts
    const pBase = this.svgState.pants.base;
    const pLight = this.adjustColor(pBase, 12);
    const pDark = this.adjustColor(pBase, -18);
    const pShadow = this.adjustColor(pBase, -32);

    // 3. Footwear / Shoes
    const sBase = this.svgState.shoes.main;
    const sLight = this.adjustColor(sBase, 12);
    const sDark = this.adjustColor(sBase, -20);
    const stripeMode = this.svgState.shoes.stripeMode;

    // 4. Sunglasses
    const gMode = this.svgState.glasses.mode;

    // 5. Fur & Body
    const fBase = this.svgState.fur.base;
    const fDark = this.adjustColor(fBase, -18);

    svgs.forEach(svg => {
      // 1. Hoodie & Outerwear
      svg.querySelectorAll("[data-part='hoodie-base']").forEach(el => el.setAttribute("fill", hBase));
      svg.querySelectorAll("[data-part='hoodie-highlight']").forEach(el => el.setAttribute("fill", hLight));
      svg.querySelectorAll("[data-part='hoodie-crease']").forEach(el => el.setAttribute("fill", hDark));
      svg.querySelectorAll("[data-part='hoodie-shadow']").forEach(el => el.setAttribute("fill", hShadow));

      // Drawstrings
      svg.querySelectorAll("[data-part='drawstrings-cord']").forEach(el => el.setAttribute("fill", dColor));
      svg.querySelectorAll("[data-part='drawstrings-shadow']").forEach(el => el.setAttribute("fill", dDark));

      // 2. Pants / Cargo Shorts
      svg.querySelectorAll("[data-part='pants-base']").forEach(el => el.setAttribute("fill", pBase));
      svg.querySelectorAll("[data-part='pants-highlight']").forEach(el => el.setAttribute("fill", pLight));
      svg.querySelectorAll("[data-part='pants-crease']").forEach(el => el.setAttribute("fill", pDark));
      svg.querySelectorAll("[data-part='pants-shadow']").forEach(el => el.setAttribute("fill", pShadow));

      // 3. Footwear / Shoes
      svg.querySelectorAll("[data-part='shoe-main']").forEach(el => el.setAttribute("fill", sBase));
      svg.querySelectorAll("[data-part='shoe-highlight']").forEach(el => el.setAttribute("fill", sLight));
      svg.querySelectorAll("[data-part='shoe-crease']").forEach(el => el.setAttribute("fill", sDark));
      svg.querySelectorAll("[data-part='shoe-soles']").forEach(el => el.setAttribute("fill", this.svgState.shoes.soles));
      svg.querySelectorAll("[data-part='shoe-laces']").forEach(el => el.setAttribute("fill", this.svgState.shoes.laces));

      // Shoe Side Stripes
      const stripes = svg.querySelectorAll("[data-part='shoe-stripes']");
      if (stripes.length > 0) {
        if (stripeMode === "rainbow") {
          const rainbowTints = ["#FCBE2D", "#EF4444", "#3B82F6", "#10B981"];
          stripes.forEach((el, idx) => {
            el.setAttribute("fill", rainbowTints[idx % rainbowTints.length]);
          });
        } else if (stripeMode === "monochrome") {
          stripes.forEach(el => el.setAttribute("fill", sLight));
        } else if (stripeMode === "white") {
          stripes.forEach(el => el.setAttribute("fill", "#FBFAF6"));
        } else if (stripeMode === "gold") {
          stripes.forEach(el => el.setAttribute("fill", "#FBBF24"));
        }
      }

      // 4. Sunglasses
      const glassesGroup = svg.querySelectorAll("[data-part^='glasses-']");
      if (gMode === "hidden") {
        glassesGroup.forEach(el => el.style.display = "none");
      } else {
        glassesGroup.forEach(el => el.style.display = "");
        if (gMode === "solid") {
          svg.querySelectorAll("[data-part='glasses-frame']").forEach(el => el.setAttribute("fill", this.svgState.glasses.color));
          svg.querySelectorAll("[data-part='glasses-shadow']").forEach(el => el.setAttribute("fill", this.adjustColor(this.svgState.glasses.color, -25)));
        } else {
          const rainbowColors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];
          svg.querySelectorAll("[data-part='glasses-frame']").forEach((el, idx) => {
            el.setAttribute("fill", rainbowColors[idx % rainbowColors.length]);
          });
        }
        svg.querySelectorAll("[data-part='glasses-lens']").forEach(el => el.setAttribute("fill", this.svgState.glasses.lens));
      }

      // 5. Fur & Body
      svg.querySelectorAll("[data-part='fur-body']").forEach(el => el.setAttribute("fill", fBase));
      svg.querySelectorAll("[data-part='fur-shadow']").forEach(el => el.setAttribute("fill", fDark));
      svg.querySelectorAll("[data-part='fur-snout']").forEach(el => el.setAttribute("fill", this.svgState.fur.snout));
      svg.querySelectorAll("[data-part='fur-blush']").forEach(el => el.setAttribute("fill", this.svgState.fur.blush));
    });
  }

  // ==================== LATAM FLAGS SYSTEM ====================

  setupLatamFlags() {
    const selects = document.querySelectorAll(".latam-flag-select, #selectLatamFlag");
    const matchBtns = document.querySelectorAll(".btn-match-flag, #btnMatchFlagColors");

    // Populate Select options with sorted LATAM countries
    selects.forEach(select => {
      while (select.options.length > 1) {
        select.remove(1);
      }
      this.latamFlags.forEach(flag => {
        const opt = document.createElement("option");
        opt.value = flag.id;
        opt.textContent = `${flag.emoji} ${flag.name}`;
        select.appendChild(opt);
      });

      select.addEventListener("change", (e) => {
        const val = e.target.value;
        this.setLatamFlag(val === "none" ? null : val);
      });
    });

    matchBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.matchOutfitToFlag();
      });
    });
  }

  setLatamFlag(flagId) {
    this.activeLatamFlag = flagId;
    
    // Sync all selects
    document.querySelectorAll(".latam-flag-select, #selectLatamFlag").forEach(select => {
      select.value = flagId || "none";
    });

    const bgLayers = [document.getElementById("latamBgLayer"), document.getElementById("floatingLatamBgLayer")].filter(Boolean);

    if (!flagId) {
      bgLayers.forEach(layer => {
        layer.innerHTML = "";
        layer.classList.remove("active");
      });
      this.showToast("Neutral background restored", "info");
      return;
    }

    const flag = this.latamFlags.find(f => f.id === flagId);
    if (!flag) return;

    bgLayers.forEach(layer => {
      layer.innerHTML = flag.svg;
      layer.classList.add("active");
    });
    if (this.canvasWrapper) {
      this.canvasWrapper.className = "canvas-wrapper";
    }

    this.showToast(`Stage background set to ${flag.emoji} ${flag.name}!`, "success");
  }

  matchOutfitToFlag() {
    if (!this.activeLatamFlag) {
      this.showToast("Please select a LATAM country flag first!", "info");
      return;
    }

    const flag = this.latamFlags.find(f => f.id === this.activeLatamFlag);
    if (!flag || !flag.colors) return;

    this.svgState.hoodie.base = flag.colors.hoodie;
    this.svgState.hoodie.drawstring = flag.colors.drawstring;
    this.svgState.pants.base = flag.colors.pants;
    this.svgState.shoes.main = flag.colors.shoes;
    this.svgState.shoes.stripeMode = "monochrome";

    document.getElementById("svgHoodiePicker").value = flag.colors.hoodie;
    document.getElementById("svgDrawstringPicker").value = flag.colors.drawstring;
    document.getElementById("svgPantsPicker").value = flag.colors.pants;
    document.getElementById("svgShoePicker").value = flag.colors.shoes;
    document.getElementById("svgShoeStripeMode").value = "monochrome";

    this.updateSvgColors();
    this.showToast(`⚽ Capy outfit matched to ${flag.emoji} ${flag.name}'s colors!`, "success");
  }

  // ==================== SVG UI & SWATCHES ====================

  setupSvgUI() {
    // Populate swatches for Hoodie
    const hoodieSwatches = [
      { name: "Street Blue", hex: "#2572C0" },
      { name: "Fiery Red", hex: "#DE3D32" },
      { name: "Deep Black", hex: "#26292E" },
      { name: "Lavender Purple", hex: "#8F7BB8" },
      { name: "Orange Puffer", hex: "#D47029" },
      { name: "Green Camo", hex: "#6B744A" },
      { name: "Classic Denim", hex: "#4F738E" },
      { name: "Neon Cyan", hex: "#06B6D4" },
      { name: "Hot Pink", hex: "#EC4899" },
      { name: "Crisp White", hex: "#F8F5EE" }
    ];

    const hContainer = document.getElementById("svgHoodieSwatches");
    if (hContainer) {
      hContainer.innerHTML = "";
      hoodieSwatches.forEach(sw => {
        const btn = document.createElement("button");
        btn.className = "swatch-btn";
        btn.style.backgroundColor = sw.hex;
        btn.title = sw.name;
        btn.addEventListener("click", () => {
          this.svgState.hoodie.base = sw.hex;
          document.getElementById("svgHoodiePicker").value = sw.hex;
          this.updateSvgColors();
        });
        hContainer.appendChild(btn);
      });
    }

    // Drawstrings Swatches
    const dContainer = document.getElementById("svgDrawstringSwatches");
    if (dContainer) {
      dContainer.innerHTML = "";
      ["#FBFAF6", "#FCBE2D", "#DE3D32", "#26292E", "#2572C0"].forEach(hex => {
        const btn = document.createElement("button");
        btn.className = "swatch-btn";
        btn.style.width = "24px";
        btn.style.height = "24px";
        btn.style.backgroundColor = hex;
        btn.addEventListener("click", () => {
          this.svgState.hoodie.drawstring = hex;
          document.getElementById("svgDrawstringPicker").value = hex;
          this.updateSvgColors();
        });
        dContainer.appendChild(btn);
      });
    }

    // Pants Swatches
    const pantsSwatches = [
      { name: "Cargo Green", hex: "#338D52" },
      { name: "Sand Beige", hex: "#CEBA8A" },
      { name: "Stealth Black", hex: "#26292E" },
      { name: "Navy Blue", hex: "#3B4D68" },
      { name: "Heather Grey", hex: "#9EA2A7" },
      { name: "Classic Brown", hex: "#8B5A3C" },
      { name: "Fiery Red", hex: "#DE3D32" },
      { name: "Electric Cyan", hex: "#06B6D4" }
    ];

    const pContainer = document.getElementById("svgPantsSwatches");
    if (pContainer) {
      pContainer.innerHTML = "";
      pantsSwatches.forEach(sw => {
        const btn = document.createElement("button");
        btn.className = "swatch-btn";
        btn.style.backgroundColor = sw.hex;
        btn.title = sw.name;
        btn.addEventListener("click", () => {
          this.svgState.pants.base = sw.hex;
          document.getElementById("svgPantsPicker").value = sw.hex;
          this.updateSvgColors();
        });
        pContainer.appendChild(btn);
      });
    }

    // Shoes Swatches
    const shoeSwatches = [
      { name: "Fiery Red", hex: "#D7413D" },
      { name: "Stealth Black", hex: "#26292E" },
      { name: "Custom Teal", hex: "#2D8D90" },
      { name: "Cobalt Blue", hex: "#2572C0" },
      { name: "Sunny Gold", hex: "#F59E0B" },
      { name: "Soft Purple", hex: "#8F7BB8" },
      { name: "Crisp White", hex: "#EEEDEA" }
    ];

    const sContainer = document.getElementById("svgShoeSwatches");
    if (sContainer) {
      sContainer.innerHTML = "";
      shoeSwatches.forEach(sw => {
        const btn = document.createElement("button");
        btn.className = "swatch-btn";
        btn.style.backgroundColor = sw.hex;
        btn.title = sw.name;
        btn.addEventListener("click", () => {
          this.svgState.shoes.main = sw.hex;
          document.getElementById("svgShoePicker").value = sw.hex;
          this.updateSvgColors();
        });
        sContainer.appendChild(btn);
      });
    }

    // Sunglasses Swatches
    const gContainer = document.getElementById("svgGlassesSwatches");
    if (gContainer) {
      gContainer.innerHTML = "";
      ["#2572C0", "#DE3D32", "#10B981", "#8B5CF6", "#F59E0B", "#26292E"].forEach(hex => {
        const btn = document.createElement("button");
        btn.className = "swatch-btn";
        btn.style.backgroundColor = hex;
        btn.addEventListener("click", () => {
          this.svgState.glasses.color = hex;
          document.getElementById("svgGlassesColorPicker").value = hex;
          this.updateSvgColors();
        });
        gContainer.appendChild(btn);
      });
    }

    // Event Listeners for Pickers
    document.getElementById("svgHoodiePicker").addEventListener("input", (e) => {
      this.svgState.hoodie.base = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgDrawstringPicker").addEventListener("input", (e) => {
      this.svgState.hoodie.drawstring = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgPantsPicker").addEventListener("input", (e) => {
      this.svgState.pants.base = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgShoePicker").addEventListener("input", (e) => {
      this.svgState.shoes.main = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgShoeStripeMode").addEventListener("change", (e) => {
      this.svgState.shoes.stripeMode = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgLacesPicker").addEventListener("input", (e) => {
      this.svgState.shoes.laces = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgSolesPicker").addEventListener("input", (e) => {
      this.svgState.shoes.soles = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgGlassesMode").addEventListener("change", (e) => {
      this.svgState.glasses.mode = e.target.value;
      const isSolid = e.target.value === "solid";
      document.getElementById("svgGlassesColorRow").style.display = isSolid ? "flex" : "none";
      document.getElementById("svgGlassesSwatches").style.display = isSolid ? "flex" : "none";
      this.updateSvgColors();
    });

    document.getElementById("svgGlassesColorPicker").addEventListener("input", (e) => {
      this.svgState.glasses.color = e.target.value;
      this.updateSvgColors();
    });

    document.getElementById("svgLensPicker").addEventListener("input", (e) => {
      this.svgState.glasses.lens = e.target.value;
      this.updateSvgColors();
    });
  }

  // ==================== PRESETS SYSTEM ====================

  setupSvgPresets() {
    const container = document.getElementById("svgPresetsList");
    if (!container) return;
    container.innerHTML = "";

    SVG_BUILTIN_PRESETS.forEach(preset => {
      const card = document.createElement("div");
      card.className = "preset-card";
      card.innerHTML = `
        <div class="preset-info">
          <h4>${preset.name}</h4>
          <p>${preset.description}</p>
        </div>
        <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.74rem;">Equip</button>
      `;

      card.addEventListener("click", () => {
        this.loadSvgPreset(preset);
      });

      container.appendChild(card);
    });
  }

  loadSvgPreset(preset) {
    this.svgState = JSON.parse(JSON.stringify(preset.state));

    // Update UI controls
    document.getElementById("svgHoodiePicker").value = this.svgState.hoodie.base;
    document.getElementById("svgDrawstringPicker").value = this.svgState.hoodie.drawstring;
    document.getElementById("svgPantsPicker").value = this.svgState.pants.base;
    document.getElementById("svgShoePicker").value = this.svgState.shoes.main;
    document.getElementById("svgShoeStripeMode").value = this.svgState.shoes.stripeMode;
    document.getElementById("svgLacesPicker").value = this.svgState.shoes.laces;
    document.getElementById("svgSolesPicker").value = this.svgState.shoes.soles;
    document.getElementById("svgGlassesMode").value = this.svgState.glasses.mode;
    document.getElementById("svgGlassesColorPicker").value = this.svgState.glasses.color;
    document.getElementById("svgLensPicker").value = this.svgState.glasses.lens;

    const isSolidGlasses = this.svgState.glasses.mode === "solid";
    document.getElementById("svgGlassesColorRow").style.display = isSolidGlasses ? "flex" : "none";
    document.getElementById("svgGlassesSwatches").style.display = isSolidGlasses ? "flex" : "none";

    this.updateSvgColors();
    this.showToast(`Equipped: ${preset.name}!`, "success");
  }

  saveCurrentSvgPreset() {
    const name = prompt("Enter a name for your custom Vector look:", "My Custom Capy");
    if (!name || name.trim() === "") return;

    const newPreset = {
      id: "svg_user_" + Date.now(),
      name: name.trim(),
      description: `Custom vector look saved on ${new Date().toLocaleDateString()}`,
      state: JSON.parse(JSON.stringify(this.svgState))
    };

    let userPresets = [];
    try {
      userPresets = JSON.parse(localStorage.getItem("capy_user_svg_presets") || "[]");
    } catch (e) {
      userPresets = [];
    }

    userPresets.push(newPreset);
    localStorage.setItem("capy_user_svg_presets", JSON.stringify(userPresets));

    this.loadUserSvgPresets();
    this.showToast(`Vector look "${name}" saved!`, "success");
  }

  loadUserSvgPresets() {
    const container = document.getElementById("userSvgPresetsList");
    if (!container) return;
    container.innerHTML = "";

    let userPresets = [];
    try {
      userPresets = JSON.parse(localStorage.getItem("capy_user_svg_presets") || "[]");
    } catch (e) {
      userPresets = [];
    }

    if (userPresets.length === 0) {
      container.innerHTML = `<p style="font-size: 0.78rem; color: var(--text-muted);">No custom looks saved yet.</p>`;
      return;
    }

    userPresets.forEach(preset => {
      const card = document.createElement("div");
      card.className = "preset-card";
      card.innerHTML = `
        <div class="preset-info">
          <h4>${preset.name}</h4>
          <p>${preset.description}</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-outline btn-load-svg" style="padding: 4px 8px; font-size: 0.72rem;">Load</button>
          <button class="btn btn-outline btn-del-svg" style="padding: 4px 8px; font-size: 0.72rem; color: #f87171;">✕</button>
        </div>
      `;

      card.querySelector(".btn-load-svg").addEventListener("click", () => {
        this.loadSvgPreset(preset);
      });

      card.querySelector(".btn-del-svg").addEventListener("click", (e) => {
        e.stopPropagation();
        this.deleteUserSvgPreset(preset.id);
      });

      container.appendChild(card);
    });
  }

  deleteUserSvgPreset(id) {
    let userPresets = JSON.parse(localStorage.getItem("capy_user_svg_presets") || "[]");
    userPresets = userPresets.filter(p => p.id !== id);
    localStorage.setItem("capy_user_svg_presets", JSON.stringify(userPresets));
    this.loadUserSvgPresets();
    this.showToast("Saved look removed", "info");
  }

  // ==================== EXPORT SYSTEM ====================

  downloadSVG() {
    const svgEl = document.getElementById("capySvg");
    if (!svgEl) return;

    let svgToExport = svgEl.cloneNode(true);
    
    // Ensure top region has white background in exported SVG
    const whiteTop = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    whiteTop.setAttribute("width", "768");
    whiteTop.setAttribute("height", "750");
    whiteTop.setAttribute("fill", "#FFFFFF");
    svgToExport.insertBefore(whiteTop, svgToExport.firstChild);

    if (this.activeLatamFlag) {
      const flag = this.latamFlags.find(f => f.id === this.activeLatamFlag);
      if (flag) {
        const parser = new DOMParser();
        const flagDoc = parser.parseFromString(flag.svg, "image/svg+xml");
        const flagSvg = flagDoc.querySelector("svg");
        if (flagSvg) {
          flagSvg.setAttribute("width", "768");
          flagSvg.setAttribute("height", "750");
          flagSvg.setAttribute("x", "0");
          flagSvg.setAttribute("y", "0");
          flagSvg.setAttribute("preserveAspectRatio", "xMidYMid slice");
          whiteTop.insertAdjacentElement("afterend", flagSvg);
        }
      }
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgToExport);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.download = `capy_cool_${this.activeLatamFlag || 'vector'}_${Date.now()}.svg`;
    link.href = URL.createObjectURL(blob);
    link.click();
    this.showToast(this.activeLatamFlag ? "Vector SVG with Flag Downloaded! ⚡" : "Vector SVG Downloaded! ⚡", "success");
  }

  async renderPosterCanvas(width = 1536, height = 2048) {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const flag = this.latamFlags.find(f => f.id === this.activeLatamFlag);
    const loadFlagImage = () => {
      return new Promise((resolve) => {
        if (!flag) return resolve(null);
        const blob = new Blob([flag.svg], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => resolve({ img, url });
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(null);
        };
        img.src = url;
      });
    };

    const svgEl = document.getElementById("capySvg");
    if (!svgEl) return null;

    // Clone SVG and remove the text banner from SVG so it gets rendered crisply by Canvas 2D
    const svgClone = svgEl.cloneNode(true);
    const svgBanner = svgClone.querySelector("#gdg-bottom-banner");
    if (svgBanner) {
      svgBanner.remove();
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgClone);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const [flagData, charImg] = await Promise.all([
      loadFlagImage(),
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ img, url });
        img.onerror = (e) => {
          URL.revokeObjectURL(url);
          reject(e);
        };
        img.src = url;
      })
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // 1. Top white region (y=0 to 750 / 1024)
    const splitY = Math.round((750 / 1024) * height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, splitY);

    // 1b. Flag in the white area
    if (flagData) {
      ctx.drawImage(flagData.img, 0, 0, width, splitY);
      URL.revokeObjectURL(flagData.url);
    }

    // 2. Bottom dark background (y=splitY to height, #191923) - drawn BEFORE the character!
    ctx.fillStyle = "#191923";
    ctx.fillRect(0, splitY, width, height - splitY);

    // 3. Draw Character on top! Feet step into the dark background and are 100% visible
    ctx.drawImage(charImg.img, 0, 0, width, height);
    URL.revokeObjectURL(charImg.url);

    // 4. Draw Google Sans GDG Banner text only (never fill a background over the character)
    this.drawGdgCanvasBanner(ctx, width, height);

    return canvas;
  }

  async downloadPNG() {
    const btnDownloadPNG = document.getElementById("btnDownloadPNG");
    const origContent = btnDownloadPNG ? btnDownloadPNG.innerHTML : "";

    try {
      if (btnDownloadPNG) {
        btnDownloadPNG.innerHTML = `<span>⏳</span> Generating Image...`;
        btnDownloadPNG.disabled = true;
      }

      const canvas = await this.renderPosterCanvas(1536, 2048);
      if (!canvas) throw new Error("Could not render poster canvas");

      const fileName = `capycool_${this.activeLatamFlag || 'character'}_${Date.now()}.png`;

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error("Canvas blob conversion failed");

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = fileName;
      link.href = blobUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      this.showToast("High-Res PNG Downloaded! 📥", "success");

    } catch (err) {
      console.error("PNG export error:", err);
      this.showToast("Could not download PNG. Please try again.", "error");
    } finally {
      if (btnDownloadPNG) {
        btnDownloadPNG.innerHTML = origContent;
        btnDownloadPNG.disabled = false;
      }
    }
  }

  drawGdgCanvasBanner(ctx, width, height) {
    // Letter color cycle matching reference image:
    const letterSequence = [
      { char: "G", color: "#FFB900" },
      { char: "D", color: "#00AB49" },
      { char: "G", color: "#FE2B27" },
      { char: " ", color: "transparent" },
      { char: "S", color: "#1E88FD" },
      { char: "u", color: "#FFB900" },
      { char: "m", color: "#00AB49" },
      { char: "m", color: "#FE2B27" },
      { char: "i", color: "#1E88FD" },
      { char: "t", color: "#FFB900" },
      { char: " ", color: "transparent" },
      { char: "L", color: "#00AB49" },
      { char: "a", color: "#FE2B27" },
      { char: "t", color: "#1E88FD" },
      { char: "a", color: "#FFB900" },
      { char: "m", color: "#00AB49" },
      { char: " ", color: "transparent" },
      { char: "2", color: "#FE2B27" },
      { char: "0", color: "#1E88FD" },
      { char: "2", color: "#FFB900" },
      { char: "6", color: "#00AB49" }
    ];

    const fontSize = Math.round((34 / 1024) * height);
    ctx.font = `bold ${fontSize}px 'Google Sans', -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.textBaseline = "middle";

    let totalWidth = 0;
    for (const item of letterSequence) {
      totalWidth += ctx.measureText(item.char).width;
    }

    let startX = (width - totalWidth) / 2;
    const centerY = Math.round((955 / 1024) * height);

    for (const item of letterSequence) {
      if (item.char !== " ") {
        ctx.fillStyle = item.color;
        ctx.fillText(item.char, startX, centerY);
      }
      startX += ctx.measureText(item.char).width;
    }
  }

  async copyToClipboard() {
    try {
      const canvas = await this.renderPosterCanvas(1536, 2048);
      if (canvas && navigator.clipboard && window.ClipboardItem) {
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob })
          ]);
          this.showToast("High-Res PNG image copied to clipboard! 📋", "success");
          return;
        }
      }
      // Fallback to SVG markup
      const svgEl = document.getElementById("capySvg");
      if (svgEl) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgEl);
        await navigator.clipboard.writeText(svgString);
        this.showToast("Vector SVG copied to clipboard! 📋", "success");
      }
    } catch (err) {
      console.error(err);
      this.showToast("Clipboard copy failed. Try downloading instead.", "error");
    }
  }

  async exportCharacterCard() {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
    const cardCanvas = document.createElement("canvas");
    cardCanvas.width = 1000;
    cardCanvas.height = 1400;
    const cCtx = cardCanvas.getContext("2d");
    const flag = this.latamFlags.find(f => f.id === this.activeLatamFlag);

    const loadFlagImage = () => {
      return new Promise((resolve) => {
        if (!flag) return resolve(null);
        const blob = new Blob([flag.svg], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => resolve({ img, url });
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(null);
        };
        img.src = url;
      });
    };

    // Card Background Gradient
    const grad = cCtx.createLinearGradient(0, 0, 1000, 1400);
    grad.addColorStop(0, "#1a1e29");
    grad.addColorStop(1, "#11141c");
    cCtx.fillStyle = grad;
    cCtx.fillRect(0, 0, 1000, 1400);

    // Card Border & Glow
    cCtx.strokeStyle = "#ff6b4a";
    cCtx.lineWidth = 12;
    cCtx.strokeRect(20, 20, 960, 1360);

    // Top Header Banner
    cCtx.fillStyle = "#ff6b4a";
    cCtx.fillRect(40, 50, 920, 110);

    cCtx.fillStyle = "#ffffff";
    cCtx.font = "bold 52px 'Google Sans', -apple-system, BlinkMacSystemFont, sans-serif";
    cCtx.textAlign = "center";
    cCtx.fillText("CAPY-COOL STREETWEAR", 500, 125);

    const flagData = await loadFlagImage();

    const renderCardBody = (sourceImg) => {
      // Character Portrait Box (3:4 ratio matching poster image)
      const pW = 660;
      const pH = 880;
      const pX = (1000 - pW) / 2;
      const pY = 190;
      const splitH = Math.round((750 / 1024) * pH);

      cCtx.fillStyle = "#FFFFFF";
      cCtx.fillRect(pX, pY, pW, splitH);

      if (flagData) {
        cCtx.drawImage(flagData.img, pX, pY, pW, splitH);
        URL.revokeObjectURL(flagData.url);
      }

      cCtx.fillStyle = "#191923";
      cCtx.fillRect(pX, pY + splitH, pW, pH - splitH);

      cCtx.drawImage(sourceImg, pX, pY, pW, pH);

      // Bottom Stats & Specs
      cCtx.fillStyle = "#ffffff";
      cCtx.font = "bold 32px 'Google Sans', -apple-system, BlinkMacSystemFont, sans-serif";
      cCtx.textAlign = "left";
      cCtx.fillText("EVENT: GDG SUMMIT LATAM 2026", 120, 1115);

      cCtx.font = "24px 'Google Sans', -apple-system, BlinkMacSystemFont, sans-serif";
      cCtx.fillStyle = "#cbd5e1";
      cCtx.fillText(`HOODIE / OUTERWEAR: ${this.svgState.hoodie.base}`, 120, 1160);
      cCtx.fillText(`PANTS / SHORTS: ${this.svgState.pants.base}`, 120, 1205);
      cCtx.fillText(`FOOTWEAR: ${this.svgState.shoes.main}`, 120, 1250);
      if (flag) {
        cCtx.fillStyle = "#ffaa40";
        cCtx.fillText(`BACKGROUND: ${flag.emoji} ${flag.name.toUpperCase()} (LATAM)`, 120, 1295);
      } else {
        cCtx.fillText(`STUDIO MODE: VECTOR SVG`, 120, 1295);
      }

      // Color Swatch accents on bottom right
      const swatches = [
        this.svgState.hoodie.base,
        this.svgState.pants.base,
        this.svgState.shoes.main,
        this.svgState.glasses.color
      ];

      swatches.forEach((color, i) => {
        cCtx.fillStyle = color;
        cCtx.fillRect(720 + i * 54, 1240, 44, 44);
        cCtx.strokeStyle = "#ffffff";
        cCtx.lineWidth = 2;
        cCtx.strokeRect(720 + i * 54, 1240, 44, 44);
      });

      const link = document.createElement("a");
      link.download = `capy_cool_card_${this.activeLatamFlag || 'custom'}_${Date.now()}.png`;
      link.href = cardCanvas.toDataURL("image/png");
      link.click();
      this.showToast("🎴 Character Card Exported!", "success");
    };

    const svgEl = document.getElementById("capySvg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      renderCardBody(img);
      URL.revokeObjectURL(url);
    };
  }

  randomizeColors() {
    const colors = Object.values(CAPY_PALETTE);
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    this.svgState.hoodie.base = pick(colors);
    this.svgState.pants.base = pick(colors);
    this.svgState.shoes.main = pick(colors);

    document.getElementById("svgHoodiePicker").value = this.svgState.hoodie.base;
    document.getElementById("svgPantsPicker").value = this.svgState.pants.base;
    document.getElementById("svgShoePicker").value = this.svgState.shoes.main;

    this.updateSvgColors();
    this.showToast("🎲 Random Vector Colors Applied!", "success");
  }

  resetAll() {
    this.loadSvgPreset(SVG_BUILTIN_PRESETS[0]);
    this.setLatamFlag(null);
    this.showToast("Studio Reset to Classic Look 🔄", "info");
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideDown 0.3s ease reverse forwards";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ==================== EVENT LISTENERS ====================

  setupEventListeners() {
    // SVG Studio Tabs
    document.querySelectorAll("[data-svgtab]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-svgtab]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll("#sidebarSvgMode .tab-pane").forEach(p => p.classList.remove("active"));
        const target = document.getElementById(`svgtab-${btn.dataset.svgtab}`);
        if (target) target.classList.add("active");
      });
    });

    // Quick Actions (Randomize & Reset)
    const btnRandomize = document.getElementById("btnRandomize");
    if (btnRandomize) {
      btnRandomize.addEventListener("click", () => this.randomizeColors());
    }
    const btnResetAll = document.getElementById("btnResetAll");
    if (btnResetAll) {
      btnResetAll.addEventListener("click", () => this.resetAll());
    }

    // Clear Custom Presets
    const clearBtn = document.getElementById("btnClearSvgPresets");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (confirm("Clear all your saved custom vector looks?")) {
          localStorage.removeItem("capy_user_svg_presets");
          this.loadUserSvgPresets();
          this.showToast("All custom looks cleared", "info");
        }
      });
    }

    // Export PNG Action
    const btnDownloadPNG = document.getElementById("btnDownloadPNG");
    if (btnDownloadPNG) {
      btnDownloadPNG.addEventListener("click", () => this.downloadPNG());
    }

    const btnDownloadSVG = document.getElementById("btnDownloadSVG");
    if (btnDownloadSVG) {
      btnDownloadSVG.addEventListener("click", () => this.downloadSVG());
    }
    const btnExportCard = document.getElementById("btnExportCard");
    if (btnExportCard) {
      btnExportCard.addEventListener("click", () => this.exportCharacterCard());
    }
    const btnCopyClipboard = document.getElementById("btnCopyClipboard");
    if (btnCopyClipboard) {
      btnCopyClipboard.addEventListener("click", () => this.copyToClipboard());
    }
  }

  setupFloatingPreview() {
    if (!this.floatingPreview || !this.canvasWrapper) return;

    const checkVisibility = () => {
      // Only display floating preview on stacked/mobile layout (width <= 1024px)
      if (window.innerWidth > 1024) {
        this.floatingPreview.classList.remove("visible");
        return;
      }

      const rect = this.canvasWrapper.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;

      // Show floating preview whenever user has scrolled down past the top section
      // (either scrollY > 120 or canvas top moves above header < 60px)
      const isCanvasScrolled = rect.top < 60 || scrollY > 120;

      if (isCanvasScrolled) {
        this.floatingPreview.classList.add("visible");
      } else {
        this.floatingPreview.classList.remove("visible");
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });

    // Tap/Click to smoothly scroll up to the character image
    const handleTapScroll = (e) => {
      if (e) e.preventDefault();
      if (navigator.vibrate) {
        try { navigator.vibrate(12); } catch (_) {}
      }
      
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    this.floatingPreview.addEventListener("click", handleTapScroll);
    this.floatingPreview.addEventListener("touchstart", (e) => {
      handleTapScroll(e);
    }, { passive: false });
    this.floatingPreview.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleTapScroll(e);
      }
    });

    // Run initial visibility check
    checkVisibility();
  }
}

// Bootstrap when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  window.customizer = new CapyStudio();
});
