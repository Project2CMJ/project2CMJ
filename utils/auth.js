const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

// const withAdmin = async (req, res, next) => {
//   const userData =''
//   if (req.session.logged_in) {
  
    
//   } else {
//     next();
//   }
// };

module.exports = withAuth;
// module.exports = withAdmin;
