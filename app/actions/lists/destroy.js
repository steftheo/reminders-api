import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`list`)
export default class extends Action {
  data() {
    const id = this.request.params.id;
    const bookshelf = this.app.make(`store`);
    const List = bookshelf.model(`list`);

    return List.where({id}).fetch().then((list) => {
      if (list) {
        return list.destroy();
      }
    });
  }

  after() {
    this.setStatus(204);
    this.send();
  }
}
