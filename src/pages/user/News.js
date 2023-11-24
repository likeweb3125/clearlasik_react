const News = () => {
    return(<>
        <div className="search_wrap">
            <div className="search_box_type1">
                <div className="select_box">
                    <div className="select">
                        <select name="" id="" title="소식 검색">
                            <option value="">제목</option>
                            <option value="">내용</option>
                        </select>
                    </div>
                </div>
                <div className="search_input">
                    <input type="text" placeholder="검색어를 입력해주세요." title="소식 검색"/>
                    <button type="button" className="btn_map_search">검색하기</button>
                </div>
            </div>
        </div>
        <div className="gallery_board">
            <div className="board_util">
                <em className="txt_total">총 소식 <b>31개</b></em>
            </div>
            <ul className="list_gallery2">
                <li>
                    <a href="#">
                        <div className="img">
                            <img src="user_images/test.jpg" alt="image"/>
                            <div className="item_date">
                                <span>2023.10</span>
                                <b>06</b>
                            </div>
                        </div>
                        <div className="txt">
                            <strong>대기업고민 해결사, 혁신 스타트업 35개사 최종 선정</strong>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="img">
                            <img src="user_images/no_ziemer_img.png" alt="image"/>
                            <div className="item_date">
                                <span>2023.10</span>
                                <b>06</b>
                            </div>
                        </div>
                        <div className="txt">
                            <strong>서비스 02</strong>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div className="btn_more_wrap">
            <button type="button" className="btn_style1">
                <span>More View</span>
            </button>
        </div>
    </>);
};

export default News;