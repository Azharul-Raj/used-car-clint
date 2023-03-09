const SpinnerMedium = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-10 w-10 border-8 border-dashed rounded-full border-cyan-300 animate-spin"></div>
      <div className="h-10 w-10 border-8 border-dashed rounded-full border-green-300 animate-spin"></div>
      <div className="h-10 w-10 border-8 border-dashed rounded-full border-red-300 animate-spin"></div>
    </div>
  );
};

export default SpinnerMedium;
