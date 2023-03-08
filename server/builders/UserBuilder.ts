interface IUserBuilder {
  setID(id: string): this
  setName(name: string): this
  setEmail(email: string): this
  setImageURL(imageURL: string): this
}

class User {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  image: string

  constructor(user: UserBuilder) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.emailVerified = user.emailVerified
    this.image = user.image
  }
}

export default class UserBuilder implements IUserBuilder {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  image: string

  constructor() {
    this.id = ''
    this.name = ''
    this.email = ''
    this.emailVerified = null
    this.image = ''
  }

  public setID(id: string): this {
    this.id = id
    return this
  }

  public setName(name: string): this {
    this.name = name
    return this
  }

  public setEmail(email: string): this {
    this.email = email
    return this
  }

  public setImageURL(imageURL: string): this {
    this.image = imageURL
    return this
  }

  build() {
    return new User(this)
  }
}
