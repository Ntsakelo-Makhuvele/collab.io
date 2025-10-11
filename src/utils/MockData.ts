export interface EventsData{
    event_name: string,
        category: string,
        duration: string,
        ticket_price: string,
        location:string,
        rating: Number,
        attendance: string,
        crowd:string,
        date:string,
        time: string,
}

export const MockEvents:EventsData[] = [
    {
        event_name: 'Future Of AI',
        category: 'Technology',
        duration: '4',
        ticket_price: '399',
        location:'Durban',
        rating: 5,
        attendance: 'Onsite',
        crowd:'40-50',
        date:'20 October 2025',
        time: '12:00 PM - 16:00 PM'
    },
    {
        event_name: 'Building Scalable Solutions',
        category: 'Technology',
        duration: '4',
        ticket_price: '399',
        location:'Cape Town',
        rating: 5,
        attendance:'Onsite',
        crowd:'100+',
        date:'02 November 2025',
        time: '13:00 PM - 17:00 PM'

    },
    {
        event_name: 'TalisTech Grand Opening',
        category: 'Celebration',
        duration: '6',
        ticket_price: '599',
        location:'Johannesburg',
        rating: 5,
        attendance: 'Onsite',
        crowd:'50-60',
        date:'28 October 2025',
        time: '12:00 PM - 18:00 PM'
    },
    {
        event_name: 'Kids Fun Concert',
        category: 'Concert',
        duration: '3',
        ticket_price: '299',
        location:'Cape Town',
        rating: 5,
        attendance:'Onsite',
        crowd:'70-80',
        date:'29 October 2025',
        time: '12:00 PM - 15:00 PM'
    },
    {
        event_name: 'Tech Gurus',
        category: 'Networking',
        duration: '2',
        ticket_price: '199',
        location:'Cape Town',
        rating: 5,
        attendance: 'Onsite',
        crowd:'30-50',
        date:'07 November 2025',
        time: '08:00 AM - 10:00 AM'
    },
]