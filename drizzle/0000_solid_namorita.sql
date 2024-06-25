CREATE TABLE IF NOT EXISTS "pastes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(50) NOT NULL,
	"content" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"listed" boolean DEFAULT true NOT NULL,
	CONSTRAINT "pastes_id_unique" UNIQUE("id")
);
