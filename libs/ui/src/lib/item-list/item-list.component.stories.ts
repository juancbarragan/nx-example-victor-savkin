import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ItemListComponent} from './item-list.component';

export default {
  title: 'ItemListComponent',
  component: ItemListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ItemListComponent>;

const Template: Story<ItemListComponent> = (args: ItemListComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  items: [{code: 'bl', description: 'mybl'}],
};
