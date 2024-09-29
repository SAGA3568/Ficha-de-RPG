d
   INFO  Running migrations.  

  0001_01_01_000000_create_users_table .............................................................................................................  
  ⇂ create table "users" ("id" bigserial not null primary key, "name" varchar(255) not null, "email" varchar(255) not null, "email_verified_at" timestamp(0) without time zone null, "password" varchar(255) not null, "remember_token" varchar(100) null, "created_at" timestamp(0) without time zone null, "updated_at" timestamp(0) without time zone null)  
  ⇂ alter table "users" add constraint "users_email_unique" unique ("email")  
  ⇂ create table "password_reset_tokens" ("email" varchar(255) not null, "token" varchar(255) not null, "created_at" timestamp(0) without time zone null)  
  ⇂ alter table "password_reset_tokens" add primary key ("email")  
  ⇂ create table "sessions" ("id" varchar(255) not null, "user_id" bigint null, "ip_address" varchar(45) null, "user_agent" text null, "payload" text not null, "last_activity" integer not null)  
  ⇂ alter table "sessions" add primary key ("id")  
  ⇂ create index "sessions_user_id_index" on "sessions" ("user_id")  
  ⇂ create index "sessions_last_activity_index" on "sessions" ("last_activity")  
  0001_01_01_000001_create_cache_table .............................................................................................................  
  ⇂ create table "cache" ("key" varchar(255) not null, "value" text not null, "expiration" integer not null)  
  ⇂ alter table "cache" add primary key ("key")  
  ⇂ create table "cache_locks" ("key" varchar(255) not null, "owner" varchar(255) not null, "expiration" integer not null)  
  ⇂ alter table "cache_locks" add primary key ("key")  
  0001_01_01_000002_create_jobs_table ..............................................................................................................  
  ⇂ create table "jobs" ("id" bigserial not null primary key, "queue" varchar(255) not null, "payload" text not null, "attempts" smallint not null, "reserved_at" integer null, "available_at" integer not null, "created_at" integer not null)  
  ⇂ create index "jobs_queue_index" on "jobs" ("queue")  
  ⇂ create table "job_batches" ("id" varchar(255) not null, "name" varchar(255) not null, "total_jobs" integer not null, "pending_jobs" integer not null, "failed_jobs" integer not null, "failed_job_ids" text not null, "options" text null, "cancelled_at" integer null, "created_at" integer not null, "finished_at" integer null)  
  ⇂ alter table "job_batches" add primary key ("id")  
  ⇂ create table "failed_jobs" ("id" bigserial not null primary key, "uuid" varchar(255) not null, "connection" text not null, "queue" text not null, "payload" text not null, "exception" text not null, "failed_at" timestamp(0) without time zone not null default CURRENT_TIMESTAMP)  
  ⇂ alter table "failed_jobs" add constraint "failed_jobs_uuid_unique" unique ("uuid")  
  CreateFichasTable ................................................................................................................................  
  ⇂ create table "fichas" ("id" bigserial not null primary key, "type" varchar(255) not null, "image" varchar(255) not null, "name" varchar(255) not null, "age" integer not null, "breed" varchar(255) not null, "height" decimal(4, 2) not null, "genre" varchar(255) not null, "weight" integer not null, "strength" integer not null, "intelligence" integer not null, "resistance" integer not null, "charisma" integer not null, "reflexes" integer not null, "dexterity" integer not null, "history" text not null, "hit_point" integer not null, "fury" integer null, "magic" integer null, "faith" integer null, "stamina" integer null, "bleeding" boolean not null, "poisoning" boolean not null, "item_1" varchar(255) null, "effect_1" varchar(255) null, "item_2" varchar(255) null, "effect_2" varchar(255) null, "item_3" varchar(255) null, "effect_3" varchar(255) null, "created_at" timestamp(0) without time zone null, "updated_at" timestamp(0) without time zone null)  
  2024_09_29_155230_create_personal_access_tokens_table ............................................................................................  
  ⇂ create table "personal_access_tokens" ("id" bigserial not null primary key, "tokenable_type" varchar(255) not null, "tokenable_id" bigint not null, "name" varchar(255) not null, "token" varchar(64) not null, "abilities" text null, "last_used_at" timestamp(0) without time zone null, "expires_at" timestamp(0) without time zone null, "created_at" timestamp(0) without time zone null, "updated_at" timestamp(0) without time zone null)  
  ⇂ create index "personal_access_tokens_tokenable_type_tokenable_id_index" on "personal_access_tokens" ("tokenable_type", "tokenable_id")  
  ⇂ alter table "personal_access_tokens" add constraint "personal_access_tokens_token_unique" unique ("token")  

