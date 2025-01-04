"use server";

import { db } from "~/server/db";
import { eq, and } from "drizzle-orm";
import { diagramCache, audioBlobStorage } from "~/server/db/schema";

export async function getLastGeneratedDate(username: string, repo: string) {
  const result = await db
    .select()
    .from(diagramCache)
    .where(
      and(eq(diagramCache.username, username), eq(diagramCache.repo, repo)),
    );

  return result[0]?.updatedAt;
}

export async function getLastUpdatedDateForAudioBlob(username: string, repo: string) {
    const result = await db
      .select()
      .from(audioBlobStorage)
      .where(
        and(eq(audioBlobStorage.username, username), eq(audioBlobStorage.repo, repo)),
      );

    return result[0]?.updatedAt;
  }