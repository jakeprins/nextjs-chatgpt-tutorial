import { render, screen, waitFor } from '@testing-library/react'

import App from 'pages/index'

describe('App', () => {
  it('matches the snapshot', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen).toMatchSnapshot()
    })
  })
  it('shows the heading of the index page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Next Starter Kit' })).toBeInTheDocument()
  })
})
