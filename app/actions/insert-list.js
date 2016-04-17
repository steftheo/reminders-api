import Action from 'candycane/dist/http/action';

export default class extends Action {
  data() {
    const title = this.request.body.title;
    const knex = this.app.make(`db`);

    return knex(`lists`).insert({title}).then((ids) => {
      return {
        message: `Create successful`,
        ids,
      };
    });
  }
}
