import {addToTargetAfterHooks} from 'candycane/dist/decorators/action-hook-helpers';
import Mapper from 'jsonapi-mapper';

export default function jsonApiMapper(type) {
  return function (target) {
    addToTargetAfterHooks(target, function(data) {
      let url = `${this.request.protocol}://${this.request.hostname}`;

      const mapper = new Mapper.Bookshelf(url);

      return mapper.map(data, type);
    });
  };
}
