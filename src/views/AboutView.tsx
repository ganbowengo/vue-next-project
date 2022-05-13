/*
 * @Author       : ganbowen
 * @Date         : 2022-05-13 15:08:57
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-05-13 17:48:54
 * @Descripttion :
 */
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";
import "@/assets/pages.scss";

export default defineComponent({
  setup() {
    const counter = useCounterStore();
    const handleClick: (payload: MouseEvent) => void = () => {
      console.log("counter", counter.counter);
      counter.increment();
    };
    return () => (
      <div class="about-tsx" onClick={handleClick}>
        <h1>This is an about TSX page</h1>
        {counter.counter}
      </div>
    );
  },
});
