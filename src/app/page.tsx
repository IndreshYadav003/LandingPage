import Professional from "./Propessional/page"
import Different from "./Different/page"
import PapularProject from "./popularProject/page"
import  AboutSection from "./components/Last" 
import View from "./View/page"
export default function Home() {
  return (
    <main>
    <Professional/>
     <PapularProject/>
      <Different/>
      <View/>
      <AboutSection/>
    </main>
  );
}