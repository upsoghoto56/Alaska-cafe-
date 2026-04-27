import { MenuItem, Category, Deal } from './types';

export const WHATSAPP_NUMBER = "923013109603";

export const CATEGORIES: Category[] = [
  { id: 'pizza', name: 'Pizza', icon: 'Pizza' },
  { id: 'burger', name: 'Burgers', icon: 'Beef' },
  { id: 'broast', name: 'Broast', icon: 'Flame' },
  { id: 'hotshots', name: 'Hot Shots', icon: 'Zap' },
  { id: 'shawarma', name: 'Shawarma', icon: 'Utensils' },
  { id: 'roll', name: 'Rolls', icon: 'Scroll' },
  { id: 'sandwich', name: 'Sandwiches', icon: 'Sandwich' },
  { id: 'pasta', name: 'Pasta', icon: 'Soup' },
  { id: 'fries', name: 'Fries', icon: 'Container' },
  { id: 'drinks', name: 'Drinks', icon: 'CupSoda' },
  { id: 'icecream', name: 'Ice Cream', icon: 'IceCream' },
];

export const MENU_ITEMS: MenuItem[] = [
  // PIZZA
  { id: 'p1', name: 'Alaska Special Pizza', category: 'pizza', price: { small: 550, medium: 850, large: 1299 }, featured: true, image: 'https://images.pexels.com/photos/11176613/pexels-photo-11176613.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p2', name: 'Fajita Pizza', category: 'pizza', price: { small: 499, medium: 800, large: 1200 }, image: 'https://images.pexels.com/photos/33592985/pexels-photo-33592985.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p3', name: 'Tikka Pizza', category: 'pizza', price: { small: 499, medium: 800, large: 1200 }, image: 'https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p4', name: 'Tandori Pizza', category: 'pizza', price: { small: 499, medium: 800, large: 1200 }, image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p5', name: 'Chicken Achari Pizza', category: 'pizza', price: { small: 500, medium: 800, large: 1250 }, image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p6', name: 'Mashroom Pizza', category: 'pizza', price: { small: 550, medium: 850, large: 1250 }, image: 'https://images.pexels.com/photos/29699537/pexels-photo-29699537.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p7', name: 'Hot & Spicy Pizza', category: 'pizza', price: { small: 500, medium: 800, large: 1250 }, image: 'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p8', name: 'Own Choice Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1550 }, image: 'https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p9', name: 'Malai Tikka Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1550 }, image: 'https://images.pexels.com/photos/11485225/pexels-photo-11485225.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p10', name: 'Cheeze Lover Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1400 }, image: 'https://images.pexels.com/photos/13819559/pexels-photo-13819559.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p11', name: 'Kabab Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1450 }, image: 'https://images.pexels.com/photos/18384657/pexels-photo-18384657.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p12', name: 'Bar B Q Pizza', category: 'pizza', price: { small: 500, medium: 800, large: 1300 }, image: 'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p13', name: 'Crown Crust Pizza', category: 'pizza', price: { medium: 900, large: 1550 }, image: 'https://images.pexels.com/photos/19239118/pexels-photo-19239118.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p14', name: 'Cheezy Bite Pizza', category: 'pizza', price: { small: 700, medium: 1100, large: 1650 }, image: 'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p15', name: 'Lassani Pizza', category: 'pizza', price: { medium: 1000, large: 1400 }, image: 'https://images.pexels.com/photos/20844861/pexels-photo-20844861.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p16', name: '4th Flavour Pizza', category: 'pizza', price: { medium: 1000, large: 1650 }, image: 'https://images.pexels.com/photos/35940569/pexels-photo-35940569.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p17', name: 'Alaska Special Veg Pizza', category: 'pizza', price: { small: 450, medium: 750, large: 1200 }, image: 'https://images.pexels.com/photos/29605927/pexels-photo-29605927.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p18', name: 'Veg Achari Pizza', category: 'pizza', price: { small: 500, medium: 800, large: 1250 }, image: 'https://images.pexels.com/photos/29173087/pexels-photo-29173087.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p19', name: 'Cheeze Gold Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1400 }, image: 'https://images.pexels.com/photos/16203829/pexels-photo-16203829.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p20', name: 'Supereme Pizza', category: 'pizza', price: { small: 600, medium: 900, large: 1400 }, image: 'https://images.pexels.com/photos/35625385/pexels-photo-35625385.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p21', name: 'Paneer Pizza', category: 'pizza', price: { small: 500, medium: 850, large: 1300 }, image: 'https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p22', name: 'Paneer Lazani Pizza', category: 'pizza', price: { medium: 1200, large: 1600 }, image: 'https://images.pexels.com/photos/33384416/pexels-photo-33384416.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'p23', name: 'Extra Topping Pizza', category: 'pizza', price: { small: 100, medium: 150, large: 200 }, image: 'https://images.pexels.com/photos/35940565/pexels-photo-35940565.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // BURGER
  { id: 'b1', name: 'Alaska Special Zinger Burger', category: 'burger', price: 300, featured: true, image: 'https://images.pexels.com/photos/30500743/pexels-photo-30500743.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b2', name: 'Tower Zinger Cheese Burger', category: 'burger', price: 700, image: 'https://images.pexels.com/photos/3915915/pexels-photo-3915915.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b3', name: 'Tower Zinger Burger', category: 'burger', price: 600, image: 'https://images.pexels.com/photos/29368033/pexels-photo-29368033.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b4', name: 'Cheese Zinger Burger', category: 'burger', price: 350, image: 'https://images.pexels.com/photos/3915915/pexels-photo-3915915.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b5', name: 'Chicken Burger', category: 'burger', price: 250, image: 'https://images.pexels.com/photos/34407503/pexels-photo-34407503.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b6', name: 'Cheese Chicken Burger', category: 'burger', price: 300, image: 'https://images.pexels.com/photos/8130749/pexels-photo-8130749.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b7', name: 'Special Veg Burger', category: 'burger', price: 150, image: 'https://images.pexels.com/photos/30500760/pexels-photo-30500760.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'b8', name: 'Veg Cheese Burger', category: 'burger', price: 200, image: 'https://images.pexels.com/photos/3864682/pexels-photo-3864682.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // BROAST
  { id: 'br1', name: 'Special Broast', category: 'broast', price: 550, image: 'https://images.pexels.com/photos/14686449/pexels-photo-14686449.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'br2', name: 'Full Chest Broast', category: 'broast', price: 500, image: 'https://images.pexels.com/photos/12118977/pexels-photo-12118977.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'br3', name: 'Half Broast', category: 'broast', price: 250, image: 'https://images.pexels.com/photos/33101863/pexels-photo-33101863.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // HOT SHOTS
  { id: 'hs1', name: 'Hot Shots 10 pieces', category: 'hotshots', price: 500, image: 'https://images.pexels.com/photos/12916879/pexels-photo-12916879.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'hs2', name: 'Hot Wings 10 pieces', category: 'hotshots', price: 450, image: 'https://images.pexels.com/photos/30749028/pexels-photo-30749028.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'hs3', name: 'Nuggets 10 pieces', category: 'hotshots', price: 400, image: 'https://images.pexels.com/photos/34014196/pexels-photo-34014196.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'hs4', name: 'Chatni', category: 'hotshots', price: 50, image: 'https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // SHAWARMA
  { id: 'sh1', name: 'Alaska Special Shawarma Full', category: 'shawarma', price: 200, featured: true, image: 'https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh2', name: 'Chicken Cheese Shawarma', category: 'shawarma', price: 200, image: 'https://images.pexels.com/photos/5779423/pexels-photo-5779423.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh3', name: 'Vegetable Shawarma Large', category: 'shawarma', price: 200, image: 'https://images.pexels.com/photos/9980749/pexels-photo-9980749.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh4', name: 'Chatni', category: 'shawarma', price: 50, image: 'https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh5', name: 'Special Veg Shawarma', category: 'shawarma', price: 100, image: 'https://images.pexels.com/photos/9980764/pexels-photo-9980764.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh6', name: 'Crispy Shawarma', category: 'shawarma', price: 200, image: 'https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sh7', name: 'Crispy Cheese Shawarma', category: 'shawarma', price: 250, image: 'https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // ROLL
  { id: 'r1', name: 'Alaska Special Roll', category: 'roll', price: 250, image: 'https://images.pexels.com/photos/15913640/pexels-photo-15913640.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r2', name: 'Paratha Roll', category: 'roll', price: 200, image: 'https://images.pexels.com/photos/5175629/pexels-photo-5175629.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r3', name: 'Chicken Cheese Roll', category: 'roll', price: 250, image: 'https://images.pexels.com/photos/28897047/pexels-photo-28897047.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r4', name: 'Zinger Roll', category: 'roll', price: 250, image: 'https://images.pexels.com/photos/14979832/pexels-photo-14979832.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r5', name: 'Zinger Cheese Roll', category: 'roll', price: 350, image: 'https://images.pexels.com/photos/10027451/pexels-photo-10027451.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r6', name: 'Special Pizza Roll', category: 'roll', price: 300, image: 'https://images.pexels.com/photos/36501102/pexels-photo-36501102.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r7', name: 'Special Veg Pizza Roll', category: 'roll', price: 250 },
  { id: 'r8', name: 'Veg Roll', category: 'roll', price: 150 },
  { id: 'r9', name: 'Garlic Mayo Roll', category: 'roll', price: 250 },
  { id: 'r10', name: 'Kabab Roll', category: 'roll', price: 250 },
  { id: 'r11', name: 'Kabab Cheese Roll', category: 'roll', price: 300 },
  { id: 'r12', name: 'Paneer Roll', category: 'roll', price: 300 },
  { id: 'r13', name: 'Paneer Chesse Roll', category: 'roll', price: 350 },

  // SANDWICH
  { id: 'sw1', name: 'Club Sandwich', category: 'sandwich', price: 300, featured: true, image: 'https://images.pexels.com/photos/36268518/pexels-photo-36268518.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sw2', name: 'Chicken Sandwich', category: 'sandwich', price: 200, image: 'https://images.pexels.com/photos/18743145/pexels-photo-18743145.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sw3', name: 'Chicken Cheese Sandwich', category: 'sandwich', price: 250, image: 'https://images.pexels.com/photos/31918770/pexels-photo-31918770.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sw4', name: 'Chicken Fajita Sandwich', category: 'sandwich', price: 300, image: 'https://images.pexels.com/photos/33014398/pexels-photo-33014398.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sw5', name: 'Veg Sandwich', category: 'sandwich', price: 170 },
  { id: 'sw6', name: 'Veg Cheese Sandwich', category: 'sandwich', price: 230 },

  // PASTA
  { id: 'ps1', name: 'Special Veg Pasta Full', category: 'pasta', price: 500, image: 'https://images.pexels.com/photos/32848451/pexels-photo-32848451.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ps2', name: 'Special Veg Pasta Half', category: 'pasta', price: 250, image: 'https://images.pexels.com/photos/19098023/pexels-photo-19098023.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ps3', name: 'Chicken Pasta Full', category: 'pasta', price: 600, image: 'https://images.pexels.com/photos/33515064/pexels-photo-33515064.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ps4', name: 'Chicken Pasta Half', category: 'pasta', price: 300 },
  { id: 'ps5', name: 'Chicken Cheese Pasta Full', category: 'pasta', price: 700, featured: true },
  { id: 'ps6', name: 'Chicken Cheese Pasta Half', category: 'pasta', price: 350 },
  { id: 'ps7', name: 'Veg Cheese Pasta Full', category: 'pasta', price: 570 },
  { id: 'ps8', name: 'Veg Cheese Pasta Half', category: 'pasta', price: 280 },

  // FRIES
  { id: 'f1', name: 'Alaska Loaded Fries', category: 'fries', price: 500, featured: true, image: 'https://images.pexels.com/photos/8287714/pexels-photo-8287714.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'f2', name: 'Fries', category: 'fries', price: 150, image: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'f3', name: 'Pizza Chicken Fries', category: 'fries', price: 450, image: 'https://images.pexels.com/photos/14979834/pexels-photo-14979834.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'f4', name: 'Cheese Fries', category: 'fries', price: 350, image: 'https://images.pexels.com/photos/18580149/pexels-photo-18580149.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'f5', name: 'Veg Pizza Fries', category: 'fries', price: 350, image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'f6', name: 'Mayo Fries', category: 'fries', price: 200, image: 'https://images.pexels.com/photos/29653205/pexels-photo-29653205.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // DRINKS
  { id: 'd1', name: 'Fresh Lem', category: 'drinks', price: 150, image: 'https://images.pexels.com/photos/12931439/pexels-photo-12931439.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'd2', name: 'Mint Margrita', category: 'drinks', price: 170, image: 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'd3', name: 'Regular', category: 'drinks', price: 60, image: 'https://images.pexels.com/photos/4113624/pexels-photo-4113624.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'd4', name: '350 ml', category: 'drinks', price: 90 },
  { id: 'd5', name: '500 ml', category: 'drinks', price: 110 },
  { id: 'd6', name: '1 letter', category: 'drinks', price: 170 },
  { id: 'd7', name: '1.5 letter', category: 'drinks', price: 220 },
  { id: 'd8', name: 'Alaska Special Tea', category: 'drinks', price: 100 },
  { id: 'd9', name: 'Tea', category: 'drinks', price: 80 },
  { id: 'd10', name: 'Masala Tea', category: 'drinks', price: 100 },
  { id: 'd11', name: 'Green Tea', category: 'drinks', price: 80 },
  { id: 'd12', name: 'Kashmiri Tea', category: 'drinks', price: 120 },
  { id: 'd13', name: 'Mango Juice', category: 'drinks', price: 110 },
  { id: 'd14', name: 'Orange Juice', category: 'drinks', price: 110 },
  { id: 'd15', name: 'Apple Juice', category: 'drinks', price: 110 },
  { id: 'd16', name: 'Carrot Juice', category: 'drinks', price: 110 },
  { id: 'd17', name: 'Banana Juice', category: 'drinks', price: 110 },
  { id: 'd18', name: 'Cheeko Juice', category: 'drinks', price: 110 },
  { id: 'd19', name: 'Bananana + Khajoor', category: 'drinks', price: 110 },
  { id: 'd20', name: 'Orange + Carrot', category: 'drinks', price: 110 },

  // ICE CREAM
  { id: 'ic1', name: 'White Vanilla', category: 'icecream', price: 60, image: 'https://images.pexels.com/photos/9227972/pexels-photo-9227972.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ic2', name: 'Cookies & Cream', category: 'icecream', price: 60, image: 'https://images.pexels.com/photos/17321330/pexels-photo-17321330.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ic3', name: 'Caramel Crunch', category: 'icecream', price: 60, image: 'https://images.pexels.com/photos/9227715/pexels-photo-9227715.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ic4', name: 'Pistachio', category: 'icecream', price: 60 },
  { id: 'ic5', name: 'Chocolate', category: 'icecream', price: 60 },
  { id: 'ic6', name: 'Strawbarry', category: 'icecream', price: 60 },
  { id: 'ic7', name: 'Praline', category: 'icecream', price: 60 },
  { id: 'ic8', name: 'Kings Kulfa', category: 'icecream', price: 60 },
  { id: 'ic9', name: 'Mango', category: 'icecream', price: 60 },
];

export const DEALS: Deal[] = [
  { id: 'deal1', name: 'DEAL 01', price: 2150, items: ['1 Large Pizza', '2 Shawarma', '10 Hot Wings', 'Regular Fries', '1.5L Cold Drink'], image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal2', name: 'DEAL 02', price: 2499, items: ['1 Large Pizza', '1 Zinger Burger', '2 Hot Shots', 'Regular Fries', '1.5L Cold Drink'], image: 'https://images.pexels.com/photos/11176613/pexels-photo-11176613.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal3', name: 'DEAL 03', price: 1500, items: ['1 Large Pizza', '5 Wings', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal4', name: 'DEAL 04', price: 1730, items: ['1 Large Pizza', '10 Wings', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal5', name: 'DEAL 05', price: 1699, items: ['1 Medium Pizza', '1 Paratha Roll', '2 Hot Shots', '10 Shawarma', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/20844861/pexels-photo-20844861.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal6', name: 'DEAL 06', price: 1699, items: ['1 Medium Pizza', '1 SP Zinger Burger', '1 Shawarma', '5 Hot Wings', '1 Fries', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/35940569/pexels-photo-35940569.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal7', name: 'DEAL 07', price: 999, items: ['1 Small Pizza', '1 SP Zinger Burger', '4 Hot Wings', '350 ml Cold Drink'], image: 'https://images.pexels.com/photos/14979834/pexels-photo-14979834.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal8', name: 'DEAL 08', price: 1150, items: ['1 Small Pizza', '1 SP Zinger Burger', '5 Hot Wings', '1 Fries', '350 ml Cold Drink'], image: 'https://images.pexels.com/photos/33014398/pexels-photo-33014398.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal9', name: 'DEAL 09', price: 1100, items: ['1 Medium Pizza', '5 Wings', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal10', name: 'DEAL 10', price: 1099, items: ['1 Small Pizza', '1 SP Paratha Roll', '1 SP Shawarma', '5 Wings', '350 ml Cold Drink'], image: 'https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal11', name: 'DEAL 11', price: 1330, items: ['1 Medium Pizza', '10 Wings', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal12', name: 'DEAL 12', price: 4499, items: ['2 Large Pizza', '3 Paratha Roll', '2 SP Shawarma', '10 Hot Wings', '2 Mayo Fries', '2 SP Zinger', '1.5 Letter Cold Drink'], image: 'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal13', name: 'DEAL 13', price: 1640, items: ['4 Zinger Wings', '8 Wings', '1 Letter Cold Drink'], image: 'https://images.pexels.com/photos/30749028/pexels-photo-30749028.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal14', name: 'DEAL 14', price: 710, items: ['1 Small Pizza', '4 Wings', '350 ml Cold Drink'], image: 'https://images.pexels.com/photos/29652758/pexels-photo-29652758.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal15', name: 'DEAL 15', price: 899, items: ['2 Small Pizza'], image: 'https://images.pexels.com/photos/11176613/pexels-photo-11176613.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal16', name: 'DEAL 16', price: 1499, items: ['2 Medium Pizza'], image: 'https://images.pexels.com/photos/11176613/pexels-photo-11176613.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal17', name: 'DEAL 17', price: 2299, items: ['2 Large Pizza'], image: 'https://images.pexels.com/photos/11176613/pexels-photo-11176613.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'deal18', name: 'DEAL 18', price: 2199, items: ['Small Pizza ×2', 'Broast ×2', 'Fries ×2', 'Hot Wings ×10', 'Cold Drink (1.5 Liter)'], image: 'https://images.pexels.com/photos/33101863/pexels-photo-33101863.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const getWhatsAppUrl = (itemName: string, price: string | number, variant?: string) => {
  const message = `I want to order ${itemName}${variant ? ` (${variant})` : ''} with price Rs. ${price}. Please confirm availability and delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
