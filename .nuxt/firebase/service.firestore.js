

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-firestore' */'firebase/compat/firestore')

  const firestoreService = session.firestore()

  return firestoreService
}
