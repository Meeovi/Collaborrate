

export default async function (session, firebase, ctx, inject) {
  await import(/* webpackChunkName: 'firebase-auth' */'firebase/compat/auth')

  const authService = session.auth()

  return authService
}
