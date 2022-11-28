exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      return res.json({
        statusCode: 433,
        message: "로그인 필요",
      });
    }
  };
  
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    return res.json({
      statusCode: 434,
      message: "이미 로그인 완료",
    });
  }
};
