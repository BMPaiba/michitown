import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <header>
          {/* Aquí va tu barra de navegación o header */}
          <h1>MAIN LAYOUT</h1>
        </header>
        <main>
          {/* Outlet renderiza los layouts específicos de cada sección */}
          <Outlet />
        </main>
        <footer>
          {/* Aquí va el pie de página */}
          <p>© 2024 Mi Aplicación</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};
