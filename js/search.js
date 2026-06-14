/* ===== AMBAV — PRODUCT SEARCH ===== */

const PRODUCTS = [
  /* ── HEALTH FAUCETS ── */
  {
    id:       'p-hf-jack-chrome-no-hose',
    name:     'ABS Jack Health Faucet',
    subtitle: 'Chrome Finish | Without Shower Tube & Hook',
    category: 'Health Faucets',
    price:    '₹349',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jack', 'abs', 'without hose', 'abs jack health faucet', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-jack-no-hose-set1',
    name:     'ABS Jack Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹300',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jack', 'abs', 'without hose', 'abs jack health faucet', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-jack-braided-shyam',
    name:     'Jack Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹479',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jack', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'jack health faucet'],
  },
  {
    id:       'p-hf-jack-braided-set1',
    name:     'Jack Health Faucet',
    subtitle: 'With Braided 1.0m Hose & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹450',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jack', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'jack health faucet'],
  },
  {
    id:       'p-hf-jack-nozzle-no-hose',
    name:     'Jack Nozzle Health Faucet',
    subtitle: 'Chrome Finish | Without Shower Tube & Hook',
    category: 'Health Faucets',
    price:    '₹270',
    img:      'images/products/hf_jack_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'jack nozzle', 'jack nozzle health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-jack-nozzle-no-hose-set1',
    name:     'Jack Nozzle Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹250',
    img:      'images/products/hf_jack_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'jack nozzle', 'jack nozzle health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-jack-nozzle-braided',
    name:     'Jack Nozzle Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹500',
    img:      'images/products/hf_jack_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'jack nozzle', 'jack nozzle health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-jack-nozzle-braided-set1',
    name:     'Jack Nozzle Health Faucet',
    subtitle: 'With Braided 1.0m Hose & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹500',
    img:      'images/products/hf_jack_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'jack nozzle', 'jack nozzle health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-abs-white-braided',
    name:     'ABS Plain White Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹450',
    img:      'images/products/hf_abs_white.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs plain white health faucet', 'abs plain white', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-abs-white-no-hose',
    name:     'ABS Plain White Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹299',
    img:      'images/products/hf_abs_white.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs plain white health faucet', 'abs plain white', 'abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-abs-white-pvc',
    name:     'ABS Plain White Health Faucet',
    subtitle: 'With PVC 1.0m Hose Pipe & Hook | White Colour',
    category: 'Health Faucets',
    price:    '₹399',
    img:      'images/products/hf_abs_white.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs plain white health faucet', 'abs plain white', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-foam',
    name:     'Foam Health Faucet',
    subtitle: 'With SS Grade 1.0m Hose Pipe & Wall Hook',
    category: 'Health Faucets',
    price:    '₹650',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'foam', 'health faucet', 'chrome', 'health faucets', 'foam health faucet'],
  },
  {
    id:       'p-hf-jumbo-braided',
    name:     'Jumbo Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹550',
    img:      'images/products/hf_jumbo.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'health faucet', 'jumbo', 'chrome', 'health faucets', 'jumbo health faucet'],
  },
  {
    id:       'p-hf-jumbo-no-hose',
    name:     'Jumbo Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹299',
    img:      'images/products/hf_jumbo.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'health faucet', 'jumbo', 'chrome', 'health faucets', 'jumbo health faucet'],
  },
  {
    id:       'p-hf-jumbo-nozzle-braided',
    name:     'Jumbo Nozzle Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹650',
    img:      'images/products/hf_jumbo_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jumbo nozzle health faucet', 'abs', 'with hose', 'jumbo nozzle', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-jumbo-nozzle-no-hose',
    name:     'Jumbo Nozzle Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹400',
    img:      'images/products/hf_jumbo.jpg',
    page:     'products.html#health-faucets',
    tags:     ['jumbo nozzle health faucet', 'abs', 'without hose', 'jumbo nozzle', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-kelvin-no-hose-2',
    name:     'Kelvin Health Faucet',
    subtitle: 'Jet Spray for Toilet | Set of 1',
    category: 'Health Faucets',
    price:    '₹470',
    img:      'images/products/hf_kelvin.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'jet spray', 'health faucet', 'chrome', 'kelvin', 'health faucets', 'kelvin health faucet'],
  },
  {
    id:       'p-hf-kelvin-no-hose',
    name:     'Kelvin Health Faucet',
    subtitle: 'Jet Spray for Toilet | Without Hose',
    category: 'Health Faucets',
    price:    '₹235',
    img:      'images/products/hf_kelvin.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'kelvin', 'health faucets', 'kelvin health faucet'],
  },
  {
    id:       'p-hf-kelvin-braided-silicon',
    name:     'Kelvin Health Faucet',
    subtitle: 'With Braided 1.0m Hose | Silicon Nozzles',
    category: 'Health Faucets',
    price:    '₹450',
    img:      'images/products/hf_kelvin.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'kelvin', 'health faucets', 'kelvin health faucet'],
  },
  {
    id:       'p-hf-lepton-braided',
    name:     'Lepton Health Faucet',
    subtitle: 'ABS | With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹475',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'lepton', 'lepton health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-lepton-braided-pack1',
    name:     'Lepton Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook | Pack of 1',
    category: 'Health Faucets',
    price:    '₹675',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'lepton', 'lepton health faucet', 'chrome', 'health faucet', 'health faucets'],
  },
  {
    id:       'p-hf-milano-braided',
    name:     'Milano Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹550',
    img:      'images/products/hf_milano.jpg',
    page:     'products.html#health-faucets',
    tags:     ['milano', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'milano health faucet'],
  },
  {
    id:       'p-hf-milano-no-hose-gun',
    name:     'Milano Health Faucet',
    subtitle: 'Chrome Finish | Without Hose — Gun Only',
    category: 'Health Faucets',
    price:    '₹250',
    img:      'images/products/hf_milano.jpg',
    page:     'products.html#health-faucets',
    tags:     ['milano', 'abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'milano health faucet'],
  },
  {
    id:       'p-hf-milano-chrome-no-hose',
    name:     'Milano Health Faucet',
    subtitle: 'Chrome Finish | Without Shower Tube & Hook',
    category: 'Health Faucets',
    price:    '₹399',
    img:      'images/products/hf_milano.jpg',
    page:     'products.html#health-faucets',
    tags:     ['milano', 'abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'milano health faucet'],
  },
  {
    id:       'p-hf-newton-braided',
    name:     'Newton Health Faucet',
    subtitle: 'ABS | With SS Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹550',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'newton', 'newton health faucet', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-newton-braided-pack1',
    name:     'Newton Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook | Pack of 1',
    category: 'Health Faucets',
    price:    '₹550',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'newton', 'newton health faucet', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-newton-no-hose',
    name:     'Newton Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹550',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'newton', 'newton health faucet', 'without hose', 'jet spray', 'health faucet', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-ohm-braided',
    name:     'OHM Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹475',
    img:      'images/products/hf_perry.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'ohm health faucet', 'health faucets', 'ohm'],
  },
  {
    id:       'p-hf-ohm-no-hose-chrome',
    name:     'OHM Health Faucet',
    subtitle: 'Chrome Finish | Without Shower Tube & Hook',
    category: 'Health Faucets',
    price:    '₹299',
    img:      'images/products/hf_perry.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'ohm health faucet', 'health faucets', 'ohm'],
  },
  {
    id:       'p-hf-ohm-no-hose-set1',
    name:     'OHM Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹299',
    img:      'images/products/hf_perry.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'ohm health faucet', 'health faucets', 'ohm'],
  },
  {
    id:       'p-hf-perry-braided',
    name:     'Perry Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹549',
    img:      'images/products/hf_jack.jpg',
    page:     'products.html#health-faucets',
    tags:     ['perry health faucet', 'abs', 'with hose', 'jet spray', 'health faucet', 'perry', 'chrome', 'health faucets'],
  },
  {
    id:       'p-hf-photon-braided',
    name:     'Photon Health Faucet',
    subtitle: 'With 1.0m Flexible Hose Pipe | Chrome Finish',
    category: 'Health Faucets',
    price:    '₹399',
    img:      'images/products/hf_photon.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'photon', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'photon health faucet'],
  },
  {
    id:       'p-hf-photon-white-pvc',
    name:     'Photon White Health Faucet',
    subtitle: 'With PVC 1.0m Hose Pipe & Hook | White Colour',
    category: 'Health Faucets',
    price:    '₹399',
    img:      'images/products/hf_abs_white.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'photon', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'photon white health faucet'],
  },
  {
    id:       'p-hf-solo-nozzle-braided-set1',
    name:     'Solo Nozzle Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹450',
    img:      'images/products/hf_jack_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['solo nozzle health faucet', 'abs', 'with hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'solo nozzle'],
  },
  {
    id:       'p-hf-solo-nozzle-no-hose',
    name:     'Solo Nozzle Health Faucet',
    subtitle: 'Chrome Finish | Without Hose | Silicon Nozzles',
    category: 'Health Faucets',
    price:    '₹425',
    img:      'images/products/hf_solo_nozzle.jpg',
    page:     'products.html#health-faucets',
    tags:     ['solo nozzle health faucet', 'abs', 'without hose', 'jet spray', 'health faucet', 'chrome', 'health faucets', 'solo nozzle'],
  },
  {
    id:       'p-hf-square-braided',
    name:     'Square Health Faucet',
    subtitle: 'With Braided 1.0m Hose Pipe & Hook',
    category: 'Health Faucets',
    price:    '₹650',
    img:      'images/products/hf_square.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'with hose', 'jet spray', 'health faucet', 'square health faucet', 'chrome', 'health faucets', 'square'],
  },
  {
    id:       'p-hf-square-no-hose-set1',
    name:     'Square Health Faucet',
    subtitle: 'Without Shower Tube & Hook | Set of 1',
    category: 'Health Faucets',
    price:    '₹299',
    img:      'images/products/hf_square.jpg',
    page:     'products.html#health-faucets',
    tags:     ['abs', 'without hose', 'jet spray', 'health faucet', 'square health faucet', 'chrome', 'health faucets', 'square'],
  },

  /* ── OVERHEAD SHOWERS ── */
  {
    id:       'p-oh-bell',
    name:     'Bell ABS Overhead Shower',
    subtitle: '3 Inch Rainshower with 9-inch Arm & Wall Flange',
    category: 'Overhead Showers',
    price:    '₹450',
    img:      'images/products/oh_bell.jpg',
    page:     'products.html#overhead-showers',
    tags:     ['bell abs overhead shower', 'bell', 'abs', 'shower', 'overhead showers', 'rainshower', 'overhead shower'],
  },
  {
    id:       'p-oh-gamma',
    name:     'Gamma Overhead Shower',
    subtitle: 'ABS 6x6 Inch Rainshower with 9-inch Arm',
    category: 'Overhead Showers',
    price:    '₹1,250',
    img:      'images/products/oh_gamma.jpg',
    page:     'products.html#overhead-showers',
    tags:     ['abs', 'gamma overhead shower', 'shower', 'gamma', 'chrome', 'overhead showers', 'rainshower', 'overhead shower'],
  },
  {
    id:       'p-oh-nano',
    name:     'Nano Overhead Shower',
    subtitle: '4 Inch ABS Chrome Finish with Shower Arm',
    category: 'Overhead Showers',
    price:    '₹499',
    img:      'images/products/oh_nano.jpg',
    page:     'products.html#overhead-showers',
    tags:     ['nano', 'abs', 'shower', 'chrome', 'overhead showers', 'rainshower', 'nano overhead shower', 'overhead shower'],
  },

  /* ── TAPS ── */
  {
    id:       'p-tap-corsa-pillar',
    name:     'Plastic Piller Cock Corsa Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹229',
    img:      'images/products/tap_pillar_cock.png',
    page:     'products.html#taps',
    tags:     ['plastic piller cock corsa tap', 'tap', 'corsa', 'abs', 'chrome', 'taps', 'cock'],
  },
  {
    id:       'p-tap-corsa-bibcock',
    name:     'Plastic Bib Cock Corsa Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹210',
    img:      'images/products/tap_pillar_cock_2.png',
    page:     'products.html#taps',
    tags:     ['tap', 'corsa', 'abs', 'chrome', 'plastic bib cock corsa tap', 'taps', 'cock'],
  },
  {
    id:       'p-tap-corsa-longbody',
    name:     'Long Body Corsa Chrome Tap',
    subtitle: 'Wall Mountable | Bathroom & Kitchen Faucet',
    category: 'Taps',
    price:    '₹219',
    img:      'images/products/tap_pillar_cock_filter.png',
    page:     'products.html#taps',
    tags:     ['tap', 'corsa', 'abs', 'long body corsa chrome tap', 'chrome', 'taps', 'cock'],
  },
  {
    id:       'p-tap-corsa-anglecok',
    name:     'Plastic Angle Cock Corsa Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹199',
    img:      'images/products/tap_angle_cock.png',
    page:     'products.html#taps',
    tags:     ['plastic angle cock corsa tap', 'tap', 'corsa', 'abs', 'chrome', 'taps', 'cock'],
  },
  {
    id:       'p-tap-classic-pillar',
    name:     'Plastic Piller Cock Classic Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹229',
    img:      'images/products/tap_pillar_cock.png',
    page:     'products.html#taps',
    tags:     ['tap', 'abs', 'chrome', 'plastic piller cock classic tap', 'classic', 'taps', 'cock'],
  },
  {
    id:       'p-tap-classic-bibcock',
    name:     'Plastic Bib Cock Classic Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹190',
    img:      'images/products/tap_pillar_cock_2.png',
    page:     'products.html#taps',
    tags:     ['tap', 'abs', 'plastic bib cock classic tap', 'chrome', 'classic', 'taps', 'cock'],
  },
  {
    id:       'p-tap-classic-longbody',
    name:     'Plastic Long Body Classic Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹219',
    img:      'images/products/tap_pillar_cock_filter.png',
    page:     'products.html#taps',
    tags:     ['tap', 'abs', 'chrome', 'classic', 'taps', 'plastic long body classic tap', 'cock'],
  },
  {
    id:       'p-tap-classic-anglecok',
    name:     'Plastic Angle Cock Classic Tap',
    subtitle: 'For Bathroom & Kitchen | Chrome Finish',
    category: 'Taps',
    price:    '₹199',
    img:      'images/products/tap_angle_cock.png',
    page:     'products.html#taps',
    tags:     ['plastic angle cock classic tap', 'tap', 'abs', 'chrome', 'classic', 'taps', 'cock'],
  },

  /* ── ACCESSORIES ── */
  {
    id:       'p-acc-shelf-3in1',
    name:     'Plastic 3-in-1 Multipurpose Bathroom Shelf',
    subtitle: 'Soap Case + Tumbler Holder + Toothbrush Holder',
    category: 'Accessories',
    price:    '₹249',
    img:      'images/products/acc_3in1_shelf.png',
    page:     'products.html#accessories',
    tags:     ['shelf', 'abs', 'accessories', 'plastic 3-in-1 multipurpose bathroom shelf', 'soap', 'tumbler', 'accessory'],
  },
  {
    id:       'p-acc-shelf-4in1',
    name:     'Plastic 4-in-1 Multipurpose Bathroom Shelf',
    subtitle: 'Soap Case + Tumbler Holder + Toothbrush Holder',
    category: 'Accessories',
    price:    '₹249',
    img:      'images/products/acc_3in1_shelf.png',
    page:     'products.html#accessories',
    tags:     ['shelf', 'abs', 'accessories', 'plastic 4-in-1 multipurpose bathroom shelf', 'soap', 'tumbler', 'accessory'],
  },
];

