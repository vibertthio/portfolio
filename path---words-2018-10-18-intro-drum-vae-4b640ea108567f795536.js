webpackJsonp([0xff485dc947c9],{570:function(e,a){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>簡單介紹目前 Drum VAE 專案的進度</p>\n</blockquote>\n<h2 id="1-intro-前言"><a href="#1-intro-%E5%89%8D%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Intro 前言</h2>\n<blockquote>\n<p><a href="http://vibertthio.com/drum-vae-client-template/">demo website</a></p>\n</blockquote>\n<p>在看到 Magenta 的專案 MusicVAE 之後，我認為針對 Drum Pattern Generation Model 會是一個好的起始點。鼓的結構重複性高所以相對單純，目標設定在較短的結構開始（例如一到四個小節的長度），我猜想這樣的資料性質會讓各種 Generative Model 更容易抓到其內在的邏輯／性質。模型方向選定的是 VAE，希望能夠跟 MusicVAE 進行一些比較。</p>\n<p>另外一個重要的考量就是關於網站展示。在剛進實驗室時就有想過要利用 Web 當作媒介來讓別人更容易接觸現在 MAC Lab 在音樂機器學習裡面的成果，除了透過跟模型互動讓其他人更容易了解以外，也可以讓研究者更容易跟別人介紹自己的結果。若是建立起一套簡單、快速的系統，甚至直接的試驗一個模型各方面的效果。考慮到網頁前端展示的效果，利用鼓機的方式呈現也讓介面的互動性非常簡易，基本的功能只要單純的點擊就可以實現，例如開啟不同的節奏 pattern，或是在 VAE 的 latent space 裡面移動。而且之前已經有寫過網頁鼓機的經驗，只要將原本的結構加上後端的 server 和 model 就可以完成。</p>\n<h2 id="2-model-training-模型訓練"><a href="#2-model-training-%E6%A8%A1%E5%9E%8B%E8%A8%93%E7%B7%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Model Training 模型訓練</h2>\n<p>我使用的是 LPD 當作 dataset，前處理包括將有意義的片段取出、刪除音符過於稀少的資料，並將原本 84 個音高降低到只剩下 9 個音高，使用的方法是將鼓的音色歸類到主要的 9 種裡面（Kick、Snare、Open Hi-hat、Closed Hi-hat、 Low Tom、Mid Tom、High Tom、Crash、Cymbal）。會這樣處理的原因除了因為比較好 train 起來之外，就是降低整個資料的大小。最後處理完的量大約是有 300,000 個小節的資料，包含電子、搖滾、流行等十三種樂風（根據皓文提供的 tag list）。</p>\n<p>VAE 的架構中使用 GRU 所建構的 RNN，在 decoder 和 encoder 上面都有。選取 latent space 的維度為 32，是測試過效果最佳。維度太高的話會使得 encoder 在 latent space 的 output 分佈太過於分散，空洞的狀態會造成中間的地方 decode 會不像是真正的節奏。相反的，太低則會使得 reconstruction 的效果不佳。</p>\n<h2 id="3-website-architecture-網站架構"><a href="#3-website-architecture-%E7%B6%B2%E7%AB%99%E6%9E%B6%E6%A7%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Website Architecture 網站架構</h2>\n<p>這次小專案的最主要目的是要嘗試整套系統的建立，除了模型訓練之外，還包括如何建立 web server（後端 backend）與網頁（前端 frontend）。這次的架構非常簡單：在後端方面，使用一個 Python 建立的 server（使用 Flask 為 Framework）並將使用 Pytorch 訓練好的 model 放進去，在 193 上面開啟一個連接的 http port；另外在前端，採用基本的 React 加上 canvas 建立 UI，使用Tone.js 處理聲音的邏輯。最後就是由前端發一個 request 給後端，要求它時產生某個 latent vector 相應的 drum pattern 回傳，並由前端 render 畫面。</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 508px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.7244094488189%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABr0lEQVQoz51STUsCURSdovADtZKIqEWElG2Kdi2C6Ff0B/oRbVq5MmjRpqJFrVq0iILWRS0sqCwJsZnRGd+MkzPjG0fBDxDNub03faCWLTxwufdx7zvvnXcewxBgjIVyuQyVSgVKpRLQOpVCW0yvIIRZjuNAEASgmed5QOhtt2fCRIJfZ1lhM3L7EI5E7sPPsUTo8up+tSeyXC4XIhIfidQoxkZckqRYsViMkvWdIKBfpLIsL5FehM63BuXQNH2bqVar79ACy7KgXq/btaJopwwz4HQ4x+YHBv2zbl/ATQ7bgy5oNpsWQ434WkA+nwdyADQaDZv06fnlyusLDA0Nz034RxcmfcPBEV3XD+k87RN1YJqmvecbbYSqqgIx6KeZUbTzTsmFQuGA9mq1mj1vGIad2wjpN4nH4yCKInEX2fUnoUoJ+1qDbD6iSuhPIO8JLMtCMpm0c9sN/wJCyoXXO+1xOMcXHK7JIK0Rko7hH1BTmt2amYx6RmW6PVMrLs/08sziRj+RvN9tnhhqMdmstpPDeRljsy103RCvbx7XOt8wnZZWsGFynfOU4/VVPPkA+IkfSLvT/DoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1"\n        title=""\n        src="/portfolio/static/1-e7d4527a2266acfe4ab0938c7afeb728-ca5c6.png"\n        srcset="/portfolio/static/1-e7d4527a2266acfe4ab0938c7afeb728-e81bf.png 148w,\n/portfolio/static/1-e7d4527a2266acfe4ab0938c7afeb728-e7b54.png 295w,\n/portfolio/static/1-e7d4527a2266acfe4ab0938c7afeb728-ca5c6.png 508w"\n        sizes="(max-width: 508px) 100vw, 508px"\n      />\n    </span>\n  </span>\n  </p>\n<h2 id="4--usage-使用方法"><a href="#4--usage-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.  Usage 使用方法</h2>\n<p>進入畫面會看到 9 個不同的 drum pattern，每個都是由 96 個 timestep 組成一個小節，並且有九個不同的 track（代表大鼓、小鼓等）。中間的是一個隨機從 dataset 找出來的資料，也就是一個真實存在的 drum pattern，而旁邊的九宮格則是代表從 latent space 任意挑出來的兩個維度上的變化結果。換句話說，就是把中間資料點的 latent vector 對 32 個維度中的兩個進行些微的調變，再送到 Decoder 而得到的結果。預設會直接播最中間的節奏，可以透過滑鼠點擊啟動任意一個節奏。</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 87.47323340471092%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAAq0lEQVQ4y71URw6AMAzrm7rH/98FcqVUVZWUMMTByqCYYAeMtfaQ4Jzr8N6PmFI6QgjiPWZH+ARmN92d+vWEakLSjbD2rohZwhjjAOqcc88RcQYRxqCnnhCOkrvchHTtf5clsbXmsISllAHUtdaeI+IMcmhImqomJENWp2cN1Xs4m4Ia0xBmQzhS0eVVn8d7iKdCq9Zaj6Qh9ThNVWuzvs7rb/lqfT7/OUg4AdCVHSF4kevFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="2"\n        title=""\n        src="/portfolio/static/2-808a014589120a5f3d87194451de37c9-49017.png"\n        srcset="/portfolio/static/2-808a014589120a5f3d87194451de37c9-26e3d.png 148w,\n/portfolio/static/2-808a014589120a5f3d87194451de37c9-289fa.png 295w,\n/portfolio/static/2-808a014589120a5f3d87194451de37c9-49017.png 590w,\n/portfolio/static/2-808a014589120a5f3d87194451de37c9-c6fa4.png 885w,\n/portfolio/static/2-808a014589120a5f3d87194451de37c9-768a9.png 934w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<h4 id="1-滑鼠點擊"><a href="#1-%E6%BB%91%E9%BC%A0%E9%BB%9E%E6%93%8A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 滑鼠點擊</h4>\n<p>切換九種裡面的不同節奏，藉以觀察 latent space 中移動對於節奏造成的影響。舉例來說，有些維度可能會造成節奏的密度增加，也有可能會造成 shuffle 的效果。</p>\n<h4 id="2-空白鍵"><a href="#2-%E7%A9%BA%E7%99%BD%E9%8D%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 空白鍵</h4>\n<p>開始/暫停選定的節奏。</p>\n<h4 id="3-按鍵盤-←-→-↑-↓"><a href="#3-%E6%8C%89%E9%8D%B5%E7%9B%A4-%E2%86%90-%E2%86%92-%E2%86%91-%E2%86%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 按鍵盤 “←, →, ↑, ↓”</h4>\n<p>使中央節奏的 latent vector 沿著兩個選出來的維度進行移動。</p>\n<h4 id="4-按鍵盤-c"><a href="#4-%E6%8C%89%E9%8D%B5%E7%9B%A4-c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 按鍵盤 “c”</h4>\n<p>切換 latent space 變化的維度（隨機在 32 個裡面挑出兩種，若想要知道目前是哪兩種可以開 console 看）。</p>\n<h4 id="5-按鍵盤-r"><a href="#5-%E6%8C%89%E9%8D%B5%E7%9B%A4-r" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 按鍵盤 “r”</h4>\n<p>隨機切換中心點 latent vector 位置到 latent space 中其他的地方（會維持旁邊變化的維度）。</p>\n<h2 id="5-discussion-延伸與討論"><a href="#5-discussion-%E5%BB%B6%E4%BC%B8%E8%88%87%E8%A8%8E%E8%AB%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Discussion 延伸與討論</h2>\n<p>這個作品目前的意義可以從它跟 Magenta 的 MusicVAE 之間的比較來看起：首先，這是一個非小的 codebase。相對於 Magenta 是一個非常完整並且多功能的專案，包裝成一整個 JavaScript 的 library 也造成不容易閱讀。所以這個 Drum VAE 非常好學習跟參考。再來，整個網頁應用的架構也很單純，其他人可以把其中使用的 model 直接換掉加上修改一點點 API 就可以使用。最後是雖然目前的使用介面跟 Magenta 周邊的應用大致上類似，但是可以修改的彈性很高，之後也會加進一些更有用的資訊與有趣的互動。像是目前使用時，會不知道到底中心點在 latent space 的什麼位置，皓文建議可以可以加一個更廣範圍的 map 當作指引。</p>\n<p>另外，若玩一下子就可以發現，若是在 latent space 裡面移動久了，就會遇到其中 decode 出來不像是真正節奏的地方。因此，之後可能會嘗試放上其他 model 來比較，或是降低 timestep 的數量、增加小節數等實驗。</p>',frontmatter:{title:"Intro to Drum VAE"}}},pathContext:{slug:"/words/2018-10-18-intro-drum-vae/"}}}});
//# sourceMappingURL=path---words-2018-10-18-intro-drum-vae-4b640ea108567f795536.js.map