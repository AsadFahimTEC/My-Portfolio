
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Education from "../Education/Education";
// import Services from "../Services/Services";
import Tabs from "../Tabs/Tabs";
import TouristStories from "../TourStory/TourStory";
// import Type from "../Type/Type";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tabs></Tabs>
            <TouristStories></TouristStories>
            <Contact></Contact>
            {/* <Type></Type> */}
            <Education></Education>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;