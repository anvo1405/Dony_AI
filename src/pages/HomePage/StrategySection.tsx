import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { GradientTitle } from 'src/components'
import strategyData from './strategyData'

interface IStrategyItem {
  title: string
  shortDescription: string
  description: string
  video: string
  color: string
}

const StrategySection = () => {
  const [strategySelected, setStrategySelected] = useState<IStrategyItem>(strategyData[0])
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} px={20}>
      <GradientTitle title='Our strategies' />
      <Typography fontWeight={700} fontSize={32} textAlign={'center'}>
        Master and develop the bottom of the technology pyramid
      </Typography>
      <Typography textAlign={'center'} color='#8C8C8C'>
        Our strategy is to lead the transformation by investing in R&D to become the central bridge for seamless
        integration and value creation through big data
      </Typography>
      <Box width={'100%'} height={'200px'} sx={{ backgroundColor: 'black' }}>
        <video
          src={strategySelected.video}
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
      <Box display={'flex'} gap={5}>
        {strategyData.map((strategyItem) => (
          <Box
            onClick={() => setStrategySelected(strategyItem)}
            sx={{
              p: 4,
              border: 1,
              borderColor: strategySelected === strategyItem ? strategyItem.color : 'gray',
              cursor: 'pointer'
            }}
          >
            <Typography>{strategyItem.title}</Typography>
            <Typography>{strategyItem.shortDescription}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default StrategySection
