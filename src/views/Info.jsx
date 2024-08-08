import Footer from "../components/Footer";

const Info = () => {
  return (
    <main className="mt-[25vh] px-6">
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
                  <div className="font-[supreme-light] text-xs md:text-base">
                    <p>Andres de Fuenzalida 17, Oficina 52</p>
                    <p>Providencia, Santiago</p>
                    <p>ZIP 7510077</p>
                    <p>contacto@mnaa.cl</p>
                  </div>
                </div>
                <div className="col-span-2 pt-6 lg:pt-0">
                  <p className="font-[supreme-bold] uppercase">RRSS</p>
                  <div className="font-[supreme-light] text-xs md:text-base upper">
                    <div className="mr-2">
                      <div className="flex">
                        <p className="font-[EB-Garamond-Regular] ">
                          <a
                            href="https://www.instagram.com/maxnunezb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @
                          </a>
                        </p>
                        <p className="">
                          <a
                            href="https://www.instagram.com/maxnunezb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            maxnunezb
                          </a>
                        </p>
                      </div>{" "}
                    </div>
                    <div className="flex">
                      <p className="font-[EB-Garamond-Regular] ">
                        <a
                          href="https://www.instagram.com/stefano_rolla_architetto/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @
                        </a>
                      </p>
                      <p className="">
                        <a
                          href="https://www.instagram.com/stefano_rolla_architetto/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          stefano-rolla-architetto
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-[supreme-light] tracking-widest col-span-12 text-base lg:text-xl pt-12 ">
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
            </p>
          </div>
        </section>
        {/* Team info */}
        <section className="mb-24">
          <div className="flex just">
            <p className="uppercase text-2xl font-['supreme-bold'] mr-1">
              Equipo
            </p>
            <p className="font-[EB-Garamond-Italic] text-base text-[#bebebe]">
              &quot;
            </p>
            <p className="font-[EB-Garamond-Italic] text-base text-[#bebebe]">
              24
            </p>
          </div>
          {/* Team */}
          {/* Partner 1 */}
          <div className="text-lg text-left">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="lg:grid lg:grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Max Nunez</p>
                <p className=" font-['supreme-light'] text-sm">
                  Universidad Catolica / Columbia GSAP
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light'] mt-5 lg:mt-0">
                  Socio Fundador
                </p>
                <p className="font-[supreme-light] text-base leading-6 mt-5 lg:mt-0">
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
              <div className="col-span-1 mt-5 lg:mt-0">
                <img src="../../src/img/maxnunez.webp" alt="maxnunez" />
              </div>
            </div>
          </div>
          {/* Partner 2 */}
          <div className="text-lg text-left mt-5">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="lg:grid lg:grid-cols-7 mt-10 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Stefano Rolla</p>
                <p className="font-['supreme-light'] text-sm">
                  Politecnico Di Milano
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light'] mt-5 lg:mt-0">
                  Arquitecto Asociado
                </p>
                <p className="font-[supreme-light] text-base leading-6 mt-5 lg:mt-0">
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
              <div className="col-span-1 mt-5 lg:mt-0">
                <img src="../../src/img/stefanorolla.webp" alt="stefanorolla" />
              </div>
            </div>
          </div>
          {/* Colaborator 1 */}
          <div className="text-lg text-left mt-5">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="lg:grid lg:grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Carlos Rosas</p>
                <p className="font-['supreme-light'] text-sm">
                  Universidad Diego Portales
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light'] mt-5 lg:mt-0">
                  Arquitecto / Jefe de Proyecto
                </p>
                <p className="font-[supreme-light] text-base leading-6 mt-5 lg:mt-0">
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
              <div className="col-span-1 mt-5 lg:mt-0">
                <img className="opacity-20" src="../../src/img/placeholder.webp" alt="carlosrosas" />
              </div>
            </div>
          </div>
          {/* Colaborator 2 */}
          <div className="text-lg text-left mt-5">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="lg:grid lg:grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">Fabian Leiva</p>
                <p className="font-['supreme-light'] text-sm">
                  Universidad de Chile
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light'] mt-5 lg:mt-0">
                  Arquitecto / Jefe de Proyecto / IT
                </p>
                <p className="font-[supreme-light] text-base leading-6 mt-5 lg:mt-0">
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
              <div className="col-span-1 mt-5 lg:mt-0">
                <img className="opacity-20" src="../../src/img/placeholder.webp" alt="fabianleiva" />
              </div>
            </div>
          </div>
          {/* Colaborator 3 */}
          <div className="text-lg text-left mt-5">
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
            <div className="lg:grid lg:grid-cols-7 mt-5 align-between">
              <div className="col-span-2">
                <p className="uppercase font-['supreme-bold']">
                  Andres Sanfuentes
                </p>
                <p className="font-['supreme-light'] text-sm">
                  Universidad Catolica
                </p>
              </div>
              <div className="col-span-3 flex flex-col justify-between">
                <p className="font-['supreme-light'] mt-5 lg:mt-0">
                  Arquitecto
                </p>
                <p className="font-[supreme-light] text-base leading-6 mt-5 lg:mt-0">
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
              <div className="col-span-1 mt-5 lg:mt-0">
                <img className="opacity-20" src="../../src/img/placeholder.webp" alt="fabianleiva" />
              </div>
            </div>
            <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-5" />
          </div>
          {/* Recognitions */}
          <div className="lg:grid lg:grid-cols-6 gap-6 mt-48 text-xs uppercase font-[supreme-light]">
            {/* Publications */}
            <div className="text-left mt-24 col-span-2">
              <p className="col-span-2 font-['supreme-bold'] text-lg">
                Publicaciones
              </p>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
              <div className="flex justify-between mt-2 align-between font-[supreme-light]">
                <p>ARQ / Max Nunez - Coleccion de Ideas</p>
                <p>2018</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between font-[supreme-light]">
                <p>TRACE / Max Nunez Arquitectos - Pista de Despegue</p>
                <p>2015</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            </div>
            {/* Awards */}
            <div className="text-left mt-24 col-span-2">
              <p className="col-span-2 uppercase font-['supreme-bold'] text-lg">
                Premios
              </p>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
              <div className="flex justify-between mt-2 align-between">
                <p>Archdaily Award Building of the year / Casa de Vidrio</p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Mies Crown Hall Americas Prize, Nominación / Casa de Vidrio
                </p>
                <p>2022</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Wallpaper Magazine Award “Best New Private House” / Casa Ghat
                </p>
                <p>2018</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Mies Crown Hall Americas Prize 2017, Nominación / Casa Ghat
                </p>
                <p>2017</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Architectural Record Magazine, Design Vanguard Award / Max
                  Nunez{" "}
                </p>
                <p>2017</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Mies Crown Hall Americas Prize, Nominación / MAD Building</p>
                <p>2015</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Wallpaper Magazine Award “Best New Private House” / Casa 10x10
                </p>
                <p>2013</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            </div>
            {/* Conferences */}
            <div className="text-left mt-24 col-span-2">
              <p className="col-span-2 uppercase font-['supreme-bold'] text-lg">
                Conferencias
              </p>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
              <div className="flex justify-between mt-2 align-between">
                <p>Chile Day / Emerging Chilean Aarchitecture / AIA NY, EEUU</p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Viaje Topografico / Colegio de Arquitectos de Mendoza /
                  Argentina
                </p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  1er Encuentro Internacional de Arquitectura / Montevideo,
                  Uruguay
                </p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Topographical Journey / Neutra VDL / Los Angeles, USA
                  (Workshop)
                </p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Topographical Journey / Harvard GSD / Boston, EEUU</p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Viaje Topografico / UC / Santiago, Chile</p>
                <p>2023</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Topographical Journey / House of Oris / Zagreb, Croacia</p>
                <p>2022</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>WAVE / IUAV / Venecia, Italia (Workshop)</p>
                <p>2019</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  How Do We Live? / Universidad de Liverpool / Londres,
                  Inglaterra
                </p>
                <p>2018</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Constellation of Thoughts, Leibniz Universitat / Hannover,
                  Alemania
                </p>
                <p>2017</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Constellation of Thoughts, Technische Universitat / Dortmund,
                  Alemania
                </p>
                <p>2017</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Constructing Practice, Columbia University / NY, EEUU</p>
                <p>2017</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Max Nunez Arquitectos: Concursos Públicos / UC / Santiago,
                  Chile
                </p>
                <p>2015</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  Max Nunez Arquitectos: Obra Reciente / Universidad de BA /
                  Argentina
                </p>
                <p>2014</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>Topographical Variations / University of Arizona / EEUU</p>
                <p>2013</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between">
                <p>
                  DRN Arquitectos / Bienal de Arquitectura Latinoamericana /
                  Pamplona, Espana
                </p>
                <p>2013</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Info;
