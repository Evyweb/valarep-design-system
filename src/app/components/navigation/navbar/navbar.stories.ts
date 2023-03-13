import {NavbarComponent} from "./navbar.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import "@angular/forms";

export default {
  title: 'Navigation/Navbar',
  component: NavbarComponent,
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
} as Meta<NavbarComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});

