import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Main from '../src/components/Main';
const Index = () => {
    return (
        <>
         <Header />
         <div className="main">
             <Main />
         </div>
         <Footer />
        </>
    );
}

export default Index;