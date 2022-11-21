import React from 'react'
import UserContext from './contexts/UserContext'

export default function EditProfileForm({}) {
  const {
    currentUserAvatar,
    currentUserName,
    setCurrentUserName,
    setCurrentUserAvatar,
  } = React.useContext(UserContext)
  const handleNameInput = (e) => {
    setCurrentUserName(e.target.value)
  }
  const handleAvatarUrlInput = (e) => {
    setCurrentUserAvatar(e.target.value)
  }
  return (
    <form>
      <h2>Your informations</h2>
      <label>
        Your name
        <input type="text" value={currentUserName} onChange={handleNameInput} />
      </label>
      <br />
      <label>
        Your avatar URL :
        <input
          type="url"
          value={currentUserAvatar}
          onChange={handleAvatarUrlInput}
        />
      </label>
    </form>
  )
}
