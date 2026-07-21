import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './../hooks/UserContext';

const ProtectedRoute = ({ allowedRoles = [] }) => {
	const { user, isAuthenticated } = useUser();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	const hasRole =
		allowedRoles.length == 0 || allowedRoles.includes(user.role);

	if (!hasRole) {
		return <Navigate to='unauthorized' replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
