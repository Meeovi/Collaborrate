export default function ({ store, redirect, route }) {
    const { auth } = store.state
    if (auth.publicPages.length > 0 && !auth.publicPages.includes(route.name) && !auth.payload) {
      return redirect('/login')
    } else if (auth.publicPages.length > 0 && auth.publicPages.includes(route.name) && auth.payload) {
      return redirect('/feed')
    }
  }