enum ENV {
    DEV = "development",
    PROD = "production",
    TEST = "test"
}

function findURL<T>(local: T, prod: T, branch: T): T {
    switch(process.env.NODE_ENV) {
        case ENV.DEV: 
            return local;
        case ENV.PROD:
            return prod;
        case ENV.TEST:
            return branch;
        default:
            return local;
    }
}

if (typeof window === "undefined") {
    const baseURLForEnv = findURL("http://localhost:9000", "https://LIVE_VERCEL_ALIAS", "https://VERCEL_URL");
    
    module.exports = {
        GRAPHCMS_API: process.env.GRAPHCMS_API,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
        AUTH0_SCOPE: "openid profile",
        REDIRECT_URI: `${baseURLForEnv}/api/callback`,
        POST_LOGOUT_REDIRECT: baseURLForEnv,
    };
} else {
    module.exports = {
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
        AUTH0_SCOPE: "openid profile",
        REDIRECT_URI: `${window.location.origin}/api/callback`,
        POST_LOGOUT_REDIRECT: window.location.origin,
    };
}