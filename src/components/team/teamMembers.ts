export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience: string;
  phone: string;
  email: string;
  image: string;
};

export type TeamDetail = {
  name?: string;
  role?: string;
  experience?: string;
  phone?: string;
  email?: string;
};

/**
 * Details in photo order. Index 0 is t1, index 1 is t2, and so on.
 */
export const teamDetails: TeamDetail[] = [
  {
    name: "RUSHI PATEL",
    phone: "+91 95104 15182",
    email: "rushi.sevakendra@gmail.com",
    experience: "3 Years",
    role: "CEO & Finance Advisor",
  },
  {
    name: "KAITAVBHAI GANDHI",
    phone: "+91 73833 92787",
    email: "kagandhi2001@gmail.com",
    experience: "10 Years",
    role: "Insurance Advisor",
  },
  {
    name: "SURESHBHAI PATEL",
    phone: "+91 98792 96265",
    email: "sppatel1068@gmail.com",
    experience: "7 Years",
    role: "Insurance Advisor",
  },
  {
    name: "KHUSHALBHAI PATEL",
    phone: "+91 98989 76418",
    email: "khushalp3672@gmail.com",
    experience: "7 Years",
    role: "Insurance Advisor",
  },
  {
    name: "RAJESHBHAI SEVKANI",
    phone: "+91 94290 30616",
    email: "jayeshcreation04.rr@gmail.com",
    experience: "4 Years",
    role: "Insurance Advisor",
  },
  {
    name: "SANJAYKUMAR MAKWANA",
    phone: "+91 91068 01348",
    email: "sanjaymakwana9811@gmail.com",
    experience: "20 Years",
    role: "Insurance Advisor",
  },
  {
    name: "KRUPALI ANILKUMAR PATEL",
    phone: "+91 81601 65045",
    email: "krupalip773@gmail.com",
    experience: "5 Years",
    role: "Insurance Advisor",
  },
  {
    name: "CHETANKUMAR MOHANLAL PRAJAPATI",
    phone: "+91 99042 94693",
    email: "CHETAN04693831@GMAIL.COM",
    experience: "20 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Siddh Mayur Patel",
    phone: "+91 99989 78421",
    email: "mayurpatel8421@gmail.com",
    experience: "25 Years",
    role: "Insurance Advisor",
  },
  {
    name: "PATEL NIRMIT ARVINDBHAI",
    phone: "+91 96248 71024",
    email: "abnirmit1602@gmail.com",
    experience: "5 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Dhariniben hetalkumar patel",
    phone: "+91 91066 63121",
    email: "vrajpatidar03@gmail.com",
    experience: "5 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Palak K Patel",
    phone: "+91 82006 64859",
    email: "palakpatel0019@gmail.com",
    experience: "4 Years",
    role: "Insurance Advisor",
  },
  {
    name: "MAYANK M PATEL",
    phone: "+91 73595 63395",
    email: "azadpatel2382@gmail.com",
    experience: "7+ Years",
    role: "Insurance Advisor",
  },
  {
    name: "Nachiket Patel",
    phone: "+91 97252 88133",
    email: "nachiiketpatel@gmail.com",
    experience: "5 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Anshul Patel",
    phone: "+91 63527 90690",
    email: "anshulpatel0108@gmail.com",
    experience: "2 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Patel Darshana Samir",
    phone: "+91 98989 87907",
    email: "pateldarshana333@gmail.com",
    experience: "2 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Surya Pratap R. Bhadoriya",
    phone: "+91 81603 74441",
    email: "suryapratapbhadoriya1972@gmail.com",
    experience: "18 Years",
    role: "Insurance Advisor",
  },
  {
    name: "Heena Patel",
    phone: "+91 99984 83509",
    email: "parth.care.health@gmail.com",
    experience: "6 Months",
    role: "Insurance Advisor",
  },
];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

function extension(fileName: string) {
  const dot = fileName.lastIndexOf(".");
  return dot === -1 ? "" : fileName.slice(dot).toLowerCase();
}

function photoNumber(fileName: string) {
  const match = fileName.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

export function membersFromPhotos(fileNames: string[]): TeamMember[] {
  return fileNames
    .filter((fileName) => imageExtensions.has(extension(fileName)))
    .sort((a, b) => {
      const left = photoNumber(a);
      const right = photoNumber(b);
      if (left !== null && right !== null && left !== right) return left - right;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map((fileName, index) => {
      const number = photoNumber(fileName) ?? index + 1;
      const detail = teamDetails[number - 1] ?? {};

      return {
        id: fileName,
        name: detail.name?.trim() || `Team Member ${String(number).padStart(2, "0")}`,
        role: detail.role?.trim() ?? "",
        experience: detail.experience?.trim() ?? "",
        phone: detail.phone?.trim() ?? "",
        email: detail.email?.trim() ?? "",
        image: `/team/${encodeURIComponent(fileName)}`,
      };
    });
}
