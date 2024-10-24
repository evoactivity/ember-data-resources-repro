import Model, { attr, belongsTo } from '@ember-data/model';

export default class Programme extends Model {
  @attr()
  name;

  @attr()
  description;

  @belongsTo('channel', { async: false, inverse: 'programmes' })
  channel;

  @attr('date')
  startAt;

  @attr('date')
  endAt;

  @attr('date')
  createdAt;

  @attr('date')
  updatedAt;
}
