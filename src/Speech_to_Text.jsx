import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <section>
                <div class="my-10 grid xl:grid-cols-2 w-screen sm:grid-cols-1">
                    <div class="h-full w-full">
                        <div class="mx-10 h-2/3 w-full bg-white p-5">
                            <h1 class="m-10 text-left font-sans text-5xl font-bold text-blue-600">Quickly and accurately convert Vietnamese voice and audio into text</h1>
                            <button class="mx-10 xl:text-xl sm:text-sm xl:h-14 sm:h-10 xl:w-44 sm:w-32 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400">GET STARTED</button>
                            <button class="boxed-wrap boxed-wrap-blue mx-10 xl:h-14 sm:h-10 xl:w-56 sm:w-40 xl:text-xl sm:text-sm text-blue-600">REQUEST A DEMO</button>
                        </div>
                    </div>
                    <div class="h-full w-full">
                        <div class="flex h-full w-full bg-white">
                            <div class="mx-10 h-full w-full bg-white p-5 shadow-2xl">
                                <button type="button" class="xl:relative xl:mb-0 left-5 h-14 xl:w-64 sm:mb-4 sm:w-full sm:items-center sm:justify-center rounded-sm bg-gradient-to-r from-cyan-400 to-blue-400 p-px hover:from-blue-400 hover:to-cyan-400">RECORD AUDIO</button>
                                <button type="button" class="xl:relative xl:mb-0 xl:left-20 h-14 xl:w-64 sm:mb-4 sm:w-full sm:items-center sm:justify-center rounded-sm bg-gray-200 p-px">Upload file audio</button>
                                <div class="xl:m-5 sm:mt-5 h-14 sm:relative sm:bg-center sm:bg-fixed sm:object-center bg-blue-900"></div>
                                <p class="m-5">Identified text</p>
                                <textarea class="m-5 border border-gray-300 box-border w-5/6 border-dashed" placeholder="Text"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-blue-700">
                <div class="flex flex-row xl:items-start sm:items-center xl:justify-start sm:justify-center">
                    <div class="mx-10 h-2/3 xl:w-1/2 sm:w-4/5 bg-blue-700 p-5">
                        <p class="pt-20 text-left sm:text-xl xl:text-2xl font-semibold text-cyan-500">Powered by deep learning and the speech recognition technology, FPT.AI Speech to Text (STT) service offers an easy-to-use cloud-based API for developers to transcribe spoken words into written words. The service can be integrated with various business applications.</p>
                        <p class="xl:flex sm:hidden pt-2 text-lg text-white">
                            <a href="https://www.youtube.com/watch?v=Hs8tEOwSlNE" target="_blank" class="font-medium">Watch Video <i class="material-icons">keyboard_arrow_right</i></a>
                        </p>
                    </div>
                </div>
                <div class="flex w-screen flex-row items-center sm:justify-center xl:justify-end p-10">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Hs8tEOwSlNE?si=EebSzRqRvRcakz-D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section>
                <h2 class="flex flex-row items-center justify-center pt-36 pb-20 text-3xl text-blue-900 font-medium">Why FPT.AI Speech To Text</h2>
                {/* Automatic language recognition */}
                <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse">
                    <div class="h-full w-3/6 ml-36">
                        <h1 class="xl:text-4xl sm:text-3xl">Automatic language recognition</h1>
                        <p class="text-lg py-5">Using the latest advanced neural network algorithms, FPT.AI STT delivers accurate and improved audio recognition over time, recognizing linguistic variants based on regional accents, ages and the use of non-native Vietnamese words</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://console.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class="material-icons">keyboard_arrow_right</i></a>
                        </p>
                    </div>
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2019-11/automatic-language-recognition.jpg" alt="" width="50%" height="100"></img>
                    </div>
                </div>

                {/* Automatic proper nouns transcription and punctuation */}
                <div class="xl:my-10 sm:my-0 grid xl:grid-cols-2 sm:grid-cols-1 w-screen">
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2019-11/automatic-proper-nouns-transcription-punctuation_0.jpg" alt="" width="35%" height="100"></img>
                    </div>
                    <div class="h-full w-3/6 ml-36">
                        <h1 class="xl:text-4xl sm:text-3xl">Automatic proper nouns transcription and punctuation</h1>
                        <p class="text-lg py-5">STT formats specific contextual results and can correctly transcribe proper nouns (such as proper names, names of place) and appropriate language formats (such as dates and phone numbers). Using machine learning technology, STT service automatically punctuates after each break.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://console.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class="material-icons">keyboard_arrow_right</i></a>
                        </p>
                    </div>
                </div>

                {/* Real-time or pre-recorded audio support */}
                <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-2 sm:flex-col-reverse">
                    <div class="h-full w-3/6 ml-36">
                        <h1 class="xl:text-4xl sm:text-3xl">Real-time or pre-recorded audio support</h1>
                        <p class="text-lg py-5">Audio input can be received directly from the microphone of the online application or sent from an audio file.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://console.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class="material-icons">keyboard_arrow_right</i></a>
                        </p>
                    </div>
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2019-11/real-time.jpg" alt="" width="70%" height="100"></img>
                    </div>
                </div>

                {/* Customization for enterprises*/}
                < div class="xl:my-10 sm:my-0 grid xl:grid-cols-2 sm:grid-cols-1 w-screen" >
                    <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
                        <img src="https://fpt.ai/sites/default/files/2019-11/enterprise.jpg" alt="" width="80%" height="100"></img>
                    </div>
                    <div class="h-full w-3/6 ml-36">
                        <h1 class="xl:text-4xl sm:text-3xl">Customization for enterprises</h1>
                        <p class="text-lg py-5">In addition to the multi-purpose voice recognition service, FPT.AI TTS provides a service channel that customize to enterprises’ needs.</p>
                        <p class="pt-2 text-lg text-white">
                            <a href="https://console.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class="material-icons">keyboard_arrow_right</i></a>
                        </p>
                    </div >
                </div>
            </section>

            <section class="p-10">
            <h2 class="flex flex-row sm:items-start xl:items-center sm:justify-start xl:justify-center pt-36 pb-9 xl:text-3xl sm:text-2xl text-blue-900 font-medium">Choose your package</h2>
                <div class="my-10 grid grid-cols-3">
                    {/* Trial */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
                            <h4 class="text-2xl font-medium py-7">Trial</h4>
                            <p class="pt-10 pb-2 text-sm font-medium">0 – 60 mins/month</p>
                            <p class="text-gray-400 pb-9 text-sm">No other charge</p>
                            <hr class="w-full"></hr>
                            <p class="pt-9 text-sm pb-10">No support</p>
                            <h2 class="text-3xl py-3">Free of charge</h2>
                            <button class="btn border-slate-300 font-normal m-3 py-3 px-12 w-52 border text-gray-400">CHOOSE PLAN</button>
                        </div>
                    </div>

                    {/* Business */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
                            <h4 class="text-between text-blue-800 font-medium py-7">Business</h4>
                            <p class="pt-10 pb-2 text-base text-blue-800 font-medium">&lt10.000 mins/month</p>
                            <p class="text-gray-400 pb-9 text-base">No other charge</p>
                            <hr class="w-full"></hr>
                            <p class="pt-9 text-sm pb-10">No support</p>
                            <h2 class="text-base text-gray-500 py-3">from VND <span class="text-4xl text-black">1,400,000</span> / month</h2>
                            <button class="btn border-blue-800 font-normal m-3 py-3 px-12 w-52 border text-blue-800">CHOOSE PLAN</button>
                        </div>
                    </div>

                    {/* Business premium */}
                    <div class="flex h-full w-full bg-white">
                        <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
                            <h4 class="text-2xl font-medium py-7">Business premium</h4>
                            <p class="pt-10 pb-2 text-sm font-medium">&gt 10.000 mins/month</p>
                            <hr class="w-full"></hr>
                            <p class="pt-9 text-sm pb-10">Business premium</p>
                            <h2 class="text-sm py-3">Contact</h2>
                            <button class="btn border-slate-300 font-normal m-3 py-3 w-52 px-12 border text-gray-400">CHOOSE PLAN</button>
                        </div>
                    </div>
                </div>
                <p class="flex flex-row items-center justify-center pt-14 pb-16 text-gray-300"><i>*Note: The above quotation doesn’t include: Taxes and other related cost/ fee & Software service development</i></p>
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
                                <h1 class="m-10 text-left font-sans xl:text-6xl sm:text-5xl xl:font-bold sm:font-thin text-blue-600 bg-transparent">Experience the best Vietnamese voice recognition service</h1>
                                <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium"><button class="mx-10 h-14 w-52 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400"><span class="text-black text-lg">GET STARTED NOW</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="px-20 pt-8">
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
        </div >
    );
}

export default App;