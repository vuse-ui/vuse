import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button } from '../index';
import { type, size } from '../props';

describe('Button', () => {
  test('class', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('v-button');
  });
  test('type', () => {
    type.forEach(item => {
      const wrapper = mount(Button, {
        props: { type: item },
      });
      expect(wrapper.classes()).toContain(`v-button-${item}`);
    });
  });
  test('size', () => {
    size.forEach(item => {
      const wrapper = mount(Button, {
        props: { size: item },
      });
      expect(wrapper.classes()).toContain(`v-button-${item}`);
    });
  });
  test('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    });
    expect(wrapper.classes()).toContain('v-button-loading');
    expect(wrapper.attributes('loading')).toBe('true');
  });
  test('disabled', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    });
    expect(wrapper.attributes('disabled')).toBe('true');
  });
});
