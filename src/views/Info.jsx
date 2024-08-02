import Footer from "../components/Footer";

const Info = () => {
  return (
    <main className="mt-[25vh] px-6">
      <article>
        {/* Office image, description, Address, mail, rrss */}
        <section className="text-left mb-48">
          <div className="lg:grid grid-cols-12 lg:gap-x-4">
            <div className="col-span-8 text-left">
              <div>
                <img className="w-full" src="/oficina2.jpeg" alt="office" />
              </div>
            </div>
            <div className="col-span-4 text-left">
              <p className="font-[bookAntiquaItalic]">
                Max Núñez Arquitectos es una oficina de arquitectura ubicada en
                Santiago de Chile formada el año 2010. Ha desarrollando diversos
                proyectos públicos y privados tanto en Chile como en el
                extranjero. Su trabajo ha sido reconocido con los premios Design
                Vanguard 2017 de Architectural Record, y el Design Award 2013,
                2018 y 2020 de Wallpaper Magazine. Ha ganado diversos concursos
                públicos, entre ellos el diseño para el Museo Regional de
                Atacama (Copiapó), los Centros de Visitantes para el Parque
                Nacional Laguna San Rafael, la Reserva Jeinimeni (Aysén), y la
                Biblioteca, archivo y depósito Regional de Los Ríos (Valdivia).
                Sus proyectos han sido publicados en distintos medios
                internacionales, entre ellos: A+U (Japón), GA (Japón), Mark
                (Holanda), Wallpaper (Inglaterra), Architectural Record (EEUU),
                PLOT (Argentina), 2G (España), Baumeister (Alemania), Interni
                (Italia), y ha sido motivo de la edición de dos publicaciones
                monográficas: &quot;Max Núñez Arquitectos, Pista de
                Despegue&quot;, de Editorial Constructo, Chile, 2015, y
                &quot;Max Núñez Arquitectos, Colección de Ideas&quot;, de
                Editorial ARQ, Chile, 2018.
              </p>
              <div className="col-span-2 pt-16 lg:pt-0 mt-10 text-sm">
                <p className="pb-2 font-['supreme-bold']">Direccion</p>
                <div className="font-['supreme-light']">
                  <p>Andres de Fuenzalida 17, Of. 52</p>
                  <p>Providencia, Santiago</p>
                  <p>ZIP 7510077</p>
                </div>
              </div>
              <div className="col-span-2 pt-12 lg:pt-0 mt-4 text-sm">
                <p className="pb-2 font-['supreme-bold']">Correo</p>
                <div className="font-['supreme-light']">
                  <p>contacto@mnaa.cl</p>
                </div>
              </div>
              <div className="col-span-2 pt-12 lg:pt-0 mt-4 text-sm">
                <p className="pb-2 font-['supreme-bold']">Instagram</p>
                <div className="font-['supreme-light']">
                  <div className="mr-2">
                    <p>
                      <a
                        href="https://www.instagram.com/maxnunezb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @maxnunezb
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <a
                        href="https://www.instagram.com/stefano_rolla_architetto/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @stefano_rolla_architetto
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team info */}
        <section className="mb-[28rem]">
          <div className="flex mb-48">
            <p className="uppercase text-3xl font-['supreme-bold'] mr-1">
              Equipo
            </p>
            <p className="font-[bookAntiquaItalic] text-lg text-[#bebebe]">
              2024
            </p>
          </div>
          {/* Partners */}
          {/* Partner 1 */}
          <div className="text-xl text-left">
            <div className="grid grid-cols-7">
              <p className="col-span-2 uppercase font-['supreme-bold'] text-lg">
                Socios
              </p>
              <p className="col-span-5 text-[#bebebe] font-[bookAntiquaItalic] text-lg">
                Descripcion
              </p>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="grid grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Max Nunez</p>
                <p className=" font-['supreme-light']">
                  Universidad Catolica / Columbia GSAP
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light']">
                  Arquitecto y Socio Fundador
                </p>
                <p className="font-['bookAntiquaItalic'] text-[1rem] leading-6">
                  Se graduó de Arquitecto y Magister en Arquitectura de la
                  Universidad Católica de Chile en el 2004. El Año 2010 obtuvo
                  un MSc in Advanced Architectural Design de la Universidad de
                  Columbia, Nueva York, donde recibió el Lucille Smyser
                  Lowenfish Memorial Prize y el William Ware Prize for
                  Excellence in Design. Entre el 2005 y el 2010 trabajó asociado
                  a Nicolás del Río en dRN Arquitectos, y desde el 2010 dirige
                  Max Núñez Arquitectos. Ha sido invitado a presentar su trabajo
                  en diversas bienales y universidades de Chile, América y
                  Europa. En paralelo a su trabajo profesional, entre los años
                  2016 y 2020, fue Jefe de Programa del Magíster en Arquitectura
                  de la Universidad Católica, donde es profesor de Taller de
                  manera regular. Los años 2018 y 2019 fue profesor invitado a
                  la Universidad IUAV de Venecia, Italia.
                </p>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <img src="../../src/img/maxnunez.webp" alt="maxnunez" />
              </div>
            </div>
          </div>
          {/* Partner 2 */}
          <div className="text-xl text-left mt-5 mb-48">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="grid grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Stefano Rolla</p>
                <p className=" font-['supreme-light']">Politecnico Di Milano</p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light']">Arquitecto Asociado</p>
                <p className="font-['bookAntiquaItalic'] text-[1rem] leading-6">
                  Se graduó de Arquitecto en el Politécnico de Milán en el 2005,
                  con una tesis desarrollada en conjunto con la Universidad de
                  Buenos Aires. Desde el año 2006 vive y trabaja en Chile, de
                  forma independiente y colaborando con varias oficinas de
                  Arquitectura, entre otras Guillermo Acuña Arquitectos
                  Asociados y Max Núñez Arquitectos. Actualmente es profesor de
                  Taller III de la Universidad San Sebastián y ha sido profesor
                  de Teoría, Historia y Crítica de la Arquitectura en la
                  Universidad Católica de Chile. Desde 2018 es socio de Max
                  Núñez Arquitectos.
                </p>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <img src="../../src/img/stefanorolla.webp" alt="stefanorolla" />
              </div>
            </div>
          </div>
          {/* Colaborators */}
          <div className="text-xl text-left mt-5">
            <div className="grid grid-cols-7">
              <p className="col-span-2 uppercase font-['supreme-bold'] text-lg">
                Colaboradores
              </p>
              <p className="col-span-2 text-[#bebebe] font-[bookAntiquaItalic] text-lg">
                Cargo
              </p>
              <p className="col-span-2 text-[#bebebe] font-[bookAntiquaItalic] text-lg">
                Estudios
              </p>
              <div className="flex justify-between">
                <p className="text-[#bebebe] font-[bookAntiquaItalic] text-lg">
                  Desde
                </p>
                <p className="text-[#bebebe] font-[bookAntiquaItalic] text-lg">
                  País
                </p>
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="grid grid-cols-7 mt-2 align-between">
              <div className="col-span-2">
                <p className="font-['supreme-light']">Carlos Rosas</p>
              </div>
                <p className="col-span-2 font-['supreme-light']">Arquitecto Senior / Jefe de Proyecto</p>
                <p className="col-span-2 font-['supreme-light']">Universidad Diego Portales</p>
                <div className="flex justify-between">
                <p className="font-['supreme-light']">
                  2013
                </p>
                <p className="font-['supreme-light']">
                  Chile
                </p>
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            <div className="grid grid-cols-7 mt-2 align-between">
              <div className="col-span-2">
                <p className="font-['supreme-light']">Pabla Amigo</p>
              </div>
                <p className="col-span-2 font-['supreme-light']">Arquitecto / Jefe de Proyecto</p>
                <p className="col-span-2 font-['supreme-light']">Universidad Catolica</p>
                <div className="flex justify-between">
                <p className="font-['supreme-light']">
                  2016
                </p>
                <p className="font-['supreme-light']">
                  Chile
                </p>
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            <div className="grid grid-cols-7 mt-2 align-between">
              <div className="col-span-2">
                <p className="font-['supreme-light']">Fabian Leiva</p>
              </div>
                <p className="col-span-2 font-['supreme-light']">Arquitecto / Jefe de Proyecto / IT</p>
                <p className="col-span-2 font-['supreme-light']">Universidad de Chile</p>
                <div className="flex justify-between">
                <p className="font-['supreme-light']">
                  2019
                </p>
                <p className="font-['supreme-light']">
                  Chile
                </p>
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            <div className="grid grid-cols-7 mt-2 align-between">
              <div className="col-span-2">
                <p className="font-['supreme-light']">Andres Sanfuentes</p>
              </div>
                <p className="col-span-2 font-['supreme-light']">Arquitecto</p>
                <p className="col-span-2 font-['supreme-light']">Universidad Catolica</p>
                <div className="flex justify-between">
                <p className="font-['supreme-light']">
                  2021
                </p>
                <p className="font-['supreme-light']">
                  Chile
                </p>
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            <div className="grid grid-cols-7 mt-2 align-between">
              <div className="col-span-2">
                <p className="font-['supreme-light']">Isabel Muzzo</p>
              </div>
                <p className="col-span-2 font-['supreme-light']">Administradora</p>
                <p className="col-span-2 font-['supreme-light']">Universidad Catolica</p>
                <div className="flex justify-between">
                <p className="font-['supreme-light']">
                  2019
                </p>
                <p className="font-['supreme-light']">
                  Chile
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Recognitions info */}
      </article>
      <Footer />
    </main>
  );
};

export default Info;
