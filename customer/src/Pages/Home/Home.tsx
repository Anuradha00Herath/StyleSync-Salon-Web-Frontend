import { HomeNavigationBar } from "../../Components/home-navigation-bar";
import { ArticlePage } from "./ArticlePage";
import { FAQsPage } from "./FAQsPage";

import { ServicesPage } from "./ServicesPage";
import { StartingPage } from "./StartingPage";

export default function HomePage() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HomeNavigationBar />
        <StartingPage />
      </div>
      <div>
        <ServicesPage />
      </div>
      <div><ArticlePage/></div>
      <div><FAQsPage/></div>
    </div>
  );
}
