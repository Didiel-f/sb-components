import { ComponentStory, Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel"


export default {
    title: 'UI/MyLabel',
    tags: ['autodocs'],
    component: MyLabel,
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary', 'tertiary']}
    }
} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const customFontColor = Template.bind({});
customFontColor.args = {
    size: 'h1',
    fontColor: 'tertiary'
}

export const customBackgroundColor = Template.bind({});
customFontColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
}