import './Menu.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

export const Menu = ({items}) => {
  return (  
    <div className="container">
      <div className='menu'>
        {items.map((item, index)=>{
          const {id, title, price, img, desc} = item;
          return <>
            <Card className="card-area">
              <Image className='img' src={img} rounded />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                  <Card.Text>{title}</Card.Text>
                  <Card.Text>R$ {price.toFixed(2).replace('.',',')}</Card.Text>
                </Card.Title>
                <Card.Text className='text-ch'>
                  {desc}
                </Card.Text>
                <Button variant="success">Comprar</Button>
              </Card.Body>
            </Card>
          </>
        })}
      </div>
    </div>
  )
}