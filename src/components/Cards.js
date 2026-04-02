const Cards = (props) => {
   /* const obj ={
                    "type": "restaurant",
                    "info": {
                        "resId": 20872136,
                        "name": "Sector 144",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/22a896dcd9612f493ee0e9558883eec3_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/22a896dcd9612f493ee0e9558883eec3_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/a54fd329a5a9ef3b047b4465467c8778_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.2",
                            "rating_text": "4.2",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "2,371",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.4",
                                    "reviewCount": "2,348",
                                    "reviewTextSmall": "2,348 Reviews",
                                    "subtext": "2,348 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.4",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "4.0",
                                    "reviewCount": "23",
                                    "reviewTextSmall": "23 Reviews",
                                    "subtext": "23 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "4.0",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b92,000 for two"
                        },
                        "cfo": {
                            "text": "\u20b9800 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "4\/152\/4, Rebus Realm 2, Neeladri Nagar Road, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 57 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQ4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/indian\/",
                                "name": "Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/oriental\/",
                                "name": "Oriental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                                "name": "Pizza"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b92,000 for two"
                        }
                    },
                    "order": [],
                    "gold": [],
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/sector-144-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.8 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9584670\",\"bzone\":\"0\",\"campaign_id\":\"18561567\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20872136\",\"isNewAd\":\"34\",\"ad_position\":\"1\",\"slider_position\":\"1\",\"slider_sequence\":\"1\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.039948\\\",\\\"cost_for_two_ctr\\\":\\\"0.111042\\\",\\\"distance\\\":\\\"3.545307159423828\\\",\\\"organic_ctr\\\":\\\"0.083986\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"331\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.45194442682230535\\\",\\\"cost_for_two_ctr\\\":\\\"1\\\",\\\"cost_per_unit\\\":\\\"1\\\",\\\"distance\\\":\\\"0.2831804878401898\\\",\\\"organic_ctr\\\":\\\"1\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.5566360984119816,\\\"original_rank\\\":11,\\\"boosted_rank\\\":1}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                }; */
                console.log(props);
    const  {image, name, rating, cuisine, locality, timing } = props.restaurantsDetails.info;
                
    return (
        <div className="cards">
            <img src={image.url} />
            <div className="row-card">
                <span className="name">{name}</span>
                <span className="rating">{rating.aggregate_rating} <i className="sc-rbbb40-1 iFnyeo" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.8rem" height="0.8rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i></span>
            </div>
            <div className="row-card">
                <span className="threedot" width="99%">{cuisine.map(data=>data.name).join(', ')}</span>
            </div>
            <div className="row-card">
                <span>{locality.name}</span>
                <span>{rating.aggregate_rating}</span>
            </div>
            <div className="row-card">
                <span>{timing.text}</span>
                <span>{props.restaurantsDetails.distance}</span>
            </div>
        </div>
    );
}

export default Cards;