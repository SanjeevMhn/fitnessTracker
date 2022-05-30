<script>
export default {
    name: "Home",
    props: ['workouts'],
    data() {
        return {
            workoutView: true,
            addWorkoutView: true,
            workouts: this.workouts,
        }
    },

    methods: {
        showModal(index) {
            this.$emit('showWorkout', this.workoutView, index);
        }
    }
}

</script>

<template>
    <section class="home-section" ref="homeSection">
        <h2 class="user-name">Hello John</h2>
        <div class="workouts">
            <div class="workouts__title">
                <h3 class="title-text">
                    Workouts created by you.
                </h3>
                <button class="create-workout" type="button" @click="$emit('addWorkout', addWorkoutView)">
                    Add Workout
                </button>
            </div>
            <ul class="workouts__list">
                <li class="workout-item" v-for="(workout, index) in workouts" :key="index">
                    <div class="workout-container">
                        <h2 class="workout-title" @click="showModal(index)" ref="workoutTitle">{{ workout.title }}</h2>
                    </div>
                </li>
            </ul>
        </div>
    </section>



</template>

<style lang="scss">
.user-name {
    font-size: 2rem;
    padding-bottom: 1.5rem;
}

.workouts {
    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-text {
            font-size: 1.65rem;
        }

        .create-workout {
            font-size: 1.25rem;
            padding: 0.55rem;
        }
    }

    &__list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 1rem;

        .workout-item {
            border-radius: 8px;
            padding-right: 1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;

            .workout-container {
                border: 1px solid #000;
                padding: 1.5rem;
                border-radius: 5px;
                cursor: pointer;
                .workout-title {
                    font-size: 1.25rem;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }

        .list-link {
            width: 100%;
            text-decoration: none;
            color: #000;
            font-size: 1.5rem;
            display: flex;
        }
    }

}
</style>