/* ── Keywords that map to a category so partial searches work ── */
const CATEGORY_ALIASES = {
  'health faucet':   'Health Faucets',
  'health faucets':  'Health Faucets',
  'faucet':          'Health Faucets',
  'faucets':         'Health Faucets',
  'jet spray':       'Health Faucets',
  'overhead shower': 'Overhead Showers',
  'overhead showers':'Overhead Showers',
  'rainshower':      'Overhead Showers',
  'shower':          'Overhead Showers',
  'tap':             'Taps',
  'taps':            'Taps',
  'cock':            'Taps',
  'accessory':       'Accessories',
  'accessories':     'Accessories',
  'shelf':           'Accessories',
  'soap':            'Accessories',
};

/* ── DOM refs ── */
const toggle   = document.getElementById('search-toggle');
const box      = document.getElementById('search-box');
const input    = document.getElementById('search-input');
const results  = document.getElementById('search-results');
const closeBtn = document.getElementById('search-close');

/* ── Backdrop (injected once) ── */
const backdrop = document.createElement('div');
backdrop.className = 'nav-search-backdrop';
document.body.appendChild(backdrop);

/* ── Hint tags row (injected into box) ── */
const HINTS = ['Health Faucets', 'Overhead Showers', 'Taps', 'Milano', 'Jumbo', 'Accessories'];
const hintRow = document.createElement('div');
hintRow.className = 'search-hint-row';
hintRow.innerHTML = HINTS.map(h => `<span class="search-hint-tag">${h}</span>`).join('');
box.insertBefore(hintRow, document.getElementById('search-results'));

