<script>
    import ProfileNav from './ProfileNav.vue';
    export default{
        name: "Dashboard",
        components: {ProfileNav},
        data(){
            return{
                active: 'home',
            } 
        },
        methods:{
            sidenavToggle(){
                let side = this.$refs.sidenav;
                if(side.classList.contains('side-nav--active')){
                    side.classList.remove('side-nav--active');
                }else{
                    side.classList.add('side-nav--active');
                }
            },
            menuActiveState(num){
                let navList = this.$refs.sidemenu;
                let navListItems = Array.from(navList.children);
                navListItems.map((nl,index,arr)=>{
                    nl.classList.remove('nav-list__item--active');
                    arr[num].classList.add('nav-list__item--active');
                })
            },
            showDropDown(){
                let dropDown = this.$refs.dropDown;
                if(dropDown.classList.contains('drop-down--active')){
                    dropDown.classList.remove('drop-down--active');
                }else{
                    dropDown.classList.add('drop-down--active');
                }
            },
           

        }
    }
</script>

<template>
    <div class="dashboard-container" ref="dashboard">
        <div class="side-nav side-nav--active" ref="sidenav">
            <div class="brand">
                <h2 class="brand__name--full">FTracker</h2>
                <h2 class="brand__name--half">FT</h2>
            </div>
            <ul class="nav-list" ref="sidemenu">
                <li class="nav-list__item nav-list__item--active" @click="menuActiveState(0)">
                    <router-link to="/" class="nav-list__link">
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                        </div>
                        <div class="nav-text">
                            Home
                        </div>
                    </router-link>
                </li>
                <li class="nav-list__item" @click="menuActiveState(1)">
                    <router-link to="/inbox" class="nav-list__link">
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
                                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
                            </svg>
                        </div>
                        <div class="nav-text">
                            Inbox
                        </div>
                    </router-link>
                </li>
                <li class="nav-list__item" @click="menuActiveState(2)">
                    <a href="#" class="nav-list__link">
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </div>
                        <div class="nav-text">
                            Schedule
                        </div>
                    </a>
                </li>
                <li class="nav-list__item" @click="menuActiveState(3)">
                    <a href="#" class="nav-list__link">
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                            </svg>
                        </div>
                        <div class="nav-text">
                            Settings
                        </div>
                    </a>
                </li>
                <li class="nav-list__item" @click="menuActiveState(4)">
                    <a href="#" class="nav-list__link">
                        <div class="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                        </div>
                        <div class="nav-text">
                            Logout
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-container">
            <div class="title">
                <button class="side-nav-toggler" @click="sidenavToggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="search-box">
                    <input type="text" name="search-text" id="" class="text-input" placeholder="Search">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </div>
                <ul class="menu-list">
                    <li class="menu-list__item">
                        <a href="#" class="menu-list__link">
                            <div class="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="menu-list__link">
                            <div class="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li class="menu-list__item" @click="showDropDown">
                        <a href="#" class="menu-list__link">
                            <div class="img-container">
                                <img src="https://randomuser.me/api/portraits/men/58.jpg" alt="User Image" srcset="" class="user-img">
                            </div>
                            <div class="drop-down" ref="dropDown">
                                <ProfileNav/>
                            </div>
                        </a>
                        
                    </li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view> 
            </div>
        </div>
    </div>
</template>

