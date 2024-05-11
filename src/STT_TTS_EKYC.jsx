import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div class="w-auto">
            <section>
                <h2 class="flex flex-row items-center justify-center pt-36 pb-20 text-3xl text-blue-900 font-medium">FPT.AI Speech To Text, Text to Speech & FPT AI EKYC</h2>
            </section>
            <section>
                {/* Speech To Text */}
                <div class="my-10 grid grid-cols-2">
                    <div class="h-full ml-36">
                        <h1 class="text-4xl">FPT.AI Speech To Text</h1>
                        <p class="text-lg py-5">Quickly and accurately convert Vietnamese voice and audio into text</p>
                        <p class="pl-14 pt-2 text-lg text-white"></p>
                        <NavLink to="/Speech_to_Text"><button class="font-medium text-xl h-14 w-44 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 hover:from-blue-400 hover:to-cyan-400">GET STARTED</button></NavLink>
                    </div>
                    <div class="h-full flex justify-center items-center">
                        <img src="https://fpt.ai/sites/default/files/2019-11/automatic-language-recognition.jpg" alt="" width="50%" height="100"></img>
                    </div>
                </div>

                {/* Text to Speech */}
                <div class="my-10 grid grid-cols-2 ">
                    <div class=" h-full flex justify-center items-center">
                        <img src="https://fpt.ai/sites/default/files/2019-11/featured1_4.png" alt="" height="100"></img>
                    </div>
                    <div class="h-full  ml-36">
                        <h1 class="text-4xl">Text to Speech</h1>
                        <p class="text-lg py-5">Convert text into Vietnamese voice</p>
                        <p class="pl-14 pt-2 text-lg text-white"></p>
                        <NavLink to="/Text_to_Speech"><button class="font-medium text-xl h-14 w-44 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 hover:from-blue-400 hover:to-cyan-400">GET STARTED</button></NavLink>
                    </div>
                </div >

                {/* FPT AI EKYC */}
                <div class="my-10 grid grid-cols-2" >
                    <div class="h-full ml-36">
                        <h1 class="text-4xl">FPT AI EKYC</h1>
                        <p class="text-lg py-5">Onboard new customers in a safer, easier and cost-effective way</p>
                        <p class="pl-14 pt-2 text-lg text-white"></p>
                        <NavLink to='/Ekyc_Vi'><button class="font-medium text-xl h-14 w-44 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 hover:from-blue-400 hover:to-cyan-400">GET STARTED</button></NavLink>
                    </div >
                    <div class="h-full flex justify-center items-center">
                        <img src="https://fpt.ai/sites/default/files/2020-06/ekyc-11_1.png" alt="" height="100"></img>
                    </div>
                </div >
            </section>
        </div>
    );
}

export default App;