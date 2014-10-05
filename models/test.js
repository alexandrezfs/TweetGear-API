/**
 * Created by alexandrenguyen on 05/10/14.
 */
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('test', {
        testcol1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        testcol2: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};