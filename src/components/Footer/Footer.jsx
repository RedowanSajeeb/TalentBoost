import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div className="bg-black">
        <dir className="text-white side-container grid md:grid-cols-5 gap-5 md:pt-24 md:pb-10 grid-cols-1 ">
          <div>
            <div className="">
              <Link
                to={"/"}
                as="a"
                href=""
                className="mr-4 flex font-style cursor-pointer py-1.5 font-bold text-xl"
              >
                <img
                  className="h-8 me-2"
                  src="https://vectorise.net/logo/wp-content/uploads/2019/11/Logo-Boost-e-Wallet-app.png"
                  alt=""
                />
                <h1>TalentBoost</h1>
              </Link>
              <p>
                TalentBoost connects talent with top employers for
                high-performing teams. Our solutions drive success for
                candidates and companies. Thank you for choosing TalentBoost.
              </p>
            </div>
            <div>
              <img
                src="https://lh3.googleusercontent.com/8Hdr_LPV2dp-TxTYW5A3Ix8eezIo3we7ZOGdu1tVQFSf0Xt0H7fc1hrR5GBG70e8R7DlA5vBnSofTM0E0hEu1Qi-2cwkCZgUR7GnhiA"
                alt=""
              />
            </div>
          </div>
          <div className="md:ms-10">
            <h1>Company</h1>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Talent</p>
          </div>
          <div>
            <h1>Product</h1>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
          <div>
            <h1>Support</h1>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
          <dir>
            <h1>Contact</h1>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </dir>
        </dir>
      </div>
    );
};

export default Footer;