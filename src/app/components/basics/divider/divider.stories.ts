
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { DividerComponent } from "./divider.component";

export default {
  title: 'Sign-in/Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: { }
} as Meta<DividerComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});