import f_logo from "../../../images/user_images/f_logo.png";


const Footer = (props) => {

    //탑버튼 클릭시
    const onTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return(<>
        {!props.main &&
            <div className="btn_sub_wrap">
                <button type="button" className="btn_top" onClick={onTopHandler}>탑버튼</button>
            </div>
        }

        <footer id="footer" className="footer">
            <div className="footer_inner">
                <div className="site_info">
                    <div className="f_logo">
                        <img src={f_logo} alt="기산과학"/>
                    </div>
                    <address>
                        <ul>
                            <li>
                                <span>㈜기산과학</span>
                            </li>
                            <li>
                                <span>본사 : 서울시 용산구 장문로9길 25 (동빙고동 1-39번지)</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>TEL. 02)2272-9823</span>
                            </li>
                            <li>
                                <span>FAX. 02)2279-1799</span>
                            </li>
                            <li>
                                <span>E-MAIL. kisantech@kisantech.co.kr</span>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="f_util_wrap">
                    <p className="copy">Copyright ⓒ 2018 Kisan all rights reserved.</p>
                </div>
                <div className="f_tel">
                    <span>대표전화</span>
                    <strong>02-2272-9823</strong>
                </div>
            </div>
        </footer>
    </>);
};

export default Footer;