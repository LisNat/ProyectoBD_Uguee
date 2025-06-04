"use client";
import React, { useState } from "react";
import { FormField } from "./FormField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { ActionButtons } from "./ActionButtons";

export function RegistrationForm() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [idEstudiantil, setIdEstudiantil] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [rol, setRol] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            nombre,
            apellido,
            idEstudiantil,
            telefono,
            direccion,
            correo,
            contrasena,
            rol,
            acceptedTerms,
        };

        console.log("Datos enviados:", data);
    };

    return (
        <section className="flex flex-col flex-1 justify-start items-center p-11 pl-30 max-md:p-8 max-sm:p-5">
            <header
                className="mb-4 text-5xl font-bold text-center text-red-700 leading-[52px] max-md:text-4xl max-md:leading-10 max-sm:mb-6 max-sm:text-3xl max-sm:leading-9"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
                Crear una cuenta
            </header>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 items-start max-w-[554px] w-[554px] max-md:w-full max-sm:gap-5">
                <FormField
                    label="Nombre"
                    placeholder="Pepito"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <FormField
                    label="Apellido"
                    placeholder="Pérez"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                <FormField
                    label="ID estudiantil "
                    placeholder="2223510-3743"
                    optional={true}
                    value={idEstudiantil}
                    onChange={(e) => setIdEstudiantil(e.target.value)}
                />
                <FormField
                    label="Teléfono"
                    placeholder="3157277727"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <FormField
                    label="Dirección"
                    placeholder="Cll 2C Oeste #82 A12"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <FormField
                    label="Correo institucional "
                    type="email"
                    placeholder="estudiante@institucion.edu.co"
                    optional={true}
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <FormField
                    label="Contraseña"
                    type="password"
                    placeholder="∗∗∗∗∗∗∗∗∗∗∗∗"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <SelectField
                    label="Rol"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                />
                <CheckboxField
                    checked={acceptedTerms} onChange={setAcceptedTerms} />
                <ActionButtons />
            </form>
        </section>
    );
}
