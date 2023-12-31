import { z } from 'zod';

const MediaSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  src: z.string(),
  alt: z.string().optional(),
  isVideo: z.boolean().default(false).optional(),
  base64Placeholder: z.string().optional(),
});

export type Media = z.infer<typeof MediaSchema>;
