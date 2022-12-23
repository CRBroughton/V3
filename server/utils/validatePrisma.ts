/**
 * Generic Prisma Validator: Use for when you have declared
 * default values in your Prisma schema; Sometimes Prisma
 * fails to ensure data objects on CRUD operations match
 * the schema:
 * ```typescript
 * const user = req.ctx.prisma.user.create<ValidatePrisma<User>>({
 *   data: req.input, // data should now require the User type
 * })
 *```
 * This usually happens with default values in the Prisma schema.
 * Avoid default values (empty strings) to avoid this issue.
 *
 */
export interface ValidatePrisma<T> { data: T }
