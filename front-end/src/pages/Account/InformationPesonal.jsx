import { ChevronDown, Envelope, Map, Phone } from '@primeicons/react';
import { User } from '@primeicons/react/user';
import { InputGroup } from '@primereact/ui/inputgroup';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { useUser } from '../../hooks/UserContext';
import { useState } from 'react';
import { Eye } from '@primeicons/react/eye';
import { EyeSlash } from '@primeicons/react/eye-slash';
import { IconField } from '@primereact/ui/iconfield';
import { InputPassword } from '@primereact/ui/inputpassword';

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
    const { user, password } = useUser()
    const [isEdit, setIsEdit] = useState(false)
    const [isChangepw, setIsChangepw] = useState(false)
    const [value, setValue] = useState('');
    const level = getStrength(value);
    const info = level ? strengthMap[level] : null;
    const [mask, setMask] = useState(true);
    const handlerchange = () => {

    }
    return (
        <div>
            <h3 className="fw-bold">
                Thông tin cá nhân <span className="text-danger">*</span>
            </h3>
            <form>
                <Button
                    rounded
                    type="button"
                    className="mb-3 bg-[#6f4e37]"
                    onClick={() => setIsEdit((prev) => !prev)}
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
                                value={user.fullName}
                                placeholder="Tên người dùng"
                                disabled={!isEdit}
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
                                value={user.phone || ""}
                                placeholder="Số điện thoại"
                                disabled={!isEdit}
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
                                value={user.email || ""}
                                placeholder="Email"
                                disabled={!isEdit}
                            />
                        </InputGroup.Root>
                    </div>
                </div>
            </form>

            <h3 className="fw-bold mt-5">
                Thay đổi mật khẩu
            </h3>
            <form>
                <Button
                    rounded
                    type="button"
                    className="mb-3 bg-[#6f4e37]"
                    onClick={() => setIsChangepw((prev) => !prev)}
                >
                    {isChangepw ? "Lưu" : "Đổi mật khẩu"}
                </Button>
                <div className="flex flex-col gap-4 max-w-md">
                    <div>
                        <label className="block mb-2 font-medium">
                            Mật khẩu cũ
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword className="w-full" disabled/>
                            <IconField.Inset>
                                <Eye className="cursor-pointer" />
                            </IconField.Inset>
                        </IconField.Root>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Mật khẩu mới
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword className="w-full" />
                            <IconField.Inset>
                                <Eye className="cursor-pointer" />
                            </IconField.Inset>
                        </IconField.Root>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Xác nhận mật khẩu
                        </label>

                        <IconField.Root className="w-full">
                            <InputPassword className="w-full" />
                            <IconField.Inset>
                                <Eye className="cursor-pointer" />
                            </IconField.Inset>
                        </IconField.Root>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default InformationPesonal
