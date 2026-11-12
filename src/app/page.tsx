import Professional from "./Propessional/page"
import Different from "./Different/page"
import NewLaunches from "./NewLaunches/page"
import Project from "./Projects/page"
import View from "./View/page"
export default function Home() {
  return (
    <main>
    <Professional/>
      <NewLaunches/>
    <Project/>
      <Different/>
      <View/>
    </main>
  );
}