/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

const OptionalString = z.string().min(1).optional()
type OptionalString = z.TypeOf<typeof OptionalString>

export const User = z.object({
  aud: OptionalString,
  azp: OptionalString,
  email: z.string().email(),
  email_verified: z.boolean(),
  exp: z.number().optional(),
  family_name: z.string().min(1),
  given_name: z.string().min(1),
  iat: z.number().optional(),
  iss: z.string().min(1),
  jti: OptionalString,
  name: z.string().min(1),
  nbf: z.number().optional(),
  picture: z.string().min(1),
  sub: z.string().min(1),
})
export type User = z.TypeOf<typeof User>