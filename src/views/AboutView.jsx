/*
 * @Author       : ganbowen
 * @Date         : 2022-05-13 15:08:57
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-05-13 18:17:42
 * @Descripttion :
 */
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const counter = useCounterStore();
    const handleClick = () => {
      console.log("counter", counter.$state.counter);
      counter.increment();
    };
    return () => (
      <div class="about" onClick={handleClick}>
        <h1>This is an about JSX page</h1>
        {counter.counter}
      </div>
    );
  },
});
