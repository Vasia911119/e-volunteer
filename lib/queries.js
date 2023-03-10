import { gql } from 'graphql-request';

export const indexQuery = gql`
  query ($locale: SiteLocale) {
    banner(locale: $locale) {
      content
    }
    allCategories(locale: $locale, orderBy: range_ASC) {
      cardInfo {
        id
        alt
        image
        description
        contentAtPage
      }
      range
      route
      title
    }
    center(locale: $locale) {
      titleAtPage
      receptionCenter {
        href
        city
        phoneNumber
        centerTitle
        address
        id
      }
    }
    footer(locale: $locale) {
      connectText
      email
      telegram
      additionalInfo
      additionalPhone
    }
    help(locale: $locale) {
      content
      title
    }
  }
`;

export const categoryQuery = gql`
  query ($locale: SiteLocale) {
    allCategories(locale: $locale, orderBy: range_ASC) {
      cardInfo {
        id
        alt
        image
        description
        contentAtPage
      }
      range
      route
      title
    }
    banner(locale: $locale) {
      content
    }
    footer(locale: $locale) {
      connectText
      email
      telegram
      additionalInfo
      additionalPhone
    }
    help(locale: $locale) {
      content
      title
    }
  }
`;

export const routesQuery = gql`
  query {
    allCategories {
      _allRouteLocales {
        locale
        value
      }
    }
  }
`;
