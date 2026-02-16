import { createPortal } from "react-dom";
const PortalLoading  = () => {
  if (typeof window === "undefined") return null;
  const container = document.getElementById("content-area"); 
  const box = document.getElementById("box");
  if (!container) return null;
  if (box) box.hidden = true;
  return createPortal(
      <div className="select-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   size-12 border-b-2  rounded-full  border-amber-600  animate-spin "></div>
    ,
    container
  );
};
export default PortalLoading;
