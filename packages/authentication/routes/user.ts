import argon2id = require('argon2');
import { Router } from 'express';
import * as path from 'path';
import { Actions, Responses } from '../utils/constants';
import prisma from 'prisma';
import { isLoggedIn } from '../utils/passport';
import { userSchema } from '../middleware/joi';
import { sanitizedUser } from '../middleware/users';

const userRoute = Router();

const db = prisma;

// Use the file name to decide the type for reference
const type = path.basename(__filename.split('.')[0]);
const types = type + 's';
const types2 = 'posts';

//Creating user is handled in index.ts (Register)

//#region READ

/**
 * Get all users (as sanitized users, stripping away some data. Shown in models/user)
 */
userRoute.get('/', async (req, res) => {
  const users: sanitizedUser[] = await db.user.findMany({
    select: {
      email: true,
      displayName: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!users) return res.status(404).json(Responses.read.none_found(types));

  // Hide other users email from request
  users.forEach(u => {
    const user = req.user as sanitizedUser | undefined;
    if (u.email !== user?.email) u.email = '';
  });

  return res.json(users);
});

/**
 * Gets a specific user if possible
 */
userRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) return res.status(400).json(Responses.invalid_id(type));

  const user: sanitizedUser | null = await db.user.findUnique({
    where: { id: parseInt(id) },
    select: {
      email: true,
      displayName: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) return res.status(404).json(Responses.read.none_found(type));
  res.json(user);
});

/**
 * Gets the posts of a specific user if possible
 */
userRoute.get(`/:id/${types2}`, async (req, res) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) return res.status(400).json(Responses.invalid_id(type));

  const posts = await db.post.findMany({
    where: { userId: parseInt(id) },
    select: {
      author: { select: { displayName: true } },
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      published: true,
    },
  });

  if (!posts.length) return res.status(404).json(Responses.read.none_found(types2));

  res.json(posts);
});
//#endregion

//#region UPDATE

/**
 * Updatess a user, only works if logged in and user is themself
 */
userRoute.put('/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) return res.status(400).json(Responses.invalid_id(type));

  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0] });

  const user = await db.user.findUnique({ where: { id: parseInt(id) } });
  if (!user) return res.status(404).json(Responses.read.none_found(type));

  const { email } = req.user as sanitizedUser;
  if (user.email !== email) return res.status(403).json(Responses.no_permissions(Actions.update));

  db.user
    .update({
      where: { id: parseInt(id) },
      data: {
        email: req.body.email,
        password: req.body.password ? await argon2id.hash(req.body.password) : undefined,
        displayName: req.body.displayName,
      },
    })
    .then(post => res.status(200).json(post))
    .catch(_err => res.status(400).json(Responses.unable_to_perform(Actions.update, type)));
});
//#endregion

//#region DELETE

/**
 * Deletes a user, only works if logged in and user is themself
 * Also deletes all the posts, if cascade delete doesn't.
 */
userRoute.delete('/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) return res.status(400).json(Responses.invalid_id(type));

  const user = await db.user.findUnique({ where: { id: parseInt(id) } });
  if (!user) return res.status(404).json(Responses.read.none_found(type));

  const { email } = req.user as sanitizedUser;

  if (user.email !== email) return res.status(403).json(Responses.unable_to_perform(Actions.delete, type));

  db.user
    .delete({ where: { id: parseInt(id) } })
    .then(async (user: sanitizedUser) => {
      req.logout();
      await prisma.post.deleteMany({ where: { userId: null } });
      res.status(200).json(user);
    })
    .catch(_err => {
      console.log(_err);
      res.status(400).json();
    });
});
//#endregion

export default userRoute;