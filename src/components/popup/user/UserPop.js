import { useEffect, useState } from "react";

const PopCont = ({data}) => {
    return(<>
        <div className="pop_cont" style={{"top":data.p_top_point,"left":data.p_left_point}}>
            <div className="box" style={{"width":data.p_width_size,"height":data.p_height_size,}}>
                
                
            </div>
            <div className="btn_box">

            </div>
        </div>
    </>);
};


const UserPop = (props) => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(props.list);
    },[props.list]);


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