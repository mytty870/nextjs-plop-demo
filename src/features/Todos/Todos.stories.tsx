import type { Meta, StoryObj } from '@storybook/react'
import { Todos } from './Todos'

const meta = {
  title: 'Todos',
  component: Todos,
} satisfies Meta<typeof Todos>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
    </>
  ),
}