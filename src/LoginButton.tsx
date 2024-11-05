// src/App.jsx
import { useAuth } from "react-oidc-context";

export const LoginButton = () => {
    const auth = useAuth();

    //set token
    //set expiration based on user object expiration
    
    if (auth.isAuthenticated) {
        const token = auth.user?.access_token;
        const expiration = auth.user?.expires_at; 

        if (token && expiration) {
            localStorage.setItem("token", token);
            const expirationDate = new Date(expiration * 1000);
            localStorage.setItem("token_expiration", expirationDate.toISOString());
        }

        return (
            <div>
                Hello {auth.user?.profile.sub}{" "}
                <button onClick={() => {
                    void auth.removeUser(); 
                    localStorage.removeItem("token");
                    localStorage.removeItem("token_expiration");
                }}>
                    Log out
                </button>
            </div>
        );
    }

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => {
                
                void auth.removeUser(); 
                
            }
            }>Log out</button>
        </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default LoginButton;