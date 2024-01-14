import { SimpleGrid, GridItem, ChakraProvider, Box, } from '@chakra-ui/react'
import Section from './Components/Dashboard/ChartSection/Section'
import Sidebar from './Components/Dashboard/Sidebar'
import Profile from './Components/Dashboard/Profile'
import './App.css'
import Retirement from './Components/Dashboard/Grid3/Retirement'

const App = () => {
return (
<>
  <ChakraProvider>
        <Sidebar />
      <Box ml={['0', null, '65px']} pl={['0', null, '10px']}>
        <SimpleGrid columns={25} className='dashboard'>
            <GridItem colSpan={[1, null, 1]} position={'fixed'} left={0} zIndex={2}>
                <Sidebar />
            </GridItem>
            <GridItem colSpan={[24, null, 7]} >
                <Profile />
            </GridItem>
            <GridItem colSpan={[24, null, 12]}>
                <Section />
            </GridItem>
            <GridItem colSpan={[24, null, 6]}>
              <Retirement />
            </GridItem>
        </SimpleGrid>
      </Box>
  </ChakraProvider>
</>
)
}

export default App