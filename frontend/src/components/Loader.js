const Loader = () => {
  return (
    <div className="align-center flex justify-center">
      <button
        type="button"
        className="bg-indigo-500 ... w-80 text-center text-white"
      >
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
};
export default Loader;
