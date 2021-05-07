import API from "@prismicio/client";

const apiEndpoint = process.env.PRISMIC_ENDPOINT;
const accessToken = process.env.PRISMIC_TOKEN;

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const Prismic = (req = null) =>
  API.client(apiEndpoint, createClientOptions(req, accessToken));

const Predicates = API.Predicates;

export default Prismic;
export { accessToken, apiEndpoint, Predicates };
