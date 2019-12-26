module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: DataTypes.DATE
  });
  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreingnKey: "user_id" });
    Appointment.belongsTo(models.User, { foreingnKey: "provider_id" });
  };

  return Appointment;
};
