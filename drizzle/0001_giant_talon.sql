ALTER TABLE "pastes" RENAME TO "baskets";--> statement-breakpoint
ALTER TABLE "baskets" DROP CONSTRAINT "pastes_id_unique";--> statement-breakpoint
ALTER TABLE "baskets" ADD CONSTRAINT "baskets_id_unique" UNIQUE("id");