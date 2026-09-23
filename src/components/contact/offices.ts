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
    address: "[Canada office address]",
    phone: "[Canada phone number]",
    email: "[Canada email]",
    directionsUrl: "#",
    mapX: 20.5,
    mapY: 27,
  },
  {
    id: "usa",
    country: "USA",
    flag: "🇺🇸",
    officeName: "USA Office",
    address: "[USA office address]",
    phone: "[USA phone number]",
    email: "[USA email]",
    directionsUrl: "#",
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
    phone: "+91 98765 43210",
    email: "sevakendrakalol@gmail.com",
    directionsUrl: "https://maps.app.goo.gl/USWBGmfvNSEJie2z5",
    mapX: 71.8,
    mapY: 40,
  },
];

export const contactChannels = {
  phone: "+91 98765 43210",
  email: "sevakendrakalol@gmail.com",
};

export const serviceOptions = [
  "Life Insurance",
  "Health Insurance",
  "Overseas Insurance",
  "General Insurance",
  "Other",
] as const;
