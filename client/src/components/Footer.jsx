import { Footer, FooterCopyright } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <div>
      <Footer container className="border border-t-8 border-teal-500 ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex  md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  THEEBAN'S
                </span>
                BLOG
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 p-5 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Hub
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FaceBook
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/Theebanm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms &amp; Comditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex  sm:items-center sm:justify-between">
            <FooterCopyright
              href="#"
              by="Theeban's blog"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="" icon={BsFacebook} />
              <Footer.Icon href="" icon={BsInstagram} />
              <Footer.Icon href="" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/Theebanm" icon={BsGithub} />
              <Footer.Icon href="" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
