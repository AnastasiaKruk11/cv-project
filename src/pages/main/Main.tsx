import { Outlet } from "react-router-dom";
import '../../app/i18n/i18n';

export const Main = () => {

    return (
        <div className="bg-[#121212] h-full">
            <Outlet />
        </div>
    )
}