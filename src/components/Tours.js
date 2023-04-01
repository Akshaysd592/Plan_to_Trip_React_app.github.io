import Card from './Card'

function Tours({tours,removeTour, AddTour}){
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan to Trip</h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour} AddTour={AddTour}></Card>
                    })
                }
            </div>
        </div>
    );
}


export default Tours;
