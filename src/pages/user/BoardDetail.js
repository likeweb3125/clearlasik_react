const BoardDetail = () => {
    return(<>
        <div className="page_user_magazine_view page_user_board">
            <div className="section_wrap">
                <div className="section_inner">
                    <div className="board_section">
                        <div className="board_view">
                            <div className="board_tit_box">
                                <div className="board_tit">
                                    <h5>창립 20주년, 행사 개최</h5>
                                    <ul className="board_info">
                                        <li>
                                            <em>2023.07.23</em>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="board_con">
                                <div className="con">
                                    내용
                                </div>
                            </div>
                        </div>
                        <div className="board_pagination">
                            <div className="pagination_box board_prev">
                                <b>이전글</b>
                                <span>
                                    <a href="#">7월 23일 시스템 정기 점검</a>
                                </span>
                            </div>
                            <div className="pagination_box board_next">
                                <b>다음글</b>
                                <span>
                                    <a href="#">Lorem ipsum 6월 소식</a>
                                </span>
                            </div>
                        </div>
                        <div className="btn_list_wrap">
                            <a href="#" className="btn_style3">
                                <span>목록 보기</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default BoardDetail;