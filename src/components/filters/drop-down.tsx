import {useState} from "react";

type dropDownListProps = {
    dropDownList: string[];
    placeholder: string;
}

export function DropDown({dropDownList, placeholder}: dropDownListProps): JSX.Element {
    const [activeItem, setActiveItem] = useState(placeholder);
    const [needDrowList, setNeedDrowList] = useState(false);
    return (
        <div className="drop-down">
            <div className={`drop-down__field ${needDrowList ? 'list-dropped' : ''}`}>
                <div
                    className={`drop-down__active-item ${activeItem === dropDownList[0] ? ' active-item__placeholder' : ''}`}>
                    {activeItem === dropDownList[0] ? placeholder : activeItem}
                </div>
                <button className="drop-down__arrow" onClick={() => setNeedDrowList(!needDrowList)}>
                    {!needDrowList ?
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M6.5013 17.9577H11.5013C16.0263 17.9577 17.9596 16.0243 17.9596 11.4993V6.49935C17.9596 1.97435 16.0263 0.0410156 11.5013 0.0410156H6.5013C1.9763 0.0410156 0.0429688 1.97435 0.0429688 6.49935V11.4993C0.0429688 16.0243 1.9763 17.9577 6.5013 17.9577ZM1.29297 6.49935C1.29297 2.65768 2.65964 1.29102 6.5013 1.29102H11.5013C15.343 1.29102 16.7096 2.65768 16.7096 6.49935V11.4993C16.7096 15.341 15.343 16.7077 11.5013 16.7077H6.5013C2.65964 16.7077 1.29297 15.341 1.29297 11.4993V6.49935ZM8.55964 11.2411C8.68464 11.3661 8.84297 11.4244 9.0013 11.4244C9.15964 11.4244 9.31797 11.3661 9.44297 11.2411L12.3846 8.29945C12.6263 8.05778 12.6263 7.65778 12.3846 7.41611C12.143 7.17445 11.743 7.17445 11.5013 7.41611L9.0013 9.91611L6.50131 7.41611C6.25964 7.17445 5.85964 7.17445 5.61797 7.41611C5.37631 7.65778 5.37631 8.05778 5.61797 8.29945L8.55964 11.2411Z"
                                  fill="#999FA6"/>
                        </svg> :
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M6.5013 17.9577H11.5013C16.0263 17.9577 17.9596 16.0243 17.9596 11.4993V6.49935C17.9596 1.97435 16.0263 0.0410156 11.5013 0.0410156H6.5013C1.9763 0.0410156 0.0429688 1.97435 0.0429688 6.49935V11.4993C0.0429688 16.0243 1.9763 17.9577 6.5013 17.9577ZM1.29297 6.49935C1.29297 2.65768 2.65964 1.29102 6.5013 1.29102H11.5013C15.343 1.29102 16.7096 2.65768 16.7096 6.49935V11.4993C16.7096 15.341 15.343 16.7077 11.5013 16.7077H6.5013C2.65964 16.7077 1.29297 15.341 1.29297 11.4993V6.49935ZM11.5013 10.6577C11.6263 10.7827 11.7846 10.8411 11.943 10.8411C12.1013 10.8411 12.2596 10.7827 12.3846 10.6577C12.6263 10.4161 12.6263 10.0161 12.3846 9.77441L9.44297 6.83274C9.20131 6.59107 8.80131 6.59107 8.55964 6.83274L5.61797 9.77441C5.37631 10.0161 5.37631 10.4161 5.61797 10.6577C5.85964 10.8994 6.25964 10.8994 6.50131 10.6577L9.0013 8.15774L11.5013 10.6577Z"
                                  fill="#999FA6"/>
                        </svg>

                    }


                </button>
            </div>
            <div className={`drop-down__list ${needDrowList?'': 'hidden'}`}>
                {needDrowList && dropDownList.map((item) => {
                    return <div key="item" className="drop-down__item" onClick={() => {
                        setActiveItem(item);
                        setNeedDrowList(false);
                    }}>{item}</div>
                })}
            </div>
        </div>


    );
}

export default DropDown;
