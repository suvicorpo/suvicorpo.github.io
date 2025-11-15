    // ===== Data + Persistence =====
    const LS_KEY_LIBRARY = 'suvi_plus_library_v2';
    import { fetchUserData, updateUserProfilePic, updateContinueWatching, fetchContinueWatching, updateWatchList, fetchWatchlist } from './firebase-profile.js';
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getFirestore, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
    import { firebaseConfig } from "./firebase-conf.js";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function loadProfile() {
        try {
            const usrData = await fetchUserData();
            console.log('Subscription Data:', usrData.subStatus, usrData.subType);
            console.log('Accout name:', usrData.usrName)
            await renderContinue();
        } catch (err) {
            console.error("Failed to load subscription data:", err);
        }
    }

    loadProfile();


    // Seed with SERVER paths you actually host (adjust to your filenames)
    const seed = [
      // { id:uid(), title:'Sample Title', show:'show', poster:'images/placeholder.jpg', src:'videos/sample.mp4', year:2024, desc:'Description' }

      // The Battle Season 1
      { id:'s0', title:'Pilot', show:'TheBattle', poster:'images/Posters/TBS1E1.png', src:'videos/TheBattle/TheBattle-S1-E1.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s1', title:'Counterattack', show:'TheBattle', poster:'images/Posters/TBS1E2.png', src:'videos/TheBattle/TheBattle-S1-E2.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s2', title:'Siege of the Tan Outpost', show:'TheBattle', poster:'images/Posters/TBS1E3.png', src:'videos/TheBattle/TheBattle-S1-E3.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 3', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s3', title:'Revenge on the Greens', show:'TheBattle', poster:'images/Posters/TBS1E4.png', src:'videos/TheBattle/TheBattle-S1-E4.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 4', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s4', title:'The Invasion', show:'TheBattle', poster:'images/Posters/TBS1E5.png', src:'videos/TheBattle/TheBattle-S1-E5.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 5', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s5', title:'Green Advances', show:'TheBattle', poster:'images/Posters/TBS1E6.png', src:'videos/TheBattle/TheBattle-S1-E6.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 6', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s6', title:'Siege on the Lego Base', show:'TheBattle', poster:'images/Posters/TBS1E7.png', src:'videos/TheBattle/TheBattle-S1-E7.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 7', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s7', title:'The Empire', show:'TheBattle', poster:'images/Posters/TBS1E8.png', src:'videos/TheBattle/TheBattle-S1-E8.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 8', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },

      // The Battle Season 2
      { id:'s8', title:'No Prisoners', show:'TheBattle', poster:'images/Posters/TBS2E1.png', src:'videos/TheBattle/TheBattle-S2-E1.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s9', title:'Fish in a Barrel', show:'TheBattle', poster:'images/Posters/TBS2E2.png', src:'videos/TheBattle/TheBattle-S2-E2.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s10', title:'The Offensive', show:'TheBattle', poster:'images/Posters/TBS2E3.png', src:'videos/TheBattle/TheBattle-S2-E3.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 3', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s11', title:'The Empire Strikes Back', show:'TheBattle', poster:'images/Posters/TBS2E4.png', src:'videos/TheBattle/TheBattle-S2-E4.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 4', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s12', title:'Outskirts of Lego City', show:'TheBattle', poster:'images/Posters/TBS2E5.png', src:'videos/TheBattle/TheBattle-S2-E5.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 5', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s13', title:'Displaced', show:'TheBattle', poster:'images/Posters/TBS2E6.png', src:'videos/TheBattle/TheBattle-S2-E6.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 6', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s14', title:'Ambush', show:'TheBattle', poster:'images/Posters/TBS2E7.png', src:'videos/TheBattle/TheBattle-S2-E7.mp4', year:2025, desc:'Season 2', se:'Season 2 • Episode 7', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s15', title:'The Fallen', show:'TheBattle', poster:'images/Posters/TBS2E8.png', src:'videos/TheBattle/TheBattle-S2-E8.mp4', year:2025, desc:'Season 2', se:'Season 2 • Episode 8', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },

      // The Battle Season 3 (upcoming, placeholders)
      { id:'s32', title:'Slaughtered', show:'TheBattle', poster:'images/Posters/TBS3E1.png', src:'videos/TheBattle/TheBattle-S3-E1.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'show' },
      { id:'s33', title:'Open Warfare', show:'TheBattle', poster:'images/Posters/TBS3E2.png', src:'videos/TheBattle/TheBattle-S3-E2.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s34', title:'Corruption', show:'TheBattle', poster:'images/Posters/TBS3E3.png', src:'videos/TheBattle/TheBattle-S3-E3.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 3', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s35', title:'Double Crossed', show:'TheBattle', poster:'images/Posters/TBS3E4.png', src:'videos/TheBattle/TheBattle-S3-E4.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 4', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s36', title:'Battle of East Valley', show:'TheBattle', poster:'images/Posters/TBS3E5.png', src:'videos/TheBattle/TheBattle-S3-E5.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 5', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s37', title:'Actions and Consequences', show:'TheBattle', poster:'images/Posters/TBS3E6.png', src:'videos/TheBattle/TheBattle-S3-E6.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 6', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s38', title:'The Final Straw', show:'TheBattle', poster:'images/Posters/TBS3E7.png', src:'videos/TheBattle/TheBattle-S3-E7.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 7', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s39', title:'Invasion of Lego City', show:'TheBattle', poster:'images/Posters/TBS3E8.png', src:'videos/TheBattle/TheBattle-S3-E8.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 8', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s40', title:'Breaking Point', show:'TheBattle', poster:'images/Posters/TBS3E9.png', src:'videos/TheBattle/TheBattle-S3-E9.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 9', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
      // { id:'s41', title:'The City Falls', show:'TheBattle', poster:'images/Posters/TBS3E10.png', src:'videos/TheBattle/TheBattle-S3-E10.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 10', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },

      // Wafront
      { id:'s16', title:'Preparations', show:'Wafront', poster:'images/Posters/WFE1.png', src:'videos/Warfront/Warfront-S1-E1.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s17', title:'The First Fight, the first loss', show:'Wafront', poster:'images/Posters/WFE2.png', src:'videos/Warfront/Warfront-S1-E2.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s18', title:'Awakening', show:'Wafront', poster:'images/Posters/WFE3.png', src:'videos/Warfront/Warfront-S1-E3.mp4', year:2022, desc:'Season 1', se:'Season 1 • Episode 3', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s19', title:'Unleash the Drone', show:'Wafront', poster:'images/Posters/WFE4.png', src:'videos/Warfront/Warfront-S1-E4.mp4', year:2023, desc:'Season 1', se:'Season 1 • Episode 4', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s20', title:'The Ultimate Defeat', show:'Wafront', poster:'images/Posters/WFE5.png', src:'videos/Warfront/Warfront-S1-E5.mp4', year:2024, desc:'Season 1', se:'Season 1 • Episode 5', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s21', title:'Displaced: Part 1', show:'Wafront', poster:'images/Posters/TBS2E6.png', src:'videos/TheBattle/TheBattle-S2-E6.mp4', year:2024, desc:'Season 2', se:'Season 2 • Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show'},

      // GAR Structure Series
      { id:'s22', title:'The Ranks of the GAR', show:'PivonianAcademy', poster:'images/Posters/PAE1.png', src:'videos/PivonianAcademy/PivonianAcademy-S1-E1.mp4', year:2025, desc:'', se:'Episode 1: Part 1', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s23', title:'Structure of the GAR', show:'PivonianAcademy', poster:'images/Posters/PAE1P2.png', src:'videos/PivonianAcademy/PivonianAcademy-S1-E2.mp4', year:2025, desc:'', se:'Episode 1: Part 2', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      { id:'s24', title:'Fixing the GAR', show:'PivonianAcademy', poster:'images/Posters/PAE1P3.png', src:'videos/PivonianAcademy/PivonianAcademy-S1-E3.mp4', year:2025, desc:'', se:'Episode 1: Part 3', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      // { id:'s25', title:"GAR's Navy & Spec-Ops", show:'PivonianAcademy', poster:'images/Posters/PAE1P4.png', src:'videos/PivonianAcademy/PivonianAcademy-S1-E4.mp4', year:2025, desc:'', se:'Episode 1: Part 4', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },

      // Skirmish Studies Series
      //{ id:'s26', title:'The Battle of Umbara', show:'SkirmishStudies', poster:'images/Posters/SSE1.png', src:'videos/SkirmishStudies/SkirmishStudies-S1-E1.mp4', year:2025, desc:'', se:'Episode 1', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      //{ id:'s27', title:'The 2nd Battle of Geonosis', show:'SkirmishStudies', poster:'images/Posters/SSE2.png', src:'videos/SkirmishStudies/SkirmishStudies-S1-E2.mp4', year:2025, desc:'', se:'Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      //{ id:'s28', title:'The Battle of Ryloth', show:'SkirmishStudies', poster:'images/Posters/SSE3.png', src:'videos/SkirmishStudies/SkirmishStudies-S1-E3.mp4', year:2026, desc:'', se:'Episode 3', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },
      //{ id:'s29', title:'The Siege of Mandalore', show:'SkirmishStudies', poster:'images/Posters/SSE4.png', src:'videos/SkirmishStudies/SkirmishStudies-S1-E4.mp4', year:2026, desc:'', se:'Episode 4', vertposter:'images/Posters/placeholdervert.png', studio:'Pivonian Studios', sub:'Free', genre:'', category:'show' },

      // The Bomb Mini Series
      { id:'s30', title:'The Bomb - Part 1', show:'TheBomb', poster:'images/Posters/BE1.png', src:'videos/TheBomb/TheBomb-E1.mp4', year:2022, desc:'', se:'Part 1', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'' },
      { id:'s31', title:'The Bomb - Part 2', show:'TheBomb', poster:'images/Posters/BE2.png', src:'videos/TheBomb/TheBomb-E2.mp4', year:2022, desc:'', se:'Part 2', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Free', genre:'', category:'' },

      // continue at s42...

      // The studio setup
      //{ id:'studio-tanky', title:'Tanky Productions', show:'studio', poster:'images/Studios/TankyProductions.png', src:'', year:2020, desc:'Creators of "The Battle" and "The Bomb" series.', se:'', vertposter:'images/Studios/TankyProductions-vert.png', studio:'Tanky Productions' },
      //{ id:'studio-pivonian', title:'Pivonian Studios', show:'studio', poster:'images/Studios/PivonianStudios.png', src:'', year:2020, desc:'Creators of "Wafront", "Pivonian Academy" and "Skirmish Studies" series.', se:'', vertposter:'images/Studios/PivonianStudios-vert.png', studio:'Pivonian Studios' },
      { id:'studio-deadskull', title:'Deadskull Productions', show:'studio', poster:'images/Studios/DeadskullProductions.png', src:'', year:2020, desc:'Creators of "The Battle" and "The Bomb" series.', se:'', vertposter:'images/Studios/DeadskullProductions-vert.png', studio:'Deadskull Productions' },
      { id:'studio-othernet', title:'OtherNet Studios', show:'studio', poster:'images/Studios/OtherNet.png', src:'', year:2020, desc:'Creators of "The Battle" and "The Bomb" series.', se:'', vertposter:'images/Studios/OtherNet-vert.png', studio:'OtherNet Studios' },     

      // Movies
      // { id:'s42', title:'The Battle of Paladin Strait', show:'Movies', poster:'images/Posters/TBOPS.png', src:'videos/Movies/BattleofPaladinStrait.mp4', year:2025, desc:'The epic final battle of the Dema storyline from TwentyOnePilots. Three music videos (Paladin Strait, The Contract, City Walls) turned into a single movie.', se:'19m 11s', vertposter:'images/Posters/PaladinVert.png', studio:'OtherNet Studios', rt:'19m 11s' },
  ];

    const state = {
      items: load(LS_KEY_LIBRARY, seed),
      featuredId: null,
      filtered: null,
    };

    function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
    function load(key, fallback){ 
      try { 
        const v = JSON.parse(localStorage.getItem(key)); 
        return Array.isArray(v) || typeof v==='object' ? (v ?? fallback) : fallback 
      } catch { return fallback } 
    }

    // ===== DOM =====
    const rowBattle = document.getElementById('rowTheBattle');
    const emptyBattle = document.getElementById('emptyTheBattle');
    const rowWafront = document.getElementById('rowWafront');
    const emptyWafront = document.getElementById('emptyWafront');
    const rowPivonian = document.getElementById('rowPivonian');
    const emptyPivonian = document.getElementById('emptyPivonian');
    const rowTheBomb = document.getElementById('rowTheBomb');
    const emptyTheBomb = document.getElementById('emptyTheBomb');
    const rowSectorfall = document.getElementById('rowSectorfall');
    const emptySectorfall = document.getElementById('emptySectorfall');
    const rowSkirmishStudies = document.getElementById('rowSkirmishStudies');
    const emptySkirmishStudies = document.getElementById('emptySkirmishStudies');
    const emptyMovies = document.getElementById('emptyMovies');
    const rowMovies = document.getElementById('rowMovies');
    const rowContinue = document.getElementById('rowContinue');
    const emptyContinue = document.getElementById('emptyContinue');
    const rowWatchlist = document.getElementById('rowWatchlist');
    const emptyWatchlist = document.getElementById('emptyWatchlist');

    const heroBg = document.getElementById('heroBg');
    const heroPoster = document.getElementById('heroPoster');
    const heroTitle = document.getElementById('heroTitle');
    const heroMeta = document.getElementById('heroMeta');
    const heroPlay = document.getElementById('heroPlay');

    // const searchInput = document.getElementById('searchInput');

    // Player
    const player = document.getElementById('player');
    const playerClose = document.getElementById('playerClose');
    const videoEl = document.getElementById('videoEl');
    const playerTitle = document.getElementById('playerTitle');
    const playerDesc = document.getElementById('playerDesc');

    // ===== Helpers =====
    function uid(){ return 'id-' + Math.random().toString(36).slice(2,9) }
    function yearOrDash(y){ return y ? String(y) : '—' }

      function makeThumb(title){
        const bg = 'linear-gradient(135deg,#151e30,#0f1424 60%)';
        return { style: `background:${bg};display:grid;place-items:center;color:#cfd3df;font-weight:800;letter-spacing:.05em;` , text: title };
      }

    function getMostRecentItem(filteredItems = null) {
      const items = filteredItems || state.items;
      if (!items || items.length === 0) return null;

      // Step 1: Find the max year
      let maxYear = -Infinity;
      for (const item of items) {
        const year = Number(item.year);
        if (!isNaN(year) && year > maxYear) maxYear = year;
      }
      console.log('Max year found:', maxYear);

      // Step 2: Filter items with that year
      const itemsInMaxYear = items.filter(i => Number(i.year) === maxYear);
      console.log(`Items in year ${maxYear}:`, itemsInMaxYear);

      if (itemsInMaxYear.length === 0) return null;

      // Step 3: Find the item with the highest ID (numeric if possible)
      let mostRecent = itemsInMaxYear[0];
      for (const item of itemsInMaxYear) {
        const currentIdNum = Number(item.id);
        const mostRecentIdNum = Number(mostRecent.id);

        // Prefer numeric comparison if both are valid numbers
        if (!isNaN(currentIdNum) && !isNaN(mostRecentIdNum)) {
          if (currentIdNum > mostRecentIdNum) mostRecent = item;
        } else {
          // Fallback: string comparison
          if (item.id > mostRecent.id) mostRecent = item;
        }
      }

      console.log('Most recent item based on year & ID:', mostRecent);
      return mostRecent;
    }

    // Use it after state.items is ready and DOM elements exist
    const mostRecentItem = getMostRecentItem();
    if (mostRecentItem) setFeatured(mostRecentItem.id);

    function setFeatured(idOrItem) {
      // Accept either an item object _or_ an id
      let item = null;
      if (typeof idOrItem === 'object' && idOrItem !== null && idOrItem.id !== undefined) {
        item = idOrItem;
        state.featuredId = item.id;
      } else {
        state.featuredId = idOrItem;
        item = state.items.find(i => String(i.id) === String(idOrItem));
      }

      if (!item) {
        console.warn('setFeatured: item not found for', idOrItem, 'state.items length:', state.items.length);
        // log call stack so we can see what triggered it
        console.warn(new Error().stack);
        return;
      }

      console.log('setFeatured called for:', item, '\ncall stack:\n', new Error().stack);

      // Update hero UI (do not call setFeatured() again from here)
      heroTitle.textContent = item.title;
      heroMeta.textContent = `${item.show} | ${yearOrDash(item.se)} | ${yearOrDash(item.year)}`;
      heroBg.style.backgroundImage = item.poster ? `url("${item.poster}")` : 'linear-gradient(135deg,#11182a,#0c1120)';
      heroPoster.src = item.vertposter || '';
      heroPoster.alt = item.title + ' poster';
      heroPlay.onclick = () => openPlayer(item);
    }

    function showEpisodes(showName) {
      const container = document.getElementById('episodeListContainer');
      container.innerHTML = ''; // clear old content

      // Filter episodes for the chosen show
      const episodes = state.items.filter(i => i.show === showName && i.category === 'show');

      if (episodes.length === 0) {
        container.innerHTML = `<p style="color:#ccc;">No episodes found for ${showName}</p>`;
        return;
      }

      // Sort by season + episode number (based on se: 'Season X • Episode Y')
      episodes.sort((a, b) => {
        const [sA, eA] = parseSeasonEpisode(a.se);
        const [sB, eB] = parseSeasonEpisode(b.se);
        if (sA !== sB) return sA - sB;
        return eA - eB;
      });

      // Build episode list elements
      const list = document.createElement('div');
      list.className = 'episode-list-grid';

      episodes.forEach(ep => {
        const item = document.createElement('div');
        item.className = 'episode-card';
        item.innerHTML = `
          <img src="${ep.poster}" alt="${ep.title}" class="episode-poster">
          <div class="episode-info">
            <h4>${ep.title}</h4>
            <p>${ep.se}</p>
          </div>
        `;

        // When clicked, open player
        item.addEventListener('click', () => openPlayer(ep));

        list.appendChild(item);
      });

      container.appendChild(list);
    }

    // Helper to extract numbers from se like "Season 2 • Episode 5"
    function parseSeasonEpisode(se) {
      const match = /Season\s*(\d+).*Episode\s*(\d+)/i.exec(se);
      return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
    }

    function makeFocusable(el) {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
    }

    function card(item, options = {}) {
      const el = document.createElement('article');
      el.className = 'card';
      el.setAttribute('role','listitem');

      const showProgress = item.position && item.duration;
      const progress = showProgress ? (item.position / item.duration) * 100 : 0;

      const thumbContent = item.poster
        ? `<img src="${item.poster}" alt="${item.title} poster" loading="lazy">`
        : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`;

      const progressBar = showProgress
        ? `<div class="progress-bar"><div class="progress" style="width:${progress}%"></div></div>`
        : '';

      const removeBtn = options.showRemove && item.show !== 'Movies'
        ? `<button class="remove-btn" title="Remove">✕</button>`
        : '';

      if (item.show !== 'Movies') {
        el.innerHTML = `
          <div class="thumb">
            ${thumbContent}
            ${progressBar}
            ${removeBtn}
          </div>
          <div class="card-body">
            <div class="title">${item.title}</div>
            <div class="meta">${yearOrDash(item.se)} | ${yearOrDash(item.year)}</div>
          </div>
        `;
        el.querySelector('.thumb').addEventListener('click', () => openShowPopup(item));
      } else {
        el.innerHTML = `
          <div class="movie-thumb">
            ${item.vertposter ? `<img src="${item.vertposter}" alt="${item.title} poster" loading="lazy">` : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`}
          </div>
        `;
        el.style.height = '350px';
        el.querySelector('.movie-thumb').addEventListener('click', () => openMoviePopup(item));
      }

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openShowPopup(item);
      });

      // Handle remove button
      if (options.showRemove && item.show !== 'Movies') {
        const btn = el.querySelector('.remove-btn');
        if (btn) {
          deleteContinueItem(btn, item)
          deleteWatchlistItem(btn, item)
        }
      }

      return el;
    }

    async function deleteContinueItem(btn, item) {
      const usrData = await fetchUserData();
      
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
          const user = usrData.uid;
          if (!user) return;
          const ref = doc(db, "users", user.uid, "continueWatching", String(item.id));
          await deleteDoc(ref);
          console.log('Removed:', item.title);
          await renderContinue();
        } catch (err) {
          console.error('Failed to remove item:', err);
        }
      })
    }

    async function deleteWatchlistItem(btn, item) {
      const usrData = await fetchUserData();
      
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
          const user = usrData.uid;
          if (!user) return;
          const ref = doc(db, "users", user.uid, "watchList", String(item.id));
          await deleteDoc(ref);
          console.log('Removed:', item.title);
          await renderWatchlist();
        } catch (err) {
          console.error('Failed to remove item:', err);
        }
      })
    }

    // ===== Studio Tabs =====
    const studioTabsContainer = document.getElementById('studioTabs');

    // 1. Get unique studios
    function getStudios() {
      const studios = [...new Set(state.items.map(i => i.studio).filter(Boolean))];
      return [{ name: 'All', img: 'images/Studios/All.png' }, 
              ...studios.map(s => ({
                name: s,
                img: `images/Studios/${s.replace(/\s+/g,'')}.png`
              }))];
    }

    // 2. Render tabs
    function renderStudioTabs() {
      const studios = getStudios();
      studioTabsContainer.innerHTML = '';
      studios.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'studio-tab';
        
        const img = document.createElement('img');
        img.src = s.img;
        img.alt = s.name;

        // Set fallback if image doesn't exist
        img.onerror = () => { img.src = 'images/placeholder.jpg'; };

        btn.appendChild(img);
        btn.addEventListener('click', () => {
          setStudioFilter(s.name);
          setActiveTab(s.name);
        });
        studioTabsContainer.appendChild(btn);
      });
    }

    // 3. Highlight active tab
    function setActiveTab(name) {
      document.querySelectorAll('#studioTabs button').forEach(btn => {
        btn.classList.toggle('active', btn.querySelector('img').alt === name);
      });
    }

    // 4. Filter shows by studio
    function setStudioFilter(studio){
      if(studio === 'All') state.filtered = null;
      else state.filtered = state.items.filter(i => i.studio.toLowerCase() === studio.toLowerCase());
      render();
    }

    function byshow(cat){
      const source = state.filtered ?? state.items;
      return source.filter(i => i.show.toLowerCase() === cat.toLowerCase());
    }

    function renderRow(dest, emptyEl, list, options = {}) {
      const rowContainer = dest.parentElement;
      dest.innerHTML = '';

      if (!list.length) {
        emptyEl.style.display = 'block';
        rowContainer.classList.remove('visible');
        rowContainer.classList.add('hidden');
        return;
      }

      emptyEl.style.display = 'none';
      rowContainer.classList.remove('hidden');
      rowContainer.classList.add('visible');
      list.forEach(i => dest.appendChild(card(i, options)));
    }

    export async function renderContinue() {
      const list = await fetchContinueWatching();
      renderRow(rowContinue, emptyContinue, list, { showRemove: true });
    }

    export async function renderWatchlist() {
      const list = await fetchWatchlist();
      renderRow(rowWatchlist, emptyWatchlist, list, { showRemove: true });
    }

    function render(){
      const rows = [
        { dest: rowBattle, empty: emptyBattle, cat: 'TheBattle' },
        { dest: rowWafront, empty: emptyWafront, cat: 'Wafront' },
        { dest: rowPivonian, empty: emptyPivonian, cat: 'PivonianAcademy' },
        { dest: rowTheBomb, empty: emptyTheBomb, cat: 'TheBomb' },
        { dest: rowSectorfall, empty: emptySectorfall, cat: 'Sectorfall' },
        { dest: rowSkirmishStudies, empty: emptySkirmishStudies, cat: 'SkirmishStudies' },
        { dest: rowMovies, empty: emptyMovies, cat: 'Movies'}
      ];

      let delay = 0;
      rows.forEach(r => {
        const list = byshow(r.cat);
        console.log('Row:', r.cat, 'Found:', list.length);
        renderRow(r.dest, r.empty, list);

        // Remove previous transition
        r.dest.parentElement.classList.remove('visible');

        if(list.length){
          // Add staggered fade-in
          setTimeout(() => {
            r.dest.parentElement.classList.add('visible');
          }, delay);
          delay += 170; // 170ms stagger between rows
        }
      });

      // --- Featured handling: do NOT auto-overwrite the featured item here ---
      // Ensure the hero displays the currently-selected featured item (without re-calling setFeatured)
      if (state.featuredId) {
        const current = state.items.find(i => String(i.id) === String(state.featuredId));
        if (current) {
          // update the hero UI directly (no setFeatured call, to avoid recursion/overwrites)
          heroTitle.textContent = current.title;
          heroMeta.textContent = `${current.show} | ${yearOrDash(current.se)} | ${yearOrDash(current.year)}`;
          heroBg.style.backgroundImage = current.poster ? `url("${current.poster}")` : 'linear-gradient(135deg,#11182a,#0c1120)';
          heroPoster.src = current.vertposter || '';
          heroPoster.alt = current.title + ' poster';
          heroPlay.onclick = () => openPlayer(current);
        }
      }
    }

    // ===== Player =====
    async function openPlayer(item){
        player.style.display='flex';
        videoEl.src = item.src || '';
        videoEl.play().catch(()=>{});
        playerTitle.textContent = item.title;
        playerDesc.textContent = item.desc || `${item.show} • ${yearOrDash(item.year)}`;

        //if (item.sub === 'Free') {
            //player.style.display='flex';
            //videoEl.src = item.src || '';
            //videoEl.play().catch(()=>{});
            //playerTitle.textContent = item.title;
            //playerDesc.textContent = item.desc || `${item.show} • ${yearOrDash(item.year)}`;
        //} else if (item.sub === subData.subType) {
            //player.style.display='flex';
            //videoEl.src = item.src || '';
            //videoEl.play().catch(()=>{});
            //playerTitle.textContent = item.title;
            //playerDesc.textContent = item.desc || `${item.show} • ${yearOrDash(item.year)}`;            
        //}

        // Remove if fully watched
        videoEl.onended = async () => {
          await updateContinueWatching(item, videoEl.duration, videoEl.duration);
        }

        // Track time updates
        videoEl.ontimeupdate = async () => {
          if (!videoEl.duration) return;
          const progress = videoEl.currentTime / videoEl.duration;
          // Save progress every 10 seconds or if over 10%
          if (videoEl.currentTime % 10 < 1 || progress > 0.9) {
            await updateContinueWatching(item, videoEl.currentTime, videoEl.duration);
          }
        }

        videoEl.addEventListener('timeupdate', () => {
          if (videoEl.currentTime > 0 && videoEl.duration > 0) {
            updateContinueWatching(item, videoEl.currentTime, videoEl.duration);
          }
        });

        videoEl.onpause = () => {
          updateContinueWatching(item, videoEl.currentTime, videoEl.duration);
        };
    }

    function closePlayer(){
      player.style.display='none';
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    };

    playerClose.addEventListener('click', closePlayer);
    player.addEventListener('click', (e)=>{ if(e.target===player) closePlayer(); });
    document.addEventListener('keydown', (e)=>{
      if(player.style.display==='flex'){
        if(e.key==='Escape') closePlayer();
        if(e.code==='Space'){ e.preventDefault(); if(videoEl.paused) videoEl.play(); else videoEl.pause(); };
        if(e.key==='ArrowRight') videoEl.currentTime = Math.min(videoEl.duration, videoEl.currentTime + 10);
        if(e.key==='ArrowLeft') videoEl.currentTime = Math.max(0, videoEl.currentTime - 10);
        if(e.key==='ArrowUp') videoEl.volume = Math.min(1, videoEl.volume + 0.1);
        if(e.key==='ArrowDown') videoEl.volume = Math.max(0, videoEl.volume - 0.1);
      }
    });

    // ===== Search =====
    //searchInput.addEventListener('input', ()=>{
    //  const q = searchInput.value.toLowerCase().trim();
    //  if(!q){ state.filtered = null; render(); return; }
    //  const results = state.items.filter(i =>
    //    i.title.toLowerCase().includes(q) ||
    //    (i.show && i.show.toLowerCase().includes(q)) ||
    //    (i.desc && i.desc.toLowerCase().includes(q))
    //  );
    //  state.filtered = results;
    //  render();
    //});


    // ===== Notifications & Profile Panels =====
    const openNotifBtn = document.getElementById('notifbtn');
    const closeNotifBtn = document.getElementById('closeNotifBtn');
    const notifPanel = document.getElementById('notificationsPanel');

    const openProfileBtn = document.getElementById('profilebtn');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    const profilePanel = document.getElementById('profilePanel');

    const moviePanel = document.getElementById('movie-popup');
    const movieBanner = document.getElementById('movie-banner');
    const moviePlayBtn = document.getElementById('movie-playbtn');
    const movieDesc = document.getElementById('movie-desc');
    const movieInfo = document.getElementById('movie-info');
    const movieTitle = document.getElementById('movie-title');

    const showPanel = document.getElementById('show-popup');
    const showBanner = document.getElementById('show-banner');
    const showPlayBtn = document.getElementById('show-playbtn');
    const showDesc = document.getElementById('show-desc');
    const showInfo = document.getElementById('show-info');
    const showTitle = document.getElementById('show-title');
    const seriesOther = document.getElementById('series-text');
    const addToWatchlist = document.getElementById('addToWatchlistBtn');

    // === Profile Picture Changer ===
    const pfpChanger = document.getElementById('pfpChangerPanel');
    const pfpChangeBtn = document.getElementById('changePfp');
    const pfpImg = document.querySelector('.profile-img'); // main profile image
    const pfpOptions = document.querySelectorAll('.pfpOption img');
    const profileNavImg = document.querySelector('.profile-icon');

    const tosPanel = document.getElementById('tos-panel');
    const privacyPanel = document.getElementById('privacy-panel');
    const dmcaPanel = document.getElementById('dmca-panel');
    const refundPanel = document.getElementById('refund-panel');

    const tosBtn = document.getElementById('tosBtn');
    const privacyBtn = document.getElementById('privBtn');
    const dmcaBtn = document.getElementById('dmcaBtn');
    const refundbtn = document.getElementById('refundBtn');

    tosBtn.addEventListener('click', () => {
      tosPanel.style.display = 'flex';
      profilePanel.style.display = 'none';
    });

    privacyBtn.addEventListener('click', () => {
      privacyPanel.style.display = 'flex';
      profilePanel.style.display = 'none';
    });

    dmcaBtn.addEventListener('click', () => {
      dmcaPanel.style.display = 'flex';
      profilePanel.style.display = 'none';
    });

    refundbtn.addEventListener('click', () => {
      refundPanel.style.display = 'flex';
      profilePanel.style.display = 'none';
    });

    // Notifications Panel
    openNotifBtn.addEventListener('click', () => {
      notifPanel.style.display = 'flex';
    });

    closeNotifBtn.addEventListener('click', () => {
      notifPanel.style.display = 'none';
    });

    // Profile Panel
    openProfileBtn.addEventListener('click', () => {
      profilePanel.style.display = 'flex';
    });

    closeProfileBtn.addEventListener('click', () => {
      profilePanel.style.display = 'none';
    });

    pfpChangeBtn.addEventListener('click', () => {
      console.log('Opening profile changer')
      pfpChanger.style.display = 'flex';
    });

    // Open the chooser panel
    pfpChangeBtn.addEventListener('click', () => {
      console.log('Opening profile changer');
      pfpChanger.style.display = 'flex';
    });

    // Listen to all profile picture option buttons
    pfpOptions.forEach(img => {
      img.addEventListener('click', async () => {
        const newSrc = img.getAttribute('src');
        console.log('User selected new profile picture:', newSrc);

        try {
          // Update UI instantly
          pfpImg.src = newSrc;
          profileNavImg.src = newSrc;
          pfpChanger.style.display = 'none';

          // Update Firebase
          const usrData = await fetchUserData();
          usrData.profilePic = newSrc;
          await updateUserProfilePic(newSrc); // define this in firebase-profile.js
          console.log('Profile picture updated in Firebase.');
        } catch (err) {
          console.error('Error updating profile picture:', err);
        }
      });
    });

    function openMoviePopup(item) {
      moviePanel.style.display = 'flex';
      movieTitle.innerHTML = item.title || "Title";
      movieDesc.innerHTML = item.desc || "No information about this film";
      movieBanner.src = item.poster;
      movieInfo.innerHTML = `${item.year}  ${item.rt}`;
      moviePlayBtn.addEventListener('click', ()=> openPlayer(item));
      
    };

    function openShowPopup(item) {
      showPanel.style.display = 'flex';
      showTitle.innerHTML = item.title || "Title";
      showDesc.innerHTML = item.desc || "No information about this show";
      showBanner.src = item.poster;
      showInfo.innerHTML = `${item.year}  ${item.se}`;
      showPlayBtn.addEventListener('click', ()=> openPlayer(item));     
      showEpisodes(item.show);
      seriesOther.innerHTML = `Other episodes of ${item.show}` || "this series";

      addToWatchlist.addEventListener('click', () => {
        addItemToWatchlist(item);
      });
    };

    async function addItemToWatchlist(item) {
      await updateWatchList(item);
    };

    window.addEventListener('click', (event) => {
      if (event.target === moviePanel || event.target === showPanel || event.target === profilePanel || event.target === notifPanel || event.target === tosPanel || event.target === refundPanel || event.target === dmcaPanel || event.target === privacyPanel) {
        moviePanel.style.display = 'none';
        showPanel.style.display = 'none'
        profilePanel.style.display = 'none';
        notifPanel.style.display = 'none';
        tosPanel.style.display = 'none';
        privacyPanel.style.display = 'none';
        dmcaPanel.style.display = 'none';
        refundPanel.style.display = 'none';
      };
      if (event.target === pfpChanger) {
        pfpChanger.style.display = 'none';
      }
    });

    window.addEventListener('load', () => {
      const firstCard = document.querySelector('.card[tabindex="0"]');
      if (firstCard) firstCard.focus();
    });

    document.addEventListener('keydown', (e) => {
      const focused = document.activeElement;
      if (!focused || !focused.classList.contains('card')) return;

      const allCards = Array.from(document.querySelectorAll('.card[tabindex="0"]'));
      const index = allCards.indexOf(focused);

      if (e.key === 'ArrowRight' && index < allCards.length - 1) {
        allCards[index + 1].focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        allCards[index - 1].focus();
      } else if (e.key === 'ArrowDown') {
        // Move to next row
        const nextRow = focused.closest('.tv-row')?.nextElementSibling?.querySelector('.card');
        if (nextRow) nextRow.focus();
      } else if (e.key === 'ArrowUp') {
        // Move to previous row
        const prevRow = focused.closest('.tv-row')?.previousElementSibling?.querySelector('.card');
        if (prevRow) prevRow.focus();
      }
    });

    // ===== Init =====
    (function init(){
      const saved = load(LS_KEY_LIBRARY, []);
      
      if(!saved.length || JSON.stringify(saved) !== JSON.stringify(seed)){
        save(LS_KEY_LIBRARY, seed);
        state.items = [...seed];
      } else {
        state.items = [...saved];
      }

      if(!state.items.length){
      } else {
        setFeatured(mostRecentItem.id);
      }
      

      // Initialize tabs
      setActiveTab('All');
      renderStudioTabs();
      render();
      renderContinue();
      renderWatchlist();
    })();

