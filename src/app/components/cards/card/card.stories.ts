import {CardComponent} from "./c.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import "@angular/forms";

export default {
  title: 'Cards/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: {
  }
} as Meta<CardComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});

