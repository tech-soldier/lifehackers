import firebase from 'firebase/app'
import 'firebase/auth'
import db from 'db'
import {FETCH_SERVICE_SUCCESS, FETCH_SERVICES_SUCCESS} from "../types";

// services
export const fetchServiceById = (serviceId) => {
    return db
        .collection('services')
        .doc(serviceId)
        .get()
        .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))
}

export const fetchServices = () => {
    return db
        .collection('services')
        .get()
        .then(snapshot => {
            const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            return services
        })
}
// Auth

export const register = async ({email, password, fullName, avatar}) => {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const { user } = res

      return true
    } catch(error) {
        return Promise.reject(error.message)
    }
}

