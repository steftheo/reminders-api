import {classify} from 'ember-cli-string-utils';
import Provider from 'candycane/dist/foundation/provider';
import bookshelf from 'bookshelf';

export default class KnexProvider extends Provider {
  register() {
    const db = this.app.make(`db`);

    const store = bookshelf(db);
    store.plugin(`registry`);

    this.app.pathsForNamespace(`models`).forEach((modelNode) => {
      const modelModule = require(modelNode.fullPath);
      const modelDefinition = modelModule.default || modelModule;

      store.model(modelNode.module, modelDefinition);
    });

    this.app.singleton(`store`, store);
  }
}
