import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the layout and the title', () => {
    render(<Home />)

    // <main> present
    expect(screen.getByRole('main')).toBeInTheDocument()

    // h1 with "Roots Home"
    expect(
      screen.getByRole('heading', { name: /roots\s*home/i })
    ).toBeInTheDocument()

    // Description visible
    expect(
      screen.getByText(/task management system for technical assessment/i)
    ).toBeInTheDocument()
  })

  it('shows the two navigation buttons linking to /tasks and /list', () => {
    render(<Home />)

    // Links accessible by their text
    const tasksLink = screen.getByRole('link', { name: /view tasks/i })
    const listsLink = screen.getByRole('link', { name: /view lists/i })

    expect(tasksLink).toBeInTheDocument()
    expect(listsLink).toBeInTheDocument()

    // Correct hrefs
    expect(tasksLink).toHaveAttribute('href', '/tasks')
    expect(listsLink).toHaveAttribute('href', '/list')

    // Ensure each link wraps a <button> with the same label
    expect(within(tasksLink).getByRole('button', { name: /view tasks/i }))
      .toBeInTheDocument()
    expect(within(listsLink).getByRole('button', { name: /view lists/i }))
      .toBeInTheDocument()

    // Exactly two primary navigation actions
    expect(
      screen.getAllByRole('link', { name: /view (tasks|lists)/i })
    ).toHaveLength(2)
  })
})