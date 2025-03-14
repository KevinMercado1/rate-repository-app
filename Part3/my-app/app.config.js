import 'dotenv/config';

export default {
  expo: {
    name: 'rate-repository-app',
    slug: 'rate-repository-app',
    version: '1.0.0',
    extra: {
      APOLLO_URI: process.env.APOLLO_URI,
    },
  },
};
