import React, { useEffect, useState } from 'react'
import "./styles/UFUser.css";

type User = {
  id: string
  name?: string
  email?: string
  [key: string]: any
}

const UFUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.userflow.com/users?limit=10', {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_USERFLOW_API_KEY}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setUsers(data.data || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return (
    <div className="uf-users-page">
      <div className="uf-users-header">
        <h1 className="uf-users-title">Userflow Users</h1>
        <p className="uf-users-description">Loading users from Userflow API...</p>
      </div>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <span className="loading-text">Loading users...</span>
      </div>
    </div>
  )
  
  if (error) return (
    <div className="uf-users-page">
      <div className="uf-users-header">
        <h1 className="uf-users-title">Userflow Users</h1>
        <p className="uf-users-description">Viewing users from Userflow API</p>
      </div>
      <div className="error-container">
        <p className="error-title">Error</p>
        <p className="error-message">{error}</p>
      </div>
    </div>
  )

  return (
    <div className="uf-users-page">
      <div className="uf-users-header">
        <h1 className="uf-users-title">Userflow Users</h1>
        <p className="uf-users-description">Viewing users from Userflow API</p>
      </div>
      
      <div className="uf-users-content">
        {users.length > 0 ? (
          <div className="users-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <h3 className="user-name">{user.name || "No name"}</h3>
                  <p className="user-email">{user.email || "No email"}</p>
                  <p className="user-id">ID: {user.id}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">
            <p>No users found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UFUser
