const connection = require("../../config/database");

exports.deleteUserById = function (req, result) {
  let sqlQuery = `delete from userinfo where userinfoid = ${req.params.userInfoId}`;
  connection.query(sqlQuery, function (error, records) {
    if (error) {
      result(error, null);
    } else {
      let resultDeleteUserById = { message: "UserInfo Deleted Successfully" };
      result(null, resultDeleteUserById);
    }
  });
};

exports.updateUser = function (req, result) {
  let sqlQuery = `update userinfo
    set name = '${req.body.name}',address='${req.body.address}',mobilenumber='${req.params.mobilenumber}'   
    WHERE userinfoid = ${req.body.userinfoid}
    `;
  connection.query(sqlQuery, function (error, records) {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      let resultUpdateUser = { message: "UserInfo Updated Successfully" };
      result(null, resultUpdateUser);
    }
  });
};
