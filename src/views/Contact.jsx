
const Contact = () => {
  return (
    <main className="mt-[25vh] px-6 h-[75vh]">
      <article>
        {/* Office image, description, Address, mail, rrss */}
        <section className="text-left mb-48">
          <div className="lg:grid grid-cols-12 lg:gap-x-4">
            <div className="col-span-8 text-left">
              <img className="w-full" src="/oficina2.jpeg" alt="office" />
            </div>
            <div className="col-span-4 text-left flex flex-col">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-2 pt-6 lg:pt-0">
                  <p className="font-[supreme-bold] uppercase">Contacto</p>
                  <div className="font-[supreme-light] text-xs md:text-base uppercase">
                    <p>Andres de Fuenzalida 17</p>
                    <p>Oficina 52</p>
                    <p>Providencia, Santiago</p>
                    <p>ZIP 7510077</p>
                    <br />
                    <div className="flex flex-nowrap">
                      <p>contacto</p>
                      <p className="font-[monument-grotesk]">@</p>
                      <p>mnaa.cl</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 pt-6 lg:pt-0">
                  <p className="font-[supreme-bold] uppercase">RRSS</p>
                  <div className="font-[supreme-light] text-xs md:text-base uppercase">
                    <div className="mr-2">
                      <div className="flex">
                        <p className="font-[monument-grotesk]">
                          <a
                            href="https://www.instagram.com/maxnunezarq"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @
                          </a>
                        </p>
                        <p className="">
                          <a
                            href="https://www.instagram.com/maxnunezarq"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            maxnunezarq
                          </a>
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="font-[supreme-light] tracking-widest col-span-12 text-xl lg:text-2xl pt-48 md:pt-6 ">
              Max Núñez Arquitectos es una oficina de arquitectura ubicada en
              Santiago de Chile formada el año 2010. Ha desarrollando diversos
              proyectos públicos y privados tanto en Chile como en el
              extranjero. Su trabajo ha sido reconocido con los premios Design
              Vanguard 2017 de Architectural Record, y el Design Award 2013,
              2018 y 2020 de Wallpaper Magazine. Ha ganado diversos concursos
              públicos, entre ellos el diseño para el Museo Regional de Atacama
              (Copiapó), los Centros de Visitantes para el Parque Nacional
              Laguna San Rafael, la Reserva Jeinimeni (Aysén), y la Biblioteca,
              archivo y depósito Regional de Los Ríos (Valdivia). Sus proyectos
              han sido publicados en distintos medios internacionales, entre
              ellos: A+U (Japón), GA (Japón), Mark (Holanda), Wallpaper
              (Inglaterra), Architectural Record (EEUU), PLOT (Argentina), 2G
              (España), Baumeister (Alemania), Interni (Italia), y ha sido
              motivo de la edición de dos publicaciones monográficas: &quot;Max
              Núñez Arquitectos, Pista de Despegue&quot;, de Editorial
              Constructo, Chile, 2015, y &quot;Max Núñez Arquitectos, Colección
              de Ideas&quot;, de Editorial ARQ, Chile, 2018.
            </p> */}
          </div>
        </section>
      </article>
    </main>
  );
};

export default Contact;
