import React from 'react';
import {graphql} from 'gatsby';
import {HelmetDatoCms} from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import DefaultLayout from '../templates/default';
import ServicesList from '../components/ServicesList';
import LocationService from '../utils/locations';
import CallBack from '../components/Calback';

const About = ({
  location,
  data: {allDatoCmsService: services, allDatoCmsProduct: products, datoCmsAboutPage: about}
}: any) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <ServicesList list={services.nodes} title={'Услуги'} theme={'dark'} />
      <CallBack />
      <ServicesList list={products.nodes} title={'Наша продукция'} theme={'light'} />
      <article className='sheet'>
        <HelmetDatoCms seo={about.seoMetaTags} />
        <div className='sheet__inner'>
          <h1 className='sheet__title'>{about.title}</h1>
          <p className='sheet__lead'>{about.subtitle}</p>
          <div className='sheet__gallery'>
            <Img fluid={about.photo.fluid} />
          </div>
          <div
            className='sheet__body'
            dangerouslySetInnerHTML={{
              __html: about.bioNode.childMarkdownRemark.html
            }}
          />
        </div>
      </article>
    </DefaultLayout>
  );
};

export default About;

export const query = graphql`
  query ServicesList {
    __typename
    allDatoCmsService(filter: {show: {eq: true}}) {
      nodes {
        id
        list
        title
        slug
        preview {
          url
        }
      }
    }
    allDatoCmsProduct(filter: {show: {eq: true}}) {
      nodes {
        id
        list
        title
        slug
        preview {
          url
        }
      }
    }
    datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: {fm: "jpg", auto: "compress"}) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
