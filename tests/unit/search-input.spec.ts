import { mount } from "@vue/test-utils";
import Input from "@/components/Input.vue";

describe("Input.vue", () => {
  it("renders input", () => {
    const wrapper = mount(Input);
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
