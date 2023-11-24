import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './components/layout/user/Layout';
import Main from "./pages/user/Main";
import Clearlasik from './pages/user/Clearlasik';
import Ziemer from './pages/user/Ziemer';
import News from './pages/user/News';
import Paper from './pages/user/Paper';
import BoardDetail from './pages/user/BoardDetail';
import Hospital from './pages/user/Hospital';



import AdminLogin from './pages/admin/Login';
import AdminLayout from './components/layout/admin/Layout';
import AdminMain from './pages/admin/Main';
import AdminMenuCategory from './pages/admin/MenuCategory';
import AdminBoard from "./pages/admin/Board";
import AdminBoardDetail from "./pages/admin/BoardDetail";
import AdminBoardWrite from "./pages/admin/BoardWrite";
import AdminDesignPopup from "./pages/admin/DesignPopup";
import AdminSettingSiteInfo from "./pages/admin/SettingSiteInfo";
import AdminSettingPolicy from "./pages/admin/SettingPolicy";
import AdminMaint from "./pages/admin/Maint";
import AdminMaintDetail from "./pages/admin/MaintDetail";
import AdminMaintWrite from "./pages/admin/MaintWrite";
import Popup from './components/popup/Popup';
import './css/default.css';

import bg_magazine1 from "./images/user_images/bg_magazine1.png";
import bg_magazine2 from "./images/user_images/bg_magazine2.png";


function App() {
    const popup = useSelector((state)=>state.popup);
    const etc = useSelector((state)=>state.etc);
    const location = useLocation();

    
    //페이지이동시 스크롤탑으로 이동 (상세->목록으로 뒤로가기시 제외)
    useEffect(()=>{
        if(!etc.detailPageBack){
            window.scrollTo(0,0);
        }
    },[location]);


    //관리자단 하위카테고리 설정저장시 새로고침
    useEffect(()=>{
        if(popup.adminCategoryPopModify){
            window.location.reload();
        }
    },[popup.adminCategoryPopModify]);


    return(
        <div>
            <Routes>
                {/* 사용자단---------------------------------------------- */}
                {/* 메인 */}
                <Route path="/" element={<Layout main={true}><Main /></Layout>} />

                {/* 클리어라식 */}
                <Route path="/clearlasik" element={<Layout><Clearlasik /></Layout>} />

                {/* 지머 */}
                <Route path="/ziemer" element={<Layout><Ziemer /></Layout>} />

                {/* 매거진 - 뉴스 */}
                <Route path="/news" element={<Layout board={true} boardTopData={{loca:"뉴스",txt:["지머의 다양한 소식을","먼저 만나 보세요."],img:bg_magazine2}}><News/></Layout>}/>
                {/* 매거진 - 뉴스 상세 */}
                <Route path="/news/:board_category/:board_idx" element={<Layout><BoardDetail /></Layout>} />

                {/* 매거진 - 논문 */}
                <Route path="/paper" element={<Layout board={true} boardTopData={{loca:"논문",txt:["기술혁신을 통해 놀라운 변화를 추구하는","클리어 특허 논문을 확인하세요."],img:bg_magazine1}}><Paper/></Layout>}/>

                {/* 클리어병원찾기 */}
                <Route path="/hospital" element={<Layout><Hospital /></Layout>} />
                {/* //사용자단---------------------------------------------- */}



                {/* 관리자단---------------------------------------------- */}
                {/* 로그인 */}
                <Route path="/console/login" element={<AdminLogin />} />

                {/* 메인 */}
                <Route path="/console" element={<AdminLayout><AdminMain/></AdminLayout>} />

                {/* ---- 메뉴관리 ---- */}
                {/* 카테고리관리 */}
                <Route path="/console/menu/category" element={<AdminLayout><AdminMenuCategory/></AdminLayout>} />

                {/* ---- 게시판관리 ---- */}
                {/* 게시글관리 */}
                <Route path="/console/board/post" element={<AdminLayout><Outlet/></AdminLayout>}>
                    <Route path=":board_category" element={<AdminBoard/>} />                            {/* 리스트 */}
                    <Route path="detail/:board_category/:board_idx" element={<AdminBoardDetail/>} />    {/* 상세 */}
                    <Route path="write/:board_category" element={<AdminBoardWrite write={true} />} />   {/* 작성 */}
                    <Route path="modify/:board_category/:board_idx" element={<AdminBoardWrite/>} />     {/* 수정 */}
                </Route>

                {/* ---- 디자인관리 ---- */}
                {/* 팝업관리 */}
                <Route path="/console/design/popup" element={<AdminLayout><AdminDesignPopup/></AdminLayout>} />
                
                {/* ---- 환경설정 ---- */}
                {/* 사이트정보 */}
                <Route path="/console/setting/site" element={<AdminLayout><AdminSettingSiteInfo/></AdminLayout>} />

                {/* 운영정책 설정 */}
                <Route path="/console/setting/policy" element={<AdminLayout><AdminSettingPolicy/></AdminLayout>} />


                {/* ---- 유지보수 ---- */}
                <Route path="/console/maint" element={<AdminLayout><Outlet/></AdminLayout>}>
                    <Route path="" element={<AdminMaint/>}/>                                        {/* 리스트 */}
                    <Route path="detail/:list_no" element={<AdminMaintDetail/>} />                  {/* 상세 */}
                    <Route path="write" element={<AdminMaintWrite/>} />                             {/* 작성 */}
                </Route>
                {/* //관리자단---------------------------------------------- */}

            </Routes>

            {/* 팝업 */}
            <Popup />
        </div>
    );
}

export default App;
