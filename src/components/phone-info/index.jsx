import React from "react"
import {useParams} from "react-router-dom"
import {useData} from "../../hook/useData"

const PhoneInfo = () => {
    const {id} = useParams()
    const {data: phones, isLoading, isError} = useData()

    const product = phones?.find((phone) => phone.id === id)

    if (isLoading) return <div>Loading...</div>
    if (isError || !product) return <div>Product not found</div>

    const specs = [
        {label: "Название продукта", value: product.product_name},
        {label: "Объем встроенной памяти", value: product.storage},
        {label: "Цвет", value: product.color},
        {label: "Текущая цена", value: `${product.price_current} UZS`},
        {label: "Оригинальная цена", value: `${product.price_original} UZS`},
        {label: "Скидка", value: product.discount},
        {
            label: "Наличие на складе",
            value: product.availability_in_stock
                ? "В наличии"
                : "Нет в наличии",
        },
        {label: "Время доставки", value: product.delivery_time},
        {label: "Регион", value: product.region},
        {label: "Процессор", value: product.processor},
        {label: "Диагональ дисплея", value: product.display_size},
        {label: "Тип дисплея", value: product.display_type},
        {label: "Материал корпуса", value: product.body_material},
        {label: "Водозащита", value: product.water_resistance},
        {label: "Вес", value: product.weight},
        {label: "Камера телефото", value: product.camera_telephoto},
        {label: "Камера широкоугольная", value: product.camera_wide},
        {label: "Камера сверхширокоугольная", value: product.camera_ultra_wide},
        {label: "Тип аккумулятора", value: product.battery_type},
        {
            label: "Время работы при воспроизведении музыки",
            value: product.battery_music_playback,
        },
        {
            label: "Функции аккумулятора",
            value: product.battery_features.join(", "),
        },
        {
            label: "Разъем для наушников",
            value: product.headphone_jack ? "Есть" : "Нет",
        },
        {label: "Порт зарядки", value: product.charging_port},
        {label: "Количество ядер", value: product.cpu_cores},
        {
            label: "Рейтинг",
            value: `${product.ratings_stars} из 5 (${product.ratings_reviews_count} отзывов)`,
        },
        {label: "Доступные цвета", value: product.color_options.join(", ")},
    ]

    return (
        <div className="bg-white p-3">
            <h2 className="text-2xl font-bold mb-4">Основные характеристики</h2>
            <ul>
                {specs.map((spec, index) => (
                    <li
                        key={index}
                        className="flex justify-between py-2 border-b last:border-b-0 border-dotted border-gray-300">
                        <span className="text-gray-500">{spec.label}</span>
                        <span className="font-medium text-black">
                            {spec.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PhoneInfo
