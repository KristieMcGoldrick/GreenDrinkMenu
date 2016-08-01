'use strict';
var app = angular.module('PizzaPlanetApp')


app.controller('MainController', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Classic Blend',
      description: 'Spinach, Kale, Strawberries, Bananas, Coconut Milk',
      price: 4.95
    },
    {
      name: 'Greens Only',
      description: 'Kale, Parsley, Broccoli, Kiwi, Pear',
      price: 3.95
    },
    {
      name: 'Tropical Twist',
      description : 'Romaine, Orange, Strawberries, Cilantro, Mango, Orange Juice, Kiwi ',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Glowing Green Smoothie',
      description: 'Cilantro, Parsley, Broccoli, Green Apple, Pear, Lemon, Coconut Milk.',
      price: 6.50
    },
    {
      name: 'Aloha Morning',
      description: 'Pineapple, coconut milk, spinach, kale, cilantro, green apple, bananas.',
      price: 6.25
    },
    {
      name: 'Detox Green',
      description: 'Kale, Parsley, Spiralina, Mangoes, Cucumber, Broccoli, blueberries',
      price: 6.75
    }
  ];

  $scope.extras = [
    {
      name: 'bee pollen',
      benefits: 'natural protein, immunity builder',
      price: 1.00
    },
    {
      name: 'hemp seeds',
      benefits: 'healthy omegas, protein',
      price: 1.00
    },
    {
      name: 'cacao powder',
      benefits: '0 sugar, protein-rich, antioxidant',
      price: 1.50
    }
  ]

});
