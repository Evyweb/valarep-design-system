import { LoginComponent } from "./login.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Login',
    component: LoginComponent,
    decorations: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
        ],
        args: {
        }
} as Meta<LoginComponent>;

const baseTemplate: Story = (args) => ({
    props: args,
});

export const Login = baseTemplate.bind({});