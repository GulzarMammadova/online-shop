import '../../App.css';
import { Product } from './ProductDescription';

export function ProductsList() {
    const items = [
        {
            id: 0,
            title: "Apple Watch",
            model: "Series 5 SE",
            price: "529.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img:  "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/Apple-Watch.svg"
        },
        {
            id: 1,
            title: "Sony ZX331BT",
            model: "Light Grey",
            price: "39.99",
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            count: 1,
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/qulaqciq.svg"
        },
        {
            id: 2,
            title: "Iphone 11",
            model: "Serious Black",
            price: "619.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/Apple11-Black.svg"
        },
        {
            id: 3,
            title: "Iphone 11",
            model: "Subway Blue",
            price: "619.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple11-Green.svg"
        },
        {
            id: 5,
            title: "Iphone 11",
            model: "Subway BlueProduct RED",
            price: "619.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple11-red.svg"
        },
        {
            id: 6,
            title: "Iphone 11",
            model: "Milky White",
            price: "619.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple11-white.svg"
        },
        {
            id: 7,
            title: "Iphone 12",
            model: "Rose Pink",
            price: " 729.99",
            count: 1,
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple12-pink.svg"
        },
        {
            id: 8,
            title: "Iphone 12",
            model: "Navy Blue",
            price: " 729.99",
            count: 1,
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            rang: "4.5",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple12-blue.svg"
        },
        {
            id: 10,
            title: "Iphone 13 Pro",
            model: "Silly Silver",
            price: " 1029.99",
            count: 1,
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            rang: "4.5",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple13Pro-silver.svg"
        },
        {
            id: 11,
            title: "Iphone 13 Pro",
            model: "Grey",
            price: " 1029.99",
            count: 1,
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            rang: "4.5",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/apple13Pro-grey.svg"
        },
        {
            id: 12,
            title: "Samsung Galaxy Note 21 ",
            model: "2 - Options",
            price: " 999.99",
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            cot: 1,
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/samsungNote21.svg"
        },
        {
            id: 13,
            title: "Samsung Galaxy S21+ ",
            model: "Lilac Purple",
            price: " 849.99",
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            cot: 1,
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/samsungS21%2B.svg"
        },
        {
            id: 14,
            title: "Dell XPS 13",
            model: "White",
            price: " 1799.99",
            rating: "4.5",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            cot: 1,
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/dellXps13.svg"
        },
        {
            id: 9,
            title: "Dell XPS 15 2-in-1",
            model: "Midnight Gray",
            price: " 3199.99",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            count: 1,
            rang: "4.5",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/dellxps15-1.svg"
        },
        {
            id: 15,
            title: "Dell XPS 15",
            model: "Light Grey",
            price: " 1899.99",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",

            rating: "4.5",
            cot: 1,
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/dellXps15-2.svg"
        },
        {
            id: 4,
            title: "Macbook Pro 16",
            model: "Silver - M1 Pro",
            price: "3249.99",
            count: 1,
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.",
            rang: "4.5",
            // img: "https://raw.githubusercontent.com/Samir1009ms/photo/d791d678569184957cd4eb1043aba0cc31441ae0/macbook-16-pro.svg"
        },
        
    ]
    return (
        <div className="productList-container">
          {items.map((post, index) => (
            <Product key={index} index={index} post={post} />
          ))}
        </div>
      )
}