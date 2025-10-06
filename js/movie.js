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


    const seed = [
      // Movies
      { id:'m1', title:'The Battle of Paladin Strait', cat:'Movies', poster:'images/Posters/TBOPS.png', src:'videos/Movies/BattleofPaladinStrait.mp4', year:2025, desc:'The epic final battle of the Dema storyline from TwentyOnePilots. Three music videos (Paladin Strait, The Contract, City Walls) turned into a single movie.', se:'', vertposter:'images/Posters/PaladinVert.png', studio:'OtherNet Studios', rt:'19m 11s' },
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
    const rowMovies = document.getElementById('rowMovies')
    const emptyMovies = document.getElementById('emptyMovie')

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
      if (item.cat !== 'Movies') {
        const movieID = item
        el.innerHTML = `
          <div class="thumb">
            ${item.poster ? `<img src="${item.poster}" alt="${item.title} poster" loading="lazy">` : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`}
          </div>
          <div class="card-body">
            <div class="title">${item.title}</div>
            <div class="meta">${yearOrDash(item.se)} | ${yearOrDash(item.year)}</div>
          </div>`;
          el.querySelector('.thumb').addEventListener('click', ()=> openMoviePopup(item));
        return movieID;
      } else {
        el.innerHTML = `
          <div class="movie-thumb">
            ${item.vertposter ? `<img src="${item.vertposter}" alt="${item.title} poster" loading="lazy">` : `<div style="${makeThumb(item.title).style}">${makeThumb(item.title).text}</div>`}
          </div>`;
        el.style.height = '350px';
        el.querySelector('.movie-thumb').addEventListener('click', ()=> openMoviePopup(item));
      }
      return el;
    }

    function byCateory(cat){
      const source = state.filtered ?? state.items;
      return source.filter(i => i.cat === cat);
    }

    function renderRow(dest, emptyEl, list){
        const rowContainer = dest.parentElement;
        dest.innerHTML = '';

        if(!list.length){
          rowContainer.classList.remove('visible');
          rowContainer.classList.add('hidden');
          return;
        }

        rowContainer.classList.remove('hidden');
        rowContainer.classList.add('visible');
        list.forEach(i => dest.appendChild(card(i)));
    }

    function render(){
      const rows = [
        { dest: rowMovies, empty: emptyMovies, cat: 'Movies' }
      ];

      let delay = 0;
      rows.forEach(r => {
        const list = byCateory(r.cat);
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
        playerDesc.textContent = item.desc || `${item.cat} • ${yearOrDash(item.year)}`;

        //if (item.sub === 'Free') {
            //player.style.display='flex';
            //videoEl.src = item.src || '';
            //videoEl.play().catch(()=>{});
            //playerTitle.textContent = item.title;
            //playerDesc.textContent = item.desc || `${item.cat} • ${yearOrDash(item.year)}`;
        //} else if (item.sub === subData.subType) {
            //player.style.display='flex';
            //videoEl.src = item.src || '';
            //videoEl.play().catch(()=>{});
            //playerTitle.textContent = item.title;
            //playerDesc.textContent = item.desc || `${item.cat} • ${yearOrDash(item.year)}`;            
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
    //    (i.cat && i.cat.toLowerCase().includes(q)) ||
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
    const moviePlayBtn = document.getElementById('playbtn');
    const movieDesc = document.getElementById('movie-desc');
    const movieInfo = document.getElementById('movie-info');
    const movieTitle = document.getElementById('movie-title');

    console.log("Movie info:", movieBanner, moviePanel, moviePlayBtn);
    // Notifications Panel
    openNotifBtn.addEventListener('click', () => {
      notifPanel.style.display = 'flex';
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
      profilePanel.style.display = 'flex'; 
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

    function openMoviePopup(item) {
      moviePanel.style.display = 'flex';
      movieTitle.innerHTML = item.title || "Title";
      movieDesc.innerHTML = item.desc || "No information about this film";
      movieBanner.src = item.poster;
      movieInfo.innerHTML = `${item.year}  ${item.rt}`;
      moviePlayBtn.addEventListener('click', ()=> openPlayer(item));
      
    };

    window.addEventListener('click', (event) => {
      if (event.target === moviePanel) {
        moviePanel.style.display = 'none';
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
    
      render();
    })();