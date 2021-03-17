/* Core */
import React                       from 'react';
import { Helmet }                  from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO: React.FC<SEOProps> = props => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        twitter
                    }
                }
            }
        `,
    );

    return (
        <Helmet titleTemplate = { `%s - ${site.siteMetadata.title}` }>
            <html lang = 'en' />

            <title>{props.title}</title>

            <link href = '/favicon.svg' rel = 'icon' type = 'image/svg+xml' />
            <link href = '/favicon.ico' rel = 'alternate icon' />

            <meta charSet = 'utf-8' />
            <meta
                content = 'width=device-width,initial-scale=1.0'
                name = 'viewport'
            />
            <meta content = { site.siteMetadata.description } name = 'description' />

            {/* Open Graph meta tags */}
            {/* They are intended for proper displaying of sharing content to social media */}
            {/* For example to facebook. */}
            {location && <meta content = { location.href } property = 'og:url' />}
            <meta content = { props.image || '/logo.svg' } property = 'og:image' />
            <meta content = { props.title } key = 'ogtitle' property = 'og:title' />
            <meta
                content = { site.siteMetadata.title }
                key = 'ogsitename'
                property = 'og:site_name'
            />
            <meta
                content = { props.description }
                key = 'ogdesc'
                property = 'og:description'
            />
            {props.children}
        </Helmet>
    );
};

/* Types */
interface SEOProps {
    title: string;
    description?: string;
    location?: string;
    image?: string;
}
