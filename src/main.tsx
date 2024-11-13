import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { QueryClientProvider } from "react-query";
import { getQueryClient } from './services/queryClient';


const uri = import.meta.env.VITE_REDIRECT_URI;

if (!uri) console.log("REDIRECT_URI is not set");
else console.log("REDIRECT_URI is: " + uri);

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "dorian-demo2",
  redirect_uri: `${uri}`,
  onSigninCallback: async (user) => {
    console.log("called back!");
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    document.cookie = `jwt_token=${user?.id_token}`;
  },
  automaticSilentRenew: true,
};

const queryClient = getQueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
