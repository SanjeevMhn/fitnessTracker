<script>
export default {
    props: ['workoutIndex', 'workouts'],
    name: "WorkoutViewer",
    data() {
        return {
            workoutView: false,
            workouts: this.workouts,
            workoutIndex: this.workoutIndex,
        }
    },
    methods:{
        // editWorkout(index){
        //     this.$emit('editWorkout',index,this.workoutView);
        // }
    }

}
</script>

<template>
    <div class="workout-viewer" v-if="workouts.length !== 0">
        <div class="close-btn">
            <button type="button" class="icon-container" @click="$emit('hideWorkout', workoutView)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
        <h2 class="workout-viewer__title">{{ this.workouts[this.workoutIndex].title }}</h2>
        <p class="workout-viewer__desc">
            {{ this.workouts[this.workoutIndex].desc }}
        </p>
        <div class="workout-viewer__actions">
            <button class="edit" type="button" @click="$emit('editWorkout',this.workoutIndex,workoutView)">Edit</button>
            <button class="delete" type="button">Delete</button>
        </div>
    </div>

    <div class="workout-viewer" v-else>
        <div class="close-btn">
            <button type="button" class="icon-container" @click="$emit('hideWorkout', workoutView)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
        <h2 class="workout-viewer__title">{{ this.workouts }}</h2>
        <p class="workout-viewer__desc">
            {{ this.workouts }}
        </p>
        
    </div>
</template>

<style lang="scss">
.workout-viewer {
    padding: 1.5rem;
    min-width: 30rem;
    background: #fff;
    box-shadow: 0 0 20px rgb(37, 37, 37);
    border-radius: 8px;
    color: #000;

    .close-btn {
        float: right;

        .icon-container {
            outline: none;
            border: none;
            background-color: transparent;
            height: 30px;
            width: 30px;
            justify-self: flex-end;
            margin-left: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg {
                height: 100%;
                width: 100%;
                position: absolute;
            }
        }
    }

    &__title {
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
    }

    &__desc {
        font-size: 1.15rem;
    }
    &__actions{
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        button{
            font-size: 1.25rem;
            padding: 0.5rem 0.75rem;
            margin-right: 1rem;
        }
    }
}
</style>
