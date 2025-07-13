import { Box, Button, Typography } from '@mui/material'
import { TrailVideo } from 'src/assets'
import insightData from './insightData'

const InsightSection = () => {
  return (
    <Box px={20}>
      <Box
        width='100%'
        height='450px'
        sx={{
          display: 'flex',
          borderRadius: 8,
          backgroundColor: 'black',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <video
          src={TrailVideo}
          loop
          muted
          autoPlay
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            pointerEvents: 'none'
          }}
        />

        <Box
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 1, m: 4 }}
        >
          <Box>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 64 }}>Insight fuels smart choices</Typography>
            <Typography sx={{ color: '#bfbfbf', fontWeight: 700 }}>
              Let our AI help you learn, invest, and grow with confidence.
            </Typography>
          </Box>
          <Button
            sx={{
              width: 'fit-content',
              color: 'white',
              backgroundImage: 'linear-gradient(185deg, #88CC39, #00B899, #007A78)',
              borderRadius: 4,
              paddingX: 4,
              paddingY: 1
            }}
          >
            Join us
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2,
            zIndex: 1,
            m: 4
          }}
        >
          {insightData.map((item) => (
            <Box sx={{ backgroundColor: 'black', border: 1, borderColor: '#495868', borderRadius: 4, p: 2 }}>
              <Typography fontWeight={700} color='#88cc39'>
                {item.title}
              </Typography>
              <Typography color='white'>{item.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default InsightSection
