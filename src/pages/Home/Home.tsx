import Posts from "../../components/Posts";

function Home() {
  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <button onClick={logout}>Log out</button>
      <div className=" d-flex justify-content-center">
        <div className="row">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default Home;
