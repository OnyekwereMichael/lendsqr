import {auth} from '../firebase/Firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const result= await signInWithPopup(auth, provider)
  return result

}

export const signOutUser = async () => {
  return auth.signOut()
}