export const validateForm = (formData) => {
    let isValid = true;
    let errors = {
      userName: '',
      companyName: '',
      cellphone: '',
      email: '',
    };
  
    if (!formData.userName) {
      errors.userName = 'O campo Nome Completo é obrigatório.';
      isValid = false;
    }
  
    if (!formData.companyName) {
      errors.companyName = 'O campo Empresa é obrigatório.';
      isValid = false;
    }
  
    if (!formData.cellphone) {
      errors.cellphone = 'O campo Celular é obrigatório.';
      isValid = false;
    } else if (formData.cellphone.replace(/\D/g, '').length !== 11) {
      errors.cellphone = 'O celular deve ter 11 dígitos, incluindo o DDD.';
      isValid = false;
    }
  
    if (!formData.email) {
      errors.email = 'O campo Email é obrigatório.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Formato de email inválido.';
      isValid = false;
    }
  
    return { isValid, errors };
  };