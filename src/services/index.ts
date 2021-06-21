import { auth } from '~/config/Firebase';

export const signIn = async (email: string, password: string) => new Promise((resolve, reject) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userInformation) => resolve(userInformation))
    .catch(() => reject());
});

export const signUp = async (name: string, email: string, password: string) => new Promise<void>((resolve, reject) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      user?.updateProfile({ displayName: name })
        .then(() => resolve())
        .catch(() => reject());
    })
    .catch(() => reject());
});

export const getSession = async () => new Promise((resolve) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return resolve({ uid: user.uid, name: user.displayName, email: user.email });
    }
    resolve(null);
  });
});
