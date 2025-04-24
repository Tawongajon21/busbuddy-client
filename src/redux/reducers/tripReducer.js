import {CANCEL_TRIP_SUCCESS,CANCEL_TRIP_REQUEST,CANCEL_TRIP_FAIL,GET_USER_TRIP_SUCCESS,GET_USER_TRIP_REQUEST,GET_USER_TRIP_FAIL,ADD_PASSENGER_SUCCESS,ADD_PASSENGER_REQUEST,ADD_PASSENGER_FAIL,GET_TRIPS_FAIL,GET_TRIPS_REQUEST,GET_TRIPS_SUCCESS,GET_TRIP_FAIL,GET_TRIP_REQUEST,GET_TRIP_SUCCESS} from "../constants/trips"

export function getTripsReducer(state = {loading:true}, action) {
    switch (action.type) {
      case GET_TRIPS_REQUEST:
        return { loading: true };
      case GET_TRIPS_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_TRIPS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function getTripReducer(state = {}, action) {
    switch (action.type) {
      case GET_TRIP_REQUEST:
        return { loading: true };
      case GET_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function addPassengerReducer(state = {}, action) {
    switch (action.type) {
      case ADD_PASSENGER_REQUEST:
        return { loading: true };
      case ADD_PASSENGER_SUCCESS:
        return { loading: false, data: action.payload };
      case ADD_PASSENGER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function getPassengerTripsReducer(state = {}, action) {
    switch (action.type) {
      case GET_USER_TRIP_REQUEST:
        return { loading: true };
      case GET_USER_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_USER_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function cancelPassengerTripReducer(state = {}, action) {
    switch (action.type) {
      case CANCEL_TRIP_REQUEST:
        return { loading: true };
      case CANCEL_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case CANCEL_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }