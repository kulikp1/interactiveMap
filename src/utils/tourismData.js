const tourismData = {
  Lviv: [
    { year: "2018", visitors: 2.1 },
    { year: "2019", visitors: 2.5 },
    { year: "2020", visitors: 1.4 },
    { year: "2021", visitors: 1.9 },
    { year: "2022", visitors: 2.3 },
    { year: "2023", visitors: 2.7 },
  ],

  Odesa: [
    { year: "2018", visitors: 3.0 },
    { year: "2019", visitors: 3.4 },
    { year: "2020", visitors: 2.0 },
    { year: "2021", visitors: 2.6 },
    { year: "2022", visitors: 3.1 },
    { year: "2023", visitors: 3.5 },
  ],

  Dnipro: [
    { year: "2018", visitors: 1.2 },
    { year: "2019", visitors: 1.4 },
    { year: "2020", visitors: 0.9 },
    { year: "2021", visitors: 1.1 },
    { year: "2022", visitors: 1.3 },
    { year: "2023", visitors: 1.5 },
  ],

  Kyiv: [
    { year: "2018", visitors: 4.5 },
    { year: "2019", visitors: 5.0 },
    { year: "2020", visitors: 2.8 },
    { year: "2021", visitors: 3.5 },
    { year: "2022", visitors: 4.2 },
    { year: "2023", visitors: 4.8 },
  ],

  Sumy: [
    { year: "2018", visitors: 0.5 },
    { year: "2019", visitors: 0.6 },
    { year: "2020", visitors: 0.4 },
    { year: "2021", visitors: 0.5 },
    { year: "2022", visitors: 0.6 },
    { year: "2023", visitors: 0.7 },
  ],

  Kharkiv: [
    { year: "2018", visitors: 2.8 },
    { year: "2019", visitors: 3.2 },
    { year: "2020", visitors: 1.8 },
    { year: "2021", visitors: 2.4 },
    { year: "2022", visitors: 2.9 },
    { year: "2023", visitors: 3.3 },
  ],

  Chernihiv: [
    { year: "2018", visitors: 0.9 },
    { year: "2019", visitors: 1.1 },
    { year: "2020", visitors: 0.7 },
    { year: "2021", visitors: 0.8 },
    { year: "2022", visitors: 1.0 },
    { year: "2023", visitors: 1.2 },
  ],

  Luhansk: [
    { year: "2018", visitors: 0.3 },
    { year: "2019", visitors: 0.4 },
    { year: "2020", visitors: 0.2 },
    { year: "2021", visitors: 0.3 },
    { year: "2022", visitors: 0.3 },
    { year: "2023", visitors: 0.4 },
  ],

  Donetsk: [
    { year: "2018", visitors: 0.2 },
    { year: "2019", visitors: 0.3 },
    { year: "2020", visitors: 0.1 },
    { year: "2021", visitors: 0.2 },
    { year: "2022", visitors: 0.2 },
    { year: "2023", visitors: 0.3 },
  ],

  Simferopol: [
    { year: "2018", visitors: 0.7 },
    { year: "2019", visitors: 0.8 },
    { year: "2020", visitors: 0.5 },
    { year: "2021", visitors: 0.6 },
    { year: "2022", visitors: 0.7 },
    { year: "2023", visitors: 0.8 },
  ],

  Uzhhorod: [
    { year: "2018", visitors: 0.6 },
    { year: "2019", visitors: 0.7 },
    { year: "2020", visitors: 0.5 },
    { year: "2021", visitors: 0.6 },
    { year: "2022", visitors: 0.7 },
    { year: "2023", visitors: 0.8 },
  ],

  Poltava: [
    { year: "2018", visitors: 1.0 },
    { year: "2019", visitors: 1.2 },
    { year: "2020", visitors: 0.8 },
    { year: "2021", visitors: 1.0 },
    { year: "2022", visitors: 1.1 },
    { year: "2023", visitors: 1.3 },
  ],

  Zaporizhzhia: [
    { year: "2018", visitors: 1.5 },
    { year: "2019", visitors: 1.7 },
    { year: "2020", visitors: 1.0 },
    { year: "2021", visitors: 1.3 },
    { year: "2022", visitors: 1.5 },
    { year: "2023", visitors: 1.8 },
  ],

  Kherson: [
    { year: "2018", visitors: 1.3 },
    { year: "2019", visitors: 1.5 },
    { year: "2020", visitors: 0.9 },
    { year: "2021", visitors: 1.2 },
    { year: "2022", visitors: 1.4 },
    { year: "2023", visitors: 1.6 },
  ],

  Mykolaiv: [
    { year: "2018", visitors: 1.1 },
    { year: "2019", visitors: 1.3 },
    { year: "2020", visitors: 0.8 },
    { year: "2021", visitors: 1.0 },
    { year: "2022", visitors: 1.2 },
    { year: "2023", visitors: 1.4 },
  ],

  Kropyvnytskyi: [
    { year: "2018", visitors: 0.7 },
    { year: "2019", visitors: 0.8 },
    { year: "2020", visitors: 0.5 },
    { year: "2021", visitors: 0.6 },
    { year: "2022", visitors: 0.7 },
    { year: "2023", visitors: 0.9 },
  ],

  Lutsk: [
    { year: "2018", visitors: 0.8 },
    { year: "2019", visitors: 0.9 },
    { year: "2020", visitors: 0.6 },
    { year: "2021", visitors: 0.7 },
    { year: "2022", visitors: 0.8 },
    { year: "2023", visitors: 1.0 },
  ],

   "Ivano-Frankivsk": [
    { year: "2018", visitors: 1.2 },
    { year: "2019", visitors: 1.4 },
    { year: "2020", visitors: 0.9 },
    { year: "2021", visitors: 1.1 },
    { year: "2022", visitors: 1.3 },
    { year: "2023", visitors: 1.5 },
  ],
   
  Chernivtsi: [
    { year: "2018", visitors: 1.0 },
    { year: "2019", visitors: 1.2 },
    { year: "2020", visitors: 0.8 },
    { year: "2021", visitors: 1.0 },
    { year: "2022", visitors: 1.1 },
    { year: "2023", visitors: 1.3 },
  ],

  Ternopil: [
    { year: "2018", visitors: 0.9 },
    { year: "2019", visitors: 1.1 },
    { year: "2020", visitors: 0.7 },
    { year: "2021", visitors: 0.9 },
    { year: "2022", visitors: 1.0 },
    { year: "2023", visitors: 1.2 },
  ],

  Rivne: [
    { year: "2018", visitors: 0.8 },
    { year: "2019", visitors: 0.9 },
    { year: "2020", visitors: 0.6 },
    { year: "2021", visitors: 0.8 },
    { year: "2022", visitors: 0.9 },
    { year: "2023", visitors: 1.1 },
  ],

  Khmelnytskyi: [
    { year: "2018", visitors: 1.1 },
    { year: "2019", visitors: 1.3 },
    { year: "2020", visitors: 0.9 },
    { year: "2021", visitors: 1.1 },
    { year: "2022", visitors: 1.2 },
    { year: "2023", visitors: 1.4 },
  ],

   Zhytomyr: [
    { year: "2018", visitors: 0.6 },
    { year: "2019", visitors: 0.7 },
    { year: "2020", visitors: 0.5 },
    { year: "2021", visitors: 0.6 },
    { year: "2022", visitors: 0.7 },
    { year: "2023", visitors: 0.8 },
  ],
   
  Cherkasy: [
    { year: "2018", visitors: 0.8 },
    { year: "2019", visitors: 1.0 },
    { year: "2020", visitors: 0.6 },
    { year: "2021", visitors: 0.8 },
    { year: "2022", visitors: 0.9 },
    { year: "2023", visitors: 1.0 },
  ],

  Vinnytsia: [
    { year: "2018", visitors: 1.0 },
    { year: "2019", visitors: 1.2 },
    { year: "2020", visitors: 0.8 },
    { year: "2021", visitors: 1.0 },
    { year: "2022", visitors: 1.1 },
    { year: "2023", visitors: 1.3 },
  ],
};




  
  
  
  
  // "Ivano-Frankivsk",
  // "Chernivtsi",
  // "Ternopil",
  // "Rivne",
// "Khmelnytskyi",
  
  // "Zhytomyr",
  // "Cherkasy",
  // "Vinnytsia",
  // "Kyiv",
export default tourismData;