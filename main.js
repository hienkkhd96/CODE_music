
  var $ = document.querySelector.bind(document);
  var $$ = document.querySelectorAll.bind(document);
  const cd = $('.cd'); 
  const heading = $('header h2')
  const cdThumb = $('.cd-thumb')
  const audio = $('#audio');
  const playBtn = $('.btn-toggle-play');
  const player = $('.player');
  const progress = $('.progress');
  const nextBtn = $('.btn-next');
  const prevBtn = $('.btn-prev');
  const randomBtn = $('.btn-random')
  const repeatBtn = $('.btn-repeat');
  const cdWidth = cd.offsetWidth;
  const playlist = $('.playlist');
  


  const app = {
    currentIndex :0,
    isPlaying : false,
    isRandom : false,
    isRepeat : false,
    songs: [
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Tu Phir Se Aana",
        singer: "Raftaar x Salim Merchant x Karma",
        path: "./asset/music/NgayKhacLa-DenDJGiangPhamTripleD-5393909.mp3",
        image:
          "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      },
     
      {
        name: "bai cuoi",
        singer: "Raftaar x Fortnite",
        path: './asset/music/GieoQue-HoangThuyLinhDen-7125031.mp3',
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
      }
    ],
    
    render: function(){
      const htmls = this.songs.map((song,index) =>{
        return `
        <div class="song" data-index = ${index}>
            <div class="thumb" style="background-image: url('${song.image}')" >
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      `
      })
      playlist.innerHTML= htmls.join('');
    },
    /// dinh Nghia thuoc tinh Object
    
    defineProperties : function (){
      Object.defineProperty(this,'currentSong',{
        get: function (){
          return this.songs[this.currentIndex]
        }
      })
    },
    handleEvent:function(){
      const _this = this;
      /// when cd rotated
      const cdThumbAnimate = cdThumb.animate([
        {transform: 'rotate(360deg)'}
      ],
        {duration:10000,
        iterations: Infinity}
      )
      cdThumbAnimate.pause()
      
      /// when scolltop
      document.onscroll = function(){
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const newCdWidth = cdWidth - scrollTop

        cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
        cd.style.opacity = newCdWidth/cdWidth > 0 ? newCdWidth/cdWidth : 0
      }
      /// when click play
      playBtn.onclick = function(){
       if(_this.isPlaying){
        audio.pause()
        cdThumbAnimate.pause()
       }
       else{
        audio.play()
        cdThumbAnimate.play()
       };
      } 
      /// kiem tra audio play
      audio.onplay =function(){
        _this.isPlaying = true
        player.classList.add('playing')
      }
      /// kiem tra audio pause
      audio.onpause =function(){
        _this.isPlaying = false
        player.classList.remove('playing')
      }
      //khi tien do bai hat thay doi
      audio.ontimeupdate = function(){
      if(audio.duration){
          const progPercent = audio.currentTime / audio.duration*100
          progress.value = progPercent
          
        }
      }
      ///when seek song change
      progress.oninput= function(e){
        audio.currentTime = audio.duration / 100 * e.target.value
      }
      //when click next song
      nextBtn.onclick = function(e){
        _this.nextSong()
        audio.play()
      }
      //when click prev song
      prevBtn.onclick = function(e){
        _this.prevSong()
        audio.play()
      }
      //when click random btn
      randomBtn.onclick = function(){
        if(!_this.isRandom){
          randomBtn.classList.add('active')
          _this.isRandom = true
        }else{
          randomBtn.classList.remove('active')
          _this.isRandom = false
        }
      }
      //when click repeat Btn
      repeatBtn.onclick = function() {
        if (!_this.isRepeat){
          repeatBtn.classList.add('active')
          _this.isRepeat = true
          audio.setAttribute('loop',true)
        }else{
          repeatBtn.classList.remove('active')
          _this.isRepeat = false
          audio.removeAttribute('loop')
        }
      }
      //when click playlist songs
      playlist.onclick = function(e){
        const songPlay = e.target.closest('.song:not(.active)')
        const optionBtn = e.target.closest('.option')
        if (songPlay|| optionBtn ){
        if(!optionBtn){ 
            songPlay.classList.add('active')
            _this.currentIndex = Number(songPlay.dataset.index)
            _this.loadCurrentSong()
            _this.activeSong()
            audio.play()
           
          }
        }
      }
      



    },
    ///auto next song
    autoNextSong : function(){
      audio.onended = function(){
        nextBtn.click()
      }
    },
    // load bai hat
    loadCurrentSong : function(){
      heading.textContent = this.currentSong.name
      cdThumb.style.background =`url('${this.currentSong.image}')`
      audio.src = this.currentSong.path
    },
    /// audio when click prev
    prevSong : function(){
      this.currentIndex--
      if(!this.isRandom){
        if(this.currentIndex < 0){
          this.currentIndex = this.songs.length -1
          //random prevSong
        }}else{
          this.currentIndex = Math.floor(Math.random()*this.songs.length)  
        }
        this.loadCurrentSong()
        this.activeSong()
        
    },
    /// audio when click next
    nextSong : function(){
      this.currentIndex++
      if(!this.isRandom){
        if(this.currentIndex > this.songs.length -1){
          this.currentIndex = 0  
        }}
        // random next song
        else{
          this.currentIndex = Math.floor(Math.random()*this.songs.length)  
        }
        this.loadCurrentSong()
        this.activeSong()
    },
    activeSong : function(){
      const listSongs = document.querySelectorAll('.song')
      for ( i = 0; i < listSongs.length; i++){
        if (i === this.currentIndex){
        listSongs[i].classList.add('active')
        listSongs[i].scrollIntoView ({
          behavior : 'smooth',
          block : 'center',
          })
        }else{
          listSongs[i].classList.remove('active')
        }}
    },
        
        
      start: function () {
      /// dinh nghia thuoc tinh Object
      this.defineProperties ()
      //load songs
      this.loadCurrentSong()
      /// handle event
      this.handleEvent()
      ///render HTML
      this.render()
      ///active songs
      this.activeSong()
      ///auto next song
      this.autoNextSong()
    }


  }
  app.start();

