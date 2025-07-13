import { Box } from '@mui/material'
import HeroSection from './HeroSection'
import StrategySection from './StrategySection'

const HomePage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <HeroSection />
      <StrategySection />
    </Box>
  )
}

export default HomePage
