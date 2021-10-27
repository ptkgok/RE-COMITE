import axios from 'axios'

type SignInRequestData = {
  email: string
  senha: string
}

export async function signInRequest(data: SignInRequestData) {
  try {
    const {
      data: { usuario, token }
    } = await axios.post('api/authentication', data)

    return {
      token,
      usuario
    }
  } catch (error) {
    console.log(error)
  }
}

export async function signInAdmRequest(data: SignInRequestData) {
  try {
    const { data: { usuario, token } } = await axios.post('api/authentication-adm', data)

    return { token, usuario }
  } catch (error) {
    console.log(error)
  }
}

// export async function recoverUserInformation() {
//   // signInRequest()

//   return {
//     user: {
//       name: 'Diego Fernandes',
//       email: 'diego@rocketseat.com.br',
//       avatar_url: 'https://github.com/diego3g.png'
//     }
//   }
// }
