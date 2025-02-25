import "./globals.css";
import SearchProductProvider from "./context/AppContext";
import SearchBar from "./components/SearchBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProductProvider>{children}</SearchProductProvider>
      </body>
    </html>
  );
}
