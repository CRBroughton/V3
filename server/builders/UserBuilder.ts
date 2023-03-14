interface User {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  image: string
}

export const UserBuilder = () => {
  const user: User = {
    id: '',
    name: '',
    email: '',
    emailVerified: null,
    image: '',
  }

  const setUserID = (id: string) => {
    user.id = id
  }

  const setUserName = (name: string) => {
    user.name = name
  }

  const setUserEmail = (email: string) => {
    user.email = email
  }

  const setUserImageURL = (imageURL: string) => {
    user.image = imageURL
  }

  return {
    user,
    setUserID,
    setUserName,
    setUserEmail,
    setUserImageURL,
  }
}

export default UserBuilder
