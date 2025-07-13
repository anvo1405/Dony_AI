import { Box, Typography } from '@mui/material'
import { HeroSectionVideo } from 'src/assets'
import { GradientTitle } from 'src/components'

const HeroSection = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2} px={20} alignItems={'center'}>
      <GradientTitle title='Shaping the future with technology' />
      <Typography fontWeight={700} fontSize={64} textAlign={'center'}>
        DONYAI – Pioneer in research & application of artificial intelligence
      </Typography>
      <Typography textAlign={'center'} color='#8C8C8C'>
        We build core technology platforms, leading in applying AI to solve everyday problems in data operations,
        education and finance.
      </Typography>
      <Box width='100%' height='500px' sx={{ borderRadius: 8, overflow: 'hidden', mt: 8 }}>
        <video
          src={HeroSectionVideo}
          loop
          muted
          autoPlay
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            pointerEvents: 'none'
          }}
        />
      </Box>
    </Box>
  )
}

export default HeroSection
