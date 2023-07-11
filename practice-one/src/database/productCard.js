// Import images link
import service__img from '../assets/service__img.png';
import product__item1 from '../assets/product__item1.png';
import product__item2 from '../assets/product__item2.png';
import product__item3 from '../assets/product__item3.png';
import product__item4 from '../assets/product__item4.png';
import product__item5 from '../assets/product__item5.png';
import product__item6 from '../assets/product__item6.png';
import marketing__img from '../assets/marketing__img.png';
import article__img1 from '../assets/article__img1.png';
import article__img2 from '../assets/article__img2.png';
import article__img3 from '../assets/article__img3.png';

export default {
  services: [
    {
      id: 1,
      imgSrc: service__img,
      headerText: 'service',
      title: 'CRM insights: Selecting the Right One for Your Organization',
      date: '05 Sep 2022',
      author: 'by Joshua Nash',
    },
  ],
  products: [
    {
      id: 1,
      imgSrc: product__item1,
      headerText: 'New',
      title: 'How To Deliver a Successful Product Launch',
      date: '29 Jun 2022',
      author: 'by Joshua Nash',
    },
    {
      id: 2,
      imgSrc: product__item2,
      headerText: 'Sales',
      title: 'The best cities for sales careers in 2022',
      date: '20 Mar 2022',
      author: 'by Bill Holloway',
    },
    {
      id: 3,
      imgSrc: product__item3,
      headerText: 'Sales',
      title: 'How to use 360 feedback to improve sales performance',
      date: '07 Jun 2022',
      author: 'by Stephen Henderson',
    },
    {
      id: 4,
      imgSrc: product__item4,
      headerText: 'sales',
      title: 'The Challenger Sale model: How to lead the conversation',
      date: '09 Jan 2022',
      author: 'by joshua Nash',
    },
    {
      id: 5,
      imgSrc: product__item5,
      headerText: 'products',
      title: '3 ways To automate your lead generation process with Yoora',
      date: '08 Jul 2022',
      author: 'Leroy Figueroa',
    },
    {
      id: 6,
      imgSrc: product__item6,
      headerText: 'products',
      title: 'Marketplace Monthly Apps Spotlight: Aug 2022',
      date: '05 Aug 2022',
      author: 'by joshua Nash',
    },
  ],
  marketing: {
    imgSrc: marketing__img,
    headerText: 'marketing',
    title: 'Email marketing best practices: 10 experts share their email tips',
    date: '23 Nov 2022',
    author: 'by Joshua Nash',
  },
  horizontalCards: [
    {
      id: 1,
      headerText: 'products',
      title: 'Access Yoora’s leads features on your mobile',
      date: '11 Aug 2022',
      author: 'by Joshua Nash',
    },
    {
      id: 2,
      headerText: 'sales',
      title: 'Sales presentations: templates, examples and ideas on how to present like a pro',
      date: '11 Oct 2022',
      author: 'by Laura Ryan',
    },
    {
      id: 3,
      headerText: 'news',
      title: 'How To Deliver a Successful Product Launch',
      date: '30 Jan 2022',
      author: 'by Alice Washington',
    },
  ],
  blogArticles: [
    {
      id: 1,
      imgSrc: article__img1,
      headerText: 'service',
      title: 'Sales Funnels: Definition, Process, Stages and Examples',
      date: '29 Jun 2022',
      author: 'by Joshua Nash',
    },
    {
      id: 2,
      imgSrc: article__img2,
      headerText: 'sales',
      title: 'What is a sales Yoora and how do you build one?',
      date: '29 Mar 2022',
      author: 'by Amanda Brooks',
    },
    {
      id: 3,
      imgSrc: article__img3,
      headerText: 'service',
      title: '10 real estate cold calling scripts to increase lead generation',
      date: '27 Dec 2022',
      author: 'by Roxie Sandoval',
    },
  ],
};
