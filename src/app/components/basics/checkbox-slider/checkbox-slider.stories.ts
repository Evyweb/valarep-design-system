import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { CheckboxSliderComponent } from "./checkbox-slider.component";

export default {
  title: 'Basics/Checkbox slider',
  component: CheckboxSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: { }
} as Meta<CheckboxSliderComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});