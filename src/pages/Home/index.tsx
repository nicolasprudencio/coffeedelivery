import {
  HomeContainer,
  TitleWrapper,
  ServicesWrapper,
  BoxWrapper,
  Display
} from './styles'
import marketingImg from '../../assets/Imagem.svg'
import { Package, Coffee, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'
import { ShoppingContext } from '../../contexts/ShoppingCartContext'
import { useContext } from 'react'

export function Home() {
  const { CoffeeList } = useContext(ShoppingContext)

  return (
    <>
      <HomeContainer>
        <BoxWrapper>
          <TitleWrapper>
            <h1 className="title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ServicesWrapper>
              <section>
                <div className="left-column">
                  <div className="cart icon">
                    <ShoppingCart color="#FAFAFA" weight="fill" size={16} />
                  </div>
                  <p>Compra simples e segura</p>
                </div>
                <div className="left-column">
                  <div className="timer icon">
                    <Timer color="#FAFAFA" weight="fill" size={16} />
                  </div>
                  <p>Entrega rápida e rastreada</p>
                </div>
              </section>
              <section>
                <div className="right-column">
                  <div className="package icon">
                    <Package color="#FAFAFA" weight="fill" size={16} />
                  </div>
                  <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="right-column">
                  <div className="coffee icon">
                    <Coffee color="#FAFAFA" weight="fill" size={16} />
                  </div>
                  <p>O café chega fresquinho até você</p>
                </div>
              </section>
            </ServicesWrapper>
          </TitleWrapper>
          <img className="img" src={marketingImg} alt="" />
        </BoxWrapper>
      </HomeContainer>
      <Display>
        {CoffeeList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              img={coffee.img}
              description={coffee.description}
              types={coffee.types}
              value={coffee.value}
              quantity={coffee.quantity}
            />
          )
        })}
      </Display>
    </>
  )
}
