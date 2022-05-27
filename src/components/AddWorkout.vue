<script>
    export default{
        name: 'AddWorkout',
        data(){
            return{
                addWorkoutView: false,
            }
        }
    }
</script>

<template>
    <div class="addworkout">
        <div class="close-btn">
            <button class="icon-container" type="button" @click="$emit('hideAddWorkout',addWorkoutView)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
        <h2 class="addworkout__title">Add Workout</h2>
        <form action="javascript:void(0)" method="post" class="addworkout__form">
            <div class="form-data">
                <label for="workout-title">
                    Workout Title
                </label>
                <input type="text" name="workout-title" id="" class="form-input" placeholder="Workout Title">
            </div>
            <div class="form-data">
                <label for="workout-type">
                    Workout Type
                </label>
                <select name="workout-type" id="" class="form-select">
                    <option value="strength">Strength</option>
                    <option value="cardio">Cardiovascular</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="sport">Sport</option>
                </select>
            </div>
            <div class="form-data">
                <label for="workout-duration">Workout Duration</label>
                <div class="workout-time">
                    <div class="workout-time__hrs">
                        <label for="hours">Hours</label>
                        <input type="text" name="hours" id="" class="form-input" placeholder="0">
                    </div>
                    <div class="workout-time__mins">
                        <label for="minutes">Minutes</label>
                        <input type="text" name="minutes" id="" class="form-input" placeholder="0">
                    </div>
                    <div class="workout-time__secs">
                        <label for="seconds">Seconds</label>
                        <input type="text" name="seconds" id="" class="form-input" placeholder="0">
                    </div>
                </div>
            </div>
            <div class="form-data">
                <label for="workout-desc">Workout Description</label>
                <textarea name="workout-desc" id="" cols="30" rows="10" class="form-input" placeholder="Workout Description"></textarea>
            </div>
            <div class="form-data">
                <button type="submit" class="submit-btn">Add</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    .addworkout{
        padding: 1.5rem;
        background: #fff;
        box-shadow: 0 0 20px rgb(37, 37, 37);
        border-radius: 8px;
        color: #000;
        .close-btn{
            display: inline-flex;
            float: right;
            .icon-container{
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
                svg{
                    height: 100%;
                    width: 100%;
                    position: absolute;
                }
            }
        }
        &__title{
            font-size: 1.5rem;
            padding-bottom: 1.5rem;
        }
        &__form{
            .form-data{
                padding-bottom: 0.75rem;
                .submit-btn{
                    font-size: 1.15rem;
                    padding: 0.5rem 1rem;
                }
                &:last-child{
                    padding-bottom: 0;
                }
                &:not(:last-child){
                    display: flex;
                    flex-direction:column;
                    .workout-time{
                        display: flex;
                        width: 50%;
                        &__hrs,
                        &__mins,
                        &__secs{
                            display: flex;
                            flex-direction: column;
                            width: calc(100% / 4);
                            label{
                                font-size: 1.15rem;
                                padding-bottom: 0.25rem;
                            }
                            input{
                                width: calc(100% / 3);
                            }
                        }
                    }
                }
                label{
                    font-size: 1.25rem;
                    padding-bottom: 0.25rem;
                    font-weight: bold;
                }
                .form-input,.form-select{
                    font-size: 1.15rem;
                    padding: 0.5rem;
                    border: 1px solid #000;
                    border-radius: 5px;
                }
               
            }
        }
    }
</style>