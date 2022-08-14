import { useState } from "react"

const catImages: string[] = [
    "https://cdn2.thecatapi.com/images/bpc.jpg",
    "https://cdn2.thecatapi.com/images/eac.jpg",
    "https://cdn2.thecatapi.com/images/6qi.jpg",
]

const randomCatImage = ():string => {
    const index = Math.floor(Math.random() * catImages.length)
    // 猫画像を表示
    return catImages[index]
}

const IndexPage = () => {
    const [catImageUrl, setCatImageUrl] = useState(
        "https://cdn2.thecatapi.com/images/bpc.jpg"
    )

    const handleClick = () => {
        setCatImageUrl(randomCatImage())
    }

    return (
        <div>
            <button onClick={handleClick}>今日の猫</button>
            <div style={{ marginTop: 8}}>
                <img src={catImageUrl} />
            </div>
        </div>
    )
}

export default IndexPage