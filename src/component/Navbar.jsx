const Navbar = () => {
  return (
    <div>
      <div className="navbar fixed top-0 right-0 z-12 bg-blue-950">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shopee</a>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <ul className="flex gap-10 pr-2"></ul>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
