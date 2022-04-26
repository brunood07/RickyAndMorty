import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div>
      <Header />
      <div>
        <CardList />
      </div>
      <GlobalStyle />
    </div>
  );
}
