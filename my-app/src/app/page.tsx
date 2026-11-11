import Carousel from "./image/page";
import Project from "./Projects/page"
import NewLaunches from "./NewLaunches/page"
import View from "./View/page"
import Different from "./Different/page"
export default function Home() {
  return (
    <main>
      <Carousel />
      <NewLaunches/>
      <Project/>
      <View/>
      <Different/>
    </main>
  );
}