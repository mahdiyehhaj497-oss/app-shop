export default function Loading(){
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-30 h-30">
        <div className="absolute inset-0 border-8 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-8 border-gray-300 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};


