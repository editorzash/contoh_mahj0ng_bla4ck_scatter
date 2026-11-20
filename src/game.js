/**
 * MAHJONG WINS 3 - BLACK SCATTER (Pragmatic Play 1:1 HTML5 Rebuild)
 * Uses 100% authentic extracted sprites, fonts, and coordinates from vswaysmahwblck
 */

(() => {
  'use strict';

  // =========================================================================
  // 1. SYMBOL DEFINITIONS & OFFICIAL PAYTABLE (Base multipliers per Total Bet)
  // =========================================================================
  const SYMBOLS = {
    S01: {
      id: 'S01',
      name: 'SCATTER (胜)',
      img: 'assets/sprites/S01/s_S01.png',
      blur: 'assets/sprites/S01_Blurred/s_S01_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S01_Thumb.png',
      isScatter: true,
      desc: 'Hit 3 or more SCATTER symbols anywhere to trigger 10 FREE SPINS (+2 for each extra Scatter).'
    },
    S02: {
      id: 'S02',
      name: 'WILD (Gold Ingot)',
      img: 'assets/sprites/S02/s_S02.png',
      blur: 'assets/sprites/S02_Blurred/s_S02_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S02_Thumb.png',
      isWild: true,
      desc: 'Substitutes for all symbols except SCATTER and BLACK SCATTER. Appears on reels 2, 3 and 4.'
    },
    S03: {
      id: 'S03',
      name: 'Green Dragon (發)',
      img: 'assets/sprites/S03/s_S03.png',
      gold: 'assets/sprites/S03/s_S03_Gold.png',
      blur: 'assets/sprites/S03_Blurred/s_S03_Blurred.png',
      goldBlur: 'assets/sprites/S03_Blurred/s_S03_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S03_Thumb.png',
      pays: { 5: 2.50, 4: 1.25, 3: 0.50 }
    },
    S04: {
      id: 'S04',
      name: 'Red Dragon (中)',
      img: 'assets/sprites/S04/s_S04.png',
      gold: 'assets/sprites/S04/s_S04_Gold.png',
      blur: 'assets/sprites/S04_Blurred/s_S04_Blurred.png',
      goldBlur: 'assets/sprites/S04_Blurred/s_S04_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S04_Thumb.png',
      pays: { 5: 2.00, 4: 1.00, 3: 0.40 }
    },
    S05: {
      id: 'S05',
      name: 'White Frame (白)',
      img: 'assets/sprites/S05/s_S05.png',
      gold: 'assets/sprites/S05/s_S05_Gold.png',
      blur: 'assets/sprites/S05_Blurred/s_S05_Blurred.png',
      goldBlur: 'assets/sprites/S05_Blurred/s_S05_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S05_Thumb.png',
      pays: { 5: 1.50, 4: 0.75, 3: 0.30 }
    },
    S06: {
      id: 'S06',
      name: 'Eight Characters (八萬)',
      img: 'assets/sprites/S06/s_S06.png',
      gold: 'assets/sprites/S06/s_S06_Gold.png',
      blur: 'assets/sprites/S06_Blurred/s_S06_Blurred.png',
      goldBlur: 'assets/sprites/S06_Blurred/s_S06_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S06_Thumb.png',
      pays: { 5: 1.00, 4: 0.50, 3: 0.25 }
    },
    S07: {
      id: 'S07',
      name: 'Five Dots (五筒)',
      img: 'assets/sprites/S07/s_S07.png',
      gold: 'assets/sprites/S07/s_S07_Gold.png',
      blur: 'assets/sprites/S07_Blurred/s_S07_Blurred.png',
      goldBlur: 'assets/sprites/S07_Blurred/s_S07_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S07_Thumb.png',
      pays: { 5: 0.75, 4: 0.35, 3: 0.15 }
    },
    S08: {
      id: 'S08',
      name: 'Three Dots (三筒)',
      img: 'assets/sprites/S08/s_S08.png',
      gold: 'assets/sprites/S08/s_S08_Gold.png',
      blur: 'assets/sprites/S08_Blurred/s_S08_Blurred.png',
      goldBlur: 'assets/sprites/S08_Blurred/s_S08_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S08_Thumb.png',
      pays: { 5: 0.75, 4: 0.35, 3: 0.15 }
    },
    S09: {
      id: 'S09',
      name: 'Two Dots (二筒)',
      img: 'assets/sprites/S09/s_S09.png',
      gold: 'assets/sprites/S09/s_S09_Gold.png',
      blur: 'assets/sprites/S09_Blurred/s_S09_Blurred.png',
      goldBlur: 'assets/sprites/S09_Blurred/s_S09_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S09_Thumb.png',
      pays: { 5: 0.50, 4: 0.25, 3: 0.10 }
    },
    S10: {
      id: 'S10',
      name: 'Five Bamboo (五條)',
      img: 'assets/sprites/S10/s_S10.png',
      gold: 'assets/sprites/S10/s_S10_Gold.png',
      blur: 'assets/sprites/S10_Blurred/s_S10_Blurred.png',
      goldBlur: 'assets/sprites/S10_Blurred/s_S10_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S10_Thumb.png',
      pays: { 5: 0.40, 4: 0.20, 3: 0.10 }
    },
    S11: {
      id: 'S11',
      name: 'Two Bamboo (二條)',
      img: 'assets/sprites/S11/s_S11.png',
      gold: 'assets/sprites/S11/s_S11_Gold.png',
      blur: 'assets/sprites/S11_Blurred/s_S11_Blurred.png',
      goldBlur: 'assets/sprites/S11_Blurred/s_S11_Gold_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S11_Thumb.png',
      pays: { 5: 0.30, 4: 0.15, 3: 0.05 }
    },
    S12: {
      id: 'S12',
      name: 'BLACK SCATTER (黑胜)',
      img: 'assets/sprites/S12/s_S12.png',
      blur: 'assets/sprites/S12_Blurred/s_S12_Blurred.png',
      thumb: 'assets/sprites/Thumbnails/s_S12_Thumb.png',
      isScatter: true,
      isBlackScatter: true,
      desc: '3+ Scatters with Black Scatter pays:\n1 Black = 50x Bet\n2 Black = 500x Bet\n3 Black = 5,000x Bet\n4 Black = 100,000x Bet'
    }
  };

  const PAYING_IDS = ['S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'S11'];

  // 4-5-5-5-4 Row Configuration & Exact Y coordinates inside 622x786 viewport
  const REEL_ROWS = [4, 5, 5, 5, 4];
  const ROW_STEP_Y = 140;
  const REEL_BASE_Y = [90, 4, 4, 4, 90];

  // Exact initial board from live screenshot step_16.png
  const INITIAL_SCREEN_STATE = [
    [
      { id: 'S05', isGold: false },
      { id: 'S04', isGold: false },
      { id: 'S03', isGold: false },
      { id: 'S05', isGold: false }
    ],
    [
      { id: 'S08', isGold: false },
      { id: 'S10', isGold: false },
      { id: 'S11', isGold: false },
      { id: 'S08', isGold: false },
      { id: 'S11', isGold: false }
    ],
    [
      { id: 'S03', isGold: false },
      { id: 'S06', isGold: false },
      { id: 'S03', isGold: false },
      { id: 'S04', isGold: false },
      { id: 'S06', isGold: false }
    ],
    [
      { id: 'S03', isGold: false },
      { id: 'S06', isGold: false },
      { id: 'S03', isGold: false },
      { id: 'S05', isGold: false },
      { id: 'S03', isGold: false }
    ],
    [
      { id: 'S07', isGold: false },
      { id: 'S10', isGold: false },
      { id: 'S09', isGold: false },
      { id: 'S10', isGold: false }
    ]
  ];

  const INITIAL_PEEKS = [
    { top: 'S07', bottom: 'S07' },
    { top: 'S06', bottom: 'S05' },
    { top: 'S05', bottom: 'S05' },
    { top: 'S04', bottom: 'S05' },
    { top: 'S05', bottom: 'S07' }
  ];

  const BET_LEVELS = [0.40, 0.80, 1.20, 1.60, 2.00, 4.00, 6.00, 10.00, 20.00, 40.00, 100.00, 200.00];
  const BASE_MULTIPLIERS = [1, 2, 3, 5];
  const FS_MULTIPLIERS = [2, 4, 6, 10];

  // =========================================================================
  // 2. GAME STATE
  // =========================================================================
  const state = {
    credit: 100000.00,
    betIndex: 4, // $2.00
    displayCoins: false,
    isSpinning: false,
    stopRequested: false,
    turboMode: false,
    soundEnabled: true,
    autoplayRemaining: 0,
    inFreeSpins: false,
    freeSpinsLeft: 0,
    freeSpinsTotalWin: 0,
    tumbleIndex: 0,
    currentSpinWin: 0,
    forcedFeature: null,
    grid: [],
    peeks: [],
    paytablePage: 0,
    manifestData: null
  };

  function getBet() {
    return BET_LEVELS[state.betIndex];
  }

  function formatMoney(val) {
    if (state.displayCoins) {
      const coinVal = Math.round((val / getBet()) * 20);
      return `${coinVal.toLocaleString('en-US')} COINS`;
    }
    return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // =========================================================================
  // 3. WEB AUDIO SOUND ENGINE
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, duration = 0.12, type = 'sine', gainVal = 0.14, slideFreq = null) {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        if (slideFreq) {
          osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
        }
        gain.gain.setValueAtTime(gainVal, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
      } catch (_) {}
    }

    playClick() {
      this.playTone(620, 0.06, 'triangle', 0.12, 880);
    }

    playSpinStart() {
      this.playTone(280, 0.16, 'sine', 0.14, 540);
    }

    playReelStop(reelIdx) {
      this.playTone(190 + reelIdx * 28, 0.075, 'triangle', 0.18, 110);
    }

    playWinChord(tumbleStep = 0) {
      const base = 440 + tumbleStep * 90;
      [1, 1.25, 1.5, 2].forEach((mult, idx) => {
        setTimeout(() => this.playTone(base * mult, 0.22, 'triangle', 0.14), idx * 55);
      });
    }

    playGoldTransform() {
      this.playTone(580, 0.28, 'sine', 0.18, 1240);
    }

    playScatterHit(count) {
      this.playTone(520 + count * 140, 0.35, 'sawtooth', 0.12, 980 + count * 160);
    }
  }

  const sfx = new SoundEngine();

  // =========================================================================
  // 4. RESPONSIVE 16:9 STAGE SCALER (1778 x 1000 logical coordinates)
  // =========================================================================
  function updateStageScale() {
    const stage = document.getElementById('stage');
    if (!stage) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / 1778, vh / 1000);
    stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener('resize', updateStageScale);

  // =========================================================================
  // 5. AMBIENT CLOUDS & FLOATING GOLD COINS
  // =========================================================================
  function initAmbientLayers() {
    const introParticles = document.getElementById('intro-particles');
    const bgClouds = document.getElementById('bg-clouds-layer');
    const bgCoins = document.getElementById('bg-coins-layer');

    const coinSprites = [
      'assets/sprites/basegame_Material/s_coin_1.png',
      'assets/sprites/basegame_Material/s_coin_2.png',
      'assets/sprites/basegame_Material/s_coin_3.png',
      'assets/sprites/basegame_Material/s_coin_4.png',
      'assets/sprites/basegame_Material/s_coin_5.png',
      'assets/sprites/basegame_Material/s_coin_6.png'
    ];

    const cloudSprites = [
      'assets/sprites/basegame_Material/s_cloud_1.png',
      'assets/sprites/basegame_Material/s_cloud_2.png',
      'assets/sprites/basegame_Material/s_cloud_3.png',
      'assets/sprites/basegame_Material/s_cloud_5.png'
    ];

    const cloudCoords = [
      { left: '4%', top: '8%', width: 280, dur: '24s' },
      { left: '12%', top: '34%', width: 220, dur: '19s' },
      { left: '78%', top: '12%', width: 300, dur: '27s' },
      { left: '82%', top: '38%', width: 210, dur: '21s' }
    ];
    cloudCoords.forEach((c, i) => {
      const img = document.createElement('img');
      img.src = cloudSprites[i % cloudSprites.length];
      img.className = 'ambient-cloud';
      img.style.left = c.left;
      img.style.top = c.top;
      img.style.width = c.width + 'px';
      img.style.animationDuration = c.dur;
      bgClouds.appendChild(img);
    });

    const coinPositions = [
      { left: '7%', top: '30%', w: 62, delay: '0s' },
      { left: '13%', top: '50%', w: 72, delay: '1.1s' },
      { left: '84%', top: '48%', w: 78, delay: '0.6s' },
      { left: '94%', top: '36%', w: 58, delay: '1.9s' }
    ];
    coinPositions.forEach((cp, idx) => {
      const img = document.createElement('img');
      img.src = coinSprites[idx % coinSprites.length];
      img.className = 'floating-coin';
      img.style.left = cp.left;
      img.style.top = cp.top;
      img.style.width = cp.w + 'px';
      img.style.animationDelay = cp.delay;
      bgCoins.appendChild(img);

      const introClone = img.cloneNode(true);
      introParticles.appendChild(introClone);
    });
  }

  // =========================================================================
  // 6. REEL GRID RENDERING (4-5-5-5-4 with Top & Bottom Tile Peeks)
  // =========================================================================
  function getSymbolImage(cell, blurred = false) {
    const def = SYMBOLS[cell.id] || SYMBOLS.S03;
    if (blurred) {
      if (cell.isGold && def.goldBlur) return def.goldBlur;
      return def.blur || def.img;
    }
    if (cell.isGold && def.gold) return def.gold;
    return def.img;
  }

  function cloneGrid(grid) {
    return grid.map(col => col.map(cell => ({ ...cell })));
  }

  function renderFullGrid() {
    const container = document.getElementById('reels-container');
    container.innerHTML = '';

    for (let r = 0; r < 5; r++) {
      const colEl = document.createElement('div');
      colEl.className = 'reel-col';
      colEl.dataset.reel = r;

      const baseY = REEL_BASE_Y[r];
      const rows = REEL_ROWS[r];
      const peek = state.peeks[r] || { top: 'S05', bottom: 'S07' };

      const topPeekEl = createTileElement({ id: peek.top, isGold: false }, r, -1, baseY - ROW_STEP_Y);
      topPeekEl.style.pointerEvents = 'none';
      colEl.appendChild(topPeekEl);

      for (let row = 0; row < rows; row++) {
        const cell = state.grid[r][row];
        const yPos = baseY + row * ROW_STEP_Y;
        const tileEl = createTileElement(cell, r, row, yPos);
        colEl.appendChild(tileEl);
      }

      const botPeekEl = createTileElement({ id: peek.bottom, isGold: false }, r, rows, baseY + rows * ROW_STEP_Y);
      botPeekEl.style.pointerEvents = 'none';
      colEl.appendChild(botPeekEl);

      container.appendChild(colEl);
    }
  }

  function createTileElement(cell, reelIdx, rowIdx, topPx, blurred = false) {
    const div = document.createElement('div');
    div.className = `symbol-cell sym-${cell.id}` + (cell.isGold ? ' is-gold' : '');
    div.dataset.reel = reelIdx;
    div.dataset.row = rowIdx;
    div.style.top = `${topPx}px`;
    div.style.zIndex = String(10 + rowIdx);

    const img = document.createElement('img');
    img.className = 'tile-img';
    img.src = getSymbolImage(cell, blurred);
    img.alt = cell.id;
    div.appendChild(img);

    if (rowIdx >= 0 && rowIdx < REEL_ROWS[reelIdx]) {
      div.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!state.isSpinning) {
          showSymbolCallout(cell, reelIdx, topPx);
        }
      });
    }

    return div;
  }

  // =========================================================================
  // 7. MINI SYMBOL PAYTABLE CALLOUT POPUP
  // =========================================================================
  function showSymbolCallout(cell, reelIdx, topPx) {
    sfx.playClick();
    const callout = document.getElementById('symbol-callout');
    const imgEl = document.getElementById('callout-img');
    const txtEl = document.getElementById('callout-text');
    const def = SYMBOLS[cell.id];
    if (!def) return;

    imgEl.src = getSymbolImage(cell, false);
    const bet = getBet();
    if (def.pays) {
      txtEl.textContent =
        `5 - ${formatMoney(def.pays[5] * bet)}\n` +
        `4 - ${formatMoney(def.pays[4] * bet)}\n` +
        `3 - ${formatMoney(def.pays[3] * bet)}`;
    } else if (def.isBlackScatter) {
      txtEl.textContent = `1x Black: ${formatMoney(50 * bet)}\n2x Black: ${formatMoney(500 * bet)}\n4x Black: ${formatMoney(100000 * bet)}`;
    } else if (def.isScatter) {
      txtEl.textContent = `SCATTER\n3+ triggers\n10 FREE SPINS`;
    } else if (def.isWild) {
      txtEl.textContent = `WILD\nSubstitutes for\nall paying symbols`;
    }

    const colLeft = [3, 126, 249, 372, 495][reelIdx];
    const popupLeft = reelIdx <= 2 ? Math.min(colLeft + 15, 330) : Math.max(colLeft - 155, 10);
    const popupTop = Math.max(20, Math.min(topPx, 610));

    callout.style.left = `${popupLeft}px`;
    callout.style.top = `${popupTop}px`;
    callout.classList.remove('hidden');
  }

  function hideSymbolCallout() {
    document.getElementById('symbol-callout').classList.add('hidden');
  }

  // =========================================================================
  // 8. TOP MULTIPLIER BAR UPDATER
  // =========================================================================
  function updateMultiplierBar() {
    const slots = document.querySelectorAll('#multiplier-bar .mult-slot');
    const fsGlow = document.getElementById('fs-mult-glow');
    const activeIdx = Math.min(state.tumbleIndex, 3);

    const offSprites = state.inFreeSpins
      ? [
          'assets/sprites/multiplier_Displayer_Material/s_x2.png',
          'assets/sprites/multiplier_Displayer_Material/s_x4.png',
          'assets/sprites/multiplier_Displayer_Material/s_x6.png',
          'assets/sprites/multiplier_Displayer_Material/s_x10.png'
        ]
      : [
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x1.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x2.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x3.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x5.png'
        ];

    const onSprites = state.inFreeSpins
      ? [
          'assets/sprites/multiplier_Displayer_Material/s_x2_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_x4_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_x6_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_x10_gold.png'
        ]
      : [
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x1_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x2_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x3_gold.png',
          'assets/sprites/multiplier_Displayer_Material/s_basegame_x5_gold.png'
        ];

    if (state.inFreeSpins) {
      fsGlow.classList.remove('hidden');
    } else {
      fsGlow.classList.add('hidden');
    }

    slots.forEach((slot, i) => {
      const offImg = slot.querySelector('.mult-img-off');
      const onImg = slot.querySelector('.mult-img-on');
      offImg.src = offSprites[i];
      onImg.src = onSprites[i];

      if (i === activeIdx) {
        onImg.classList.add('active');
        offImg.classList.remove('active');
      } else {
        offImg.classList.add('active');
        onImg.classList.remove('active');
      }
    });
  }

  function getCurrentMultiplier() {
    const list = state.inFreeSpins ? FS_MULTIPLIERS : BASE_MULTIPLIERS;
    return list[Math.min(state.tumbleIndex, list.length - 1)];
  }

  // =========================================================================
  // 9. RANDOM CELL GENERATOR & FORCED FEATURE SCENARIOS
  // =========================================================================
  function randomSymbolCell(reelIdx, allowScatters = true) {
    const forceGoldOnReel3 = state.inFreeSpins && reelIdx === 2;

    if (allowScatters && !forceGoldOnReel3) {
      const r = Math.random();
      if (!state.inFreeSpins && reelIdx >= 1 && reelIdx <= 3 && r < 0.018) {
        return { id: 'S12', isGold: false };
      }
      if (r < 0.048) {
        return { id: 'S01', isGold: false };
      }
    }

    const weights = [7, 8, 9, 11, 13, 14, 15, 16, 17];
    const totalW = weights.reduce((a, b) => a + b, 0);
    let pick = Math.random() * totalW;
    let chosenId = 'S11';
    for (let i = 0; i < PAYING_IDS.length; i++) {
      pick -= weights[i];
      if (pick <= 0) {
        chosenId = PAYING_IDS[i];
        break;
      }
    }

    let isGold = false;
    if (forceGoldOnReel3) {
      isGold = true;
    } else if (reelIdx >= 1 && reelIdx <= 3) {
      isGold = Math.random() < 0.24;
    }

    return { id: chosenId, isGold };
  }

  function generateSpinGrid() {
    const grid = [];
    for (let r = 0; r < 5; r++) {
      const col = [];
      for (let row = 0; row < REEL_ROWS[r]; row++) {
        col.push(randomSymbolCell(r, true));
      }
      grid.push(col);
    }

    const forced = state.forcedFeature;
    if (forced) {
      state.forcedFeature = null;
      document.querySelectorAll('.demo-chip').forEach(b => b.classList.remove('armed'));

      if (forced === 'tumble') {
        grid[0][1] = { id: 'S03', isGold: false };
        grid[0][2] = { id: 'S06', isGold: false };
        grid[1][1] = { id: 'S03', isGold: true };
        grid[1][3] = { id: 'S06', isGold: false };
        grid[2][2] = { id: 'S03', isGold: true };
        grid[3][1] = { id: 'S03', isGold: false };
        grid[3][3] = { id: 'S06', isGold: false };
      } else if (forced === 'freespins') {
        grid[0][1] = { id: 'S01', isGold: false };
        grid[2][2] = { id: 'S01', isGold: false };
        grid[4][1] = { id: 'S01', isGold: false };
      } else if (forced === 'black1') {
        grid[0][1] = { id: 'S01', isGold: false };
        grid[2][2] = { id: 'S12', isGold: false };
        grid[4][2] = { id: 'S01', isGold: false };
      } else if (forced === 'black4') {
        grid[1][1] = { id: 'S12', isGold: false };
        grid[2][1] = { id: 'S12', isGold: false };
        grid[2][3] = { id: 'S12', isGold: false };
        grid[3][2] = { id: 'S12', isGold: false };
      }
    } else if (Math.random() < 0.38) {
      const sym = PAYING_IDS[Math.floor(Math.random() * PAYING_IDS.length)];
      grid[0][Math.floor(Math.random() * 4)] = { id: sym, isGold: false };
      grid[1][Math.floor(Math.random() * 5)] = { id: sym, isGold: Math.random() < 0.55 };
      grid[2][Math.floor(Math.random() * 5)] = { id: sym, isGold: state.inFreeSpins || Math.random() < 0.55 };
      if (Math.random() < 0.5) {
        grid[3][Math.floor(Math.random() * 5)] = { id: sym, isGold: Math.random() < 0.4 };
      }
    }

    return grid;
  }

  // =========================================================================
  // 10. 2,000 WAYS WIN EVALUATOR
  // =========================================================================
  function evaluateWaysWins(grid) {
    const bet = getBet();
    const mult = getCurrentMultiplier();
    const winningPositions = new Set();
    const winDetails = [];
    let totalWin = 0;

    for (const symId of PAYING_IDS) {
      const reelMatches = [];
      for (let r = 0; r < 5; r++) {
        const matchingRows = [];
        for (let row = 0; row < REEL_ROWS[r]; row++) {
          const cell = grid[r][row];
          if (cell.id === symId || cell.id === 'S02') {
            matchingRows.push(row);
          }
        }
        if (matchingRows.length > 0) {
          reelMatches.push(matchingRows);
        } else {
          break;
        }
      }

      const length = reelMatches.length;
      if (length >= 3) {
        const waysCount = reelMatches.reduce((acc, rows) => acc * rows.length, 1);
        const basePayRatio = SYMBOLS[symId].pays[length] || 0;
        const winAmount = basePayRatio * bet * waysCount * mult;

        if (winAmount > 0) {
          totalWin += winAmount;
          winDetails.push({
            symId,
            length,
            waysCount,
            winAmount
          });
          for (let r = 0; r < length; r++) {
            for (const row of reelMatches[r]) {
              winningPositions.add(`${r},${row}`);
            }
          }
        }
      }
    }

    return {
      totalWin,
      winDetails,
      winningPositions
    };
  }

  function evaluateScatters(grid) {
    let goldScatters = 0;
    let blackScatters = 0;
    const positions = [];

    for (let r = 0; r < 5; r++) {
      for (let row = 0; row < REEL_ROWS[r]; row++) {
        const cell = grid[r][row];
        if (cell.id === 'S01') {
          goldScatters++;
          positions.push({ r, row, id: 'S01' });
        } else if (cell.id === 'S12') {
          blackScatters++;
          positions.push({ r, row, id: 'S12' });
        }
      }
    }

    const totalScatters = goldScatters + blackScatters;
    let blackScatterMult = 0;
    if (totalScatters >= 3 && blackScatters >= 1) {
      if (blackScatters >= 4 && totalScatters >= 4) blackScatterMult = 100000;
      else if (blackScatters === 3) blackScatterMult = 5000;
      else if (blackScatters === 2) blackScatterMult = 500;
      else if (blackScatters === 1) blackScatterMult = 50;
    }

    const freeSpinsAwarded = totalScatters >= 3 ? 10 + (totalScatters - 3) * 2 : 0;

    return {
      totalScatters,
      goldScatters,
      blackScatters,
      blackScatterMult,
      blackScatterWin: blackScatterMult * getBet(),
      freeSpinsAwarded,
      positions
    };
  }

  // =========================================================================
  // 11. SPIN & TUMBLE CASCADE CONTROLLER
  // =========================================================================
  const sleep = (ms) => new Promise(res => setTimeout(res, ms));

  async function executeSpin(isFreeSpinTurn = false) {
    if (state.isSpinning) {
      state.stopRequested = true;
      return;
    }

    hideSymbolCallout();
    const bet = getBet();

    if (!isFreeSpinTurn) {
      if (state.credit < bet) {
        setBannerIdleMessage('INSUFFICIENT CREDIT — REDUCE BET');
        return;
      }
      state.credit -= bet;
      state.currentSpinWin = 0;
    }

    state.isSpinning = true;
    state.stopRequested = false;
    state.tumbleIndex = 0;
    updateMultiplierBar();
    updateHudDisplay();
    setSpinButtonState(true);

    if (!isFreeSpinTurn) {
      showBannerIdle(state.turboMode ? 'TURBO SPIN' : 'GOOD LUCK!');
    }

    sfx.playSpinStart();

    const nextGrid = generateSpinGrid();
    const nextPeeks = Array.from({ length: 5 }, () => ({
      top: PAYING_IDS[Math.floor(Math.random() * PAYING_IDS.length)],
      bottom: PAYING_IDS[Math.floor(Math.random() * PAYING_IDS.length)]
    }));

    await animateReelsSpinTo(nextGrid, nextPeeks);

    state.grid = nextGrid;
    state.peeks = nextPeeks;
    renderFullGrid();

    await runTumbleLoop();

    const scatterRes = evaluateScatters(state.grid);
    if (scatterRes.blackScatterWin > 0) {
      state.currentSpinWin += scatterRes.blackScatterWin;
      if (state.inFreeSpins) state.freeSpinsTotalWin += scatterRes.blackScatterWin;
      updateBannerWin(state.currentSpinWin, `${scatterRes.blackScatters}x BLACK SCATTER PAYS ${scatterRes.blackScatterMult.toLocaleString()}X!`);
      await highlightScatterTiles(scatterRes.positions);
      await showCelebrationOverlay({
        type: 'black_scatter',
        blackCount: scatterRes.blackScatters,
        amount: scatterRes.blackScatterWin,
        mult: scatterRes.blackScatterMult
      });
    }

    if (scatterRes.freeSpinsAwarded > 0) {
      await highlightScatterTiles(scatterRes.positions);
      if (!state.inFreeSpins) {
        await showCelebrationOverlay({
          type: 'fs_intro',
          spins: scatterRes.freeSpinsAwarded
        });
        enterFreeSpinsMode(scatterRes.freeSpinsAwarded);
      } else {
        state.freeSpinsLeft += scatterRes.freeSpinsAwarded;
        document.getElementById('fs-remaining-count').textContent = state.freeSpinsLeft;
        await showCelebrationOverlay({
          type: 'fs_retrigger',
          spins: scatterRes.freeSpinsAwarded
        });
      }
    }

    if (!state.inFreeSpins) {
      if (state.currentSpinWin > 0) {
        state.credit += state.currentSpinWin;
        updateHudDisplay();
        if (state.currentSpinWin >= bet * 15 && scatterRes.blackScatterWin === 0) {
          await showCelebrationOverlay({
            type: 'big_win',
            amount: state.currentSpinWin
          });
        }
      } else {
        showBannerIdle('HOLD SPACE FOR TURBO SPIN');
      }
    }

    state.isSpinning = false;
    setSpinButtonState(false);
    updateHudDisplay();

    if (state.inFreeSpins) {
      if (state.freeSpinsLeft > 0) {
        state.freeSpinsLeft--;
        document.getElementById('fs-remaining-count').textContent = state.freeSpinsLeft;
        await sleep(state.turboMode ? 260 : 650);
        await executeSpin(true);
      } else {
        await finishFreeSpinsMode();
      }
    } else if (state.autoplayRemaining > 0) {
      state.autoplayRemaining--;
      updateAutoplayPill();
      if (state.autoplayRemaining > 0) {
        await sleep(state.turboMode ? 220 : 550);
        await executeSpin(false);
      } else {
        updateAutoplayPill();
      }
    }
  }

  async function animateReelsSpinTo(targetGrid, targetPeeks) {
    const reelCols = document.querySelectorAll('#reels-container .reel-col');
    const baseSpinMs = state.turboMode ? 170 : 380;
    const staggerMs = state.turboMode ? 45 : 110;

    const timers = [];
    reelCols.forEach((colEl, r) => {
      const cells = colEl.querySelectorAll('.symbol-cell');
      const timer = setInterval(() => {
        cells.forEach(c => {
          const randCell = randomSymbolCell(r, true);
          const img = c.querySelector('img.tile-img');
          if (img) img.src = getSymbolImage(randCell, true);
        });
      }, 50);
      timers.push(timer);
    });

    let scatterCountSoFar = 0;
    for (let r = 0; r < 5; r++) {
      const waitTime = state.stopRequested ? 35 : (r === 0 ? baseSpinMs : staggerMs);
      await sleep(waitTime);

      if (scatterCountSoFar >= 2 && r >= 2 && !state.stopRequested && !state.turboMode) {
        const antOverlay = document.getElementById('anticipation-overlay');
        antOverlay.style.left = `${[3, 126, 249, 372, 495][r] - 13}px`;
        antOverlay.classList.remove('hidden');
        sfx.playScatterHit(scatterCountSoFar);
        await sleep(620);
        antOverlay.classList.add('hidden');
      }

      clearInterval(timers[r]);
      sfx.playReelStop(r);

      const colEl = reelCols[r];
      colEl.innerHTML = '';
      const baseY = REEL_BASE_Y[r];
      const rows = REEL_ROWS[r];
      const peek = targetPeeks[r];

      const topPeekEl = createTileElement({ id: peek.top, isGold: false }, r, -1, baseY - ROW_STEP_Y);
      topPeekEl.style.pointerEvents = 'none';
      colEl.appendChild(topPeekEl);

      for (let row = 0; row < rows; row++) {
        const cell = targetGrid[r][row];
        if (cell.id === 'S01' || cell.id === 'S12') scatterCountSoFar++;
        const yPos = baseY + row * ROW_STEP_Y;
        const tileEl = createTileElement(cell, r, row, yPos);
        tileEl.style.transform = 'translateY(-18px)';
        colEl.appendChild(tileEl);
        requestAnimationFrame(() => {
          tileEl.style.transform = 'translateY(0px)';
        });
      }

      const botPeekEl = createTileElement({ id: peek.bottom, isGold: false }, r, rows, baseY + rows * ROW_STEP_Y);
      botPeekEl.style.pointerEvents = 'none';
      colEl.appendChild(botPeekEl);
    }

    await sleep(state.turboMode ? 90 : 180);
  }

  async function runTumbleLoop() {
    while (true) {
      const evalRes = evaluateWaysWins(state.grid);
      if (evalRes.totalWin <= 0) break;

      const stepWin = evalRes.totalWin;
      state.currentSpinWin += stepWin;
      if (state.inFreeSpins) {
        state.freeSpinsTotalWin += stepWin;
      }

      sfx.playWinChord(state.tumbleIndex);

      const detailStr = evalRes.winDetails
        .map(d => `${d.waysCount}x ${SYMBOLS[d.symId].name.split(' ')[0]} (${formatMoney(d.winAmount)})`)
        .join(' • ');
      updateBannerWin(
        state.inFreeSpins ? state.freeSpinsTotalWin : state.currentSpinWin,
        `${getCurrentMultiplier()}X MULTIPLIER • ${detailStr}`
      );

      const allTiles = document.querySelectorAll('#reels-container .symbol-cell');
      allTiles.forEach(el => {
        const r = Number(el.dataset.reel);
        const row = Number(el.dataset.row);
        if (row < 0 || row >= REEL_ROWS[r]) return;
        if (evalRes.winningPositions.has(`${r},${row}`)) {
          el.classList.add('winning');
        } else {
          el.classList.add('dimmed');
        }
      });

      spawnFloatingWinText(formatMoney(stepWin));

      await sleep(state.turboMode ? 360 : 720);

      const toRemove = new Set();
      const goldTransformed = [];

      evalRes.winningPositions.forEach(key => {
        const [rStr, rowStr] = key.split(',');
        const r = Number(rStr);
        const row = Number(rowStr);
        const cell = state.grid[r][row];
        if (cell.isGold && cell.id !== 'S02') {
          cell.id = 'S02';
          cell.isGold = false;
          goldTransformed.push({ r, row });
        } else {
          toRemove.add(key);
        }
      });

      if (goldTransformed.length > 0) {
        sfx.playGoldTransform();
      }

      allTiles.forEach(el => {
        const r = Number(el.dataset.reel);
        const row = Number(el.dataset.row);
        const key = `${r},${row}`;
        el.classList.remove('winning', 'dimmed');
        if (toRemove.has(key)) {
          el.classList.add('exploding');
        } else if (goldTransformed.some(g => g.r === r && g.row === row)) {
          el.className = 'symbol-cell sym-S02 transforming-wild';
          const img = el.querySelector('img.tile-img');
          if (img) img.src = SYMBOLS.S02.img;
        }
      });

      await sleep(state.turboMode ? 220 : 340);

      for (let r = 0; r < 5; r++) {
        const rows = REEL_ROWS[r];
        const survivors = [];
        for (let row = 0; row < rows; row++) {
          if (!toRemove.has(`${r},${row}`)) {
            survivors.push(state.grid[r][row]);
          }
        }
        const needed = rows - survivors.length;
        const fresh = [];
        for (let k = 0; k < needed; k++) {
          fresh.push(randomSymbolCell(r, true));
        }
        state.grid[r] = [...fresh, ...survivors];
      }

      state.tumbleIndex = Math.min(state.tumbleIndex + 1, 3);
      updateMultiplierBar();

      renderFullGrid();
      sfx.playReelStop(2);
      await sleep(state.turboMode ? 200 : 380);
    }
  }

  function spawnFloatingWinText(text) {
    const vp = document.getElementById('reels-viewport');
    const pop = document.createElement('div');
    pop.className = 'floating-win-pop';
    pop.style.left = '50%';
    pop.style.top = '48%';
    pop.textContent = '+' + text;
    vp.appendChild(pop);
    setTimeout(() => pop.remove(), 960);
  }

  async function highlightScatterTiles(positions) {
    sfx.playScatterHit(positions.length);
    const allTiles = document.querySelectorAll('#reels-container .symbol-cell');
    allTiles.forEach(el => {
      const r = Number(el.dataset.reel);
      const row = Number(el.dataset.row);
      if (positions.some(p => p.r === r && p.row === row)) {
        el.classList.add('winning');
      }
    });
    await sleep(900);
  }

  // =========================================================================
  // 12. FREE SPINS MODE TRANSITIONS
  // =========================================================================
  function enterFreeSpinsMode(initialSpins) {
    state.inFreeSpins = true;
    state.freeSpinsLeft = initialSpins;
    state.freeSpinsTotalWin = 0;
    state.tumbleIndex = 0;

    document.getElementById('game-bg-base').classList.remove('active');
    document.getElementById('game-bg-free').classList.add('active');
    document.getElementById('reel-backdrop-base').classList.remove('active');
    document.getElementById('reel-backdrop-free').classList.add('active');
    document.getElementById('reel-frame-base').classList.remove('active');
    document.getElementById('reel-frame-free').classList.add('active');

    document.getElementById('fs-counter-panel').classList.remove('hidden');
    document.getElementById('buy-fs-btn').classList.add('hidden');
    document.getElementById('fs-remaining-count').textContent = state.freeSpinsLeft;

    updateMultiplierBar();
  }

  async function finishFreeSpinsMode() {
    const totalFSWin = state.freeSpinsTotalWin;
    await showCelebrationOverlay({
      type: 'fs_outro',
      amount: totalFSWin
    });

    state.credit += totalFSWin;
    state.inFreeSpins = false;
    state.freeSpinsLeft = 0;
    state.tumbleIndex = 0;

    document.getElementById('game-bg-free').classList.remove('active');
    document.getElementById('game-bg-base').classList.add('active');
    document.getElementById('reel-backdrop-free').classList.remove('active');
    document.getElementById('reel-backdrop-base').classList.add('active');
    document.getElementById('reel-frame-free').classList.remove('active');
    document.getElementById('reel-frame-base').classList.add('active');

    document.getElementById('fs-counter-panel').classList.add('hidden');
    document.getElementById('buy-fs-btn').classList.remove('hidden');

    updateMultiplierBar();
    updateHudDisplay();
  }

  // =========================================================================
  // 13. CELEBRATION OVERLAY (BIG WIN / BLACK SCATTER / FREE SPINS)
  // =========================================================================
  function showCelebrationOverlay(opts) {
    return new Promise(resolve => {
      const overlay = document.getElementById('celebration-overlay');
      const tierImg = document.getElementById('celeb-tier-img');
      const titleEl = document.getElementById('celeb-title-text');
      const subEl = document.getElementById('celeb-subtitle-text');
      const amtEl = document.getElementById('celeb-amount-text');
      const btn = document.getElementById('celeb-continue-btn');

      sfx.playWinChord(3);

      if (opts.type === 'black_scatter') {
        const blackSprites = {
          1: 'assets/sprites/bigwin_black_portrait_Material/s_black_scatter_x1.png',
          2: 'assets/sprites/bigwin_black_portrait_Material/s_black_scatter_x2.png',
          3: 'assets/sprites/bigwin_black_portrait_Material/s_black_scatter_x3.png',
          4: 'assets/sprites/bigwin_Black_bigwin_Black2/s_black_scatter_x4.png'
        };
        tierImg.src = blackSprites[Math.min(opts.blackCount, 4)] || 'assets/sprites/bigwin_Black_bigwin_Black/s_max_win.png';
        titleEl.textContent = opts.blackCount >= 4 ? 'MAX WIN — 100,000X!' : 'BLACK SCATTER WIN!';
        subEl.textContent = `${opts.blackCount}x BLACK SCATTER (${opts.mult.toLocaleString()}X TOTAL BET)`;
        amtEl.textContent = formatMoney(opts.amount);
        amtEl.classList.remove('hidden');
      } else if (opts.type === 'fs_intro') {
        tierImg.src = 'assets/sprites/banner_Intro_banner_Intro/s_dragon_fullbody.png';
        titleEl.textContent = 'CONGRATULATIONS!';
        subEl.textContent = 'YOU HAVE WON';
        amtEl.textContent = `${opts.spins} FREE SPINS`;
        amtEl.classList.remove('hidden');
      } else if (opts.type === 'fs_retrigger') {
        tierImg.src = 'assets/sprites/S01/s_S01.png';
        titleEl.textContent = 'FREE SPINS RETRIGGERED!';
        subEl.textContent = 'ADDITIONAL FREE SPINS WON';
        amtEl.textContent = `+${opts.spins} FREE SPINS`;
        amtEl.classList.remove('hidden');
      } else if (opts.type === 'fs_outro') {
        tierImg.src = 'assets/sprites/bigwin_bigwin2/s_mega_top.png';
        titleEl.textContent = 'CONGRATULATIONS!';
        subEl.textContent = 'TOTAL WIN IN FREE SPINS';
        amtEl.textContent = formatMoney(opts.amount);
        amtEl.classList.remove('hidden');
      } else {
        const ratio = opts.amount / getBet();
        if (ratio >= 100) tierImg.src = 'assets/sprites/bigwin_bigwin2/s_sens_top.png';
        else if (ratio >= 50) tierImg.src = 'assets/sprites/bigwin_bigwin3/s_superb_top.png';
        else if (ratio >= 30) tierImg.src = 'assets/sprites/bigwin_bigwin2/s_mega_top.png';
        else tierImg.src = 'assets/sprites/bigwin_bigwin/s_nice_top.png';

        titleEl.textContent = 'BIG WIN!';
        subEl.textContent = `${ratio.toFixed(1)}X TOTAL BET`;
        amtEl.textContent = formatMoney(opts.amount);
        amtEl.classList.remove('hidden');
      }

      overlay.classList.remove('hidden');

      let closed = false;
      const close = () => {
        if (closed) return;
        closed = true;
        sfx.playClick();
        overlay.classList.add('hidden');
        btn.removeEventListener('click', close);
        overlay.removeEventListener('click', close);
        resolve();
      };

      btn.addEventListener('click', close);
      overlay.addEventListener('click', close);

      if (state.autoplayRemaining > 0 || state.inFreeSpins) {
        setTimeout(close, 2600);
      }
    });
  }

  // =========================================================================
  // 14. HUD, BANNER & PAYTABLE MODAL RENDERERS
  // =========================================================================
  function updateHudDisplay() {
    const bet = getBet();
    document.getElementById('hud-credit-val').textContent = formatMoney(state.credit);
    document.getElementById('hud-bet-val').textContent = formatMoney(bet);
    document.getElementById('buy-price-label').textContent = formatMoney(bet * 100);
    document.getElementById('buy-dialog-cost').textContent = formatMoney(bet * 100);
    document.getElementById('modal-bet-display').textContent = formatMoney(bet);
  }

  function showBannerIdle(msg) {
    const idleEl = document.getElementById('banner-idle-msg');
    const winBox = document.getElementById('banner-win-box');
    idleEl.textContent = msg;
    idleEl.classList.remove('hidden');
    winBox.classList.add('hidden');
  }

  function setBannerIdleMessage(msg) {
    showBannerIdle(msg);
  }

  function updateBannerWin(totalWin, detailText) {
    const idleEl = document.getElementById('banner-idle-msg');
    const winBox = document.getElementById('banner-win-box');
    const detailEl = document.getElementById('banner-tumble-detail');
    const labelEl = document.getElementById('banner-win-label');
    const amtEl = document.getElementById('banner-win-amount');

    idleEl.classList.add('hidden');
    winBox.classList.remove('hidden');
    detailEl.textContent = detailText || '';
    labelEl.textContent = state.inFreeSpins ? 'TOTAL WIN' : 'WIN';
    amtEl.textContent = formatMoney(totalWin);
  }

  function setSpinButtonState(spinning) {
    const btn = document.getElementById('btn-spin');
    const stopIcon = document.getElementById('spin-stop-icon');
    if (spinning) {
      btn.classList.add('spinning');
      stopIcon.classList.remove('hidden');
    } else {
      btn.classList.remove('spinning');
      stopIcon.classList.add('hidden');
    }
  }

  function updateAutoplayPill() {
    const btn = document.getElementById('btn-autoplay');
    const txt = document.getElementById('autoplay-btn-text');
    if (state.autoplayRemaining > 0) {
      btn.classList.add('active');
      txt.textContent = `STOP (${state.autoplayRemaining})`;
    } else {
      btn.classList.remove('active');
      txt.textContent = 'AUTOPLAY';
    }
  }

  function renderPaytablePage() {
    const body = document.getElementById('pt-body');
    const indicator = document.getElementById('pt-page-indicator');
    const dotsWrap = document.getElementById('pt-dots');
    const bet = getBet();
    const page = state.paytablePage;

    indicator.textContent = `PAGE ${page + 1} / 7`;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const dot = document.createElement('div');
      dot.className = 'pt-dot' + (i === page ? ' active' : '');
      dot.addEventListener('click', () => {
        sfx.playClick();
        state.paytablePage = i;
        renderPaytablePage();
      });
      dotsWrap.appendChild(dot);
    }

    if (page === 0) {
      const cardsHtml = PAYING_IDS.map(id => {
        const s = SYMBOLS[id];
        return `
          <div class="pt-sym-card">
            <img src="${s.img}" alt="${s.name}" />
            <div class="pt-sym-info">
              <div class="pt-sym-name">${s.name}</div>
              <div class="pt-sym-pays">5 - ${formatMoney(s.pays[5] * bet)}\n4 - ${formatMoney(s.pays[4] * bet)}\n3 - ${formatMoney(s.pays[3] * bet)}</div>
            </div>
          </div>
        `;
      }).join('');
      body.innerHTML = `<div class="pt-grid-symbols">${cardsHtml}</div>`;
    } else if (page === 1) {
      body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div class="pt-rule-section">
            <img src="assets/sprites/S02/s_S02.png" alt="WILD" />
            <div class="pt-rule-text">
              <h3>WILD SYMBOL</h3>
              <p>This symbol is WILD and substitutes for all symbols except for SCATTER and BLACK SCATTER.<br/>WILD symbol appears on reels 2, 3 and 4, and is also created when Gold Symbols are part of a winning combination.</p>
            </div>
          </div>
          <div class="pt-rule-section">
            <img src="assets/sprites/S01/s_S01.png" alt="SCATTER" />
            <div class="pt-rule-text">
              <h3>SCATTER SYMBOL</h3>
              <p>This is the SCATTER symbol. It can appear on all reels.<br/>Hit 3 or more SCATTER symbols to trigger the FREE SPINS feature and win 10 free spins plus 2 additional free spins for each SCATTER beyond the third.</p>
            </div>
          </div>
        </div>
      `;
    } else if (page === 2) {
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/S12/s_S12.png" alt="BLACK SCATTER" />
          <div class="pt-rule-text">
            <h3>BLACK SCATTER — WIN UP TO 100,000X</h3>
            <p>The BLACK SCATTER symbol appears on reels 2, 3 and 4 in the base game. Combinations of 3 or more SCATTER and BLACK SCATTER trigger FREE SPINS and pay immediately:</p>
            <p style="margin-top:12px; color:#ffe36e; font-weight:800;">
              • 1 BLACK SCATTER in 3+ Scatters of any kind pays 50x total bet (${formatMoney(50 * bet)})<br/>
              • 2 BLACK SCATTER in 3+ Scatters of any kind pays 500x total bet (${formatMoney(500 * bet)})<br/>
              • 3 BLACK SCATTER in 3+ Scatters of any kind pays 5,000x total bet (${formatMoney(5000 * bet)})<br/>
              • 4 BLACK SCATTER in 4+ Scatters of any kind pays 100,000x total bet (${formatMoney(100000 * bet)})
            </p>
          </div>
        </div>
      `;
    } else if (page === 3) {
      body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div class="pt-rule-section">
            <img src="assets/sprites/S03/s_S03_Gold.png" alt="GOLD SYMBOLS" />
            <div class="pt-rule-text">
              <h3>GOLD SYMBOLS</h3>
              <p>Randomly at any spin, normal paying symbols marked in gold can appear in random positions on reels 2, 3 and 4.<br/>When winning combinations are formed with gold symbols they transform into WILD for the next tumble.</p>
            </div>
          </div>
          <div class="pt-rule-section">
            <img src="assets/sprites/multiplier_Displayer_Material/s_basegame_x5_gold.png" alt="TUMBLE MULTIPLIERS" />
            <div class="pt-rule-text">
              <h3>TUMBLE FEATURE &amp; MULTIPLIERS</h3>
              <p>After every spin, winning combinations are paid and all winning symbols disappear. Remaining symbols fall to the bottom and empty positions are replaced with new symbols from above.<br/>In the base game, consecutive tumbles increase the win multiplier from <strong>x1 → x2 → x3 → x5</strong>.</p>
            </div>
          </div>
        </div>
      `;
    } else if (page === 4) {
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/multiplier_Displayer_Material/s_x10_gold.png" alt="FREE SPINS" />
          <div class="pt-rule-text">
            <h3>FREE SPINS RULES</h3>
            <p>• Hit 3 or more SCATTER symbol combinations of any kind to trigger 10 FREE SPINS (+2 extra per additional Scatter).<br/>
            • During the FREE SPINS round, on reel 3, <strong>all symbols are gold</strong>!<br/>
            • In FREE SPINS, the initial win multiplier starts at <strong>x2</strong> and increases with each tumble: <strong>x2 → x4 → x6 → x10</strong>.<br/>
            • Hit 3 or more SCATTER symbols during the round to retrigger 10+ more free spins.</p>
          </div>
        </div>
      `;
    } else if (page === 5) {
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/WayWins/s_grid_4x5x5x5x4.png" alt="2000 Ways" />
          <div class="pt-rule-text">
            <h3>2,000 WAYS TO WIN (4-5-5-5-4 GRID)</h3>
            <p>Wins are awarded for left-to-right adjacent symbol combinations starting from the leftmost reel.<br/>
            Reel 1 and Reel 5 have 4 rows; Reels 2, 3, and 4 have 5 rows, creating up to <strong>2,000 ways to win</strong> on every spin.</p>
          </div>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/Title/s_Title.png" alt="Mahjong Wins 3" />
          <div class="pt-rule-text">
            <h3>GAME SPECIFICATIONS &amp; CONTROLS</h3>
            <p>• Volatility: Low-Medium Cascading Ways Slot<br/>
            • Minimum Bet: $0.40 • Maximum Bet: $200.00<br/>
            • Maximum Win Cap: 100,000x Total Bet<br/>
            • SPACE and ENTER buttons on the keyboard can be used to start and stop the spin. Holding SPACE activates Turbo Spin.</p>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // 15. EXTRACTED ASSET EXPLORER (Browses all 115 Atlases / 1,806 Sprites)
  // =========================================================================
  async function openAssetExplorer() {
    sfx.playClick();
    const modal = document.getElementById('assets-modal');
    modal.classList.remove('hidden');

    if (!state.manifestData) {
      try {
        const resp = await fetch('assets/manifest.json');
        state.manifestData = await resp.json();
        populateAssetExplorerFilter();
      } catch (e) {
        console.error('Failed to load manifest.json:', e);
        return;
      }
    }
    renderAssetExplorerGrid();
  }

  function populateAssetExplorerFilter() {
    const select = document.getElementById('asset-atlas-filter');
    const summaryEl = document.getElementById('assets-summary-text');
    const s = state.manifestData.summary;
    summaryEl.textContent = `${s.atlasCount} Texture Atlases • ${s.totalSprites.toLocaleString()} Cropped Sprites • ${s.fonts} Fonts • ${s.spineSkeletons} Spine Skeletons`;

    select.innerHTML = '<option value="ALL">All 115 Atlases (1,806 Sprites)</option>';
    Object.keys(state.manifestData.atlases).forEach(atlasKey => {
      const a = state.manifestData.atlases[atlasKey];
      const opt = document.createElement('option');
      opt.value = atlasKey;
      opt.textContent = `${atlasKey} (${a.spriteCount} sprites)`;
      select.appendChild(opt);
    });
  }

  function renderAssetExplorerGrid() {
    if (!state.manifestData) return;
    const gridEl = document.getElementById('assets-grid');
    const query = document.getElementById('asset-search-input').value.trim().toLowerCase();
    const atlasFilter = document.getElementById('asset-atlas-filter').value;

    const items = [];
    for (const [atlasKey, ainfo] of Object.entries(state.manifestData.atlases)) {
      if (atlasFilter !== 'ALL' && atlasFilter !== atlasKey) continue;
      for (const [sname, smeta] of Object.entries(ainfo.sprites)) {
        if (query && !sname.toLowerCase().includes(query) && !atlasKey.toLowerCase().includes(query)) {
          continue;
        }
        items.push({ atlasKey, sname, smeta });
        if (items.length >= 240) break;
      }
      if (items.length >= 240) break;
    }

    gridEl.innerHTML = items.map(({ atlasKey, sname, smeta }) => `
      <div class="asset-card">
        <div class="asset-thumb-box">
          <img src="${smeta.path}" alt="${sname}" loading="lazy" />
        </div>
        <div class="asset-name">${sname}</div>
        <div class="asset-dim">${atlasKey} • ${smeta.width}×${smeta.height}</div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 16. EVENT LISTENERS & INITIALIZATION
  // =========================================================================
  function bindEvents() {
    document.getElementById('intro-skip-toggle').addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playClick();
      document.getElementById('intro-cb-check').classList.toggle('hidden');
    });

    document.getElementById('intro-play-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('intro-screen').classList.remove('active');
      document.getElementById('game-screen').classList.add('active');
    });

    document.getElementById('stage').addEventListener('click', () => {
      hideSymbolCallout();
    });

    const spinBtn = document.getElementById('btn-spin');
    const spinBg = document.getElementById('spin-btn-bg');
    spinBtn.addEventListener('mouseenter', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_hover.png';
    });
    spinBtn.addEventListener('mouseleave', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_normal.png';
    });
    spinBtn.addEventListener('mousedown', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_pressed.png';
    });
    spinBtn.addEventListener('mouseup', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_hover.png';
    });
    spinBtn.addEventListener('click', () => {
      executeSpin(false);
    });

    const adjustBet = (delta) => {
      if (state.isSpinning || state.inFreeSpins) return;
      sfx.playClick();
      state.betIndex = Math.max(0, Math.min(BET_LEVELS.length - 1, state.betIndex + delta));
      updateHudDisplay();
    };
    document.getElementById('btn-bet-minus').addEventListener('click', () => adjustBet(-1));
    document.getElementById('btn-bet-plus').addEventListener('click', () => adjustBet(1));
    document.getElementById('modal-bet-minus').addEventListener('click', () => adjustBet(-1));
    document.getElementById('modal-bet-plus').addEventListener('click', () => adjustBet(1));

    document.getElementById('credit-bet-toggle').addEventListener('click', () => {
      sfx.playClick();
      state.displayCoins = !state.displayCoins;
      updateHudDisplay();
    });

    document.getElementById('btn-sound').addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      document.getElementById('sound-icon-img').src = state.soundEnabled
        ? 'assets/sprites/GUI/s_Sound.png'
        : 'assets/sprites/GUI/s_SoundMute.png';
      document.getElementById('toggle-audio').checked = state.soundEnabled;
      if (state.soundEnabled) sfx.playClick();
    });

    document.getElementById('btn-info').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = 0;
      renderPaytablePage();
      document.getElementById('paytable-modal').classList.remove('hidden');
    });
    document.getElementById('pt-prev-btn').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = (state.paytablePage + 6) % 7;
      renderPaytablePage();
    });
    document.getElementById('pt-next-btn').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = (state.paytablePage + 1) % 7;
      renderPaytablePage();
    });
    document.getElementById('pt-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('paytable-modal').classList.add('hidden');
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('settings-modal').classList.remove('hidden');
    });
    document.getElementById('settings-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('settings-modal').classList.add('hidden');
    });
    document.getElementById('toggle-turbo').addEventListener('change', (e) => {
      state.turboMode = e.target.checked;
    });
    document.getElementById('toggle-audio').addEventListener('change', (e) => {
      state.soundEnabled = e.target.checked;
      document.getElementById('sound-icon-img').src = state.soundEnabled
        ? 'assets/sprites/GUI/s_Sound.png'
        : 'assets/sprites/GUI/s_SoundMute.png';
    });

    document.getElementById('btn-autoplay').addEventListener('click', () => {
      sfx.playClick();
      if (state.autoplayRemaining > 0) {
        state.autoplayRemaining = 0;
        updateAutoplayPill();
      } else {
        document.getElementById('settings-modal').classList.remove('hidden');
      }
    });
    document.querySelectorAll('.auto-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        state.autoplayRemaining = Number(btn.dataset.spins);
        updateAutoplayPill();
        document.getElementById('settings-modal').classList.add('hidden');
        if (!state.isSpinning) executeSpin(false);
      });
    });

    document.getElementById('buy-fs-btn').addEventListener('click', () => {
      if (state.isSpinning || state.inFreeSpins) return;
      sfx.playClick();
      updateHudDisplay();
      document.getElementById('buy-modal').classList.remove('hidden');
    });
    document.getElementById('buy-confirm-no').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('buy-modal').classList.add('hidden');
    });
    document.getElementById('buy-confirm-yes').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('buy-modal').classList.add('hidden');
      const cost = getBet() * 100;
      if (state.credit < cost) {
        setBannerIdleMessage('INSUFFICIENT CREDIT FOR BUY FEATURE');
        return;
      }
      state.credit -= cost - getBet();
      state.forcedFeature = 'freespins';
      executeSpin(false);
    });

    document.querySelectorAll('.demo-chip[data-force]').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const type = btn.dataset.force;
        document.querySelectorAll('.demo-chip[data-force]').forEach(b => b.classList.remove('armed'));
        btn.classList.add('armed');
        state.forcedFeature = type;
        if (!state.isSpinning) {
          executeSpin(false);
        }
      });
    });

    document.getElementById('open-assets-btn').addEventListener('click', openAssetExplorer);
    document.getElementById('assets-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('assets-modal').classList.add('hidden');
    });
    document.getElementById('asset-search-input').addEventListener('input', renderAssetExplorerGrid);
    document.getElementById('asset-atlas-filter').addEventListener('change', renderAssetExplorerGrid);

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'SELECT') return;
        e.preventDefault();

        const introScreen = document.getElementById('intro-screen');
        if (introScreen.classList.contains('active')) {
          document.getElementById('intro-play-btn').click();
          return;
        }

        if (e.repeat && e.code === 'Space') {
          state.turboMode = true;
          document.getElementById('toggle-turbo').checked = true;
        }
        executeSpin(false);
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        state.turboMode = document.getElementById('toggle-turbo').checked;
      }
    });
  }

  function runLoadingSequence() {
    const fill = document.getElementById('loading-bar-fill');
    let progress = 18;
    const interval = setInterval(() => {
      progress += Math.random() * 24 + 12;
      if (progress >= 100) {
        progress = 100;
        fill.style.width = '100%';
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById('loading-screen').classList.remove('active');
          document.getElementById('intro-screen').classList.add('active');
        }, 280);
      } else {
        fill.style.width = `${progress}%`;
      }
    }, 130);
  }

  function init() {
    updateStageScale();
    initAmbientLayers();
    state.grid = cloneGrid(INITIAL_SCREEN_STATE);
    state.peeks = INITIAL_PEEKS.map(p => ({ ...p }));
    renderFullGrid();
    updateMultiplierBar();
    updateHudDisplay();
    bindEvents();
    runLoadingSequence();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
