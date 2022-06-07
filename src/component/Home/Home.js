import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="https://i.ibb.co/Fbc9vr0/home2.jpg" alt="Los Angeles" width="100%" />
                    </div>

                    <div class="item">
                        <img src="https://i.ibb.co/x28b9YR/home7.jpg" alt="Chicago" width="100%" />
                    </div>

                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="second">

                <button type="submit" className="btn btn-secondary btn-lg">Home</button>
                <button type="submit" className="btn btn-secondary btn-lg">In-Progress</button>
                <button type="submit" className="btn btn-secondary btn-lg">Completed</button>

            </div>

            

            

            
        </>
    )
}

export default Home