/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userInfo', {
    u_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    u_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    u_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'http://ww1.sinaimg.cn/large/007wLihkgy1g0xhh1aa66j309g09gt8q.jpg'
    }
  }, {
    tableName: 'userInfo'
  });
};
