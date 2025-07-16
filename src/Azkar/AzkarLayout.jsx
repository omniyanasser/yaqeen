import { AzkarProvider } from "../contexts/AzkarContext";
import { Outlet } from "react-router-dom";

function AzkarLayout() {
  return (
    <AzkarProvider>
      <Outlet />
    </AzkarProvider>
  );
}

export default AzkarLayout;
