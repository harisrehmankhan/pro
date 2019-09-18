const Tours= require('./models/tours');
class FakeDb{
    constructor(){
        this.destDetails = [{
            title: "Seaside Walkdby",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice tour in center of the city",
            dailyRate: 43
            },
            {
            title: "City Tour",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice tour in center of the city.",
            dailyRate: 11
            },
            {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice tour in center of the city",
            dailyRate: 23
}]
    }

    async cleanDb(){
        await Tours.deleteMany({});
    }

pushtoDB(){
    this.destDetails.forEach((dest)=>{
        const newDest= new Tours(dest);

        newDest.save();
    })
}

seeDb(){
    this.cleanDb();
    this.pushtoDB();
}

}

module.exports=FakeDb;