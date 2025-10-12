const items = [
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

      // Movies
      // { id:'s42', title:'The Battle of Paladin Strait', show:'Movies', poster:'images/Posters/TBOPS.png', src:'videos/Movies/BattleofPaladinStrait.mp4', year:2025, desc:'The epic final battle of the Dema storyline from TwentyOnePilots. Three music videos (Paladin Strait, The Contract, City Walls) turned into a single movie.', se:'19m 11s', vertposter:'images/Posters/PaladinVert.png', studio:'OtherNet Studios', rt:'19m 11s' },
  ];

const tvHeroPoster = document.getElementById('tvHeroPoster');
const tvHeroTitle = document.getElementById('tvHeroTitle');
const tvHeroMeta = document.getElementById('tvHeroMeta');
const tvHeroPlay = document.getElementById('tvHeroPlay');
const tvPlayer = document.getElementById('tvPlayer');
const tvVideo = document.getElementById('tvVideo');
const tvClosePlayer = document.getElementById('tvClosePlayer');
const tvRowsContainer = document.getElementById('tvRowsContainer');

const tvProfileBtn = document.getElementById('tvProfileBtn');
const tvProfileModal = document.getElementById('tvProfileModal');
const tvCloseProfile = document.getElementById('tvCloseProfile');

const tvShowPopup = document.getElementById('tvShowPopup');
const tvShowTitle = document.getElementById('tvShowTitle');
const tvShowMeta = document.getElementById('tvShowMeta');
const tvShowPlayBtn = document.getElementById('tvShowPlayBtn');
const tvShowCloseBtn = document.getElementById('tvShowCloseBtn');

const tvContinueRow = document.getElementById('tvContinueRow');
const tvWatchlistRow = document.getElementById('tvWatchlistRow');

function renderStaticRow(dest, items) {
  dest.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'tv-card';
    card.tabIndex = 0;
    card.innerHTML = `<img src="${item.poster}" alt="${item.title}"><p>${item.title}</p>`;
    card.addEventListener('click', () => openShowPopup(item));
    dest.appendChild(card);
  });
}

// Example usage:
const continueItems = items.slice(0, 3); // Replace with Firebase fetch
const watchlistItems = items.slice(3, 6); // Replace with Firebase fetch

renderStaticRow(tvContinueRow, continueItems);
renderStaticRow(tvWatchlistRow, watchlistItems);

function openShowPopup(item) {
  tvShowTitle.textContent = item.title;
  tvShowMeta.textContent = item.se;
  tvShowPlayBtn.onclick = () => playItem(item);
  tvShowPopup.style.display = 'flex';
}

tvShowCloseBtn.onclick = () => {
  tvShowPopup.style.display = 'none';
};

tvProfileBtn.onclick = () => {
  tvProfileModal.style.display = 'flex';
};

tvCloseProfile.onclick = () => {
  tvProfileModal.style.display = 'none';
};

function setFeatured(item) {
  tvHeroPoster.src = item.poster;
  tvHeroTitle.textContent = item.title;
  tvHeroMeta.textContent = item.se;
  tvHeroPlay.onclick = () => playItem(item);
}

function playItem(item) {
  tvVideo.src = item.src;
  tvPlayer.style.display = 'flex';
  tvVideo.play();
}

tvClosePlayer.onclick = () => {
  tvVideo.pause();
  tvPlayer.style.display = 'none';
};

function renderRows() {
  const grouped = {};

  // Group items by show name
  items.forEach(item => {
    if (!grouped[item.show]) grouped[item.show] = [];
    grouped[item.show].push(item);
  });

  // Render each group as a row
  Object.entries(grouped).forEach(([showName, episodes]) => {
    const section = document.createElement('section');
    section.className = 'tv-row';

    const title = document.createElement('h2');
    title.className = 'tv-row-title';
    title.textContent = showName;
    section.appendChild(title);

    const scroller = document.createElement('div');
    scroller.className = 'tv-scroller';

    episodes.forEach(item => {
      const card = document.createElement('div');
      card.className = 'tv-card';
      card.tabIndex = 0;
      card.innerHTML = `<img src="${item.poster}" alt="${item.title}"><p style="font-size: 16px;">${item.title}</p>`;
      card.addEventListener('click', () => openShowPopup(item));
      scroller.appendChild(card);
    });

    section.appendChild(scroller);
    tvRowsContainer.appendChild(section);
  });
}

renderRows();
setFeatured(items[0]);