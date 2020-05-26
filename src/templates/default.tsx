import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {StaticQuery, graphql} from 'gatsby';
import {HelmetDatoCms} from 'gatsby-source-datocms';
import MyLink from '../components/UI/Link/index';
import LocationService from '../utils/locations';
const style = require('./style.scss');

import '../styles/index.sass';
import TopBlock from '../components/UI/Top';

const TemplateWrapper = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const {children} = props;
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery { 
          allDatoCmsWork(sort: {fields: [position], order: ASC}) {
            edges {
              node {
                id
                title
                slug
                excerpt
                coverImage {
                  fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress"}) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
            }
          }
          datoCmsHome {
            topBlock
            phone
            email
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
          allDatoCmsSocialProfile(sort: {fields: [position], order: ASC}) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? 'is-open' : ''}`}>
          <div className='container__mobile-header'>
            <div className='mobile-header'>
              <div className='mobile-header__logo'>
                <Link to='/'><img src={'https://www.datocms-assets.com/21753/1590090007-logo.png'} /></Link>
              </div>
              <div className='mobile-header__menu'>
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault();
                    setShowMenu(!showMenu);
                  }}
                />
              </div>
            </div>
          </div>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div
            className={`containter__top__slider containter__top__slider--${LocationService.getCssPrefix()}`}
          >
            <div className='container__sidebar'>
            <div className='close' onClick={() => setShowMenu(false)}></div>
              <div className='sidebar'>
                <div className='sidebar__top'>
                  <h6 className='sidebar__title'>
                    <Link to='/'>
                      <img src={'https://www.datocms-assets.com/21753/1590090007-logo.png'} />
                    </Link>
                  </h6>
                  <ul className='sidebar__menu'>
                    <li>
                      <Link to='/'>
                        <MyLink text={'Онлайн заказ'} />
                      </Link>
                    </li>
                    <li>
                      <Link to='/services'>
                        <MyLink text={'Услуги'} />
                      </Link>
                    </li>
                    <li>
                      <Link to='/master'>
                        <MyLink text={'Мастерская'} />
                      </Link>
                    </li>
                    <li>
                      <Link to='/contacts'>
                        <MyLink text={'Контакты'} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={style.menuContact}>
                  <div className={`${style.phone} ${style.item}`}>
                    <a href={`tel: ${data.datoCmsHome.phone}`}>
                    {data.datoCmsHome.phone}

                    </a>
                  </div>
                  <div className={`${style.email} ${style.item}`}>
                  <a href={`mailto: ${data.datoCmsHome.email}`}>
                    {data.datoCmsHome.email}

                    </a>
                  </div>
                  <div className='sidebar__social'>
                    {data.allDatoCmsSocialProfile.edges.map(({node: profile}: any) => (
                      <a
                        key={profile.profileType}
                        href={profile.url}
                        target='blank'
                        className={`social social--${profile.profileType.toLowerCase()}`}
                      >
                        {' '}
                      </a>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
            {LocationService?.location?.pathname === '/' && (
              <TopBlock text={data.datoCmsHome.topBlock} list={data.allDatoCmsWork.edges.map((item: any) => item.node)}/>
            )}
          </div>

          <div className='container__body'>{children}</div>
          <div className='footer'>
            {' '}
            <div
              className='sidebar__intro'
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html
              }}
            />
            <div className='sidebar__copyright'>{data.datoCmsHome.copyright}</div>
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
