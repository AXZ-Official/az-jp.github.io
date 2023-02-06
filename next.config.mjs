// @ts-check

import nextBundleAnalyzer from '@next/bundle-analyzer';

const withNextBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
  trailingSlash: true
};

export default withNextBundleAnalyzer(config);
