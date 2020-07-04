import db from 'db'
import {FETCH_SERVICE_SUCCESS, FETCH_SERVICES_SUCCESS} from "../types";

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

