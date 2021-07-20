const homepage = () => import("../views/homepage/homepage.vue");
const learningWorld = () => import("../views/learningWorld/learningWorld.vue");
const professionalIntroduction = () => import("../views/professionalIntroduction/professionalIntroduction.vue");
const universityLife = () => import("../views/universityLife/universityLife.vue");
const sign = () => import("../views/sign/sign.vue");
const wall = () => import("../views/wall/wall.vue");
const searchPage = () => import("../views/searchPage/searchPage.vue");

module.exports = {
// export default {
  homepage,
  learningWorld,
  professionalIntroduction,
  universityLife,
  sign,
  wall,
  searchPage
}
