import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`list`)
export default class extends Action {
  data() {
    const bookshelf = this.app.make(`store`);
    const List = bookshelf.model(`list`);
    const title = this.request.body.data.attributes.title;


    const list = new List({title});
    return list.save();
  }
}
