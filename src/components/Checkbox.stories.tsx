import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text asChild size="sm">
            <label htmlFor="c1">Lembrar de mim por 30 dias</label>
          </Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}