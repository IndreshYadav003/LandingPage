import Carousel from "./image/page";
import Project from "./Projects/page"
import NewLaunches from "./NewLaunches/page"
import View from "./View/page"
export default function Home() {
  return (
    <main>
      <Carousel />
      <NewLaunches/>
      <Project/>
      <View/>
    </main>
  );
}