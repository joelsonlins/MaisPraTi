import { useState } from 'react'
import "./Produtos.style.css"


function Produtos(){
  const listOfProducts = [
    {name: 'Placa de Video', inStock: false, image: 'https://images7.kabum.com.br/produtos/fotos/150657/placa-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_g.jpg'},
    {name: 'Cadeira Gamer', inStock: true, image: 'https://images7.kabum.com.br/produtos/fotos/sync_mirakl/528817/Cadeira-Gamer-Prizi-Canvas-Azul_1711651694_g.jpg'},
    {name: 'Monitor Gamer Curvo', inStock: false, image: 'https://images9.kabum.com.br/produtos/fotos/613319/monitor-gamer-curvo-samsung-odyssey-49-oled-super-ultrawide-240hz-0-03ms-displayport-hdmi-freesync-premium-prata-ls49cg930slmzd_1722524398_g.jpg'},
    {name: 'Fonte Gamer', inStock: false, image: 'https://images2.kabum.com.br/produtos/fotos/461382/fonte-gamer-rise-mode-zeus-500w-80-plus-white-pfc-ativo-preto-rm-psu-01-wt-500_1727696736_g.jpg'},
    {name: 'Headset Gamer HyperX', inStock: false, image: 'https://images0.kabum.com.br/produtos/fotos/461160/headset-gamer-hyperx-cloud-stinger-2-drivers-50mm-preto-519t1aa_1688580735_g.jpg'}
  ];

  const [showProduct, setShowProduct] = useState(true);

  const filterProduct = showProduct
    ? listOfProducts.filter((listOfProduct) => listOfProduct.inStock)
    : listOfProducts;

    const toggleShowInStock = () => {
      setShowProduct((prev) => !prev);
    };
    
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <button onClick={toggleShowInStock}>
          {showProduct ? 'Todos os Produtos' : 'Apenas em Estoque'}
        </button>
        <ul className='produtos'>
          {filterProduct.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.name} width="150" height="150" />
              <p>{product.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Produtos