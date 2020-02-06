import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
         this.state = {
             dish: null
        }
    }

    
    
    renderDish(dish) {
        if (dish != null) {        
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image}  alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {        
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments != null) {
            let commentsList = comments.map((comment) => {
                return (                
                    <div>
                        <Card key={comment.id} >
                            <CardBody>         
                                <ul class = "list-unstyled">
                                    <li>{comment.comment}</li>
                                    <br></br>               
                                    <li>-- {comment.author}, {comment.date}</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                );                    
            });
            return (commentsList);
        }
        else {        
            return(
                <div></div>
            );
        }                
    }

    render() {
        if (this.props.dish != null) {
            return(
                <div className="row">
                    <div  className="col-xs-12 col-xm-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    
                    <div  className="col-xs-12 col-xm-12 col-md-5 m-1">
                        <h4><strong>Comments</strong></h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;