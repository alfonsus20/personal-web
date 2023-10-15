const Navigation = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4">
      <div className="flex justify-between items-center gap-x-3">
        <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center font-semibold font-xl">
          A
        </div>
        <div>
          <p className="font-semibold">Alfonsus Avianto</p>
          <p className="text-xs">Frontend Engineer</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <span>Menu</span>
        <div className="space-y-1 cursor-pointer">
          <span className="w-6 h-[0.15rem] bg-black block"></span>
          <span className="w-6 h-[0.15rem] bg-black block"></span>
          <span className="w-6 h-[0.15rem] bg-black block"></span>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
