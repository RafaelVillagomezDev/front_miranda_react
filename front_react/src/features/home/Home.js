import CardContactItem from '../../components/cardContact/CardContactItem'
import CardItems from '../../components/cardItems/CardItems'
import { Container } from '../../components/cardItems/style_cardItem'
import Navbar from '../../components/navbar/Navbar'

export function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <CardItems />
      </Container>
      <CardContactItem />
    </>
  )
}
