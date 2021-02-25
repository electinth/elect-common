import SocialSharer from '.';

customElements.define('social-sharer', SocialSharer);

const Template = ({ url, light, hideLabel, vertical }) => `
  <social-sharer
    url="${url}"
    ${light ? 'light' : ''}
    ${hideLabel ? 'hide-label' : ''}
    ${vertical ? 'vertical' : ''}
  />
`;

export default {
  title: 'Web Components/Social Sharer',
  argTypes: {
    url: { control: 'text' },
    light: { control: 'boolean' },
    hideLabel: { control: 'boolean' },
    vertical: { control: 'boolean' },
  },
  args: {
    url: 'https://elect.in.th',
    light: false,
    hideLabel: false,
    vertical: false,
  },
};

export const Default = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = { ...Default.args, vertical: true };