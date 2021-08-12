export default function ({store, redirect}) {
  if (store.state.user.user.phone == null) {
    console.log(store.state.user.user.phone)
    return redirect('/users/login/register')
  }
}
