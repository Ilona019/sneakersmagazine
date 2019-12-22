import React, {useState} from 'react';
import './menu.css';
// import 'query-string';
import Price from './../price/price'
// import { url } from 'inspector';
// const queryString = require('querystring');

function Menu(){

    let menus = [
            {
                name: "Бренд",
                nameSubmenu: [
                     "Adidas",
                     "Nike",
                     "Reebok",
                     "New Balance",
                     "Puma",
                     "Jordan",
                     "Vans",
                     "Asics"
                ]
            },
            {
                name: "Пол",
                nameSubmenu: [
                    "Мужчины",
                    "Женщины"
                ]
            },
            {
                name: "Размер",
                nameSubmenu: [
                    36, 37, 38, 39, 40, 41, 42, 43, 44, 45
                ]
            },
            {
                name: "Цвет",
                // key: "color",
                // colors: {
                //     b: "чёрный",
                //     w: "белый"
                // },
                nameSubmenu: [
                    "Черный",
                    "Белый",
                    "Цветной"
                ]
            },
            {
                name: "Стиль",
                nameSubmenu: [
                    "Sport",
                    "Classics"
                ]
            },
            {
                name: "Вид спорта",
                nameSubmenu: [
                    "Бег",
                    "Йога",
                    "Тренировки в зале",
                    "Ходьба",
                    "Танцы"
                ]
            },
            {
                name: "Сортировка",
                nameSubmenu: [
                    "Сортировать по возрастанию цены",
                    "Сортировать по убыванию цены",
                    "Новинки"
                ]
            },
        ]

        function onClickToCheckMenuItems(value){
            const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog?filter=' + value;
            fetch(url, {
                method: 'POST'
            });
            console.log(url);
        }

        return (
            <div className = "slider-class">
            <nav className = "nav">
                {menus.map((value, index) => {
                    return(
                        <div className = "item">{value.name}
                        <nav className = "n2">
                            {value.nameSubmenu.map((v, i) => {
                                return(
                                    <div className = "sub-item" onClick = {(element) => onClickToCheckMenuItems(value)}>{v}
                                    </div>
                                )
                            })}
                            </nav>
                        </div>
                    )
                })}
            </nav>
            <Price />
            </div>
        );
  }

export default Menu;