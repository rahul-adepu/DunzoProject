import React from 'react'
import './page1.css'
import Paginationpart from './Paginationpart'
import Pagetop from './Pagetop'
import Footer from '../footer/Footer'
function Page2() {
    let stores = [
        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f788ba1f-9cae-4895-9ed4-22daed44ea7b-1616561569054-store_image.jpeg",
            store: "Dry Fruit House",
            place: "Kondapur",
            distance: "4.3km"
        },

        {
            img:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bDZ5aGRkeW4welRibnQ4bVRkWjhmZz09-1686896054128-store_image.jpg",
            store: "SBR Nuts and Spices",
            place: "Ramachandrapuram",
            distance: "4km"
        },
        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f788ba1f-9cae-4895-9ed4-22daed44ea7b-1616561569054-store_image.jpeg",
            store: "Dry Fruit House",
            place: "Kondapur",
            distance: "4.3km"
        },

        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bDZ5aGRkeW4welRibnQ4bVRkWjhmZz09-1686896054128-store_image.jpg",
            store: "SBR Nuts and Spices",
            place: "Ramachandrapuram",
            distance: "4km"
        },
        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f788ba1f-9cae-4895-9ed4-22daed44ea7b-1616561569054-store_image.jpeg",
            store: "Dry Fruit House",
            place: "Kondapur",
            distance: "4.3km"
        },

        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bDZ5aGRkeW4welRibnQ4bVRkWjhmZz09-1686896054128-store_image.jpg",
            store: "SBR Nuts and Spices",
            place: "Ramachandrapuram",
            distance: "4km"
        },
        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f788ba1f-9cae-4895-9ed4-22daed44ea7b-1616561569054-store_image.jpeg",
            store: "Dry Fruit House",
            place: "Kondapur",
            distance: "4.3km"
        },

        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bDZ5aGRkeW4welRibnQ4bVRkWjhmZz09-1686896054128-store_image.jpg",
            store: "SBR Nuts and Spices",
            place: "Ramachandrapuram",
            distance: "4km"
        },
        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f788ba1f-9cae-4895-9ed4-22daed44ea7b-1616561569054-store_image.jpeg",
            store: "Dry Fruit House",
            place: "Kondapur",
            distance: "4.3km"
        },

        {
            img: "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bDZ5aGRkeW4welRibnQ4bVRkWjhmZz09-1686896054128-store_image.jpg",
            store: "SBR Nuts and Spices",
            place: "Ramachandrapuram",
            distance: "4km"
        }       
    ]
    return (

        <div>
            <Pagetop />
            {
                stores.map((items) => (
                    <tr>
                        <div id='mainpage'>
                            <div id='forwidth'>
                                <td>
                                    <div id='page1'>
                                        <img id='sizing' src={items.img} alt='' />
                                        <div>
                                            <h3>{items.store}</h3>
                                            <h5>{items.place}</h5>
                                            <p>{items.distance}</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div id='page1'>
                                        <img id='sizing' src={items.img} alt='' />
                                        <div>
                                            <h3>{items.store}</h3>
                                            <h5>{items.place}</h5>
                                            <p>{items.distance}</p>
                                        </div>
                                    </div>
                                </td>
                            </div>
                        </div>
                    </tr>


                ))}

            <Paginationpart />
            <Footer />
        </div>
    )

}

export default Page2

