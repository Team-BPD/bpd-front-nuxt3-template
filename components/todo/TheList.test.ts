import { it, expect, describe } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TheListVue from './TheList.vue';

describe('TheList', () => {
  it('컴포넌트가 마운트 될때 ', async () => {
    const comp = await mountSuspended(TheListVue);
    expect(comp.html()).toContain('Test');
  });
});
