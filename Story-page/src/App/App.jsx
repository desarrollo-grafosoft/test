import "./App.css"
import { Menu } from '../Menu/Menu'
import { Container } from '../Container/Container'
import { Search } from '../Search/Search'
import { Icon } from '../Icons/Icons'
import { CardInspiracion } from '../CardInspiracion/CardInspiracion'
import { Item } from '../Item/Item'
import { AuthorsContainer } from '../Authors/AuthorsContainer'
import { Recent } from '../Recent/Recent'
import { LastContainer } from '../Last/LastContainer'
import { CardEnd } from '../CardEnd/CardEnd'

function App() {
  return (
    <div className='app'>
      <Menu />
      <Container>
        <Search />
        <Icon />
        <CardInspiracion/>
        <Item />
        <AuthorsContainer />
        <Recent />
        <LastContainer />
        <CardEnd />

      </Container>

    </div>
  )
}

export default App
