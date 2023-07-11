import Twitter__icon from '../assets/Twitter.png';
import Facebook__icon from '../assets/Facebook.png';
import Linkedin__icon from '../assets/Linkedin.png';
import Shape__icon from '../assets/Shape.png';

export default {
  footerMenus: [
    {
      title: 'Company',
      items: ['About', 'Pricing', 'Jobs', 'Blog', 'Careers'],
    },
    {
      title: 'Product',
      items: [
        'Sales software',
        'Features',
        'Privacy and security',
        'Marketplace',
        'Status',
        'API',
      ],
    },
    {
      title: 'Discover',
      items: [
        'Partner Program',
        'Get our newsletter',
        'Sales Pipeline Course',
        'What is CRM?',
        'CRM Comparison',
        'Resources',
      ],
    },
    {
      title: 'Help Center',
      items: ['Community', 'Knowledge Base', 'Academy', 'Support'],
    },
  ],

  footerLinks: [
    { text: 'Terms of Service' },
    { text: 'Privacy Policy' },
    { text: 'Cookie' },
  ],

  footerIcons: [
    {
      iconSrc: Twitter__icon,
      altText: 'Here is a logo of Twitter',
      href: 'https://twitter.com/',
    },
    {
      iconSrc: Facebook__icon,
      altText: 'Here is a logo of Facebook',
      href: 'https://www.facebook.com/',
    },
    {
      iconSrc: Linkedin__icon,
      altText: 'Here is a logo of LinkedIn',
      href: 'https://www.linkedin.com/',
    },
  ],
  ShapeIcon: { iconSrc: Shape__icon },
};
