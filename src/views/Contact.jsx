const Contact = () => {
  return (
    <>
    <main className="mt-[25vh] h-[72vh]">
      <article>
        <section className="px-6 text-left">
          {/* Office description, Address, RRSS */}
          <div className="lg:grid grid-cols-12 lg:gap-x-4">
            <div className="col-span-8 text-left">
              <div>
              <img className="h-[72vh]" src="/oficina2.jpeg" alt="office" />
              </div>
            </div>
            <div className="col-span-2 pt-16 lg:pt-0">
              <p className="uppercase pb-6">Direción</p>
              <div>
                <p>Andrés de Fuenzalida 17, Of. 52 Providencia, Santiago</p>
                <p>ZIP 7510077</p>
                <p>contacto@mnaa.cl</p>
              </div>
            </div>
            <div className="col-span-2 pt-12 lg:pt-0">
              <p className="uppercase pb-6">RRSS</p>
              <div>
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

        </section>
      </article>
    </main>
    </>
  );
};
export default Contact;
