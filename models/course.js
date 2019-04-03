/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course', {
    c_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_infor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    u_id: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      references: {
        model: 'userInfo',
        key: 'u_id'
      }
    }
  }, {
    tableName: 'course'
  });
};
