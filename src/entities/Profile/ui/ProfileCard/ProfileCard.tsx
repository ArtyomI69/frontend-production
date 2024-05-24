import { Profile } from '../../model/types/profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка загрузки профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      )}
      <Input
        className={cls.input}
        value={data?.first}
        label={t('Ваше имя')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        label={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.age}
        label={t('Ваш возраст')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.city}
        label={t('Ваш город')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.username}
        label={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        label={t('Введите ссылку на аватар')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
};
