
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { ButtonComponent } from "./button.component";



export default {
  title: 'Sign-in/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: { }
} as Meta<ButtonComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});