import s from './Card.module.css'
import { Link } from 'react-router-dom'

export function Card({id, image='https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg', name='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина', price='335'}){
    
    return(
        <Link className={s.btn} to={`${id}`}>
            <div className={s.card}>
                <div className={s.cardImg}>
                   <img src={image} alt="" />
                </div>
                <h3>{name}</h3>
                <div className={s.cardBottom}>
                  <div className={s.price}>{price} ₽</div>
                  <a href="#">Добавить в корзину</a>
                </div>
             </div>
        </Link> 
    )
}