import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../index';

describe('Button', () => {
  test('class', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('v-button');
  });
  test('type', () => {
    const wrapper = mount(Button, {
      props: { type: 'secondary' },
    });
    expect(wrapper.classes()).toContain('v-button-secondary');
  });
});
