var express = require("express");
var router = express.Router();
var userValidator = require("../app/UserComponent/user.validator");

// get all user
/**
 * @swagger
 * /users/getAllUser:
 *   get:
 *     description: Get All User
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/getAllUser", userValidator.getAllUser);

// get user by id - (params: [userInfoId]) - (userInfoId is required)
router.get("/getUserById/:userInfoId", userValidator.getUserById);

// add new user - (body: [name,address,dateOfBirth,mobileNumber]) - (name,address is required)
/**
 * @swagger
 * /users/addUser:
 *   post:
 *      requestBody:
 *          description: Add New User
 *          required: true
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                  type: object
 *                  properties:
 *                      name:          # <!--- form field name
 *                          type: string
 *                      address:       # <!--- form field name
 *                          type: string
 *                      dateOfBirth:    # <!--- form field name
 *                          type: string
 *                      mobileNumber:    # <!--- form field name
 *                          type: integer
 *                      required:
 *                          - name
 *                          - address
 *      responses:
 *          201:
 *             description: Created
 *
 */
router.post("/addUser", userValidator.addUser);

// update user - (body: [userInfoId,name,address,dateOfBirth,mobileNumber]) - (userInfoId is required)
router.put("/updateUser", userValidator.updateUser);

// delete user by id - (params: [userInfoId]) - (userInfoId is required)
router.delete("/deleteUserById/:userInfoId", userValidator.deleteUserById);

module.exports = router;
