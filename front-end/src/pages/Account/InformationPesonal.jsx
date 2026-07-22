import { Check, ChevronDown, Envelope, Map, Phone } from '@primeicons/react';
import { Tag } from "@primereact/ui/tag";
import { User } from '@primeicons/react/user';
import { InputGroup } from '@primereact/ui/inputgroup';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { useUser } from '../../hooks/UserContext';
import { useEffect, useState } from 'react';
import { Eye } from '@primeicons/react/eye';
import { ProgressBar } from '@primereact/ui/progressbar';
import { EyeSlash } from '@primeicons/react/eye-slash';
import { IconField } from '@primereact/ui/iconfield';
import { InputPassword } from '@primereact/ui/inputpassword';
import axios from 'axios';

const strengthMap = {
    weak: {
        label: "Yếu",
        percent: 25,
        color: "var(--p-red-400)",
        severity: "danger",
    },
    medium: {
        label: "Trung bình",
        percent: 50,
        color: "var(--p-amber-400)",
        severity: "warn",
    },
    strong: {
        label: "Mạnh",
        percent: 75,
        color: "var(--p-blue-400)",
        severity: "info",
    },
    "very-strong": {
        label: "Rất mạnh",
        percent: 100,
        color: "var(--p-emerald-400)",
        severity: "success",
    },
};
function getStrength(value) {
    if (!value) return null;

    let score = 0;

    if (value.length >= 8) score++;
    if (value.length >= 12) score++;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;

    if (score <= 1) return "weak";
    if (score <= 2) return "medium";
    if (score <= 3) return "strong";

    return "very-strong";
}
const InformationPesonal = () => {
    const { user, updateProfile } = useUser()
    const [isEdit, setIsEdit] = useState(false)
    const [isChangepw, setIsChangepw] = useState(false)
    const [checkoldpw, setcheckoldpw] = useState(false)
    const [value, setValue] = useState('');
    const level = getStrength(value);
    const info = level ? strengthMap[level] : null;
    const [maskOldPassword, setMaskOldPassword] = useState(true);
    const [mask, setMask] = useState(true);
    const [maskConfirm, setMaskConfirm] = useState(true);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handlerOldPassword = (e) => {
        const value = e.target.value;
        setOldPassword(value);


        if (value === userData?.password) {
            setcheckoldpw(true);
        } else {
            setcheckoldpw(false);
        }
    };

    const handlerNewPassword = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        setValue(value);
    };

    const handlerConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleChange = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSave = async () => {
        try {
            const res = await axios.patch(`users/${user.id}`, {
                full_name: formData.fullName,
                email: formData.email,
                phone: formData.phone
            });

            updateProfile(formData)
            alert("update successfull")
            setIsEdit(false)
        } catch (error) {
            console.log(error);

        }
    }
    const handlerpw = async () => {
        if (!checkoldpw) {
            alert("Mật khẩu cũ không đúng");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp");
            return;
        }

        try {
            await axios.patch(`users/${user.id}`, {
                password: newPassword,
            });

            alert("Đổi mật khẩu thành công");
            setIsChangepw(false);

            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`users/${user.id}`);

            setUserData(response.data);

        };

        if (user?.id) {
            fetchData();
        }
        if (user) {
            setFormData({
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                address: user.address || ""
            });
        }
    }, [user]);

    return (
        <div>
            <h3 className="fw-bold">
                Thông tin cá nhân <span className="text-danger">*</span>
            </h3>
            <form>
                <Button
                    rounded
                    type="button"
                    className="mb-3 bg-[#6f4e37]! border-none!"
                    onClick={() => {
                        if (isEdit) {
                            handleSave();
                        } else {
                            setIsEdit(true);
                        }
                    }}
                >
                    {isEdit ? "Lưu" : "Chỉnh sửa"}
                </Button>
                <div className="row g-3">
                    <div className="col-12">
                        <label className="mb-2 d-block">
                            Tên người dùng
                        </label>

                        <InputGroup.Root >
                            <InputGroup.Addon>
                                <User />
                            </InputGroup.Addon>

                            <InputText
                                name="fullName"
                                value={formData.fullName}
                                placeholder="Tên người dùng"
                                disabled={!isEdit}
                                onChange={handleChange}
                            />
                        </InputGroup.Root>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="mb-2 d-block">
                            Số điện thoại
                        </label>

                        <InputGroup.Root>
                            <InputGroup.Addon>
                                <Phone />
                            </InputGroup.Addon>

                            <InputText
                                name="phone"
                                value={formData.phone || ""}
                                placeholder="Số điện thoại"
                                disabled={!isEdit}
                                onChange={handleChange}

                            />
                        </InputGroup.Root>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="mb-2 d-block">
                            Email
                        </label>

                        <InputGroup.Root>
                            <InputGroup.Addon>
                                <Envelope />
                            </InputGroup.Addon>

                            <InputText
                                name="email"
                                value={formData.email || ""}
                                placeholder="Email"
                                disabled={!isEdit}
                                onChange={handleChange}
                            />
                        </InputGroup.Root>
                    </div>
                </div>
            </form>

            <h3 className="fw-bold mt-5">Thay đổi mật khẩu</h3>

            <form className="mt-3">
                <Button
                    rounded
                    type="button"
                    className="mb-4 bg-[#6f4e37]! border-none!"
                    onClick={() => {
                        if (isChangepw) {
                            handlerpw();
                        } else {
                            setIsChangepw(true);
                        }
                    }}
                >
                    {isChangepw ? "Lưu" : "Đổi mật khẩu"}
                </Button>

                <div className="flex flex-col gap-5 max-w-lg">

                    <div>
                        <label className="block mb-2 font-medium">
                            Mật khẩu cũ
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword
                                value={oldPassword}
                                onChange={handlerOldPassword}
                                mask={maskOldPassword}
                                onMaskChange={(e) => setMaskOldPassword(e.value)}
                                disabled={!isChangepw}
                                className="w-full"
                            />

                            <IconField.Inset>
                                {maskOldPassword ? (
                                    <Eye
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMaskOldPassword(false)}
                                    />
                                ) : (
                                    <EyeSlash
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMaskOldPassword(true)}
                                    />
                                )}
                            </IconField.Inset>
                        </IconField.Root>

                        {oldPassword && (
                            checkoldpw ? (
                                <small className="text-success flex items-center gap-1 mt-2">
                                    <Check size={16} />
                                    Mật khẩu đúng
                                </small>
                            ) : (
                                <small className="text-danger mt-2 d-block">
                                    Mật khẩu không đúng
                                </small>
                            )
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Mật khẩu mới
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword
                                value={newPassword}
                                onChange={handlerNewPassword}
                                mask={mask}
                                onMaskChange={(e) => setMask(e.value)}
                                disabled={!isChangepw}
                                className="w-full"
                            />

                            <IconField.Inset>
                                {mask ? (
                                    <Eye
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMask(false)}
                                    />
                                ) : (
                                    <EyeSlash
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMask(true)}
                                    />
                                )}
                            </IconField.Inset>
                        </IconField.Root>

                        {info && (
                            <div className="mt-3">
                                <ProgressBar.Root value={info.percent}>
                                    <ProgressBar.Track style={{ height: "6px" }}>
                                        <ProgressBar.Indicator
                                            style={{ backgroundColor: info.color }}
                                        />
                                    </ProgressBar.Track>
                                </ProgressBar.Root>

                                <div className="flex justify-end mt-2">
                                    <Tag severity={info.severity}>
                                        {info.label}
                                    </Tag>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Xác nhận mật khẩu
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword
                                value={confirmPassword}
                                onChange={handlerConfirmPassword}
                                mask={maskConfirm}
                                onMaskChange={(e) => setMaskConfirm(e.value)}
                                disabled={!isChangepw}
                                className="w-full"
                            />

                            <IconField.Inset>
                                {maskConfirm ? (
                                    <Eye
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMaskConfirm(false)}
                                    />
                                ) : (
                                    <EyeSlash
                                        size={18}
                                        className="cursor-pointer"
                                        onClick={() => setMaskConfirm(true)}
                                    />
                                )}
                            </IconField.Inset>
                        </IconField.Root>
                    </div>

                </div>
            </form>
        </div>
    );
};


export default InformationPesonal
