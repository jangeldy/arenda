import useLanguage from '../Header/useLanguage';

export default function useLocalization() {
  useLanguage();
  return {
    name: 'Нур-Султан',
    longitude: '',
    latitude: ''
  }
}
