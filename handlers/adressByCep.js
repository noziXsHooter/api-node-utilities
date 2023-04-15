
const getAdressByCep = async (req, res) => {
  
  try {
      const { cep } = req.body;
      const cepValid = /^[0-9]{8}$/;
      
      if(!cepValid.test(cep)){
        return res.status(400).json({ error: 'CEP Inválido' });
      }
      
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if(!response.ok){
        throw await res.status(400).json();
      }

      const responseCep = await response.json();
      
      return res.status(200).json({ responseCep });
    } catch (error) {
      return res.status(400).json({ error: error });
    } 
};

module.exports = getAdressByCep;