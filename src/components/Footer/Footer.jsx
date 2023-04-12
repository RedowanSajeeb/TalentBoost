import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div className="bg-black">
        <dir className="text-white side-container grid md:grid-cols-5 gap-5 items-start md:pt-28 md:mt-20  grid-cols-1 ">
          <div>
            <div className="md:mt-0 mt-7">
              <Link
                to={"/"}
                as="a"
                href=""
                className="mr-4 flex font-style cursor-pointer font-bold text-xl"
              >
                <img
                  className="h-8 mb-5 me-2"
                  src="https://vectorise.net/logo/wp-content/uploads/2019/11/Logo-Boost-e-Wallet-app.png"
                  alt=""
                />
                <h1>TalentBoost</h1>
              </Link>
              <p className="mb-5 txt-color">
                TalentBoost connects talent with top employers for
                high-performing teams. Our solutions drive success for
                candidates and companies. Thank you for choosing TalentBoost.
              </p>
            </div>
            <div className="mb-1">
              <img
                src="https://lh3.googleusercontent.com/8Hdr_LPV2dp-TxTYW5A3Ix8eezIo3we7ZOGdu1tVQFSf0Xt0H7fc1hrR5GBG70e8R7DlA5vBnSofTM0E0hEu1Qi-2cwkCZgUR7GnhiA"
                alt=""
              />
            </div>
          </div>
          <div className="md:ms-10">
            <h1 className="text-2xl mb-5 ">Company</h1>
            <p className="mb-3 txt-color">About Us</p>
            <p className="mb-3 txt-color">Work</p>
            <p className="mb-3 txt-color">Latest News</p>
            <p className="mb-3 txt-color">Talent</p>
          </div>
          <div>
            <h1 className="text-2xl mb-5 ">Product</h1>
            <p className="mb-3 txt-color">Prototype</p>
            <p className="mb-3 txt-color">Plans & Pricing</p>
            <p className="mb-3 txt-color">Customers</p>
            <p className="mb-3 txt-color">Integrations</p>
          </div>
          <div>
            <h1 className="text-2xl mb-5 ">Support</h1>
            <p className="mb-3 txt-color">Help Desk</p>
            <p className="mb-3 txt-color">Sales</p>
            <p className="mb-3 txt-color">Become a Partner</p>
            <p className="mb-3 txt-color">Developers</p>
          </div>
          <dir>
            <h1 className="text-2xl mb-5 ">Contact</h1>
            <p className="mb-3 txt-color">524 Broadway , NYC</p>
            <p className="mb-3 txt-color">+1 777 - 978 - 5570</p> <hr />
          </dir>
        </dir>

        <hr className="pb-10 side-container  w-2/3 md:ms-60  txt-color" />
        <div className="txt-color ms-5 md:flex justify-between side-container md:ms-72 md:me-96  pb-14">
          <h4>
            @2023 <span className="font-semibold">TalentBoost</span> All Rights
            Reserved
          </h4>
          <p>
            Powered by <span className="font-semibold">TalentBoost</span>
          </p>
        </div>
      </div>
    );
};

export default Footer;