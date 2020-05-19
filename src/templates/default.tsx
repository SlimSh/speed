import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import MyLink from "../components/UI/Link/index";

import "../styles/index.sass";
import TopBlock from "../components/UI/Top";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsHome {
            topBlock
          }
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <div className="container__mobile-header">
            <div className="mobile-header">
              <div className="mobile-header__menu">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMenu(!showMenu);
                  }}
                />
              </div>
              <div className="mobile-header__logo">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
              </div>
            </div>
          </div>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div className={`containter__top__slider containter__top__slider--${location.pathname.split('/')[1] || 'index'}`}>
            <div className="container__sidebar">
              <div className="sidebar">
                <div className="sidebar__top">
                  <h6 className="sidebar__title">
                    <Link to="/">
                      <img src={"/static/images/logo.png"} />
                    </Link>
                  </h6>
                  <ul className="sidebar__menu">
                    <li>
                      <Link to="/">
                        <MyLink text={"Онлайн заказ"} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <MyLink text={"Услуги"} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/master">
                        <MyLink text={"Мастерская"} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/contacts">
                        <MyLink text={"Контакты"} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="sidebar__social">
                  {data.allDatoCmsSocialProfile.edges.map(
                    ({ node: profile }) => (
                      <a
                        key={profile.profileType}
                        href={profile.url}
                        target="blank"
                        className={`social social--${profile.profileType.toLowerCase()}`}
                      >
                        {" "}
                      </a>
                    )
                  )}
                </p>
              </div>
            </div>
            {location.pathname === '/' && <TopBlock text={data.datoCmsHome.topBlock} />}
          </div>

          <div className="container__body">{children}</div>
          <div className="footer">
            {" "}
            <div
              className="sidebar__intro"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <div className="sidebar__copyright">
              {data.datoCmsHome.copyright}
            </div>
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
