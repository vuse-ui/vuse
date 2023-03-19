import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';

import { Avatar } from '..';

describe('Avatar', () => {
  test('name without src', () => {
    const wrapper = mount(Avatar, { props: { name: 'hello' } });
    expect(wrapper.find('img').isVisible()).toBe(false);
    expect(wrapper.find('span').isVisible()).toBe(true);
    expect(wrapper.find('span').text()).toBe('hello');
  });
});
