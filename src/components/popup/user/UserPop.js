import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopIdx } from "../../../store/etcSlice";
import util from "../../../config/util";


const PopCont = ({data}) => {
    const dispatch = useDispatch();
    const [checkHide, setCheckHide] = useState(false);

    //팝업닫기
    const closePop = () => {
        //오늘은 그만보기 체크되어있으면 쿠키저장
        if(checkHide){
            
            // const pName = "popup"+data.idx;
            // const pVal = "done"+data.idx;
            // util.setCookie( pName, pVal, 1);
        }
        dispatch(closePopIdx(data.idx));
    };

    return(<>
        <div className="pop_cont" style={{"top":data.p_top_point,"left":data.p_left_point}}>
            <div className="box" 
                style={{"width":data.p_width_size,"height":data.p_height_size,}} 
                dangerouslySetInnerHTML={{ __html: data.p_content }}
            ></div>
            <div className="btn_box">
                <div className="chk_box1">
                    <input type="checkbox" id={`check_hide`} className="blind"
                        value={checkHide}
                        onChange={(e) => {
                            const checked = e.currentTarget.checked;
                            if(checked){
                                setCheckHide(true);
                            }else{
                                setCheckHide(false);
                            }
                        }}
                        checked={checkHide ? true : false}
                    />
                    <label htmlFor={`check_hide`}>오늘은 그만보기</label>
                </div>
                <button type="button" className="btn_close" onClick={closePop}>창닫기</button>
            </div>
        </div>
    </>);
};


const UserPop = (props) => {
    const [list, setList] = useState([]);
    const etc = useSelector((state)=>state.etc);


    useEffect(()=>{
        const list = props.list;
        // const newList = list.filter();
        setList(props.list);
    },[props.list]);


    //닫은팝업제외하고 팝업리스트 다시 정렬
    useEffect(()=>{
        const prevList = [...list];
        if(etc.closePopIdx !== null){
            const newList = prevList.filter((item)=>item.idx !== etc.closePopIdx);
            setList(newList)
        }
    },[etc.closePopIdx]);


    return(<>
        {list.length > 0 &&
            <div className="user_pop_wrap">
                <div className="dim"></div>
                {list.map((data,i)=>{
                    return(
                        <PopCont 
                            key={i}
                            data={data}
                        />
                    );
                })}
            </div>
        }
    </>);
};

export default UserPop;