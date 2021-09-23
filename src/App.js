import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
    </div>
  );
}

// Data API 
const data = [
  {
    "name": "Afghanistan",
    "topLevelDomain": [
      ".af"
    ],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": [
      "93"
    ],
    "capital": "Kabul",
    "altSpellings": [
      "AF",
      "Afġānistān"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/afg.svg"
  },
  {
    "name": "Åland Islands",
    "topLevelDomain": [
      ".ax"
    ],
    "alpha2Code": "AX",
    "alpha3Code": "ALA",
    "callingCodes": [
      "358"
    ],
    "capital": "Mariehamn",
    "altSpellings": [
      "AX",
      "Aaland",
      "Aland",
      "Ahvenanmaa"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/ala.svg"
  },
  {
    "name": "Albania",
    "topLevelDomain": [
      ".al"
    ],
    "alpha2Code": "AL",
    "alpha3Code": "ALB",
    "callingCodes": [
      "355"
    ],
    "capital": "Tirana",
    "altSpellings": [
      "AL",
      "Shqipëri",
      "Shqipëria",
      "Shqipnia"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/alb.svg"
  },
  {
    "name": "Algeria",
    "topLevelDomain": [
      ".dz"
    ],
    "alpha2Code": "DZ",
    "alpha3Code": "DZA",
    "callingCodes": [
      "213"
    ],
    "capital": "Algiers",
    "altSpellings": [
      "DZ",
      "Dzayer",
      "Algérie"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/dza.svg"
  },
  {
    "name": "American Samoa",
    "topLevelDomain": [
      ".as"
    ],
    "alpha2Code": "AS",
    "alpha3Code": "ASM",
    "callingCodes": [
      "1"
    ],
    "capital": "Pago Pago",
    "altSpellings": [
      "AS",
      "Amerika Sāmoa",
      "Amelika Sāmoa",
      "Sāmoa Amelika"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/asm.svg"
  },
  {
    "name": "Andorra",
    "topLevelDomain": [
      ".ad"
    ],
    "alpha2Code": "AD",
    "alpha3Code": "AND",
    "callingCodes": [
      "376"
    ],
    "capital": "Andorra la Vella",
    "altSpellings": [
      "AD",
      "Principality of Andorra",
      "Principat d'Andorra"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/and.svg"
  },
  {
    "name": "Angola",
    "topLevelDomain": [
      ".ao"
    ],
    "alpha2Code": "AO",
    "alpha3Code": "AGO",
    "callingCodes": [
      "244"
    ],
    "capital": "Luanda",
    "altSpellings": [
      "AO",
      "República de Angola",
      "ʁɛpublika de an'ɡɔla"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/ago.svg"
  },
  {
    "name": "Anguilla",
    "topLevelDomain": [
      ".ai"
    ],
    "alpha2Code": "AI",
    "alpha3Code": "AIA",
    "callingCodes": [
      "1"
    ],
    "capital": "The Valley",
    "altSpellings": [
      "AI"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/aia.svg"
  },
  {
    "name": "Antarctica",
    "topLevelDomain": [
      ".aq"
    ],
    "alpha2Code": "AQ",
    "alpha3Code": "ATA",
    "callingCodes": [
      "672"
    ],
    "capital": "",
    "altSpellings": [],
    "region": "Polar",
    "flag": "https://restcountries.eu/data/ata.svg"
  },
  {
    "name": "Antigua and Barbuda",
    "topLevelDomain": [
      ".ag"
    ],
    "alpha2Code": "AG",
    "alpha3Code": "ATG",
    "callingCodes": [
      "1"
    ],
    "capital": "Saint John's",
    "altSpellings": [
      "AG"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/atg.svg"
  },
  {
    "name": "Argentina",
    "topLevelDomain": [
      ".ar"
    ],
    "alpha2Code": "AR",
    "alpha3Code": "ARG",
    "callingCodes": [
      "54"
    ],
    "capital": "Buenos Aires",
    "altSpellings": [
      "AR",
      "Argentine Republic",
      "República Argentina"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/arg.svg"
  },
  {
    "name": "Armenia",
    "topLevelDomain": [
      ".am"
    ],
    "alpha2Code": "AM",
    "alpha3Code": "ARM",
    "callingCodes": [
      "374"
    ],
    "capital": "Yerevan",
    "altSpellings": [
      "AM",
      "Hayastan",
      "Republic of Armenia",
      "Հայաստանի Հանրապետություն"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/arm.svg"
  },
  {
    "name": "Aruba",
    "topLevelDomain": [
      ".aw"
    ],
    "alpha2Code": "AW",
    "alpha3Code": "ABW",
    "callingCodes": [
      "297"
    ],
    "capital": "Oranjestad",
    "altSpellings": [
      "AW"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/abw.svg"
  },
  {
    "name": "Australia",
    "topLevelDomain": [
      ".au"
    ],
    "alpha2Code": "AU",
    "alpha3Code": "AUS",
    "callingCodes": [
      "61"
    ],
    "capital": "Canberra",
    "altSpellings": [
      "AU"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/aus.svg"
  },
  {
    "name": "Austria",
    "topLevelDomain": [
      ".at"
    ],
    "alpha2Code": "AT",
    "alpha3Code": "AUT",
    "callingCodes": [
      "43"
    ],
    "capital": "Vienna",
    "altSpellings": [
      "AT",
      "Österreich",
      "Osterreich",
      "Oesterreich"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/aut.svg"
  },
  {
    "name": "Azerbaijan",
    "topLevelDomain": [
      ".az"
    ],
    "alpha2Code": "AZ",
    "alpha3Code": "AZE",
    "callingCodes": [
      "994"
    ],
    "capital": "Baku",
    "altSpellings": [
      "AZ",
      "Republic of Azerbaijan",
      "Azərbaycan Respublikası"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/aze.svg"
  },
  {
    "name": "Bahamas",
    "topLevelDomain": [
      ".bs"
    ],
    "alpha2Code": "BS",
    "alpha3Code": "BHS",
    "callingCodes": [
      "1"
    ],
    "capital": "Nassau",
    "altSpellings": [
      "BS",
      "Commonwealth of the Bahamas"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/bhs.svg"
  },
  {
    "name": "Bahrain",
    "topLevelDomain": [
      ".bh"
    ],
    "alpha2Code": "BH",
    "alpha3Code": "BHR",
    "callingCodes": [
      "973"
    ],
    "capital": "Manama",
    "altSpellings": [
      "BH",
      "Kingdom of Bahrain",
      "Mamlakat al-Baḥrayn"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/bhr.svg"
  },
  {
    "name": "Bangladesh",
    "topLevelDomain": [
      ".bd"
    ],
    "alpha2Code": "BD",
    "alpha3Code": "BGD",
    "callingCodes": [
      "880"
    ],
    "capital": "Dhaka",
    "altSpellings": [
      "BD",
      "People's Republic of Bangladesh",
      "Gônôprôjatôntri Bangladesh"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/bgd.svg"
  },
  {
    "name": "Barbados",
    "topLevelDomain": [
      ".bb"
    ],
    "alpha2Code": "BB",
    "alpha3Code": "BRB",
    "callingCodes": [
      "1"
    ],
    "capital": "Bridgetown",
    "altSpellings": [
      "BB"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/brb.svg"
  },
  {
    "name": "Belarus",
    "topLevelDomain": [
      ".by"
    ],
    "alpha2Code": "BY",
    "alpha3Code": "BLR",
    "callingCodes": [
      "375"
    ],
    "capital": "Minsk",
    "altSpellings": [
      "BY",
      "Bielaruś",
      "Republic of Belarus",
      "Белоруссия",
      "Республика Беларусь",
      "Belorussiya",
      "Respublika Belarus’"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/blr.svg"
  },
  {
    "name": "Belgium",
    "topLevelDomain": [
      ".be"
    ],
    "alpha2Code": "BE",
    "alpha3Code": "BEL",
    "callingCodes": [
      "32"
    ],
    "capital": "Brussels",
    "altSpellings": [
      "BE",
      "België",
      "Belgie",
      "Belgien",
      "Belgique",
      "Kingdom of Belgium",
      "Koninkrijk België",
      "Royaume de Belgique",
      "Königreich Belgien"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/bel.svg"
  },
  {
    "name": "Belize",
    "topLevelDomain": [
      ".bz"
    ],
    "alpha2Code": "BZ",
    "alpha3Code": "BLZ",
    "callingCodes": [
      "501"
    ],
    "capital": "Belmopan",
    "altSpellings": [
      "BZ"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/blz.svg"
  },
  {
    "name": "Benin",
    "topLevelDomain": [
      ".bj"
    ],
    "alpha2Code": "BJ",
    "alpha3Code": "BEN",
    "callingCodes": [
      "229"
    ],
    "capital": "Porto-Novo",
    "altSpellings": [
      "BJ",
      "Republic of Benin",
      "République du Bénin"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/ben.svg"
  },
  {
    "name": "Bermuda",
    "topLevelDomain": [
      ".bm"
    ],
    "alpha2Code": "BM",
    "alpha3Code": "BMU",
    "callingCodes": [
      "1"
    ],
    "capital": "Hamilton",
    "altSpellings": [
      "BM",
      "The Islands of Bermuda",
      "The Bermudas",
      "Somers Isles"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/bmu.svg"
  },
  {
    "name": "Bhutan",
    "topLevelDomain": [
      ".bt"
    ],
    "alpha2Code": "BT",
    "alpha3Code": "BTN",
    "callingCodes": [
      "975"
    ],
    "capital": "Thimphu",
    "altSpellings": [
      "BT",
      "Kingdom of Bhutan"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/btn.svg"
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "topLevelDomain": [
      ".bo"
    ],
    "alpha2Code": "BO",
    "alpha3Code": "BOL",
    "callingCodes": [
      "591"
    ],
    "capital": "Sucre",
    "altSpellings": [
      "BO",
      "Buliwya",
      "Wuliwya",
      "Plurinational State of Bolivia",
      "Estado Plurinacional de Bolivia",
      "Buliwya Mamallaqta",
      "Wuliwya Suyu",
      "Tetã Volívia"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/bol.svg"
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "topLevelDomain": [
      ".an",
      ".nl"
    ],
    "alpha2Code": "BQ",
    "alpha3Code": "BES",
    "callingCodes": [
      "599"
    ],
    "capital": "Kralendijk",
    "altSpellings": [
      "BQ",
      "Boneiru"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/bes.svg"
  },
  {
    "name": "Bosnia and Herzegovina",
    "topLevelDomain": [
      ".ba"
    ],
    "alpha2Code": "BA",
    "alpha3Code": "BIH",
    "callingCodes": [
      "387"
    ],
    "capital": "Sarajevo",
    "altSpellings": [
      "BA",
      "Bosnia-Herzegovina",
      "Босна и Херцеговина"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/bih.svg"
  },
  {
    "name": "Botswana",
    "topLevelDomain": [
      ".bw"
    ],
    "alpha2Code": "BW",
    "alpha3Code": "BWA",
    "callingCodes": [
      "267"
    ],
    "capital": "Gaborone",
    "altSpellings": [
      "BW",
      "Republic of Botswana",
      "Lefatshe la Botswana"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/bwa.svg"
  },
  {
    "name": "Bouvet Island",
    "topLevelDomain": [
      ".bv"
    ],
    "alpha2Code": "BV",
    "alpha3Code": "BVT",
    "callingCodes": [
      "47"
    ],
    "capital": "",
    "altSpellings": [
      "BV",
      "Bouvetøya",
      "Bouvet-øya"
    ],
    "region": "",
    "flag": "https://restcountries.eu/data/bvt.svg"
  },
  {
    "name": "Brazil",
    "topLevelDomain": [
      ".br"
    ],
    "alpha2Code": "BR",
    "alpha3Code": "BRA",
    "callingCodes": [
      "55"
    ],
    "capital": "Brasília",
    "altSpellings": [
      "BR",
      "Brasil",
      "Federative Republic of Brazil",
      "República Federativa do Brasil"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/bra.svg"
  },
  {
    "name": "British Indian Ocean Territory",
    "topLevelDomain": [
      ".io"
    ],
    "alpha2Code": "IO",
    "alpha3Code": "IOT",
    "callingCodes": [
      "246"
    ],
    "capital": "Diego Garcia",
    "altSpellings": [
      "IO"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/iot.svg"
  },
  {
    "name": "United States Minor Outlying Islands",
    "topLevelDomain": [
      ".us"
    ],
    "alpha2Code": "UM",
    "alpha3Code": "UMI",
    "callingCodes": [
      "1"
    ],
    "capital": "",
    "altSpellings": [
      "UM"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/umi.svg"
  },
  {
    "name": "Virgin Islands (British)",
    "topLevelDomain": [
      ".vg"
    ],
    "alpha2Code": "VG",
    "alpha3Code": "VGB",
    "callingCodes": [
      "1"
    ],
    "capital": "Road Town",
    "altSpellings": [
      "VG"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/vgb.svg"
  },
  {
    "name": "Virgin Islands (U.S.)",
    "topLevelDomain": [
      ".vi"
    ],
    "alpha2Code": "VI",
    "alpha3Code": "VIR",
    "callingCodes": [
      "1 340"
    ],
    "capital": "Charlotte Amalie",
    "altSpellings": [
      "VI",
      "USVI",
      "American Virgin Islands",
      "U.S. Virgin Islands"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/vir.svg"
  },
  {
    "name": "Brunei Darussalam",
    "topLevelDomain": [
      ".bn"
    ],
    "alpha2Code": "BN",
    "alpha3Code": "BRN",
    "callingCodes": [
      "673"
    ],
    "capital": "Bandar Seri Begawan",
    "altSpellings": [
      "BN",
      "Nation of Brunei",
      " the Abode of Peace"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/brn.svg"
  },
  {
    "name": "Bulgaria",
    "topLevelDomain": [
      ".bg"
    ],
    "alpha2Code": "BG",
    "alpha3Code": "BGR",
    "callingCodes": [
      "359"
    ],
    "capital": "Sofia",
    "altSpellings": [
      "BG",
      "Republic of Bulgaria",
      "Република България"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/bgr.svg"
  },
  {
    "name": "Burkina Faso",
    "topLevelDomain": [
      ".bf"
    ],
    "alpha2Code": "BF",
    "alpha3Code": "BFA",
    "callingCodes": [
      "226"
    ],
    "capital": "Ouagadougou",
    "altSpellings": [
      "BF"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/bfa.svg"
  },
  {
    "name": "Burundi",
    "topLevelDomain": [
      ".bi"
    ],
    "alpha2Code": "BI",
    "alpha3Code": "BDI",
    "callingCodes": [
      "257"
    ],
    "capital": "Bujumbura",
    "altSpellings": [
      "BI",
      "Republic of Burundi",
      "Republika y'Uburundi",
      "République du Burundi"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/bdi.svg"
  },
  {
    "name": "Cambodia",
    "topLevelDomain": [
      ".kh"
    ],
    "alpha2Code": "KH",
    "alpha3Code": "KHM",
    "callingCodes": [
      "855"
    ],
    "capital": "Phnom Penh",
    "altSpellings": [
      "KH",
      "Kingdom of Cambodia"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/khm.svg"
  },
  {
    "name": "Cameroon",
    "topLevelDomain": [
      ".cm"
    ],
    "alpha2Code": "CM",
    "alpha3Code": "CMR",
    "callingCodes": [
      "237"
    ],
    "capital": "Yaoundé",
    "altSpellings": [
      "CM",
      "Republic of Cameroon",
      "République du Cameroun"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/cmr.svg"
  },
  {
    "name": "Canada",
    "topLevelDomain": [
      ".ca"
    ],
    "alpha2Code": "CA",
    "alpha3Code": "CAN",
    "callingCodes": [
      "1"
    ],
    "capital": "Ottawa",
    "altSpellings": [
      "CA"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/can.svg"
  },
  {
    "name": "Cabo Verde",
    "topLevelDomain": [
      ".cv"
    ],
    "alpha2Code": "CV",
    "alpha3Code": "CPV",
    "callingCodes": [
      "238"
    ],
    "capital": "Praia",
    "altSpellings": [
      "CV",
      "Republic of Cabo Verde",
      "República de Cabo Verde"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/cpv.svg"
  },
  {
    "name": "Cayman Islands",
    "topLevelDomain": [
      ".ky"
    ],
    "alpha2Code": "KY",
    "alpha3Code": "CYM",
    "callingCodes": [
      "1"
    ],
    "capital": "George Town",
    "altSpellings": [
      "KY"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/cym.svg"
  },
  {
    "name": "Central African Republic",
    "topLevelDomain": [
      ".cf"
    ],
    "alpha2Code": "CF",
    "alpha3Code": "CAF",
    "callingCodes": [
      "236"
    ],
    "capital": "Bangui",
    "altSpellings": [
      "CF",
      "Central African Republic",
      "République centrafricaine"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/caf.svg"
  },
  {
    "name": "Chad",
    "topLevelDomain": [
      ".td"
    ],
    "alpha2Code": "TD",
    "alpha3Code": "TCD",
    "callingCodes": [
      "235"
    ],
    "capital": "N'Djamena",
    "altSpellings": [
      "TD",
      "Tchad",
      "Republic of Chad",
      "République du Tchad"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/tcd.svg"
  },
  {
    "name": "Chile",
    "topLevelDomain": [
      ".cl"
    ],
    "alpha2Code": "CL",
    "alpha3Code": "CHL",
    "callingCodes": [
      "56"
    ],
    "capital": "Santiago",
    "altSpellings": [
      "CL",
      "Republic of Chile",
      "República de Chile"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/chl.svg"
  },
  {
    "name": "China",
    "topLevelDomain": [
      ".cn"
    ],
    "alpha2Code": "CN",
    "alpha3Code": "CHN",
    "callingCodes": [
      "86"
    ],
    "capital": "Beijing",
    "altSpellings": [
      "CN",
      "Zhōngguó",
      "Zhongguo",
      "Zhonghua",
      "People's Republic of China",
      "中华人民共和国",
      "Zhōnghuá Rénmín Gònghéguó"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/chn.svg"
  },
  {
    "name": "Christmas Island",
    "topLevelDomain": [
      ".cx"
    ],
    "alpha2Code": "CX",
    "alpha3Code": "CXR",
    "callingCodes": [
      "61"
    ],
    "capital": "Flying Fish Cove",
    "altSpellings": [
      "CX",
      "Territory of Christmas Island"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/cxr.svg"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "topLevelDomain": [
      ".cc"
    ],
    "alpha2Code": "CC",
    "alpha3Code": "CCK",
    "callingCodes": [
      "61"
    ],
    "capital": "West Island",
    "altSpellings": [
      "CC",
      "Territory of the Cocos (Keeling) Islands",
      "Keeling Islands"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/cck.svg"
  },
  {
    "name": "Colombia",
    "topLevelDomain": [
      ".co"
    ],
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "callingCodes": [
      "57"
    ],
    "capital": "Bogotá",
    "altSpellings": [
      "CO",
      "Republic of Colombia",
      "República de Colombia"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/col.svg"
  },
  {
    "name": "Comoros",
    "topLevelDomain": [
      ".km"
    ],
    "alpha2Code": "KM",
    "alpha3Code": "COM",
    "callingCodes": [
      "269"
    ],
    "capital": "Moroni",
    "altSpellings": [
      "KM",
      "Union of the Comoros",
      "Union des Comores",
      "Udzima wa Komori",
      "al-Ittiḥād al-Qumurī"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/com.svg"
  },
  {
    "name": "Congo",
    "topLevelDomain": [
      ".cg"
    ],
    "alpha2Code": "CG",
    "alpha3Code": "COG",
    "callingCodes": [
      "242"
    ],
    "capital": "Brazzaville",
    "altSpellings": [
      "CG",
      "Congo-Brazzaville"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/cog.svg"
  },
  {
    "name": "Congo (Democratic Republic of the)",
    "topLevelDomain": [
      ".cd"
    ],
    "alpha2Code": "CD",
    "alpha3Code": "COD",
    "callingCodes": [
      "243"
    ],
    "capital": "Kinshasa",
    "altSpellings": [
      "CD",
      "DR Congo",
      "Congo-Kinshasa",
      "DRC"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/cod.svg"
  },
  {
    "name": "Cook Islands",
    "topLevelDomain": [
      ".ck"
    ],
    "alpha2Code": "CK",
    "alpha3Code": "COK",
    "callingCodes": [
      "682"
    ],
    "capital": "Avarua",
    "altSpellings": [
      "CK",
      "Kūki 'Āirani"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/cok.svg"
  },
  {
    "name": "Costa Rica",
    "topLevelDomain": [
      ".cr"
    ],
    "alpha2Code": "CR",
    "alpha3Code": "CRI",
    "callingCodes": [
      "506"
    ],
    "capital": "San José",
    "altSpellings": [
      "CR",
      "Republic of Costa Rica",
      "República de Costa Rica"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/cri.svg"
  },
  {
    "name": "Croatia",
    "topLevelDomain": [
      ".hr"
    ],
    "alpha2Code": "HR",
    "alpha3Code": "HRV",
    "callingCodes": [
      "385"
    ],
    "capital": "Zagreb",
    "altSpellings": [
      "HR",
      "Hrvatska",
      "Republic of Croatia",
      "Republika Hrvatska"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/hrv.svg"
  },
  {
    "name": "Cuba",
    "topLevelDomain": [
      ".cu"
    ],
    "alpha2Code": "CU",
    "alpha3Code": "CUB",
    "callingCodes": [
      "53"
    ],
    "capital": "Havana",
    "altSpellings": [
      "CU",
      "Republic of Cuba",
      "República de Cuba"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/cub.svg"
  },
  {
    "name": "Curaçao",
    "topLevelDomain": [
      ".cw"
    ],
    "alpha2Code": "CW",
    "alpha3Code": "CUW",
    "callingCodes": [
      "599"
    ],
    "capital": "Willemstad",
    "altSpellings": [
      "CW",
      "Curacao",
      "Kòrsou",
      "Country of Curaçao",
      "Land Curaçao",
      "Pais Kòrsou"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/cuw.svg"
  },
  {
    "name": "Cyprus",
    "topLevelDomain": [
      ".cy"
    ],
    "alpha2Code": "CY",
    "alpha3Code": "CYP",
    "callingCodes": [
      "357"
    ],
    "capital": "Nicosia",
    "altSpellings": [
      "CY",
      "Kýpros",
      "Kıbrıs",
      "Republic of Cyprus",
      "Κυπριακή Δημοκρατία",
      "Kıbrıs Cumhuriyeti"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/cyp.svg"
  },
  {
    "name": "Czech Republic",
    "topLevelDomain": [
      ".cz"
    ],
    "alpha2Code": "CZ",
    "alpha3Code": "CZE",
    "callingCodes": [
      "420"
    ],
    "capital": "Prague",
    "altSpellings": [
      "CZ",
      "Česká republika",
      "Česko"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/cze.svg"
  },
  {
    "name": "Denmark",
    "topLevelDomain": [
      ".dk"
    ],
    "alpha2Code": "DK",
    "alpha3Code": "DNK",
    "callingCodes": [
      "45"
    ],
    "capital": "Copenhagen",
    "altSpellings": [
      "DK",
      "Danmark",
      "Kingdom of Denmark",
      "Kongeriget Danmark"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/dnk.svg"
  },
  {
    "name": "Djibouti",
    "topLevelDomain": [
      ".dj"
    ],
    "alpha2Code": "DJ",
    "alpha3Code": "DJI",
    "callingCodes": [
      "253"
    ],
    "capital": "Djibouti",
    "altSpellings": [
      "DJ",
      "Jabuuti",
      "Gabuuti",
      "Republic of Djibouti",
      "République de Djibouti",
      "Gabuutih Ummuuno",
      "Jamhuuriyadda Jabuuti"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/dji.svg"
  },
  {
    "name": "Dominica",
    "topLevelDomain": [
      ".dm"
    ],
    "alpha2Code": "DM",
    "alpha3Code": "DMA",
    "callingCodes": [
      "1"
    ],
    "capital": "Roseau",
    "altSpellings": [
      "DM",
      "Dominique",
      "Wai‘tu kubuli",
      "Commonwealth of Dominica"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/dma.svg"
  },
  {
    "name": "Dominican Republic",
    "topLevelDomain": [
      ".do"
    ],
    "alpha2Code": "DO",
    "alpha3Code": "DOM",
    "callingCodes": [
      "1"
    ],
    "capital": "Santo Domingo",
    "altSpellings": [
      "DO"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/dom.svg"
  },
  {
    "name": "Ecuador",
    "topLevelDomain": [
      ".ec"
    ],
    "alpha2Code": "EC",
    "alpha3Code": "ECU",
    "callingCodes": [
      "593"
    ],
    "capital": "Quito",
    "altSpellings": [
      "EC",
      "Republic of Ecuador",
      "República del Ecuador"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/ecu.svg"
  },
  {
    "name": "Egypt",
    "topLevelDomain": [
      ".eg"
    ],
    "alpha2Code": "EG",
    "alpha3Code": "EGY",
    "callingCodes": [
      "20"
    ],
    "capital": "Cairo",
    "altSpellings": [
      "EG",
      "Arab Republic of Egypt"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/egy.svg"
  },
  {
    "name": "El Salvador",
    "topLevelDomain": [
      ".sv"
    ],
    "alpha2Code": "SV",
    "alpha3Code": "SLV",
    "callingCodes": [
      "503"
    ],
    "capital": "San Salvador",
    "altSpellings": [
      "SV",
      "Republic of El Salvador",
      "República de El Salvador"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/slv.svg"
  },
  {
    "name": "Equatorial Guinea",
    "topLevelDomain": [
      ".gq"
    ],
    "alpha2Code": "GQ",
    "alpha3Code": "GNQ",
    "callingCodes": [
      "240"
    ],
    "capital": "Malabo",
    "altSpellings": [
      "GQ",
      "Republic of Equatorial Guinea",
      "República de Guinea Ecuatorial",
      "République de Guinée équatoriale",
      "República da Guiné Equatorial"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gnq.svg"
  },
  {
    "name": "Eritrea",
    "topLevelDomain": [
      ".er"
    ],
    "alpha2Code": "ER",
    "alpha3Code": "ERI",
    "callingCodes": [
      "291"
    ],
    "capital": "Asmara",
    "altSpellings": [
      "ER",
      "State of Eritrea",
      "ሃገረ ኤርትራ",
      "Dawlat Iritriyá",
      "ʾErtrā",
      "Iritriyā",
      ""
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/eri.svg"
  },
  {
    "name": "Estonia",
    "topLevelDomain": [
      ".ee"
    ],
    "alpha2Code": "EE",
    "alpha3Code": "EST",
    "callingCodes": [
      "372"
    ],
    "capital": "Tallinn",
    "altSpellings": [
      "EE",
      "Eesti",
      "Republic of Estonia",
      "Eesti Vabariik"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/est.svg"
  },
  {
    "name": "Ethiopia",
    "topLevelDomain": [
      ".et"
    ],
    "alpha2Code": "ET",
    "alpha3Code": "ETH",
    "callingCodes": [
      "251"
    ],
    "capital": "Addis Ababa",
    "altSpellings": [
      "ET",
      "ʾĪtyōṗṗyā",
      "Federal Democratic Republic of Ethiopia",
      "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/eth.svg"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "topLevelDomain": [
      ".fk"
    ],
    "alpha2Code": "FK",
    "alpha3Code": "FLK",
    "callingCodes": [
      "500"
    ],
    "capital": "Stanley",
    "altSpellings": [
      "FK",
      "Islas Malvinas"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/flk.svg"
  },
  {
    "name": "Faroe Islands",
    "topLevelDomain": [
      ".fo"
    ],
    "alpha2Code": "FO",
    "alpha3Code": "FRO",
    "callingCodes": [
      "298"
    ],
    "capital": "Tórshavn",
    "altSpellings": [
      "FO",
      "Føroyar",
      "Færøerne"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/fro.svg"
  },
  {
    "name": "Fiji",
    "topLevelDomain": [
      ".fj"
    ],
    "alpha2Code": "FJ",
    "alpha3Code": "FJI",
    "callingCodes": [
      "679"
    ],
    "capital": "Suva",
    "altSpellings": [
      "FJ",
      "Viti",
      "Republic of Fiji",
      "Matanitu ko Viti",
      "Fijī Gaṇarājya"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/fji.svg"
  },
  {
    "name": "Finland",
    "topLevelDomain": [
      ".fi"
    ],
    "alpha2Code": "FI",
    "alpha3Code": "FIN",
    "callingCodes": [
      "358"
    ],
    "capital": "Helsinki",
    "altSpellings": [
      "FI",
      "Suomi",
      "Republic of Finland",
      "Suomen tasavalta",
      "Republiken Finland"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/fin.svg"
  },
  {
    "name": "France",
    "topLevelDomain": [
      ".fr"
    ],
    "alpha2Code": "FR",
    "alpha3Code": "FRA",
    "callingCodes": [
      "33"
    ],
    "capital": "Paris",
    "altSpellings": [
      "FR",
      "French Republic",
      "République française"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/fra.svg"
  },
  {
    "name": "French Guiana",
    "topLevelDomain": [
      ".gf"
    ],
    "alpha2Code": "GF",
    "alpha3Code": "GUF",
    "callingCodes": [
      "594"
    ],
    "capital": "Cayenne",
    "altSpellings": [
      "GF",
      "Guiana",
      "Guyane"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/guf.svg"
  },
  {
    "name": "French Polynesia",
    "topLevelDomain": [
      ".pf"
    ],
    "alpha2Code": "PF",
    "alpha3Code": "PYF",
    "callingCodes": [
      "689"
    ],
    "capital": "Papeetē",
    "altSpellings": [
      "PF",
      "Polynésie française",
      "French Polynesia",
      "Pōrīnetia Farāni"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/pyf.svg"
  },
  {
    "name": "French Southern Territories",
    "topLevelDomain": [
      ".tf"
    ],
    "alpha2Code": "TF",
    "alpha3Code": "ATF",
    "callingCodes": [
      "262"
    ],
    "capital": "Port-aux-Français",
    "altSpellings": [
      "TF"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/atf.svg"
  },
  {
    "name": "Gabon",
    "topLevelDomain": [
      ".ga"
    ],
    "alpha2Code": "GA",
    "alpha3Code": "GAB",
    "callingCodes": [
      "241"
    ],
    "capital": "Libreville",
    "altSpellings": [
      "GA",
      "Gabonese Republic",
      "République Gabonaise"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gab.svg"
  },
  {
    "name": "Gambia",
    "topLevelDomain": [
      ".gm"
    ],
    "alpha2Code": "GM",
    "alpha3Code": "GMB",
    "callingCodes": [
      "220"
    ],
    "capital": "Banjul",
    "altSpellings": [
      "GM",
      "Republic of the Gambia"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gmb.svg"
  },
  {
    "name": "Georgia",
    "topLevelDomain": [
      ".ge"
    ],
    "alpha2Code": "GE",
    "alpha3Code": "GEO",
    "callingCodes": [
      "995"
    ],
    "capital": "Tbilisi",
    "altSpellings": [
      "GE",
      "Sakartvelo"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/geo.svg"
  },
  {
    "name": "Germany",
    "topLevelDomain": [
      ".de"
    ],
    "alpha2Code": "DE",
    "alpha3Code": "DEU",
    "callingCodes": [
      "49"
    ],
    "capital": "Berlin",
    "altSpellings": [
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/deu.svg"
  },
  {
    "name": "Ghana",
    "topLevelDomain": [
      ".gh"
    ],
    "alpha2Code": "GH",
    "alpha3Code": "GHA",
    "callingCodes": [
      "233"
    ],
    "capital": "Accra",
    "altSpellings": [
      "GH"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gha.svg"
  },
  {
    "name": "Gibraltar",
    "topLevelDomain": [
      ".gi"
    ],
    "alpha2Code": "GI",
    "alpha3Code": "GIB",
    "callingCodes": [
      "350"
    ],
    "capital": "Gibraltar",
    "altSpellings": [
      "GI"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/gib.svg"
  },
  {
    "name": "Greece",
    "topLevelDomain": [
      ".gr"
    ],
    "alpha2Code": "GR",
    "alpha3Code": "GRC",
    "callingCodes": [
      "30"
    ],
    "capital": "Athens",
    "altSpellings": [
      "GR",
      "Elláda",
      "Hellenic Republic",
      "Ελληνική Δημοκρατία"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/grc.svg"
  },
  {
    "name": "Greenland",
    "topLevelDomain": [
      ".gl"
    ],
    "alpha2Code": "GL",
    "alpha3Code": "GRL",
    "callingCodes": [
      "299"
    ],
    "capital": "Nuuk",
    "altSpellings": [
      "GL",
      "Grønland"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/grl.svg"
  },
  {
    "name": "Grenada",
    "topLevelDomain": [
      ".gd"
    ],
    "alpha2Code": "GD",
    "alpha3Code": "GRD",
    "callingCodes": [
      "1"
    ],
    "capital": "St. George's",
    "altSpellings": [
      "GD"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/grd.svg"
  },
  {
    "name": "Guadeloupe",
    "topLevelDomain": [
      ".gp"
    ],
    "alpha2Code": "GP",
    "alpha3Code": "GLP",
    "callingCodes": [
      "590"
    ],
    "capital": "Basse-Terre",
    "altSpellings": [
      "GP",
      "Gwadloup"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/glp.svg"
  },
  {
    "name": "Guam",
    "topLevelDomain": [
      ".gu"
    ],
    "alpha2Code": "GU",
    "alpha3Code": "GUM",
    "callingCodes": [
      "1"
    ],
    "capital": "Hagåtña",
    "altSpellings": [
      "GU",
      "Guåhån"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/gum.svg"
  },
  {
    "name": "Guatemala",
    "topLevelDomain": [
      ".gt"
    ],
    "alpha2Code": "GT",
    "alpha3Code": "GTM",
    "callingCodes": [
      "502"
    ],
    "capital": "Guatemala City",
    "altSpellings": [
      "GT"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/gtm.svg"
  },
  {
    "name": "Guernsey",
    "topLevelDomain": [
      ".gg"
    ],
    "alpha2Code": "GG",
    "alpha3Code": "GGY",
    "callingCodes": [
      "44"
    ],
    "capital": "St. Peter Port",
    "altSpellings": [
      "GG",
      "Bailiwick of Guernsey",
      "Bailliage de Guernesey"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/ggy.svg"
  },
  {
    "name": "Guinea",
    "topLevelDomain": [
      ".gn"
    ],
    "alpha2Code": "GN",
    "alpha3Code": "GIN",
    "callingCodes": [
      "224"
    ],
    "capital": "Conakry",
    "altSpellings": [
      "GN",
      "Republic of Guinea",
      "République de Guinée"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gin.svg"
  },
  {
    "name": "Guinea-Bissau",
    "topLevelDomain": [
      ".gw"
    ],
    "alpha2Code": "GW",
    "alpha3Code": "GNB",
    "callingCodes": [
      "245"
    ],
    "capital": "Bissau",
    "altSpellings": [
      "GW",
      "Republic of Guinea-Bissau",
      "República da Guiné-Bissau"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/gnb.svg"
  },
  {
    "name": "Guyana",
    "topLevelDomain": [
      ".gy"
    ],
    "alpha2Code": "GY",
    "alpha3Code": "GUY",
    "callingCodes": [
      "592"
    ],
    "capital": "Georgetown",
    "altSpellings": [
      "GY",
      "Co-operative Republic of Guyana"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/guy.svg"
  },
  {
    "name": "Haiti",
    "topLevelDomain": [
      ".ht"
    ],
    "alpha2Code": "HT",
    "alpha3Code": "HTI",
    "callingCodes": [
      "509"
    ],
    "capital": "Port-au-Prince",
    "altSpellings": [
      "HT",
      "Republic of Haiti",
      "République d'Haïti",
      "Repiblik Ayiti"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/hti.svg"
  },
  {
    "name": "Heard Island and McDonald Islands",
    "topLevelDomain": [
      ".hm",
      ".aq"
    ],
    "alpha2Code": "HM",
    "alpha3Code": "HMD",
    "callingCodes": [
      "672"
    ],
    "capital": "",
    "altSpellings": [
      "HM"
    ],
    "region": "",
    "flag": "https://restcountries.eu/data/hmd.svg"
  },
  {
    "name": "Holy See",
    "topLevelDomain": [
      ".va"
    ],
    "alpha2Code": "VA",
    "alpha3Code": "VAT",
    "callingCodes": [
      "379"
    ],
    "capital": "Rome",
    "altSpellings": [
      "Sancta Sedes",
      "Vatican",
      "The Vatican"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/vat.svg"
  },
  {
    "name": "Honduras",
    "topLevelDomain": [
      ".hn"
    ],
    "alpha2Code": "HN",
    "alpha3Code": "HND",
    "callingCodes": [
      "504"
    ],
    "capital": "Tegucigalpa",
    "altSpellings": [
      "HN",
      "Republic of Honduras",
      "República de Honduras"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/hnd.svg"
  },
  {
    "name": "Hong Kong",
    "topLevelDomain": [
      ".hk"
    ],
    "alpha2Code": "HK",
    "alpha3Code": "HKG",
    "callingCodes": [
      "852"
    ],
    "capital": "City of Victoria",
    "altSpellings": [
      "HK",
      "香港"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/hkg.svg"
  },
  {
    "name": "Hungary",
    "topLevelDomain": [
      ".hu"
    ],
    "alpha2Code": "HU",
    "alpha3Code": "HUN",
    "callingCodes": [
      "36"
    ],
    "capital": "Budapest",
    "altSpellings": [
      "HU"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/hun.svg"
  },
  {
    "name": "Iceland",
    "topLevelDomain": [
      ".is"
    ],
    "alpha2Code": "IS",
    "alpha3Code": "ISL",
    "callingCodes": [
      "354"
    ],
    "capital": "Reykjavík",
    "altSpellings": [
      "IS",
      "Island",
      "Republic of Iceland",
      "Lýðveldið Ísland"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/isl.svg"
  },
  {
    "name": "India",
    "topLevelDomain": [
      ".in"
    ],
    "alpha2Code": "IN",
    "alpha3Code": "IND",
    "callingCodes": [
      "91"
    ],
    "capital": "New Delhi",
    "altSpellings": [
      "IN",
      "Bhārat",
      "Republic of India",
      "Bharat Ganrajya"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/ind.svg"
  },
  {
    "name": "Indonesia",
    "topLevelDomain": [
      ".id"
    ],
    "alpha2Code": "ID",
    "alpha3Code": "IDN",
    "callingCodes": [
      "62"
    ],
    "capital": "Jakarta",
    "altSpellings": [
      "ID",
      "Republic of Indonesia",
      "Republik Indonesia"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/idn.svg"
  },
  {
    "name": "Côte d'Ivoire",
    "topLevelDomain": [
      ".ci"
    ],
    "alpha2Code": "CI",
    "alpha3Code": "CIV",
    "callingCodes": [
      "225"
    ],
    "capital": "Yamoussoukro",
    "altSpellings": [
      "CI",
      "Ivory Coast",
      "Republic of Côte d'Ivoire",
      "République de Côte d'Ivoire"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/civ.svg"
  },
  {
    "name": "Iran (Islamic Republic of)",
    "topLevelDomain": [
      ".ir"
    ],
    "alpha2Code": "IR",
    "alpha3Code": "IRN",
    "callingCodes": [
      "98"
    ],
    "capital": "Tehran",
    "altSpellings": [
      "IR",
      "Islamic Republic of Iran",
      "Jomhuri-ye Eslāmi-ye Irān"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/irn.svg"
  },
  {
    "name": "Iraq",
    "topLevelDomain": [
      ".iq"
    ],
    "alpha2Code": "IQ",
    "alpha3Code": "IRQ",
    "callingCodes": [
      "964"
    ],
    "capital": "Baghdad",
    "altSpellings": [
      "IQ",
      "Republic of Iraq",
      "Jumhūriyyat al-‘Irāq"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/irq.svg"
  },
  {
    "name": "Ireland",
    "topLevelDomain": [
      ".ie"
    ],
    "alpha2Code": "IE",
    "alpha3Code": "IRL",
    "callingCodes": [
      "353"
    ],
    "capital": "Dublin",
    "altSpellings": [
      "IE",
      "Éire",
      "Republic of Ireland",
      "Poblacht na hÉireann"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/irl.svg"
  },
  {
    "name": "Isle of Man",
    "topLevelDomain": [
      ".im"
    ],
    "alpha2Code": "IM",
    "alpha3Code": "IMN",
    "callingCodes": [
      "44"
    ],
    "capital": "Douglas",
    "altSpellings": [
      "IM",
      "Ellan Vannin",
      "Mann",
      "Mannin"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/imn.svg"
  },
  {
    "name": "Israel",
    "topLevelDomain": [
      ".il"
    ],
    "alpha2Code": "IL",
    "alpha3Code": "ISR",
    "callingCodes": [
      "972"
    ],
    "capital": "Jerusalem",
    "altSpellings": [
      "IL",
      "State of Israel",
      "Medīnat Yisrā'el"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/isr.svg"
  },
  {
    "name": "Italy",
    "topLevelDomain": [
      ".it"
    ],
    "alpha2Code": "IT",
    "alpha3Code": "ITA",
    "callingCodes": [
      "39"
    ],
    "capital": "Rome",
    "altSpellings": [
      "IT",
      "Italian Republic",
      "Repubblica italiana"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/ita.svg"
  },
  {
    "name": "Jamaica",
    "topLevelDomain": [
      ".jm"
    ],
    "alpha2Code": "JM",
    "alpha3Code": "JAM",
    "callingCodes": [
      "1"
    ],
    "capital": "Kingston",
    "altSpellings": [
      "JM"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/jam.svg"
  },
  {
    "name": "Japan",
    "topLevelDomain": [
      ".jp"
    ],
    "alpha2Code": "JP",
    "alpha3Code": "JPN",
    "callingCodes": [
      "81"
    ],
    "capital": "Tokyo",
    "altSpellings": [
      "JP",
      "Nippon",
      "Nihon"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/jpn.svg"
  },
  {
    "name": "Jersey",
    "topLevelDomain": [
      ".je"
    ],
    "alpha2Code": "JE",
    "alpha3Code": "JEY",
    "callingCodes": [
      "44"
    ],
    "capital": "Saint Helier",
    "altSpellings": [
      "JE",
      "Bailiwick of Jersey",
      "Bailliage de Jersey",
      "Bailliage dé Jèrri"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/jey.svg"
  },
  {
    "name": "Jordan",
    "topLevelDomain": [
      ".jo"
    ],
    "alpha2Code": "JO",
    "alpha3Code": "JOR",
    "callingCodes": [
      "962"
    ],
    "capital": "Amman",
    "altSpellings": [
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/jor.svg"
  },
  {
    "name": "Kazakhstan",
    "topLevelDomain": [
      ".kz",
      ".қаз"
    ],
    "alpha2Code": "KZ",
    "alpha3Code": "KAZ",
    "callingCodes": [
      "76",
      "77"
    ],
    "capital": "Astana",
    "altSpellings": [
      "KZ",
      "Qazaqstan",
      "Казахстан",
      "Republic of Kazakhstan",
      "Қазақстан Республикасы",
      "Qazaqstan Respublïkası",
      "Республика Казахстан",
      "Respublika Kazakhstan"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/kaz.svg"
  },
  {
    "name": "Kenya",
    "topLevelDomain": [
      ".ke"
    ],
    "alpha2Code": "KE",
    "alpha3Code": "KEN",
    "callingCodes": [
      "254"
    ],
    "capital": "Nairobi",
    "altSpellings": [
      "KE",
      "Republic of Kenya",
      "Jamhuri ya Kenya"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/ken.svg"
  },
  {
    "name": "Kiribati",
    "topLevelDomain": [
      ".ki"
    ],
    "alpha2Code": "KI",
    "alpha3Code": "KIR",
    "callingCodes": [
      "686"
    ],
    "capital": "South Tarawa",
    "altSpellings": [
      "KI",
      "Republic of Kiribati",
      "Ribaberiki Kiribati"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/kir.svg"
  },
  {
    "name": "Kuwait",
    "topLevelDomain": [
      ".kw"
    ],
    "alpha2Code": "KW",
    "alpha3Code": "KWT",
    "callingCodes": [
      "965"
    ],
    "capital": "Kuwait City",
    "altSpellings": [
      "KW",
      "State of Kuwait",
      "Dawlat al-Kuwait"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/kwt.svg"
  },
  {
    "name": "Kyrgyzstan",
    "topLevelDomain": [
      ".kg"
    ],
    "alpha2Code": "KG",
    "alpha3Code": "KGZ",
    "callingCodes": [
      "996"
    ],
    "capital": "Bishkek",
    "altSpellings": [
      "KG",
      "Киргизия",
      "Kyrgyz Republic",
      "Кыргыз Республикасы",
      "Kyrgyz Respublikasy"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/kgz.svg"
  },
  {
    "name": "Lao People's Democratic Republic",
    "topLevelDomain": [
      ".la"
    ],
    "alpha2Code": "LA",
    "alpha3Code": "LAO",
    "callingCodes": [
      "856"
    ],
    "capital": "Vientiane",
    "altSpellings": [
      "LA",
      "Lao",
      "Laos",
      "Lao People's Democratic Republic",
      "Sathalanalat Paxathipatai Paxaxon Lao"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/lao.svg"
  },
  {
    "name": "Latvia",
    "topLevelDomain": [
      ".lv"
    ],
    "alpha2Code": "LV",
    "alpha3Code": "LVA",
    "callingCodes": [
      "371"
    ],
    "capital": "Riga",
    "altSpellings": [
      "LV",
      "Republic of Latvia",
      "Latvijas Republika"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/lva.svg"
  },
  {
    "name": "Lebanon",
    "topLevelDomain": [
      ".lb"
    ],
    "alpha2Code": "LB",
    "alpha3Code": "LBN",
    "callingCodes": [
      "961"
    ],
    "capital": "Beirut",
    "altSpellings": [
      "LB",
      "Lebanese Republic",
      "Al-Jumhūrīyah Al-Libnānīyah"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/lbn.svg"
  },
  {
    "name": "Lesotho",
    "topLevelDomain": [
      ".ls"
    ],
    "alpha2Code": "LS",
    "alpha3Code": "LSO",
    "callingCodes": [
      "266"
    ],
    "capital": "Maseru",
    "altSpellings": [
      "LS",
      "Kingdom of Lesotho",
      "Muso oa Lesotho"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/lso.svg"
  },
  {
    "name": "Liberia",
    "topLevelDomain": [
      ".lr"
    ],
    "alpha2Code": "LR",
    "alpha3Code": "LBR",
    "callingCodes": [
      "231"
    ],
    "capital": "Monrovia",
    "altSpellings": [
      "LR",
      "Republic of Liberia"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/lbr.svg"
  },
  {
    "name": "Libya",
    "topLevelDomain": [
      ".ly"
    ],
    "alpha2Code": "LY",
    "alpha3Code": "LBY",
    "callingCodes": [
      "218"
    ],
    "capital": "Tripoli",
    "altSpellings": [
      "LY",
      "State of Libya",
      "Dawlat Libya"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/lby.svg"
  },
  {
    "name": "Liechtenstein",
    "topLevelDomain": [
      ".li"
    ],
    "alpha2Code": "LI",
    "alpha3Code": "LIE",
    "callingCodes": [
      "423"
    ],
    "capital": "Vaduz",
    "altSpellings": [
      "LI",
      "Principality of Liechtenstein",
      "Fürstentum Liechtenstein"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/lie.svg"
  },
  {
    "name": "Lithuania",
    "topLevelDomain": [
      ".lt"
    ],
    "alpha2Code": "LT",
    "alpha3Code": "LTU",
    "callingCodes": [
      "370"
    ],
    "capital": "Vilnius",
    "altSpellings": [
      "LT",
      "Republic of Lithuania",
      "Lietuvos Respublika"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/ltu.svg"
  },
  {
    "name": "Luxembourg",
    "topLevelDomain": [
      ".lu"
    ],
    "alpha2Code": "LU",
    "alpha3Code": "LUX",
    "callingCodes": [
      "352"
    ],
    "capital": "Luxembourg",
    "altSpellings": [
      "LU",
      "Grand Duchy of Luxembourg",
      "Grand-Duché de Luxembourg",
      "Großherzogtum Luxemburg",
      "Groussherzogtum Lëtzebuerg"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/lux.svg"
  },
  {
    "name": "Macao",
    "topLevelDomain": [
      ".mo"
    ],
    "alpha2Code": "MO",
    "alpha3Code": "MAC",
    "callingCodes": [
      "853"
    ],
    "capital": "",
    "altSpellings": [
      "MO",
      "澳门",
      "Macao Special Administrative Region of the People's Republic of China",
      "中華人民共和國澳門特別行政區",
      "Região Administrativa Especial de Macau da República Popular da China"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/mac.svg"
  },
  {
    "name": "Macedonia (the former Yugoslav Republic of)",
    "topLevelDomain": [
      ".mk"
    ],
    "alpha2Code": "MK",
    "alpha3Code": "MKD",
    "callingCodes": [
      "389"
    ],
    "capital": "Skopje",
    "altSpellings": [
      "MK",
      "Republic of Macedonia",
      "Република Македонија"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/mkd.svg"
  },
  {
    "name": "Madagascar",
    "topLevelDomain": [
      ".mg"
    ],
    "alpha2Code": "MG",
    "alpha3Code": "MDG",
    "callingCodes": [
      "261"
    ],
    "capital": "Antananarivo",
    "altSpellings": [
      "MG",
      "Republic of Madagascar",
      "Repoblikan'i Madagasikara",
      "République de Madagascar"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mdg.svg"
  },
  {
    "name": "Malawi",
    "topLevelDomain": [
      ".mw"
    ],
    "alpha2Code": "MW",
    "alpha3Code": "MWI",
    "callingCodes": [
      "265"
    ],
    "capital": "Lilongwe",
    "altSpellings": [
      "MW",
      "Republic of Malawi"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mwi.svg"
  },
  {
    "name": "Malaysia",
    "topLevelDomain": [
      ".my"
    ],
    "alpha2Code": "MY",
    "alpha3Code": "MYS",
    "callingCodes": [
      "60"
    ],
    "capital": "Kuala Lumpur",
    "altSpellings": [
      "MY"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/mys.svg"
  },
  {
    "name": "Maldives",
    "topLevelDomain": [
      ".mv"
    ],
    "alpha2Code": "MV",
    "alpha3Code": "MDV",
    "callingCodes": [
      "960"
    ],
    "capital": "Malé",
    "altSpellings": [
      "MV",
      "Maldive Islands",
      "Republic of the Maldives",
      "Dhivehi Raajjeyge Jumhooriyya"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/mdv.svg"
  },
  {
    "name": "Mali",
    "topLevelDomain": [
      ".ml"
    ],
    "alpha2Code": "ML",
    "alpha3Code": "MLI",
    "callingCodes": [
      "223"
    ],
    "capital": "Bamako",
    "altSpellings": [
      "ML",
      "Republic of Mali",
      "République du Mali"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mli.svg"
  },
  {
    "name": "Malta",
    "topLevelDomain": [
      ".mt"
    ],
    "alpha2Code": "MT",
    "alpha3Code": "MLT",
    "callingCodes": [
      "356"
    ],
    "capital": "Valletta",
    "altSpellings": [
      "MT",
      "Republic of Malta",
      "Repubblika ta' Malta"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/mlt.svg"
  },
  {
    "name": "Marshall Islands",
    "topLevelDomain": [
      ".mh"
    ],
    "alpha2Code": "MH",
    "alpha3Code": "MHL",
    "callingCodes": [
      "692"
    ],
    "capital": "Majuro",
    "altSpellings": [
      "MH",
      "Republic of the Marshall Islands",
      "Aolepān Aorōkin M̧ajeļ"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/mhl.svg"
  },
  {
    "name": "Martinique",
    "topLevelDomain": [
      ".mq"
    ],
    "alpha2Code": "MQ",
    "alpha3Code": "MTQ",
    "callingCodes": [
      "596"
    ],
    "capital": "Fort-de-France",
    "altSpellings": [
      "MQ"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/mtq.svg"
  },
  {
    "name": "Mauritania",
    "topLevelDomain": [
      ".mr"
    ],
    "alpha2Code": "MR",
    "alpha3Code": "MRT",
    "callingCodes": [
      "222"
    ],
    "capital": "Nouakchott",
    "altSpellings": [
      "MR",
      "Islamic Republic of Mauritania",
      "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mrt.svg"
  },
  {
    "name": "Mauritius",
    "topLevelDomain": [
      ".mu"
    ],
    "alpha2Code": "MU",
    "alpha3Code": "MUS",
    "callingCodes": [
      "230"
    ],
    "capital": "Port Louis",
    "altSpellings": [
      "MU",
      "Republic of Mauritius",
      "République de Maurice"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mus.svg"
  },
  {
    "name": "Mayotte",
    "topLevelDomain": [
      ".yt"
    ],
    "alpha2Code": "YT",
    "alpha3Code": "MYT",
    "callingCodes": [
      "262"
    ],
    "capital": "Mamoudzou",
    "altSpellings": [
      "YT",
      "Department of Mayotte",
      "Département de Mayotte"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/myt.svg"
  },
  {
    "name": "Mexico",
    "topLevelDomain": [
      ".mx"
    ],
    "alpha2Code": "MX",
    "alpha3Code": "MEX",
    "callingCodes": [
      "52"
    ],
    "capital": "Mexico City",
    "altSpellings": [
      "MX",
      "Mexicanos",
      "United Mexican States",
      "Estados Unidos Mexicanos"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/mex.svg"
  },
  {
    "name": "Micronesia (Federated States of)",
    "topLevelDomain": [
      ".fm"
    ],
    "alpha2Code": "FM",
    "alpha3Code": "FSM",
    "callingCodes": [
      "691"
    ],
    "capital": "Palikir",
    "altSpellings": [
      "FM",
      "Federated States of Micronesia"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/fsm.svg"
  },
  {
    "name": "Moldova (Republic of)",
    "topLevelDomain": [
      ".md"
    ],
    "alpha2Code": "MD",
    "alpha3Code": "MDA",
    "callingCodes": [
      "373"
    ],
    "capital": "Chișinău",
    "altSpellings": [
      "MD",
      "Republic of Moldova",
      "Republica Moldova"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/mda.svg"
  },
  {
    "name": "Monaco",
    "topLevelDomain": [
      ".mc"
    ],
    "alpha2Code": "MC",
    "alpha3Code": "MCO",
    "callingCodes": [
      "377"
    ],
    "capital": "Monaco",
    "altSpellings": [
      "MC",
      "Principality of Monaco",
      "Principauté de Monaco"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/mco.svg"
  },
  {
    "name": "Mongolia",
    "topLevelDomain": [
      ".mn"
    ],
    "alpha2Code": "MN",
    "alpha3Code": "MNG",
    "callingCodes": [
      "976"
    ],
    "capital": "Ulan Bator",
    "altSpellings": [
      "MN"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/mng.svg"
  },
  {
    "name": "Montenegro",
    "topLevelDomain": [
      ".me"
    ],
    "alpha2Code": "ME",
    "alpha3Code": "MNE",
    "callingCodes": [
      "382"
    ],
    "capital": "Podgorica",
    "altSpellings": [
      "ME",
      "Crna Gora"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/mne.svg"
  },
  {
    "name": "Montserrat",
    "topLevelDomain": [
      ".ms"
    ],
    "alpha2Code": "MS",
    "alpha3Code": "MSR",
    "callingCodes": [
      "1"
    ],
    "capital": "Plymouth",
    "altSpellings": [
      "MS"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/msr.svg"
  },
  {
    "name": "Morocco",
    "topLevelDomain": [
      ".ma"
    ],
    "alpha2Code": "MA",
    "alpha3Code": "MAR",
    "callingCodes": [
      "212"
    ],
    "capital": "Rabat",
    "altSpellings": [
      "MA",
      "Kingdom of Morocco",
      "Al-Mamlakah al-Maġribiyah"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/mar.svg"
  },
  {
    "name": "Mozambique",
    "topLevelDomain": [
      ".mz"
    ],
    "alpha2Code": "MZ",
    "alpha3Code": "MOZ",
    "callingCodes": [
      "258"
    ],
    "capital": "Maputo",
    "altSpellings": [
      "MZ",
      "Republic of Mozambique",
      "República de Moçambique"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/moz.svg"
  },
  {
    "name": "Myanmar",
    "topLevelDomain": [
      ".mm"
    ],
    "alpha2Code": "MM",
    "alpha3Code": "MMR",
    "callingCodes": [
      "95"
    ],
    "capital": "Naypyidaw",
    "altSpellings": [
      "MM",
      "Burma",
      "Republic of the Union of Myanmar",
      "Pyidaunzu Thanmăda Myăma Nainngandaw"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/mmr.svg"
  },
  {
    "name": "Namibia",
    "topLevelDomain": [
      ".na"
    ],
    "alpha2Code": "NA",
    "alpha3Code": "NAM",
    "callingCodes": [
      "264"
    ],
    "capital": "Windhoek",
    "altSpellings": [
      "NA",
      "Namibië",
      "Republic of Namibia"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/nam.svg"
  },
  {
    "name": "Nauru",
    "topLevelDomain": [
      ".nr"
    ],
    "alpha2Code": "NR",
    "alpha3Code": "NRU",
    "callingCodes": [
      "674"
    ],
    "capital": "Yaren",
    "altSpellings": [
      "NR",
      "Naoero",
      "Pleasant Island",
      "Republic of Nauru",
      "Ripublik Naoero"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/nru.svg"
  },
  {
    "name": "Nepal",
    "topLevelDomain": [
      ".np"
    ],
    "alpha2Code": "NP",
    "alpha3Code": "NPL",
    "callingCodes": [
      "977"
    ],
    "capital": "Kathmandu",
    "altSpellings": [
      "NP",
      "Federal Democratic Republic of Nepal",
      "Loktāntrik Ganatantra Nepāl"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/npl.svg"
  },
  {
    "name": "Netherlands",
    "topLevelDomain": [
      ".nl"
    ],
    "alpha2Code": "NL",
    "alpha3Code": "NLD",
    "callingCodes": [
      "31"
    ],
    "capital": "Amsterdam",
    "altSpellings": [
      "NL",
      "Holland",
      "Nederland"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/nld.svg"
  },
  {
    "name": "New Caledonia",
    "topLevelDomain": [
      ".nc"
    ],
    "alpha2Code": "NC",
    "alpha3Code": "NCL",
    "callingCodes": [
      "687"
    ],
    "capital": "Nouméa",
    "altSpellings": [
      "NC"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/ncl.svg"
  },
  {
    "name": "New Zealand",
    "topLevelDomain": [
      ".nz"
    ],
    "alpha2Code": "NZ",
    "alpha3Code": "NZL",
    "callingCodes": [
      "64"
    ],
    "capital": "Wellington",
    "altSpellings": [
      "NZ",
      "Aotearoa"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/nzl.svg"
  },
  {
    "name": "Nicaragua",
    "topLevelDomain": [
      ".ni"
    ],
    "alpha2Code": "NI",
    "alpha3Code": "NIC",
    "callingCodes": [
      "505"
    ],
    "capital": "Managua",
    "altSpellings": [
      "NI",
      "Republic of Nicaragua",
      "República de Nicaragua"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/nic.svg"
  },
  {
    "name": "Niger",
    "topLevelDomain": [
      ".ne"
    ],
    "alpha2Code": "NE",
    "alpha3Code": "NER",
    "callingCodes": [
      "227"
    ],
    "capital": "Niamey",
    "altSpellings": [
      "NE",
      "Nijar",
      "Republic of Niger",
      "République du Niger"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/ner.svg"
  },
  {
    "name": "Nigeria",
    "topLevelDomain": [
      ".ng"
    ],
    "alpha2Code": "NG",
    "alpha3Code": "NGA",
    "callingCodes": [
      "234"
    ],
    "capital": "Abuja",
    "altSpellings": [
      "NG",
      "Nijeriya",
      "Naíjíríà",
      "Federal Republic of Nigeria"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/nga.svg"
  },
  {
    "name": "Niue",
    "topLevelDomain": [
      ".nu"
    ],
    "alpha2Code": "NU",
    "alpha3Code": "NIU",
    "callingCodes": [
      "683"
    ],
    "capital": "Alofi",
    "altSpellings": [
      "NU"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/niu.svg"
  },
  {
    "name": "Norfolk Island",
    "topLevelDomain": [
      ".nf"
    ],
    "alpha2Code": "NF",
    "alpha3Code": "NFK",
    "callingCodes": [
      "672"
    ],
    "capital": "Kingston",
    "altSpellings": [
      "NF",
      "Territory of Norfolk Island",
      "Teratri of Norf'k Ailen"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/nfk.svg"
  },
  {
    "name": "Korea (Democratic People's Republic of)",
    "topLevelDomain": [
      ".kp"
    ],
    "alpha2Code": "KP",
    "alpha3Code": "PRK",
    "callingCodes": [
      "850"
    ],
    "capital": "Pyongyang",
    "altSpellings": [
      "KP",
      "Democratic People's Republic of Korea",
      "조선민주주의인민공화국",
      "Chosŏn Minjujuŭi Inmin Konghwaguk"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/prk.svg"
  },
  {
    "name": "Northern Mariana Islands",
    "topLevelDomain": [
      ".mp"
    ],
    "alpha2Code": "MP",
    "alpha3Code": "MNP",
    "callingCodes": [
      "1"
    ],
    "capital": "Saipan",
    "altSpellings": [
      "MP",
      "Commonwealth of the Northern Mariana Islands",
      "Sankattan Siha Na Islas Mariånas"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/mnp.svg"
  },
  {
    "name": "Norway",
    "topLevelDomain": [
      ".no"
    ],
    "alpha2Code": "NO",
    "alpha3Code": "NOR",
    "callingCodes": [
      "47"
    ],
    "capital": "Oslo",
    "altSpellings": [
      "NO",
      "Norge",
      "Noreg",
      "Kingdom of Norway",
      "Kongeriket Norge",
      "Kongeriket Noreg"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/nor.svg"
  },
  {
    "name": "Oman",
    "topLevelDomain": [
      ".om"
    ],
    "alpha2Code": "OM",
    "alpha3Code": "OMN",
    "callingCodes": [
      "968"
    ],
    "capital": "Muscat",
    "altSpellings": [
      "OM",
      "Sultanate of Oman",
      "Salṭanat ʻUmān"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/omn.svg"
  },
  {
    "name": "Pakistan",
    "topLevelDomain": [
      ".pk"
    ],
    "alpha2Code": "PK",
    "alpha3Code": "PAK",
    "callingCodes": [
      "92"
    ],
    "capital": "Islamabad",
    "altSpellings": [
      "PK",
      "Pākistān",
      "Islamic Republic of Pakistan",
      "Islāmī Jumhūriya'eh Pākistān"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/pak.svg"
  },
  {
    "name": "Palau",
    "topLevelDomain": [
      ".pw"
    ],
    "alpha2Code": "PW",
    "alpha3Code": "PLW",
    "callingCodes": [
      "680"
    ],
    "capital": "Ngerulmud",
    "altSpellings": [
      "PW",
      "Republic of Palau",
      "Beluu er a Belau"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/plw.svg"
  },
  {
    "name": "Palestine, State of",
    "topLevelDomain": [
      ".ps"
    ],
    "alpha2Code": "PS",
    "alpha3Code": "PSE",
    "callingCodes": [
      "970"
    ],
    "capital": "Ramallah",
    "altSpellings": [
      "PS",
      "State of Palestine",
      "Dawlat Filasṭin"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/pse.svg"
  },
  {
    "name": "Panama",
    "topLevelDomain": [
      ".pa"
    ],
    "alpha2Code": "PA",
    "alpha3Code": "PAN",
    "callingCodes": [
      "507"
    ],
    "capital": "Panama City",
    "altSpellings": [
      "PA",
      "Republic of Panama",
      "República de Panamá"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/pan.svg"
  },
  {
    "name": "Papua New Guinea",
    "topLevelDomain": [
      ".pg"
    ],
    "alpha2Code": "PG",
    "alpha3Code": "PNG",
    "callingCodes": [
      "675"
    ],
    "capital": "Port Moresby",
    "altSpellings": [
      "PG",
      "Independent State of Papua New Guinea",
      "Independen Stet bilong Papua Niugini"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/png.svg"
  },
  {
    "name": "Paraguay",
    "topLevelDomain": [
      ".py"
    ],
    "alpha2Code": "PY",
    "alpha3Code": "PRY",
    "callingCodes": [
      "595"
    ],
    "capital": "Asunción",
    "altSpellings": [
      "PY",
      "Republic of Paraguay",
      "República del Paraguay",
      "Tetã Paraguái"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/pry.svg"
  },
  {
    "name": "Peru",
    "topLevelDomain": [
      ".pe"
    ],
    "alpha2Code": "PE",
    "alpha3Code": "PER",
    "callingCodes": [
      "51"
    ],
    "capital": "Lima",
    "altSpellings": [
      "PE",
      "Republic of Peru",
      " República del Perú"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/per.svg"
  },
  {
    "name": "Philippines",
    "topLevelDomain": [
      ".ph"
    ],
    "alpha2Code": "PH",
    "alpha3Code": "PHL",
    "callingCodes": [
      "63"
    ],
    "capital": "Manila",
    "altSpellings": [
      "PH",
      "Republic of the Philippines",
      "Repúblika ng Pilipinas"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/phl.svg"
  },
  {
    "name": "Pitcairn",
    "topLevelDomain": [
      ".pn"
    ],
    "alpha2Code": "PN",
    "alpha3Code": "PCN",
    "callingCodes": [
      "64"
    ],
    "capital": "Adamstown",
    "altSpellings": [
      "PN",
      "Pitcairn Henderson Ducie and Oeno Islands"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/pcn.svg"
  },
  {
    "name": "Poland",
    "topLevelDomain": [
      ".pl"
    ],
    "alpha2Code": "PL",
    "alpha3Code": "POL",
    "callingCodes": [
      "48"
    ],
    "capital": "Warsaw",
    "altSpellings": [
      "PL",
      "Republic of Poland",
      "Rzeczpospolita Polska"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/pol.svg"
  },
  {
    "name": "Portugal",
    "topLevelDomain": [
      ".pt"
    ],
    "alpha2Code": "PT",
    "alpha3Code": "PRT",
    "callingCodes": [
      "351"
    ],
    "capital": "Lisbon",
    "altSpellings": [
      "PT",
      "Portuguesa",
      "Portuguese Republic",
      "República Portuguesa"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/prt.svg"
  },
  {
    "name": "Puerto Rico",
    "topLevelDomain": [
      ".pr"
    ],
    "alpha2Code": "PR",
    "alpha3Code": "PRI",
    "callingCodes": [
      "1"
    ],
    "capital": "San Juan",
    "altSpellings": [
      "PR",
      "Commonwealth of Puerto Rico",
      "Estado Libre Asociado de Puerto Rico"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/pri.svg"
  },
  {
    "name": "Qatar",
    "topLevelDomain": [
      ".qa"
    ],
    "alpha2Code": "QA",
    "alpha3Code": "QAT",
    "callingCodes": [
      "974"
    ],
    "capital": "Doha",
    "altSpellings": [
      "QA",
      "State of Qatar",
      "Dawlat Qaṭar"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/qat.svg"
  },
  {
    "name": "Republic of Kosovo",
    "topLevelDomain": [
      ""
    ],
    "alpha2Code": "XK",
    "alpha3Code": "KOS",
    "callingCodes": [
      "383"
    ],
    "capital": "Pristina",
    "altSpellings": [
      "XK",
      "Република Косово"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/kos.svg"
  },
  {
    "name": "Réunion",
    "topLevelDomain": [
      ".re"
    ],
    "alpha2Code": "RE",
    "alpha3Code": "REU",
    "callingCodes": [
      "262"
    ],
    "capital": "Saint-Denis",
    "altSpellings": [
      "RE",
      "Reunion"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/reu.svg"
  },
  {
    "name": "Romania",
    "topLevelDomain": [
      ".ro"
    ],
    "alpha2Code": "RO",
    "alpha3Code": "ROU",
    "callingCodes": [
      "40"
    ],
    "capital": "Bucharest",
    "altSpellings": [
      "RO",
      "Rumania",
      "Roumania",
      "România"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/rou.svg"
  },
  {
    "name": "Russian Federation",
    "topLevelDomain": [
      ".ru"
    ],
    "alpha2Code": "RU",
    "alpha3Code": "RUS",
    "callingCodes": [
      "7"
    ],
    "capital": "Moscow",
    "altSpellings": [
      "RU",
      "Rossiya",
      "Russian Federation",
      "Российская Федерация",
      "Rossiyskaya Federatsiya"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/rus.svg"
  },
  {
    "name": "Rwanda",
    "topLevelDomain": [
      ".rw"
    ],
    "alpha2Code": "RW",
    "alpha3Code": "RWA",
    "callingCodes": [
      "250"
    ],
    "capital": "Kigali",
    "altSpellings": [
      "RW",
      "Republic of Rwanda",
      "Repubulika y'u Rwanda",
      "République du Rwanda"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/rwa.svg"
  },
  {
    "name": "Saint Barthélemy",
    "topLevelDomain": [
      ".bl"
    ],
    "alpha2Code": "BL",
    "alpha3Code": "BLM",
    "callingCodes": [
      "590"
    ],
    "capital": "Gustavia",
    "altSpellings": [
      "BL",
      "St. Barthelemy",
      "Collectivity of Saint Barthélemy",
      "Collectivité de Saint-Barthélemy"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/blm.svg"
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "topLevelDomain": [
      ".sh"
    ],
    "alpha2Code": "SH",
    "alpha3Code": "SHN",
    "callingCodes": [
      "290"
    ],
    "capital": "Jamestown",
    "altSpellings": [
      "SH"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/shn.svg"
  },
  {
    "name": "Saint Kitts and Nevis",
    "topLevelDomain": [
      ".kn"
    ],
    "alpha2Code": "KN",
    "alpha3Code": "KNA",
    "callingCodes": [
      "1"
    ],
    "capital": "Basseterre",
    "altSpellings": [
      "KN",
      "Federation of Saint Christopher and Nevis"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/kna.svg"
  },
  {
    "name": "Saint Lucia",
    "topLevelDomain": [
      ".lc"
    ],
    "alpha2Code": "LC",
    "alpha3Code": "LCA",
    "callingCodes": [
      "1"
    ],
    "capital": "Castries",
    "altSpellings": [
      "LC"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/lca.svg"
  },
  {
    "name": "Saint Martin (French part)",
    "topLevelDomain": [
      ".mf",
      ".fr",
      ".gp"
    ],
    "alpha2Code": "MF",
    "alpha3Code": "MAF",
    "callingCodes": [
      "590"
    ],
    "capital": "Marigot",
    "altSpellings": [
      "MF",
      "Collectivity of Saint Martin",
      "Collectivité de Saint-Martin"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/maf.svg"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "topLevelDomain": [
      ".pm"
    ],
    "alpha2Code": "PM",
    "alpha3Code": "SPM",
    "callingCodes": [
      "508"
    ],
    "capital": "Saint-Pierre",
    "altSpellings": [
      "PM",
      "Collectivité territoriale de Saint-Pierre-et-Miquelon"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/spm.svg"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "topLevelDomain": [
      ".vc"
    ],
    "alpha2Code": "VC",
    "alpha3Code": "VCT",
    "callingCodes": [
      "1"
    ],
    "capital": "Kingstown",
    "altSpellings": [
      "VC"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/vct.svg"
  },
  {
    "name": "Samoa",
    "topLevelDomain": [
      ".ws"
    ],
    "alpha2Code": "WS",
    "alpha3Code": "WSM",
    "callingCodes": [
      "685"
    ],
    "capital": "Apia",
    "altSpellings": [
      "WS",
      "Independent State of Samoa",
      "Malo Saʻoloto Tutoʻatasi o Sāmoa"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/wsm.svg"
  },
  {
    "name": "San Marino",
    "topLevelDomain": [
      ".sm"
    ],
    "alpha2Code": "SM",
    "alpha3Code": "SMR",
    "callingCodes": [
      "378"
    ],
    "capital": "City of San Marino",
    "altSpellings": [
      "SM",
      "Republic of San Marino",
      "Repubblica di San Marino"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/smr.svg"
  },
  {
    "name": "Sao Tome and Principe",
    "topLevelDomain": [
      ".st"
    ],
    "alpha2Code": "ST",
    "alpha3Code": "STP",
    "callingCodes": [
      "239"
    ],
    "capital": "São Tomé",
    "altSpellings": [
      "ST",
      "Democratic Republic of São Tomé and Príncipe",
      "República Democrática de São Tomé e Príncipe"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/stp.svg"
  },
  {
    "name": "Saudi Arabia",
    "topLevelDomain": [
      ".sa"
    ],
    "alpha2Code": "SA",
    "alpha3Code": "SAU",
    "callingCodes": [
      "966"
    ],
    "capital": "Riyadh",
    "altSpellings": [
      "SA",
      "Kingdom of Saudi Arabia",
      "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/sau.svg"
  },
  {
    "name": "Senegal",
    "topLevelDomain": [
      ".sn"
    ],
    "alpha2Code": "SN",
    "alpha3Code": "SEN",
    "callingCodes": [
      "221"
    ],
    "capital": "Dakar",
    "altSpellings": [
      "SN",
      "Republic of Senegal",
      "République du Sénégal"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/sen.svg"
  },
  {
    "name": "Serbia",
    "topLevelDomain": [
      ".rs"
    ],
    "alpha2Code": "RS",
    "alpha3Code": "SRB",
    "callingCodes": [
      "381"
    ],
    "capital": "Belgrade",
    "altSpellings": [
      "RS",
      "Srbija",
      "Republic of Serbia",
      "Република Србија",
      "Republika Srbija"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/srb.svg"
  },
  {
    "name": "Seychelles",
    "topLevelDomain": [
      ".sc"
    ],
    "alpha2Code": "SC",
    "alpha3Code": "SYC",
    "callingCodes": [
      "248"
    ],
    "capital": "Victoria",
    "altSpellings": [
      "SC",
      "Republic of Seychelles",
      "Repiblik Sesel",
      "République des Seychelles"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/syc.svg"
  },
  {
    "name": "Sierra Leone",
    "topLevelDomain": [
      ".sl"
    ],
    "alpha2Code": "SL",
    "alpha3Code": "SLE",
    "callingCodes": [
      "232"
    ],
    "capital": "Freetown",
    "altSpellings": [
      "SL",
      "Republic of Sierra Leone"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/sle.svg"
  },
  {
    "name": "Singapore",
    "topLevelDomain": [
      ".sg"
    ],
    "alpha2Code": "SG",
    "alpha3Code": "SGP",
    "callingCodes": [
      "65"
    ],
    "capital": "Singapore",
    "altSpellings": [
      "SG",
      "Singapura",
      "Republik Singapura",
      "新加坡共和国"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/sgp.svg"
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "topLevelDomain": [
      ".sx"
    ],
    "alpha2Code": "SX",
    "alpha3Code": "SXM",
    "callingCodes": [
      "1"
    ],
    "capital": "Philipsburg",
    "altSpellings": [
      "SX"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/sxm.svg"
  },
  {
    "name": "Slovakia",
    "topLevelDomain": [
      ".sk"
    ],
    "alpha2Code": "SK",
    "alpha3Code": "SVK",
    "callingCodes": [
      "421"
    ],
    "capital": "Bratislava",
    "altSpellings": [
      "SK",
      "Slovak Republic",
      "Slovenská republika"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/svk.svg"
  },
  {
    "name": "Slovenia",
    "topLevelDomain": [
      ".si"
    ],
    "alpha2Code": "SI",
    "alpha3Code": "SVN",
    "callingCodes": [
      "386"
    ],
    "capital": "Ljubljana",
    "altSpellings": [
      "SI",
      "Republic of Slovenia",
      "Republika Slovenija"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/svn.svg"
  },
  {
    "name": "Solomon Islands",
    "topLevelDomain": [
      ".sb"
    ],
    "alpha2Code": "SB",
    "alpha3Code": "SLB",
    "callingCodes": [
      "677"
    ],
    "capital": "Honiara",
    "altSpellings": [
      "SB"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/slb.svg"
  },
  {
    "name": "Somalia",
    "topLevelDomain": [
      ".so"
    ],
    "alpha2Code": "SO",
    "alpha3Code": "SOM",
    "callingCodes": [
      "252"
    ],
    "capital": "Mogadishu",
    "altSpellings": [
      "SO",
      "aṣ-Ṣūmāl",
      "Federal Republic of Somalia",
      "Jamhuuriyadda Federaalka Soomaaliya",
      "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/som.svg"
  },
  {
    "name": "South Africa",
    "topLevelDomain": [
      ".za"
    ],
    "alpha2Code": "ZA",
    "alpha3Code": "ZAF",
    "callingCodes": [
      "27"
    ],
    "capital": "Pretoria",
    "altSpellings": [
      "ZA",
      "RSA",
      "Suid-Afrika",
      "Republic of South Africa"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/zaf.svg"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "topLevelDomain": [
      ".gs"
    ],
    "alpha2Code": "GS",
    "alpha3Code": "SGS",
    "callingCodes": [
      "500"
    ],
    "capital": "King Edward Point",
    "altSpellings": [
      "GS",
      "South Georgia and the South Sandwich Islands"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/sgs.svg"
  },
  {
    "name": "Korea (Republic of)",
    "topLevelDomain": [
      ".kr"
    ],
    "alpha2Code": "KR",
    "alpha3Code": "KOR",
    "callingCodes": [
      "82"
    ],
    "capital": "Seoul",
    "altSpellings": [
      "KR",
      "Republic of Korea"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/kor.svg"
  },
  {
    "name": "South Sudan",
    "topLevelDomain": [
      ".ss"
    ],
    "alpha2Code": "SS",
    "alpha3Code": "SSD",
    "callingCodes": [
      "211"
    ],
    "capital": "Juba",
    "altSpellings": [
      "SS"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/ssd.svg"
  },
  {
    "name": "Spain",
    "topLevelDomain": [
      ".es"
    ],
    "alpha2Code": "ES",
    "alpha3Code": "ESP",
    "callingCodes": [
      "34"
    ],
    "capital": "Madrid",
    "altSpellings": [
      "ES",
      "Kingdom of Spain",
      "Reino de España"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/esp.svg"
  },
  {
    "name": "Sri Lanka",
    "topLevelDomain": [
      ".lk"
    ],
    "alpha2Code": "LK",
    "alpha3Code": "LKA",
    "callingCodes": [
      "94"
    ],
    "capital": "Colombo",
    "altSpellings": [
      "LK",
      "ilaṅkai",
      "Democratic Socialist Republic of Sri Lanka"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/lka.svg"
  },
  {
    "name": "Sudan",
    "topLevelDomain": [
      ".sd"
    ],
    "alpha2Code": "SD",
    "alpha3Code": "SDN",
    "callingCodes": [
      "249"
    ],
    "capital": "Khartoum",
    "altSpellings": [
      "SD",
      "Republic of the Sudan",
      "Jumhūrīyat as-Sūdān"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/sdn.svg"
  },
  {
    "name": "Suriname",
    "topLevelDomain": [
      ".sr"
    ],
    "alpha2Code": "SR",
    "alpha3Code": "SUR",
    "callingCodes": [
      "597"
    ],
    "capital": "Paramaribo",
    "altSpellings": [
      "SR",
      "Sarnam",
      "Sranangron",
      "Republic of Suriname",
      "Republiek Suriname"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/sur.svg"
  },
  {
    "name": "Svalbard and Jan Mayen",
    "topLevelDomain": [
      ".sj"
    ],
    "alpha2Code": "SJ",
    "alpha3Code": "SJM",
    "callingCodes": [
      "47"
    ],
    "capital": "Longyearbyen",
    "altSpellings": [
      "SJ",
      "Svalbard and Jan Mayen Islands"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/sjm.svg"
  },
  {
    "name": "Swaziland",
    "topLevelDomain": [
      ".sz"
    ],
    "alpha2Code": "SZ",
    "alpha3Code": "SWZ",
    "callingCodes": [
      "268"
    ],
    "capital": "Lobamba",
    "altSpellings": [
      "SZ",
      "weSwatini",
      "Swatini",
      "Ngwane",
      "Kingdom of Swaziland",
      "Umbuso waseSwatini"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/swz.svg"
  },
  {
    "name": "Sweden",
    "topLevelDomain": [
      ".se"
    ],
    "alpha2Code": "SE",
    "alpha3Code": "SWE",
    "callingCodes": [
      "46"
    ],
    "capital": "Stockholm",
    "altSpellings": [
      "SE",
      "Kingdom of Sweden",
      "Konungariket Sverige"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/swe.svg"
  },
  {
    "name": "Switzerland",
    "topLevelDomain": [
      ".ch"
    ],
    "alpha2Code": "CH",
    "alpha3Code": "CHE",
    "callingCodes": [
      "41"
    ],
    "capital": "Bern",
    "altSpellings": [
      "CH",
      "Swiss Confederation",
      "Schweiz",
      "Suisse",
      "Svizzera",
      "Svizra"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/che.svg"
  },
  {
    "name": "Syrian Arab Republic",
    "topLevelDomain": [
      ".sy"
    ],
    "alpha2Code": "SY",
    "alpha3Code": "SYR",
    "callingCodes": [
      "963"
    ],
    "capital": "Damascus",
    "altSpellings": [
      "SY",
      "Syrian Arab Republic",
      "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/syr.svg"
  },
  {
    "name": "Taiwan",
    "topLevelDomain": [
      ".tw"
    ],
    "alpha2Code": "TW",
    "alpha3Code": "TWN",
    "callingCodes": [
      "886"
    ],
    "capital": "Taipei",
    "altSpellings": [
      "TW",
      "Táiwān",
      "Republic of China",
      "中華民國",
      "Zhōnghuá Mínguó"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/twn.svg"
  },
  {
    "name": "Tajikistan",
    "topLevelDomain": [
      ".tj"
    ],
    "alpha2Code": "TJ",
    "alpha3Code": "TJK",
    "callingCodes": [
      "992"
    ],
    "capital": "Dushanbe",
    "altSpellings": [
      "TJ",
      "Toçikiston",
      "Republic of Tajikistan",
      "Ҷумҳурии Тоҷикистон",
      "Çumhuriyi Toçikiston"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/tjk.svg"
  },
  {
    "name": "Tanzania, United Republic of",
    "topLevelDomain": [
      ".tz"
    ],
    "alpha2Code": "TZ",
    "alpha3Code": "TZA",
    "callingCodes": [
      "255"
    ],
    "capital": "Dodoma",
    "altSpellings": [
      "TZ",
      "United Republic of Tanzania",
      "Jamhuri ya Muungano wa Tanzania"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/tza.svg"
  },
  {
    "name": "Thailand",
    "topLevelDomain": [
      ".th"
    ],
    "alpha2Code": "TH",
    "alpha3Code": "THA",
    "callingCodes": [
      "66"
    ],
    "capital": "Bangkok",
    "altSpellings": [
      "TH",
      "Prathet",
      "Thai",
      "Kingdom of Thailand",
      "ราชอาณาจักรไทย",
      "Ratcha Anachak Thai"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/tha.svg"
  },
  {
    "name": "Timor-Leste",
    "topLevelDomain": [
      ".tl"
    ],
    "alpha2Code": "TL",
    "alpha3Code": "TLS",
    "callingCodes": [
      "670"
    ],
    "capital": "Dili",
    "altSpellings": [
      "TL",
      "East Timor",
      "Democratic Republic of Timor-Leste",
      "República Democrática de Timor-Leste",
      "Repúblika Demokrátika Timór-Leste"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/tls.svg"
  },
  {
    "name": "Togo",
    "topLevelDomain": [
      ".tg"
    ],
    "alpha2Code": "TG",
    "alpha3Code": "TGO",
    "callingCodes": [
      "228"
    ],
    "capital": "Lomé",
    "altSpellings": [
      "TG",
      "Togolese",
      "Togolese Republic",
      "République Togolaise"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/tgo.svg"
  },
  {
    "name": "Tokelau",
    "topLevelDomain": [
      ".tk"
    ],
    "alpha2Code": "TK",
    "alpha3Code": "TKL",
    "callingCodes": [
      "690"
    ],
    "capital": "Fakaofo",
    "altSpellings": [
      "TK"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/tkl.svg"
  },
  {
    "name": "Tonga",
    "topLevelDomain": [
      ".to"
    ],
    "alpha2Code": "TO",
    "alpha3Code": "TON",
    "callingCodes": [
      "676"
    ],
    "capital": "Nuku'alofa",
    "altSpellings": [
      "TO"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/ton.svg"
  },
  {
    "name": "Trinidad and Tobago",
    "topLevelDomain": [
      ".tt"
    ],
    "alpha2Code": "TT",
    "alpha3Code": "TTO",
    "callingCodes": [
      "1"
    ],
    "capital": "Port of Spain",
    "altSpellings": [
      "TT",
      "Republic of Trinidad and Tobago"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/tto.svg"
  },
  {
    "name": "Tunisia",
    "topLevelDomain": [
      ".tn"
    ],
    "alpha2Code": "TN",
    "alpha3Code": "TUN",
    "callingCodes": [
      "216"
    ],
    "capital": "Tunis",
    "altSpellings": [
      "TN",
      "Republic of Tunisia",
      "al-Jumhūriyyah at-Tūnisiyyah"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/tun.svg"
  },
  {
    "name": "Turkey",
    "topLevelDomain": [
      ".tr"
    ],
    "alpha2Code": "TR",
    "alpha3Code": "TUR",
    "callingCodes": [
      "90"
    ],
    "capital": "Ankara",
    "altSpellings": [
      "TR",
      "Turkiye",
      "Republic of Turkey",
      "Türkiye Cumhuriyeti"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/tur.svg"
  },
  {
    "name": "Turkmenistan",
    "topLevelDomain": [
      ".tm"
    ],
    "alpha2Code": "TM",
    "alpha3Code": "TKM",
    "callingCodes": [
      "993"
    ],
    "capital": "Ashgabat",
    "altSpellings": [
      "TM"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/tkm.svg"
  },
  {
    "name": "Turks and Caicos Islands",
    "topLevelDomain": [
      ".tc"
    ],
    "alpha2Code": "TC",
    "alpha3Code": "TCA",
    "callingCodes": [
      "1"
    ],
    "capital": "Cockburn Town",
    "altSpellings": [
      "TC"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/tca.svg"
  },
  {
    "name": "Tuvalu",
    "topLevelDomain": [
      ".tv"
    ],
    "alpha2Code": "TV",
    "alpha3Code": "TUV",
    "callingCodes": [
      "688"
    ],
    "capital": "Funafuti",
    "altSpellings": [
      "TV"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/tuv.svg"
  },
  {
    "name": "Uganda",
    "topLevelDomain": [
      ".ug"
    ],
    "alpha2Code": "UG",
    "alpha3Code": "UGA",
    "callingCodes": [
      "256"
    ],
    "capital": "Kampala",
    "altSpellings": [
      "UG",
      "Republic of Uganda",
      "Jamhuri ya Uganda"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/uga.svg"
  },
  {
    "name": "Ukraine",
    "topLevelDomain": [
      ".ua"
    ],
    "alpha2Code": "UA",
    "alpha3Code": "UKR",
    "callingCodes": [
      "380"
    ],
    "capital": "Kiev",
    "altSpellings": [
      "UA",
      "Ukrayina"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/ukr.svg"
  },
  {
    "name": "United Arab Emirates",
    "topLevelDomain": [
      ".ae"
    ],
    "alpha2Code": "AE",
    "alpha3Code": "ARE",
    "callingCodes": [
      "971"
    ],
    "capital": "Abu Dhabi",
    "altSpellings": [
      "AE",
      "UAE"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/are.svg"
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "topLevelDomain": [
      ".uk"
    ],
    "alpha2Code": "GB",
    "alpha3Code": "GBR",
    "callingCodes": [
      "44"
    ],
    "capital": "London",
    "altSpellings": [
      "GB",
      "UK",
      "Great Britain"
    ],
    "region": "Europe",
    "flag": "https://restcountries.eu/data/gbr.svg"
  },
  {
    "name": "United States of America",
    "topLevelDomain": [
      ".us"
    ],
    "alpha2Code": "US",
    "alpha3Code": "USA",
    "callingCodes": [
      "1"
    ],
    "capital": "Washington, D.C.",
    "altSpellings": [
      "US",
      "USA",
      "United States of America"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/usa.svg"
  },
  {
    "name": "Uruguay",
    "topLevelDomain": [
      ".uy"
    ],
    "alpha2Code": "UY",
    "alpha3Code": "URY",
    "callingCodes": [
      "598"
    ],
    "capital": "Montevideo",
    "altSpellings": [
      "UY",
      "Oriental Republic of Uruguay",
      "República Oriental del Uruguay"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/ury.svg"
  },
  {
    "name": "Uzbekistan",
    "topLevelDomain": [
      ".uz"
    ],
    "alpha2Code": "UZ",
    "alpha3Code": "UZB",
    "callingCodes": [
      "998"
    ],
    "capital": "Tashkent",
    "altSpellings": [
      "UZ",
      "Republic of Uzbekistan",
      "O‘zbekiston Respublikasi",
      "Ўзбекистон Республикаси"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/uzb.svg"
  },
  {
    "name": "Vanuatu",
    "topLevelDomain": [
      ".vu"
    ],
    "alpha2Code": "VU",
    "alpha3Code": "VUT",
    "callingCodes": [
      "678"
    ],
    "capital": "Port Vila",
    "altSpellings": [
      "VU",
      "Republic of Vanuatu",
      "Ripablik blong Vanuatu",
      "République de Vanuatu"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/vut.svg"
  },
  {
    "name": "Venezuela (Bolivarian Republic of)",
    "topLevelDomain": [
      ".ve"
    ],
    "alpha2Code": "VE",
    "alpha3Code": "VEN",
    "callingCodes": [
      "58"
    ],
    "capital": "Caracas",
    "altSpellings": [
      "VE",
      "Bolivarian Republic of Venezuela",
      "República Bolivariana de Venezuela"
    ],
    "region": "Americas",
    "flag": "https://restcountries.eu/data/ven.svg"
  },
  {
    "name": "Viet Nam",
    "topLevelDomain": [
      ".vn"
    ],
    "alpha2Code": "VN",
    "alpha3Code": "VNM",
    "callingCodes": [
      "84"
    ],
    "capital": "Hanoi",
    "altSpellings": [
      "VN",
      "Socialist Republic of Vietnam",
      "Cộng hòa Xã hội chủ nghĩa Việt Nam"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/vnm.svg"
  },
  {
    "name": "Wallis and Futuna",
    "topLevelDomain": [
      ".wf"
    ],
    "alpha2Code": "WF",
    "alpha3Code": "WLF",
    "callingCodes": [
      "681"
    ],
    "capital": "Mata-Utu",
    "altSpellings": [
      "WF",
      "Territory of the Wallis and Futuna Islands",
      "Territoire des îles Wallis et Futuna"
    ],
    "region": "Oceania",
    "flag": "https://restcountries.eu/data/wlf.svg"
  },
  {
    "name": "Western Sahara",
    "topLevelDomain": [
      ".eh"
    ],
    "alpha2Code": "EH",
    "alpha3Code": "ESH",
    "callingCodes": [
      "212"
    ],
    "capital": "El Aaiún",
    "altSpellings": [
      "EH",
      "Taneẓroft Tutrimt"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/esh.svg"
  },
  {
    "name": "Yemen",
    "topLevelDomain": [
      ".ye"
    ],
    "alpha2Code": "YE",
    "alpha3Code": "YEM",
    "callingCodes": [
      "967"
    ],
    "capital": "Sana'a",
    "altSpellings": [
      "YE",
      "Yemeni Republic",
      "al-Jumhūriyyah al-Yamaniyyah"
    ],
    "region": "Asia",
    "flag": "https://restcountries.eu/data/yem.svg"
  },
  {
    "name": "Zambia",
    "topLevelDomain": [
      ".zm"
    ],
    "alpha2Code": "ZM",
    "alpha3Code": "ZMB",
    "callingCodes": [
      "260"
    ],
    "capital": "Lusaka",
    "altSpellings": [
      "ZM",
      "Republic of Zambia"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/zmb.svg"
  },
  {
    "name": "Zimbabwe",
    "topLevelDomain": [
      ".zw"
    ],
    "alpha2Code": "ZW",
    "alpha3Code": "ZWE",
    "callingCodes": [
      "263"
    ],
    "capital": "Harare",
    "altSpellings": [
      "ZW",
      "Republic of Zimbabwe"
    ],
    "region": "Africa",
    "flag": "https://restcountries.eu/data/zwe.svg"
  }
]
export default App;





/* function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    setCountries(data)
  }, [])
  return (
    <div>
      <h1>Traveling Around The World</h1>
      <h4>countries available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */