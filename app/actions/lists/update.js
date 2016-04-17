import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`list`)
export default class extends Action {
  data() {
  const bookshelf = this.app.make(`store`);
  const List = bookshelf.model(`list`);

  const id = this.request.params.id;

  return List.where({id}).fetch({withRelated: `reminders`});
}

after(list) {
  const title = this.request.body.data.attributes.title;

  if (!list) {
    this.setStatus(404);
    return this.send({
      status: 404,
      message: `Resource not found`
    });
  }

  list.set({ title });
  return list.save();
  }
}
