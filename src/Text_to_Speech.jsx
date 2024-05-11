import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <section>
        <div class="my-10 grid xl:grid-cols-2 sm:grid-cols-1 w-screen">
          <div class="h-full w-full">
            <div class="mx-10 h-2/3 w-full bg-white p-5">
              <h1 class="m-10 text-left font-sans xl:text-6xl sm:text-4xl font-bold text-blue-600">Convert text into Vietnamese voice</h1>
              <button class="mx-10 xl:text-xl sm:text-sm xl:h-14 sm:h-10 xl:w-44 sm:w-32 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400">GET STARTED</button>
              <button class="boxed-wrap boxed-wrap-blue mx-10 xl:h-14 sm:h-10 xl:w-56 sm:w-40 xl:text-xl sm:text-sm text-blue-600">REQUEST A DEMO</button>
            </div>
          </div>
          <div class="h-full w-full">
            <div class="flex h-full w-full bg-white">
              <div class="mx-10 h-full w-full bg-white p-5 shadow-xl">
                <textarea class="xl:mt-7 xl:ml-5 xl:mb-2 sm:mt-0 sm:ml-0 sm:mb-0  box-border h-32 xl:relative sm:items-center sm:justify-center xl:w-11/12 sm:w-full bg-gray-200 bg-center" placeholder="Text"></textarea>
                <select id="accent" name="accent" class="xl:flex xl:flex-row sm:relative items-center justify-center xl:mt-0 sm:mt-2 xl:ml-5 xl:mb-3 sm:ml-0 sm:mb-1 h-12 xl:w-11/12 sm:w-full bg-gray-200">
                  <option value="" selected>Northern Accent: Ban Mai Ace (female)</option>
                  <option value="1">Southern Accent: Minh Quang Ace (male)</option>
                  <option value="2">Northen Accent: Thu Minh Ace (female)</option>
                  <option value="3">Southern Accent: Linh San Ace (female)</option>
                  <option value="4">Southern Accent: Lan Nhi Ace (female)</option>
                  <option value="5">Northern Accent: Ban Mai (female)</option>
                  <option value="6">Northern Accent: Lê Minh(male)</option>
                  <option value="7">Northen Accent: Thu Minh (female)</option>
                  <option value="8">Central Accent: Mỹ An (female)</option>
                  <option value="9">Central Accent: Ngọc Lam (female)</option>
                  <option value="10">Central Accent: Gia Huy (male)</option>
                  <option value="11">Southern Accent: Lan Nhi (female)</option>
                  <option value="12">Southern Accent: Linh San (female)</option>
                  <option value="13">Southern Accent: Minh Quang (male)</option>
                </select>
                <select id="accent" name="accent" class="flex flex-row items-center justify-center xl:mt-0 sm:mt-2 xl:ml-5 mb-3 sm:ml-0 h-12 xl:w-11/12 sm:w-full bg-gray-200">
                  <option value="">Extremely slow speed</option>
                  <option value="1">Very slow speed</option>
                  <option value="2">Slow speed</option>
                  <option value="3" selected>Normal speed</option>
                  <option value="4">Fast speed</option>
                  <option value="5">Very fast speed</option>
                  <option value="6">Extremely fast speed</option>
                </select>
                <button type="button" class="xl:relative xl:mb-0 left-5 h-14 xl:w-64 sm:mb-4 sm:w-full sm:items-center sm:justify-center font-medium text-xl rounded-sm bg-gradient-to-r from-cyan-400 to-blue-400 p-px hover:from-blue-400 hover:to-cyan-400">GENERATE AUDIO</button>
                <button type="button" class="xl:relative xl:mb-0 left-20 h-14 xl:w-64 sm:mb-4 sm:w-full sm:items-center sm:justify-center rounded-sm bg-gray-200 p-px">Upload file audio</button>
                <p class="mt-3 ml-5 mb-11">To download audio files, please create an account and log in: <a href="https://voicemaker.fpt.ai/" class="hover:text-orange-500">https://voicemaker.fpt.ai/</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-blue-700">
        <div class="flex grid-cols-1 flex-row xl:items-start sm:items-center xl:justify-start sm:justify-center">
          <div class="mx-10 h-2/3 xl:w-1/2 sm:w-4/5 p-5">
            <p class="pt-20 text-left sm:text-xl xl:text-2xl font-semibold text-cyan-500">Applying speech synthesis and deep learning technology, FPT.AI Text to Speech (TTS) service enables developers to synthesize natural-sounding speech with a wide range of voice (male, female) and accents (Northern, Middle and Southern accent). The service is accessible in the form of APIs that is able to integrate easily with any system, across many applications and devices.</p>
            <p class="xl:flex sm:hidden pt-2 text-lg text-white">
              <a href="https://www.youtube.com/watch?v=BNgYJkATie8" target="_blank" class="font-medium">Watch Video <i class='fas fa-chevron-right'></i></a>
            </p>
          </div>
        </div>
        <div class="flex w-screen flex-row items-center sm:justify-center xl:justify-end p-10">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BNgYJkATie8?si=VTG-0K2iXhOkMJ49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      <section>
        <h2 class="flex flex-row items-center justify-center pt-36 pb-20 text-3xl text-blue-900 font-medium">Why FPT.AI Text To Speech</h2>
        {/* Natural voice with regional diversity */}
        <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse">
          <div class="h-full w-3/6 ml-36">
            <h1 class="xl:text-4xl sm:text-3xl">Natural voice with regional diversity</h1>
            <p class="text-lg py-5">FPT.AI TTS service provides natural voice response, automatic pause when reading long sentences, combined with expression. The product is developed exclusively for the Vietnamese market, based on the specialized voice research of each region in Vietnam. We currently provide over 7 different voices from different regions in Vietnam.</p>
            <p class="pt-2 text-lg text-white">
              <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class='fas fa-chevron-right'></i></a>
            </p>
          </div>
          <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
            <img src="https://fpt.ai/sites/default/files/2020-11/featured2_0.png" alt="" width="30%" height="100"></img>
          </div>
        </div>

        {/* Easy connection */}
        <div class="xl:my-10 sm:my-0 grid xl:grid-cols-2 sm:grid-cols-1 w-screen">
          <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
            <img src="https://fpt.ai/sites/default/files/2019-11/featured1_4.png" alt="" width="74%" height="100"></img>
          </div>
          <div class="h-full w-3/6 ml-36">
            <h1 class="xl:text-4xl sm:text-3xl">Easy connection</h1>
            <p class="text-lg py-5">You can send the text you want to convert to FPT.AI’s API or directly convert text into audio file on website and download as popular formats MP3, WAV,… You have access to the service without signing any contract.</p>
            <p class="pt-2 text-lg text-white">
              <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class='fas fa-chevron-right'></i></a>
            </p>
          </div>
        </div>

        {/* Quick Response */}
        <div class="xl:my-10 sm:my-0 xl:grid sm:flex xl:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse">
          <div class="h-full w-3/6 ml-36">
            <h1 class="xl:text-4xl sm:text-3xl">Quick Response</h1>
            <p class="py-5">FPT.AI's APIs can respond quickly to all customer requests and scale to meet the demand for unexpected system loads.</p>
            <p class="pt-2 text-lg text-white">
              <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium text-blue-900">Get started <i class='fas fa-chevron-right'></i></a>
            </p>
          </div>
          <div class="w-full h-full flex justify-center items-center xl:pb-0 sm:pb-5">
            <img src="https://fpt.ai/sites/default/files/2019-11/featured1_1.png" alt="" width="93%" height="100"></img>
          </div>
        </div>
      </section>


      <section class="p-10">
        <div class="my-10 grid grid-cols-3">
          {/* Free */}
          <div class="flex h-full w-full bg-white">
            <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
              <h4 class="text-2xl font-medium py-7">Free</h4>
              <p class="pt-10 pb-2 text-sm font-medium">100,000 characters/month</p>
              <p class="text-gray-400 pb-9 text-sm">No other charge</p>
              <hr class="w-full"></hr>
              <p class="pt-9 text-sm pb-10">No technical support</p>
              <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium"><button class="btn border-slate-300 font-normal m-3 py-3 px-12 border text-gray-400 w-52">CHOOSE PLAN</button></a>
            </div>
          </div>

          {/* Premium */}
          <div class="flex h-full w-full bg-white">
            <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
              <h4 class="text-between text-blue-800 font-medium py-7">Premium</h4>
              <p class="pt-10 pb-2 text-base text-blue-800 font-medium">Pay as actual usage</p>
              <p class="text-gray-400 pb-9 text-base">No other charge</p>
              <hr class="w-full"></hr>
              <p class="pt-9 text-sm pb-4">High speed of generation</p>
              <p class=" text-sm pb-10">No technical support</p>
              <h2 class="text-base text-gray-500 py-3">From VND <span class="text-4xl text-black">500,000</span> / package</h2>
              <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium"><button class="btn border-blue-800 font-normal m-3 py-3 px-12 w-52 border text-blue-800">CHOOSE PLAN</button></a>
            </div>
          </div>

          {/* Business */}
          <div class="flex h-full w-full bg-white">
            <div class="text-center mx-10 h-full w-full bg-white p-5 hover:shadow-2xl hover:cursor-pointer">
              <h4 class="text-2xl font-medium py-7">Business</h4>
              <p class="pt-10 pb-9 text-sm font-medium">Please contact us for more information</p>
              <hr class="w-full"></hr>
              <p class="pt-9 text-sm pb-10">Standard Technical Support</p>
              <a href="https://fpt.ai/contact" target="_blank" class="font-medium"><button class="btn border-slate-300 font-normal m-3 py-3 px-12 w-52 border text-gray-400">CONTACT NOW</button></a>
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
                <h1 class="m-10 text-left font-sans xl:text-6xl sm:text-5xl xl:font-bold sm:font-thin text-blue-600 bg-transparent">Are you ready to experience the best Vietnamese Text to Speech service?</h1>
                <a href="https://voicemaker.fpt.ai/" target="_blank" class="font-medium"><button class="mx-10 h-14 w-52 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-blue-400 hover:to-cyan-400"><span class="text-black text-lg">GET STARTED NOW</span></button></a>
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
