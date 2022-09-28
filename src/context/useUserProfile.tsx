import React from 'react'
import { CredentialResponse, googleLogout } from '@react-oauth/google'
import { toast } from 'react-hot-toast'
import jwtDecode from 'jwt-decode'

import { User } from '../types'

const UserProfile = React.createContext<IUserProfile>({
  isLogin: false,
  handleGoogleLogin: () => undefined,
  handleGoogleLogout: () => undefined
})

export const UserProfileProvider = ({ children }: IProps) => {
  const [isLogin, setIsLogin] = React.useState(false)
  const [user, setUser] = React.useState<User>()

  const handleGoogleLogin = async (cred: CredentialResponse) => {
    const loadingId = toast.loading('Signing In...')

    try {
      const { credential } = cred

      const decoded = jwtDecode(`${credential}`)
      const newUser: User = User.parse(decoded)
      setUser(newUser)

      setIsLogin(true)

      toast.dismiss(loadingId)
      toast.success('Logged in successfully.')
    } catch (e) {
      console.error(e)

      toast.dismiss(loadingId)
      toast.error('Error while logging in')
    }
  }

  const handleGoogleLogout = async () => {
    const loadingId = toast.loading('Logging out...')

    googleLogout()
    setIsLogin(false)

    toast.dismiss(loadingId)
    toast.success('Logging out successfully')
  }
  return (
    <UserProfile.Provider
      value={{
        isLogin,
        user,
        handleGoogleLogin,
        handleGoogleLogout
      }}
    >
      {children}
    </UserProfile.Provider>
  )
}

const useUserProfile = () => React.useContext(UserProfile)

export default useUserProfile

interface IUserProfile {
  isLogin: boolean
  user?: User
  handleGoogleLogin: (cred: CredentialResponse) => void
  handleGoogleLogout: () => void
}

interface IProps {
  children: React.ReactNode
}