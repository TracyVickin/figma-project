export const priceCards = [
  {
    label: "PMS",
    name: "Premium Motor Spirit",
    value: "₦714.26",
    change: "+0.37",
    trend: "up",
    chart: "green",
  },
  {
    label: "AGO",
    name: "Automotive Gas Oil",
    value: "₦1249.06",
    change: "-9.01",
    trend: "down",
    chart: "red",
  },
  {
    label: "ICE",
    name: "ICE Brent Crude",
    value: "$75.00",
    change: "+0.68",
    trend: "up",
    chart: "green",
  },
  {
    label: "DPK",
    name: "Dual Purpose Kerosene",
    value: "₦1088.92",
    change: "-50.90",
    trend: "down",
    chart: "red",
  },
];

export const depots = [
  { name: "NIPCO", location: "Lagos", value: "₦714.26", change: "+0.37", trend: "up" },
  { name: "Oando PLC", location: "Rivers", value: "₦714.26", change: "+0.37", trend: "up" },
  { name: "MRS Oil Nigeria P...", location: "Oyo", value: "₦714.26", change: "+0.37", trend: "up" },
];

export const depotTabs = ["PMS", "AGO", "DPK", "ICE", "LPG"];

export const reports = [
  { label: "PMS - Aug 12-17" },
  { label: "DPK - Aug 12-17" },
  { label: "AGO - Aug 12-17" },
  { label: "ICE - Aug 12-17" },
];

export const news = {
  tag: "ICE",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/BP_logo.svg", // Placeholder BP logo
  source: "Vanguard",
  headline: "Shareholders Enjoy a Massive Windfall as BP Expands Global...",
};

export const flights = {
  total: "284,774",
  change: "+15%",
  period: "last week",
  chart: [
    { date: "24 Jan", international: 100000, domestic: 200000 },
    { date: "31 Jan", international: 120000, domestic: 250000 },
    { date: "7 Feb", international: 150000, domestic: 300000 },
    { date: "14 Feb", international: 140000, domestic: 280000 },
  ],
  airports: [
    { name: "Murtala Muhammed I...", flights: "12,489" },
    { name: "Nnamdi Azikiwe Inter...", flights: "934,483" },
    { name: "Mallam Aminu Kano Int...", flights: "10,722" },
    { name: "Port Harcourt Internat...", flights: "9,823" },
    { name: "Akanu Ibiam Internat...", flights: "489" },
    { name: "Murtala Mohammed...", flights: "89" },
  ],
}; 