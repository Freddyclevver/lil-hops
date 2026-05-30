"use server";

import fs from "fs/promises";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

async function ensureDir() {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
  }
}

async function readSubscribers() {
  await ensureDir();
  try {
    const content = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: any[]) {
  await ensureDir();
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

export async function subscribeNewsletter(email: string) {
  if (!email || !email.includes("@")) {
    return { error: "Bitte gib eine gültige E-Mail ein." };
  }

  const subscribers = await readSubscribers();

  if (subscribers.some((sub: any) => sub.email === email)) {
    return { error: "Diese E-Mail ist bereits angemeldet." };
  }

  subscribers.push({
    email,
    subscribedAt: new Date().toISOString(),
  });

  await writeSubscribers(subscribers);

  return { success: true, message: "Danke! Du bist jetzt dabei. 💜" };
}

export async function getSubscribers() {
  return await readSubscribers();
}
