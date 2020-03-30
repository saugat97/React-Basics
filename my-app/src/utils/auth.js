import auth0 from 'auth0-js'
import history from './history';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-8n61l8wt.auth0.com',
        clientID: '5xCJnST6DYXGQZfFyhR52J0iTc3kJcZC',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    login = () => {
        this.auth0.authorize()
    }

    //handle the access and id token
    handleAuth = () => {
        //parseHash allows to extract the result from the response auth0 gives us
        this.auth0.parseHash((err, authResult) => {
            if(authResult){
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)

                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expiresAt', expiresAt)  
                setTimeout(() => { browserHistory.push('/authcheck')}, 200)
            }
            else{
                console.log(err)
            }
        })
    }
    
    logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        return new Date().getTime < expiresAt;
    }
}