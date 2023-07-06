import { Fade } from 'react-awesome-reveal';
import {AiOutlineDownload} from 'react-icons/ai';

const Summary = () => {
    return (
        <div className="mt-20 md:px-20">
        <div className="relative">   
        <h1
         className=" text-6xl md:text-8xl opacity-10 text-center ">
         
         <Fade   delay={1e3} cascade damping={1e-1} className="text-orange-400">SUMMARY</Fade>
         </h1>
         <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">RESUME</h3>
         
        </div>


        <div className="main mt-20  grid grid-cols-1 md:grid-cols-2 gap-10"  >
        <div className="edu " data-aos="fade-up">
        <h2 className="text-2xl text-white font-bold">My Education</h2>
        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2020-present</p>
        <h2 className="text-2xl mt-4 font-bold text-white">Bachelor of Science</h2>
        <h3 className="text-red-400 mt-2">University Of Global Village</h3>
        <p className="mt-6">Computer science is the study of computation, information, and automation. Computer science spans theoretical disciplines to applied disciplines Though more ...</p>
        </div>
        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2016-2018</p>
        <h2 className="text-2xl mt-4 font-bold text-white">H.S.C</h2>
        <h3 className="text-red-400 mt-2">Govt Sayed Hatem Ali College</h3>
        <p className="mt-6">General science is science in it's basic and pure form. The science which deals with the things related to our day to day life. It includes basic Biology, ...</p>
        </div>

        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2014-2016</p>
        <h2 className="text-2xl mt-4 font-bold text-white">S.S.C</h2>
        <h3 className="text-red-400 mt-2">Durgapur High School</h3>
        <p className="mt-6">General science is science in it's basic and pure form. The science which deals with the things related to our day to day life. It includes basic Biology, ...</p>
        </div>
        </div>

        <div className="exper" data-aos="fade-down">
        <h2 className="text-2xl text-white font-bold">My Experience</h2>

        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2021-present</p>
        <h2 className="text-2xl mt-4 font-bold text-white">Mern Stack Developer</h2>
        <h3 className="text-red-400 mt-2">University Of Global Village</h3>
        <p className="mt-6">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. ... Express and Node make up the middle (application) tier.</p>
        </div>

        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2021-2022</p>
        <h2 className="text-2xl mt-4 font-bold text-white">Advance Networking</h2>
        <h3 className="text-red-400 mt-2">University Of Global Village</h3>
        <p className="mt-6">Networking, also known as computer networking, is the practice of transporting and exchanging data between nodes over a shared medium in an information system.</p>
        </div>

        <div className="border border-[#373a3d] rounded-md p-6 mt-4 bg-[#373a3d]">
        <p className="bg-orange-500 border border-orange-500 font-bold rounded-md p-1 text-white w-32 text-center">2023-present</p>
        <h2 className="text-2xl mt-4 font-bold text-white">Sentiment analysis and also opinion mining.</h2>
        <h3 className="text-red-400 mt-2">University Of Global Village</h3>
        <p className="mt-6">Sentiment analysis, also referred to as opinion mining, is an approach to natural language processing (NLP) that identifies the emotional tone behind a body ...</p>
        </div>
        
        </div>
        </div>

        <div className="mt-20 ">
        <h2  className="text-2xl text-white font-bold">
        <Fade   delay={1e3} cascade damping={1e-1} className="">My Skills</Fade>
        </h2>

        <div className="md:flex gap-20 mt-10 w-full">
       
    <div className="w-full " data-aos="flip-left">
    <div  className="mt-">
   <div className="flex gap-2">
   <img className="w-10" src="https://img.freepik.com/free-icon/html-5_318-698168.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais" alt="" />
   <h2 className="text-white font-bold text-xl">Html</h2>
   </div>
    <progress className="progress progress-warning  w-full  " value='90' max="100"></progress>
    </div>
    <div  className="mt-4">
    
    <div className="flex gap-2">
   <img className="w-10" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
   <h2 className="text-white font-bold text-xl">Bootstrap</h2>
   </div>
    <progress className="progress progress-warning  w-full  " value='80' max="100"></progress>
    </div>

    <div  className='mt-4'>
  
    <div className="flex gap-2">
   <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAS1BMVEX///8HttUAs9MAsdIAr9EArdD7/v7m9flkxt71+/3d8fdsyN9Zwtzq9/q75O/P7PSc2emr3euO0+U3vNiy4e2A0OR2zOHE5/FLwdsHoCXzAAADr0lEQVR4nO2a22KjIBCGA4NR8IQg6vs/6YJZ0zQVYVJxL5bvrjHWX2aYE7ndMplMJpPJZDKZTCaTyaC5r/yzp/eDqjSBwsKIrtTQX6ygHBvqIE/WP6uuvExCXxP28vwXJUzX4hoJTbGrYNNRpZfRVsyvYJOR2CgdOViFpwwyptSgICzBAVO6XdtEanCLkcgk9zpag5ORJmwYjAarYk6gIdYfnsD5KnqsBkLY2Sq4RmuIsAjHOY7cFoJSBgA0Ily4LweiJy6sicdDbXIwsuv7WRq9nz7eKA5VKI0KJ5N7Imgj+PYJt2ksJnoeLPhQSIyGkjo7qPb7p6KKcVavCgkMZQ1FCTQ7d8SkEs8eudeMLhgNN6tB7V7gU3gxwLQ/b5w1RYazntHBdy0ihoGW/PtNrXHbC7cQpuj8F8cIxwBqXt56noD67eSB6wMNdp1i9ioFu7uHrhvUAvC4ocFouAkTuB4hwumg8BrmGK4M7HngCyIufn63UODN8JRoDRQXLBOpSFGTR/rFBjt09V+oQDgGQyUNBFxHq/CE31NURITwh4ZU67DSQUxyL1JUwK+YYMkFzU46O5lyIkdGATJeMlERinqsYj+X6Zdho5tI8SaEQkHML5zhk6HUXah6sXWxq8wZEN1MQ/mZHbjoVF03jqqe5Nzi/g0vha3L57nvBfLOJ72s7Is8nd3mYVaQaQgl1BMRkuz2N7bzWbprdLRH24yCvmI5VCjgsONy7wQEjcgAxV4Tch4yLglRknAx4qcx6VIhZirFqjRZADeVokuKXRLpD18qElTM+KnU+SruH3QwVIcs0uJy91d77fq12KFUqLM2qIBSPjTYPEVqJaVqfKXJm4rjtnbEdb2VeyRl1fhcYKEOK7W/wNFOHQvvXGOPtaelb+c2XEZ0NLTxqhgoQ3muodbLfpZfbUT4oovnSQpojdFwY4Ttn1F0YReluxO6sgHkqH8Eby7gS8RU6sfBF5dWPHI8NzH/iRGPMQmpXiqueym1uwc35+fHXmxCh29Oht3ashNlKUbVwCo7sH3f6afj63FnHbYCZUXBnvEFN7C9BYtXbG5bNSErjvBulhEWedNAzs+xaBWhs47PVOAsAmkOaFEqWKqJ0FjEawhst1/Qx6TV1RbpJmOuQYxSAagEjqcLN2jgP3E6jeHYJhTUFVOp+7B4Kz8g9VU/q7n30878wv3QZ7jmJzWbjlk21CWrFWCMaTNeqmCj7QdppsmoYf5wLJbJZDKZTCaTyWQymcx/zB/HaCRjClsjcwAAAABJRU5ErkJggg==" alt="" />
    <h2 className="text-white font-bold text-xl">Tailwind</h2>
   </div>
    <progress className="progress progress-warning  w-full  " value='90' max="100"></progress>
    </div>

    <div  className='mt-4'>
   
    <div className="flex gap-2">
    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
    <h2 className="text-white font-bold text-xl">Javascript</h2>
    </div>
    <progress className="progress progress-warning  w-full  " value='80' max="100"></progress>
    </div>

    <div  className='mt-4'>
   
    <div className="flex gap-2">
    <img className="w-10" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
    <h2 className="text-white font-bold text-xl">Redux</h2>
    </div>
    <progress className="progress progress-warning  w-full  " value='10' max="100"></progress>
    </div>

    <div  className='mt-4'>
   
    <div className="flex gap-2">
    <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AbyUgWdCURTGs62QQAIJoKgI5C0BkwKgCCBKqGyEABREJABK/QsLQQHw9h8U0rASopCkoPS+na5bRq13e20dfnB993yf9849OsF6IpzEG9EkPoklseMs+VmTa5z8zs31SDwTNWJIbAmosOXaGr/7qNXcSpSJGQGNzHgP67XmEvFBKARuROG9JFHzF2JA4I8ZsN4qJWk2Fw8hXfrnMoF/Rj43Ew98WHAnytzzWD5iescAU+55fOvVSxfcbjfS6TQymQwkSbrY3OfzMa3f71cLUT3sCBcxvCBkDQ/V6/Xgcrl+1RYKBSwWCxSLRbUAX8ybr86tUABerVYLZrP5rDabzaLb7SKXy4lszFeC7W+IBBiPx5hMJlAUBaVSCXq9/kQbj8fRbreRTCZFZuGd0A0EA7DGqVQK6/Uaq9UKsVjsRBuJRFCv1xGNRkX3gm55TQCTyYRKpYJ9jUYjNnQ/tYFAAPl8HsFgUCAA89btRAN0Oh322S0WCwuzL1mWYbPZjlqv14tEIqH6Wji7qwMYDAZ25vF40O/32Xmj0YDRaGTndrsdoVAIDodDOMBSQwBGOBzGfD7HZrP5rr5qQTOEoihPi0UNouJABItG05pgE7EjJu26YDYKhvXeBMtX7GlgsRmX7PYoO+OuM98nwtiDWx+H+3N+0DQNGGMwDOPnTE3T5B7B51UAgiCgbVscx4F935EkCWhEiqJAkiTuJXxcBUAlyzKGYQC9dV3h+/4zlPw4J6ITAFSu62JZFtAjMKqqgtO6vXFQ8TkAqiiKQEu5bRvquoYoitxUzCVGVVUhTdNfP87zHPM8Y5omhGHILUa3yTF1h7o1jiO6roNt21xyfKshoflTt/q+R5ZlxA9chuRWS2ZZFoqiQFmWCIKAzvXUkt1uSh3HQRzHZEygaRqXKb3VlhMrkkZ4ngdd12l5uWz5rcGEWi/L8pckSR+CILz+STRjjL0zxl7+ZTi9Gs/rZ+L5N8AJA23K4ax1AAAAAElFTkSuQmCC" alt="" />
    <h2 className="text-white font-bold text-xl">Next js</h2>
    </div>
    <progress className="progress progress-warning  w-full  " value='20' max="100"></progress>
    </div>

    <div  className='mt-4'>
   
    <div className="flex gap-2">
    <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII=" alt="" />
    <h2 className="text-white font-bold text-xl">Github</h2>
    </div>
    <progress className="progress progress-warning  w-full  " value='50' max="100"></progress>
    </div>

    </div>


     <div className="w-full"  data-aos="flip-right">
     <div>
     <div className="flex gap-2">
     <img className="w-10" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
     <h2 className="text-white font-bold text-xl">MUI</h2>

     </div>
     <progress className="progress progress-warning w-full " value="80" max="100"></progress>
     </div>
     <div>
    
     <div className="flex gap-2">
     <img className="w-10" src="data:image/png;base64,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" alt="" />
     <h2 className="text-white font-bold text-xl">React</h2>

     </div>
     <progress className="progress progress-warning w-full " value="70" max="100"></progress>
     </div>
     <div className="mt-4">
     <div className="flex gap-2">
     <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AaXUA6wsXRbF8f9e+1T3M8a2PRMnY9u2bdvh2LatYKxgbHvu430v1+yurnP2V5X7zP5er+S3yj4pcYF58Tcee8+Xfv1J/3nu5x77z8d/6KF3bnEhNO6OL//Bo73Fi775iOu+9FuP/VPy9C0zrrGpX127n9J3elX1217l12yxY9Pm1GIcGnfHtQOemzo+VlXV32W6ERAcyabNvRIlbi6lfyfzDzYlNy3GoXF28suuvaC6zChL9lgDIACMI+kll7tRSglMTzJZLbdntTivc268/PLtqysMDkt6sxkiOGMC6Pd7lFwsRyHCKrB3ynTAzG7d4mx04kK50rS3yJeduTqXX/ipJ/3AjEsDwXniEsmdyIWNmyACLu+mn0j6IcSVW/R6lbc4Sl3tOTRnLfb/tp8pek+q+K+JWwGFjRjnSwTtuckREKWbWpSgRBRht0sp7UnJ31ZKzi0grIW6utaVLxPej/te4RbD2sTTT3hiMWYCwIzkTs5BlEKOoESoBYUw9FyT1j3pHiaihbraPzOzPUb6Ur2sygSAcSEJcBclglLKkSnktiLCSkAy3/Snqakvf/+vv9/883/+3dQWkW1TT96s7OuBBZNGshPeQiEK5AgEHF5cYHF11S69eVefMFNbuHt4UtBUDGYrzJkoZkYhKCUgygnzwZ6Zw0gqa/UggBBA5enIKDbWp/tQgGCyBDS5UErQMRPTCwuMRiMqE47RUVdmIDnuwoqzdriHeTBpcsnkHJTINLnhwMI8pgQYwo5Mu5Lh3hGeRD3Xo4yMSdPkTFMKhHF4aYEcGTMDEzmMwFBXKQnJsCM3InOGsz006VswGNRD6iazuLZCksCgIxcmQ10FILFxcbUSNEsVzVCYTXR9mmiYW1kEcyTHMXTCdnUlceRuQILkYtDU/PMfs3Tzk8WoI9OXcBPyhJQ25uWoKyxAHcNaEkwvz7AwV7OwMEQyJkkQjCJTuajM8JZMOEJdkQpSgAVyY251hUE9IiVjz/8XkYwgJngHxrAZITNcRnLRT06VhLoqyq2CPAhrODA3S5IwMxaXhszOruESkyQiWBvVVJ5IZhjgBuoqR6FRA1Vh/+z8xr+bjaQk/vPfeSJi4r/j+mhIUwquRPKEW0Jd1RqQbcTyYJ2Z+eXTnnZ9fcSBQ8u424Q3AcvDNZI7ddMgqSPW88ByGtnBQ4voDK+6qsTU3jlyDjAmGguj3HRvwq6w/VIkc9RVunRdz82v9tdXM2Zn+n7QNIU9++dx18SfYnGwWi2OVpq59UXU1exvqsX5/fmxcs6a5GLqwBzDusHMJr2JRx9anl+tSw61xcpyY2WoT970Zf8TxmdOfHhOjMG/pg5f3LcQHInMPtUyIj7b5MZaqCttytHiD2+8hmjskebcAPgzYCeexCWmZ5dZHdQX58Jm8Cc3v55benTdNN6ilIgW6uqohia3GNX5b03ON0bcF1g/4UZwGf+Ymh7nF23AALjvlqp/k91btv2jxRV2Xiq3OEpdnc1ltuz+xmW27d6C8YYTvh9zSyvMLa5iGOfIG3qpt3nHpq3faHE26up8rnXJK72aS416GF8DSO78fc8BJOPEx4UgIr661Kz11m346hbno3F2+vfKlLG/nxno/njcAmPP2nDI9PwCkgAoEXtaN3fZA3b6ltxiHBpnpxvsukbc4KpXLmzNhvE7PK4qt0f85+D0qESpcykPN3HVque/D8LaaWkxjosAqoYXqu5e6SUAAAAASUVORK5CYII=" alt="" />
     <h2 className="text-white font-bold text-xl">Node Js</h2>


     </div>
     <progress className="progress progress-warning w-full " value="60" max="100"></progress>
     </div>
     <div className="mt-4">
     
     <div className="flex gap-2">
     <img className="w-10" src="data:image/png;base64,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" alt="" />
     <h2 className="text-white font-bold text-xl">Express js</h2>

     </div>
     <progress className="progress progress-warning w-full " value="50" max="100"></progress>
     </div>
     <div className="mt-4"> 
     <div className="flex gap-2">
     <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADoElEQVR4Aa1XA5AlMRDtMtfe/TNrzPy1z7Zt21euY/ls+658VzrbxbNt23auX+Vvzf5VskjVq8mkO3mdTndA2sVlJ5CZ2o+i05aSYR/j/7tkul8DqKMNMuhAl2qsGKm5jA1kuO9TTJqgmHTBRIzUEpAy6ECXDVqPvlTlEpkTzLObTab9tYiU/3XgGGNaX/h/FkUmBVNlCncu4M6nKUbOtFwilw2UL0dfjGGmnKIYu0DT5VZ9crkfyBm4KyaPdgMVGwFgLIxppNdTr7dpP6YYhbujmDDcErSoDYA62lRGwBOPy4+LwARftvKccuYGIyBF0LD6gj4PB1BHG2RqIwz7LLioVEGw6ARasCWobaGgewMFfRkOoI42yNT9JcdM8irR6dns+m8VBhwAV1s8i6M9BP0cIejtUAB1tEEGHYUB4ACXlV3MAM5zpettQSHs5unNBX1nwncgl0AdbZBBB7oaS7G+KPDi2aKnSvdH8KAZmYLO9hH0bTiIvYA2yKADXfUy2E/ITIsjbJ1aax/EM5vYWNCnYYLeM+TMAdTRBhl0oKsZC1Y/4jxerpV2Lv5u7+q99q8Zr4Z4x8K2Lh59hQHgBDcZ9nGlB8IsQTlZ3u5/z3jA0X9rgOOR7yw72VtQZqY6GMGJA4ytvauM/mB2afN8QXcHIO8dl1/pJwk/eAyA7EZ/QQ1zORh1ssG6g/x/q2/AQCbxkH3k78legvZ3x9pX0QD3G30DWrIB94oZANLDTL65E9eHOwbcZAMa6RugtwShPFi9HEFXefCvxch2cFCuaSd3Q7RBdqmvoMJs9NFcAnUQOscuCH95sgCkmP2yto5RLHOywNYKQr00BAKSBU1uKskQgPhu6iBoYWvvtilNpa6pl4b6GxHSKo9T8VxfSQSsZPfPaYXUBCCDDnT1NyJsxeyuZ0ojDM9uOKqhdD82neEdAa6PlDEBGXQMDXJs/9iKUbhxo+Iwcs6DGP5u4bUXox0DxBi0QaY+BwBw4QAsKmxJDm+d3xXZ4OyKqRmC9nZzDNjNwWmnQwYd7eNYcSFRpGV8mvQCkJKOY1j/xgyuUiWwwJcF57WWAvBLdgzw1Yh653J6DleyCi6lKbiU6nlBGoC6Vtrhwqt+rBhp+tfyrEwJ7Wu5VV/3YVLI1p5RPEwQ8YD6YYJHDh47lSrhWSHVfpqhL8bAM6/KxXDnYZ+ACyv1OEWeo2+NFZeViK2TiZbhAON1v4fjFEAdbZBBpzLP8//gWaNQ3aj4mQAAAABJRU5ErkJggg==" alt="" />
     <h2 className="text-white font-bold text-xl">MongoDb</h2>


     </div>
     <progress className="progress progress-warning w-full " value="60" max="100"></progress>
     </div>

     <div className="mt-4"> 
     
     <div className="flex gap-2">
   <img className="w-10" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="" />
   <h2 className="text-white font-bold text-xl">Firebase</h2>
   </div>
     <progress className="progress progress-warning w-full " value="50" max="100"></progress>
     </div>

     <div className="mt-4"> 
     
     <div className="flex gap-2">
     <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqUlEQVR4Ae1XA7dkPRC8/+Kz7afPtu21bdu2bdv27rNt27ZubepMes7D7Ky9fU6fZIKuSqeSuTEcxkUajkPdJykvUg6HYR6mKk3HYR64ke5giWmqEhprkvMkH8NwUBUNDAJb6zfBLeCKhK4TmwSKdGc9O5Qrpjc6A3TGJbg7iKUxi0gABGQpqb+ZTgySYCaIaci+aIa4RW7FNLQ4bikBB73FxGYGcDv9AYEHBO5cAjyn13TVNpnrRB/O0nZsw1aQBoGuymWOswZ8c4g7XhvkhlcHurHk74Y4NycDXO3LA1zxykBXfDjGCz/N8McfcwLx/VQ/vDfKC28MbkTWNgEGYYD5R5MQnVEGv4RiBCYWIyipBMHJFmedbX7xxYjJLMO0/QkE5mrRdkkIToXmIae4GhXVdaiqqUdZVR3ySqqx/FQKSdjXAFP4Yj9XnAjOxZXaXt9sPNztLIZtjYY9I/GGW2E7A8OYATfMPJjIVcI1qgAXIguQWVgFsdT8SpyPKGAfM4Jxu+KYORSU1UAsMacCcw4nYvSOWMxSsXziitScfLw1xLoN9kX4lirf1IOf73cBe32yILb2XBqe7nXeOufF/q7otDwMNNM0UV9v4o/ZgXi8xzm8pLbmmd7n8fpgN3yrtMAMX5UIOeElBbBPpVls3fk0PNfnAlxGWPvReYWFAMFpE/fE4fm+F/C6OgHvjPTkONbtiNAegQGXJiBH7pNx3tYtEBKHAnLQcmEwxUlhc7xk+UpuQvsZeFYTaDhm5PYYiNVpEjQ3pZX/FwRzDLVy4wmIeHkUe62JQFxWOcQkG6YqBm2KYizGvLEEZEX8LQADNkRS+aDV1pmglVTU4qtJvnhDCdLpRhEQcAZ9TQvOSc/h3vNCa0hi2JZoipNxb1wG5Ij9rK5eHjmO53knEG++YrVysXG7YvFcX8tc+Si1+0nuZIvAOSGgCep7gKdg9dk0Hkn8NiuAwsMur6xGomyzJMRUWmFc09BPMbC81gywnwHbLwtFQ6usqRMBivF6510gWKYh4CyZjWvJAMXEvWf6YzLLZaViVvFtcs2gPkzeGfI2aPI00x02ssFJBGi3NBTtlX8/zU/+1ThXxihCnvh3fhCPG8bujMUodS90WxWOzyf6mOq6JjgJ13MOseVxqp9NBHe/5H8DV8lU0ym6huAN/z94473Q7wKFRhEyezwh+uzLq0g/Tp0mBxuskI1yGWDa/NjQeqA7CaiNq9tJjxF9CLCAa6xJzpNDjIuEJY0NJaLCJgAAAABJRU5ErkJggg==" alt="" />
     <h2 className="text-white font-bold text-xl">Typescript</h2>

     </div>
     <progress className="progress progress-warning w-full " value="30" max="100"></progress>
     </div>
     </div>


        </div>
       
       
        </div>

        <div className="mt-20">
        <h2  className="text-2xl text-white font-bold">
        <Fade   delay={1e3} cascade damping={1e-1} className="">My Special Skills</Fade>
        </h2>
 

        <div className="md:flex gap-20 items-center mt-10"
        data-aos="fade-up">
        
        <div className="w-full">
        <Fade   delay={1e3} cascade damping={1e-1}  className="text-xl md:text-5xl text-orange-500 font-bold ">My Special Skill Field Here.</Fade> 
       <a href="https://drive.google.com/file/d/1boOhd9oNDLZrJnMXh8EbydnRiQO0KDHS/view?usp=sharing" target="blank">
       <button className=" mt-10 text-white rounded-full border font-bold md:px-8 p-4 md:p-6 border-gray-700 flex items-center justify-center w-62 hover:bg-[#373a3d]">Get Cover Letter
       <AiOutlineDownload className='ml-4'></AiOutlineDownload>
       </button>
       </a>
        </div>
        <div className="w-full">
        <div className="mt-6  border border-[#282b2b] p-4 md:p-8 bg-[#282b2b]"> 
       
        <div className="flex gap-2">
     <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMJbXfNiKKp0YCVebB5L03jBIUFWMvS87nhMWiYyFLe1llGTUQMP2yTjktQEB3o8si5U&usqp=CAU" alt="" />
     <h2 className="text-white font-bold text-xl">Communication</h2>

     </div>
        <progress className="progress progress-warning w-full " value="50" max="100"></progress>
        </div>
        <div className="mt-4  border border-[#282b2b] p-8 bg-[#282b2b]"> 
        <div className="flex gap-2">
        <img className="w-10" src="https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-leadership-logo-puzzle-people-vector-png-image_5530416.png" alt="" />
        <h2 className="text-white font-bold text-xl">Leadership</h2>

   
        </div>
        <progress className="progress progress-warning w-full " value="70" max="100"></progress>
        </div>
        <div className="mt-4 border border-[#282b2b] p-8 bg-[#282b2b]"> 
        <div className="flex gap-2">
        <img className="w-10" src="data:image/png;base64,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" alt="" />
        <h2 className="text-white font-bold text-xl">Teamwork</h2>

   
        </div>
        <progress className="progress progress-warning w-full " value="90" max="100"></progress>
        
        </div>

        <div className="mt-4 border border-[#282b2b] p-8 bg-[#282b2b]"> 
        <div className="flex gap-2">
        <img className="w-10" src="data:image/png;base64,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" alt="" />
        <h2 className="text-white font-bold text-xl">Flexibility</h2>


   
        </div>
        <progress className="progress progress-warning w-full " value="80" max="100"></progress>
        </div>
        
       
     </div>
        </div>
        </div>
        </div>
    );
};

export default Summary;