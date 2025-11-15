    // ===== Data + Persistence =====
    const LS_KEY_LIBRARY = 'suvi_plus_library_v2';
    import { fetchUserData } from './firebase-profile.js';

    async function loadProfile() {
        try {
            const usrData = await fetchUserData();
            console.log('Subscription Data:', usrData.subStatus, usrData.subType);
            console.log('Accout name:', usrData.usrName)
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
      // { id:'s33', title:'Open Warfare', show:'TheBattle', poster:'images/Posters/TBS3E2.png', src:'videos/TheBattle/TheBattle-S3-E2.mp4', year:2025, desc:'Season 3', se:'Season 3 • Episode 2', vertposter:'images/Posters/placeholdervert.png', studio:'Tanky Productions', sub:'Premium', genre:'', category:'show' },
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
      // { id:'m1', title:'Sample Movie 1', show:'Movies', poster:'images/placeholder.jpg', src:'videos/sample.mp4', year:2023, desc:'A sample movie description.', se:'', vertposter:'images/placeholdervert.png', studio:'Sample Studio' },
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

    function card(item){
      const el = document.createElement('article');
      el.className = 'card';
      el.setAttribute('role','listitem');
      if (item.show !== 'Movies') {
        el.innerHTML = `
          <div class="thumb">
            ${item.poster ? `<img src="${item.poster}" alt="${item.title} poster" loading="lazy">` : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`}
          </div>
          <div class="card-body">
            <div class="title">${item.title}</div>
            <div class="meta">${yearOrDash(item.se)} | ${yearOrDash(item.year)}</div>
          </div>`;
          el.querySelector('.thumb').addEventListener('click', ()=> openPlayer(item));
      } else {
        el.innerHTML = `
          <div class="movie-thumb">
            ${item.vertposter ? `<img src="${item.vertposter}" alt="${item.title} poster" loading="lazy">` : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`}
          </div>`;
        el.style.height = '350px';
        el.querySelector('.movie-thumb').addEventListener('click', ()=> openPlayer(item));
      }
      return el;
    }

    function byshow(cat){
      const source = state.filtered ?? state.items;
      return source.filter(i => i.show.toLowerCase() === cat.toLowerCase());
    }

    function renderRow(dest, emptyEl, list){
        const rowContainer = dest.parentElement;
        dest.innerHTML = '';

        if(!list.length){
          emptyEl.style.display = 'block';
          rowContainer.classList.remove('visible');
          rowContainer.classList.add('hidden'); // just hide with CSS, preserves spacing if needed
          return;
        }

        emptyEl.style.display = 'none';
        rowContainer.classList.remove('hidden');
        rowContainer.classList.add('visible');
        list.forEach(i => dest.appendChild(card(i)));
    }



    function render(){
      const rows = [
        { dest: rowBattle, empty: emptyBattle, cat: 'TheBattle' },
        { dest: rowWafront, empty: emptyWafront, cat: 'Wafront' },
        { dest: rowPivonian, empty: emptyPivonian, cat: 'PivonianAcademy' },
        { dest: rowTheBomb, empty: emptyTheBomb, cat: 'TheBomb' },
        { dest: rowSectorfall, empty: emptySectorfall, cat: 'Sectorfall' },
        { dest: rowSkirmishStudies, empty: emptySkirmishStudies, cat: 'SkirmishStudies' },
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
    }

    function closePlayer(){
      player.style.display='none';
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    }
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

    // Notifications Panel
    openNotifBtn.addEventListener('click', () => {
      notifPanel.style.display = 'flex'; /* Change to 'block' if not using flexbox for centering */
    });

    closeNotifBtn.addEventListener('click', () => {
      notifPanel.style.display = 'none';
    });

    // Close popup when clicking outside the content
    window.addEventListener('click', (event) => {
      if (event.target === notifPanel) {
        notifPanel.style.display = 'none';
      }
    });

    // Profile Panel
    openProfileBtn.addEventListener('click', () => {
      profilePanel.style.display = 'flex'; /* Change to 'block' if not using flexbox for centering */
    });

    closeProfileBtn.addEventListener('click', () => {
      profilePanel.style.display = 'none';
    });

    // Close popup when clicking outside the content
    window.addEventListener('click', (event) => {
      if (event.target === profilePanel) {
        profilePanel.style.display = 'none';
      }
    });

    // ===== Init =====
    (function init(){
      const saved = load(LS_KEY_LIBRARY, []);
      
      // Update localStorage if seed has changed (new items or differences)
      if(!saved.length || JSON.stringify(saved) !== JSON.stringify(seed)){
        save(LS_KEY_LIBRARY, seed);
        state.items = [...seed];
      } else {
        state.items = [...saved];
      }
      render();
    })();