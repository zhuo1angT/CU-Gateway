document.getElementById('loginfrm').setAttribute('method', 'get')
document.getElementById('username').value = 'CUAdmin'
document.getElementById('password').value = 'CUAdmin'
function submitFrm() {
  with(document.forms[0]) {
    if (password.value.length == 0) {
      alert('密码不得为空!');
      return;
    }
    if (password.value.length > 32) {
      alert('密码长度不得大于32!');
      return;
    }
  }
  document.getElementById('loginfrm').submit();
}
submitFrm()