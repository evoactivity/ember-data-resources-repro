import Model, { attr, hasMany } from '@ember-data/model';

export default class Channel extends Model {
  @attr()
  name;

  @attr()
  number;

  @attr()
  epgId;

  @attr()
  logo;

  @hasMany('epg-category', { async: false, inverse: 'channels' })
  categories;

  @hasMany('programme', { async: false, inverse: 'channel' })
  programmes;

  @attr('date')
  disabledAt;

  @attr('date')
  pinProtectedAt;

  @attr('date')
  createdAt;

  @attr('date')
  updatedAt;
}
