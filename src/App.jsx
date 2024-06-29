import { Layout } from "./components/layout/component";
import { UserContextProvider } from "./contexts/user";
import { Header } from "./components/header/component";
import { Home } from "./pages/home/component";

export function App() {
  return (
    <UserContextProvider>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </UserContextProvider>
  );
}
