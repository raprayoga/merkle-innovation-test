import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup, Input } from './index'
import { HomeIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    theme: 'red',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['red', 'default', 'green'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup>
      <Input {...args} placeholder="Placeholder here" className="pr-9" />
      <p className="absolute left-auto right-2 text-gray">Apply</p>
    </InputGroup>
  ),
}

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup>
      <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
      <Input {...args} placeholder="Placeholder here" className="pl-8" />
    </InputGroup>
  ),
}
