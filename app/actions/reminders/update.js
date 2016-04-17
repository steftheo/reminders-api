import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`reminder`)
export default class extends Action {
  data() {
    const bookshelf = this.app.make(`store`);
    const Reminder = bookshelf.model(`reminder`);

    const id = this.request.params.id;

    return Reminder.where({id}).fetch({withRelated: `reminders`});
  }

  after(reminder) {
    const name = this.request.body.data.attributes.name;
    const done = this.request.body.data.attributes.done;
    const list_id = this.request.body.data.relationships.list.data.id;

    if (!reminder) {
      this.setStatus(404);
      return this.send({
        status: 404,
        message: `Resource not found`
      });
    }

    reminder.set({ name, done, list_id });
    return reminder.save();
  }
}
