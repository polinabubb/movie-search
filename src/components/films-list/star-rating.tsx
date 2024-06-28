type StarRatingType = {
    number: number,
    isMarked: boolean
}

export function StarsRating({stars}: { stars: StarRatingType[] }): JSX.Element {
    return (
        <div className="stars-rating">
            {stars.map((starRating) => {
                return (<div className="star-rating">
                    <svg className={`star-rating__star  ${starRating.isMarked ? 'marked' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.66015 13.0573L8.66016 13.0572L8.65651 13.0551C8.44935 12.9348 8.20008 12.8975 7.99961 12.8975C7.80116 12.8975 7.5505 12.9341 7.34346 13.0576C7.34281 13.058 7.34217 13.0584 7.34153 13.0588L5.3447 14.2369L5.34368 14.2375C4.81606 14.5505 4.44054 14.6193 4.19548 14.6119C3.95493 14.6047 3.79861 14.5229 3.70726 14.4573C3.62004 14.3923 3.49464 14.2683 3.4148 14.0405C3.33365 13.8089 3.28567 13.4303 3.42552 12.8352L3.42592 12.8335L3.89846 10.7903C3.95316 10.5657 3.91794 10.3257 3.86577 10.1453C3.81263 9.96153 3.7137 9.74201 3.55233 9.58064L1.899 7.92731C1.54275 7.57106 1.40639 7.26953 1.3575 7.05146C1.30824 6.8318 1.33978 6.66098 1.37402 6.55623C1.40891 6.44953 1.48481 6.29088 1.65416 6.13977C1.82211 5.98992 2.1083 5.82387 2.60139 5.74065C2.60156 5.74062 2.60173 5.7406 2.60191 5.74057L4.72739 5.38743L4.72764 5.38739C4.93717 5.35247 5.13322 5.24109 5.27311 5.13698C5.41128 5.03415 5.57407 4.87936 5.66715 4.68881L6.84574 2.33831L6.84655 2.33669C7.07771 1.87147 7.32587 1.64049 7.52034 1.52267C7.71589 1.40421 7.88914 1.38086 7.99878 1.38086C8.10841 1.38086 8.28166 1.40421 8.47721 1.52267C8.67169 1.64049 8.91984 1.87147 9.15101 2.33669L9.15156 2.3378L10.3249 4.68447L10.3248 4.68449L10.3282 4.69102C10.4237 4.87518 10.5847 5.02776 10.7251 5.13141C10.8646 5.23447 11.0604 5.34581 11.2699 5.38072L11.2702 5.38076L13.3961 5.73398C13.3962 5.73399 13.3963 5.73401 13.3964 5.73402C13.8936 5.81741 14.1811 5.98382 14.3484 6.13311C14.517 6.28354 14.5897 6.44002 14.6209 6.54124C14.6544 6.65005 14.6847 6.82355 14.6351 7.0448C14.5858 7.26426 14.4502 7.56595 14.0977 7.92153C14.0975 7.92171 14.0973 7.92189 14.0971 7.92207L12.4452 9.58064C12.4451 9.58073 12.445 9.58082 12.445 9.5809C12.2827 9.74325 12.1857 9.96216 12.1337 10.1447C12.0814 10.3284 12.0503 10.5609 12.0963 10.7779L12.0962 10.778L12.0983 10.7869L12.5715 12.8329C12.7086 13.4291 12.6608 13.8089 12.5799 14.0415C12.5005 14.2696 12.3765 14.393 12.2907 14.4569C12.1899 14.5289 12.0239 14.6142 11.7721 14.6142C11.5286 14.6142 11.1622 14.5364 10.6527 14.2368C10.6525 14.2367 10.6524 14.2366 10.6523 14.2366L8.66015 13.0573Z"
                            stroke="#ABABAB"/>
                    </svg>


                    <div className={`star-rating__number  ${starRating.isMarked ? 'marked' : ''}`}>
                        {starRating.number}
                    </div>
                </div>)
            })}
        </div>
    );
}

export default StarsRating;
