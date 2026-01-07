export const nodes = [
  /* =========================
     EXAM
  ========================== */
  {
    id: 'EXAM_SSC_CGL',
    title: 'SSC CGL',
    type: 'exam',
    parentId: null,
    image: '/images/logo/ssc.png',
  },

  /* =========================
     SECTIONS
  ========================== */
  {
    id: 'SEC_MATH',
    title: 'Mathematics',
    type: 'section',
    parentId: 'EXAM_SSC_CGL',
    image: '/images/sections/maths.png',
  },
  {
    id: 'SEC_REASON',
    title: 'Reasoning',
    type: 'section',
    parentId: 'EXAM_SSC_CGL',
    image: '/images/sections/reasoning.png',
  },
  {
    id: 'SEC_GK',
    title: 'General Knowledge',
    type: 'section',
    parentId: 'EXAM_SSC_CGL',
    image: '/images/sections/gk.png',
  },
  {
    id: 'SEC_ENG',
    title: 'English',
    type: 'section',
    parentId: 'EXAM_SSC_CGL',
    image: '/images/sections/english.png',
  },

  /* =========================
     MATHEMATICS (Chapters only)
  ========================== */
  /* =========================
   MATHEMATICS (Chapters only)
========================== */

  {
    id: 'CH_MATH_NUMSYS',
    title: 'Number System',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/number-system.png',
  },
  {
    id: 'CH_MATH_FRAC',
    title: 'Fractions and Decimals',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/fractions-decimals.png',
  },
  {
    id: 'CH_MATH_PERCENT',
    title: 'Percentage',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/percentage.png',
  },
  {
    id: 'CH_MATH_RATIO',
    title: 'Ratio and Proportion',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/ratio-proportion.png',
  },
  {
    id: 'CH_MATH_AVG',
    title: 'Average',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/average.png',
  },
  {
    id: 'CH_MATH_PL',
    title: 'Profit and Loss',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/profit-loss.png',
  },
  {
    id: 'CH_MATH_SI',
    title: 'Simple Interest',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/simple-interest.png',
  },
  {
    id: 'CH_MATH_TW',
    title: 'Time and Work',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/time-work.png',
  },
  {
    id: 'CH_MATH_TD',
    title: 'Time and Distance',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/time-distance.png',
  },
  {
    id: 'CH_MATH_APPROX',
    title: 'Approximation',
    type: 'chapter',
    parentId: 'SEC_MATH',
    image: '/images/chapters/maths/approximation.png',
  },

  /* =========================
     REASONING (Chapters only)
  ========================== */
  {
    id: 'CH_REASON_CODE',
    title: 'Coding and Decoding',
    type: 'chapter',
    parentId: 'SEC_REASON',
    maxQuestions:12,
    image: 'https://fileserver.teachstarter.com/thumbnails/31660-8-bit-decoding-puzzle-gb-thumbnail-0-600x400.png',
  },
  {
    id: 'CH_REASON_ANALOGY',
    title: 'Analogy',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://cdn.vectorstock.com/i/500p/42/77/winter-mitten-match-puzzle-vector-60194277.jpg',
  },
  {
    id: 'CH_REASON_BLOOD',
    title: 'Blood Relations',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://www.grammarbank.com/images/xfamily-tree-unmarried.png.pagespeed.ic.9whBUa_iMr.png',
  },
  {
    id: 'CH_REASON_ORDER',
    title: 'Order and Ranking',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://thumb.ac-illust.com/99/99bcf4661661a7c74714e8d5b2eb3eda_t.jpeg',
  },
  {
    id: 'CH_REASON_DIR',
    title: 'Distance and Direction',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://cbx-prod.b-cdn.net/COLOURBOX24880252.jpg?height=800&quality=70&width=800',
  },
  {
    id: 'CH_REASON_DICT',
    title: 'Dictionary Words',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image:
      'https://png.pngtree.com/png-clipart/20230922/original/pngtree-neumorphic-dictionary-logo-with-book-badge-in-ui-icon-vector-png-image_12649585.png',
  },
  {
    id: 'CH_REASON_MISSING',
    title: 'Missing Number',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://dsvo5gka2lbbo.cloudfront.net/uploads/2023/07/missing-number-pattern.jpg',
  },
  {
    id: 'CH_REASON_NUMSER',
    title: 'Number Series',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://cbx-prod.b-cdn.net/COLOURBOX64428899.jpg?height=800&quality=70&width=800',
  },
  {
    id: 'CH_REASON_LETSER',
    title: 'Letter Series',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://cbx-prod.b-cdn.net/COLOURBOX13614016.jpg?height=800&quality=70&width=800',
  },
  {
    id: 'CH_REASON_ALNUM',
    title: 'Alphanumeric Series',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://m.media-amazon.com/images/I/71MkRM-ym8L.jpg',
  },
  {
    id: 'CH_REASON_FIGSER',
    title: 'Figure Series',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://miro.medium.com/1%2AccoL1vou-WDQKUgBtsLCig.png',
  },
  {
    id: 'CH_REASON_MIRROR',
    title: 'Mirror Image',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://i.pinimg.com/736x/c9/23/80/c923807460bd5202119ae25b9119b2b6.jpg',
  },
  {
    id: 'CH_REASON_WATER',
    title: 'Water Image',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image: 'https://www.pictorem.com/uploads/collection/O/OA8RCH8DHG/900_1976246HighRes.jpg',
  },
  {
    id: 'CH_REASON_PAPER',
    title: 'Paper Folding',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image:
      'https://www.researchgate.net/profile/E-Schellenberg/publication/230753378/figure/fig1/AS%3A393562219925527%401470843953605/The-paper-folding-and-cutting-PF-C-task-Folding-indicated-by-arrows-and-cutting_Q320.jpg',
  },


  {
  id: 'CH_REASON_AGE',
  title: 'Age Based Problems',
  type: 'chapter',
  parentId: 'SEC_REASON',
  image: 'https://cdn-icons-png.flaticon.com/512/3208/3208723.png',
},

{
  id: 'CH_REASON_ALPHABET',
  title: 'Alphabet & Dictionary Order',
  type: 'chapter',
  parentId: 'SEC_REASON',
  image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
},
{
  id: 'CH_REASON_LOGIC_ARITH',
  title: 'General Logical Problems',
  type: 'chapter',
  parentId: 'SEC_REASON',
  image: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
},

  {
    id: 'CH_REASON_NONVERB',
    title: 'Non-Verbal Reasoning',
    type: 'chapter',
    parentId: 'SEC_REASON',
    image:
      'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-025-86804-3/MediaObjects/41598_2025_86804_Fig1_HTML.png',
  },

  /* =========================
   GENERAL KNOWLEDGE (Modules)
========================== */

  {
    id: 'MOD_GK_SCI',
    title: 'General Science',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/2942/2942789.png',
  },
  {
    id: 'MOD_GK_HIST',
    title: 'History',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
  },
  {
    id: 'MOD_GK_GEO',
    title: 'Geography',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
  },
  {
    id: 'MOD_GK_POL',
    title: 'Polity',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/1975/1975649.png',
  },
  {
    id: 'MOD_GK_ECO',
    title: 'Economy',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
  },
  {
    id: 'MOD_GK_CA',
    title: 'Current Affairs',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
  },
  {
    id: 'MOD_GK_MISC',
    title: 'Miscellaneous',
    type: 'module',
    parentId: 'SEC_GK',
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
  },
  /* =========================
   GK → SCIENCE
========================== */

  /* ---- Chapters ---- */

  {
    id: 'CH_PHY',
    title: 'Physics',
    type: 'chapter',
    parentId: 'MOD_GK_SCI',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046849.png',
  },
  {
    id: 'CH_CHEM',
    title: 'Chemistry',
    type: 'chapter',
    parentId: 'MOD_GK_SCI',
    image: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png',
  },
  {
    id: 'CH_BIO',
    title: 'Biology',
    type: 'chapter',
    parentId: 'MOD_GK_SCI',
    image: 'https://cdn-icons-png.flaticon.com/512/2784/2784459.png',
  },

  /* ---- Physics Topics ---- */

  {
    id: 'TOP_PHY_UNITS',
    title: 'Units and Measurements',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3050/3050525.png',
  },
  {
    id: 'TOP_PHY_MOTION',
    title: 'Motion',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/481/481668.png',
  },
  {
    id: 'TOP_PHY_FORCE',
    title: 'Force and Laws of Motion',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  },
  {
    id: 'TOP_PHY_WPE',
    title: 'Work, Power and Energy',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/1693/1693746.png',
  },
  {
    id: 'TOP_PHY_FRICTION',
    title: 'Friction',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/4149/4149646.png',
  },
  {
    id: 'TOP_PHY_GRAV',
    title: 'Gravitation',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3655/3655573.png',
  },
  {
    id: 'TOP_PHY_PRESS',
    title: 'Pressure',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3079/3079164.png',
  },
  {
    id: 'TOP_PHY_HEAT_TEMP',
    title: 'Heat',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/1684/1684375.png',
  },
  {
    id: 'TOP_PHY_LIGHT',
    title: 'Light',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
  },
  {
    id: 'TOP_PHY_SOUND',
    title: 'Sound',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png',
  },
  {
    id: 'TOP_PHY_ELEC',
    title: 'Electricity',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/482/482529.png',
  },
  {
    id: 'TOP_PHY_MAG',
    title: 'Magnetism',
    type: 'topic',
    parentId: 'CH_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046842.png',
  },




  /* =========================
   GK → SCIENCE → CHEMISTRY
   (SSC CGL / CHSL / MTS)
========================== */

/* 1️⃣ Matter */
{
  id: 'TOP_CHEM_MATTER',
  title: 'Matter',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/3050/3050525.png',
},

/* 2️⃣ Elements, Compounds & Mixtures */
{
  id: 'TOP_CHEM_ECM',
  title: 'Elements, Compounds & Mixtures',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/2942/2942815.png',
},

/* 3️⃣ Acids, Bases & Salts */
{
  id: 'TOP_CHEM_ACID_BASE',
  title: 'Acids, Bases & Salts',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/2942/2942778.png',
},

/* 4️⃣ Metals & Non-Metals */
{
  id: 'TOP_CHEM_METAL',
  title: 'Metals & Non-Metals',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/4245/4245288.png',
},

/* 5️⃣ Chemical Reactions */
{
  id: 'TOP_CHEM_REACTION',
  title: 'Chemical Reactions',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png',
},

/* 6️⃣ Periodic Table */
{
  id: 'TOP_CHEM_PERIODIC',
  title: 'Periodic Table',
  type: 'topic',
  parentId: 'CH_CHEM',
  image: 'https://cdn-icons-png.flaticon.com/512/3176/3176366.png',
},



/* =========================
   GK → SCIENCE → BIOLOGY
   (SSC CGL / CHSL / MTS)
========================== */

/* 1️⃣ Cell */
{
  id: 'TOP_BIO_CELL',
  title: 'Cell',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/4245/4245281.png',
},

/* 2️⃣ Human Body Systems */
{
  id: 'TOP_BIO_DIGESTIVE',
  title: 'Human Body Systems digestive',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
},
{
  id: 'TOP_BIO_RESPIRATORY',
  title: 'Human Body Systems respiratory',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
},

{
  id: 'TOP_BIO_CIRC',
  title: 'Human Body Systems circulatory',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
},


/* 3️⃣ Plant Physiology */
{
  id: 'TOP_BIO_PLANT',
  title: 'Plant Physiology',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/2909/2909764.png',
},

/* 4️⃣ Diseases & Nutrition */
{
  id: 'TOP_BIO_DISEASE_NUTRITION',
  title: 'Diseases & Nutrition',
  type: 'topic',
  parentId: 'CH_BIO',
  image: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
},

  /* =========================
     GK → HISTORY
  ========================== */
  /* =========================
   GK → HISTORY (Icon style)
========================== */

  /* ---- Chapters ---- */

  {
    id: 'CH_HIST_ANCIENT',
    title: 'Ancient Indian History',
    type: 'chapter',
    parentId: 'MOD_GK_HIST',
    image: 'https://cdn-icons-png.flaticon.com/512/3212/3212608.png',
  },
  {
    id: 'CH_HIST_MED',
    title: 'Medieval Indian History',
    type: 'chapter',
    parentId: 'MOD_GK_HIST',
    image: 'https://cdn-icons-png.flaticon.com/512/2942/2942813.png',
  },
  {
    id: 'CH_HIST_MOD',
    title: 'Modern Indian History',
    type: 'chapter',
    parentId: 'MOD_GK_HIST',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
  },

  /* ---- Ancient History Topics ---- */

  {
    id: 'TOP_ANC_PRE',
    title: 'Prehistoric Period',
    type: 'topic',
    parentId: 'CH_HIST_ANCIENT',
    image: 'https://cdn-icons-png.flaticon.com/512/4254/4254545.png',
  },
  {
    id: 'TOP_ANC_IVC',
    title: 'Indus Valley Civilization',
    type: 'topic',
    parentId: 'CH_HIST_ANCIENT',
    image: 'https://cdn-icons-png.flaticon.com/512/3212/3212622.png',
  },
  {
    id: 'TOP_ANC_VED',
    title: 'Vedic Period',
    type: 'topic',
    parentId: 'CH_HIST_ANCIENT',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    id: 'TOP_ANC_MAU',
    title: 'Maurya Empire',
    type: 'topic',
    parentId: 'CH_HIST_ANCIENT',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995507.png',
  },
  {
    id: 'TOP_ANC_GUP',
    title: 'Gupta Empire',
    type: 'topic',
    parentId: 'CH_HIST_ANCIENT',
    image: 'https://cdn-icons-png.flaticon.com/512/3212/3212634.png',
  },

  /* ---- Medieval History Topics ---- */

  {
    id: 'TOP_MED_DEL',
    title: 'Delhi Sultanate',
    type: 'topic',
    parentId: 'CH_HIST_MED',
    image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  },
  {
    id: 'TOP_MED_MUG',
    title: 'Mughal Empire',
    type: 'topic',
    parentId: 'CH_HIST_MED',
    image: 'https://cdn-icons-png.flaticon.com/512/2942/2942817.png',
  },
  {
    id: 'TOP_MED_BHAK',
    title: 'Bhakti Movement',
    type: 'topic',
    parentId: 'CH_HIST_MED',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995562.png',
  },
  {
    id: 'TOP_MED_SUFI',
    title: 'Sufi Movement',
    type: 'topic',
    parentId: 'CH_HIST_MED',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995539.png',
  },

  /* ---- Modern History Topics ---- */

  {
    id: 'TOP_MOD_EUR',
    title: 'Advent of Europeans',
    type: 'topic',
    parentId: 'CH_HIST_MOD',
    image: 'https://cdn-icons-png.flaticon.com/512/3212/3212614.png',
  },
  {
    id: 'TOP_MOD_1857',
    title: 'Revolt of 1857',
    type: 'topic',
    parentId: 'CH_HIST_MOD',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995525.png',
  },
  {
    id: 'TOP_MOD_NAT',
    title: 'Indian National Movement',
    type: 'topic',
    parentId: 'CH_HIST_MOD',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995511.png',
  },
  {
    id: 'TOP_MOD_CONG',
    title: 'Important Congress Sessions',
    type: 'topic',
    parentId: 'CH_HIST_MOD',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
  },
  {
    id: 'TOP_MOD_GG',
    title: 'Governor-Generals and Viceroys',
    type: 'topic',
    parentId: 'CH_HIST_MOD',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995583.png',
  },

  /* =========================
   GK → GEOGRAPHY
========================== */

  /* ---- Chapters ---- */

  {
    id: 'CH_GEO_PHY',
    title: 'Physical Geography',
    type: 'chapter',
    parentId: 'MOD_GK_GEO',
    image: 'https://cdn-icons-png.flaticon.com/512/854/854866.png',
  },
  {
    id: 'CH_GEO_IND',
    title: 'Indian Geography',
    type: 'chapter',
    parentId: 'MOD_GK_GEO',
    image: 'https://cdn-icons-png.flaticon.com/512/197/197419.png',
  },
  {
    id: 'CH_GEO_WORLD',
    title: 'World Geography',
    type: 'chapter',
    parentId: 'MOD_GK_GEO',
    image: 'https://cdn-icons-png.flaticon.com/512/744/744480.png',
  },

  /* ---- Physical Geography Topics ---- */

  {
    id: 'TOP_GEO_EARTH',
    title: 'Earth Structure',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/4148/4148460.png',
  },
  {
    id: 'TOP_GEO_ROCK',
    title: 'Rocks',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135711.png',
  },
  {
    id: 'TOP_GEO_VOL',
    title: 'Volcanoes',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/616/616490.png',
  },
  {
    id: 'TOP_GEO_EQ',
    title: 'Earthquakes',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/2933/2933814.png',
  },
  {
    id: 'TOP_GEO_ATM',
    title: 'Atmosphere',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/728/728093.png',
  },
  {
    id: 'TOP_GEO_WIND',
    title: 'Winds',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/2011/2011448.png',
  },
  {
    id: 'TOP_GEO_CLIM',
    title: 'Climate',
    type: 'topic',
    parentId: 'CH_GEO_PHY',
    image: 'https://cdn-icons-png.flaticon.com/512/2930/2930014.png',
  },

  /* ---- Indian Geography Topics ---- */

  {
    id: 'TOP_IND_PHYS',
    title: 'Physiographic Divisions of India',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/197/197419.png',
  },
  {
    id: 'TOP_IND_RIV',
    title: 'Rivers of India',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/861/861059.png',
  },
  {
    id: 'TOP_IND_CLIM',
    title: 'Climate of India',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/2930/2930014.png',
  },
  {
    id: 'TOP_IND_SOIL',
    title: 'Soils of India',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/3082/3082060.png',
  },
  {
    id: 'TOP_IND_VEG',
    title: 'Natural Vegetation',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909764.png',
  },
  {
    id: 'TOP_IND_AGRI',
    title: 'Agriculture',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/862/862819.png',
  },
  {
    id: 'TOP_IND_MIN',
    title: 'Minerals and Resources',
    type: 'topic',
    parentId: 'CH_GEO_IND',
    image: 'https://cdn-icons-png.flaticon.com/512/4245/4245288.png',
  },

  /* ---- World Geography Topics ---- */

  {
    id: 'TOP_WORLD_CONT',
    title: 'Continents',
    type: 'topic',
    parentId: 'CH_GEO_WORLD',
    image: 'https://cdn-icons-png.flaticon.com/512/744/744480.png',
  },
  {
    id: 'TOP_WORLD_OCE',
    title: 'Oceans',
    type: 'topic',
    parentId: 'CH_GEO_WORLD',
    image: 'https://cdn-icons-png.flaticon.com/512/861/861060.png',
  },
  {
    id: 'TOP_WORLD_DES',
    title: 'Major Deserts',
    type: 'topic',
    parentId: 'CH_GEO_WORLD',
    image: 'https://cdn-icons-png.flaticon.com/512/2847/2847920.png',
  },
  {
    id: 'TOP_WORLD_MTN',
    title: 'Important Mountains',
    type: 'topic',
    parentId: 'CH_GEO_WORLD',
    image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  },
  {
    id: 'TOP_WORLD_RIV',
    title: 'Important Rivers',
    type: 'topic',
    parentId: 'CH_GEO_WORLD',
    image: 'https://cdn-icons-png.flaticon.com/512/861/861059.png',
  },

  /* =========================
   GK → POLITY
========================== */

  {
    id: 'CH_POL_CONST',
    title: 'Indian Constitution',
    type: 'chapter',
    parentId: 'MOD_GK_POL',
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
  },
  {
    id: 'CH_POL_SYS',
    title: 'Indian Political System',
    type: 'chapter',
    parentId: 'MOD_GK_POL',
    image: 'https://cdn-icons-png.flaticon.com/512/1975/1975649.png',
  },

  {
    id: 'TOP_POL_FR',
    title: 'Fundamental Rights',
    type: 'topic',
    parentId: 'CH_POL_CONST',
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991134.png',
  },
  {
    id: 'TOP_POL_DPSP',
    title: 'Directive Principles',
    type: 'topic',
    parentId: 'CH_POL_CONST',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995579.png',
  },
  {
    id: 'TOP_POL_FD',
    title: 'Fundamental Duties',
    type: 'topic',
    parentId: 'CH_POL_CONST',
    image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
  },
  {
    id: 'TOP_POL_PARL',
    title: 'Parliament',
    type: 'topic',
    parentId: 'CH_POL_SYS',
    image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  },
  {
    id: 'TOP_POL_PM',
    title: 'Prime Minister and Council of Ministers',
    type: 'topic',
    parentId: 'CH_POL_SYS',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995511.png',
  },
  {
    id: 'TOP_POL_SC',
    title: 'Supreme Court',
    type: 'topic',
    parentId: 'CH_POL_SYS',
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991155.png',
  },
  /* =========================
     ENGLISH (placeholders)
  ========================== */
  { id: 'CH_ENG_GRAM', title: 'Grammar', type: 'chapter', parentId: 'SEC_ENG' },
  {
    id: 'CH_ENG_VOCAB',
    title: 'Vocabulary',
    type: 'chapter',
    parentId: 'SEC_ENG',
  },
  {
    id: 'CH_ENG_COMP',
    title: 'Comprehension',
    type: 'chapter',
    parentId: 'SEC_ENG',
  },
  {
    id: 'CH_ENG_VERBAL',
    title: 'Verbal Ability',
    type: 'chapter',
    parentId: 'SEC_ENG',
  },
];