hintRow.querySelectorAll('.search-hint-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    input.value = tag.textContent;
    input.focus();
    renderResults(tag.textContent.trim());
  });
});

if (toggle && box && input && results) {

  /* open / close */
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = box.classList.toggle('open');
    backdrop.classList.toggle('open', isOpen);
    if (isOpen) {
      input.focus();
      renderResults('');
    }
  });

  closeBtn.addEventListener('click', () => closeSearch());
  backdrop.addEventListener('click', () => closeSearch());
  document.addEventListener('click', (e) => {
    if (!document.getElementById('nav-search').contains(e.target)) closeSearch();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

  function closeSearch() {
    box.classList.remove('open');
    backdrop.classList.remove('open');
    input.value = '';
    results.innerHTML = '';
  }

  /* search on input */
  input.addEventListener('input', () => renderResults(input.value.trim()));

  /* Enter key → go to products page */
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = 'products.html?q=' + encodeURIComponent(input.value.trim());
    }
  });

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function renderResults(query) {
    results.innerHTML = '';
    if (!query) {
      results.innerHTML = `
        <div class="search-no-results">
          <div class="search-no-results-icon">🔍</div>
          <div class="search-no-results-text">Search our catalogue</div>
          <div class="search-no-results-sub">Try "Jumbo", "Milano", "Overhead Showers", "Taps" or "Accessories"</div>
        </div>`;
      return;
    }

    const q = query.toLowerCase();

    /* Check if query maps to a whole category */
    const categoryMatch = Object.keys(CATEGORY_ALIASES).find(alias => q.includes(alias));
    const filterCategory = categoryMatch ? CATEGORY_ALIASES[categoryMatch] : null;

    let matched = PRODUCTS.filter(p => {
      if (filterCategory) return p.category === filterCategory;
      const haystack = [p.name, p.subtitle, p.category, ...p.tags].join(' ').toLowerCase();
      return haystack.includes(q);
    });

    if (!matched.length) {
      results.innerHTML = `
        <div class="search-no-results">
          <div class="search-no-results-icon">😕</div>
          <div class="search-no-results-text">No results for "<strong>${query}</strong>"</div>
          <div class="search-no-results-sub">Try a different keyword or browse all products</div>
        </div>`;
      return;
    }

    /* Group by category */
    const groups = {};
    matched.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });

    Object.entries(groups).forEach(([cat, items]) => {
      const label = document.createElement('div');
      label.className = 'search-result-group-label';
      label.textContent = cat + ' — ' + items.length + ' found';
      results.appendChild(label);

      items.forEach(p => {
        const a = document.createElement('a');
        a.className = 'search-result-item';
        const [pagePath, pageHash] = p.page.split('#');
        a.href = pagePath + '?highlight=' + p.id + (pageHash ? '#' + pageHash : '');
        a.innerHTML = `
          <img class="search-result-img" src="${p.img}" alt="${p.name}" />
          <div class="search-result-info">
            <div class="search-result-name">${highlight(p.name, query)}</div>
            <div class="search-result-meta">${p.subtitle}</div>
          </div>
        `;
        a.addEventListener('click', () => closeSearch());
        results.appendChild(a);
      });
    });

    /* Footer */
    const footer = document.createElement('div');
    footer.className = 'search-footer';
    footer.innerHTML = `
      <span class="search-footer-hint">Press Enter to browse all</span>
      <a href="products.html">View all ${matched.length} result${matched.length !== 1 ? 's' : ''} &rarr;</a>`;
    results.appendChild(footer);
  }
}
