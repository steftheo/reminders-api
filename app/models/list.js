export default {
  tableName: `lists`,

  reminders() {
    return this.hasMany(`reminder`);
  }
}
