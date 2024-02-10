import React, { useState } from 'react';
import '../FieldText/FieldText.css';
import './Form.css';
import Dialog from '../Dialog'
import FormFields from '../FormFields';
import TextWhyChooseUs from '../TextWhyChooseUs';
import { validateForm } from '../../helpers/validate';
import api from '../../services/api';

export function Form() {
  const [formData, setFormData] = useState({
    userName: '',
    companyName: '',
    cellphone: '',
    email: '',
  });

  // Estado para armazenar os erros específicos de cada campo
  const [fieldErrors, setFieldErrors] = useState({
    userName: '',
    companyName: '',
    cellphone: '',
    email: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [result] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { isValid, errors } = validateForm(formData);
      if (!isValid) {
        setFieldErrors(errors);
        return;
      }

      const data = {
        'entry.468314517': formData.userName,
        'entry.1439008073': formData.companyName,
        'entry.19123978': formData.cellphone,
        'entry.764136297': formData.email,
      };

      await api.submitForm(data);

      setFormData({
        userName: '',
        companyName: '',
        cellphone: '',
        email: '',
      });
      setDialogOpen(true);
      setDialogContent('Formulário enviado com sucesso!');
    }
    catch (error) {
      setDialogOpen(true);
      setDialogContent('Erro ao enviar formulário. Por favor, tente novamente.');
      setFieldErrors({
        userName: '',
        companyName: '',
        cellphone: '',
        email: '',
      });
    }
  };


  const handleFieldChange = (fieldName, value) => {
    let newValue = value;
    // Aplica validações específicas ao alterar o valor dos campos
    if (fieldName === 'userName') {
      newValue = value.replace(/\d+/g, '');
    } else if (fieldName === 'cellphone') {
      newValue = value.replace(/[^\d]/g, '').slice(0, 11);
      if (newValue.length > 2) {
        newValue = newValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));

    // Limpa o erro específico do campo ao alterá-lo
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <section className='typeForm'>
          <form onSubmit={handleSubmit}>
            <h2 className="form-h">Entre em contato conosco hoje mesmo para começar a jornada da transformação digital!</h2>
            <FormFields formData={formData} fieldErrors={fieldErrors} handleFieldChange={handleFieldChange} />
          </form>
          {result && <div>Resposta da API: {JSON.stringify(result)}</div>}
        </section>
      </div>
      <TextWhyChooseUs />
      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <p>{dialogContent}</p>
      </Dialog>
    </div>
  );
}