<style>
    .dashboard-container{
        display: flex;
        height: 100vh;
    }

    .dashboard-container .content-container{
        padding: 1.5rem;
        background: #fff;
        flex: 1 1;
    }
    
    .dashboard-container .side-nav{
        background-color: cornflowerblue;
        color: #fff;
        padding: 0 0.5rem 2rem 0.5rem;
        display: flex;        
        flex-direction: column;
        align-items: center;
    }

    .dashboard-container .content-container .title{
        display: flex;
        align-items: center;
        gap: 2rem;
        border-bottom: 2px solid #dedede;
        border-radius: 5px;
        padding-bottom: 1rem;
    }
    
    .dashboard-container .content-container .title .side-nav-toggler{
        border: none;
        outline: none;
        background-color: #fff;
        height: 55px;
        width: 55px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .dashboard-container .content-container .title .user-name{
        font-size: 2.25rem;
    }

    .dashboard-container .content-container .title .side-nav-toggler svg{
        position: absolute;
        height: 100%;
        width: 100%;
    }
    /* side nav active and hover*/
    .dashboard-container .side-nav.side-nav--active,
    .dashboard-container .side-nav:hover{
        flex: 0 1 14rem;
        padding: 0 0 3.5rem 0;
    }

    .dashboard-container .side-nav.side-nav--active .nav-list,
    .dashboard-container .side-nav:hover .nav-list{
        width: 100%;
    }

    .dashboard-container .side-nav.side-nav--active .nav-list__link .nav-text,
    .dashboard-container .side-nav:hover .nav-list__link .nav-text{
        display: block;
    }

    .dashboard-container .side-nav.side-nav--active .nav-list__item,
    .dashboard-container .side-nav:hover .nav-list__item{
        padding: 0.95rem 2rem;
        border-radius: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        height: auto;
        width: auto;
    }

    .dashboard-container .side-nav.side-nav--active .nav-list__link,
    .dashboard-container .side-nav:hover .nav-list__link{
        width: 100%;
    }

    .dashboard-container .side-nav.side-nav--active .nav-list__item--active,
    .dashboard-container .side-nav:hover .nav-list__item--active{
        border: none;
        border-left: 5px solid brown;
    }

    .dashboard-container .side-nav.side-nav--active .brand .brand__name--half,
    .dashboard-container .side-nav:hover .brand .brand__name--half{
        display: none;
    }

    .dashboard-container .side-nav.side-nav--active .brand .brand__name--full,
    .dashboard-container .side-nav:hover .brand .brand__name--full{
        display: block;
    }

    /* side nav inactive */
    .dashboard-container .side-nav .nav-list{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        text-align: left;
        height: 80%;
    }
    
    .dashboard-container .side-nav .nav-list__item{
        cursor: pointer;
    }
    .dashboard-container .side-nav .nav-list__link .nav-text{
        display: none;
    }
    
    .dashboard-container .side-nav .nav-list__item{
        padding: 0.25rem;
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    
    .dashboard-container .side-nav .nav-list__item:last-child{
        margin-top: auto!important;
    }
    .dashboard-container .side-nav .nav-list__item:not(:first-child){
        margin-top: 0.75rem;
    }
    .dashboard-container .side-nav .nav-list__item:hover{
        background-color:darkcyan;
    }
    .dashboard-container .side-nav .nav-list__link{
        text-decoration: none;
        color: #fff;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .dashboard-container .side-nav .nav-list__link .icon-container{
        height: 30px;
        width: 30px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dashboard-container .side-nav .nav-list__link svg{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .dashboard-container .side-nav .nav-list__item--active{
        background-color: darkcyan;
        border: 2px solid brown;
    }
    
    .dashboard-container .side-nav .brand{
        padding-top: 2rem;
        padding-bottom: 5rem;
    }
    .dashboard-container .side-nav .brand .brand__name--full{
        display: none;
    }
    .dashboard-container .side-nav .brand .brand__name--half{
        display: block;
    }
    .dashboard-container .content-container .search-box{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 80%;
        position: relative;
        display: flex;
        align-items: center;
    }

    .dashboard-container .content-container .search-box input{
        width: 100%;
        font-size: 1.15rem;
        padding: 0.35rem;
        border-radius: 8px;
    }

    .dashboard-container .content-container .search-box .icon-container{
        position: absolute;
        right: 10px;
    }
    .dashboard-container .content-container .menu-list{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        gap: 1.5rem;
    }
    .dashboard-container .content-container .menu-list__link{
       text-decoration: none; 
       color: #000;
       position: relative;
    }
    .dashboard-container .content-container .menu-list__link .drop-down{
        position: absolute;
        top: 4rem;
        right: 0;
        padding: 0.5rem;
        background-color: #fff;
        height: 70vh;
        min-width: 15vw;
        border-radius: 8px;
        box-shadow: 0 0 20px rgb(52, 52, 52);
        display: none;
    }
    .drop-down--active{
        display: block!important;
    }
    .dashboard-container .content-container .menu-list .icon-container,
    .img-container{
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .dashboard-container .content-container .menu-list .icon-container{
        width: 2rem;
        height: 2rem;
    }
    .dashboard-container .content-container .menu-list .img-container{
        width: 3.25rem;
        height: 3.25rem;
    }
    
    .dashboard-container .content-container .menu-list .icon-container svg,
    .img-container .user-img{
        position: absolute;
        object-fit: cover;
    }

    .dashboard-container .content-container .menu-list .icon-container svg{
        height: 90%;
        width: 90%;
    }

    .dashboard-container .content-container .menu-list .img-container .user-img{
        height: 100%;
        width: 100%;
    }
    
    .dashboard-container .content-container .content{
        padding-top: 1rem;
    }
    
</style>