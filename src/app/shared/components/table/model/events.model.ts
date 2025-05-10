export interface EventsModel {
    message:    Message;
    status:     number;
    data:       Datum[];
    pagination: Pagination;
    code:       string;
    success:    boolean;
}

export interface Datum {
    id:              number;
    name:            Description;
    subtitle:        Description;
    description:     Description;
    image:           string;
    startDate:       Date;
    endDate:         Date;
    lat:             number;
    lng:             number;
    location:        Description;
    review:          Review[];
    tickets:         Ticket[];
    qrCodes:         any[];
    eventCategories: EventCategory[];
    organizer:       Organizer;
}

export interface Description {
    ar: string;
    en: string;
}

export interface EventCategory {
    id:   number;
    name: Description;
}

export interface Organizer {
    id:          number;
    name:        Description;
    phone:       string;
    subtitle:    Description;
    description: Description;
    location:    Description;
    rating:      number;
}

export interface Review {
    id:        number;
    rating:    number;
    comment:   string;
    createdAt: Date;
    user:      User;
}

export interface User {
    id:         number;
    fullName:   String;
    email:      String;
    phone:      string;
    profilePic: String;
    points:     number;
}


export interface Ticket {
    id:          number;
    name:        Description;
    description: Description;
    price:       number;
    quantity:    number;
}

export interface Message {
    english: string;
    arabic:  string;
}

export interface Pagination {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
