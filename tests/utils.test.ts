import { it, expect, describe, test } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TheListVue from '../components/todo/TheList.vue';
import { formatPercent, formatTemperature } from '~/utils/commons';

describe('TheList', () => {
  it('컴포넌트가 마운트 될때 ', async () => {
    const comp = await mountSuspended(TheListVue);
    expect(comp.html()).not.toContain('Test');
  });
});

describe('언어 변환 테스트', () => {
  it('en-US', () => {
    const i18n = useNuxtApp().$i18n;
    const { t, setLocale } = i18n;
    setLocale('en-US');
    t('hi');
    expect(t('hi')).toBe('hello');
    // t()
  });
  it('es', async () => {
    const i18n = useNuxtApp().$i18n;
    const { t, setLocale } = i18n;
    await setLocale('es');
    t('hi');
    expect(t('hi')).toBe('¡Hola!');
    // t()
  });
});

test('암호화 테스트', async () => {
  const encTest = await encAES256('abc');
  // console.log(encTest);
  expect(await decAES256(encTest.ciphertext)).toEqual('abc');
});

describe('국제화 테스트', () => {
  it('공통: 백분율', () => {
    expect(formatPercent(1 / 2, 'ko-KR')).toBe('50%');
  });
  it.todo(
    '온도는 저장단위에 따라 변환할 단위로 따로 환산해야 합니다. \n 도씨에서 화씨변환 공식: 1.8을 곱하고 32를 더함 \n 반대인 경우, 32를 빼고 5/9를 곱함',
  );
  it('온도: en-US 저장값이 36도씨라면', () => {
    // console.log(formatTemporature(36));
    expect(formatTemperature(36 * 1.8 + 32, 'en-US' ?? '')).toBe('96.8°F');
  });
  it('온도: ko-KR (default) 저장값이 0화씨라면', () => {
    expect(formatTemperature(((0 - 32) * 5) / 9, 'ko-KR' ?? '')).toBe(
      '-17.778°C',
    );
  });
});
