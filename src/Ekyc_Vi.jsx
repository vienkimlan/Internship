import logo from './logo.svg';
import React, {Suspense} from 'react'
import {useImage} from 'react-image'
import './App.css';

function App() {
    return (
        <div>
            <section>
                <div class="my-10 grid xl:grid-cols-2 sm:grid-cols-1 w-screen xl:pt-32 sm:pt-0 xl:pb-3 sm:pb-0">
                    <div class="h-full w-full">
                        <div class="mx-10 h-2/3 w-full bg-white p-5">
                            <h1 class="m-10 text-left font-sans xl:text-6xl sm:text-4xl font-bold text-blue-600">Xác thực nhanh chóng, dễ dàng, tối ưu chi phí</h1>
                            <button class="mx-10 xl:text-xl sm:text-sm xl:h-14 sm:h-10 xl:w-44 sm:w-32 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400">DOWNLOAD APP</button>
                            <button class="boxed-wrap boxed-wrap-blue mx-10 xl:h-14 sm:h-10 xl:w-56 sm:w-40 xl:text-xl sm:text-sm font-medium text-blue-600">TRẢI NGHIỆM</button>
                        </div>
                    </div>
                    <div class="h-full w-full">
                        <div class="flex xl:h-80 sm:h-full w-full bg-white">
                            <div class="w-full h-full flex justify-center items-center">
                                <img src="https://fpt.ai/sites/default/files/2020-06/ekyc_0.png" alt="" width="70%" height="100"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-blue-700">
                <div class="flex grid-cols-1 flex-row xl:items-start sm:items-center xl:justify-start sm:justify-center">
                    <div class="mx-10 h-2/3 xl:w-1/2 sm:w-4/5 p-5">
                        <p class="pt-20 text-left sm:text-xl xl:text-2xl font-semibold text-cyan-500">FPT AI eKYC cung cấp những thuật toán học sâu (deep learning) tối ưu nhất cho việc so sánh hình chụp chân dung trên các giấy tờ tùy thân như CMND/CCCD, bằng lái xe, hộ chiếu… với ảnh chụp khuôn mặt nhằm xác thực liệu người đó có phải chủ nhân của các giấy tờ trên, giúp doanh nghiệp rút ngắn thời gian xác thực khách hàng xuống còn vài giây thay vì hàng giờ như trước đây.</p>
                    <p class="xl:flex sm:hidden pt-2 text-lg text-white">
                        <a href="https://www.youtube.com/watch?v=Hs8tEOwSlNE" target="_blank" class="font-medium">Xem video demo <i class="material-icons">keyboard_arrow_right</i></a>
                    </p>
                    </div>
                </div>
                <div class="flex w-screen flex-row items-center sm:justify-center xl:justify-end p-10">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EMis6GC9Plw?si=SNslZPWIcM7lz-f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section>
            <h2 class="flex flex-row items-center justify-center py-36 text-3xl text-blue-900 font-medium">Tại sao chọn FPT AI eKYC?</h2>
                {/* Mang tới trải nghiệm nhanh chóng, tiện lợi và an toàn */}
                <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse">
                    <div class="h-full xl:w-3/6 sm:w-9/12 xl:ml-36 sm:ml-24">
                        <h1 class="xl:text-4xl sm:text-3xl">Mang tới trải nghiệm nhanh chóng, tiện lợi và an toàn</h1>
                        <p class="text-lg py-5">Tiết kiệm thời gian, chi phí, tối đa hóa nguồn lực và giảm thiểu sai sót, đáp ứng các yêu cầu cao về nghiệp vụ và bảo mật. Người dùng sẽ được hưởng lợi từ sự thuận tiện, nhanh chóng khi thực hiện giao dịch, với thời gian định danh chỉ mất vài giây, thời gian mỗi giao dịch được rút ngắn chỉ còn vài phút.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Bắt đầu <i class='fas fa-chevron-right'></i></a>
                        </p>
                    </div>
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2019-11/featured1_2.png" alt="" height="100"></img>
                    </div>
                </div>

                {/* Dễ dàng tùy chỉnh để phù hợp với giao diện sử dụng của doanh nghiệp */}
                <div class="xl:my-10 sm:my-0 grid xl:grid-cols-2 sm:grid-cols-1 w-screen">
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-why2_2.png" alt="" height="100"></img>
                    </div>
                    <div class="h-full xl:w-3/6 sm:w-9/12 xl:ml-36 sm:ml-24">
                        <h1 class="xl:text-4xl sm:text-3xl">Dễ dàng tùy chỉnh để phù hợp với giao diện sử dụng của doanh nghiệp</h1>
                        <p class="text-lg py-5">Tùy chỉnh quy trình xác thực dựa theo hành vi sử dụng của khách hàng.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Bắt đầu <i class='fas fa-chevron-right'></i></a>
                        </p>
                    </div>
                </div>

                {/* Xác thực đa kênh, đa nền tảng */}
                <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse">
                    <div class="h-full xl:w-3/6 sm:w-9/12 xl:ml-36 sm:ml-24">
                        <h1 class="xl:text-4xl sm:text-3xl">Xác thực đa kênh, đa nền tảng</h1>
                        <p class="text-lg py-5">FPT AI eKYC có thể dễ dàng tích hợp vào quy trình làm việc của bạn, hỗ trợ các nền tảng iOS, Android, API, SDK và webcam.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Bắt đầu <i class='fas fa-chevron-right'></i></a>
                        </p>
                    </div>
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-11_1.png" alt="" height="100"></img>
                    </div>
                </div>
            </section>

            <section class="p-10">
                <p class="text-blue-900 text-3xl pl-16 font-medium">Tính năng</p>
                <div class="my-10 grid xl:grid-cols-3 sm:grid-cols-1">
                    {/* Xác minh giấy tờ tùy thân */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-left mx-10 h-full w-full bg-white p-5">
                            <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-1.png" alt="" height="100"></img>
                            <h4 class="text-2xl py-3">Xác minh giấy tờ tùy thân</h4>
                            <p class="text-gray-400 pb-9">Tự động trích xuất dữ liệu cá nhân (thông tin, hình ảnh khuôn mặt) từ giấy tờ tùy thân với công nghệ OCR ứng dụng trí tuệ nhân tạo, hoạt động chính xác và đáng tin cậy, ngay cả với hình ảnh chất lượng thấp.</p>
                        </div>
                    </div>

                    {/* Phát hiện người thật */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-left mx-10 h-full w-full bg-white p-5">
                            <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-2.png" alt="" height="100"></img>
                            <h4 class="text-2xl py-3">Phát hiện người thật</h4>
                            <p class="text-gray-400 pb-9">Nâng cao tính bảo mật và trải nghiệm người dùng, chúng tôi cung cấp hai hình thức xác thực bao gồm Head-Movement và Video Liveness kết hợp với công nghệ chống giả mạo thân thiện với người dùng, hoạt động trên mọi thiết bị.</p>
                        </div>
                    </div>

                    {/* Kiểm tra độ trùng khớp */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-left mx-10 h-full w-full bg-white p-5">
                            <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-3.png" alt="" height="100"></img>
                            <h4 class="text-2xl py-3">Kiểm tra độ trùng khớp</h4>
                            <p class="text-gray-400 pb-9">So sánh khuôn mặt của người thật và ảnh trên các tài liệu nhận dạng để xác minh xem họ có phải là cùng một người hay không, nâng cao độ tin cậy và ngăn chặn các hành vi gian lận.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="my-10 grid grid-cols-1 bg-no-repeat bg-cover bg-fixed z-50">
                    <div style={{
                        backgroundImage: "url(" + "https://img.freepik.com/free-vector/sound-wave-background_52683-6667.jpg?w=2000&t=st=1711964094~exp=1711964694~hmac=23ec95c3ab38bed14c3391ea381a32679ff6ef79cf96f96fa787904737499f92" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div class="h-full w-screen">
                            <div class="mx-10 h-2/3 w-1/2 p-5">
                                <h1 class="m-10 sm:mr-0 text-left font-sans xl:text-6xl sm:text-5xl xl:font-bold sm:font-thin text-blue-600 bg-transparent">Rút ngắn thời gian định danh khách hàng với FPT AI eKYC</h1>
                                <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium"><button class="mx-10 h-14 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400"><span class="text-black text-lg">BẮT ĐẦU</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="p-20">
                <div class="my-10 grid xl:grid-cols-5 sm:grid-cols-2">
                    <div class="flex flex-col h-full w-full bg-white mx-10 p-5">
                        <div class="my-10 grid grid-cols-2 divide-x-2">
                            <div class="h-full w-full bg-white">
                                <a href="https://fpt.com.vn/" class="footer__logo">
                                    <img src="https://fpt.ai/sites/default/files/images/fpt-smart-cloud.png" alt=""></img>
                                </a>
                            </div>
                            <div class="h-full w-full bg-white">
                                <a href="https://fpt.ai/" class="footer__logo">
                                    <img src="https://fpt.ai/sites/default/files/images/fpt-ai.png" alt=""></img>
                                </a>
                            </div>
                        </div>
                        <ul>
                            <li class="text-gray-400">FPT Tower, 10 Pham Van Bach street, Cau Giay District, Hanoi, Vietnam</li>
                            <li class="menu-item"><a href="tel:1900 638 399">1900 638 399</a></li>
                            <li class="menu-item"><a href="mailto:support@fpt.ai">support@fpt.ai</a></li>
                            <li></li>
                        </ul>
                        <div class="h-full w-full bg-white">
                            <a href="http://online.gov.vn/Home/WebDetails/72991" class="footer__logo">
                                <img src="https://fpt.ai/themes/md_fpt/img/logoSaleNoti.png" alt="" class="w-32 pt-8 ml-auto mr-auto "></img>
                            </a>
                        </div>
                    </div>

                    <div class="flex h-full w-full bg-white mx-10 p-5">
                        <div class="h-full w-full bg-white">
                            <h5 class="font-medium to-blue-950">PRODUCTS</h5>
                            <ul class="ml-4 p-0 list-none text-left">
                                <li class="menu-item"><a href="https://fpt.ai/virtual-agent-call-center">FPT AI Engage</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/chatbot">FPT AI Chat</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/reader-en">FPT AI Read</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/ekyc">FPT AI eKYC</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/tts">Text to Speech</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/fpt-ai-enhance-en">FPT AI Enhance</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full w-full bg-white mx-10 p-5">
                        <div class="h-full w-full bg-white">
                            <h5 class="font-medium to-blue-950">ABOUT US</h5>
                            <ul class="ml-4 p-0 list-none text-left">
                                <li class="menu-item"><a href="https://fpt.ai/about-us">Why FPT.AI</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/contact-us">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full w-full bg-white mx-10 p-5 hover:cursor-pointer">
                        <div class="h-full w-full bg-white">
                            <h5 class="font-medium to-blue-950">DOCUMENTATIONS</h5>
                            <ul class="ml-4 p-0 list-none text-left">
                                <li class="menu-item"><a href="https://fpt.ai/virtual-agent-call-center">Conversation</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/chatbot">Text to Speech</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/reader-en">Speech to Text</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/ekyc">Reader</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full w-full bg-white mx-10 p-5 hover:cursor-pointer">
                        <div class="h-full w-full bg-white">
                            <h5 class="font-medium to-blue-950">TERMS</h5>
                            <ul class="ml-4 p-0 list-none text-left">
                                <li class="menu-item"><a href="https://fpt.ai/terms-conditions">Terms & Conditions</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/privacy-policy">Privacy Policy</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/information-website-owner">Information of Website Owner</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/general-transaction-terms">General Transaction Terms</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/terms-delivery-and-transaction">Terms for Delivery and Transaction</a></li>
                                <li class="menu-item"><a href="https://fpt.ai/conditions-payment-method">Conditions of Payment Method</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="contact-links">
                    <a
                        href="https://www.facebook.com/fptai.platform"
                        target="_blank"
                        class="btn contact-details"
                    ><i class="fa fa-facebook"></i></a>
                    <a
                        id="profile-link"
                        href="https://twitter.com/fpt_ai"
                        target="_blank"
                        class="btn contact-details"
                    ><i class="fa fa-twitter"></i></a>
                    <a
                        href="https://www.linkedin.com/company/fpt-ai/"
                        target="_blank"
                        class="btn contact-details"
                    ><i class="fa fa-linkedin-square"></i></a>
                    <a
                        href="https://www.youtube.com/channel/UC64g9GmKyG_N-xZHGFRITyQ/featured"
                        target="_blank"
                        class="btn contact-details"
                    ><i class="fa fa-youtube-play"></i></a>
                </div>
                <hr class="flex flex-row items-center justify-center align-middle divide-y w-full"></hr>
                <p class="text-gray-400">© 2020 FPT. All rights reserved.</p>
                <div class="flex flex-wrap justify-end">
                    <a href="https://fpt.ai/stt" target="_blank" class="btn contact-details">English</a>
                    <a href="https://fpt.ai/vi/stt" target="_blank" class="btn contact-details">Vietnam</a>
                </div>
            </footer>
        </div>
    );
}

export default App;