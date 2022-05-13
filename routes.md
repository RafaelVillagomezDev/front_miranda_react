# ROUTES PROYECT MIRANDA DASHBOARD

## MODEL BOOKINGS
### GET  LIST HABITACIONES 

```axios.get(url/home/bookings)```
### GET HABITACIONES DISPONIBLES FILTRAMOS POR REACT
```axios.get(url/home/bookings) ```
### POST RESERVAR HABITACION
```axios.post(url/home/bookings/{booking_id}```   

### DELETE RESERVAR HABITACION
```axios.delete(url/home/bookings/{booking_id}```
### ACTUALIZAR RESERVAR HABITACION
```axios.update(url/home/bookings/{booking_id}```

## MODEL ROOMS
### GET  LIST ROOMS 
```axios.get(url/home/rooms)```
### POST  ROOMS 
```axios.post(url/home/rooms)```
### DELETE  ROOM 
```axios.post(url/home/rooms/{room_id})```
### UPDATE ROOM
```axios.update(url/bookings/{room_id})```


## MODEL USERS
### GET  LIST USERS
```axios.get(url/home/users)```
### GET   USER ID
```axios.get(url/home/users/{user_id})```
### POST  USERS
```axios.post(url/home/users)```
### DELETE  USER
```axios.post(url/home/users/{user_id})```
### UPDAATE USER
```axios.update(url/home/users/{user_id})```


## MODEL CONTACT
### GET  LIST CONTACTS MESSAGUES
```axios.get(url/home/contacts?type_user="type_user"})```
### POST  CONTACTS
```axios.post(url/home/contacts)```
### DELETE  CONTACT
```axios.post(url/home/contacts/{contact_id})```
### UPDATE CONTACT
```axios.update(url/home/contacts/{contact_id})```