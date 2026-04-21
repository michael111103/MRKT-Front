export const tickerItems = [
  { symbol: 'NQUSD', price: '$24,102.50', change: '+1.2%', up: true },
  { symbol: 'XAUUSD', price: '$4,743.26', change: '+0.4%', up: true },
  { symbol: 'ESUSD', price: '$6,804.53', change: '-0.3%', up: false },
  { symbol: 'BTCUSD', price: '$71,208.96', change: '+2.1%', up: true },
  { symbol: 'GCUSD', price: '$4,767.39', change: '+0.8%', up: true },
  { symbol: 'DXUSD', price: '$98.75', change: '-0.5%', up: false },
  { symbol: 'EURUSD', price: '$1.0823', change: '+0.2%', up: true },
  { symbol: 'GBPUSD', price: '$1.2654', change: '-0.1%', up: false },
  { symbol: 'USDJPY', price: '¥149.32', change: '+0.3%', up: true },
];

export const newsItems = [
  {
    id: 1,
    impact: 'HIGH',
    time: '6:32 PM EST',
    ago: 'just now',
    headline: 'TRUMP: I AGREE TO SUSPEND BOMBING AND ATTACK OF IRAN FOR A PERIOD OF TWO WEEKS',
    analysis: "Trump's suspension of Iran bombing de-escalates conflict, reducing geopolitical risk and boosting risk assets",
    signals: [{ symbol: 'NQUSD', dir: '↑', up: true }, { symbol: 'XAUUSD', dir: '↓', up: false }],
  },
  {
    id: 2,
    impact: 'HIGH',
    time: '6:32 PM EST',
    ago: 'just now',
    headline: 'TRUMP: THIS WILL BE A DOUBLE SIDED CEASEFIRE',
    analysis: 'Trump announces ceasefire framework, signaling potential end to major conflict with significant geopolitical de-escalation implications',
    signals: [{ symbol: 'NQUSD', dir: '↑', up: true }, { symbol: 'ESUSD', dir: '↑', up: true }],
  },
  {
    id: 3,
    impact: 'HIGH',
    time: '7:30 PM EST',
    ago: '30 minutes ago',
    headline: "TRUMP: BASED UPON THIS UNDERSTANDING, I WILL NOT BE IMPOSING TARIFFS THAT WERE SCHEDULED TO GO INTO EFFECT ON FEBRUARY 1ST",
    analysis: 'Trump announces cancellation of tariffs, providing relief to trade tensions and impacting commodity markets including gold.',
    signals: [{ symbol: 'XAUUSD', dir: '↓', up: false }, { symbol: 'USD', dir: '↑', up: true }],
  },
  {
    id: 4,
    impact: 'HIGH',
    time: '2:30 PM EST',
    ago: '1 hour ago',
    headline: 'POWELL: DOWNSIDE RISKS TO LABOR MARKET RISING',
    analysis: 'Fed Chair Powell signals growing concerns about labor market weakening, suggesting potential for more aggressive rate cuts.',
    signals: [{ symbol: 'ESUSD', dir: '↑', up: true }, { symbol: 'USD', dir: '↓', up: false }],
  },
  {
    id: 5,
    impact: 'HIGH',
    time: '11:45 AM EST',
    ago: '2 hours ago',
    headline: "FED'S WALLER: WE MAY NEED TO SLOW OR SKIP CUTS IF INFLATION REMAINS ELEVATED",
    analysis: 'Fed Governor Waller signals potential pause in rate cuts if inflation persists, hawkish stance pressures equities.',
    signals: [{ symbol: 'USD', dir: '↑', up: true }, { symbol: 'ESUSD', dir: '↓', up: false }],
  },
  {
    id: 6,
    impact: 'HIGH',
    time: '9:00 AM EST',
    ago: '4 hours ago',
    headline: 'CHINA GDP GROWTH MISSES ESTIMATES AT 4.8% VS 5.2% EXPECTED',
    analysis: "China's weaker-than-expected GDP growth signals economic slowdown, pressuring commodity prices and risk assets globally.",
    signals: [{ symbol: 'XAUUSD', dir: '↓', up: false }, { symbol: 'BTCUSD', dir: '↓', up: false }],
  },
  {
    id: 7,
    impact: 'HIGH',
    time: '8:15 AM EST',
    ago: '5 hours ago',
    headline: "ECB'S LAGARDE: INFLATION RISKS REMAIN TILTED TO THE UPSIDE",
    analysis: 'ECB President signals hawkish stance on inflation, suggesting continued tight monetary policy in Europe.',
    signals: [{ symbol: 'EUR', dir: '↑', up: true }, { symbol: 'XAUUSD', dir: '↓', up: false }],
  },
];

export const dataProviders = [
  { name: 'Reuters', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg' },
  { name: 'NASDAQ', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/NASDAQ_Logo.svg' },
  { name: 'CME Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/CME_Group_Logo.svg' },
  { name: 'LSE Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/LSE_Group_logo.svg' },
];

export const chartData = [
  { x: 0, y: 60 }, { x: 1, y: 55 }, { x: 2, y: 65 }, { x: 3, y: 58 },
  { x: 4, y: 70 }, { x: 5, y: 67 }, { x: 6, y: 75 }, { x: 7, y: 72 },
  { x: 8, y: 80 }, { x: 9, y: 77 }, { x: 10, y: 85 }, { x: 11, y: 82 },
  { x: 12, y: 90 }, { x: 13, y: 87 }, { x: 14, y: 95 }, { x: 15, y: 92 },
  { x: 16, y: 100 }, { x: 17, y: 97 }, { x: 18, y: 105 }, { x: 19, y: 102 },
  { x: 20, y: 110 }, { x: 21, y: 108 }, { x: 22, y: 115 }, { x: 23, y: 112 },
  { x: 24, y: 120 },
];
