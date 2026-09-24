export type OfficeId = "canada" | "usa" | "india";

export type Office = {
  id: OfficeId;
  country: string;
  flag: string;
  officeName: string;
  address: string;
  phone: string;
  email: string;
  directionsUrl: string;
  mapX: number;
  mapY: number;
};

export const offices: Office[] = [
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    officeName: "Canada Office",
    address:
      "3740 11a st NE unit 201F,\nCalgary, Alberta T2E 6M9,\nCanada",
    phone: "+1 587 878 7087",
    email: "sevakendracanada@gmail.com",
    directionsUrl: "https://maps.google.com/?q=3740+11a+st+NE+unit+201F+Calgary+Alberta+T2E+6M9+Canada",
    mapX: 20.5,
    mapY: 27,
  },
  {
    id: "usa",
    country: "USA",
    flag: "🇺🇸",
    officeName: "USA Office",
    address:
      "2211 Portlock Road,\nChesapeake, VA 23324",
    phone: "+1 587 878 7087",
    email: "[USA email]",
    directionsUrl: "https://maps.google.com/?q=2211+Portlock+Road+Chesapeake+VA+23324",
    mapX: 22.5,
    mapY: 31.5,
  },
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    officeName: "Kalol Office",
    address:
      "F-11, JP Commercial Centre,\nMahendra Mill Road,\nUnder old LIC office,\nKalol - 382721",
    phone: "+91 98987 77837",
    email: "sevakendrakalol@gmail.com",
    directionsUrl: "https://maps.app.goo.gl/USWBGmfvNSEJie2z5",
    mapX: 71.8,
    mapY: 40,
  },
];

export const contactChannels = {
  phone: "+91 98987 77837",
  email: "sevakendrakalol@gmail.com",
};

export const serviceOptions = [
  "Life Insurance",
  "Health Insurance",
  "Overseas Insurance",
  "General Insurance",
  "Other",
] as const;
