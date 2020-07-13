module.exports = {
  home: (req, res) => {
    res.render('pages/homepage', { pageName: 'Home' });
  },
  documentation: (req, res) => {
    res.render('pages/documentation');
  },
  signup: (req, res) => {
    res.render('pages/signup');
  },
  signIn: (req, res) => {
    res.render('pages/sign-in');
  },
  blog: (req, res) => {
    res.render('pages/blog');
  },
  blogpost: (req, res) => {
    res.render('pages/blogpost');
  },
};
