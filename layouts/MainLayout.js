//component
import Link from 'next/link';
const MainLayout = props => {
    return (
        <div className="container">
            <div className="topbar">
                <div className="logo-container">
                    <Link href='/'>
                        <a className="Link">STOCK</a>
                    </Link>
                </div>
                <div className="menu-container">
                    <div>
                        <Link href='/products'>
                            <a className="Link">products</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/manege'>
                            <a className="Link">Manage</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile'>
                            <a className="Link">Profile</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="contest">
                {props.children}
            </div>
            <style jsx global> {`
           
            @font-face {
                font-family: Kanit;
                src: url(static/fonts/Kanit-ExtraBoldItalic.ttf);
                font-weight: 400;  }
           body {
               margin: 0;  }
         
        `}</style>
            <style jsx global>
                {`
           .topbar{
                display :flex ;
                justify-content: space-between ;
                align: 32px;
                height: 32px ;  
                background-color:  ;
                padding : 0px  40px ;
                box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;

           }
           .menu-container {
               display : flex;
           }
           .menu-container div {
               margin-left : 5px;
           }
           .link {
            text-decoration
           }
        `}</style>

        </div>
    )
}

export default MainLayout;