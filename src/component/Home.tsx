import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  console.log("user", user);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="container mx-auto text-center mt-5">
        Hello {user?.name}{" "}
        <button
          className="btn btn-warning"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <button className="btn btn-success" onClick={loginWithRedirect}>
        Log in
      </button>
    );
  }
};

export default Home;
