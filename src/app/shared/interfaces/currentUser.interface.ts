export interface ICurrentUser {
  id: string;
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}
