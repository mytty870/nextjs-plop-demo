import type { Meta, StoryObj } from '@storybook/react'
import { Comments } from './Comments'

const meta = {
  title: 'Comments',
  component: Comments,
} satisfies Meta<typeof Comments>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
    </>
  ),
}