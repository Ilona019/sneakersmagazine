import React, {useState} from 'react';
import './menu.css';
import Price from './../price/price'

class Menu extends React.Component{
    render(){
        let menus = [
            {
                name: "Бренд",
                nameSubmenu: [
                     "Adidas",
                     "Nike",
                     "Reebok",
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
            // {
            //     name: "Сортировка",
            //     nameSubmenu: [
            //         "Сортировать по возрастанию цены",
            //         "Сортировать по убыванию цены",
            //         "Новинки"
            //     ]
            // },
        ]

        let firstParam = true;
        // let count = 0;
        //отвечает за переименование элементов меню как в бд
        // let field = "";
        //отвечает за переименование элементов подменю как в бд
        // let field2 = "";

        function onClickToCheckMenuItems(v){
            const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?' + v;
            fetch(url, {
                method: 'POST'
            });
            console.log(url);
        }

        function getEnglishName(e){
            // console.log("из метода е" + e);
            if(e == "Вид спорта"){
                return "task";
            }
            else if (e == "Пол"){
                return "gender";
            }
            else if (e == "Мужчины"){
                return "M";
            }
            else if (e == "Женщины"){
                return "W";
            }
            else if (e == "Бренд"){
                return "brand";
            }
            else if (e == "Размер"){
                return "size";
            }
            else if (e == "Цвет"){
                return "color";
            }
            else if (e == "Стиль"){
                return "style";
            }
            else if(e == "Мужчины"){
                return "M";
            }
            else if(e == "Adidas"){
                return "adidas";
            }
            else if(e == "Asics"){
                return "asics";
            }
            else if(e == "Reebok"){
                return "reebok";
            }
            else if(e == "Vans"){
                return "vans";
            }
            else if(e == "Puma"){
                return "puma";
            }
            else if(e == "Nike"){
                return "nike";
            }
            else if(e == "Jordan"){
                return "jordan";
            }
            else if(e == "36"){
                return "36";
            }
            else if(e == "37"){
                return "37";
            }
            else if(e == "38"){
                return "38";
            }
            else if(e == "39"){
                return "39";
            }
            else if(e == "40"){
                return "40";
            }
            else if(e == "41"){
                return "41";
            }
            else if(e == "42"){
                return "42";
            }
            else if(e == "43"){
                return "43";
            }
            else if(e == "44"){
                return "44";
            }
            else if(e == "45"){
                return "45";
            }
            else if(e == "Черный"){
                return "black";
            }
            else if(e == "Белый"){
                return "white";
            }
            else if(e == "Цветной"){
                return "multy";
            }
            else if(e == "Sport"){
                return "sport";
            }
            else if(e == "Classics"){
                return "classics";
            }
            else if(e == "Бег"){
                return "run";
            }
            else if(e == "Йога"){
                return "yoga";
            }
            else if(e == "Тренировки в зале"){
                return "indoor";
            }
            else if(e == "Ходьба"){
                return "go";
            }
            else if(e == "Танцы"){
                return "dance";
            }
        }
        return (
            <div className = "slider-class">
            <nav className = "nav">
                {menus.map((value, index) => { 
                        // field= getEnglishName(value.name)
                    return(
                        <div className = "item">{value.name}
                        <nav className = "n2">
                            
                            {value.nameSubmenu.map((v, i) => {
                                // field= getEnglishName(value.name)
                                // field2= getEnglishName(v);
                                // console.log(field);
                                // console.log(field2);
                                // paramsString = field + "="+ field2;
                                // console.log(paramsString);
                                return(
                                    <div className = "sub-item" onClick = {(element) => onClickToCheckMenuItems(getEnglishName(value.name) + "=" + getEnglishName(v))}>{v}
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

    
  }

export default Menu;