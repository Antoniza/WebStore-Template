// BASE DE DATOS DE LOS PRODUCTOS

const db = [
    {
        title: 'Apple Watch Series 3',
        imgSource: './products/watch.webp',
        price: 239.67,
        about: "> GPS y un altímetro barométrico rastrean lo lejos y alto que vas.\n> Reloj deportivo y rastreador de actividad inteligente.\n> A prueba de natación para que siempre estés listo para la piscina o el océano.\n> Nuevo procesador de doble núcleo para un rendimiento más rápido de las aplicaciones."
    },
    {
        title: 'Freidora digital',
        imgSource: './products/fryer.webp',
        price: 123.35,
        about: "> Hazlo todo en uno: Este versátil producto funciona como freidora de aire, asador, horno y deshidratador, perfecto para casi cualquier tarea de cocción rápida u horneado. Prepara patatas fritas sanas con menos aceite o sin él para que queden perfectamente crujientes y sabrosas, asa un pollo entero o deshidrata esas sobras de productos que quieres comer."
    },
    {
        title: 'iPhone 13 Pro Max',
        imgSource: './products/iphone.webp',
        price: 1159.75,
        about: "> Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion. Descargas superrápidas 5G, transmisión de alta calidad.\n> Modo cinematográfico en 1080p a 30 fps. Grabación de video Dolby Vision HDR de hasta 4K a 60 fps. Rango de zoom óptico 6X.\n> Chip biónico A15. CPU de 6 núcleos con 2 núcleos de rendimiento y 4 núcleos de eficiencia. Nueva unidad de procesamiento de gráficos de 5 núcleos. Motor neural de 16 núcleos."
    },
    {
        title: 'camiseta tipo polo de algodón piqué',
        imgSource: './products/polo1.webp',
        price: 16.30,
        about: "> 100 % Algodón\n> Importado\n> Cierre de Button\n> Lavar a máquina\n> Esta camiseta deportiva está diseñada para un rendimiento óptimo y comodidad durante todo el día\n> Lo hacemos mejor cada día: afinamos cada detalle para garantizar la calidad, el ajuste y la comodidad."
    },
    {
        title: 'Hanes playera estilo polo',
        imgSource: './products/polo2.webp',
        price: 12.50,
        about: "> 100 % poliéster\n> Importado\n> Cierre de Button\n> Lavar a máquina\n> De manga corta polo rendimiento con solapa con 3 botones.\n> Secado rápido Tecnología Cool cerradura para mayor comodidad\n> 50 + UPF calificación para protección UV\n> Cinta de cuello"
    },
    {
        title: 'Timberland Cartera',
        imgSource: './products/wallet1.webp',
        price: 16.78,
        about: "> Cuero\n> Importado\n> Revestimiento de Materiales 100% hechos a mano\n> Cierre de Trifold\n> Cartera de piel 100% auténtica: esta cartera triple para hombre está hecha de piel italiana auténtica, con una textura suave que es muy suave al tacto y se verá excelente incluso a medida que envejece con el uso diario"
    },
    {
        title: 'Gildan Camisetas A',
        imgSource: './products/gildan.webp',
        price: 15.98,
        about: "> 100 % Algodón\n> Importado\n> Cierre de Tirador\n> Lavar a máquina\n> Absorbe la humedad: te mantiene fresco y seco\n> Se siente suave al tacto\n> Sin etiquetas"
    },
    {
        title: 'Fossil Grant Reloj',
        imgSource: './products/watch1.webp',
        price: 49.99,
        about: ""
    },
    {
        title: 'Under Armour Charged',
        imgSource: './products/shoes1.webp',
        price: 41.00,
        about: "> Hecho en EE. UU. o importado\n> Suela de Goma\n> Parte superior de malla ligera con impresión digital de 3 colores que ofrece una transpirabilidad completa\n> Superposiciones de cuero duradero para mayor estabilidad y que se bloquea en la zona media del pie\n> La plantilla de EVA proporciona una comodidad suave y cómoda"
    },
    {
        title: "Warner's Blissful Benefits",
        imgSource: './products/underwear.webp',
        price: 7.50,
        about: "> 90 % poliéster, 10 % elastán\n> Importado\n> Cierre de Sin cordones\n> Lavar a máquina\n> Reduce la apariencia del vientre hinchado\n> Llévalo debajo de ropa formal o casual"
    },
    {
        title: 'Calcetines de tobillo',
        imgSource: './products/socks.webp',
        price: 19.99,
        about: "> 83 % acrílico, 13 % nailon, 4 % elástico\n> HECHO en EE. UU.\n> Cierre de sin cierre\n> Se recomienda lavar a máquina con suavizante de tela líquida\n> Diseñado para la mujer que exige una excelente amortiguación, apoyo y absorción de humedad\n> Diseñado para pies de mujer con hilo extra elástico en el tobillo, un bolsillo más pequeño en el talón y una caja más pequeña para los dedos\n> Cuenta con un legendario acolchado Thorlo en el talón, antepié y en la parte superior del arco"
    },
    {
        title: 'Cantrelle Sweetheart Neckline',
        imgSource: './products/dress1.webp',
        price: 198.00,
        about: "> 100% poliéster\n> Importado\n> Revestimiento de Poliester\n> Cierre de Cremallera\n> Lavable a máquina\n> Cóctel y fiesta"
    },
    {
        title: 'Bolsa de cuero Ryder',
        imgSource: './products/purse.webp',
        price: 150.40,
        about: "> 100% cuero\n> Importado\n> Fossil está inspirado en la creatividad y el ingenio americanos. Aporta nueva vida a la industria de relojes y cueros mediante la fabricación de accesorios de moda de calidad, divertidos y accesibles\n> Conoce el bolso Ryder, el esencial para todos los días y en todas partes con un atractivo adicional. Es un sueño de multitarea con múltiples compartimentos y refuerzos expandibles para una organización óptima. Llévala como un morral, bolsa de hombro o para llevar en la mano para tu estilo favorito."
    },
    {
        title: ' Estanterías (3 unidades)',
        imgSource: './products/decor1.webp',
        price: 22.99,
        about: "> Madera\n> Estantes de exhibición sencillos: estantes flotantes de diseño simple construidos con tableros de madera maciza de paulownia y soportes de metal con recubrimiento en polvo, perfectos para mostrar y sostener coleccionables, plantas pequeñas, animales de peluche y mucho más.\n> Estantes de almacenamiento funcionales: útiles para añadir espacio adicional para almacenar y organizar objetos pequeños o desorden en el dormitorio, baño, cocina y más, ideal para limpiar la encimera."
    },
    {
        title: 'Silla Papasan de mimbre',
        imgSource: './products/decor2.webp',
        price: 183.99,
        about: "> Crea un ambiente relajado en tu hogar con nuestro giro en el diseño clásico de la silla Papasan\n> Anida en el cojín generosamente grande con relleno de dacrón\n> Disfruta del estilo bohemio de nuestro mimbre de resina duradero envuelto sobre una estructura metálica\n> Completo con un giro de 360° para girar y girar al ritmo de tu corazón"
    },
    {
        title: 'Philips H6506 Auriculares',
        imgSource: './products/headphones1.webp',
        price: 77.38,
        about: "> Escucha cada detalle: el ajuste en la oreja con almohadillas de felpa crea un sello que aísla pasivamente el ruido externo, acercándote a tu música. Los controladores de 1.260 in ofrecen graves profundos y sonido claro y detallado\n> Libre para inmorir: H6505 viene con tecnología de cancelación activa de ruido de última generación. Los micrófonos internos en los auriculares filtran el sonido no deseado, lo que te proporciona una experiencia auditiva increíble. Recibes llamadas más claras, en interiores o exteriores"
    },
    {
        title: 'Beats Studio Buds',
        imgSource: './products/headphones2.webp',
        price: 119.95,
        about: "> La plataforma acústica personalizada ofrece un sonido potente y equilibrado\n> Controla tu sonido con dos modos de escucha diferentes: La cancelación activa de ruido (ANC) y el modo de transparencia\n> Tres tamaños de almohadillas suaves para un ajuste estable y cómodo mientras que garantiza un sellado acústico óptimo\n> Hasta 8 horas de tiempo de escucha 1 (hasta 24 horas combinado con funda de carga de bolsillo)"
    },
    {
        title: 'Cargador inalámbrico 3 en 1',
        imgSource: './products/charge.webp',
        price: 149.99,
        about: "> Reimagina cómo cargas con la alineación MagSafe y una solución de carga 3 en 1 para tus artículos esenciales de Apple: iPhone 13 o iPhone 12, Apple Watch y AirPods, todo al mismo tiempo\n> Carga inalámbrica rápida para tu iPhone 13 o iPhone 12 de hasta 15 W\n> Carga hasta un 33% más rápida para Apple Watch Series 7*"
    }
];

