<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import NavigationBar from './navbar.wc.svelte';
</script>

<Meta
  title="Components/navbar"
  component={NavigationBar}
  argTypes={{
    titleText: { control: 'text' },
    dark: { control: 'boolean' },
    logoUrl: { control: 'text' },
    showSlotInNewRowOnMobile: { control: 'boolean' },
  }}
/>

<Template let:args>
  <NavigationBar {...args}
    ><div class="text-gray-500">slot rendered here!</div></NavigationBar
  >
</Template>

<Story name="Default" />

<Story
  name="With Title"
  args={{
    titleText: 'CIVIL MOVEMENT 2020',
  }}
/>

<Story
  name="Custom Logo"
  args={{
    logoUrl: 'https://via.placeholder.com/100x20',
  }}
/>
