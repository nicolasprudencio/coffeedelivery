import tradicional from '~/assets/Coffes/Coffee.svg'
import americano from '~/assets/Coffes/Image.svg'
import mocaccino from '~/assets/Coffes/Coffee-2.svg'
import arabe from '~/assets/Coffes/Coffee-3.svg'
import chocolateQuente from '~/assets/Coffes/Coffee-4.svg'
import latte from '~/assets/Coffes/Image-1.svg'
import leite from '~/assets/Coffes/Coffee-1.svg'
import cubano from '~/assets/Coffes/Coffee-6.svg'
import havaiano from '~/assets/Coffes/Coffee-7.svg'
import irlandes from '~/assets/Coffes/Coffee-5.svg'
import cremoso from '~/assets/Coffes/Image-2.svg'
import capuccino from '~/assets/Coffes/Image-3.svg'
import expressoGelado from '~/assets/Coffes/Image-4.svg'
import macchiato from '~/assets/Coffes/Image-5.svg'

export const CoffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    types: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: tradicional,
    value: 6.99,
    quantity: 0
  },
  {
    id: 2,
    name: 'Expresso Americano',
    types: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: americano,
    value: 6.99,
    quantity: 0
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    types: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    img: cremoso,
    value: 7.99,
    quantity: 0
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    types: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: expressoGelado,
    value: 7.99,
    quantity: 0
  },
  {
    id: 5,
    name: 'Café com Leite',
    types: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: leite,
    value: 7.99,
    quantity: 0
  },
  {
    id: 6,
    name: 'Latte',
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: latte,
    value: 8.99,
    quantity: 0
  },
  {
    id: 7,
    name: 'Capuccino',
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: capuccino,
    value: 9.99,
    quantity: 0
  },
  {
    id: 8,
    name: 'Macchiato',
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
    value: 9.99,
    quantity: 0
  },
  {
    id: 9,
    name: 'Mocaccino',
    types: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: mocaccino,
    value: 11.99,
    quantity: 0
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    types: ['TRADICIONAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: chocolateQuente,
    value: 10.99,
    quantity: 0
  },
  {
    id: 11,
    name: 'Cubano',
    types: ['TRADICIONAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
    value: 15.99,
    quantity: 0
  },
  {
    id: 12,
    name: 'Havaiano',
    types: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: havaiano,
    value: 11.99,
    quantity: 0
  },
  {
    id: 13,
    name: 'Árabe',
    types: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: arabe,
    value: 13.99,
    quantity: 0
  },
  {
    id: 14,
    name: 'Irlandês',
    types: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
    value: 16.99,
    quantity: 0
  }
]
