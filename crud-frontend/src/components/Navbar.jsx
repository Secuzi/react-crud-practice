/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function Navbar({ onOpen, onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">SpaghettiLamaw</a>
        </div>
        <div className="navbar-center ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-auto"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>
            Add Client
          </a>
        </div>
      </div>
    </>
  );
}
