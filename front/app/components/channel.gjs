import Component from '@glimmer/component';
import { findRecord } from 'ember-data-resources';

export default class ChannelCard extends Component {
  request = findRecord(this, 'channel', () => [
    this.args.channelId,
    {
      include: 'categories,programmes',
    },
  ]);

  <template>
    isLoading:
    {{this.request.isLoading}}<br />
    isSuccess:
    {{this.request.isSuccess}}<br />
    hasRan:
    {{this.request.hasRan}}<br />
    isError:
    {{this.request.isError}}<br />

    <br /><br />

    {{#each this.request.record.programmes as |programme|}}
      <div>{{programme.name}}</div>
    {{/each}}
  </template>
}
