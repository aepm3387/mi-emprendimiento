const productos = [
  {
    nombre: "Santal 33 Le Labo",
    precio: "150.000",
    descripcion: "Santal 33 de Le Labo es un perfume que toca la universalidad sensual… que embriagaría tanto a un hombre como a una mujer… que introduce con cardamomo, iris, violeta, ambroxan que crepitan en la fórmula y aportan a esta aleación de madera humeante (sándalo australiano, madera de cedro) algunas notas especiadas, coriáceas y almizcladas, y le da a este perfume su firma unisex y su comodidad adictiva.",
    imagen:
      "https://granaroma.co/wp-content/uploads/2024/03/santal-33-le-labo.jpg",
  },
  {
    nombre: "Ombre Nomade Louis Vuitton",
    precio: "140.000",
    descripcion: "En el transcurso del día, el sol traza unos patrones iridiscentes de luz y sombra sobre las dunas. Con un paisaje de fondo que parece inmóvil, el desierto cobra vida y atrae al viajero hacia una emocionante odisea. Concebido para quienes disfrutan con las esencias particulares, la fragancia Ombre Nomade de Louis Vuitton concentra esa sensación de infinidad en uno de los ingredientes más emblemáticos de la perfumería: la madera de oud. El maestro perfumista Jacques Cavallier-Belletrud ha amalgamado esta materia prima, de carácter rebelde y espíritu embriagador, con un toque de benjuí y notas de frambuesa. A lo lejos, se eleva hacia el cielo una ligera bruma de incienso ahumado. La madera de agar alcanza un nivel de misticismo inédito.",
    imagen:
      "https://granaroma.co/wp-content/uploads/2024/03/ombre-nomade-louis-vuitton-1.jpg",
  },
  {
    nombre: "Delina Parfum de Tom Ford",
    precio: "155.000",
    descripcion: "Un ramo floral encantador y firmemente moderno. Delina es una fragancia muy matizada que es a la vez dulce y sensual. El eau de parfum se deleita con sus acordes florales que están dominados por la rosa turca, el lirio de los valles y la peonía, mezclados con las notas ácidas y redondeadas de lichi, ruibarbo, bergamota y nuez moscada. La vainilla acentúa la sensualidad de la composición en la base, mezclándose con almizcle blanco, cachemira, madera de cedro e incienso.",
    imagen:
      "https://granaroma.co/wp-content/uploads/2024/03/delina-parfums-de-marly-eau-de-parfum.jpg",
  },
  {
    nombre: "Baccarat Rouge 540 Extrait de Parfum",
    precio: "180.000",
    descripcion: "Versión Extrait de Parfum – Baccarat Rouge 540 nace del encuentro entre Maison Francis Kurkdjian y Baccarat para celebrar el 250 cumpleaños del fabricante de cristales. El aroma amaderado libera una alquimia poética, una firma olfativa muy condensada y gráfica. Las facetas de jazmín, el azafrán radiante realzan las notas minerales de ámbar gris y los tonos amaderados del cedro recién cortado. Brillante y elegante, Baccarat Rouge 540 eau de parfum acaricia la piel como un susurro floral ambarino y amaderado.",
    imagen:
      "https://granaroma.co/wp-content/uploads/2024/05/61e4-xaZkSL._SL1500_.jpg",
  },
  {
    nombre: "Il Ego de Ilmin",
    precio: "170.000",
    descripcion: "Elaborada con acertadas dosis de Cardamomo y Bergamota, IL EGO de ILMIN desdibuja los límites del deseo elevando la experiencia más allá del firmamento para convertirse en una joya única en su tipo. Compuesta por notas medias de Violeta e Iris que le otorgan aires profundamente florales, la experiencia olfativa se intensifica gracias a sus notas de Ámbar, un lujoso ingrediente de exótica destilación, que termina por develar el espíritu sensual y determinado de Il Ego.",
    imagen:
      "https://granaroma.co/wp-content/uploads/2024/03/ILEGO_540x-1.webp",
  },
  {
    nombre: "CH 212 Men NYC",
    precio: "130.000",
    descripcion: "212 se lanzó en 1997. La Nariz detrás de esta fragancia es Alberto Morillas. Las Notas de Salida son flor de azahar del naranjo, flor de cactus, bergamota y mandarina; las Notas de Corazón son azucena, fresia, gardenia, camelia blanca, jazmín, lirio de los valles (muguete), rosa y peonía; las Notas de Fondo son almizcle y sándalo",
    imagen:
      "https://www.perfumesbogota.com.co/cdn/shop/products/perfume-ch-212-men-nyc-100ml-hombre-eau-de-toilette-6685599_1024x1024@2x.jpg?v=1758672304",
  },
  {
    nombre: "Yara de Lattafa",
    precio: "180.000",
    descripcion: "Yara de Lattafa Perfumes es una fragancia de la familia olfativa para Mujeres.Las Notas de Salida son heliotropo, orquídea y naranja tangerina; las Notas de Corazón son Gourmand Accord y frutas tropicales; las Notas de Fondo son vainilla, sándalo y almizcle",
    imagen:
      "https://www.perfumesbogota.com.co/cdn/shop/products/perfume-lattafa-yara-eau-de-parfum-100ml-mujer-2321392_1024x1024@2x.jpg?v=1758669458",
  },
  {
    nombre: "Hugo Just Different",
    precio: "135.000",
    descripcion: "Hugo Just Different se lanzó en 2011.Las Notas de Salida son menta y manzana Granny Smith; las Notas de Corazón son albahaca, fresia y cilantro; las Notas de Fondo son cachemira, pachulí, incienso de olíbano (franquincienso) y ládano",
    imagen:
      "https://www.perfumesbogota.com.co/cdn/shop/products/perfume-hugo-just-different-eau-de-toilette-125ml-hombre-3768511_1024x1024@2x.jpg?v=1758671523",
  },
];

// Render de productos
const productList = document.getElementById("productList");

productos.forEach((p, index) => {
  const Nuevo = index < 3; // Primeros 3 productos como "Nuevo"
  productList.innerHTML += `
        <div class="product">
            <div class="product-image-wrapper">
                ${Nuevo ? '<span class="product-badge">Nuevo</span>' : ''}
                <img src="${p.imagen}" alt="${p.nombre}">
            </div>
            <div class="product-info">
                <h3>${p.nombre}</h3>
                <p class="product-description">${p.descripcion}</p>
                <div class="product-price">${p.precio}</div>
                <button class="btn">
                    <a href="https://wa.me/573176781430?text=Hola%2C%20quiero%20más%20información%20sobre%20${encodeURIComponent(p.nombre)}">
                        Consultar Ahora
                    </a>
                </button>
            </div>
        </div>
  `;
});

