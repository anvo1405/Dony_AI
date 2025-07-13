import { Box } from '@mui/material'
import HeroSection from './HeroSection'
import StrategySection from './StrategySection'
import ApplicationsSection from './ApplicationsSection'
import InsightSection from './InsightSection'

const HomePage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={8} mt={8} alignItems={'center'}>
      <HeroSection />
      <StrategySection />
      <ApplicationsSection />
      <InsightSection />
    </Box>
  )
}

export default HomePage
