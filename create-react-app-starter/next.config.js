const withTM = require('next-transpile-modules')([
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
    '@solana/wallet-adapter-wallets',
    '@solana/wallet-adapter-bitkeep',
    '@solana/wallet-adapter-phantom',
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
    reactStrictMode: true,
    webpack5: true,
    images: {
        loader: 'custom',
    },
    experimental: { esmExternals: false },
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false,
            os: false,
            crypto: false,
            assert: false,
            process: false,
            util: false,
        };
        config.module.rules = config.module.rules.map((rule) => {
            if (rule.oneOf instanceof Array) {
                rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
            }
            return rule;
        });
        return config;
    },
});
