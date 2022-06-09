import type { NextPage } from 'next'

//* Styles Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//* Components
import { Layout } from '../components/layouts'
import { Footer } from '../components/ui/Footer'
import { Header } from '../components/ui/Header'
import { Button } from '../components/ui/Button'
import { Carousel } from '../components/ui/Carousel'
import { CardTestimonial } from '../components/ui/CardTestimonial'



const HomePage: NextPage = () => {
  return (
    <>
      <Layout
        title="testeandoo"
        description="testeando description"
        keywords="testeando keywords"
      >
        <h1>Hello word</h1>
      </Layout>
      <Header />
      <section className="py-5 container">
        <article className="row">
          <div className="col-lg-2 p-relative">
            <h3 className="ttl-section">acerca de tip</h3>
          </div>
          <div className="col-lg-10">
            <h2 className="ttl">
              BUSCAMOS PROPORCIONARLE NUEVAS HERRAMIENTAS A TRAVÉS DEL INTERIOR PLANNER METHOD DE CAPACITACIÓN  CREADO POR MARIETTA VITALE, AUTORA DE TERAPIA DEL ORDEN Y UNA VIDA ORDENADA.
            </h2>
            <p>
              En sus libros, Marietta desarrolla una verdadera metodología para aplicar fácilmente los conceptos de Orden y Planificación de una manera tangible. Creemos que este Método ayuda a las personas a mejorar su calidad de vida creando espacios más eficientes, ordenados y hermosos.
            </p>
            <p>
              Puede aprender el Método o puede delegar el trabajo a uno de nuestros Interior Planners.
            </p>
            <p>
              Encuentre un Interior Planner y permítanos crear el espacio que ha estado soñando.
              Las herramientas proporcionadas en los módulos de entrenamiento funcionan como cualquier otra herramienta, cualquiera puede aprender a usarlas bien y tener la oportunidad de iniciar un proyecto para su propia casa o como un trampolín a una carrera independiente.
            </p>
            <Button />
          </div>
        </article>
      </section>
      <section className="py-5 container">
        <article>
          <div className="row">
            <div className="col-lg-2 p-relative">
              <h3 className="ttl-section">SERVICIOS & PRODUCTOS</h3>
            </div>
            <div className="col-lg-10">
              <Carousel />
            </div>
          </div>
        </article>
      </section>
      <section className="py-5 container">
        <article className="row">
          <div className="col-lg-2 p-relative">
            <h3 className="ttl-section">EXPLORE EL TIP METHOD</h3>
          </div>
          <div className="col-lg-10">
            <h2 className="ttl">ORDENE SU CASA - ORDENE SU VIDA</h2>
            <p>Las herramientas proporcionadas en los módulos de entrenamiento funcionan como cualquier otra herramienta, cualquiera puede aprender a usarlas bien y tener la oportunidad de iniciar un proyecto para su propia casa o como un trampolín a una carrera independiente.</p>
            <h2 className="ttl mt-5">¿QUIÉN DEBE TOMAR ESTOS CURSOS?</h2>
            <ul className="list-inline">
              <li>Personas que quieren iniciar un nuevo proyecto personal en su hogar</li>
              <li>Personas que buscan una nueva carrera profesional y comenzar su propio negocio</li>
              <li>Propietarios de servicios de limpieza que quieren ampliar sus servicios</li>
              <li>Personal Administrativo</li>
              <li>Personas que buscan diferenciarse de otros candidatos en su currículum</li>
              <li>Propietarios de casas y negocios que quieren que su personal desarrolle nuevas habilidades</li>
              <li>Decoradores</li>
              <li>Diseñadores</li>
              <li>Arquitectos</li>
              <li>Home Stagers</li>
              <li>Agentes Inmobiliarios</li>
              <li>Estilistas Personales</li>
            </ul>
          </div>
        </article>
      </section>
      <section className="bg-light-black">
        <div className="container">
          <div className="row">
            <div className="ttl-separator col-lg-4">
              <h2>plan it.</h2>
              <h2>change it.</h2>
              <h2>love it.</h2>
              <Button />
            </div>
            <div className="col-lg-8">
              <img src="" alt="img-separator-1" />
              <img src="" alt="img-separator-2" />
              <img src="" alt="img-separator-3" />
              <img src="" alt="img-separator-4" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="ttl-section">historias</h3>
            </div>
            <div className="col-lg-8">
              <h2 className="ttl">
                testimonios
              </h2>
              <div className="row">
                <div className="col-lg-12">
                  <CardTestimonial />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-light-black">
        <div className="container">
          <div className="row">
            <div className="ttl-separator col-lg-6">
              <h5>MANTÉN TU CERTIFICACIÓN TIP</h5>
              <h2>CONVIÉRTETE EN INTERIOR PLANNER PARA CAMBIAR EL MUNDO</h2>
              <Button />
            </div>
            <div className="col-lg-6">
              <img src="" alt="img-separator-1" />
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
      <Footer />
    </>
  )
}

export default HomePage
