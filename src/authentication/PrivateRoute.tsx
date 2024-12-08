import { useAuth } from "react-oidc-context";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuth();
  console.log(auth.isAuthenticated)

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    void auth.signinSilent();
  }

  return children;
};
