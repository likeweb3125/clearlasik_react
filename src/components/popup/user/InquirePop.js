import { useDispatch } from "react-redux";
import { inquirePop } from "../../../store/popupSlice";


const InquirePop = () => {
    const dispatch = useDispatch();

    //팝업닫기
    const closePopHandler = () => {
        dispatch(inquirePop(false));
    };


    return(<>
        <div className="pop_user_display pop_alliance">
            <div className="dimm"></div>
            <div className="popup_wrap">
                <div className="popup">
                    <div className="pop_tit">
                        <h3><i>지금, </i>지머와 <br/>함께 하세요! <p>지머는 고객에게 새로운 세상을 전달하고, <br/>좋은 시너지를 위해 다양한 제휴 문의를 받습니다.</p></h3>
                    </div>
                    <div className="pop_con">
                        <div className="form_box_wrap">
                            <div className="form_box">
                                <div className="box">
                                    <h5>병원명 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_input_box1">
                                            <input type="text" placeholder="병원명을 입력해주세요."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h5>연락처 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_input_box1">
                                            <input type="text" placeholder="숫자만 입력해주세요."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h5>이메일 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_input_box1">
                                            <input type="text" placeholder="이메일을 입력해주세요."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_box">
                                <div className="box">
                                    <h5>구분 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_select_box1">
                                            <select name="" id="" title="구분 선택" required>
                                                <option value="" hidden disabled selected>선택</option>
                                                <option value="">123</option>
                                                <option value="">223</option>
                                                <option value="">333</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h5>제안제목 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_input_box1">
                                            <input type="text" placeholder="제안 제목을 입력해주세요."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box2">
                                    <h5>제안내용 <i>*</i></h5>
                                    <div className="input_wrap">
                                        <div className="user_textarea_box">
                                            <textarea name="" id="" cols="30" rows="4" placeholder="내용을 입력해주세요."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="terms_area">
                                    <div className="user_chk_box1">
                                        <input type="checkbox" id="chk"/>
                                        <label for="chk">개인 정보 수집 및 이용 동의 <i>*</i></label>
                                    </div>
                                    <div className="terms_box">
                                        이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 
    하기 목적 이외의 용도로는 사용되지 않습니다. 

    ① 개인정보 수집 항목 및 수집·이용 목적 가) 수집 항목 (필수항목) - 성명(국문), 주민등록번호, 주소, 전화번호(자택, 휴대전화), 사진, 이메일, 나이, 재학정보, 병역사항, 외국어 점수, 가족관계, 재산정도, 수상내역, 사회활동, 타 장학금 수혜현황, 요식업 종사 현황 등 지원 신청서에 기재된 정보 또는 신청자가 제공한 정보 나) 수집 및 이용 목적 - 하이트진로 장학생 선발 전형 진행 - 하이트진로 장학생과의 연락 및 자격확인 - 하이트진로 장학생 자원관리 ② 개인정보 보유 및 이용기간 - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지 ③ 동의거부관리 - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 장학생 선발 과정에 있어 불이익이 발생할 수 있음을 알려드립니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pop_btn_wrap">
                            <div className="btn_box">
                                <button type="button" className="btn_type4">제휴 문의 신청</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn_pop_close" onClick={closePopHandler}>팝업닫기</button>
                </div>
            </div>
        </div>
    </>);
};

export default InquirePop;