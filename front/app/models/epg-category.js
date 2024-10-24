import Model, { attr, hasMany } from '@ember-data/model';

export default class EpgCategory extends Model {
  @attr()
  name;

  @hasMany('channel', { async: false, inverse: 'categories' })
  channels;

  @attr('date')
  pinProtectedAt;

  @attr('date')
  createdAt;

  @attr('date')
  updatedAt;
}
