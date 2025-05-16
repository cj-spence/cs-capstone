const Loader = () => {
  return (
    <div className="flex flex-col fixed inset-0 items-center justify-center z-50">
      <div className="loading loading-infinity text-secondary transform scale-500"></div>
      <h1 className="mt-5 font-bold">Our Ancestors Have Given Us An Assignment</h1>
    </div>
  );
};

export default Loader;
