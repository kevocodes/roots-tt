import { render, screen } from '@testing-library/react'
import { UserListView } from '@/components/userList/UserList'
import type { User } from '@/models/list.model'

describe('UserListView', () => {
  it('renders user names for valid entries', () => {
    const users: User[] = [
      { id: '1', name: 'Alice Johnson', avatar: 'https://ex/a.jpg', createdAt: '2025-01-15T00:00:00.000Z' },
      { id: '2', name: 'Bob Martin',    avatar: 'https://ex/b.jpg', createdAt: '2024-12-01T00:00:00.000Z' },
    ]

    render(<UserListView users={users} />)

    expect(screen.getByRole('heading', { level: 2, name: /alice johnson/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /bob martin/i })).toBeInTheDocument()
  })

  it('skips invalid entries (UserCard returns null)', () => {
    const mixed: User[] = [
      { id: '10', name: 'Valid User', avatar: 'https://ex/v.jpg', createdAt: '2025-08-01T00:00:00.000Z' },
      { id: '11', name: 'No Avatar',  avatar: '', createdAt: '2025-08-01T00:00:00.000Z' },
      { id: '12', name: 'No Date',    avatar: 'https://ex/nd.jpg', createdAt: ''},
    ]

    render(<UserListView users={mixed} />)

    expect(screen.getByRole('heading', { level: 2, name: /valid user/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 2, name: /no avatar/i })).toBeNull()
    expect(screen.queryByRole('heading', { level: 2, name: /no date/i })).toBeNull()
  })
})
