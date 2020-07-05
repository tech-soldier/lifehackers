import * as api from "../api";
import {
    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICES_SUCCESS,
    FETCH_USER_SERVICES_SUCCESS,
    REQUEST_SERVICE} from "types";


export const fetchServices = () => dispatch =>
    api
        .fetchServices()
        .then(services => dispatch(
            {
                type: FETCH_SERVICES_SUCCESS,
                services
            }
            )
        )

export const fetchUserServices = (userId) => dispatch =>
    api
        .fetchUserServices(userId)
        .then(services => dispatch({type: FETCH_USER_SERVICES_SUCCESS, services}))


export const fetchServiceById = serviceId => (dispatch, getState) => {
    const lastService = getState().selectedService.item
    if (lastService.id && lastService.id === serviceId) { return Promise.resolve() }

    dispatch({type: REQUEST_SERVICE})
    return api
        .fetchServiceById(serviceId)
        .then(async service => {
                service.user = await api.getUserProfile(service.user)
                dispatch({type: FETCH_SERVICE_SUCCESS, service})
            }
        )
}

export const createService = (newService, userId) => {
    newService.price = parseInt(newService.price, 10)
    newService.user = userId

    return api
        .createService(newService)
}