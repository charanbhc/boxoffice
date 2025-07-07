import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Archives.css";

function BoxOffice() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = {
    "APTG Day 1 Since 2007": [
      "YAMADONGA 2007 --cr",
      "MAGADHEERA 2009 --cr",
      "DOOKUDU 2011 --cr",
      "OOSARAVALLI 2011 --cr",
      "BUSINESSMAN 2012 --cr",
      "RACHA 2012 --cr",
      "DAMMU 2012 --cr",
      "GABBAR SINGH 2012 --cr",
      "CAMERAMAN GANGATHO RAMBABU 2012 --cr",
      "BADSHAH 2013 --cr",
      "ATTARINTIKI DAREDI 2013 --cr",
      // "AAGADU 2014 --cr",
      "BAAHUBALI 2015 --cr",
      "SRIMANTUDU * 2015 --cr",
      "SARDAR GABBAR SINGH * 2016 21cr",
      "KAIDHI 150 2017 23cr",
      "BAAHUBALI 2 2017 43cr",
      "JAI LAVA KUSA * Gross 2017 22cr",
      "AGNATHAVASI * 2018 26.4cr",
      "ARAVINDA SAMETHA * 2018 26.6cr",
      "SAAHO * 2019 36cr",
      "SYE RAA * 2019 38cr",
      "RRR 2022 74cr",
      "SALAAR * 2023 50cr",
      "DEVARA * 2024 61cr",
      "PUSHPA 2 * 2024 69cr",
    ],
    "WW Day 1 Since 2007": [
      "YAMADONGA 2007 --cr",
      "ATHIDHI 2007 --cr",
      "JALSA 2008 --cr",
      "MAGADHEERA 2009 --cr",
      "KHALEJA 2010 --cr",
      "DOOKUDU 2011 --cr",
      "OOSARAVALLI 2011 --cr",
      "BUSINESSMAN 2012 --cr",
      "RACHA 2012 --cr",
      "DAMMU 2012 --cr",
      "GABBAR SINGH 2012 --cr",
      "CAMERAMAN GANGATHO RAMBABU 2012 --cr",
      "BADSHAH 2013 --cr",
      "ATTARINTIKI DAREDI 2013 --cr",
      "AAGADU 2014 --cr",
      "BAAHUBALI 2015 --cr",
      "SRIMANTUDU * 2015 --cr",
      "SARDAR GABBAR SINGH * 2016 --cr",
      "JANATHA GARAGE 2016 --cr",
      "KAIDHI 150 2017 --cr",
      "BAAHUBALI 2 2017 --cr",
      "AGNATHAVASI * 2018 --cr",
      "SAAHO * 2019 --cr",
      "RRR 2022 --cr",
      "SALAAR * 2023 --cr",
      "KALKI* 2024 --cr",
      "DEVARA * 2024 --cr",
      "PUSHPA 2 * 2024 --cr",
    ],
    "USA Premieres //11-03-2022": [
      "Baahubali2  $4,598,336",
      "Agnyaathavaasi  $1,514,000",
      "Baahubali  $1,395,309",
      "Khaidi No.150  $1,295,613",
      "SPYder  $1,005,630",
      "Saaho  $924,000",
      "Radhe Shyam  $891,000",
      "Bheemla Nayak  $874,000",
      "Sye Raa  $858,000",
      "Ala Vaikunthapurramuloo  $816,000",
      "Bharat Ane Nenu  $800,000",
      "Aravindha Sametha  $797,000",
      "Sarileru Neekevvaru  $764,000",
      "Rangasthalam  $707,000",
      "Sardaar  $616,000",
      "Jai Lava Kusa  $589,219",
      "Janatha Garage  $584,000",
      "Brahmotsavam  $560,000",
      "Pushpa   $543,000",
      "Srimanthudu  $536,000",
      "Aagadu  $524,000",
      "Maharshi  $511,000",
      "Katamarayudu  $500,000",
      "NTR Kathanayakudu   $483,000",
      "Geetha Govindam   $400,000",
      "Gautamiputra Satakarni  $373,000",
      "Nannaku Prematho  $355,000",
      "S/O Satya Murthy  $347,000",
      "Akhanda  $332,000",
      "Mahanati  $314,000",
      "Love Story  $313,000",
      "Attarintiki Daaredi  $309,000",
      "DJ  $309,000",
      "MCA  $304,000",
      "Vakeel Saab  $300,000"
    ],
    
    "APTG Day 1 Share": [ 
      "RRR 2022 74cr",
      "Pushpa 2 The Rule 2024 70.81CR",
      "Devara 2024 61.65CR",
      "SALAAR 2024 50.49CR",
      "Kalki 2898 AD 2024 44.86CR",
      "Baahubali2 2017 43CR",
      "Guntur Kaaram 2024 38.88CR",
      "Sye Raa Narasimha Reddy 2019 38.75Cr",
      "Saaho 2019 36.52Cr",
      "Sarkaru Vaari Paata 2022 36.01CR",
      "Adi Purush 2023 32.84Cr",
      "Sarileru Neekevvaru 2020 32.77Cr",
      "VakeelSaab 2021 32.24Cr",
      "Acharya 2022 29.50Cr",
      "Aravindha Sametha 2018 26.64Cr",
      "Bheemla Nayak 2022 26.42CR",
      "Agnyaathavaasi 2018 26.40Cr",
      "Vinaya Vidheya Rama 2019 25.99Cr",
      "Ala Vaikunthapurramuloo 2020 25.93Cr",
      "Radhe Shyam 2022 25.49Cr",
      "Veera Simha Reddy 2023 25.35CR",
      "Pushpa 2021 24.90Cr",
      "Maharshi 2019 24.68Cr",
      "BRO The Avatar 2023 23.61CR",
      "Bharat Ane Nenu 2018 23.52C",
      "Khaidi No 150 2017 23.25C",
      "Waltair Veerayya 2023 22.90CR",
      "Baahubali 2015 22.4Cr",
      "Katamarayudu 2017 22.27C",
      "Jai Lavakusa 2017 21.81Cr",
      "Sardar Gabbar Singh 2016 21.70Cr",
      "Janatha Garage 2016 20.50C"],
      
      "APTG Closing Share & Gross": [
        "RRR 2022 272.31CR(415.00CR)",
        "Pushpa2TheRule 2024 220.73CR*(319.55CR)",
        "Baahubali2 2017 204CR(330Cr)",
        "Kalki2898AD 2024 187.27CR(296.30CR)",
        "Devara Part 1 2024 162.80CR(237.55CR)",
        "Salaar 2023 150.73CR(234.05CR)",
        "AlaVaikunthapurramuloo 2020 130.17CR(203Cr)",
        "SarileruNeekevvaru 2020 117.50CR(177.10Cr)",
        "WaltairVeerayya 2023 115.10CR(186.65CR)",
        "Baahubali 2015 114CR(175.40Cr)",
        "SyeRaa 2019 106.4CR(168Cr)",
        "Rangasthalam 2018 95.27CR(160Cr)",
        "GunturKaaram 2024 90.53CR(139.80Cr)",
        "HanuMan 2024 90.10CR~(149.00CR~)",
        "SarkaruVaariPaata 2022 90.07CR(136.05Cr)",
        "AdiPurush 2023 86.25CR(138.55Cr)",
        "Pushpa 2021 85.35CR(131.50Cr)",
        "KGFChapter2(Dub) 2022 84.25CR(136.85CR)",
        "Maharshi 2019 83.48CR(131.60Cr)",
        "Saaho 2019 82.51CR(126.50Cr)",
        "VakeelSaab 2021 78.77CR(121.65Cr)",
        "Khaidino150 2017 78.5CR(112.50Cr)",
        "BheemlaNayak 2022 76.84CR(117.85Cr)",
        "AravindhaSametha 2018 74CR(112Cr)"
      ],
      

      "WW Day 1 Share & Gross": [
        "Pushpa 2 The Rule 2024 160.01CR(285.55CR)",
        "RRR 2022 135CR(235CR)",
        "Baahubali2 2017 123C(215CR)",
        "Devara Part 1 2024 98.60CR(157CR)",
        "SALAAR 2024 97.49CR(167CR)",
        "Kalki 2898 AD 2024 96.16CR(183.20CR)",
        "Saaho 2019 73.64CR(126CR)",
        "Adi Purush 2023 70.11CR(137CR)",
        "Sye Raa Narasimha Reddy 2019 53.72CR(85CR)",
        "Guntur Kaaram 2024 52.03CR(79.30CR)",
        "Baahubali 2015 46C(73C)",
        "Sarkaru Vaari Paata 2022 45.21CR(70CR)",
        "Sarileru Neekevvaru 2020 43.16CR(67CR)",
        "Radhe Shyam 2022 39.37CR(67CR)",
        "Agnyaathavaasi 2018 39.30C(60.50C)",
        "Pushpa 2021 38.49CR(63CR)",
        "Aravindha Sametha 2018 37.20C(58C)",
        "Ala Vaikunthapurramuloo 2020 36.83CR(55CR)",
        "Vakeel Saab 2021 36.46CR(52.40CR)",
        "Bheemla Nayak 2022 36.37CR(56.50CR)",
        "Khaidi No 150 2017 35.22C(50.50C)",
        "Bharat Ane Nenu 2018 35.20C(55C)",
        "Acharya 2022 35.05CR(52CR)",
        "Maharshi 2019 32.2CR(48.2CR)",
        "Vinaya Vidheya Rama 2019 31.31C(42.3C)",
        "Veera Simha Reddy 2023 31.05CR(50.10CR)",
        "Rangasthalam 2018 30.02CR(45.1CR)",
        "BRO The Avatar 2023 30.01CR(48.50CR)",
        "Jai Lava Kusa 2017 29.40CR(46.80CR)",
        "Waltair Veerayya 2023 29.30CR(49.10CR)",
        "Janatha Garage 2016 28.70CR(41.2CR)",
        "Sardar Gabbar Singh 2016 28.40CR(41CR)",
        "Katamarayudu 2017 27.80C(39.30C)"
      ],

   "WW Closing Share & Gross (Telugu Version)": [
  "RRRMovie 2022 371.41CR(600CR)",
  "Baahubali2 2017 320Cr(560CR~)",
  "Pushpa2TheRule 2024 305.63CR(512.55CR)",
  "Kalki2898AD 2024 302.52CR(530CR)",
  "Salaar 2023 217.13CR(368.50CR)",
  "Devara Part 1 2024 214.00CR(340CR)",
  "Baahubali 2015 194Cr(332CR~)",
  "AlaVaikunthapurramuloo 2020 159.2Cr(256.36Cr)",
  "SarileruNeekevvaru 2020 138.78Cr(223.05CR)",
  "WaltairVeerayya 2023 135.80Cr(231Cr~)",
  "SyeRaa 2019 128Cr~(201CR)",
  "Rangasthalam 2018 127.52Cr(216.7Cr)",
  "HanuMan 2022 127.10CR~(222CR~)",
  "Saaho 2019 112.73Cr(188.30Cr~)",
  "GunturKaaram 2024 111.81Cr(184.05Cr)",
  "SarkaruVaariPaata 2022 110.12CR(180Cr)",
  "Pushpa 2021 110.08Cr(185CR)",
  "AdiPurush 2023 109.50Cr(187.00Cr)",
  "KhaidiNo150 2017 104.60Cr(164.2Cr)",
  "Maharshi 2019 104.58Cr(175Cr)",
  "KGFChapter2 2022 103CR(175Cr)",
  "BharathAneNenu 2018 101Cr(170Cr)"
],
"WW Closing Share & Gross (Including All)": [
  "Baahubali2 2017 860CR(1810CR)",
  "Pushpa2TheRule 2024 767.29CR~(1596+CR~)",
  "RRRMovie 2022 614.06CR(1295.00CR)",
  "Kalki2898AD 2024 539.25CR(1061.50CR)",
  "Salaar 2023 337.43CR(630.15CR)",
  "Baahubali 2015 304CR(605CR)",
  "Devara Part 1 2024 256.85CR(450.05CR)",
  "Saaho 2019 218.45CR(435CR)",
  "AdiPurush 2023 197.10Cr(397Cr)",
  "Pushpa 2021 184.62Cr(360CR)",
  "AlaVaikunthapurramuloo 2020 160.37Cr(256.35Cr)",
  "HanuMan 2022 157.60CR~(296.50CR+)",
  "SyeRaa 2019 143.80Cr~(236.40Cr)",
  "SarileruNeekevvaru 2020 139.16Cr(223.05Cr)",
  "WaltairVeerayya 2023 136.55Cr(233.70Cr)",
  "Rangasthalam 2018 127.52Cr(216.70CR)",
  "GunturKaaram 2024 111.81Cr(184.05Cr)",
  "SarkaruVaariPaata 2022 110.12CR(180CR)",
  "KhaidiNo150 2017 104.60Cr(164.2Cr)",
  "Maharshi 2019 104.58Cr(175Cr)",
  "KGFChapter2 (Dub) 2022 103CR(175Cr)",
  "BharathAneNenu 2018 101Cr(170Cr)"
],
    
    "Overseas Premier Highest Grossers": [
      "Kalki 2898 AD 2024 $3.90M($33~)",
      "RRR 2022 $3.46M($28)",
      "Pushpa 2 The Rule 2024 $3.34M($30~)",
      "Devara Part 1 2024 $2.83M($30~)",
      "Salaar 2024 $2.60M($25)",
      "Baahubali2 2017 $2.45M($28)",
      "Agnyaathavaasi 2018 $1.52M($25)",
      "Guntur Kaaram 2024 $1.4M($20~)",
      "Baahubali 2015 $1.36M($25)",
      "Khaidi No 150 2017 $1.29M($25)",
      "Spyder 2017 $1.1M($25)",
      "Sarkaru Vaari Paata 2022 $952K($25)",
      "Saaho 2019 $923K($28)",
      "Bheemla Nayak 2022 $875K($25)",
      "Radhe Shyam 2022 $875K($25)",
      "Bharat Ane Nenu 2018 $850K($20)",
      "Sye Raa Narasimha Reddy 2019 $857K($27)",
      "Adi Purush 2023 $825K($22)",
      "Ala Vaikunthapurramuloo 2020 $806K($14)",
      "Aravindha Sametha 2018 $798K($20)",
      "Sarileru Neekevvaru 2020 $760K($20)",
      "Veera Simha Reddy 2023 $708K($20)",
      "Rangasthalam 2018 $700K($20)",
      "Waltair Veerayya 2023 $679K($20)",
      "Acharya 2022 $650K($20)",
      "BRO The Avatar 2023 $647K($20)",
      "Sardar Gabbar Singh 2016 $610K($25)",
      "Jai Lava Kusa 2017 $590K($18)"
    ], 
    "Re-Release Total Collections": [
      "Ghilli4K   32.50CR~",
      "Murari4K   8.90Cr",
      "GabbarSingh4K  8.01CR~",
      "Kushi  7.46CR~",
      "BusinessMan4K  5.85Cr~",
      "Devadoothan (Malayalam)  5.3CR+",
      "Spadikam (Malayalam)  4.90CR~",
      "Simhadri4K   4.60CR",
      "EeNagaranikiEmaindi  3.52CR~",
      "SuryaSonOfKrishnan   3.40Cr~",
      "Indra4K  3.38CR",
      "Orange4K   3.36Cr",
      "Jalsa  3.20Cr",
      "Manichitrathazhu (Malayalam)   3CR~",
      "Okkadu4K   2.54CR",
      "3Movie4K   2.35CR~",
      "7/GBrindavanaColony  1.90CR~",
      "OYE4K   1.78CR~",
      "Pokiri   1.73Cr",
      "Desamuduru  1.65CR",
      "TholiPrema4K   1.52CR~",
      "ChennakeshavaReddy   1.10Cr",
      "Billa  1.05Cr"
    ],
    "Re-Release Day 1 World Wide": [
      "Ghilli4K  7.92CR",
      "GabbarSingh4K   7.53CR(Premieres)",
      "Murari4K   5.41Cr",
      "BusinessMan4K   5.27Cr",
      "Kushi   4.15CR",
      "Simhadri4K   4.01CR",
      "Jalsa  3.20Cr",
      "Indra4K  3.05CR",
      "Okkadu  2.05CR",
      "EeNagaranikiEmaindi   1.78CR~",
      "Pokiri  1.73Cr",
      "Orange  1.53CR(Premieres)",
      "Desamuduru  1.50CR",
      "3Movie4K  1.48CR",
      "OYE4K   1.45CR~",
      "SuryaSonOfKrishnan   1.45Cr~",
      "Spadikam (Malayalam)  1.20CR~",
      "ChennakeshavaReddy   1.10Cr",
      "Billa   1.05Cr",
      "7/G Brindavana Colony   1.05CR~",
      "Venky4K   90L+",
      "TholiPrema4K   80L~"
    ],
    "Re-Release Day 1 APTG": [
      "GabbarSingh4K   5.95CR(Premieres)",
      "Murari4K  4.40Cr~",
      "BusinessMan4K   4.37Cr~",
      "Kushi   3.62CR",
      "Simhadri4K  2.90CR",
      "Jalsa       2.57Cr",
      "Indra4K   1.92CR",
      "Okkadu  1.90CR~",
      "EeNagaranikiEmaindi   1.69CR~",
      "Pokiri  1.52Cr",
      "3Movie4K  1.48CR",
      "Desamuduru  1.46CR",
      "Orange  1.42CR(Premieres)",
      "SuryaSonOfKrishnan  1.40Cr~",
      "OYE4K   1.20CR~",
      "7/G Brindavana Colony   90L",
      "Billa   85L",
      "Venky4K   78L+",
      "TholiPrema4K  76L~",
      "ChennakeshavaReddy  64L"
    ],
    "Re-Release Day 1 Nizam": [
      "Murari4K  2.93Cr~",
      "GabbarSingh4K   2.52CR~",
      "BusinessMan4K   2.46Cr",
      "Kushi  1.65CR",
      "Jalsa   1.26Cr",
      "Indra4K  1.08CR",
      "Simhadri4K  1.06Cr",
      "Okkadu  90L",
      "EeNagaranikiEmaindi  81L~",
      "Orange  75L~",
      "OYE4K   75L~",
      "Pokiri  69L",
      "Desamuduru  68L~",
      "3Movie4K  64L~",
      "Billa   51L",
      "SuryaSonOfKrishnan  50L~",
      "7/G Brindavana Colony   46L~",
      "TholiPrema4K   41L",
      "ChennakeshavaReddy  21L"
    ],
    "Re-Release Day 1 Ceeded": [
      "GabbarSingh4K   81L~",
      "Simhadri4K   76L",
      "Kushi4K  45L",
      "Jalsa   39L",
      "Businessman4K  35L",
      "Murari4K  32L",
      "Indra4K  30L~"
    ],
  
    "India's All Time Highest Grossers": [
      "Dangal  1958CR",
      "Baahubali2  1810CR",
      "Pushpa2TheRule  1301CR",
      "RRRMovie  1290.00CR",
      "KGFChapter2   1233CR",
      "JAWAN  1160Cr~",
      "KALKI2898AD   1061.50CR",
      "PATHAAN   1051CR",
      "ANIMAL  913Cr",
      "BhajrangiBhaijaan  870CR",
      "Stree2  870CR~",
      "SecretSuperstar  831cr",
      "PK  741CR",
      "2Point0  709Cr",
      "Gadar2  686CR+",
      "Salaar  630.15CR",
      "Sulthan  615Cr",
      "Jailer   606.30CR",
      "Baahubali  605CR",
      "LeoMovie  600.60CR",
      "Sanju   580Cr",
      "TigerZindahai   562CR",
      "Padmaavat  560CR",
      "Dhoom3   545Cr",
      "PonniyanSelvan1  487.50CR",
      "Tiger3  465CR",
      "War   460Cr",
      "Dunki  455CR",
      "TheGreatestOfAllTime  454.05CR",
      "Devara Part 1   450.05CR",
      "SAAHO  435CR",
      "Brahmastra Part1Shiva   432CR",
      "Vikram  417.10Cr",
      "BhoolBhulaiyaa3   416.60CR~",
      "Andhadhun   410Cr",
      "Kantara   401.05CR",
      "HappyNewYear  397CR",
      "AdiPurush  397CR+",
      "3Idots  396Cr",
      "ChennaiExpress   392Cr",
      "SinghamAgain  386Cr~",
      "Simmba  385Cr",
      "Kick  378CR",
      "Krrish3   376CR",
      "KabirSingh   375Cr",
      "Dilwale   371Cr",
      "Tanhaji The Unsung Warrior     366CR~",
      "Fighter   364CR",
      "BajiraoMastani  362CR",
      "Pushpa   360CR",
      "Drishyam2  344Cr",
      "URI The Surgical Strike   342",
      "TheKashmirFiles   342CR~",
      "BangBang   341CR",
      "PonniyanSelvan2   338.85CR",
      "RockyAurRaniKiPremKahani  335.00CR",
      "Amaran  328CR",
      "Thugs Of Hindostan  328CR",
      "EkThaTiger  321CR",
      "Bharat  321CR",
      "YehJawaaniHaiDeewani  319CR",
      "ToiletEkPremKatha  317CR~",
      "GoodNewwz   316CR",
      "GolmaalAgain  309CR",
      "TheKeralaStory  302CR",
      "Race3   300CR~"
    ],
    "Tollywood All Time Highest Theatre Count": [
      "Pushpa2TheRule (2024) 10,410+",
      "RRRMovie (2022) 10,200+",
      "Baahubali2 (2017) 8500-9000",
      "KALKI2898AD (2023) 8400-8500",
      "Saaho (2019) 7978",
      "DevaraPart1 (2024) 7100-7250",
      "RadheShyam (2022) 7010+",
      "AdiPurush (2023) 7000+",
      "SalaarPart1 (2023) 6200+",
      "SyeRaaNarasimhaReddy (2019) 4632",
      "Baahubali (2015) 4000",
      "PushpaPart1 (2021) 3000+",
      "LIGER (2022) 3000+",
      "Agnyaathavaasi (2018) 2800",
      "DASARA (2023) 2710~",
      "SardaarGabbarSingh (2017) 2600~",
      "Spyder (2017) 2400",
      "BharatAneNenu (2018) 2400",
      "AravindhaSametha (2018) 2300",
      "GunturKaaram (2023) 2210",
      "VakeelSaab (2021) 2174",
      "SarkaruVaariPaata (2022) 2150",
      "Acharya (2022) 2000",
      "Katamarayudu (2017) 2000",
      "Maharshi (2018) 1900+",
      "BheemlaNayak (2022) 1875",
      "Khaidino150 (2017) 1850",
      "Oosaravelli (2011) 1800~",
      "JaiLavaKusa (2017) 1800",
      "GodFather (2022) 1705+",
      "Rangasthalam (2018) 1650",
      "SarileruNeekevvaru (2020) 1640~",
      "Khiladi (2022) 1600",
      "WaltairVeerayya (2023) 1575+",
      "Akhanda (2021) 1550",
      "NaaPeruSurya (2018) 1550",
      "BROTheAvatar (2023) 1550",
      "DearComrade (2019) 1500~",
      "BholaShankar (2023) 1500~",
      "HanuMan (2024) 1500"
    ],
    

    "Bollywood Highest Day 1":[
      "Pushpa: The Rule - Part 2 2024 70.3CR",
"Jawan 2023 65.5CR",
"Pathaan 2023 55CR",
"Animal 2023 54.75CR",
"KGF Chapter 2 2022 53.95CR",
"Stree 2 2024 51.8CR",
"War 2019 51.6CR",
"Thugs Of Hindostan 2018 50.75CR",
"Singham Again 2024 43.5CR",
"Tiger 3 2023 43CR",
"Happy New Year 2014 42.62CR",
"Bharat 2019 42.3CR",
"Baahubali 2 The Conclusion 2017 41CR",
"Prem Ratan Dhan Payo 2015 40.35CR",
"Gadar 2 2023 40.1CR",
"Adipurush 2023 37.25CR",
"Sultan 2016 36.54CR",
"Bhool Bhulaiyaa 3 2024 35.5CR",
"Sanju 2018 34.75CR",
"Tiger Zinda Hai 2017 34.1CR",
"Dhoom 3 2013 33.42CR",
"Chennai Express 2013 33.12CR",
"Ek Tha Tiger 2012 32.93CR",
"Singham Returns 2014 32.1CR",
"Brahmastra Part One: Shiva 2022 32CR",
"Golmaal Again 2017 30.14CR",
"Dunki 2023 29.2CR",
"Dangal 2016 29.19CR",
"Race 3 2018 29.17CR",
"Mission Mangal 2019 29.16CR",
"Bajrangi Bhaijaan 2015 27.25CR",
"PK 2014 26.63CR",
"Kick 2014 26.4CR",
"Sooryavanshi 2021 26.29CR",
"Bang Bang! 2014 26.25CR",
"Gold 2018 25.25CR",
"Baaghi 2 2018 25.1CR",
"Saaho 2019 24.4CR",
"Krrish 3 2013 24CR",
"Dabangg 3 2019 23CR",
"Agneepath 2012 22.8CR",
"Fighter 2024 22.5CR",
"Kalki 2898 AD 2024 22.5CR",
"Bodyguard 2011 21.6CR",
"Kalank 2019 21.6CR",
"Besharam 2013 21.55CR",
"M.S. Dhoni: The Untold Story 2016 21.4CR",
"Tubelight 2017 21.15CR",
"Dabangg 2 2012 21.1CR",
"Kesari 2019 21.06CR",

    ],
    // "Hollywood Highest Openings India": [
    //   "AvengersEndgame   62.2crGross",
    //   "Avatar2   52.55CRGross",
    //   "SpiderManNoWayHome    41.5CrGross",
    //   "AvengersInfinityWar   40.5CrGross",
    //   "DoctorStrange2   36.5CrGross",
    //   "Deadpool & Wolverine   26CrGross",
    //   "ThorLoveAndThunder   18.20Cr",
    //   "Oppenheimer  14.45Cr",
    //   "FastandFurious:Hobbs & Shaw  13.15Cr",
    //   "Captain Marvel   12.75Cr",
    //   "Godzilla x Kong: The New Empire  12.60CR",
    //   "Black Panther: Wakanda Forever  12.50Cr",
    //   "Mission: Impossible  Dead Reckoning Part 1    12.27CR",
    //   "Furious 7  12.05Cr",
    //   "Batman vs Superman: Dawn of Justice  12Cr",
    //   "Fast X   11.90CR"
    // ]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   

  };

  const handleSelection = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    navigate(`/boxoffice?category=${encodeURIComponent(selected)}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramCategory = queryParams.get("category") || "";
    if (paramCategory !== selectedCategory) {
      setSelectedCategory(paramCategory);
    }
  }, [location.search, selectedCategory]);  

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="category-select" className="dropdown-label">
            Select a category:
          </label>
          <select
            id="category-select"
            className="dropdown-select"
            value={selectedCategory}
            onChange={handleSelection}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && categories[selectedCategory] && (
          <div className="records-table">
            <h2>{selectedCategory}</h2>
            <p>Box Office data is compiled from various sources.</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Movie</th>
                  <th>Year</th>
                  <th>Collection</th>
                </tr>
              </thead>
              <tbody>
                {categories[selectedCategory].map((movie, index) => {
                  const parts = movie.split(" ");
                  const title = parts.slice(0, -2).join(" ");
                  const year = parts[parts.length - 2];
                  const collection = parts[parts.length - 1];

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="multi-line-content">{title}</div>
                      </td>
                      <td>{year}</td>
                      <td>{collection}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoxOffice;
