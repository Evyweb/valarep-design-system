import {DashboardComponent} from "./dashboard.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

export default {
  title: 'Dashboard',
  component: DashboardComponent,
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
} as Meta<DashboardComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Dashboards = baseTemplate.bind({});

