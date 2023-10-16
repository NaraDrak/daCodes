import { Navigate } from "react-router-dom";

interface IProps {
    children: JSX.Element,
    redirectTo: string;
}

const ProtectedRoutes:React.FC<IProps> = ({children}) => {
    const userToken = localStorage.getItem("guest_session_id")
    if (!userToken) {
        return <Navigate to="/login" />
    }

  return children
}

export default ProtectedRoutes