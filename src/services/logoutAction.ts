//HOOKS
import Cookies from 'js-cookie'

export const logoutAction = () => {
  if (confirm('Deseja seguir com o logout?')) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
