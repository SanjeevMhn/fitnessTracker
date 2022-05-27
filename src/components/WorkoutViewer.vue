<script>
    export default{
        name: "WorkoutViewer",
        data(){
            return{
                workoutView: false
            }
        }
    }
</script>

<template>
    <div class="workout-viewer">
        <div class="close-btn">
            <button type="button" class="icon-container" @click="$emit('hideWorkout',workoutView)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
        <h2 class="workout-viewer__title">Workout Viewer</h2>
        <p class="workout-viewer__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint repellat, fuga recusandae dolorum dolore corrupti harum id ad mollitia, animi sunt, fugit culpa rem! Magni, commodi veritatis minus ratione odit nesciunt, quasi, distinctio dolor ducimus quos doloribus voluptatem dolores!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aperiam laborum debitis, quisquam quo blanditiis consequatur incidunt unde voluptate nemo, itaque deserunt, corrupti perspiciatis dolore? Ipsam vero id tempora a enim eos ad omnis consectetur molestiae quam quisquam aut placeat architecto, maiores dicta ut recusandae esse natus iusto. Veritatis id labore aut possimus nam? Fugiat ipsa ad animi itaque optio molestiae maiores ratione nobis dolore sit consequatur, vel eveniet, mollitia sunt ex vero. Obcaecati officia enim debitis ipsam inventore natus, iusto perspiciatis ea praesentium, veniam itaque fugiat animi. Ipsa aut ullam voluptatibus unde, culpa mollitia saepe quaerat consequatur inventore in!
        </p>
    </div>
</template>

<style lang="scss">
    .workout-viewer{
        padding: 1.5rem;
        background: #fff;
        box-shadow: 0 0 20px rgb(37, 37, 37);
        border-radius: 8px;
        color: #000;
        .close-btn{
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
        &__desc{
            font-size: 1.15rem;
        }
    }

</style>