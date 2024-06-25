import { boolean, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const pastes = pgTable('pastes', {
	id: serial('id').unique().primaryKey(),
	title: varchar('title', { length: 50 }).notNull(),
	content: text('content').notNull(),
	timestamp: timestamp('timestamp').defaultNow().notNull(),
	listed: boolean('listed').default(true).notNull()
});
