<script>
    export default{
        name: "Home",
        data(){
            return{

            }
        },
    }
</script>

<template>
    <h2 class="user-name">Hello John</h2>
    <div class="workouts">
        <div class="workouts__title">
            <h3 class="title-text">
                Workouts created by you.
            </h3>
            <button class="create-workout">
                Add Workout
            </button>
        </div>
        <ul class="workouts__list">
            <li class="list-item">
                <a href="#" class="list-link">Weight Training</a>
            </li>
            <li class="list-item">
                <a href="#" class="list-link">Cardio Training</a>
            </li>
            <li class="list-item">
                <a href="#" class="list-link">Yoga Class</a>
            </li>
            <li class="list-item">
                <a href="#" class="list-link">Hiking</a>
            </li>
        </ul>   
    </div>
    
    
</template>

<style lang="scss">
    .user-name{
        font-size: 2rem;
        padding-bottom: 1.5rem;
    }
    .workouts{
        &__title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title-text{
                font-size: 1.65rem;
            }    
            .create-workout{
                font-size: 1.25rem;
                padding: 0.55rem;
            }
        }
        &__list{
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 1.25rem;
            align-items: center;
            margin-top: 1rem;
            .list-item{
                flex: 1 0 150px;
                border: 1px solid #000;
                border-radius: 8px;
                padding: 2rem 1.5rem;
            }
            .list-link{
                width: 100%;
                text-decoration: none;
                color: #000;
                font-size: 1.25rem;
                display: flex;
            }
        }

    }
</style>