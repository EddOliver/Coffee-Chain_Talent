[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/Ver-Website-blue">](https://main.dlf5ib9gvebgm.amplifyapp.com/) [<img src="https://img.shields.io/badge/Ver-Video-red">](https://www.youtube.com/watch?v=sUAdnfDavvE)

# Coffee Chain

<img src="https://i.ibb.co/pfGfzkL/logos.png" width=300> 

#### Marketplace con sistema de pagos digitales, que otorga trazabilidad y certificados digitales basados en Blockchain.

# Problema

Las organizaciones agropecuarias de la fundación Obio, respaldada por Citi Banamex, no cuentan con una plataforma electrónica para vender y distribuir sus productos.

El problema va mucho más a fondo, al hacer una investigación exhaustiva del problema encontramos que el tipo de productos y bienes que ofrece Obvio (Café, miel y otros productos orgánicos, socialmente responsables y de pequeños productores) a pesar de ser ofrecidos por otras cooperativas y empresas en su mayor parte NO cuentan con esta forma de comercio electrónico. Esto los limita y los atrasa en su potencial al compararse con una industria similar que es la de la cerveza artesanal que factura miles de millones de pesos al año, cuya capacidad digital es enorme y cuentan con todas las herramientas de comercio electrónico y distribución.


# Objetivo particular del reto:

Que organizaciones de productores agropecuarios (miel, café, cacao, madera, entre otros) con prácticas agroecológicas y certificadas de producción sustentable, cuenten con una plataforma Web o App digital en la que difundan sus sistemas de producción, promocionen y comercialicen productos de alta calidad sin intermediarios que son benéficos para la salud y amigables con la biodiversidad, al tiempo que personas preocupadas por consumir productos naturales puedan acceder a estos productos de forma directa, cuidando su salud y apoyando directamente a los habitantes de las comunidades donde se elaboran.


# Solucion

Plataforma de comercialización (Marketplace) y difusión de comerciantes de  café con certificados de procedencia en blockchain que otorgan nuevos niveles de satisfacción al comprador. 

Lógicamente el objetivo del reto es crear un marketplace con pagos electrónicos más ciertos diferenciadores que darán potencia a cada equipo. Es por esto que al presentar nuestro análisis anterior que nuestro gran diferenciador serán certificados de procedencia basados en blockchain para garantizar al consumidor un producto de gran calidad, responsabilidad social y otros desde el origen. Así como trazabilidad de todo el trayecto de vida y camino recorrido por el producto.

Este concepto de distribución y verificación es considerado para evitar la pérdida de datos, modificación o fraude. 

La plataforma muestra los diferentes productos que son ofrecidos por pequeños comerciantes, donde se pueden dar a conocer. En esa misma página cada comerciante agrega el lugar de creación del producto, el origen y fecha. Esto nos permite conocer la procedencia o “provenance” del producto. 

Todo integrado a una Blockchain. Donde el registro es inmutable y seguro. Para que cualquier persona pueda conocer la autenticidad del producto.

Así mismo, en la página se cuenta con las herramientas de pago digital, que permitirán pagar con cualquier tarjeta de preferencia. Aparte de poder hacer pagos tradicionales cuenta con la tecnología para poder hacer pagos con Criptomonedas, en este caso con SOL (Solana), pero con la posibilidad de extenderse a otras más.


## Arquitectura de la solución

<img src="https://i.ibb.co/rxMv0zz/arqui.png">
Utilizamos en su mayor parte los servicios de AWS cloud para diseñar el marketplace como una Webapp. Para los temas de pagos, tarjetas, transferencias, Know your customer, creacion de cuentas y demás, utilizaremos las APIs del proveedor de soluciones digitales más grande del mundo en soluciones fintech que es Rapyd. Rapyd es el backend detras de grandes, así  como marketplaces enormes como Rappi, Uber, cornershop, IKEA, paysafe entre otras, si conoce un marketplace probablemente utiliza Rapyd y nosotros resulta que sabemos utilizar sus APIs:

https://docs.rapyd.net/build-with-rapyd

Asimismo la otra parte complicada de nuestra solución es la creación de una blockchain privada dentro de Solana (que fue escogida por ser portentosa en transacciones) asi como las características de trazabilidad de las cuales nos basaremos en endpoints sobre un servidor en AWS mandando y recibiendo información de esta blockchain.   

# Diferenciadores principales

Al tratarse el reto de hacer un marketplace el diseño y facilidad de uso asimismo, serán de gran importancia pero creo que nuestra idea de trazabilidad y la utilización de la Blockchain de Solana para incrementar el valor percibido de los productos será el principal valor diferenciador. Esto no solamente hace que los certificados (de que el producto es Orgánico, de una zona específica, socialmente Responsable y de pequeños productores) sean mucho más potentes sino les da a estos mismos una garantía adicional que solamente el sello no les otorga. Tras nuestra investigación los sectores y consumidores de este tipo de producto valoran de gran manera este tipo de certificados y aunado a la trazabilidad y el rastreo de la vida y procedencia del producto añaden inclusive seguridad sanitaria.



### A partir de aqui, se discute a profundidad cada uno de los elementos diferenciadores.

# Análisis

En los productos de Alta especialidad, como lo es café y miel, el mercado BUSCA certificados que avalen la procedencia y el trato del producto, así como los certificados especiales de cuidado del medio ambiente, responsabilidad laboral, entre otros. 

Investigaciones de varias fuentes muestran que los consumidores modernos se inclinan por marcas que son social y ambientalmente amigables. Consideremos los siguientes números:

* El 65% de los consumidores buscan productos que les ayuden a llevar una vida más sostenible y socialmente responsable.
* El 60% de los consumidores compran productos y servicios de empresas que son social o ambientalmente responsables.
* El 54% de los consumidores intenta comprar productos o servicios de marcas que se posicionan en cuestiones sociales o medioambientales.
* El 43% tiende a comprar productos y servicios de marcas de alto propósito más que de sus competidores de bajo propósito.

Y esto aumenta de sobre medida con el ingreso económico.


Estos certificados permiten que los consumidores se aproximen al producto y tengan compromiso con el producto.

De acuerdo a W3C, Provenance es el término dado para hacer referencia a la información de origen relacionada a un producto. La información de procedencia es crucial para determinar si es de confianza, como usa las referencias y como se otorga el crédito al productor original. La gente genera conclusiones dependiendo de la procedencia del producto. 


## Sobre la procedencia: Provenance y su importancia

Provenance se relaciona con todo un rango de fuentes de información y de uso.

Lofty nos dice que provenance es la historia de un objeto, donde se creó y quien fue dueño del objeto. Ejemplo en el mundo del arte, la procedencia incluiría casas de subasta, intermediarios, galerías donde se ha exhibido, cuantas veces se ha vendido, si fue a una institución pública o privada, entre otras. 

Los expertos están interesados en la procedencia de un objeto, lo más importante es que un objeto con buena información de procedencia ayuda a confirmar su autenticidad. 

Un caso de éxito es la cerveza artesanal, cuyo mercado global es de casi $555 Billones de Dólares proyectados para 2027, en EU el mercado alcanza un aproximado de 44 Billones, mientras que se espera un 24.2% de CARG 

El mercado de Café es de 134 billones para el 2024, con crecimiento anual de 5.32% Usaremos los modelos de éxito de Cerveza artesanal para un crecimiento de la venta de productos.
  
## Sobre la trazabilidad

La pandemia nos ha enseñado que nuestros sistemas de trazabilidad son ineficientes y son en los que dependemos globalmente. Las industrias dedicadas a las comidas y las bebidas se enfrentan a nuevos retos. Entre ellos, problemas de confianza de los consumidores y la ruptura de cadena de suministros.  

Cadenas como Walmart empiezan a invertir y trabajar con empresas que se dedican a “provenance” para alimentos. Contando actualmente con 23 líneas de productos ya incluidas en la blockchain con sus respectivas procedencias. Se espera que crezca a 100 productos más para el final del año. Entre ellos se incluirá carnes, arroz, hongos, aceite de cocina, etc.

### Blockchain

Es una tecnología que cambia la manera de realizar transacciones. De manera digital mantiene un historial individual de transacciones. Crea una capa virtual segura a partir de criptografía, el cual es distribuido y accesible para cada parte. El mayor beneficio de esta capa digital es la transparencia, la seguridad y la velocidad. 

Como funciona… Cuando se genera una transacción, es validada por el ecosistema llamado cadena de bloques. Una vez verificado, la transacción es grabada como un bloque digital, contiene el registro de la parte anterior, una etiqueta con el tiempo y la transacción, todo esto encriptado para seguridad. Cualquier transacción siguiente es asegurada y creada de la misma manera, creando un bloque nuevo con una huella de las anteriores transacciones. Eso crea una cadena individual de transacciones de un solo producto que puede dar seguimiento a la procedencia. Estos bloques forman parte de una red que está distribuida a todos los participantes.

<img src="https://i.ibb.co/P5BF8KY/lechain.png">


## User Persona

<img src="https://www.ccmss.org.mx/wp-content/uploads/familia-uciri-768x768.jpg" width= 500>

Campesino productor de Café, Perteneciente a la “Familia UCIRI” 

Es: padre de familia y campesino
Edad: Adulta
Lugar: Oaxaca

Bio: 
Es campesino en Oaxaca, forma parte de la organización cafetalera más antigua del estad. Tiene familia, contando con una esposa y un hijo. 

Gustos:

Le gusta trabajar en el cambio, se dedica a la siembra de café y a la producción de este. Le gusta pasar tiempo con su familia. Y su amor por el café hace que forme parte de la “Familia UCIRI” y que se encuentre en la búsqueda de condiciones de producción y venta del café más justos y sostenibles.

Miedos:

La cuarentena por el covid 19 está causando una severa crisis económica para las socias y socios de la UCIRI.

Incertidumbre productiva que crea el cambio climático.

No lograr producir lo que esperaban,y tener el temor del compromiso adquirido a través de los créditos y los intereses crecientes.







## Customer persona 

<img src="https://jeisoni.com/image/cache/catalog/tovar_img/7ef1a22e-cf3f-4821-8a00-16b4f07b3c57-1-480x725w.jpeg" width= 500>


Nombre: Ana Sofía 
Edad: Adulto Joven 
 Lugar: Residencia CDMX, Interlomas

Bio:

Es licenciada en mercadotecnia, egresada del ITAM, cuenta con trabajo en una empresa de marketing digital, ella le interesa cuidar del medio ambiente, Consume productos de calidad y es una persona que le gusta de probar productos que se ajusten a sus necesidades e ideologias

Gustos:

Le gusta el café por la mañana y por las horas laborales, le gusta postear a cada momento en sus redes sociales y le gusta dar una buena imagen a su circulo social. 
Le gusta comprar en línea y cuenta con integraciones a carteras digitales.

Miedos:

No encontrar productos que sean amigables con el medio ambiente.
Consumir productos que tengan explotación laboral. 
Dar una mala imagen en sus redes sociales y en su círculo cercano.


# Referencias

1 W3C, 2010 what is provenance https://www.w3.org/2005/Incubator/prov/wiki/What_Is_Provenance 

2 Lofty, What Is Provenance and Why Is It Important,
https://www.lofty.com/pages/what-is-provenance-and-why-is-it-important#:~:text=Provenance%20is%20the%20history%20of%20the%20ownership%20and%20transmission%20of%20an%20object.&text=Experts%20are%20interested%20in%20the,that%20an%20item%20is%20authentic. 

3 Provenance Proof https://www.provenanceproof.com/provenance-proof-blockchain 

4 Business Wire, 2021 https://www.businesswire.com/news/home/20210401005352/en/Global-Craft-Beer-Market-Report-2021-Market-to-Reach-554.3-Billion-by-2027---U.S.-Market-is-Estimated-at-44.3-Billion-While-China-is-Forecast-to-Grow-at-24.2-CAGR---ResearchAndMarkets.com 

5 Business Wire 2021
https://www.businesswire.com/news/home/20200513005323/en/Global-Coffee-Market-2020-to-2024---Insights-Forecast-with-Potential-Impact-of-COVID-19---ResearchAndMarkets.com 


6 PRN News Sire Far More Than Walmart China -- How VeChain Leads Blockchain Adoption in the Food Industry Around the Globe
https://www.prnewswire.com/news-releases/far-more-than-walmart-china--how-vechain-leads-blockchain-adoption-in-the-food-industry-around-the-globe-301320495.html 

7 VeChain Foundation, 2021, Walmart China Takes on Food Safety with VeChainThor Blockchain Technology
https://medium.com/vechain-foundation/walmart-china-takes-on-food-safety-with-vechainthor-blockchain-technology-b1443e0e079c 
8 Comunidades Fuertes, Territorios Vivos, UCIRI nos llama a valorar y a consumir el café campesino y justo
https://www.ccmss.org.mx/uciri-nos-llama-a-valorar-y-a-consumir-el-cafe-campesino-y-justo/
