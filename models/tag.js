/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag', {
    t_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    q_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'question',
        key: 'q_id'
      }
    },
    u_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'userInfo',
        key: 'u_id'
      }
    },
    t_data: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tag'
  });
};
