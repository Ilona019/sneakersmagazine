import React from 'react';
import './menu.css';

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
            // {
            //     name: "Расса",
            //     nameSubmenu: [
            //         "Афроамериканец",
            //         "Европеоид"
            //     ]
            // },
            {
                name: "Размер",
                nameSubmenu: [
                    36, 37, 38, 39, 40, 41, 42, 43, 44, 45
                ]
            },
            {
                name: "Цвет",
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

        
        // "Цена"

        return (
            <div className = "slider-class">
            <nav className = "nav">
                {menus.map((value, index) => {
                    return(
                        <div className = "item">{value.name}
                        <nav className = "n2">
                            {value.nameSubmenu.map((v, i) => {
                                return(
                                    <div className = "sub-item">{v}
                                    </div>
                                )
                            })}
                            </nav>
                        </div>
                    )
                })}
            </nav>
            </div>
        );

    // return (
    //     <nav className = "nav">
    //         <ul className = "menu">
    //         {menus.map((value, index) => {
    //             return (
    //                 <li key = {index} className = "li-menu">
    //                     <a href = "#" className = "ac">{value.name}</a>
    //                     <ul className = "submenu">
    //                         {value.nameSubmenu ? value.nameSubmenu.map((v, i) => {
    //                             return (
    //                                 <li key = {i} className = "li-submenu">
    //                                     <a href = "#">{v}</a>
    //                                 </li>
    //                             )
    //                         }) : <></>}
    //                     </ul>
    //                 </li>
    //             );
    //             })
    //         }
    //         </ul>
    //     </nav>
    // );
  }

export default Menu;