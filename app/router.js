import Router from 'candycane/dist/http/router';

export default class AppRouter extends Router {
  /**
   * Here is the function that will allow you to register the routes for your application.
   * Use the `resource`, `get`, `post`, `put`, and `delete` methods to describe your API
   *
   * @return undefined
   */
  registerRoutes() {
    this.get(`/`, `version`);

    this.post(`/info`, `info`);

    this.post(`/insert`, `insert-list`);
    this.get(`/lists`, 'lists/index');

    this.get(`/lists/:id`, `lists/show`);

    this.delete(`/lists/:id`, `lists/destroy`);

    this.post(`/lists`, `lists/create`);

    this.patch(`/lists/:id`, `lists/update`);
    this.put(`/lists/:id`, `lists/update`);

    this.post(`/reminders`, `reminders/create`);

    this.get(`/reminders`, 'reminders/index');
    this.post(`/reminders`, 'reminders/create');
    this.get(`/reminders/:id`, 'reminders/show');
    this.patch(`/reminders/:id`, 'reminders/update');
    this.delete(`/reminders/:id`, 'reminders/destroy');
  }
}
