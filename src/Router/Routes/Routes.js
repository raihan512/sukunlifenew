import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Porichiti from "../../pages/Porichiti/Porichiti";
import Questions from "../../pages/Questions/Questions";
import SelfRuqia from "../../pages/SelfRuqia/SelfRuqia";
import Masnun from "../../pages/SelfRuqia/Masnun/Masnun";
import BoroiPata from "../../pages/SelfRuqia/BoroiPata/BoroiPata";
import NajarGosolo from "../../pages/SelfRuqia/NajarGosolo/NajarGosolo";
import TabijJadu from "../../pages/SelfRuqia/TabijJadu/TabijJadu";
import GharHefajot from "../../pages/SelfRuqia/GharHefajot/GharHefajot";
import Blogs from "../../pages/Blogs/Blogs";
import JinAsorerSomossa from "../../pages/Blogs/JinAsorerSomossa/JinAsorerSomossa";
import JadurRugiChinar from "../../pages/Blogs/JadurRugiChinar/JadurRugiChinar";
import BoroiPatarGosol from "../../pages/Blogs/BoroiPatarGosol/BoroiPatarGosol";
import FamilyCrisis from "../../pages/Blogs/FamilyCrisis/FamilyCrisis";
import VondoRaki from "../../pages/Blogs/VondoRaki/VondoRaki";
import JinerSomossaBujhben from "../../pages/Blogs/JinerSomossaBujhben/JinerSomossaBujhben";
import BoshikoronProvab from "../../pages/Blogs/BoshikoronProvab/BoshikoronProvab";
import Error from "../../pages/Error/Error";
import Contact from "../../pages/Contact/Contact";
import Thankyou from "../../pages/Thankyou/Thankyou";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/thankyou",
        element: <Thankyou></Thankyou>,
      },
      {
        path: "/porichiti",
        element: <Porichiti></Porichiti>,
      },
      {
        path: "/questions",
        element: <Questions></Questions>,
      },
      {
        path: "/selfruqia",
        element: <SelfRuqia></SelfRuqia>,
      },
      {
        path: "/masnunamol",
        element: <Masnun></Masnun>,
      },
      {
        path: "/boroipata",
        element: <BoroiPata></BoroiPata>,
      },
      {
        path: "/tabijojadu",
        element: <TabijJadu></TabijJadu>,
      },
      {
        path: "/ghorhefajot",
        element: <GharHefajot></GharHefajot>,
      },
      {
        path: "/najorgosol",
        element: <NajarGosolo></NajarGosolo>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/jinasorersomossa",
        element: <JinAsorerSomossa></JinAsorerSomossa>,
      },
      {
        path: "/blogs/jadurrugichinarupay",
        element: <JadurRugiChinar></JadurRugiChinar>,
      },
      {
        path: "/blogs/boroipatargosol",
        element: <BoroiPatarGosol></BoroiPatarGosol>,
      },
      {
        path: "/blogs/familycrisis",
        element: <FamilyCrisis></FamilyCrisis>,
      },
      {
        path: "/blogs/jinersomossabujhben",
        element: <JinerSomossaBujhben></JinerSomossaBujhben>,
      },
      {
        path: "/blogs/vondoraki",
        element: <VondoRaki></VondoRaki>,
      },
      {
        path: "/blogs/boshikoronprovab",
        element: <BoshikoronProvab></BoshikoronProvab>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
