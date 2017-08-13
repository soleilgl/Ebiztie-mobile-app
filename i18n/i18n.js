import I18n from 'react-native-i18n';
import en from './locales/en';
import en_US from './locales/en-US';
import zh_CN from './locales/zh-CN';
import zh_Hans_CN from './locales/zh-Hans-CN';
import zh from './locales/zh';

I18n.fallbacks = true;

I18n.translations = {
    en,
    en_US,
    zh,
    zh_CN,
    zh_Hans_CN,
};

export default I18n;