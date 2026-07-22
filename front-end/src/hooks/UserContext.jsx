import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem("user");
		return savedUser ? JSON.parse(savedUser) : null;
	});
	const isAuthenticated = user !== null;

	const login = (userData) => {
		const loggedInUser = {
			id: userData.id,
			fullName: userData.full_name,
			email: userData.email,
			phone: userData.phone,
			address: userData.address,
			role: userData.role,
			createdAt: userData.created_at,
		};

		setUser(loggedInUser);
		localStorage.setItem("user", JSON.stringify(loggedInUser));
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};
	const changeEmail = (newEmail) => {
		if (!user) return;

		const updatedUser = {
			...user,
			email: newEmail,
		};

		setUser(updatedUser);
		localStorage.setItem("user", JSON.stringify(updatedUser));
	};

	const updateProfile = (data) => {
		if (!user) return;

		const updatedUser = {
			...user,
			...data,
		};

		setUser(updatedUser);
		localStorage.setItem("user", JSON.stringify(updatedUser));
	};

	return (
		<UserContext.Provider
			value={{
				user,
				isAuthenticated,
				login,
				logout,
				changeEmail,
				updateProfile,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };