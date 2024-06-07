
const formatCurrency = (number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(number);
  };
  
export default formatCurrency;