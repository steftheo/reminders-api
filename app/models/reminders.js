export default {
  tableName: `reminders`,

  list() {
    return this.belongsTo(`list`);
  }
}
