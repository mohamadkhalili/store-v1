export default ({store, redirect}) => {
  if (store.state.user.user.id) {
    redirect({name: 'index'}) // or redirect('/')
  }
}
