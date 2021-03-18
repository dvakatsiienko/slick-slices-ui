/* Core */
import { useState, useEffect } from 'react';
import wait                    from 'waait';

/* Instruments */
import { gql } from './gql';

export const useLatestData = () => {
    const [ hotSlices, setHotSlices ] = useState();
    const [ slicemasters, setSlicemasters ] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch(process.env.GATSBY_GRAPHQL_URL, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: gql`
                        query {
                            StoreSettings(id: "downtown") {
                                name
                                slicemaster {
                                    ${deets}
                                }
                                hotSlices {
                                    ${deets}
                                }
                            }
                        }

                    `,
                }),
            });
            const result = await response.json();

            await wait(2000);

            setHotSlices(result.data.StoreSettings.hotSlices);
            setSlicemasters(result.data.StoreSettings.slicemaster);
        })();
    }, []);

    return { hotSlices, slicemasters };
};

/* Helpers */
const deets = gql`
    _id
    name
    image {
        asset {
            url
            metadata {
                lqip
            }
        }
    }
`;
