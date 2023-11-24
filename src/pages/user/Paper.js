const Paper = () => {
    return(<>
        <div className="list_board_wrap">
            <div className="board_util">
                <em className="txt_total">전체 <b>10건</b></em>
            </div>
            <ul className="list_magazine">
                <li>
                    <a href="#">
                        <div className="item_box">
                            <div className="item_date">
                                <b>2022</b>
                                <span>12.01</span>
                            </div>
                            <div className="item_txt">
                                <div className="item_link">
                                    <strong>Change in Stromal Thickness and Anterior Curvature After Refractive Corneal Lenticule Extraction with the CLEAR Applicaion</strong>
                                    <em>Journal of Refractive Surgery</em>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </>);
};

export default Paper;