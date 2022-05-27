<script>
    export default{
        name: "Home",
        props: ['workout'], 
        data(){
            return{
                workoutView: true,
                addWorkoutView: true,
                workouts: {...this.workout},
                workoutsArr:[
                    this.workouts,
                ]
            }
        },
       
        methods:{
            
        }
    }
    
</script>

<template>
    <h2 class="user-name">Hello John</h2>
    <div class="workouts">
        <div class="workouts__title">
            <h3 class="title-text">
                Workouts created by you.
            </h3>
            <button class="create-workout" type="button" @click="$emit('addWorkout',addWorkoutView)">
                Add Workout
            </button>
        </div>
        <ul class="workouts__list">
            <li>{{workouts.title}}</li>
            <!-- <li class="list-item" v-for="(workout,index) in workouts" :key="index">
                <div class="container">
                    <div class="list-link">{{workout.title}}</div>
                </div>
            </li> -->
            <!-- <li class="list-item" >
                <div class="container">
                    <a href="#" class="list-link" @click="$emit('showWorkout',workoutView)">Weight Training</a>
                </div>
            </li>
            <li class="list-item">
                <div class="container">
                    <a href="#" class="list-link" @click="$emit('showWorkout',workoutView)">Weight Training</a>
                </div>
            </li>
            <li class="list-item">
                <div class="container">
                    <a href="#" class="list-link" @click="$emit('showWorkout',workoutView)">Weight Training</a>
                </div>
            </li>
            <li class="list-item">
                <div class="container">
                    <a href="#" class="list-link" @click="$emit('showWorkout',workoutView)">Weight Training</a>
                </div>
            </li> -->
            
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
            flex-wrap: wrap;
            align-items: center;
            margin-top: 1rem;
            .list-item{
                border-radius: 8px;
                padding-right: 1rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                .container{
                    border: 1px solid #000;
                    padding: 1.5rem;
                }
            }
            .list-link{
                width: 100%;
                text-decoration: none;
                color: #000;
                font-size: 1.5rem;
                display: flex;
            }
        }

    }
</style>