import { useEffect, useState } from "react";
// import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    MouseSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    useSortable,
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const MenuDepth2 = (props) => {
    const [data, setData] = useState({});
    const [li2Classes, setLi2Classes] = useState({});
    const [menuIdList, setMenuIdList] = useState([]);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isSorting,
    } = useSortable({id: props.id});
    
    const style = {
        transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
        transition: isSorting ? transition : undefined,
        zIndex: isDragging ? '100' : undefined,
    };

    
    useEffect(()=>{
        setData(props.data);
        // console.log(props.data);

        const idList = props.data.list.map((menu) => menu.id);
        setMenuIdList(idList);
    },[props.data]);
    
    

    //2뎁스 메뉴토글버튼 클릭시
    const li2FolderHandler = (index) => {
        // 버튼을 클릭하면 해당 인덱스의 li2Classes 상태를 토글합니다.
        setLi2Classes((prevClasses) => ({
            ...prevClasses,
            [index]: !prevClasses[index], // 토글
        }));
    };



    return(
        <li style={style}
            ref={setNodeRef}
            className={props.isLiOn}
            id={props.id}
        >
            <div className="menu">
                <span>{data && data.name}</span>
                <div className="btn_wrap">
                    <button type="button" className="btn_add">하위 카테고리 등록</button>
                    <button type="button" className="btn_folder" onClick={props.liFolderBtnClickHandler}>하위 카테고리 열고 닫기</button>
                    <button type="button" className="btn_move" {...attributes} {...listeners}>카테고리 이동</button>
                </div>
            </div>
            <ul className="list_menu3">
                {data && data.list && data.list.length > 0 ?
                    data.list.map((depth3,i)=>{
                        return(
                            <li key={i}>
                                <div className="menu">
                                    <span>{depth3.name}</span>
                                    <div className="btn_wrap">
                                        <button type="button" className="btn_move">카테고리 이동</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                    : <li className="none_category">카테고리가 없습니다.</li>
                }
            </ul>
        </li>
    );
};

export default MenuDepth2;