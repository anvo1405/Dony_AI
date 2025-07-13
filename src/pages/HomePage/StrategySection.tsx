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
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} px={20}>
      <GradientTitle title='Our strategies' />
      <Typography fontWeight={800} fontSize={32} textAlign={'center'}>
        Master and develop the bottom
        <br />
        of the technology pyramid
      </Typography>
      <Typography textAlign={'center'} color='#8C8C8C'>
        Our strategy is to lead the transformation by investing in R&D
        <br />
        to become the central bridge for seamless integration and value creation through big data
      </Typography>
      <Box
        width='100%'
        height='500px'
        sx={{
          borderRadius: 8,
          backgroundColor: 'black',
          overflow: 'hidden',
          position: 'relative',
          mt: 8
        }}
      >
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            zIndex: 1
          }}
        >
          <Box
            sx={{
              width: 'fit-content',
              backgroundColor: 'white',
              color: strategySelected.color,
              paddingX: 4,
              paddingY: 2,
              borderRadius: 10,
              fontWeight: 700
            }}
          >
            {strategySelected.title}
          </Box>
          <Typography sx={{ maxWidth: '100%', mt: 4, textAlign: 'center' }}>{strategySelected.description}</Typography>
        </Box>
      </Box>
      <Box display={'flex'} gap={5}>
        {strategyData.map((strategyItem) => (
          <Box
            onClick={() => setStrategySelected(strategyItem)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              flex: 1,
              p: 2,
              border: 1,
              borderRadius: 4,
              borderColor: strategySelected === strategyItem ? strategyItem.color : 'gray',
              cursor: 'pointer',
              boxShadow: strategySelected === strategyItem ? `0 0 12px -2px ${strategyItem.color}` : 'none',
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <Typography
              sx={{
                color: strategySelected === strategyItem ? strategyItem.color : '#595959'
              }}
            >
              {strategyItem.title}
            </Typography>
            <Typography
              sx={{
                color: strategySelected === strategyItem ? '#595959' : '#8C8C8C'
              }}
            >
              {strategyItem.shortDescription}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default StrategySection
