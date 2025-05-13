import {
  CREATE_BUSINESS_ENQUIRY,
  GET_GLOBAL_CONFIG_DATA,
  GET_HEADER_DATA,
  GET_HEADER_NAVIGATION,
  GET_HOMEPAGE_DATA,
  GET_SERVICES_BY_PARENT_DATA,
  GET_SERVICE_INFO,
  GET_SUB_SERVICE_INFO,
  GET_COOKIE_POLICY_CONTENT,
  GET_PRIVACY_POLICY_CONTENT,
  GET_FOOTER_DATA,
  GET_HEADER_NESTED_NAVIGATION,
  GET_CASE_STUDY_PAGE_DATA,
  GET_TOTAL_CASESTUDIES,
  GET_CAREER_PAGE_INFO,
  GET_NEWS_AND_INSIGHT_PAGE,
  GET_TOTAL_NEWSINSIGHTS,
  GET_ABOUT_US_DATA,
  GET_CONTACT_US_DATA,
  GET_CASE_STUDY_DETAILS,
  GET_NEWS_AND_INSIGHT_DETAILS,
  CREATE_RESUME_SUBMISSION,
  UPLOAD_RESUME,
  GET_ALL_NEWSINSIGHTS,
  GET_ALL_CASE_STUDIES,
  GET_AWARDS_PAGE,
  GET_CLIENT_PAGE,
  GET_ALL_AWARDS,
  GET_BLOG_DETAILS,
  GET_BLOG_PAGE_DATA,
  GET_TOTAL_BLOGS,
  GET_TOTAL_BLOG_LIST,
  GET_ALL_NEWSUPDATES,
  GET_NEWS_AND_UPDATE_PAGE,
  GET_TOTAL_NEWSUPDATES,
} from "./queries";
import xml2js from "xml2js";
import {client, clientWithoutAuth, clientWithUpload} from "../lib/apolloClient";

