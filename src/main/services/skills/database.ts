import fs from 'node:fs'
import path from 'node:path'

import { createClient } from '@libsql/client'
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql'
import { app } from 'electron'

import * as schema from './schema'

export type SkillDatabase = LibSQLDatabase<typeof schema>

let database: SkillDatabase | null = null

export async function getSkillDatabase(): Promise<SkillDatabase> {
  if (database) {
    return database
  }

  const dir = path.join(app.getPath('userData'), 'Data')
  fs.mkdirSync(dir, { recursive: true })
  const dbPath = path.join(dir, 'agents.db')
  const client = createClient({ url: `file:${dbPath}` })
  database = drizzle(client, { schema })
  return database
}
