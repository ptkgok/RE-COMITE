import axios from 'axios'

type SignInRequestData = {
  email: string
  senha: string
}

export async function signInRequest(data: SignInRequestData) {
  try {
    const {
      data: { user, token }
    } = await axios.post('api/authentication', data)

    return {
      token: token,
      user: user
    }
  } catch (error) {
    console.log(error)
  }
}

export async function recoverUserInformation() {
  // signInRequest()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}
