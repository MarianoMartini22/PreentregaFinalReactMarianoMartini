import './ItemDetail.css'
import ItemCount from './ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useFirebase } from '../hooks/useFirebase';
import { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const navigate = useNavigate();
    const categoryName = useFirebase('categoria', { id: category }, 'categorias', true);
    useEffect(() => {
    }, [category]);
    const goBack = () => {
        navigate(-1);
    };
    const { addToCart } = useContext(CartContext);

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
                    { (categoryName.nombre) ? <p className='card-text'>Categoria: {categoryName?.nombre.charAt(0).toUpperCase() + categoryName?.nombre.slice(1)}</p> : '' }
                    <p className='card-text'>Descripcion: {description}</p>
                    <p className='card-text'>Precio: ${price}</p>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => addToCart({ item: {id, name, img, category, description, price, stock}, quantity })}></ItemCount>
                </div>
                </div>
            </div>
        </article>

    )
}
export default ItemDetail