import useLanguage from '../Header/useLanguage';

export default function useLocalization() {
  useLanguage();
  return {
    code: 'nur-sultan',
    name: 'Нур-Султан',
    longitude: '',
    latitude: ''
  }
}
