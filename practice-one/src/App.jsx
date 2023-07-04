import React from 'react';
import Card from './Components/Common/Card';

const App = () => (
  <div>
    <Card name="Card 1" size="small" variant="primary">
      <Card.CardHeader>Header 1</Card.CardHeader>
      <Card.CardContent>Content 1</Card.CardContent>
      <Card.CardFooter>Footer 1</Card.CardFooter>
    </Card>

    <Card name="Card 2" size="medium" variant="secondary">
      <Card.CardHeader>Header 2</Card.CardHeader>
      <Card.CardContent>Content 2</Card.CardContent>
      <Card.CardFooter>Footer 2</Card.CardFooter>
    </Card>

    <Card name="Card 3" size="large" variant="success">
      <Card.CardHeader>Header 3</Card.CardHeader>
      <Card.CardContent>Content 3</Card.CardContent>
      <Card.CardFooter>Footer 3</Card.CardFooter>
    </Card>

    <Card name="Card 4" size="medium" variant="danger">
      <Card.CardImage src="/image.jpg" alt="Image" />
      <Card.CardContent>Content 4</Card.CardContent>
      <Card.CardFooter>Footer 4</Card.CardFooter>
    </Card>
  </div>
);

export default App;
