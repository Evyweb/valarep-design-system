
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { SettingsComponent } from "./settings.component";

export default {
  title: 'Page/Settings',
  component: SettingsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: { }
} as Meta<SettingsComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});