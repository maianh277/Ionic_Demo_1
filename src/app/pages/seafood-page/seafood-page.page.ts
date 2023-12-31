import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seafood-page',
  templateUrl: './seafood-page.page.html',
  styleUrls: ['./seafood-page.page.scss'],
})
export class SeafoodPagePage implements OnInit {
  menuItems = [
    {
      id: 1,
      name: 'Grilled Prawn',
      image: '../../assets/images/grilledPrawn.png',
      price: '12.00',
      deliveryTime: '30m',
      rating: '4.5',
      description: 'Fresh grilled prawn with cilantro, and lemon.',
      category: 'seafood',
    },
    {
      id: 2,
      name: 'Beef Hamburger',
      image: '../../assets/images/beefHamburger.png',
      price: '21.00',
      deliveryTime: '20m',
      rating: '4.7',
      description: 'High quality beef with cheese.',
      category: 'fastfood',
    },
    {
      id: 3,
      name: 'Steamed Mussel',
      image: '../../assets/images/steamedMussel.png',
      price: '16.00',
      deliveryTime: '40m',
      rating: '4.7',
      description:
        'Tender mussels simmered in white wine, butter and garlic cream.',
      category: 'seafood',
    },
    {
      id: 4,
      name: 'Double Cheese Pizza',
      image: '../../assets/images/doubleCheesePizza.png',
      price: '20.00',
      deliveryTime: '40m',
      rating: '4.8',
      description: 'Pizza topped with extra Cheese that is 100% mozzerella.',
      category: 'fastfood',
    },
    {
      id: 5,
      name: 'Classic Crab Boil',
      image: '../../assets/images/classicCrabBoil.png',
      price: '10.00',
      deliveryTime: '40m',
      rating: '4.2',
      description: 'Boiled Crab served with lemon and parsley.',
      category: 'seafood',
    },
    {
      id: 6,
      name: 'Garlic Meat Pizza',
      image: '../../assets/images/garlicMeatPizza.png',
      price: '13.00',
      deliveryTime: '40m',
      rating: '3.9',
      description:
        'Crispy pizza with flavorful garlic-tomato sauce, and grilled meat.',
      category: 'fastfood',
    },
    {
      id: 7,
      name: 'Chicken Burger',
      image: '../../assets/images/chickenBurger.png',
      price: '12.00',
      deliveryTime: '20m',
      rating: '4.1',
      description:
        'Crispy fried chicken breast, topped with melted cheese and lettuce.',
      category: 'fastfood',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToDetailPage(id: number) {
    this.router.navigate(['/detail-page', id]);
  }
}