let myCar = [];

// FUNCION PARA ABRIR LA VISUALIZACION DEL PRODUCTO

function viewProduct(index) {
    // SET VISIBLE 
    document.getElementById('viewFrame').style.display = 'flex';

    // CREACION DE TITULO DE PRODUCTO
    var viewTitle = document.getElementById('viewTitle');
    var titleContainer = document.createElement('h1');
    titleContainer.setAttribute('id','title');
    titleContainer.innerText = (db[index].title);
    viewTitle.appendChild(titleContainer);

    // CREACION DE IMAGEN DE PRODUCTO
    var viewImage = document.getElementById('viewImage');
    var imageContainer = document.createElement('img');
    imageContainer.setAttribute('src', db[index].imgSource);
    imageContainer.setAttribute('id','image');
    viewImage.appendChild(imageContainer);

    // CREACION DE LA DESCRIPCION DEL PRODUCTO
    var viewAbout = document.getElementById('viewAbout');
    var aboutContainer = document.createElement('p');
    aboutContainer.setAttribute('id','about');
    aboutContainer.innerText = db[index].about;
    viewAbout.appendChild(aboutContainer);

    // CREACION DEL PRECIO DEL PRODUCTO
    var viewPrice = document.getElementById('viewPrice');
    var priceContainer = document.createElement('p');
    priceContainer.setAttribute('id','price');
    priceContainer.innerText = '$'+db[index].price;
    viewPrice.appendChild(priceContainer);

    // CREACION DEL BOTON PARA AGREGAR A CARRITO
    var addContainer = document.getElementById('addToCar');
    var addButton = document.createElement('button');
    addButton.setAttribute('id','addButton');
    addButton.innerText = 'Agregar a carrito';

    // EVENTO CLICK PARA EL BOTON DE AGREGAR A CARRITO
    addButton.addEventListener('click',() => {
        alert('Nuevo producto en carrito');
        myCar.push(db[index]);
    });

    addContainer.appendChild(addButton);


}

