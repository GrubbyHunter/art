const origin = 'http://111.67.206.67:21915'
module.exports = {
  register: `${origin}/student/register`,
  login: `${origin}/student/login`,
  logout: `${origin}/student/logout`,
  code: {
    error: 500,
    success: 200
  }
}
