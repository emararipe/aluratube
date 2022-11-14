module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
   const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
  }
  return nextConfig
}
