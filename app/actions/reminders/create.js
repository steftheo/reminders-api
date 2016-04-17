import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`reminder`)
export default class extends Action {
  data() {
    const bookshelf = this.app.make(`store`);
    const Reminder = bookshelf.model(`reminder`);
    const name = this.request.body.data.attributes.name;
    const done = this.request.body.data.attributes.done;
    const list_id = this.request.body.data.relationships.list.data.id;

    const reminder = new Reminder({ name, done, list_id });
    return reminder.save();
  }
}
