import Head from "next/head";
import { FC } from "react"
import { Navbar } from "../ui";

//* Definimos las props de nuestro Head
interface Props{
    title?: string,
    description?: string,
    keywords?: string,
    children?: any
}

export const Layout: FC<Props> = ( { children, title, description, keywords } ) => {
    return (
        <>
            <Head>
              <title>{ title || 'Tip Method' }</title>
              <meta name="author" content="Maximiliano Gomez, Gonzalo Gallo"/>
              <meta name="description" content={ description || 'Add Description' }/>
              <meta name="keywords" content={ keywords || 'Add Keywords' }/>  
            </Head>
            
            <Navbar />

            <main>
                { children }
            </main>
        </>
    )
}
