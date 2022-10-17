export default function ({ store, redirect }) {
    const { auth } = store.state
    const permissions = auth.payload.permissions
    if (
      !auth.payload ||
      !permissions.includes('admin')
    ) {
      return redirect('/not-permited')
    }
  }