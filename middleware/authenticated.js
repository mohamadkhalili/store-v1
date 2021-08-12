export default function ({store, redirect}) {
  if (store.state.user.user.phone == '') {
    console.log(store.state.user.user.phone)
    return redirect('/users/login/register')
  }
}
