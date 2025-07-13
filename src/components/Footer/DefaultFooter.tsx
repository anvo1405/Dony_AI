import { Box, Button, Divider, Grid, IconButton, Link, TextField, Typography } from '@mui/material'

const DefaultFooter = () => {
  return (
    <Box
      component='footer'
      sx={{
        px: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        mt: 8
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Typography fontWeight={700} fontSize={48}>
          Dony AI
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>
      <Box display='flex' justifyContent='space-between' flexWrap='wrap' gap={4}>
        <Box minWidth={200}>
          <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
            About DonyAI
          </Typography>
          <Typography variant='body2' component={Link} href='#' display='block' color='text.secondary'>
            Company Overview
          </Typography>
          <Typography variant='body2' component={Link} href='#' display='block' color='text.secondary'>
            Careers
          </Typography>
        </Box>

        {/* Connect */}
        <Box minWidth={250}>
          <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
            Connect
          </Typography>

          {/* <Box display="flex" gap={1} mb={1}>
            <IconButton size="small"><Facebook fontSize="small" /></IconButton>
            <IconButton size="small"><LinkedIn fontSize="small" /></IconButton>
          </Box> */}

          <Box display='flex' alignItems='center' gap={1} mb={0.5}>
            {/* <Phone fontSize="small" /> */}
            <Typography variant='body2'>028 *** ****</Typography>
          </Box>

          <Box display='flex' alignItems='center' gap={1} mb={0.5}>
            {/* <Email fontSize="small" /> */}
            <Typography variant='body2'>career@donyai.vn</Typography>
          </Box>

          <Box display='flex' alignItems='center' gap={1}>
            {/* <LocationOn fontSize="small" /> */}
            <Typography variant='body2'>Ho Chi Minh</Typography>
          </Box>
        </Box>

        {/* Contact Us Form */}
        <Box flex={1} minWidth={300}>
          <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
            Contact Us
          </Typography>
          <Typography variant='body2' fontWeight={700} gutterBottom>
            Email
          </Typography>
          <TextField fullWidth size='small' placeholder='ex: youremail@gmail.com' variant='outlined' sx={{ mb: 2 }} />
          <Typography variant='body2' fontWeight={700} gutterBottom>
            Feedback
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder='We’d love to hear your thoughts — share your feedback with us!'
            variant='outlined'
          />
          <Box display='flex' justifyContent='flex-end' mt={2}>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#FF6A00',
                color: '#FF6A00',
                borderRadius: 2,
                textTransform: 'none',
                px: 3
              }}
            >
              Send &gt;
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography variant='body2' color='text.secondary' align='left'>
        ©2025 DONYAI · All rights reserved.
      </Typography>
    </Box>
  )
}

export default DefaultFooter
