import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUser } from "../hooks/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();

    const { isAuthenticated, login } = useUser();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("http://localhost:3000/users");

            const foundUser = res.data.find(
                (user) =>
                    user.email === formData.email &&
                    user.password === formData.password
            );

            if (!foundUser) {
                alert("Email hoặc mật khẩu không đúng!");
                return;
            }

            login(foundUser);
            if (foundUser.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error(error);
            alert("Không thể kết nối tới server");
        }
    };

    return (
        <>
            <h3>Login</h3>

            <Form className="col-md-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit">
                    <FontAwesomeIcon icon={faCheck} /> Login
                </Button>
            </Form>
        </>
    );
};

export default Login;