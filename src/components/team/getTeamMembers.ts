import fs from "node:fs";
import path from "node:path";
import { membersFromPhotos, type TeamMember } from "./teamMembers";

export function getTeamMembers(): TeamMember[] {
  const directory = path.join(process.cwd(), "public", "team");
  if (!fs.existsSync(directory)) return [];

  return membersFromPhotos(fs.readdirSync(directory));
}
