import React from "react";
import Slider from "react-slick";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import DefaultLayout from "../templates/default";
import LocationService from "../utils/locations";

export default ({ data, location }) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <article className="sheet">
        <HelmetDatoCms seo={data.datoCmsService.seoMetaTags} />
        <h1>{data.title}</h1>
      </article>
    </DefaultLayout>
  );
};

export const query = graphql`
  query Service($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
    }
  }
`;
