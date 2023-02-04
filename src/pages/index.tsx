import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  color: 'white',
  borderRadius: 4,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Button</span>
    </Button>
  )
}
