import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

const GET_GLOBAL_CONFIG_DATA = gql`
  query {
    globalConfig {
      data {
        attributes {
          robotsTxt
          favicon {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          scriptsToEmbed {
            position
            content
            is_enabled
          }
          logos {
            logo_type {
              title
              logo_img {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_HEADER_DATA = gql`
  query {
    header {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          logo_alternate {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          button {
            title
            type
            cta
          }
          connect {
            title
            description
            button {
              title
              cta
              type
            }
          }
        }
      }
    }
  }
`;

const GET_HEADER_NAVIGATION = gql`
  query {
    newsAndInsights {
      data {
        attributes {
          title
          content
          feature_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }

    renderNavigation(navigationIdOrSlug: "header-navigation", type: TREE) {
      id
      title
      path
      items {
        id
        title
        path
        items {
          id
          title
          path
          related {
            attributes {
              ... on Service {
                # short_description
                hero_banner {
                  subtitle
                }
                slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                case_studies {
                  data {
                    attributes {
                      title
                      slug
                      content
                      client {
                        data {
                          attributes {
                            logo {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                      feature_image {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on AboutUs {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ... on Career {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ... on NewsInsight {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ... on ContactUs {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ... on ClientPage {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ... on AwardsPage {
                title
                short_description
                NewSlug: slug
                feature_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        related {
          attributes {
            ... on Service {
              case_studies {
                data {
                  attributes {
                    title
                    slug
                    content
                    client {
                      data {
                        attributes {
                          logo {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                    feature_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on AboutUs {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on Career {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on NewsInsight {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ContactUs {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ClientPage {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on AwardsPage {
              title
              short_description
              slug
              feature_img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_HOMEPAGE_DATA = gql`
  query {
    homePage {
      data {
        attributes {
          title
          header_state
          heroBanner {
            heading
            banner_image {
              data {
                attributes {
                  url
                }
              }
            }
            isInput
            explore_cta {
              name
            }
            service_lists {
              data {
                attributes {
                  title
                  speed
                }
              }
            }
          }
          expertise {
            title
            image {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            services {
              data {
                attributes {
                  slug
                }
              }
            }
          }
          casestudy {
            title
            subtitle
            case_studies {
              data {
                attributes {
                  title
                  content
                  slug
                  common_banner {
                    banner_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  client {
                    data {
                      attributes {
                        name
                        slug
                        logo {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        is_visible
                      }
                    }
                  }
                  feature_image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  case_study_tags {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
            cta {
              name
              link
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          learn {
            title
            heading
            image {
              data {
                attributes {
                  url
                }
              }
            }
            news_and_insights {
              data {
                attributes {
                  title
                  content
                  createdAt
                  slug
                  feature_image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  insight_category {
                    data {
                      attributes {
                        title
                      }
                    }
                  }
                  publish_date
                }
              }
            }
            cta {
              name
              link
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          brands {
            client {
              title
              subtitle
              description
              clients(
                filters: { is_visible: { eq: true } }
                sort: "sort_order:asc"
                pagination: { limit: 12 }
              ) {
                data {
                  attributes {
                    name
                    slug
                    logo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    is_visible
                  }
                }
              }
            }
          }
          partners {
            heading
            partners {
              data {
                attributes {
                  icon_svg
                  name
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          contact {
            heading
            isInput
            banner_image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          testimonials {
            heading
            testimonials {
              data {
                attributes {
                  client_name
                  client_designation
                  feedback
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_FOOTER_DATA = gql`
  query {
    sectionData: footer {
      data {
        attributes {
          company_info {
            socials {
              name
              link
              icon {
                data {
                  attributes {
                    url
                    width
                    height
                    alternativeText
                  }
                }
              }
            }
            copyright_text
            logo {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
    sectionNavigation: renderNavigation(
      navigationIdOrSlug: "footer-navigation"
      type: TREE
      menuOnly: false
    ) {
      id
      title
      path
      items {
        id
        title
        path
        items {
          id
          title
          path
        }
      }
    }
  }
`;

// const CREATE_BUSINESS_ENQUIRY = gql`
//  mutation CreateBusinessEnquiry(
//     $name: String!
//     $email: String!
//     $project_details: String!
//   ) {
//     createBusinessEnquiry(
//       data: { name: $name, email: $email, project_details: $project_details }
//     ) {
//       data {
//         attributes {
//           name
//           email
//           project_details
//         }
//       }
//     }
//   }
// `;
const CREATE_BUSINESS_ENQUIRY = gql`
  mutation CreateBusinessEnquiry(
    $full_name: String
    $first_name: String
    $last_name: String
    $phone_number: String!
    $email: String!
    $purpose: String
    $project_details: String!
    $company: String
    $lead_source: String
  ) {
    createBusinessEnquiry(
      data: {
        full_name: $full_name
        first_name: $first_name
        last_name: $last_name
        phone_number: $phone_number
        email: $email
        purpose: $purpose
        project_details: $project_details
        company: $company
        lead_source: $lead_source
      }
    ) {
      data {
        attributes {
          email
          project_details
        }
      }
    }
  }
`;

const GET_SERVICES_BY_PARENT_DATA = gql`
  query ($parentServiceSlugChunk: [String!]!) {
    services(
      filters: {
        parent_service: {
          slug: { in: $parentServiceSlugChunk }
          is_visible: { eq: true }
        }
        is_visible: { eq: true }
      }
      sort: [
        "parent_service.parent_service.sort_order:asc"
        "parent_service.sort_order:asc"
        "sort_order:asc"
      ]
      pagination: { limit: 50 }
    ) {
      data {
        attributes {
          name
          slug

          sort_order
          is_visible
          parent_service {
            data {
              attributes {
                name
                slug

                sort_order
                is_visible
                parent_service {
                  data {
                    attributes {
                      slug
                      sort_order
                      is_visible
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SERVICE_INFO = gql`
  query ($service: String!) {
    servicePageContent: services(
      filters: { slug: { eq: $service }, is_visible: { eq: true } }
      sort: "sort_order:asc"
      pagination: { limit: 50 }
    ) {
      data {
        attributes {
          name
          slug
          # description
          sort_order
          is_visible
          # short_description
          show_contact_banner
          hero_banner {
            title
            subtitle
            short_description
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          service_details {
            ... on ComponentLayoutSfc {
              section_title
              section_subtitle
              section_desc
              short_description
              is_visible
              section_template
              section_bg_color
              content {
                title
                subtitle
                description
                short_description
                image {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                cta
              }
            }
            ... on ComponentLayoutSerFaq {
              section_title
              faq_bg_color: section_bg_color
              faq_content {
                question
                answer
                services {
                  data {
                    attributes {
                      name
                      is_visible
                    }
                  }
                }
              }
            }
            ... on ComponentLayoutCollections {
              title
              platform_bg_color: section_bg_color
              technologies {
                data {
                  attributes {
                    image {
                      data {
                        attributes {
                          url
                          width
                          height
                        }
                      }
                    }
                    is_visible
                  }
                }
              }
              content {
                name
                image {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          case_studies {
            data {
              attributes {
                title
                content
                case_study_tags {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                feature_image {
                  data {
                    attributes {
                      url
                      width
                      height
                      alternativeText
                    }
                  }
                }
              }
            }
          }
          service_faqs(pagination: { limit: 50 }) {
            data {
              attributes {
                question
                answer
                service {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          casestudy_slider {
            section_title
            section_subtitle
            section_desc
            case_studies {
              data {
                attributes {
                  title
                  common_banner {
                    short_description
                    banner_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  casestudy_tags {
                    section_title
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
          parent_service {
            data {
              attributes {
                name
                slug
                # description
                sort_order
                is_visible
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SUB_SERVICE_INFO = gql`
  query ($service: String!) {
    servicePageContent: services(
      filters: { slug: { eq: $service }, is_visible: { eq: true } }
      sort: "sort_order:asc"
      pagination: { limit: 50 }
    ) {
      data {
        attributes {
          name
          slug
          description
          sort_order
          is_visible
          short_description
          service_details {
            ... on ComponentLayoutSka {
              title
              subtitle
              description
              is_visible
              key_activities {
                data {
                  attributes {
                    title
                    description
                    activity_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentLayoutSf {
              title
              subtitle
              description
              is_visible
              features(filters: { is_visible: { eq: true } }) {
                data {
                  attributes {
                    title
                    description
                    feature_image {
                      data {
                        attributes {
                          url
                          width
                          height
                          alternativeText
                        }
                      }
                    }
                    sort_order
                    is_visible
                  }
                }
              }
            }
          }
          case_studies {
            data {
              attributes {
                title
                content
                case_study_tags {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                feature_image {
                  data {
                    attributes {
                      url
                      width
                      height
                      alternativeText
                    }
                  }
                }
              }
            }
          }
          service_faqs(pagination: { limit: 50 }) {
            data {
              attributes {
                question
                answer
                service {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          parent_service {
            data {
              attributes {
                name
                slug
                description
                sort_order
                is_visible
              }
            }
          }
        }
      }
    }
  }
`;

const GET_COOKIE_POLICY_CONTENT = gql`
  query {
    cookiePolicy {
      data {
        attributes {
          page_title
          page_content
          show_contact_banner
          header_state
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_PRIVACY_POLICY_CONTENT = gql`
  query {
    privacyPolicy {
      data {
        attributes {
          page_title
          page_content
          show_contact_banner
          header_state

          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_HEADER_NESTED_NAVIGATION = gql`
  query {
    renderNavigation(
      navigationIdOrSlug: "header-primary-navigation"
      type: TREE
    ) {
      id
      title
      path

      items {
        id
        title
        path
        related {
          id
          attributes {
            ... on Service {
              case_studies {
                data {
                  attributes {
                    title
                    slug
                    content
                    client {
                      data {
                        attributes {
                          logo {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                    feature_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        id
        items {
          id
          title
          path
        }
      }
    }
  }
`;

const GET_CASE_STUDY_PAGE_DATA = gql`
  query getCaseStudies($limit: Int, $start: Int) {
    casestudyPage {
      data {
        attributes {
          title
          short_description
          slug
          show_contact_banner
          header_state
          case_studies(pagination: { limit: $limit, start: $start }) {
            data {
              attributes {
                title
                slug
                service_filter {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                client {
                  data {
                    attributes {
                      name
                      logo {
                        data {
                          attributes {
                            url
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
                common_banner {
                  banner_image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                feature_image {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                content
                publish_date
                publishedAt
                case_study_tags {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_ALL_CASE_STUDIES = gql`
  query getAllCaseStudies($limit: Int, $start: Int) {
    caseStudies(
      sort: "publish_date:desc"
      pagination: { limit: $limit, start: $start }
    ) {
      data {
        attributes {
          title
          slug
          sort_order
          publish_date
          service_filter {
            data {
              attributes {
                name
              }
            }
          }
          client {
            data {
              attributes {
                name
                logo {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          common_banner {
            banner_image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          feature_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          content
          publishedAt
          case_study_tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const GET_CASE_STUDY_DETAILS = gql`
  query ($slug: String!) {
    caseStudies(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          publish_date
          author
          sort_order
          is_visible
          youtube_video_id
          common_banner {
            title
            short_description
            is_visible
            banner_image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          problem_statement {
            section_title
            section_subtitle
            section_desc
            is_visible
          }
          goals {
            section_title
            section_subtitle
            section_desc
            is_visible
          }
          solution {
            section_title
            short_description
            section_subtitle
            section_desc
            section_template
            is_visible
            content {
              title
              description
              short_description
            }
          }
          project_timeline {
            title

            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            is_visible
          }
          technology {
            title
            is_visible
            content {
              name
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
            technologies {
              data {
                attributes {
                  name
                  image {
                    data {
                      attributes {
                        url
                        width
                        height
                        alternativeText
                      }
                    }
                  }
                  is_visible
                }
              }
            }
          }
          imapct {
            section_title
            section_desc
            is_visible
            result_stat {
              title
              content
            }
          }
          mockups {
            title
            is_visible
            images {
              data {
                attributes {
                  url
                  height
                  width
                }
              }
            }
          }
          more_case_study {
            title
            subtitle
            is_visible
            case_studies {
              data {
                attributes {
                  title
                  slug
                  common_banner {
                    banner_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  client {
                    data {
                      attributes {
                        logo {
                          data {
                            attributes {
                              url
                              width
                              height
                            }
                          }
                        }
                      }
                    }
                  }
                  case_study_tags {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  feature_image {
                    data {
                      attributes {
                        url
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

// const GET_CASE_STUDY_DETAILS = gql`
//   query ($slug: String!) {
//     caseStudies(filters: { slug: { eq: $slug } }) {
//       data {
//         attributes {
//           publish_date
//           author
//           sort_order
//           is_visible
//           common_banner {
//             title
//             short_description
//             banner_image {
//               data {
//                 attributes {
//                   url
//                 }
//               }
//             }
//           }
//           problem_statement {
//             section_title
//             section_subtitle
//             section_desc
//             short_description
//           }
//           solution {
//             section_title
//             short_description
//             section_subtitle
//             section_desc
//             content {
//               title
//               description
//               short_description
//             }
//           }
//           project_timeline {
//             title
//             image {
//               data {
//                 attributes {
//                   url
//                   width
//                   height
//                 }
//               }
//             }
//             is_visible
//           }
//           technology {
//             title
//             content {
//               name
//               image {
//                 data {
//                   attributes {
//                     url
//                     width
//                     height
//                   }
//                 }
//               }
//             }
//             technologies {
//               data {
//                 attributes {
//                   name
//                   image {
//                     data {
//                       attributes {
//                         url
//                         width
//                         height
//                         alternativeText
//                       }
//                     }
//                   }
//                   is_visible
//                 }
//               }
//             }
//           }
//           design_process {
//             section_title
//             section_template
//             is_visible
//             content {
//               title
//               description
//               is_visible
//               image {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//           result {
//             section_title
//             section_desc
//             result_stat {
//               title
//               description
//             }
//           }
//           mockups {
//             title
//             images {
//               data {
//                 attributes {
//                   url
//                   height
//                   width
//                 }
//               }
//             }
//           }
//           more_case_study {
//             title
//             subtitle
//             case_studies {
//               data {
//                 attributes {
//                   title
//                   slug
//                   client {
//                     data {
//                       attributes {
//                         logo {
//                           data {
//                             attributes {
//                               url
//                               width
//                               height
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                   case_study_tags {
//                     data {
//                       attributes {
//                         name
//                       }
//                     }
//                   }
//                   feature_image {
//                     data {
//                       attributes {
//                         url
//                         width
//                         height
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const GET_TOTAL_CASESTUDIES = gql`
  query {
    caseStudies(pagination: { limit: 50 }) {
      data {
        attributes {
          CaseStugTitle: title
        }
      }
    }
  }
`;

const GET_CAREER_PAGE_INFO = gql`
  query {
    career {
      data {
        attributes {
          title
          short_description
          slug
          show_contact_banner
          header_state
          common_banner {
            title
            description
            is_visible
            short_description
            banner_image {
              data {
                attributes {
                  url
                  width
                  height
                  caption
                }
              }
            }
          }
          cjo {
            title
            subtitle
            is_visible
            short_description
            job_openings {
              data {
                attributes {
                  title
                  subtitle
                  short_description
                  description
                  slug
                  is_visible
                  position
                  career_tags {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          career_benefit {
            title
            subtitle
            short_description
            description
            job_benefits {
              title
              list
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_NEWS_AND_INSIGHT_PAGE = gql`
  query getNewsAndInsights($limit: Int, $start: Int) {
    newsInsight {
      data {
        attributes {
          title
          short_description
          show_contact_banner
          header_state
          news_and_insights(pagination: { limit: $limit, start: $start }) {
            data {
              attributes {
                title
                content
                slug
                feature_image {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                insight_category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                publish_date
                publishedAt
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_TOTAL_NEWSINSIGHTS = gql`
  query {
    newsAndInsights(pagination: { limit: 50 }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

//Create at 08-07-2024
const GET_ALL_NEWSINSIGHTS = gql`
  query getNewsAndInsights($limit: Int, $start: Int) {
    newsAndInsights(
      pagination: { limit: $limit, start: $start }
      sort: "publish_date:desc"
    ) {
      data {
        attributes {
          title
          content
          sort_order
          slug
          feature_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          insight_category {
            data {
              attributes {
                title
              }
            }
          }
          publish_date
          publishedAt
        }
      }
    }
  }
`;

const GET_NEWS_AND_INSIGHT_DETAILS = gql`
  query ($slug: String!) {
    newsAndInsights(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          post_content
          # rte_component
          slug
          publish_date
          author
          insight_category {
            data {
              attributes {
                title
              }
            }
          }
          feature_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          # content
          news_insight_tags {
            data {
              attributes {
                name
              }
            }
          }
          more_insight {
            title
            news_and_insights {
              data {
                attributes {
                  title
                  slug
                  news_insight_tags {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  feature_image {
                    data {
                      attributes {
                        url
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
          }
          faq {
            section_bg_color
            section_title
            section_subtitle
            faq_content {
              question
              answer
            }
            is_visible
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_ABOUT_US_DATA = gql`
  query {
    aboutUs {
      data {
        attributes {
          common_banner {
            title
            description
            is_visible
            short_description
            banner_image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          company_stats {
            section_Title
            section_subtitle
            description
            short_description
            stats {
              total
              symbol
              type
            }
            Image_card {
              title
              description
              short_description
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
          company_verticals {
            section_title
            section_subtitle
            section_desc
            short_description
            content {
              title
              subtitle
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }

          awards_list {
            section_title
            section_subtitle
            section_desc
            short_description
            awards {
              data {
                attributes {
                  title
                  awards_type
                  year
                  awards_cate {
                    data {
                      attributes {
                        name
                        img {
                          data {
                            attributes {
                              url
                              width
                              height
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          show_contact_banner
          header_state
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
            structuredData
            metaViewport
            canonicalURL
          }
        }
      }
    }
  }
`;

const GET_CONTACT_US_DATA = gql`
  query {
    contactUs {
      data {
        attributes {
          title
          short_description
          header_state
          contact_component {
            section_title
            section_subtitle
            section_desc
            content {
              title
              subtitle
              description
              cta
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

// const CREATE_RESUME_SUBMISSION = gql`
//   mutation CreateResumeSubmission(
//     $first_name: String!
//     $last_name: String!
//     $phone_number: String!
//     $email: String!
//     $resume: ID!
//   ) {
//     createResumeSubmission(
//       data: {
//         first_name: $first_name
//         last_name: $last_name
//         phone_number: $phone_number
//         email: $email
//         resume: $resume
//       }
//     ) {
//       data {
//         attributes {
//           email
//         }
//       }
//     }
//   }
// `;
const CREATE_RESUME_SUBMISSION = gql`
  mutation CreateResumeSubmission($data: ResumeSubmissionInput!) {
    createResumeSubmission(data: $data) {
      data {
        attributes {
          first_name
        }
      }
    }
  }
`;

const UPLOAD_RESUME = gql`
  mutation SingleImageUpload($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          createdAt
          updatedAt
          url
        }
      }
    }
  }
`;

const GET_CLIENT_PAGE = gql`
  query {
    clientPage {
      data {
        attributes {
          title
          slug
          header_state
          common_banner {
            title
            description
            banner_image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            is_visible
            short_description
          }
          client_section {
            section_title
            section_subtitle
            section_desc
            section_bg_color
            is_visible
            clients(pagination: { limit: 200 }) {
              data {
                attributes {
                  logo {
                    data {
                      attributes {
                        url
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_AWARDS_PAGE = gql`
  query {
    awardsPage {
      data {
        attributes {
          title
          slug
          header_state
          common_banner {
            title
            short_description
            is_visible
            banner_image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          awards_summary {
            section_title
            section_subtitle
            section_desc
            is_visible
            awards_count {
              section_title
            }
            awards_high_lit {
              section_title
              total_awards
              img {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
          awards_list {
            section_title
            is_visible
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_ALL_AWARDS = gql`
  query {
    awards(pagination: { limit: 400 }) {
      data {
        attributes {
          title
          awards_type
          year
          awards_cate {
            data {
              attributes {
                name
                img {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_BLOG_DETAILS = gql`
  query ($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          short_description
          slug
          feature_image {
            data {
              attributes {
                url
              }
            }
          }
          publish_date
          author
          blog_tags {
            data {
              attributes {
                title
              }
            }
          }
          post_content
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
          faq {
            section_title
            section_subtitle
            section_bg_color
            is_visible
            faq_content {
              question
              answer
              services {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_BLOGS = gql`
  query {
    blogs {
      data {
        attributes {
          title
          slug
          feature_image {
            data {
              attributes {
                url
              }
            }
          }
          publish_date
          author
          blog_tags {
            data {
              attributes {
                title
              }
            }
          }
          post_content
        }
      }
    }
  }
`;

const GET_BLOG_PAGE_DATA = gql`
  query ($limit: Int, $start: Int) {
    blogPage {
      data {
        attributes {
          title
          short_description
          slug
          header_state
          blogs(pagination: { limit: $limit, start: $start }) {
            data {
              attributes {
                title
                slug
                feature_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                publish_date
                author
                blog_tags {
                  data {
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
          contact {
            heading
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_TOTAL_BLOGS = gql`
  query {
    blogs(pagination: { limit: 50 }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

const GET_TOTAL_BLOG_LIST = gql`
  query getBlogs($limit: Int, $start: Int) {
    blogs(
      pagination: { limit: $limit, start: $start }
      sort: "publish_date:desc"
    ) {
      data {
        attributes {
          title
          sort_order
          slug
          feature_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          publish_date
          publishedAt
        }
      }
    }
  }
`;

const GET_ALL_NEWSUPDATES = gql`
  query getNewsAndUpdates($limit: Int, $start: Int) {
    newsAndUpdates(
      pagination: { limit: $limit, start: $start }

      sort: "publish_date:desc"
    ) {
      data {
        id

        attributes {
          title

          sort_order

          publication

          slug

          feature_image {
            data {
              attributes {
                url

                width

                height
              }
            }
          }

          publish_date

          publishedAt

          ExternalTargetURL
        }
      }
    }
  }
`;
const GET_NEWS_AND_UPDATE_PAGE = gql`
  query getNewsAndUpdatess($limit: Int, $start: Int) {
    newsUpdate {
      data {
        attributes {
          title
          short_description
          show_contact_banner
          header_state
          news_and_updates(pagination: { limit: $limit, start: $start }) {
            data {
              attributes {
                title
                slug
                feature_image {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                publish_date
                publishedAt
              }
            }
          }
          contact {
            heading
            explore_cta {
              name
              link
            }
          }
          seo {
            metaTitle
            metaDescription
            keywords
            metaRobots
          }
        }
      }
    }
  }
`;

const GET_TOTAL_NEWSUPDATES = gql`
  query {
    newsAndUpdates(pagination: { limit: 50 }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export {
  GET_GLOBAL_CONFIG_DATA,
  GET_HEADER_DATA,
  GET_HEADER_NAVIGATION,
  GET_HOMEPAGE_DATA,
  CREATE_BUSINESS_ENQUIRY,
  GET_FOOTER_DATA,
  GET_SERVICES_BY_PARENT_DATA,
  GET_SERVICE_INFO,
  GET_SUB_SERVICE_INFO,
  GET_COOKIE_POLICY_CONTENT,
  GET_PRIVACY_POLICY_CONTENT,
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
  GET_CLIENT_PAGE,
  GET_AWARDS_PAGE,
  GET_ALL_AWARDS,
  GET_BLOG_DETAILS,
  GET_ALL_BLOGS,
  GET_BLOG_PAGE_DATA,
  GET_TOTAL_BLOGS,
  GET_TOTAL_BLOG_LIST,
  GET_ALL_NEWSUPDATES,
  GET_NEWS_AND_UPDATE_PAGE,
  GET_TOTAL_NEWSUPDATES,
};
