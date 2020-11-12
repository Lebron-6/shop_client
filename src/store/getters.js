// 包含多个基于state的getters计算属性的对象

export default {
    totalCount(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    },
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    },
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    positiveLength(state) {
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
    }
}