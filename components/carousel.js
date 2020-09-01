import { Carousel } from 'react-bootstrap';

const CarouselItems = (props) => {
    // console.log(props);
    return (
        <Carousel>
            {
                props.items?.map(item => {
                    return (
                        <Carousel.Item interval={500} key={item._id}>
                            <img
                                className="d-block w-100"
                                src={`http://127.0.0.1:4000/${item.productImage}`}
                                alt={`${item.name}`}
                            />
                            <Carousel.Caption>
                                <h3>{item.price}</h3>
                                <p>{item.name}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CarouselItems;