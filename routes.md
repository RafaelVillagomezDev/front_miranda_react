# ROUTES PROYECT MIRANDA DASHBOARD

## MODEL BOOKINGS
### GET  LIST HABITACIONES 

```axios.get(url/bookings)```
### GET HABITACIONES DISPONIBLES FILTRAMOS POR REACT
```axios.get(url/bookings) ```
### POST RESERVAR HABITACION
```axios.post(url/bookings/{booking_id}```   

### DELETE RESERVAR HABITACION
```axios.delete(url/bookings/{booking_id}```
### ACTUALIZAR RESERVAR HABITACION
```axios.update(url/bookings/{booking_id}```

## MODEL ROOMS
### GET  LIST ROOMS 
```axios.get(url/bookings/rooms)```
### POST  ROOMS 
```axios.post(url/bookings/room)```
### DELETE  ROOM 
```axios.post(url/bookings/rooms/{room_id})```
### UPDATE ROOM
```axios.update(url/bookings/{room_id})```


## MODEL USERS
### GET  LIST USERS
```axios.get(url/bookings/users)```
### GET   USER ID
```axios.get(url/bookings/users/{user_id})```
### POST  USERS
```axios.post(url/bookings/users)```
### DELETE  USER
```axios.post(url/bookings/users/{user_id})```
### UPDAATE USER
```axios.update(url/bookings/users/{user_id})```


## MODEL CONTACT
### GET  LIST CONTACTS MESSAGUES
```axios.get(url/bookings/contacts?type_user="type_user"})```
### POST  CONTACTS
```axios.post(url/bookings/contacts)```
### DELETE  CONTACT
```axios.post(url/bookings/contacts/{contact_id})```
### UPDATE CONTACT
```axios.update(url/bookings/contacts/{contact_id})```