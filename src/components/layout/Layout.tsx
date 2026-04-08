import { Header } from './Header';
import { Footer } from './Footer';
import { ModalProvider } from '../../context/ModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default Layout;
