import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`list`)
export default class extends Action {
  data() {
    const id = this.request.params.id;
    const bookshelf = this.app.make(`store`);
    const List = bookshelf.model(`list`);

    return List.where({id}).fetch({withRelated: `reminders`});
  }

  after(list) {
    if (!list) {
      this.setStatus(404);
      return this.send({
        status: 404,
        message: `Resource not found`
      });
    }

    return list;
  }
}
