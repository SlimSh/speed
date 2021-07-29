import React from 'react';
import {Link, graphql} from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import DefaultLayout from '../templates/default';
import ServicesModule from '../components/Services';
import services from '../mocks/services';
import Why from '../components/Why/Why';
import CallBack from '../components/Calback';
import LocationService from '../utils/locations';

const IndexPage = ({data, location}: any) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <ServicesModule services={services} />
      <Why list={data.datoCmsHome.why} />
      <CallBack />
      <Masonry className='showcase'>
        {data.allDatoCmsWork.edges.map(({node: work}: any) => (
          <div key={work.id} className='showcase__item'>
            <figure className='card'>
              <Link to={`/works/${work.slug}`} className='card__image'>
                <Img fluid={work.coverImage.fluid} />
              </Link>
              <figcaption className='card__caption'>
                <h6 className='card__title'>
                  <Link to={`/works/${work.slug}`}>{work.title}</Link>
                </h6>
                <div className='card__description'>
                  <p>{work.excerpt}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </Masonry>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
      why
    }
  }
`;
