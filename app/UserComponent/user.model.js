const userUtility = require("./user.utility");

const connection = require("../../config/database");

exports.getAllUser = function (result) {
  let sqlQuery = `select * from userinfo;`;
  connection.query(sqlQuery, function (error, resultOfQuery) {
    if (error) {
      result(error, null);
    } else {
      result(null, resultOfQuery.rows);
    }
  });
};

exports.getUserById = function (req, result) {
  let sqlQuery = `select userinfoid,name,address,mobilenumber,
    dateofbirth from userinfo where userinfoid = ${req.params.userInfoId};`;
  connection.query(sqlQuery, function (error, resultOfQuery) {
    if (error) {
      result(error, null);
    } else {
      result(null, resultOfQuery.rows);
    }
  });
};

exports.addUser = function (req, result) {
  let sqlQuery = `insert into userinfo(name,address,dateofbirth,mobilenumber) values
    ('${req.body.name}','${req.body.address}','${req.body.dateofbirth}',${req.body.mobilenumber});`;
  connection.query(sqlQuery, function (error, records) {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      let resultAddUser = { message: "UserInfo Inserted Successfully" };
      result(null, resultAddUser);
    }
  });
};

exports.updateUser = function (req, result) {
  let sqlQuery = `select count(*) as count from userinfo where userinfoid=${req.body.userinfoid};`;

  connection.query(sqlQuery, function (error, recordsArray, fields) {
    if (error) {
      console.log("Error occured while fetching the data !");
    } else {
      if (recordsArray.rows[0].count == 0) {
        // console.log(recordsArray.rows[0].count)
        let resultDeleteUser = { message: "User not found" };
        result(null, resultDeleteUser);
      } else {
        userUtility.updateUser(req, result);
      }
    }
  });
};

exports.deleteUserById = function (req, result) {
  let sqlQuery = `select count(*) as count from userinfo where userinfoid=${req.params.userInfoId}`;

  connection.query(sqlQuery, function (error, recordsArray, fields) {
    if (error) {
      console.log("Error occured while fetching the data !");
    } else {
      if (recordsArray.rows[0].count == 0) {
        // console.log(recordsArray.rows[0].count)
        let resultDeleteUser = { message: "User not found" };
        result(null, resultDeleteUser);
      } else {
        userUtility.deleteUserById(req, result);
      }
    }
  });
};
