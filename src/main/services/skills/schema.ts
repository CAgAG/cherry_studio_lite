import { randomUUID } from 'node:crypto'

import { index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const skillsTable = sqliteTable(
  'skills',
  {
    id: text('id')
      .primaryKey()
      .$defaultFn(() => randomUUID()),
    name: text('name').notNull(),
    description: text('description'),
    folder_name: text('folder_name').notNull(),
    source: text('source').notNull(),
    source_url: text('source_url'),
    namespace: text('namespace'),
    author: text('author'),
    tags: text('tags'),
    content_hash: text('content_hash').notNull(),
    is_enabled: integer('is_enabled', { mode: 'boolean' }).notNull().default(true),
    created_at: integer('created_at')
      .notNull()
      .$defaultFn(() => Date.now()),
    updated_at: integer('updated_at')
      .notNull()
      .$defaultFn(() => Date.now())
      .$onUpdateFn(() => Date.now())
  },
  (t) => [
    uniqueIndex('skills_folder_name_unique').on(t.folder_name),
    index('idx_skills_source').on(t.source),
    index('idx_skills_is_enabled').on(t.is_enabled)
  ]
)

export type SkillRow = typeof skillsTable.$inferSelect
export type InsertSkillRow = typeof skillsTable.$inferInsert
