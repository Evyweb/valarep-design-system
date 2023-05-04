import {RegisterComponent} from "./register.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

export default {
  title: 'Register',
  component: RegisterComponent,
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
} as Meta<RegisterComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Registers = baseTemplate.bind({});
