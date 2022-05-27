<script>
    export default{
        name: "ProfileNav",
        data(){
            return{

            }
        }
    }
</script>

<template>
    <nav class="profile-nav">
        <ul class="nav-list top-nav">
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Profile</a>
            </li>
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Saved Workouts</a>
            </li>
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Liked Workouts</a>
            </li>
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Go Pro</a>
            </li>
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Account Settings</a>
            </li>
            <li class="nav-list__item">
                <a href="#" class="nav-list__link">Sign Out</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .profile-nav{
        color: #000;
        .nav-list{
            list-style-type: none;
            &__item{
                padding: 0.75rem 1rem;
                border-bottom: 2px solid #cdcdcd;
                &:not(:first-child){
                    margin-top: 0.35rem;
                }
                &:hover{
                    background-color: #cdcdcd;
                    border-radius: 5px;
                }
            }
            &__link{
                text-decoration: none;
                color: #000;
            }
        }
    }
</style>