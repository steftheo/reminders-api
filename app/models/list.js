export default {
  tableName: `lists`,

  reminders() {
    return this.hasMany(`reminder`);
  }
}

export default {
  tableName: `reminders`,

  list() {
    return this.belongsTo(`list`);
  }
}
