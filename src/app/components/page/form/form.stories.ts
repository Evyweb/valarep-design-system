
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { SignInFormComponent } from "./form.component";


export default {
  title: 'Page/Sign-in',
  component: SignInFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: { }
} as Meta<SignInFormComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});