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
    officeName: "India Office",
    address: "[India office address]",
    phone: "[India phone number]",
    email: "[India email]",
    directionsUrl: "#",
    mapX: 71.8,
    mapY: 40,
  },
];

export const contactChannels = {
  phone: "[Main contact phone number]",
  email: "[Main contact email]",
};

export const serviceOptions = [
  "Life Insurance",
  "Health Insurance",
  "Overseas Insurance",
  "General Insurance",
  "Other",
] as const;
