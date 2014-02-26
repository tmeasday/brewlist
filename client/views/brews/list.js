Template.brewsList.helpers({
  brews: function() {
    return [
      {
        code: 'SPA',
        color: 'green',
        name: 'Special Pale Ale',
        brewedAt: new Date('28 November 2013'),
        type: 'Ale',
        abv: 0.052,
        tasting: "Golden color with a two finger head with short retention. Light aroma of biscuit malt and some citric fruitiness.\nSweet malty flavor with notes of honey, biscuit, pears with some citrusy. Mildly dry aftertaste.\n\nReally a not bold brew, rather smooth, but still pleasant and well executed. I may need to try a fresher version, this one is due in 4 months."
      },
      {
        code: 'APA',
        color: 'red',
        name: 'American Pale Ale',
        brewedAt: new Date('14 January 2014'),
        type: 'Ale',
        abv: 0.049,
        tasting: "Golden honey in colour, APA beer has a complex aroma - a smoky, peaty blend of sweet green apples and vanilla - and a beautifully balanced flavour which is crisp, smooth and incredibly refreshing.\n\nVarieties of are Hop are selected to create the character and provide a clean and delicious hop aroma."
      },
      {
        code: 'YA',
        color: 'blue',
        name: 'Yankee Ale',
        brewedAt: new Date('8 June 2013'),
        type: 'Ale',
        abv: 0.040,
        tasting: "This beer is the quintessential Australian lager and with each mouthful you imbibe has a great mouthfeel! At 4% alcohol and with the main point of difference that this is a truly Certified Organic beer, this refreshing lager tastes like real beer should!\n\nThis beer has created this uniquely appealing beer to please even the most demanding connoisseur, suiting both the special occasion requiring something different and the relaxed drink at home."
      },
      {
        code: 'ABC',
        color: 'yellow',
        name: 'Apple Blackcurrant Cider',
        brewedAt: new Date('31 March 2013'),
        type: 'Cider',
        abv: 0.039,
        tasting: "A refreshing apple cider shaken up with black current and rare desert limes from the Aussie Outback.\n\nThis thirst quenching, ‘hot weather’ drink also features a punch of tropical fruit bursting through the back of the palate. Drink it straight up or over ice in a long glass."
      },   
    ]
  }
});
