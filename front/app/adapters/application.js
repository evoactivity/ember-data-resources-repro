import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class Application extends JSONAPIAdapter {
  host = 'http://localhost:3000';
  namespace = '';
}
