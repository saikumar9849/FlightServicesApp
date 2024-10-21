export class Reservation {
    constructor(
        public passengerFirstName: String,
        public passengerMiddleName: String,
        public passengerLastName: String,
        public passengerEmail: String,
        public passengerPhone: String,
        public cardNumber: String,
        public expirationDate: String,
        public securityCode: String,
        public flightId: String
    ){}
}