// FUNCION PARA CERRAR LA VISUALIZACION DEL PRODUCTO

function closeViewProduct() {
    // SE OCULTA LA VISUALIZACION DE PRODUCTO
    document.getElementById('viewFrame').style.display = 'none';

    // SE REMUEVEN LOS ELEMENTOS PARA PODER VER EL PROXIMO
    document.getElementById('title').remove();
    document.getElementById('image').remove();
    document.getElementById('about').remove();
    document.getElementById('price').remove();
    document.getElementById('addButton').remove();
}

// FUNCION PARA VISUALIZACION DE CARRITO DE COMPRAS
function viewCar() {
    var total = 0;
    if(myCar.length > 0){
        for(let i=0; i<myCar.length;i++) {

            // SE CREA EL CONTENEDOR DEL CARRITO
            var carList = document.getElementById('products-list');
            var productContainer = document.createElement('div');
            productContainer.setAttribute('id','product');
    
            // SE CREA EL ESPACIO PARA EL TITULO EN EL CARRITO
            var productTitle = document.createElement('div');
            productTitle.setAttribute('id','product-title');
            productTitle.innerText = myCar[i].title;
            productContainer.appendChild(productTitle);

            // SE CREA EL ESPACIO PARA LA CANTIDAD EN EL CARRITO
            var productCount = document.createElement('div');
            productCount.setAttribute('id','product-count');
            productCount.innerText = '1';
            productContainer.appendChild(productCount);

            // SE CREA EL ESPACIO PARA EL PRECIO EN EL CARRITO
            var productPrice = document.createElement('div');
            productPrice.setAttribute('id','product-price');
            productPrice.innerText = '$'+myCar[i].price;
            productContainer.appendChild(productPrice);
            
            carList.appendChild(productContainer);

            total+=myCar[i].price;
        }
        document.getElementById('viewCar').style.display = 'flex';
        document.getElementById('totalPay').innerText = '$'+total.toFixed(2);
    }else{
        alert('El carrito esta vacio');
    }
}

function closeViewCar() {
    // SE OCULTA LA VISUALIZACION DE PRODUCTO
    document.getElementById('viewCar').style.display = 'none';
    document.getElementById('product').remove();
}


// FUNCION PARA EFECTUAR EL PAGO
function Pay() {
    alert('Pago realizado exitosamente');
    myCar = [];
    document.getElementById('viewCar').style.display = 'none';
}