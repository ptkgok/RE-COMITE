export type User = {
  id: string
  name: string;
  email: string;
  avatar_url: string;
  orgao: string
}

export type SignInData = {
  email: string;
  senha: string;
}

export type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}