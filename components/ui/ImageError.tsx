const ImageError = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 z-10 text-gray-500">
      <p className="text-sm">Image failed to load</p>
    </div>
  );
};

export default ImageError;