export const getGlobalConfigData = async () => {
  try {
    let { data } = await client.query({
      query: GET_GLOBAL_CONFIG_DATA,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    console.error("Failed to fetch global config data:", e);
  }
};

// export const getHeaderData = async () => {
//   try {
//     const data = await client.request(GET_HEADER_DATA);
//     return data.header.data;
//   } catch (e) {
//     console.error("Failed to fetch header data:", e);
//   }
// };
export const getHeaderDataApolloClient = async () => {
  try {
    let { data } = await client.query({
      query: GET_HEADER_DATA,

      fetchPolicy: "network-only",

      context: {
        fetchOptions: {
          next: { revalidate: 5 },

          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.header.data;
  } catch (e) {
    console.log(e);
  }
};

// export const getHomePageData = async () => {
//   try {
//     const data = await client.request(GET_HOMEPAGE_DATA);
//     return data.homePage.data.attributes;
//   } catch (e) {
//     console.error("Failed to fetch homepage data:", e);
//   }
// };

export const getHomePageDataApolloClient = async () => {
  try {
    let { data } = await client.query({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.homePage.data.attributes;
  } catch (e) {
    console.log(e);
  }
};

// export const getFooterData = async () => {
//   try {
//     const data = await client.request(GET_FOOTER_DATA);
//     return data;
//   } catch (e) {
//     console.error("Failed to fetch footer data:", e);
//   }
// };

export const getFooterDataApolloClient = async () => {
  try {
    let { data } = await client.query({
      query: GET_FOOTER_DATA,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    console.log(e);
    console.log(e);
  }
};

export const getHeaderNavigationData = async () => {
  try {
    let { data } = await client.query({
      query: GET_HEADER_NAVIGATION,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    // console.log(e.networkError.result);
  }
};

export const getServicesByParentData = async (parentServiceSlugChunk) => {
  try {
    let { data } = await client.query({
      query: GET_SERVICES_BY_PARENT_DATA,
      variables: { parentServiceSlugChunk },
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.services.data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getServiceInfo = async (service) => {
  try {
    let { data } = await client.query({
      query: GET_SERVICE_INFO,
      variables: { service },
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    console.log(e);
    // notFound();
  }
};

export const getSubServiceInfo = async (service) => {
  try {
    let { data } = await client.query({
      query: GET_SUB_SERVICE_INFO,
      variables: { service },
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    console.log(e);
    // notFound();
  }
};

export const createBusinessEnquiry = async (request) => {
  const {
    full_name,
    first_name,
    last_name,
    phone_number,
    purpose,
    company,
    email,
    project_details,
    lead_source,
  } = request;

  try {
    let { data } = await clientWithoutAuth.mutate({
      mutation: CREATE_BUSINESS_ENQUIRY,
      variables: {
        full_name,
        first_name,
        last_name,
        phone_number,
        purpose,
        company,
        email,
        project_details,
        lead_source,
      },
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
        headers: {}, // Ensuring headers are empty
      },
    });

    return data;
  } catch (e) {
    console.error("Error creating business enquiry:", e);
  }
};

export const getCookiePolicyContent = async () => {
  try {
    let { data } = await client.query({
      query: GET_COOKIE_POLICY_CONTENT,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.cookiePolicy.data.attributes;
  } catch (e) {
    // console.log(e);
    console.log(e);
  }
};

export const getPrivacyPolicyContent = async () => {
  try {
    let { data } = await client.query({
      query: GET_PRIVACY_POLICY_CONTENT,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.privacyPolicy.data.attributes;
  } catch (e) {
    // console.log(e);
    console.log(e);
  }
};

export const getHeaderNestedBavigation = async () => {
  try {
    let { data } = await client.query({
      query: GET_HEADER_NESTED_NAVIGATION,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.renderNavigation;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getCaseStudiesPageData = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_CASE_STUDY_PAGE_DATA,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.casestudyPage.data.attributes;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getTotalCaseStudies = async () => {
  try {
    let { data } = await client.query({
      query: GET_TOTAL_CASESTUDIES,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getCareerPageInfo = async () => {
  try {
    let { data } = await client.query({
      query: GET_CAREER_PAGE_INFO,
      fetchPolicy: "network-only",
      // variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.career.data.attributes;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getNewsAndInsightPage = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_NEWS_AND_INSIGHT_PAGE,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.newsInsight.data.attributes;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getAllNewsAndInsights = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_ALL_NEWSINSIGHTS,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.newsAndInsights.data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getAllCaseStudies = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_ALL_CASE_STUDIES,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.caseStudies.data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getTotalNewsAndInsights = async () => {
  try {
    let { data } = await client.query({
      query: GET_TOTAL_NEWSINSIGHTS,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getAboutUsPageData = async () => {
  try {
    let { data } = await client.query({
      query: GET_ABOUT_US_DATA,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.aboutUs.data.attributes;
  } catch (e) {
    console.log(e.networkError.result);
  }
};

export const getContactUsPageData = async () => {
  try {
    let { data } = await client.query({
      query: GET_CONTACT_US_DATA,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.contactUs.data.attributes;
  } catch (e) {
    console.log(e.networkError.result);
  }
};

export const getCaseStudyDetails = async (slug) => {
  try {
    let { data } = await client.query({
      query: GET_CASE_STUDY_DETAILS,
      fetchPolicy: "network-only",
      variables: { slug: slug },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.caseStudies.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNewsAndInsightDetails = async (slug) => {
  try {
    let { data } = await client.query({
      query: GET_NEWS_AND_INSIGHT_DETAILS,
      fetchPolicy: "network-only",
      variables: { slug: slug },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.newsAndInsights.data;
  } catch (e) {
    console.log(e);
  }
};

export const createResumeSubmission = async (request) => {
  // const { first_name, last_name, phone_number, email, resume } = request;

  // const data = request;

  try {
    let { data } = await clientWithoutAuth.mutate({
      mutation: CREATE_RESUME_SUBMISSION,
      variables: { data: request },
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
        headers: {}, // Ensuring headers are empty
      },
    });

    return data;
  } catch (e) {
    console.error("Error creating business enquiry:", e);
  }
};

export const uploadResume = async (resume) => {
  const variables = {
    file: resume,
  };

  try {
    let { data } = await clientWithUpload.mutate({
      mutation: UPLOAD_RESUME,
      variables: variables,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
        headers: {}, // Ensuring headers are empty
      },
    });
    return data;
  } catch (e) {
    console.error("Error creating business enquiry:", e);
  }
};

export const getClientPageData = async () => {
  try {
    let { data } = await client.query({
      query: GET_CLIENT_PAGE,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });
    return data.clientPage.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAwardsPageData = async () => {
  try {
    let { data } = await client.query({
      query: GET_AWARDS_PAGE,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.awardsPage.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllAwardsList = async () => {
  try {
    let { data } = await client.query({
      query: GET_ALL_AWARDS,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.awards.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSitemapData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.STRAPI_ENDPOINT}/api/sitemap/index.xml`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const xmlData = await response.text();

    let sitemapData = [];

    xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
      if (!err) {
        const urls = result.urlset.url;

        sitemapData = urls.map((urlEntry) => ({
          url: urlEntry.loc,
          lastModified: urlEntry.lastmod,
          changeFrequency: urlEntry.changefreq,
          priority: parseFloat(urlEntry.priority),
        }));
      }
    });

    return sitemapData;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const getBlogPageDetails = async (slug) => {
  try {
    let { data } = await client.query({
      query: GET_BLOG_DETAILS,
      fetchPolicy: "network-only",
      variables: { slug: slug },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.blogs.data[0];
  } catch (e) {
    console.log(e);
  }
};

export const getBlogListPageData = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_BLOG_PAGE_DATA,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.blogPage.data;
  } catch (e) {
    console.log(e);
  }
};

export const getTotalBlogs = async () => {
  try {
    let { data } = await client.query({
      query: GET_TOTAL_BLOGS,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getTotalBlogList = async (limit, start) => {
  try {
    let { data } = await client.query({
      query: GET_TOTAL_BLOG_LIST,
      fetchPolicy: "network-only",
      variables: { limit: limit, start: start },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
          // agent: https.Agent({ rejectUnauthorized: false }),
        },
      },
    });

    return data.blogs.data;
  } catch (e) {
    // console.log(e);
    console.log(e.networkError.result);
  }
};

export const getAllNewsAndUpdates = async (limit, start) => {
  try {
    const data = await client.request(GET_ALL_NEWSUPDATES, { limit, start });

    return data.newsAndUpdates.data;
  } catch (e) {
    console.error(
      "Error fetching all news and updates:",

      e.response?.errors || e.message
    );
  }
};

export const getNewsAndUpdatePage = async (limit, start) => {
  try {
    const data = await client.request(GET_NEWS_AND_UPDATE_PAGE, {
      limit,
      start,
    });
    return data.newsUpdate.data.attributes;
  } catch (e) {
    console.error(
      "Error fetching news and update page data:",
      e.response?.errors || e.message
    );
  }
};

export const getTotalNewsAndUpdates = async () => {
  try {
    const data = await client.request(GET_TOTAL_NEWSUPDATES);
    return data;
  } catch (e) {
    console.error(
      "Error fetching total news and updates:",
      e.response?.errors || e.message
    );
  }
};