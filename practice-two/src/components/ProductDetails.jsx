import React from 'react';

// Components
import { CardImage } from './common/Card';
import Link from './common/Link';

const ProductDetails = () => (
  <div className=" min-h-screen flex justify-center items-center">
    <div className="box bg-white rounded-2xl shadow-md p-10 m-2 w-96 grid grid-cols-2 grid-rows-auto md:w-3/4 md:grid-cols-1 md:grid-rows-auto md:m-0">
      <div className="images grid grid-cols-3 grid-rows-auto gap-3">
        <div className="img-holder active col-span-3">
          <CardImage alt="This is a picture of the card-image" />
        </div>
        <div className="img-holder">
          <CardImage alt="This is a picture of the card-image" />
        </div>
        <div className="img-holder">
          <CardImage alt="This is a picture of the card-image" />
        </div>
        <div className="img-holder">
          <CardImage alt="This is a picture of the card-image" />
        </div>
      </div>
      <div className="basic-info flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Headphone</h3>
        <div className="rate text-yellow-500">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
        </div>
        <span className="font-bold text-2xl">$250</span>
        <div className="options">
          <Link
            href="/products-card-ddetails"
            className="text-red bg-secondary py-2 px-4 rounded font-semibold text-sm"
            underline={false}
            size="xl"
          >
            Buy It Now
          </Link>
          <a href="/" className="text-white bg-secondary py-2 px-4 rounded font-semibold text-sm">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="description flex flex-col gap-6">
        <p className="text-gray-500 text-sm leading-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis
          repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium
          deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque,
          fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.
        </p>
        <ul className="features flex flex-col gap-2 text-gray-500">
          <li>
            <i className="fa-solid fa-circle-check mr-1 text-tertiary-color" />
            Supported Feature
          </li>
          <li>
            <i className="fa-solid fa-circle-check mr-1 text-tertiary-color" />
            Supported Feature
          </li>
          <li>
            <i className="fa-solid fa-circle-check mr-1 text-tertiary-color" />
            Supported Feature
          </li>
          <li>
            <i className="fa-solid fa-circle-xmark mr-1 text-yellow-color" />
            Unsupported Feature
          </li>
          <li>
            <i className="fa-solid fa-circle-xmark mr-1 text-yellow-color" />
            Unsupported Feature
          </li>
        </ul>
        <ul className="social flex">
          <li>
            <a href="/" className="text-gray-500">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-500">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-500">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProductDetails;
