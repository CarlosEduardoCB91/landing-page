import './Banner.css'
import React, { useState, useEffect  } from 'react';


const banners = [
    "/imagens/Banner00.jpg",
    "/imagens/Banner01.jpg",
    // Adicione mais caminhos ou URLs conforme necessário
];

export const Banner = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    // Configura um temporizador para mudar o banner a cada 3 segundos
    const timer = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000); // 3000 ms = 3 segundos

    // Limpa o temporizador quando o componente é desmontado
    // para evitar atualizações de estado em um componente desmontado
    return () => clearInterval(timer);
  }, []); // O array vazio [] como segundo argumento significa que este efeito roda apenas uma vez, após o primeiro render

  return (
    <header className="banner">
    <div>
      <img 
        src={banners[currentBannerIndex]} 
        alt="Banner lateral" 
        style={{ width: 'auto', height: 'auto' }} // Ajuste o tamanho conforme necessário
      />
    </div>
    </header>
  );
}
