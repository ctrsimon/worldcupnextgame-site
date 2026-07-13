import { z } from "zod";

const optionalEnvironmentValue = <T extends z.ZodTypeAny>(schema: T) => z.preprocess(
  (value) => value === "" ? undefined : value,
  schema.optional(),
);

const environment = z.object({
  MATCH_API_BASE_URL: optionalEnvironmentValue(z.string().url()),
  MATCH_API_KEY: optionalEnvironmentValue(z.string().min(1)),
  MATCH_API_TOURNAMENT_ID: optionalEnvironmentValue(z.string().min(1)),
  REVALIDATION_SECRET: optionalEnvironmentValue(z.string().min(16)),
  NEXT_PUBLIC_SITE_URL: optionalEnvironmentValue(z.string().url()),
});

export const env = environment.parse({
  MATCH_API_BASE_URL: process.env.MATCH_API_BASE_URL,
  MATCH_API_KEY: process.env.MATCH_API_KEY,
  MATCH_API_TOURNAMENT_ID: process.env.MATCH_API_TOURNAMENT_ID,
  REVALIDATION_SECRET: process.env.REVALIDATION_SECRET,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
