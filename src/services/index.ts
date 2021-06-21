import { auth } from '~/config/Firebase';

export const signIn = (email: string, password: string) => new Promise((resolve, reject) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userInformation) => resolve(userInformation))
    .catch(() => reject());
});

export const signUp = (name: string, email: string, password: string) => new Promise<void>((resolve, reject) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      user?.updateProfile({ displayName: name })
        .then(() => resolve())
        .catch(() => reject());
    })
    .catch(() => reject());
});
