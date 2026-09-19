/**
 * LATAM Flags Data & SVG Generator
 * Includes only countries from Latin America (LATAM) - Alphabetically Sorted
 */

const LATAM_FLAGS = [
  {
    id: "argentina",
    name: "Argentina",
    emoji: "🇦🇷",
    colors: {"hoodie":"#74ACDF","drawstring":"#F6B40E","pants":"#FFFFFF","shoes":"#74ACDF"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="208.3" fill="#74acdf"/>
      <rect y="208.3" width="1000" height="208.3" fill="#ffffff"/>
      <rect y="416.6" width="1000" height="208.3" fill="#74acdf"/>
      <circle cx="500" cy="312.5" r="50" fill="#f6b40e"/>
      <circle cx="500" cy="312.5" r="30" fill="#85340a" stroke="#f6b40e" stroke-width="6"/>
    </svg>`
  },
  {
    id: "bolivia",
    name: "Bolivia",
    emoji: "🇧🇴",
    colors: {"hoodie":"#D52B1E","drawstring":"#FCD116","pants":"#007934","shoes":"#FCD116"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="222.3" fill="#d52b1e"/>
      <rect y="222.3" width="1000" height="222.3" fill="#fcd116"/>
      <rect y="444.6" width="1000" height="222.3" fill="#007934"/>
    </svg>`
  },
  {
    id: "brazil",
    name: "Brazil",
    emoji: "🇧🇷",
    colors: {"hoodie":"#FEDF00","drawstring":"#002776","pants":"#009B3A","shoes":"#002776"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="700" fill="#009b3a"/>
      <polygon points="500,70 930,350 500,630 70,350" fill="#fedf00"/>
      <circle cx="500" cy="350" r="175" fill="#002776"/>
      <path d="M 330 380 Q 500 310 670 380" stroke="#ffffff" stroke-width="22" fill="none"/>
    </svg>`
  },
  {
    id: "chile",
    name: "Chile",
    emoji: "🇨🇱",
    colors: {"hoodie":"#0039A6","drawstring":"#FFFFFF","pants":"#D52B1E","shoes":"#0039A6"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="333.5" fill="#ffffff"/>
      <rect y="333.5" width="1000" height="333.5" fill="#d52b1e"/>
      <rect width="333.5" height="333.5" fill="#0039a6"/>
      <polygon points="166.75,60 197,145 285,145 214,198 241,280 166.75,230 92,280 119,198 48,145 136,145" fill="#ffffff"/>
    </svg>`
  },
  {
    id: "colombia",
    name: "Colombia",
    emoji: "🇨🇴",
    colors: {"hoodie":"#FCD116","drawstring":"#CE1126","pants":"#003893","shoes":"#CE1126"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="333.5" fill="#fcd116"/>
      <rect y="333.5" width="1000" height="166.75" fill="#003893"/>
      <rect y="500.25" width="1000" height="166.75" fill="#ce1126"/>
    </svg>`
  },
  {
    id: "costa_rica",
    name: "Costa Rica",
    emoji: "🇨🇷",
    colors: {"hoodie":"#CE1126","drawstring":"#FFFFFF","pants":"#002B7F","shoes":"#FFFFFF"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="100" fill="#002b7f"/>
      <rect y="100" width="1000" height="100" fill="#ffffff"/>
      <rect y="200" width="1000" height="200" fill="#ce1126"/>
      <rect y="400" width="1000" height="100" fill="#ffffff"/>
      <rect y="500" width="1000" height="100" fill="#002b7f"/>
    </svg>`
  },
  {
    id: "cuba",
    name: "Cuba",
    emoji: "🇨🇺",
    colors: {"hoodie":"#002A8F","drawstring":"#CF142B","pants":"#CF142B","shoes":"#002A8F"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="100" fill="#002a8f"/>
      <rect y="100" width="1000" height="100" fill="#ffffff"/>
      <rect y="200" width="1000" height="100" fill="#002a8f"/>
      <rect y="300" width="1000" height="100" fill="#ffffff"/>
      <rect y="400" width="1000" height="100" fill="#002a8f"/>
      <polygon points="0,0 433,250 0,500" fill="#cf142b"/>
      <polygon points="140,150 156,200 208,200 166,231 182,280 140,250 98,280 114,231 72,200 124,200" fill="#ffffff"/>
    </svg>`
  },
  {
    id: "dominican_republic",
    name: "Dominican Republic",
    emoji: "🇩🇴",
    colors: {"hoodie":"#002B7F","drawstring":"#CE1126","pants":"#CE1126","shoes":"#002B7F"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="440" height="283.5" fill="#002b7f"/>
      <rect x="560" width="440" height="283.5" fill="#ce1126"/>
      <rect y="383.5" width="440" height="283.5" fill="#ce1126"/>
      <rect x="560" y="383.5" width="440" height="283.5" fill="#002b7f"/>
      <rect x="440" width="120" height="667" fill="#ffffff"/>
      <rect y="283.5" width="1000" height="100" fill="#ffffff"/>
      <circle cx="500" cy="333.5" r="28" fill="#ce1126" stroke="#002b7f" stroke-width="4"/>
    </svg>`
  },
  {
    id: "ecuador",
    name: "Ecuador",
    emoji: "🇪🇨",
    colors: {"hoodie":"#FFDD00","drawstring":"#ED1C24","pants":"#034EA2","shoes":"#ED1C24"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="333.5" fill="#ffdd00"/>
      <rect y="333.5" width="1000" height="166.75" fill="#034ea2"/>
      <rect y="500.25" width="1000" height="166.75" fill="#ed1c24"/>
      <circle cx="500" cy="416.8" r="45" fill="#034ea2" stroke="#ffdd00" stroke-width="6"/>
    </svg>`
  },
  {
    id: "el_salvador",
    name: "El Salvador",
    emoji: "🇸🇻",
    colors: {"hoodie":"#0F47AF","drawstring":"#E5B410","pants":"#0F47AF","shoes":"#E5B410"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="200" fill="#0f47af"/>
      <rect y="200" width="1000" height="200" fill="#ffffff"/>
      <rect y="400" width="1000" height="200" fill="#0f47af"/>
      <circle cx="500" cy="300" r="50" fill="#e5b410" stroke="#007934" stroke-width="6"/>
      <polygon points="500,265 528,320 472,320" fill="#4185e4"/>
    </svg>`
  },
  {
    id: "guatemala",
    name: "Guatemala",
    emoji: "🇬🇹",
    colors: {"hoodie":"#4997D0","drawstring":"#FFFFFF","pants":"#FFFFFF","shoes":"#4997D0"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice">
      <rect width="333.3" height="625" fill="#4997d0"/>
      <rect x="333.3" width="333.4" height="625" fill="#ffffff"/>
      <rect x="666.7" width="333.3" height="625" fill="#4997d0"/>
      <circle cx="500" cy="312.5" r="40" fill="#2d68c4" stroke="#e0ae12" stroke-width="8"/>
    </svg>`
  },
  {
    id: "honduras",
    name: "Honduras",
    emoji: "🇭🇳",
    colors: {"hoodie":"#00BCE4","drawstring":"#FFFFFF","pants":"#00BCE4","shoes":"#FFFFFF"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="166.7" fill="#00bce4"/>
      <rect y="166.7" width="1000" height="166.7" fill="#ffffff"/>
      <rect y="333.4" width="1000" height="166.7" fill="#00bce4"/>
      <g fill="#00bce4">
        <circle cx="430" cy="220" r="16"/><circle cx="570" cy="220" r="16"/><circle cx="500" cy="250" r="16"/><circle cx="430" cy="280" r="16"/><circle cx="570" cy="280" r="16"/>
      </g>
    </svg>`
  },
  {
    id: "mexico",
    name: "Mexico",
    emoji: "🇲🇽",
    colors: {"hoodie":"#006847","drawstring":"#CE1126","pants":"#FFFFFF","shoes":"#CE1126"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 571" preserveAspectRatio="xMidYMid slice">
      <rect width="333.3" height="571" fill="#006847"/>
      <rect x="333.3" width="333.4" height="571" fill="#ffffff"/>
      <rect x="666.7" width="333.3" height="571" fill="#ce1126"/>
      <circle cx="500" cy="285.5" r="48" fill="#89532f" stroke="#3b2314" stroke-width="4"/>
      <circle cx="500" cy="285.5" r="28" fill="#d4af37"/>
    </svg>`
  },
  {
    id: "nicaragua",
    name: "Nicaragua",
    emoji: "🇳🇮",
    colors: {"hoodie":"#0067C6","drawstring":"#E0B115","pants":"#0067C6","shoes":"#E0B115"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="200" fill="#0067c6"/>
      <rect y="200" width="1000" height="200" fill="#ffffff"/>
      <rect y="400" width="1000" height="200" fill="#0067c6"/>
      <polygon points="500,260 540,330 460,330" fill="#0067c6" stroke="#e0b115" stroke-width="6"/>
    </svg>`
  },
  {
    id: "panama",
    name: "Panama",
    emoji: "🇵🇦",
    colors: {"hoodie":"#005293","drawstring":"#D21034","pants":"#D21034","shoes":"#005293"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="500" height="333.5" fill="#ffffff"/>
      <rect x="500" width="500" height="333.5" fill="#d21034"/>
      <rect y="333.5" width="500" height="333.5" fill="#005293"/>
      <rect x="500" y="333.5" width="500" height="333.5" fill="#ffffff"/>
      <polygon points="250,90 275,160 350,160 290,205 315,275 250,230 185,275 210,205 150,160 225,160" fill="#005293"/>
      <polygon points="750,423.5 775,493.5 850,493.5 790,538.5 815,608.5 750,563.5 685,608.5 710,538.5 650,493.5 725,493.5" fill="#d21034"/>
    </svg>`
  },
  {
    id: "paraguay",
    name: "Paraguay",
    emoji: "🇵🇾",
    colors: {"hoodie":"#D52B1E","drawstring":"#FFFFFF","pants":"#0038A8","shoes":"#FFFFFF"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="200" fill="#d52b1e"/>
      <rect y="200" width="1000" height="200" fill="#ffffff"/>
      <rect y="400" width="1000" height="200" fill="#0038a8"/>
      <circle cx="500" cy="300" r="50" fill="#ffffff" stroke="#007934" stroke-width="8"/>
      <circle cx="500" cy="300" r="22" fill="#fcd116"/>
    </svg>`
  },
  {
    id: "peru",
    name: "Peru",
    emoji: "🇵🇪",
    colors: {"hoodie":"#D91023","drawstring":"#FFFFFF","pants":"#FFFFFF","shoes":"#D91023"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="333.3" height="667" fill="#d91023"/>
      <rect x="333.3" width="333.4" height="667" fill="#ffffff"/>
      <rect x="666.7" width="333.3" height="667" fill="#d91023"/>
    </svg>`
  },
  {
    id: "puerto_rico",
    name: "Puerto Rico",
    emoji: "🇵🇷",
    colors: {"hoodie":"#ED0000","drawstring":"#0050F0","pants":"#0050F0","shoes":"#ED0000"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="133.4" fill="#ed0000"/>
      <rect y="133.4" width="1000" height="133.4" fill="#ffffff"/>
      <rect y="266.8" width="1000" height="133.4" fill="#ed0000"/>
      <rect y="400.2" width="1000" height="133.4" fill="#ffffff"/>
      <rect y="533.6" width="1000" height="133.4" fill="#ed0000"/>
      <polygon points="0,0 577,333.5 0,667" fill="#0050f0"/>
      <polygon points="190,200 212,267 282,267 225,308 247,375 190,334 133,375 155,308 98,267 168,267" fill="#ffffff"/>
    </svg>`
  },
  {
    id: "uruguay",
    name: "Uruguay",
    emoji: "🇺🇾",
    colors: {"hoodie":"#0038A8","drawstring":"#FCD116","pants":"#FFFFFF","shoes":"#0038A8"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect y="0" width="1000" height="74.1" fill="#ffffff"/>
      <rect y="74.1" width="1000" height="74.1" fill="#0038a8"/>
      <rect y="148.2" width="1000" height="74.1" fill="#ffffff"/>
      <rect y="222.3" width="1000" height="74.1" fill="#0038a8"/>
      <rect y="296.4" width="1000" height="74.1" fill="#ffffff"/>
      <rect y="370.5" width="1000" height="74.1" fill="#0038a8"/>
      <rect y="444.6" width="1000" height="74.1" fill="#ffffff"/>
      <rect y="518.7" width="1000" height="74.1" fill="#0038a8"/>
      <rect y="592.8" width="1000" height="74.2" fill="#ffffff"/>
      <rect width="370" height="296.4" fill="#ffffff"/>
      <circle cx="185" cy="148.2" r="55" fill="#fcd116" stroke="#c48a04" stroke-width="5"/>
    </svg>`
  },
  {
    id: "venezuela",
    name: "Venezuela",
    emoji: "🇻🇪",
    colors: {"hoodie":"#FCE300","drawstring":"#CF142B","pants":"#00247D","shoes":"#CF142B"},
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="222.3" fill="#fce300"/>
      <rect y="222.3" width="1000" height="222.3" fill="#00247d"/>
      <rect y="444.6" width="1000" height="222.3" fill="#cf142b"/>
      <g fill="#ffffff">
        <circle cx="410" cy="315" r="14"/><circle cx="450" cy="295" r="14"/><circle cx="500" cy="285" r="14"/><circle cx="550" cy="295" r="14"/><circle cx="590" cy="315" r="14"/>
        <circle cx="430" cy="350" r="14"/><circle cx="500" cy="340" r="14"/><circle cx="570" cy="350" r="14"/>
      </g>
    </svg>`
  }
];

// Export for Node if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = LATAM_FLAGS;
}
