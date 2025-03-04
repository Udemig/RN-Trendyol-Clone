interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  pending: boolean;
  error: any;
  isLogin: boolean;
  token: string | null;
}
export type {AuthState};
