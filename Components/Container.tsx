import Head from 'next/head';
import { ReactChild } from 'react';
import Menu from './Menu';
interface Props {
    titulo: string;
    children: ReactChild;
}


const Container = (props: Props) => {
    return (
        <div>
            <Head>
                <title>BitsApp - {props.titulo}</title>
            </Head>
            <Menu></Menu>
            <div className="container">
            {props.children}
        </div>
        </div >
    )
}

export default Container;