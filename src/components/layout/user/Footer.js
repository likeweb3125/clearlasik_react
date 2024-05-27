import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import f_logo from "../../../images/user_images/f_logo.png";

const Footer = (props) => {
    const common = useSelector((state)=>state.common);
    const [info, setInfo] = useState({});

    useEffect(()=>{
        setInfo(common.siteInfo);
    },[common.siteInfo]);


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
                            {info.c_address &&
                                <li>
                                    <span>본사 : {info.c_address}</span>
                                </li>
                            }
                        </ul>
                        <ul>
                            {info.c_tel && 
                                <li>
                                    <span>TEL. {info.c_tel}</span>
                                </li>
                            }
                            {info.c_fax && 
                                <li>
                                    <span>FAX. {info.c_fax}</span>
                                </li>
                            }
                            {info.c_email && 
                                <li>
                                    <span>E-MAIL. {info.c_email}</span>
                                </li>
                            }
                        </ul>
                    </address>
                </div>
                <div className="f_util_wrap">
                    <p className="copy">Copyright ⓒ 2018 Kisan all rights reserved.</p>
                    <p className="copy">FEMTO Z8의 허가증 상 정식명칭은 FEMTO LDV Z8 등이며, 안구 조직의 절개, 파괴, 제거를 목적으로 매질로서 반도체를 이용하는 안과용 레이저 수술기입니다. 이 제품은 ‘의료기기’이며, ‘사용상 주의사항’과 ‘사용방법’을 잘 읽고 사용하십시오. <br/>| 심의번호 000000--000-00-0000 (유효기간 YYMMDD)</p>
                </div>
                {info.c_tel &&
                    <div className="f_tel">
                        <span>대표전화</span>
                        <strong>{info.c_tel}</strong>
                    </div>
                }
                
            </div>
        </footer>
    </>);
};

export default Footer;