import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`reminder`)
export default class extends Action {
  data() {
    const id = this.request.params.id;
    const bookshelf = this.app.make(`store`);
    const Reminder = bookshelf.model(`reminder`);

    return Reminder.where({id}).fetch({withRelated: `list`});
  }

  after(reminder) {
    if (!reminder) {
      this.setStatus(404);
      this.send({
        status: 404,
        message: `Resource not found`
      });
    }
  }
}
