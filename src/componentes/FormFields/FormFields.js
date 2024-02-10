import React from 'react';
import FieldText from '../FieldText'; // Ajuste o caminho conforme necessário
import Button from '../Button'; // Ajuste o caminho conforme necessário

export function FormFields({ formData, fieldErrors, handleFieldChange }) {
  return (
    <>
      <FieldText
        label="*Nome Completo:"
        placeholder="Digite seu Nome Completo"
        value={formData.userName}
        onChange={(e) => handleFieldChange('userName', e.target.value)}
      />
      {fieldErrors.userName && <div className="field-error">{fieldErrors.userName}</div>}

      <FieldText
        label="*Empresa:"
        placeholder="Digite o nome da Empresa"
        value={formData.companyName}
        onChange={(e) => handleFieldChange('companyName', e.target.value)}
      />
      {fieldErrors.companyName && <div className="field-error">{fieldErrors.companyName}</div>}

      <FieldText
        label="*DDD + Celular:"
        placeholder="Digite seu Celular (xx)xxxxx-xxxx"
        value={formData.cellphone}
        onChange={(e) => handleFieldChange('cellphone', e.target.value)}
      />
      {fieldErrors.cellphone && <div className="field-error">{fieldErrors.cellphone}</div>}

      <FieldText
        label="*Email:"
        placeholder="Digite seu Email"
        value={formData.email}
        onChange={(e) => handleFieldChange('email', e.target.value)}
      />
      {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}

      <div className="button">
        <Button text="Enviar" />
      </div>
    </>
  );
}