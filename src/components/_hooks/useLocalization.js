import useLanguage from '../Header/useLanguage';

export default function useLocalization() {
  const { lang } = useLanguage();
  return {
    name: 'Нур-Султан',
    longitude: '',
    latitude: ''
  }
}
