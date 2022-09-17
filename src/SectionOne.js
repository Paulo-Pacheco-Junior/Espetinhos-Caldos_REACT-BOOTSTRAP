import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SectionOne.css';

export const SectionOne = () => {
  return (
    <div className='container'>
      <Card className='text-center text-white' id='image-container'>
        <Card.Body id='image-overlay'>
          <Card.Title className='my-5'><h1>ESPETINHOS & CALDOS</h1></Card.Title>
          <Card.Subtitle className="mb-3"><h3>Os Melhores Sabores Aqui!</h3></Card.Subtitle>
          <Card.Text className='mb-4'>Mais variedades, Mais satisfação.</Card.Text>
          <Button variant="success" className='mb-4'>FAÇA SEU PEDIDO</Button>
        </Card.Body>
      </Card>
    </div>
  );
}