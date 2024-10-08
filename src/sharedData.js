
//import Font Files
import caslonDisplay from "src/fonts/Libre_Caslon_Display/LibreCaslonDisplay-Regular.ttf";
import caslonReg from "src/fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf";
import caslonBold from "src/fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf";
import caslonItalic from "src/fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf";

//import Image Files
import bgPage from "src/images/pagetexture_cleaned.png";

//import json files
import testCityList from "src/jsons/testArray.json";

//TODO: Add city list with just the names and longitudes work out how to re reset the date line?
//TODO: am i picking the cities here in a function?


 //define objects to hold assets
 export const fonts = {
    sign: caslonDisplay,
    reg: caslonReg,
    bold: caslonBold,
    italic: caslonItalic
};

export const images = {
    bg: bgPage
};

export const jsons = {
    testCityList: testCityList
};