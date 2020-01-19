export default {
	cognito: {
		REGION: 'us-east-2',
		USER_POOL_ID: 'us-east-2_kHgMIzGiw',
		APP_CLIENT_ID: '1bed1p8p70353sc06ech1loooj',
        mandatorySignIn: true,
        oauth: {
            domain: 'manukonda.auth.us-east-2.amazoncognito.com',
            redirectSignIn: 'http://localhost:3000/new-application',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token'
        },
        cookieStorage: {
            domain: 'http://localhost:3000/',
            path: '/',
            expires: 365,
            secure: true
        }
    }

};
