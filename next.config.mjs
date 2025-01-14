const nextConfig = {
    output: "standalone",
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; script-src 'self' 'nonce-abc123; style-src 'self' 'nonce-abc123'; img-src 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; object-src 'none'; require-trusted-types-for 'script';",
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "Cross-Origin-Resource-Policy",
                        value: "same-origin"
                    }
                ],
            },
        ];
    },
};

export default nextConfig
