import Button from '@mui/material/Button'
import { styled } from '@mui/system'

const styles = {
   homepage: {
      maxWidth: 1200,
      minHeight: '100vh',
      margin: 'auto',
      background: '#eee',
      '&:hover': {
         background: '#000',
      },
   },
   button: styled(Button)`
      width: 100;
      height: 50;
   `,
}

export default styles
