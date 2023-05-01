import './ItemDetail.css'
import ItemCount from './ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <article className='card detailContainer'>
            <FontAwesomeIcon className='goBackBtn' onClick={goBack} icon={faArrowLeft}/>
            <div className='card-header'>
                <h2 className='card-title'>{name}</h2>
            </div>
            <div className='card-body'>
                <div className='row'>
                <div className='col-md-6'>
                    <img src={img} alt={name} className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <p className='card-text'>Categoria: {category}</p>
                    <p className='card-text'>Descripcion: {description}</p>
                    <p className='card-text'>Precio: ${price}</p>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}></ItemCount>
                </div>
                </div>
            </div>
        </article>

    )
}
export default ItemDetail