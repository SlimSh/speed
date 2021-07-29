import React from 'react';
import Slider from 'react-slick';
import {HelmetDatoCms} from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import DefaultLayout from '../templates/default';
import Post from '../pages/post';
import LocationService from '../utils/locations';

export default ({data, location}) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <article>
        <HelmetDatoCms seo={data.datoCmsService.seoMetaTags} />
        <Post {...data.datoCmsService} />
      </article>
    </DefaultLayout>
  );
};

export const query = graphql`
  query Service($slug: String!) {
    datoCmsService(slug: {eq: $slug}) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content
      description
      id
      list
      locale
      originalId
      title
      teg
      slug
      preview {
        filename
        size
        url
      }
      show
      galery {
        filename
        size
        url
      }
    }
  }
`;
