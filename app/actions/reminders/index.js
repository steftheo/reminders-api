import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`reminder`)
export default class extends Action {
  data() {
    const bookshelf = this.app.make(`store`);
    const Reminder = bookshelf.model(`reminder`);

    return Reminder.fetchAll({withRelated: `list`});
  }
}
