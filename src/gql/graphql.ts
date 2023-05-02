/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateEnd: any;
  DateTime: any;
  DateTimeUtc: any;
  /** Decimal type */
  Decimal: any;
  /** A [RFC 5321](https://tools.ietf.org/html/rfc5321) compliant email. */
  EMAIL: any;
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org/. */
  JSON: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  /** String or Integer type */
  StringInteger: any;
  Time: any;
};

/**
 * Аккаунты
 * Banking -> Account -> Account List
 */
export type Account = {
  __typename?: 'Account';
  /** Имя аккаунта */
  account_name: Scalars['String'];
  /** Номер аккаунта */
  account_number?: Maybe<Scalars['String']>;
  /** Состояние аккаунта */
  account_state?: Maybe<AccountState>;
  /** Тип аккаунта */
  account_type?: Maybe<AccountType>;
  activated_at?: Maybe<Scalars['DateTimeUtc']>;
  /** основной аккаунт или нет */
  alias: Scalars['Boolean'];
  /** Текущий баланс */
  available_balance: Scalars['Decimal'];
  /** Получить или индивидуала или компании */
  client?: Maybe<Client>;
  /** Все аккаунты клиента */
  client_accounts: Array<ClientAccountsDetails>;
  /** Получить связанный шаблон комиссии */
  commission_template?: Maybe<CommissionTemplate>;
  /** Компания которой принадлежит аккаунт */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить связанный код валюты */
  currency?: Maybe<Currencies>;
  /** Текущий баланс */
  current_balance: Scalars['Decimal'];
  /** Получить групроле */
  group?: Maybe<GroupRole>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** Получить связанного платежного провайдера iban */
  iban_provider?: Maybe<PaymentProviderIban>;
  id: Scalars['ID'];
  /** Основной или нет */
  is_primary?: Maybe<Scalars['Boolean']>;
  last_charge_at?: Maybe<Scalars['DateTimeUtc']>;
  /** лимит минимального баланса */
  max_limit_balance?: Maybe<Scalars['Decimal']>;
  /** Получить менеджера */
  member?: Maybe<Members>;
  /** лимит максимального баланса */
  min_limit_balance?: Maybe<Scalars['Decimal']>;
  /** Получить связанного владельца */
  owner?: Maybe<ApplicantIndividual>;
  /** Получить банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Получить связанного платежного провайдера */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанного Пеймент систем */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить Проект */
  project?: Maybe<Project>;
  /** Текущий баланс */
  reserved_balance: Scalars['Decimal'];
  /** Total pending transactions */
  total_pending_transactions?: Maybe<Scalars['Int']>;
  /** Total transactions */
  total_transactions?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type AccountClient = {
  __typename?: 'AccountClient';
  client?: Maybe<Client>;
  id: Scalars['ID'];
};

export enum AccountClientsType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type AccountGenerateIbanResponse = {
  __typename?: 'AccountGenerateIbanResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

/**
 * Аккаунты
 * Banking -> Account -> Account Limit
 */
export type AccountLimit = {
  __typename?: 'AccountLimit';
  /** Получить Account */
  account?: Maybe<Account>;
  /** ID account */
  account_id?: Maybe<Scalars['ID']>;
  /** Сумма лимита */
  amount?: Maybe<Scalars['Decimal']>;
  /** Получить события лимита */
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  /** ID события лимита */
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** ID периода лимита */
  commission_template_limit_period_id?: Maybe<Scalars['ID']>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
  /** Получить типы лимита */
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** ID валюты лимита */
  currency_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']>;
};

/** A paginated list of AccountLimit items. */
export type AccountLimitPaginator = {
  __typename?: 'AccountLimitPaginator';
  /** A list of AccountLimit items. */
  data: Array<AccountLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Account items. */
export type AccountPaginator = {
  __typename?: 'AccountPaginator';
  /** A list of Account items. */
  data: Array<Account>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * AccountReachedLimit
 * Banking -> Account -> Account Limit
 */
export type AccountReachedLimit = {
  __typename?: 'AccountReachedLimit';
  /** Получить Account */
  account?: Maybe<Account>;
  /** ID account */
  account_id: Scalars['ID'];
  /** Сумма */
  amount: Scalars['Decimal'];
  /** Имя аппликанта */
  client_name: Scalars['String'];
  /** Тип аппликанта */
  client_type: Scalars['String'];
  /** Тип */
  group_type: Scalars['String'];
  id: Scalars['ID'];
  /** Валюта лимита */
  limit_currency: Scalars['String'];
  /** Тип лимита */
  limit_type: Scalars['String'];
  /** Значение лимита */
  limit_value: Scalars['Int'];
  /** Период */
  period: Scalars['Int'];
  /** Тип трансфера */
  transfer_direction: Scalars['String'];
};

/** A paginated list of AccountReachedLimit items. */
export type AccountReachedLimitPaginator = {
  __typename?: 'AccountReachedLimitPaginator';
  /** A list of AccountReachedLimit items. */
  data: Array<AccountReachedLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  __typename?: 'AccountState';
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AccountStatement = {
  __typename?: 'AccountStatement';
  account_currency?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  closing_balance?: Maybe<Scalars['Float']>;
  closing_balance_date?: Maybe<Scalars['DateTimeUtc']>;
  credit_turnover?: Maybe<Scalars['Float']>;
  date_from: Scalars['DateTimeUtc'];
  debit_turnover?: Maybe<Scalars['Float']>;
  opening_balance?: Maybe<Scalars['Float']>;
  opening_balance_date?: Maybe<Scalars['DateTimeUtc']>;
  transactions?: Maybe<Array<Maybe<AccountStatementTransaction>>>;
};

export type AccountStatementTransaction = {
  __typename?: 'AccountStatementTransaction';
  account_balance?: Maybe<Scalars['Float']>;
  account_client?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  created_at: Scalars['DateTimeUtc'];
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  reason?: Maybe<Scalars['String']>;
  sender_recipient?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transaction_id: Scalars['ID'];
};

export enum AccountType {
  Business = 'Business',
  Private = 'Private'
}

export type ActiveSession = {
  __typename?: 'ActiveSession';
  /** Браузер */
  browser?: Maybe<Scalars['String']>;
  /** Версия браузера */
  browser_version?: Maybe<Scalars['String']>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Название компании */
  company: Scalars['String'];
  /** Страна */
  country?: Maybe<Scalars['String']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc'];
  /** Появится если пользователь запрашивает свой active session */
  current_session?: Maybe<Scalars['Boolean']>;
  /** Устройство */
  device_type?: Maybe<Scalars['String']>;
  /** Дата истечения */
  expired_at?: Maybe<Scalars['DateTimeUtc']>;
  /** ID */
  id: Scalars['String'];
  /** IP */
  ip?: Maybe<Scalars['String']>;
  /** Модель */
  model?: Maybe<Scalars['String']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']>;
  /** Группа */
  provider: Scalars['String'];
  /** доверенный */
  trusted?: Maybe<Scalars['Boolean']>;
};

export type ActiveSessionMutatorResponse = {
  __typename?: 'ActiveSessionMutatorResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type ActiveSessions = {
  __typename?: 'ActiveSessions';
  data?: Maybe<Array<ActiveSession>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  /** Изменения */
  changes?: Maybe<Scalars['String']>;
  /** Название компании */
  company: Scalars['String'];
  /** Дата создания */
  created_at: Scalars['DateTimeUtc'];
  /** Описание */
  description?: Maybe<Scalars['String']>;
  /** Домен */
  domain: Scalars['String'];
  /** Группа */
  group: Scalars['String'];
  /** ID */
  id: Scalars['String'];
  /** Группа */
  member: Scalars['String'];
};

export type ActivityLogs = {
  __typename?: 'ActivityLogs';
  data?: Maybe<Array<ActivityLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export enum ActivityStatusType {
  Active = 'Active',
  Inactive = 'Inactive'
}

/** Дополнительные поля */
export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']>;
};

export type ApplicantAccount = {
  __typename?: 'ApplicantAccount';
  /** Имя */
  account_name: Scalars['String'];
  /** Аккаунт/Карта */
  account_number?: Maybe<Scalars['String']>;
  /** Тип аккаунта */
  account_type: Scalars['String'];
  /** Получить связанный код валюты */
  currency?: Maybe<Currencies>;
  /** Баланс */
  current_balance?: Maybe<Scalars['Decimal']>;
  /** ID */
  id: Scalars['ID'];
  /** Первичный аккаунт */
  is_primary?: Maybe<Scalars['Boolean']>;
  /** Показать на главной */
  is_show?: Maybe<Scalars['Boolean']>;
};

/** Access for Online Banking */
export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  /** Получить связанного applicant company */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Получить связанного applicant individual */
  applicant_individual?: Maybe<ApplicantIndividual>;
  /** Contact administrator */
  contact_administrator: Scalars['Boolean'];
  create_payments?: Maybe<Scalars['Boolean']>;
  /** Ежедневный лимит */
  daily_limit: Scalars['Decimal'];
  /** Доступ */
  grant_access?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Получить связанного Member */
  member?: Maybe<Members>;
  /** Ежемесячный лимит */
  monthly_limit: Scalars['Decimal'];
  /** Лимит операций */
  operation_limit: Scalars['Decimal'];
  /** Получить роль */
  role?: Maybe<Role>;
  sign_payments?: Maybe<Scalars['Boolean']>;
  /** Ежедневный использованный лимит */
  used_daily_limit: Scalars['Decimal'];
  /** Ежемесячный использованный лимит */
  used_monthly_limit: Scalars['Decimal'];
};

export type ApplicantBankingAccesses = {
  __typename?: 'ApplicantBankingAccesses';
  data?: Maybe<Array<ApplicantBankingAccess>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export enum ApplicantClientType {
  Corporate = 'Corporate',
  Private = 'Private'
}

/**
 * Компания пользователя
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Адрес2 */
  address2?: Maybe<Scalars['String']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Дополнительные поля Basic info */
  basic_info_additional_field?: Maybe<Scalars['JSON']>;
  /** Получить тип бизнеса */
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  /** Дополнительные поля Company Info */
  company_info_additional_fields?: Maybe<Scalars['JSON']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  /** Тип компании */
  company_type?: Maybe<Scalars['String']>;
  /** Контактный email */
  contact_email?: Maybe<Scalars['EMAIL']>;
  /** Контактный телефон */
  contact_phone?: Maybe<Scalars['String']>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  /** Статус верецификации email */
  email_verification?: Maybe<ApplicantVerificationStatus>;
  /** Дата окончания регистрации */
  expires_at?: Maybe<Scalars['Date']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Дата включуения */
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить KYC level */
  kyc_level?: Maybe<ApplicantRiskLevel>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Номер лицензии */
  license_number?: Maybe<Scalars['String']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Модули */
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  /** Название */
  name?: Maybe<Scalars['String']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  /** Адрес офиса */
  office_address?: Maybe<Scalars['String']>;
  /** Получить создателя */
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Статус верецификации телефона */
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  /** Получить фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  /** Проект */
  project?: Maybe<Project>;
  /** Дата регистрации */
  reg_at?: Maybe<Scalars['Date']>;
  /** Регистрационный номер */
  reg_number?: Maybe<Scalars['String']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Штат / область */
  state?: Maybe<Scalars['String']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Налоговый номер */
  tax?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

/**
 * Типы бизнеса для компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantCompanyBusinessType items. */
export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  /** A list of ApplicantCompanyBusinessType items. */
  data: Array<ApplicantCompanyBusinessType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название метки */
  name: Scalars['String'];
};

/** A paginated list of ApplicantCompanyLabel items. */
export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  /** A list of ApplicantCompanyLabel items. */
  data: Array<ApplicantCompanyLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули компании
 * Dashboard -> Applicants -> Company -> Full Profile -> Settings
 */
export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название */
  name?: Maybe<Scalars['String']>;
};

/**
 * Заметки компания
 * Dashboard -> Applicants -> Company
 */
export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantCompany>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Заметка */
  note: Scalars['String'];
};

/** A paginated list of ApplicantCompanyNotes items. */
export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  /** A list of ApplicantCompanyNotes items. */
  data: Array<ApplicantCompanyNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantCompany items. */
export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  /** A list of ApplicantCompany items. */
  data: Array<ApplicantCompany>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * История уровней риска Applicant Company
 * Applicants -> Individual -> Individual Company Full Profile -> General
 */
export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  /** Получить аппликанта */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantCompanyRiskLevelHistory items. */
export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  /** A list of ApplicantCompanyRiskLevelHistory items. */
  data: Array<ApplicantCompanyRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDetailsRequisites = {
  __typename?: 'ApplicantDetailsRequisites';
  address: Scalars['String'];
  bank_address: Scalars['String'];
  bank_country: Scalars['String'];
  bank_name: Scalars['String'];
  beneficiary: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  iban: Scalars['String'];
  swift_code: Scalars['String'];
};

export type ApplicantDevice = {
  __typename?: 'ApplicantDevice';
  /** Браузер */
  browser?: Maybe<Scalars['String']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc'];
  /** Устройство */
  device_type?: Maybe<Scalars['String']>;
  /** Дата истечения */
  expired_at?: Maybe<Scalars['DateTimeUtc']>;
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** IP */
  ip?: Maybe<Scalars['String']>;
  /** Модель */
  model?: Maybe<Scalars['String']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']>;
  /** Доверенное устройство */
  trusted: Scalars['Boolean'];
};

/** Документы аппдиканта */
export type ApplicantDocument = {
  __typename?: 'ApplicantDocument';
  /** Добавлено из */
  added_from?: Maybe<Scalars['String']>;
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company?: Maybe<Company>;
  /** Получить страну */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  document_state?: Maybe<DocumentState>;
  document_state_id?: Maybe<Scalars['ID']>;
  document_type?: Maybe<DocumentType>;
  document_type_id?: Maybe<Scalars['ID']>;
  /** Получить файл */
  file?: Maybe<Files>;
  /** ID */
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  /** Получить внутренние заметки документа */
  internal_notes?: Maybe<Array<Maybe<ApplicantDocumentInternalNote>>>;
  /** Получить детали отклонения документа */
  reject_details?: Maybe<Array<Maybe<ApplicantDocumentRejectDetail>>>;
  /** Получить теги */
  tags?: Maybe<Array<Maybe<ApplicantDocumentTag>>>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** Внутренние заметки к документам аппликанта */
export type ApplicantDocumentInternalNote = {
  __typename?: 'ApplicantDocumentInternalNote';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить документ */
  document?: Maybe<ApplicantDocument>;
  /** ID */
  id: Scalars['ID'];
  /** Получить Мембера */
  member?: Maybe<Members>;
  /** Текст заметки */
  note?: Maybe<Scalars['String']>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** A paginated list of ApplicantDocumentInternalNote items. */
export type ApplicantDocumentInternalNotePaginator = {
  __typename?: 'ApplicantDocumentInternalNotePaginator';
  /** A list of ApplicantDocumentInternalNote items. */
  data: Array<ApplicantDocumentInternalNote>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantDocument items. */
export type ApplicantDocumentPaginator = {
  __typename?: 'ApplicantDocumentPaginator';
  /** A list of ApplicantDocument items. */
  data: Array<ApplicantDocument>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentRejectDetail = {
  __typename?: 'ApplicantDocumentRejectDetail';
  /** Документ */
  applicant_document: ApplicantDocument;
  /** Тег */
  applicant_document_tag?: Maybe<Array<ApplicantDocumentTag>>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** ID */
  id: Scalars['ID'];
  /** Мембер */
  member?: Maybe<Members>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** Теги документов аппликанта */
export type ApplicantDocumentTag = {
  __typename?: 'ApplicantDocumentTag';
  /** Категория */
  category?: Maybe<ApplicantDocumentTagCategory>;
  /** дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Описание */
  description?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** member */
  member?: Maybe<Members>;
  /** Имя */
  name: Scalars['String'];
};

/** Категории тегов документов аппликанта */
export type ApplicantDocumentTagCategory = {
  __typename?: 'ApplicantDocumentTagCategory';
  /** ID */
  id: Scalars['ID'];
  /** Имя категории */
  name: Scalars['String'];
};

/** A paginated list of ApplicantDocumentTagCategory items. */
export type ApplicantDocumentTagCategoryPaginator = {
  __typename?: 'ApplicantDocumentTagCategoryPaginator';
  /** A list of ApplicantDocumentTagCategory items. */
  data: Array<ApplicantDocumentTagCategory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantDocumentTag items. */
export type ApplicantDocumentTagPaginator = {
  __typename?: 'ApplicantDocumentTagPaginator';
  /** A list of ApplicantDocumentTag items. */
  data: Array<ApplicantDocumentTag>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Частный пользователь
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Дополнительные поля */
  address_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить компании к которым принадлежит апликант */
  applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']>;
  /** Applicant Banking Access */
  banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
  /** Дата рождения */
  birth_at?: Maybe<Scalars['Date']>;
  /** Город рождения */
  birth_city?: Maybe<Scalars['String']>;
  /** Получить связанную страну рождения */
  birth_country?: Maybe<Country>;
  /** Штат/область рождения */
  birth_state?: Maybe<Scalars['String']>;
  /** Получить связанную страну гражданства */
  citizenship_country?: Maybe<Country>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Название компании держателя applicant */
  company?: Maybe<Company>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  /** Статус верецификации email */
  email_verification?: Maybe<ApplicantVerificationStatus>;
  /** Имя */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** IP адрес */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Applicant KYC Level */
  kyc_level?: Maybe<ApplicantKycLevel>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Фамилия */
  last_name?: Maybe<Scalars['String']>;
  /** время последний просмотренный */
  last_screened_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']>;
  /** Получить модули */
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  /** Национальность */
  nationality?: Maybe<Scalars['String']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  /** Дополнительные поля для Personal info */
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Статус верецификации телефона */
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить проект */
  project?: Maybe<Project>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']>;
  /** Пол */
  sex?: Maybe<Sex>;
  /** Штат / область */
  state?: Maybe<Scalars['String']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Получить two factor auth */
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  /** Время обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_type: Scalars['String'];
  /** Получить индивидуала или компанию индивидуала */
  client?: Maybe<Client>;
  percentage_owned?: Maybe<Scalars['Float']>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

/**
 * Должности компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  /** Компания */
  company?: Maybe<Company>;
  id: Scalars['ID'];
  /** Название должности */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualCompanyPosition items. */
export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  /** A list of ApplicantIndividualCompanyPosition items. */
  data: Array<ApplicantIndividualCompanyPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Отношения компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  /** Компания */
  company?: Maybe<Company>;
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualCompanyRelation items. */
export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  /** A list of ApplicantIndividualCompanyRelation items. */
  data: Array<ApplicantIndividualCompanyRelation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки пользователя
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название метки */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualLabel items. */
export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  /** A list of ApplicantIndividualLabel items. */
  data: Array<ApplicantIndividualLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули аппликанта
 * Dashboard -> Applicants -> Individual -> Full Profile -> Settings
 */
export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название */
  name?: Maybe<Scalars['String']>;
};

/**
 * Заметки частный пользователь
 * Dashboard -> Applicants -> Individual
 */
export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantIndividual>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Заметка */
  note: Scalars['String'];
};

/** A paginated list of ApplicantIndividualNotes items. */
export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  /** A list of ApplicantIndividualNotes items. */
  data: Array<ApplicantIndividualNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantIndividual items. */
export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  /** A list of ApplicantIndividual items. */
  data: Array<ApplicantIndividual>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни KYC
 * Management -> New Applicant
 */
export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantKycLevel items. */
export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  /** A list of ApplicantKycLevel items. */
  data: Array<ApplicantKycLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantLinkedCompany = {
  __typename?: 'ApplicantLinkedCompany';
  company?: Maybe<ApplicantCompany>;
  company_position?: Maybe<ApplicantIndividualCompanyPosition>;
  company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
  percentage_owned?: Maybe<Scalars['Float']>;
};

export type ApplicantModuleActivity = {
  __typename?: 'ApplicantModuleActivity';
  /** ID Аппликанта */
  applicant_id: Scalars['ID'];
  /** Тип Аппликанта */
  applicant_type: ApplicantType;
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active: Scalars['Boolean'];
  /** ID Модуля */
  module_id: Scalars['ID'];
};

export type ApplicantProfile = {
  __typename?: 'ApplicantProfile';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']>;
  /** Дата рождения */
  birth_at?: Maybe<Scalars['Date']>;
  /** Город рождения */
  birth_city?: Maybe<Scalars['String']>;
  /** Получить связанную страну рождения */
  birth_country?: Maybe<Country>;
  /** Штат/область рождения */
  birth_state?: Maybe<Scalars['String']>;
  /** Получить связанную страну гражданства */
  citizenship_country?: Maybe<Country>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Получить компании */
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Название компании держателя applicant */
  company?: Maybe<Company>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** IP адрес */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Верецифиорован телефон true/false */
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Фамилия */
  last_name?: Maybe<Scalars['String']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']>;
  /** Получить модули */
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  /** Национальность */
  nationality?: Maybe<Scalars['String']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  /** Оповещения об устройствах на email */
  notify_device_email?: Maybe<Scalars['Boolean']>;
  /** Дополнительные поля для Personal info */
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']>;
  /** Пол */
  sex?: Maybe<Sex>;
  /** Штат / область */
  state?: Maybe<Scalars['String']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Получить two factor auth */
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

/** Реквизиты */
export type ApplicantRequisites = {
  __typename?: 'ApplicantRequisites';
  /** IBAN */
  account_number: Scalars['String'];
  /** Связанный банк */
  bank?: Maybe<PaymentBank>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** Account ID */
  id: Scalars['ID'];
  /** Создатель */
  owner?: Maybe<ApplicantProfile>;
};

/**
 * Уровни риска
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * История уровней риска Applicant Individual
 * Applicants -> Individual -> Individual Full Profile -> General
 */
export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  /** Получить аппликанта */
  applicant?: Maybe<ApplicantIndividual>;
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantRiskLevelHistory items. */
export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  /** A list of ApplicantRiskLevelHistory items. */
  data: Array<ApplicantRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantRiskLevel items. */
export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  /** A list of ApplicantRiskLevel items. */
  data: Array<ApplicantRiskLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantSettingsProfile = {
  __typename?: 'ApplicantSettingsProfile';
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  email_confirm_url?: Maybe<Scalars['String']>;
  /** Имя */
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Фамилия */
  last_name?: Maybe<Scalars['String']>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']>;
};

/**
 * Состояния
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantState items. */
export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  /** A list of ApplicantState items. */
  data: Array<ApplicantState>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * State reason
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantStateReason items. */
export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  /** A list of ApplicantStateReason items. */
  data: Array<ApplicantStateReason>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Статусы
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantStatus items. */
export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  /** A list of ApplicantStatus items. */
  data: Array<ApplicantStatus>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum ApplicantType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual'
}

export type ApplicantVerificationStatus = {
  __typename?: 'ApplicantVerificationStatus';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

export type AuthClientType = ApplicantIndividual | Members;

export type AuthenticationLog = {
  __typename?: 'AuthenticationLog';
  /** Браузер */
  browser?: Maybe<Scalars['String']>;
  /** Версия браузера */
  browser_version?: Maybe<Scalars['String']>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Member email */
  client?: Maybe<AuthClientType>;
  /** Тип */
  client_type: Scalars['String'];
  /** Название компании */
  company: Scalars['String'];
  /** Страна */
  country?: Maybe<Scalars['String']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc'];
  /** Устройство */
  device_type?: Maybe<Scalars['String']>;
  /** Домен */
  domain: Scalars['String'];
  /** Почта */
  email: Scalars['String'];
  /** Дата истечения */
  expired_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Группа */
  group?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Инфо */
  info?: Maybe<Scalars['String']>;
  /** IP */
  ip?: Maybe<Scalars['String']>;
  /** Модель */
  model?: Maybe<Scalars['String']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']>;
  /** Тип */
  provider: Scalars['String'];
  /** Статус */
  status?: Maybe<Scalars['String']>;
};

export type AuthenticationLogs = {
  __typename?: 'AuthenticationLogs';
  data?: Maybe<Array<AuthenticationLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

/** Bank correspondents */
export type BankCorrespondent = {
  __typename?: 'BankCorrespondent';
  /** Account number */
  account_number: Scalars['String'];
  /** Адрес */
  address: Scalars['String'];
  /** Счет банка корреспондента */
  bank_account: Scalars['String'];
  /** Код банка */
  bank_code: Scalars['String'];
  /** Получить страну */
  country?: Maybe<Country>;
  /** IDs currencies and regions */
  currencies_and_regions: Array<Maybe<CurrencyAndRegionResponse>>;
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название */
  name: Scalars['String'];
  /** NCS Number */
  ncs_number: Scalars['String'];
  /** swift */
  swift: Scalars['String'];
};

/** A paginated list of BankCorrespondent items. */
export type BankCorrespondentPaginator = {
  __typename?: 'BankCorrespondentPaginator';
  /** A list of BankCorrespondent items. */
  data: Array<BankCorrespondent>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Business Activity
 * Banking -> Commission Templates -> Template Settings
 */
export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of BusinessActivity items. */
export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  /** A list of BusinessActivity items. */
  data: Array<BusinessActivity>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

export type ClientAccountsDetails = {
  __typename?: 'ClientAccountsDetails';
  /** Текущий баланс */
  available_balance: Scalars['Decimal'];
  /** Получить связанный код валюты */
  currency: Currencies;
  /** Текущий баланс */
  current_balance: Scalars['Decimal'];
  id: Scalars['ID'];
  /** лимит минимального баланса */
  max_limit_balance?: Maybe<Scalars['Decimal']>;
  /** лимит максимального баланса */
  min_limit_balance?: Maybe<Scalars['Decimal']>;
  /** Текущий баланс */
  reserved_balance: Scalars['Decimal'];
};

/** Client ip address */
export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  /** Client ID */
  client_id?: Maybe<Scalars['ID']>;
  /** Client type */
  client_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** ip_address */
  ip_address?: Maybe<Scalars['String']>;
};

export enum ClientType {
  Administration = 'Administration',
  Client = 'Client'
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

export enum Column {
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  Id = 'ID'
}

/**
 * Прайс лист комиссий
 * Banking -> Commission Price List
 */
export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Получить связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить связанные цены */
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID'];
  /** Название шаблона */
  name: Scalars['String'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
  /** Получить Регион */
  region?: Maybe<Region>;
};

/** A paginated list of CommissionPriceList items. */
export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  /** A list of CommissionPriceList items. */
  data: Array<CommissionPriceList>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Получить список бизнесов */
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** массив ID стран */
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** массив ID валют */
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Описание шаблона */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название шаблона */
  name: Scalars['String'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную платежную систему */
  payment_system_id?: Maybe<Array<Maybe<PaymentSystem>>>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

/**
 * Лимиты комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  /** Сумма лимита */
  amount: Scalars['Decimal'];
  /** Получить шаблон комиссии */
  commission_template: CommissionTemplate;
  /** Получить события лимита */
  commission_template_limit_action_type: CommissionTemplateLimitActionType;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  /** Получить типы лимита */
  commission_template_limit_type: CommissionTemplateLimitType;
  /** Валюта */
  currency: Currencies;
  id: Scalars['ID'];
  /** Получить платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']>;
  /** Получить регион */
  region?: Maybe<Region>;
};

/**
 * Типы событий шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitActionType items. */
export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  /** A list of CommissionTemplateLimitActionType items. */
  data: Array<CommissionTemplateLimitActionType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplateLimit items. */
export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  /** A list of CommissionTemplateLimit items. */
  data: Array<CommissionTemplateLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Периоды шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitPeriod items. */
export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  /** A list of CommissionTemplateLimitPeriod items. */
  data: Array<CommissionTemplateLimitPeriod>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Направления переводов лимитов шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitTransferDirection items. */
export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  /** A list of CommissionTemplateLimitTransferDirection items. */
  data: Array<CommissionTemplateLimitTransferDirection>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Типы лимитов шаблонов
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitType items. */
export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  /** A list of CommissionTemplateLimitType items. */
  data: Array<CommissionTemplateLimitType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplate items. */
export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  /** A list of CommissionTemplate items. */
  data: Array<CommissionTemplate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Компания
 * Administration->Company Info
 * error codes: 500, 400
 */
export type Company = {
  __typename?: 'Company';
  /** Дополнительные поля основные */
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  /** Дополнительные поля данные */
  additional_fields_data?: Maybe<Scalars['JSON']>;
  /** Дополнительные поля */
  additional_fields_info?: Maybe<Scalars['JSON']>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  /** Адресс */
  address?: Maybe<Scalars['String']>;
  /** Backoffice forgot password URL */
  backoffice_forgot_password_url?: Maybe<Scalars['String']>;
  /** Backoffice login URL */
  backoffice_login_url?: Maybe<Scalars['String']>;
  /** Backoffice support EMAIL */
  backoffice_support_email?: Maybe<Scalars['EMAIL']>;
  /** Backoffice support URL */
  backoffice_support_url?: Maybe<Scalars['String']>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Модули компании */
  company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
  /** Регистрационный номер компании */
  company_number?: Maybe<Scalars['String']>;
  /** Контактное лицо */
  contact_name?: Maybe<Scalars['String']>;
  /** Страна */
  country?: Maybe<Country>;
  created_at: Scalars['DateTimeUtc'];
  /** Департаменты компании */
  departments?: Maybe<Array<Maybe<Department>>>;
  /** E-mail компании */
  email: Scalars['EMAIL'];
  /** Количество сотрудниуов */
  employees?: Maybe<Employee>;
  /** Тип сущности */
  entity_type?: Maybe<Scalars['String']>;
  /** Дата окончания лицензии */
  exp_date?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  /** Настройки расписания */
  ledger_settings?: Maybe<CompanyLedgerSettings>;
  /** Номер лицензии */
  license_number?: Maybe<Scalars['String']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Url верификации мембера */
  member_verify_url?: Maybe<Scalars['String']>;
  /** Участники компании */
  members?: Maybe<Array<Maybe<Members>>>;
  /** Количество участников в компании */
  members_count?: Maybe<Scalars['Int']>;
  /** Название компании */
  name: Scalars['String'];
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Должности компании */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  /** Департаменты компании */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** Количество проектов */
  projects_count?: Maybe<Scalars['Int']>;
  /** Адрес регистрации */
  reg_address?: Maybe<Scalars['String']>;
  /** Регистрационный номер */
  reg_number?: Maybe<Scalars['String']>;
  /** счета доходов */
  revenues?: Maybe<CompanyRevenueAccount>;
  /** Состояние */
  state?: Maybe<State>;
  /** Причина состояния */
  state_reason?: Maybe<StateReason>;
  tax_id?: Maybe<Scalars['String']>;
  /** Область деятельности */
  type_of_industry?: Maybe<TypeOfIndustry>;
  updated_at: Scalars['DateTimeUtc'];
  /** URL компании */
  url?: Maybe<Scalars['String']>;
  /** Токен для видеоверификации */
  vv_token?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

export type CompanyLedgerSettings = {
  __typename?: 'CompanyLedgerSettings';
  /** Компания */
  company: Company;
  /** Время окончания периода за день */
  end_of_day_time?: Maybe<Scalars['Time']>;
  /** Номер дня закрытия месяца */
  end_of_month_day?: Maybe<Scalars['Int']>;
  /** Время окончания периода за месяц */
  end_of_month_time?: Maybe<Scalars['Time']>;
  /** Номер дня закрытия недели */
  end_of_week_day?: Maybe<Scalars['Int']>;
  /** Время окончания периода за неделю */
  end_of_week_time?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
};

export type CompanyLedgerSettingsInput = {
  /** Время окончания периода за день */
  end_of_day_time?: InputMaybe<Scalars['Time']>;
  /** Номер дня закрытия месяца */
  end_of_month_day?: InputMaybe<Scalars['Int']>;
  /** Время окончания периода за месяц */
  end_of_month_time?: InputMaybe<Scalars['Time']>;
  /** Номер дня закрытия недели */
  end_of_week_day?: InputMaybe<Scalars['Int']>;
  /** Время окончания периода за неделю */
  end_of_week_time?: InputMaybe<Scalars['Time']>;
};

/** Модули компаний */
export type CompanyModule = {
  __typename?: 'CompanyModule';
  /** IBAN провайдеры */
  iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active: Scalars['Boolean'];
  /** Модуль */
  module?: Maybe<Module>;
  /** Платежные провайдеры */
  payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
};

/** Company Module IBAN Provider */
export type CompanyModuleIbanProvider = {
  __typename?: 'CompanyModuleIbanProvider';
  /** ID модуля компании */
  company_module_id: Scalars['ID'];
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active: Scalars['Boolean'];
  /** ID IBAN провайдера */
  payment_provider_iban: PaymentProviderIban;
};

export type CompanyModuleIbanProviderPassword = {
  __typename?: 'CompanyModuleIbanProviderPassword';
  /** ID */
  id: Scalars['ID'];
  /** Пароль */
  password: Scalars['String'];
};

/** Company Module Payment Provider */
export type CompanyModulePaymentProvider = {
  __typename?: 'CompanyModulePaymentProvider';
  /** ID модуля компании */
  company_module_id: Scalars['ID'];
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active: Scalars['Boolean'];
  /** ID платежного провайдера */
  payment_provider: PaymentProvider;
};

export type CompanyModulePaymentProviderPassword = {
  __typename?: 'CompanyModulePaymentProviderPassword';
  /** ID */
  id: Scalars['ID'];
  /** Пароль */
  password: Scalars['String'];
};

/** A paginated list of Company items. */
export type CompanyPaginator = {
  __typename?: 'CompanyPaginator';
  /** A list of Company items. */
  data: Array<Company>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Company Revenue Accounts
 * Administration->Company Info
 * error codes: 500, 400
 */
export type CompanyRevenueAccount = {
  __typename?: 'CompanyRevenueAccount';
  id: Scalars['ID'];
  /** номер счета */
  number: Scalars['String'];
};

export type ConnectImageableInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

/** Страна */
export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  /** 3х значный ISO код */
  iso: Scalars['String'];
  /** Название страны */
  name: Scalars['String'];
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  /** A list of Country items. */
  data: Array<Country>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Валюты */
export type Currencies = {
  __typename?: 'Currencies';
  /** ISO код валюты */
  code: Scalars['String'];
  id: Scalars['ID'];
  /** Количество знаков после запятой */
  minor_unit?: Maybe<Scalars['Int']>;
  /** Название валюты */
  name: Scalars['String'];
};

export type CurrenciesAndRegions = {
  currency_id?: InputMaybe<Array<Scalars['ID']>>;
  regions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** A paginated list of Currencies items. */
export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  /** A list of Currencies items. */
  data: Array<Currencies>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CurrencyAndRegionResponse = {
  __typename?: 'CurrencyAndRegionResponse';
  currencies?: Maybe<Array<Currencies>>;
  regions?: Maybe<Array<Region>>;
};

export type DateRange = {
  from: Scalars['Date'];
  to: Scalars['DateEnd'];
};

export type DateTimeRange = {
  from: Scalars['DateTimeUtc'];
  to: Scalars['DateTimeUtc'];
};

/**
 * Департаменты
 * Administration->Company Info->Full Profile->Department
 */
export type Department = {
  __typename?: 'Department';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Дата создания Департамент */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Название департамента */
  name: Scalars['String'];
  /** Получить должность */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

/** A paginated list of Department items. */
export type DepartmentPaginator = {
  __typename?: 'DepartmentPaginator';
  /** A list of Department items. */
  data: Array<Department>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Должности */
export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить департамент */
  department?: Maybe<Array<Maybe<Department>>>;
  id: Scalars['ID'];
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Назварие должности */
  name: Scalars['String'];
};

/** A paginated list of DepartmentPosition items. */
export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  /** A list of DepartmentPosition items. */
  data: Array<DepartmentPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Состояния документа */
export type DocumentState = {
  __typename?: 'DocumentState';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** DocumentStateEnum */
export enum DocumentStateEnum {
  /** 3 */
  Approve = 'APPROVE',
  /** 4 */
  Declined = 'DECLINED',
  /** 1 */
  Pending = 'PENDING',
  /** 2 */
  Processing = 'PROCESSING'
}

/** Типы документов */
export type DocumentType = {
  __typename?: 'DocumentType';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Notifications
 */
export type EmailNotification = {
  __typename?: 'EmailNotification';
  /** Получить клиента ApplicantIndividual | ApplicantCompany | Members */
  clientable?: Maybe<Clientable>;
  /** Получить компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить Group Role */
  group_role?: Maybe<GroupRole>;
  /** Тип Группы */
  group_type?: Maybe<GroupType>;
  id: Scalars['ID'];
  /** Тип получателя */
  recipient_type?: Maybe<RecipientType>;
  /** Получить templates */
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  /** Тип */
  type?: Maybe<NotifyType>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** A paginated list of EmailNotification items. */
export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  /** A list of EmailNotification items. */
  data: Array<EmailNotification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** почта */
  from_email?: Maybe<Scalars['String']>;
  /** От кого */
  from_name?: Maybe<Scalars['String']>;
  /** Имя хоста */
  host_name: Scalars['String'];
  id: Scalars['ID'];
  /** Определяем отправлять через данные настройки всю почту или нет */
  is_sending_mail?: Maybe<Scalars['Boolean']>;
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Название шаблона */
  name?: Maybe<Scalars['String']>;
  /** пароль */
  password: Scalars['String'];
  /** Порт */
  port: Scalars['Int'];
  /** ответить кому */
  replay_to?: Maybe<Scalars['String']>;
  /** Защита */
  security?: Maybe<Securities>;
  /** логин */
  username: Scalars['String'];
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  /** Получить Компанию */
  company?: Maybe<Company>;
  /** Контент */
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Получить Компанию */
  layout?: Maybe<EmailTemplateLayout>;
  /** Название */
  name: Scalars['String'];
  /** Тип сервиса */
  service_type: ServiceType;
  /** Тема */
  subject: Scalars['String'];
  /** Тип */
  type: ClientType;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  use_layout?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplateLayout = {
  __typename?: 'EmailTemplateLayout';
  /** Ид компании */
  company_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Footer */
  footer: Scalars['String'];
  /** Header */
  header: Scalars['String'];
  id: Scalars['ID'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type EmailTemplateOnCompanyResponse = {
  __typename?: 'EmailTemplateOnCompanyResponse';
  data: Array<EmailTemplate>;
  layout?: Maybe<EmailTemplateLayout>;
};

export enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED'
}

export type Employee = {
  __typename?: 'Employee';
  /** Номер */
  employees_number: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
};

export enum ExportFileType {
  Csv = 'Csv',
  Pdf = 'Pdf',
  Xls = 'Xls'
}

export type Fee = {
  __typename?: 'Fee';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Клиент (Индивидуал или Компани) */
  client?: Maybe<Client>;
  /** Дата */
  created_at: Scalars['DateTimeUtc'];
  fee: Scalars['Decimal'];
  /** Получить связанного мембера */
  member?: Maybe<Members>;
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  price_list_fee?: Maybe<PriceListFee>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  /** Трансфер */
  transfer_outgoing?: Maybe<TransferOutgoing>;
  /** Тип трансфера */
  transfer_type: Scalars['String'];
};

export type FeeItem = {
  __typename?: 'FeeItem';
  amount_from?: Maybe<Scalars['Decimal']>;
  amount_to?: Maybe<Scalars['Decimal']>;
  fee?: Maybe<Scalars['Float']>;
  mode: Scalars['String'];
  percent?: Maybe<Scalars['Float']>;
};

export type FeeMode = {
  __typename?: 'FeeMode';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** Периоды комиссий */
export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum FeePeriodEnum {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  OtherSchedule = 'OTHER_SCHEDULE',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

/** Типы платежей */
export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** Типы полей */
export enum FieldTypes {
  /** ID страны */
  CountryList = 'CountryList',
  /** Тип поля строка */
  Text = 'Text',
  /** Тип поля текстовое поле */
  TextArea = 'TextArea'
}

export enum FileEntityTypeEnum {
  Applicant = 'APPLICANT',
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  File = 'FILE',
  Member = 'MEMBER',
  Project = 'PROJECT'
}

/** Файлы */
export type Files = {
  __typename?: 'Files';
  /** Кто загружал файл */
  author_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Тип сущности для которой загружается файл */
  entity_type: FileEntityTypeEnum;
  /** Исходное имя файла */
  file_name: Scalars['String'];
  id: Scalars['ID'];
  /** Ссылка на файл */
  link: Scalars['String'];
  /** Тип файла */
  mime_type: Scalars['String'];
  /** Размер загружаемого файла */
  size: Scalars['Int'];
  /** Название файла на ovh */
  storage_name: Scalars['String'];
  /** Путь к загруженному файлу на ovh */
  storage_path: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** A paginated list of Files items. */
export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  /** A list of Files items. */
  data: Array<Files>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type FilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<FilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<FilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Описание группы */
  description?: Maybe<Scalars['String']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** ID типа группы */
  group_type_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** Активная и не активная группа */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Получить связанный модуль */
  module?: Maybe<Module>;
  /** ID модуля */
  module_id?: Maybe<Scalars['ID']>;
  /** Название группы */
  name?: Maybe<Scalars['String']>;
  /** Получить провайдеров */
  providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
  /** Получить связанную роль */
  role?: Maybe<Role>;
  /** ID роли */
  role_id?: Maybe<Scalars['ID']>;
};

/** A paginated list of GroupRole items. */
export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  /** A list of GroupRole items. */
  data: Array<GroupRole>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GroupRoleProvider = {
  __typename?: 'GroupRoleProvider';
  /** Получить связанный шаблон комиссий */
  commission_template?: Maybe<CommissionTemplate>;
  /** ID роль групп */
  group_role_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** По умолчанию */
  is_default?: Maybe<Scalars['Boolean']>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
};

/** Группы */
export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID'];
  /** Название группы */
  name: GroupsEntities;
};

export enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS'
}

/** A paginated list of GroupType items. */
export type GroupTypePaginator = {
  __typename?: 'GroupTypePaginator';
  /** A list of GroupType items. */
  data: Array<GroupType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Groups = {
  __typename?: 'Groups';
  /** @deprecated No longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  /** Название группы */
  name: GroupsEntities;
};

/**
 * Список групп
 * Settings->Manager Groups->Groups List
 */
export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type ImageableMorphToTable = {
  connect?: InputMaybe<ConnectImageableInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type InputAccount = {
  /** Имя аккаунта */
  account_name: Scalars['String'];
  /** Номер аккаунта */
  account_number?: InputMaybe<Scalars['String']>;
  /** ID Individual or Company */
  client_id?: InputMaybe<Scalars['ID']>;
  /** ID шаблона комиссии */
  commission_template_id: Scalars['ID'];
  /** ID компании */
  company_id: Scalars['ID'];
  /** ID валюты */
  currency_id: Scalars['ID'];
  /** Текущий баланс */
  current_balance?: InputMaybe<Scalars['Decimal']>;
  /** ID групроле */
  group_role_id: Scalars['ID'];
  /** ID группы */
  group_type_id: Scalars['ID'];
  /** ID провайдера iban */
  iban_provider_id?: InputMaybe<Scalars['ID']>;
  /** Основной или нет */
  is_primary?: InputMaybe<Scalars['Boolean']>;
  /** лимит минимального баланса */
  max_limit_balance?: InputMaybe<Scalars['Decimal']>;
  /** лимит максимального баланса */
  min_limit_balance?: InputMaybe<Scalars['Decimal']>;
  /** ID владельца */
  owner_id: Scalars['ID'];
  /** ID родительского аккаунта */
  parent_id?: InputMaybe<Scalars['ID']>;
  /** ID банка */
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  /** ID провайдера */
  payment_provider_id: Scalars['ID'];
  /** ID платежной системы */
  payment_system_id?: InputMaybe<Scalars['ID']>;
  /** ID Проекта */
  project_id?: InputMaybe<Scalars['ID']>;
};

export type InputAccountClients = {
  client_type: AccountClientsType;
  id: Scalars['ID'];
};

export type InputBankCorrespondent = {
  /** Account number */
  account_number: Scalars['String'];
  /** Адрес */
  address: Scalars['String'];
  /** Счет банка корреспондента */
  bank_account: Scalars['String'];
  /** SWIFT */
  bank_code: Scalars['String'];
  /** Страна */
  country_id: Scalars['ID'];
  /** IDs currencies and regions */
  currencies_and_regions?: InputMaybe<Array<CurrenciesAndRegions>>;
  /** Активность */
  is_active: Scalars['Boolean'];
  /** Название */
  name: Scalars['String'];
  /** NCS Number */
  ncs_number?: InputMaybe<Scalars['String']>;
  /** ID платежной системы */
  payment_system_id: Scalars['ID'];
  /** swift */
  swift?: InputMaybe<Scalars['String']>;
};

export type InputCommissionTemplate = {
  /** массив ID бизнесов */
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** массив ID лимитов */
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** ID компании */
  company_id?: InputMaybe<Scalars['ID']>;
  /** массив ID валют */
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Описание шаблона */
  description?: InputMaybe<Scalars['String']>;
  /** Активен или нет */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** Название шаблона */
  name: Scalars['String'];
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  /** ID платежной системы */
  payment_system_id: Array<InputMaybe<Scalars['ID']>>;
  /** массив ID регионов */
  region_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InputCommissionTemplateLimit = {
  /** Сумма лимита */
  amount: Scalars['Decimal'];
  /** ID шаблона комиссии */
  commission_template_id: Scalars['ID'];
  /** ID события лимита */
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  /** ID периода лимита */
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  /** ID типа лимита */
  commission_template_limit_type_id: Scalars['ID'];
  /** ID валюты лимита */
  currency_id?: InputMaybe<Scalars['ID']>;
  /** ID количество срабатываний лимита */
  period_count?: InputMaybe<Scalars['ID']>;
  /** ID региона */
  region_id?: InputMaybe<Scalars['ID']>;
};

export type InputCompanyModuleIbanProvider = {
  /** ID модуля компании */
  company_module_id?: InputMaybe<Scalars['ID']>;
  /** Активность */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** ID IBAN провайдера */
  payment_provider_iban_id?: InputMaybe<Scalars['ID']>;
};

export type InputCompanyModulePaymentProvider = {
  /** ID модуля компании */
  company_module_id?: InputMaybe<Scalars['ID']>;
  /** Активность */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};

export type InputGroupRoleProvider = {
  /** ID шаблона комиссий */
  commission_template_id: Scalars['ID'];
  /** По умолчанию */
  is_default?: InputMaybe<Scalars['Boolean']>;
  /** ID платежного провайдера */
  payment_provider_id: Scalars['ID'];
};

export type InputMemberAccessLimitation = {
  /** ID компании */
  company_id: Scalars['ID'];
  /** ID Груп Роль */
  groupRoles?: InputMaybe<PivotTable>;
  /** ID Груп type */
  group_type_id?: InputMaybe<Scalars['ID']>;
  /** ID Мембера */
  member_id: Scalars['ID'];
  /** ID модуля */
  module_id: Scalars['ID'];
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  /** ID проекта */
  project_id?: InputMaybe<Scalars['ID']>;
  /** Показать только своих аппликантов */
  see_own_applicants?: InputMaybe<Scalars['Boolean']>;
};

export type InputPaymentBank = {
  /** Account Number */
  account_number: Scalars['String'];
  /** Адрес банка */
  address: Scalars['String'];
  /** Код банка */
  bank_code?: InputMaybe<Scalars['String']>;
  /** Массив ID корреспондентов */
  bank_correspondent_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Страна */
  country_id: Scalars['ID'];
  /** IDs currencies and regions */
  currencies_and_regions?: InputMaybe<Array<CurrenciesAndRegions>>;
  /** Активный не активный (true/false) */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** Название банка */
  name: Scalars['String'];
  /** NCS Number */
  ncs_number: Scalars['String'];
  /** ID платежного провидера */
  payment_provider_id: Scalars['ID'];
  /** Код платежной системы */
  payment_system_code?: InputMaybe<Scalars['String']>;
  /** ID платежного системы */
  payment_system_id: Scalars['ID'];
  /** SWIFT */
  swift?: InputMaybe<Scalars['String']>;
};

export type InputPaymentProvider = {
  /** Ид компании */
  company_id: Scalars['ID'];
  /** Описание провайдера */
  description?: InputMaybe<Scalars['String']>;
  /** Активен или нет */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** Лого */
  logo_id?: InputMaybe<Scalars['ID']>;
  /** Название провайдера */
  name: Scalars['String'];
  /** массив ID платежных систем */
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InputPaymentProviderIban = {
  /** About */
  about?: InputMaybe<Scalars['String']>;
  /** ID компании */
  company_id: Scalars['ID'];
  /** ID валюты */
  currency_id: Scalars['ID'];
  /** Активность */
  is_active: Scalars['Boolean'];
  /** Лого */
  logo_id?: InputMaybe<Scalars['ID']>;
  /** Название */
  name: Scalars['String'];
  /** Provider Address */
  provider_address?: InputMaybe<Scalars['String']>;
  /** Sort Code */
  sort_code?: InputMaybe<Scalars['String']>;
  /** SWIFT */
  swift?: InputMaybe<Scalars['String']>;
};

export type InputPaymentSystem = {
  /** массив ID Реквизитов */
  banks?: InputMaybe<PivotTable>;
  /** массив ID валют */
  currencies?: InputMaybe<PivotTable>;
  /** Описание */
  description?: InputMaybe<Scalars['String']>;
  /** Активный не активный (true/false) */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** Лого */
  logo_id?: InputMaybe<Scalars['ID']>;
  /** Название платежной системы */
  name: Scalars['String'];
  /** массив типов операций */
  operations?: InputMaybe<PivotTable>;
  /** массив ID провайдеров */
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  /** массив ID стран */
  regions?: InputMaybe<PivotTable>;
};

export type InputProject = {
  /** Дополнительные поля */
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  /** Аватар */
  avatar_id?: InputMaybe<Scalars['ID']>;
  /** URL клиента */
  client_url?: InputMaybe<Scalars['String']>;
  /** Компания */
  company_id: Scalars['ID'];
  /** Описание */
  description?: InputMaybe<Scalars['String']>;
  /** URL восстановления пароля */
  forgot_password_url?: InputMaybe<Scalars['String']>;
  /** URL входа */
  login_url?: InputMaybe<Scalars['String']>;
  /** Модуль */
  module_id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
  /** Настройки */
  project_settings?: InputMaybe<Array<InputMaybe<InputProjectSettings>>>;
  /** Имя отправителя SMS */
  sms_sender_name?: InputMaybe<Scalars['String']>;
  /** Состояние */
  state_id?: InputMaybe<Scalars['ID']>;
  /** Email поддержки */
  support_email?: InputMaybe<Scalars['String']>;
  /** URL */
  url?: InputMaybe<Scalars['String']>;
};

export type InputProjectApiSetting = {
  /** API ключ */
  api_key: Scalars['String'];
  /** is_active */
  is_active?: InputMaybe<Scalars['Boolean']>;
  /** Пароль */
  password: Scalars['String'];
  /** payment_provider_id */
  provider_id: Scalars['ID'];
  /** payment_provider_type */
  provider_type: ProviderTypeEnum;
  /** Кошелек */
  wallet: Scalars['String'];
};

export type InputProjectSettings = {
  applicant_type: ApplicantType;
  commission_template_id?: InputMaybe<Scalars['ID']>;
  group_role_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  iban_provider_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};

export type InputRegion = {
  /** ID компании */
  company_id: Scalars['ID'];
  /** Массив стран */
  countries?: InputMaybe<PivotTable>;
  /** Название региона */
  name: Scalars['String'];
};

/** KYC Timeline */
export type KycTimeline = {
  __typename?: 'KycTimeline';
  /** Действие */
  action: Scalars['String'];
  /** Новые значения */
  action_new_value?: Maybe<Scalars['JSON']>;
  /** Старые значения */
  action_old_value?: Maybe<Scalars['JSON']>;
  action_type: KycTimelineActionType;
  /** Аппликант */
  applicant?: Maybe<Client>;
  /** ID аппликанта */
  applicant_id: Scalars['ID'];
  /** Тип аппликанта */
  applicant_type: ApplicantType;
  /** Браузер */
  browser: Scalars['String'];
  /** Компания */
  company?: Maybe<Company>;
  /** Дата добавления */
  created_at: Scalars['DateTimeUtc'];
  /** Мембер */
  creator?: Maybe<Members>;
  /** Документ */
  document?: Maybe<ApplicantDocument>;
  /** ID */
  id: Scalars['ID'];
  /** IP адрес */
  ip: Scalars['String'];
  /** ОС */
  os: Scalars['String'];
  /** Тег */
  tag: Scalars['String'];
};

export enum KycTimelineActionType {
  DocumentState = 'DOCUMENT_STATE',
  DocumentUpload = 'DOCUMENT_UPLOAD',
  Email = 'EMAIL',
  Profile = 'PROFILE',
  Verification = 'VERIFICATION'
}

export type KycTimelines = {
  __typename?: 'KycTimelines';
  data?: Maybe<Array<KycTimeline>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

/** Языки */
export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID'];
  /** ISO код языка */
  iso: Scalars['String'];
  /** Язык */
  name: Scalars['String'];
};

/** A paginated list of Languages items. */
export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  /** A list of Languages items. */
  data: Array<Languages>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Участники
 * Administration->Members->MemberAccessLimitation
 */
export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить GroupType */
  group?: Maybe<GroupType>;
  /** Получить groupRole */
  group_roles?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  /** Получить Group */
  member?: Maybe<Members>;
  /** Получить модуль */
  module?: Maybe<Module>;
  /** Получить проект */
  project?: Maybe<Project>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
  /** Показать только своих аппликантов */
  see_own_applicants?: Maybe<Scalars['Boolean']>;
};

/** A paginated list of MemberAccessLimitation items. */
export type MemberAccessLimitationPaginator = {
  __typename?: 'MemberAccessLimitationPaginator';
  /** A list of MemberAccessLimitation items. */
  data: Array<MemberAccessLimitation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type MemberProfile = {
  __typename?: 'MemberProfile';
  /** Access limitation groups */
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  /** Дополнительны поля */
  additional_fields?: Maybe<Scalars['JSON']>;
  /** Дополнительны поля для member info */
  additional_info_fields?: Maybe<Scalars['JSON']>;
  /** Member Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']>;
  /** получить компанию участника */
  company: Company;
  /** получить страну участника */
  country?: Maybe<Country>;
  /** Получить департамент */
  department?: Maybe<Department>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']>;
  /** Получить группу участника */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Member ip address */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Активен = true или не активный = false участник */
  is_active?: Maybe<Scalars['Boolean']>;
  /** если true видит только своих аппликантов */
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  /** Подписывать или нет транзакцию */
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  /** is_super_admin */
  is_super_admin?: Maybe<Scalars['Boolean']>;
  /** Получить язык участника */
  language?: Maybe<Languages>;
  /** Последняя авторизация */
  last_login_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
  /** Получить должность */
  position?: Maybe<DepartmentPosition>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']>;
  /** Пол участника */
  sex?: Maybe<Sex>;
  /** ID настройки двухфактороной авторизации */
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  /** Получить настройки двухфакторной авторизации */
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

/** Статусы мембера */
export type MemberStatus = {
  __typename?: 'MemberStatus';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Участники
 * Administration->Members
 */
export type Members = {
  __typename?: 'Members';
  /** Access limitation groups */
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  /** Дополнительны поля */
  additional_fields?: Maybe<Scalars['JSON']>;
  /** Дополнительны поля для member info */
  additional_info_fields?: Maybe<Scalars['JSON']>;
  /** Member Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']>;
  /** получить компанию участника */
  company?: Maybe<Company>;
  /** получить страну участника */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить департамент */
  department?: Maybe<Department>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']>;
  /** Верификация email */
  email_verification?: Maybe<EmailVerification>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']>;
  /** Получить группу участника */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Member ip address */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** если true видит только своих аппликантов */
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  /** Подписывать или нет транзакцию */
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  /** Должность */
  job_title?: Maybe<Scalars['String']>;
  /** Получить язык участника */
  language?: Maybe<Languages>;
  /** Последняя авторизация */
  last_login_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
  /** Статус участника */
  member_status?: Maybe<MemberStatus>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Получить должность */
  position?: Maybe<DepartmentPosition>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']>;
  /** Пол участника */
  sex?: Maybe<Sex>;
  /** ID настройки двухфактороной авторизации */
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  /** Получить настройки двухфакторной авторизации */
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

/** A paginated list of Members items. */
export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  /** A list of Members items. */
  data: Array<Members>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Управление модулями
 * Dashboard -> Applicants -> Company->Full Profile -> Settings
 */
export type Module = {
  __typename?: 'Module';
  id: Scalars['ID'];
  /** Название модуля */
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Добавить модули */
  addCompanyModule?: Maybe<Company>;
  /** Создать метку компании */
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Прикрепить тег к документу */
  attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  /** Создать метку аппликанту */
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Привязать файлы */
  attachFIleToTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Привязать файлы */
  attachFIleToTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Прикрепить respondent_fee к платежной системе */
  attachPaymentSystemRespondentFee?: Maybe<PaymentSystem>;
  /** Отменить exchange перевод */
  cancelTransferExchange?: Maybe<TransferExchange>;
  /** Отменить исходящий FEE перевод */
  cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Создать аккаунт */
  createAccount: Array<Account>;
  /** Создать лимит */
  createAccountLimit?: Maybe<AccountLimit>;
  /** Регистрация частного пользователя */
  createApplicant?: Maybe<ApplicantSettingsProfile>;
  /** Создать applicant company */
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Создать applicant company */
  createApplicantCompany?: Maybe<ApplicantCompany>;
  /** Создать бизнес тип */
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Создать метку */
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Создать модуль компании */
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Создать заметку */
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Добавить запись */
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Добавить документ */
  createApplicantDocument?: Maybe<ApplicantDocument>;
  /** Добавить заметку к документу */
  createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  /** Создать отклонение документа */
  createApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Добавить тег */
  createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Добавить категорию */
  createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Создать частного пользователя */
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Добавить связь Individual с Company */
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Создать должность */
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Создать отношение */
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Создать метку */
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Создать модуль аппликанта */
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Создать заметку */
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Добавить запись */
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Создать причину */
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Создать перевод между аккаунтами */
  createApplicantTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Создать перевод между пользователями */
  createApplicantTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Создать exchange перевод между аккаунтами */
  createApplicantTransferExchange?: Maybe<TransferExchange>;
  /** Создать исходящий перевод */
  createApplicantTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Создать банк корреспондент */
  createBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Создание Business Activity */
  createBusinessActivity?: Maybe<BusinessActivity>;
  /** Создать прай лист */
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Создание шаблона комиссий */
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Создать лимит */
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Создать компанию */
  createCompany?: Maybe<Company>;
  /** Добавить настройки расписания для компании */
  createCompanyLedgerSettings: CompanyLedgerSettings;
  /** Добавить IBAN провайдер к модулю компании */
  createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Добавить пеймент провайдер к модулю компании */
  createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Создать департамент */
  createDepartment?: Maybe<Department>;
  /** Создание должности */
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Добавить тип документа */
  createDocumentType?: Maybe<DocumentType>;
  /** Создать уведомление */
  createEmailNotification?: Maybe<EmailNotification>;
  /** Создать смтп */
  createEmailSmtp?: Maybe<EmailSmtp>;
  /** Создать электронную почту */
  createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  /** Создать электронную почту */
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Создать группу */
  createGroupSettings?: Maybe<GroupRole>;
  /** Создать участника */
  createMember?: Maybe<Members>;
  /** Создать ограничение доступа */
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Создать модуль */
  createModule?: Maybe<Module>;
  /** Создать платеж */
  createPayment?: Maybe<Payments>;
  /** Создать банк */
  createPaymentBank?: Maybe<PaymentBank>;
  /** Создать платежный провайдер */
  createPaymentProvider?: Maybe<PaymentProvider>;
  /** Создать */
  createPaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Создать платежную систему */
  createPaymentSystem?: Maybe<PaymentSystem>;
  /** Создать Цен */
  createPriceListFees?: Maybe<PriceListFee>;
  /** Создать прайс лист для PP */
  createPriceListPPFees?: Maybe<PriceListPpFee>;
  /** Создать прайс лист для QP */
  createPriceListQpFees?: Maybe<PriceListQpFee>;
  /** Создать проект */
  createProject?: Maybe<Project>;
  /** Создать */
  createQuoteProvider?: Maybe<QuoteProvider>;
  createRegion?: Maybe<Region>;
  createRole?: Maybe<Role>;
  /** Создать компанию */
  createTicket?: Maybe<Ticket>;
  /** Создать комментарии */
  createTicketComment?: Maybe<TicketComments>;
  /** Создать перевод между аккаунтами */
  createTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Создать перевод между пользователями */
  createTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Создать exchange перевод между аккаунтами */
  createTransferExchange?: Maybe<TransferExchange>;
  /** Создать входящий перевод */
  createTransferIncoming?: Maybe<TransferIncoming>;
  /** Создать исходящий перевод */
  createTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Создать исходящий Fee перевод */
  createTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Удалить аккаунт */
  deleteAccount?: Maybe<Account>;
  /** Удалить лимит */
  deleteAccountLimit?: Maybe<AccountLimit>;
  /** Отозвать доступ */
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Удалить пользователя */
  deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
  /** Удалить applicant company */
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  /** Удалит метку */
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Удалить модуль */
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Удалит заметку */
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Удалить запись */
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Удалить устройство */
  deleteApplicantDevice?: Maybe<ApplicantDevice>;
  /** Удалить документ */
  deleteApplicantDocument?: Maybe<ApplicantDocument>;
  /** Удалить заметку */
  deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  /** Удалить отклонение документа */
  deleteApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Удалить тег */
  deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Удалить категорию */
  deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Удалить пользователя */
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Удалить связь Individual с Company */
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Удаление должности */
  deleteApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Удалить отношения */
  deleteApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Удалить метку */
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Удалить модуль */
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Удалит заметку */
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Удалить запись */
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Удалит метку */
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Удалить банк корреспондент */
  deleteBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Удалить банк корреспондент currency_and_region */
  deleteBankCorrespondentCurrencyAndRegion?: Maybe<BankCorrespondent>;
  /** Удалить прайс лист */
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Удалить шаблон */
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Удалить лимит */
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Удалить компанию */
  deleteCompany?: Maybe<Company>;
  /** Удалить настройки расписания для компании */
  deleteCompanyLedgerSettings: Scalars['Boolean'];
  /** Удалить модули */
  deleteCompanyModule?: Maybe<Company>;
  /** Удалить IBAN провайдер */
  deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Удалить пеймент провайдер */
  deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Удалить департамент */
  deleteDepartment?: Maybe<Department>;
  /** Удалить должность */
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Удалить тип документа */
  deleteDocumentType?: Maybe<DocumentType>;
  /** Удалить запись */
  deleteEmailNotification?: Maybe<EmailNotification>;
  /** Удалить запись */
  deleteEmailSmtp: Array<EmailSmtp>;
  /** Удалить запись */
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  /** Удалить запись */
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Удалить файл */
  deleteFile?: Maybe<Files>;
  /** Удаление группы */
  deleteGroup?: Maybe<GroupRole>;
  /** Удалить участника */
  deleteMember?: Maybe<Members>;
  /** Удалить ограничение доступа */
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Удалить платеж */
  deletePayment?: Maybe<Payments>;
  /** Удалить платежную систему */
  deletePaymentBank?: Maybe<PaymentBank>;
  /** Удалить платежный провайдер */
  deletePaymentProvider?: Maybe<PaymentProvider>;
  /** Удалить */
  deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Удалить платежную систему */
  deletePaymentSystem?: Maybe<PaymentSystem>;
  /** Удалить Цен */
  deletePriceListFees?: Maybe<PriceListFee>;
  /** Удалить прайс лист PP */
  deletePriceListPPFees?: Maybe<PriceListPpFee>;
  /** Удалить прайс лист QP */
  deletePriceListQpFees?: Maybe<PriceListQpFee>;
  /** Удалить проект */
  deleteProject?: Maybe<Project>;
  /** Удалить */
  deleteQuoteProvider?: Maybe<QuoteProvider>;
  deleteRegion?: Maybe<Region>;
  deleteRole?: Maybe<Role>;
  /** Удалить тег из отклонения документа */
  deleteTagApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Удалить метку */
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Открепить тег от документа */
  detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  /** Удалить метку */
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Открепить respondent_fee от платежной системы */
  detachPaymentSystemRespondentFee?: Maybe<PaymentSystem>;
  /** Исполнить перевод между аккаунтами */
  executeApplicantTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Исполнить перевод между пользователями */
  executeApplicantTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Исполнить exchange перевод */
  executeApplicantTransferExchange?: Maybe<TransferExchange>;
  /** Исполнить перевод между аккаунтами */
  executeTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Исполнить перевод между пользователями */
  executeTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Исполнить exchange перевод */
  executeTransferExchange?: Maybe<TransferExchange>;
  /** Генерация iban individual */
  generateIban: AccountGenerateIbanResponse;
  /** Предоставить доступ */
  grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Сбросить пароль участнику */
  resetMemberPassword?: Maybe<Members>;
  /** Отправить письмо с подтверждением смены email */
  sendConfirmChangeEmail?: Maybe<StatusType>;
  sendEmail?: Maybe<StatusType>;
  /** Отправить ссылку на регистрацию */
  sendEmailRegistation?: Maybe<ApplicantIndividual>;
  /** Сбросить пароль участнику */
  sendEmailResetPassword?: Maybe<ApplicantIndividual>;
  /** Отправить ссылку для подтверждения email */
  sendEmailVerification?: Maybe<ApplicantIndividual>;
  /** Отправить ссылку для подтверждения email */
  sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  /** Отправить ссылку для подтверждения email */
  sendMemberEmailVerification?: Maybe<Members>;
  /** Отправить подтверждение телефона */
  sendPhoneVerification?: Maybe<ApplicantIndividual>;
  /** Отправить подтверждение телефона */
  sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  /** Отправить исходящий перевод */
  sendTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Отправить исходящий FEE перевод */
  sendTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Установить пароль */
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  /** Сделать Активным/Неактивным модуль для Аппликанта Индивидуала/Компании */
  setApplicantModuleActivity?: Maybe<ApplicantModuleActivity>;
  /** Установить PIN пользователю */
  setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
  /** Установить пароль */
  setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
  /** Установить пароль c OTP */
  setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
  /** Установить статус aActive */
  setMemberActive?: Maybe<Members>;
  /** Добавить группу мемберу */
  setMemberGroup?: Maybe<GroupRole>;
  /** Установить статус Inactive */
  setMemberInactive?: Maybe<Members>;
  /** Установить пароль участника */
  setMemberPassword?: Maybe<Members>;
  /** Установить PIN участнику */
  setMemberSecurityPin?: Maybe<Members>;
  /** Установить статус Suspended */
  setMemberSuspended?: Maybe<Members>;
  /** Подписать перевод между аккаунтами */
  signApplicantTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Подписать перевод между пользователями */
  signApplicantTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Подписать exchange перевод */
  signApplicantTransferExchange?: Maybe<TransferExchange>;
  /** Подписать исходящий перевод */
  signApplicantTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Подписать перевод между аккаунтами */
  signTransferBetweenAccounts?: Maybe<TransferIncoming>;
  /** Подписать перевод между пользователями */
  signTransferBetweenUsers?: Maybe<TransferIncoming>;
  /** Подписать exchange перевод */
  signTransferExchange?: Maybe<TransferExchange>;
  /** Подписать входящий перевод */
  signTransferIncoming?: Maybe<TransferIncoming>;
  /** Подписать исходящий перевод */
  signTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Подписать исходящий FEE перевод */
  signTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Редактирование аккаунта */
  updateAccount?: Maybe<Account>;
  /** Обновить лимит */
  updateAccountLimit?: Maybe<AccountLimit>;
  /** Изменение Active Session */
  updateActiveSession: ActiveSessionMutatorResponse;
  /** Изменение аккаунта */
  updateApplicantAccount: ApplicantAccount;
  /** Редактирование applicant banking access */
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Редактирование applicant company */
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  /** Редактирование отнощения */
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Редактирование метки */
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Активировать модуль applicant company */
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Изменить статус applicant company */
  updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
  /** Изменение устройства */
  updateApplicantDevice: TwoFactorAuthToken;
  /** Подтверждение изменения устройства c OTP */
  updateApplicantDeviceWithOtp: ApplicantDevice;
  /** Обновить документ */
  updateApplicantDocument?: Maybe<ApplicantDocument>;
  /** Обновить тег */
  updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Обновить категорию */
  updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Редактирование частного пользователя */
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Редактировать связь Individual с Company */
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Редактирование должности */
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Редактирование отношения */
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Редактирование метки */
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Активировать или деактивировать модуль аппликанту */
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Изменить статус аппликанта */
  updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
  /** Обновить профиль пользователя */
  updateApplicantProfile?: Maybe<ApplicantProfile>;
  /** Редактирование причины */
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Редактировать исходящий перевод */
  updateApplicantTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Обновить банк корреспондент */
  updateBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Изменение Business Activity */
  updateBusinessActivity?: Maybe<BusinessActivity>;
  /** Редактирование частного пользователя */
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Обновление полей шаблона комиссий */
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Обновить лимит */
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Обновить данные компании */
  updateCompany?: Maybe<Company>;
  /** Обновить настройки расписания для компании */
  updateCompanyLedgerSettings: CompanyLedgerSettings;
  /** Активировать/деактивировать модуль */
  updateCompanyModule?: Maybe<CompanyModule>;
  /** Изменить IBAN провайдер */
  updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Изменить пеймент провайдер */
  updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Изменить название департамента */
  updateDepartment?: Maybe<Department>;
  /** Обновить данные уведомления */
  updateEmailNotification?: Maybe<EmailNotification>;
  /** Обновить данные смтп */
  updateEmailSmtp?: Maybe<EmailSmtp>;
  /** Обновить данные компании */
  updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  /** Обновить данные компании */
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Обновить поля группы */
  updateGroupSettings?: Maybe<GroupRole>;
  /** Обновить поля участника */
  updateMember?: Maybe<Members>;
  /** Обновить ограничение доступа */
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Обновить профиль пользователя */
  updateMemberProfile?: Maybe<MemberProfile>;
  /** Редактировать платеж */
  updatePayment?: Maybe<Payments>;
  /** Обновить поля банка */
  updatePaymentBank?: Maybe<PaymentBank>;
  /** Обновить поля платежного провайдера */
  updatePaymentProvider?: Maybe<PaymentProvider>;
  /** Обновить */
  updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Обновить поля платежной системы */
  updatePaymentSystem?: Maybe<PaymentSystem>;
  /** Обновить данные Цен */
  updatePriceListFees?: Maybe<PriceListFee>;
  /** Обновить прайс лист для PP */
  updatePriceListPPFees?: Maybe<PriceListPpFee>;
  /** Обновить прайс лист для QP */
  updatePriceListQpFees?: Maybe<PriceListQpFee>;
  /** Обновить проект */
  updateProject?: Maybe<Project>;
  /** Изменить настройки api проекта */
  updateProjectApiSetting: Array<ProjectApiSetting>;
  /** Обновить */
  updateQuoteProvider?: Maybe<QuoteProvider>;
  updateRegion?: Maybe<Region>;
  updateRole?: Maybe<Role>;
  /** Обновить данные компании */
  updateTicket?: Maybe<Ticket>;
  /** Редактировать входящий перевод */
  updateTransferIncoming?: Maybe<TransferIncoming>;
  /** Редактировать исходящий перевод */
  updateTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Редактировать исходящий FEE перевод */
  updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
};


export type MutationAddCompanyModuleArgs = {
  company_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachFIleToTransferBetweenAccountsArgs = {
  file_id: Array<Scalars['ID']>;
  transfer_incoming_id: Scalars['ID'];
};


export type MutationAttachFIleToTransferBetweenUsersArgs = {
  file_id: Array<Scalars['ID']>;
  transfer_incoming_id: Scalars['ID'];
};


export type MutationAttachPaymentSystemRespondentFeeArgs = {
  payment_system_id: Scalars['ID'];
  respondent_fee_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCancelTransferExchangeArgs = {
  id: Scalars['ID'];
};


export type MutationCancelTransferOutgoingFeeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAccountArgs = {
  input: InputAccount;
};


export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  commission_template_limit_action_type_id: Scalars['ID'];
  commission_template_limit_period_id: Scalars['ID'];
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateApplicantArgs = {
  client_type: ApplicantClientType;
  company_name?: InputMaybe<Scalars['String']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
  phone: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Decimal'];
  monthly_limit: Scalars['Decimal'];
  operation_limit: Scalars['Decimal'];
  role_id: Scalars['ID'];
  used_limit?: InputMaybe<Scalars['Decimal']>;
};


export type MutationCreateApplicantCompanyArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  group_id?: InputMaybe<Scalars['ID']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  project_id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentArgs = {
  added_from?: InputMaybe<Scalars['String']>;
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  document_state_id?: InputMaybe<Scalars['ID']>;
  document_type_id: Scalars['ID'];
  file_id: Scalars['ID'];
  info?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantDocumentInternalNoteArgs = {
  applicant_document_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantDocumentRejectDetailArgs = {
  applicant_document_id: Scalars['ID'];
  applicant_document_tag_id: Array<Scalars['ID']>;
};


export type MutationCreateApplicantDocumentTagArgs = {
  category_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationCreateApplicantDocumentTagCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  phone: Scalars['String'];
  photo_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantTransferBetweenAccountsArgs = {
  amount: Scalars['Decimal'];
  from_account_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateApplicantTransferBetweenUsersArgs = {
  amount: Scalars['Decimal'];
  from_account_id: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
  respondent_fee_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateApplicantTransferExchangeArgs = {
  amount: Scalars['Decimal'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  from_account_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateApplicantTransferOutgoingArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
  project_id: Scalars['ID'];
  recipient_account?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_bank_address?: InputMaybe<Scalars['String']>;
  recipient_bank_country_id: Scalars['ID'];
  recipient_bank_name?: InputMaybe<Scalars['String']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']>;
  recipient_city?: InputMaybe<Scalars['String']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  recipient_state?: InputMaybe<Scalars['String']>;
  recipient_zip?: InputMaybe<Scalars['String']>;
  requested_by_id: Scalars['ID'];
  transfer_swift?: InputMaybe<TransferSwiftInput>;
  urgency_id: Scalars['ID'];
};


export type MutationCreateBankCorrespondentArgs = {
  input: InputBankCorrespondent;
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  company_id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
  region_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateCommissionTemplateArgs = {
  input: InputCommissionTemplate;
};


export type MutationCreateCommissionTemplateLimitArgs = {
  input: InputCommissionTemplateLimit;
};


export type MutationCreateCompanyArgs = {
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationCreateCompanyLedgerSettingsArgs = {
  company_id: Scalars['ID'];
  input: CompanyLedgerSettingsInput;
};


export type MutationCreateCompanyModuleIbanProviderArgs = {
  input: InputCompanyModuleIbanProvider;
};


export type MutationCreateCompanyModulePaymentProviderArgs = {
  input: InputCompanyModulePaymentProvider;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID'];
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateDocumentTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  templates: Array<InputMaybe<Scalars['Int']>>;
};


export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID'];
  content: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  service_type: ServiceType;
  subject: Scalars['String'];
  type: ClientType;
  use_layout: Scalars['Boolean'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer: Scalars['String'];
  header: Scalars['String'];
};


export type MutationCreateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  member_status_id?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  send_email?: InputMaybe<Scalars['Boolean']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationCreateMemberAccessLimitationArgs = {
  input: InputMemberAccessLimitation;
};


export type MutationCreateModuleArgs = {
  name: Scalars['String'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  amount_real?: InputMaybe<Scalars['Decimal']>;
  beneficiary_additional_data?: InputMaybe<Scalars['JSON']>;
  beneficiary_address: Scalars['String'];
  beneficiary_city: Scalars['String'];
  beneficiary_country_id: Scalars['ID'];
  beneficiary_name: Scalars['String'];
  beneficiary_state: Scalars['String'];
  beneficiary_zip: Scalars['String'];
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  fee?: InputMaybe<Scalars['Decimal']>;
  fee_type_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  price_list_fees_id: Scalars['ID'];
  recipient_account: Scalars['String'];
  recipient_bank_address: Scalars['String'];
  recipient_bank_country_id: Scalars['ID'];
  recipient_bank_name: Scalars['String'];
  recipient_bank_swift: Scalars['String'];
  respondent_fees_id: Scalars['ID'];
  urgency_id: Scalars['ID'];
};


export type MutationCreatePaymentBankArgs = {
  input: InputPaymentBank;
};


export type MutationCreatePaymentProviderArgs = {
  input: InputPaymentProvider;
};


export type MutationCreatePaymentProviderIbanArgs = {
  input: InputPaymentProviderIban;
};


export type MutationCreatePaymentSystemArgs = {
  input: InputPaymentSystem;
};


export type MutationCreatePriceListFeesArgs = {
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationCreatePriceListPpFeesArgs = {
  input?: InputMaybe<PriceListPpFeeInput>;
};


export type MutationCreatePriceListQpFeesArgs = {
  input?: InputMaybe<PriceListQpFeeInput>;
};


export type MutationCreateProjectArgs = {
  input: InputProject;
};


export type MutationCreateQuoteProviderArgs = {
  input: QuoteProviderInput;
};


export type MutationCreateRegionArgs = {
  input: InputRegion;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID'];
  member_id: Scalars['ID'];
  message: Scalars['String'];
  status?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID'];
  message: Scalars['String'];
  ticket_id: Scalars['ID'];
};


export type MutationCreateTransferBetweenAccountsArgs = {
  amount: Scalars['Decimal'];
  from_account_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateTransferBetweenUsersArgs = {
  amount: Scalars['Decimal'];
  from_account_id: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
  respondent_fee_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateTransferExchangeArgs = {
  amount: Scalars['Decimal'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  from_account_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  to_account_id: Scalars['ID'];
};


export type MutationCreateTransferIncomingArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_bank_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
  project_id: Scalars['ID'];
  sender_account?: InputMaybe<Scalars['String']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_bank_address?: InputMaybe<Scalars['String']>;
  sender_bank_country_id?: InputMaybe<Scalars['ID']>;
  sender_bank_name?: InputMaybe<Scalars['String']>;
  sender_bank_swift?: InputMaybe<Scalars['String']>;
  sender_city?: InputMaybe<Scalars['String']>;
  sender_country_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  sender_state?: InputMaybe<Scalars['String']>;
  sender_zip?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['Int']>;
  transfer_swift?: InputMaybe<TransferSwiftInput>;
};


export type MutationCreateTransferOutgoingArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  project_id: Scalars['ID'];
  recipient_account?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_bank_address?: InputMaybe<Scalars['String']>;
  recipient_bank_name?: InputMaybe<Scalars['String']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']>;
  recipient_city?: InputMaybe<Scalars['String']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  recipient_state?: InputMaybe<Scalars['String']>;
  recipient_zip?: InputMaybe<Scalars['String']>;
  transfer_swift?: InputMaybe<TransferSwiftInput>;
  urgency_id: Scalars['ID'];
};


export type MutationCreateTransferOutgoingFeeArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  project_id: Scalars['ID'];
  recipient_account?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_bank_address?: InputMaybe<Scalars['String']>;
  recipient_bank_name?: InputMaybe<Scalars['String']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']>;
  recipient_city?: InputMaybe<Scalars['String']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  recipient_state?: InputMaybe<Scalars['String']>;
  recipient_zip?: InputMaybe<Scalars['String']>;
  urgency_id: Scalars['ID'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDeviceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentInternalNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentRejectDetailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBankCorrespondentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBankCorrespondentCurrencyAndRegionArgs = {
  currencies_and_regions: Array<CurrenciesAndRegions>;
  id: Scalars['ID'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyLedgerSettingsArgs = {
  company_id: Scalars['ID'];
};


export type MutationDeleteCompanyModuleArgs = {
  company_id: Scalars['ID'];
};


export type MutationDeleteCompanyModuleIbanProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyModulePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentBankArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderIbanArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListPpFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListQpFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteQuoteProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagApplicantDocumentRejectDetailArgs = {
  applicant_document_tag_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachPaymentSystemRespondentFeeArgs = {
  payment_system_id: Scalars['ID'];
  respondent_fee_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationExecuteApplicantTransferBetweenAccountsArgs = {
  transfer_incoming_id: Scalars['ID'];
};


export type MutationExecuteApplicantTransferBetweenUsersArgs = {
  transfer_incoming_id: Scalars['ID'];
};


export type MutationExecuteApplicantTransferExchangeArgs = {
  id: Scalars['ID'];
};


export type MutationExecuteTransferBetweenAccountsArgs = {
  transfer_incoming_id: Scalars['ID'];
};


export type MutationExecuteTransferBetweenUsersArgs = {
  transfer_incoming_id: Scalars['ID'];
};


export type MutationExecuteTransferExchangeArgs = {
  id: Scalars['ID'];
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID'];
};


export type MutationGrantApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationResetMemberPasswordArgs = {
  id: Scalars['ID'];
};


export type MutationSendConfirmChangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationSendEmailRegistationArgs = {
  applicant_id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSendEmailResetPasswordArgs = {
  applicant_id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSendEmailVerificationArgs = {
  applicant_id: Scalars['ID'];
};


export type MutationSendEmailVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID'];
};


export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID'];
  content?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
};


export type MutationSendMemberEmailVerificationArgs = {
  id: Scalars['ID'];
};


export type MutationSendPhoneVerificationArgs = {
  applicant_id: Scalars['ID'];
};


export type MutationSendPhoneVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID'];
};


export type MutationSendTransferOutgoingArgs = {
  id: Scalars['ID'];
};


export type MutationSendTransferOutgoingFeeArgs = {
  id: Scalars['ID'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetApplicantModuleActivityArgs = {
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  is_active: Scalars['Boolean'];
  module_id: Scalars['ID'];
};


export type MutationSetApplicantSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationSetApplicantSettingsPasswordArgs = {
  current_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
  auth_token: Scalars['String'];
  code: Scalars['String'];
  current_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberActiveArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars['ID'];
  providers?: InputMaybe<Array<InputGroupRoleProvider>>;
  role_id: Scalars['ID'];
};


export type MutationSetMemberInactiveArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberSuspendedArgs = {
  id: Scalars['ID'];
};


export type MutationSignApplicantTransferBetweenAccountsArgs = {
  code: Scalars['String'];
  transfer_incoming_id: Scalars['ID'];
};


export type MutationSignApplicantTransferBetweenUsersArgs = {
  code: Scalars['String'];
  transfer_incoming_id: Scalars['ID'];
};


export type MutationSignApplicantTransferExchangeArgs = {
  id: Scalars['ID'];
};


export type MutationSignApplicantTransferOutgoingArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationSignTransferBetweenAccountsArgs = {
  code: Scalars['String'];
  transfer_incoming_id: Scalars['ID'];
};


export type MutationSignTransferBetweenUsersArgs = {
  code: Scalars['String'];
  transfer_incoming_id: Scalars['ID'];
};


export type MutationSignTransferExchangeArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationSignTransferIncomingArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationSignTransferOutgoingArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationSignTransferOutgoingFeeArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  account_name: Scalars['String'];
  account_state_id: Scalars['ID'];
  id: Scalars['ID'];
  is_primary: Scalars['Boolean'];
};


export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Decimal']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateActiveSessionArgs = {
  id: Scalars['String'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantAccountArgs = {
  id: Scalars['ID'];
  is_show: Scalars['Boolean'];
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
  contact_administrator?: InputMaybe<Scalars['Boolean']>;
  daily_limit?: InputMaybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  monthly_limit?: InputMaybe<Scalars['Decimal']>;
  operation_limit?: InputMaybe<Scalars['Decimal']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  basic_info_additional_field?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contact_email?: InputMaybe<Scalars['EMAIL']>;
  contact_phone?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  expires_at?: InputMaybe<Scalars['DateTimeUtc']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']>;
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
  applicant_status_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateApplicantDeviceArgs = {
  id: Scalars['ID'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantDeviceWithOtpArgs = {
  auth_token: Scalars['String'];
  code: Scalars['String'];
  id: Scalars['ID'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantDocumentArgs = {
  document_state_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  info?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantDocumentTagArgs = {
  category_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  birth_at?: InputMaybe<Scalars['Date']>;
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id?: InputMaybe<Scalars['ID']>;
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ip_address?: InputMaybe<Scalars['String']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  kyc_level_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_screened_at?: InputMaybe<Scalars['DateTimeUtc']>;
  middle_name?: InputMaybe<Scalars['String']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']>;
  percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
  applicant_status_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateApplicantProfileArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  notify_device_email?: InputMaybe<Scalars['Boolean']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantTransferOutgoingArgs = {
  id: Scalars['ID'];
  status_id: Scalars['Int'];
};


export type MutationUpdateBankCorrespondentArgs = {
  id: Scalars['ID'];
  input: InputBankCorrespondent;
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  provider_id?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars['ID'];
  input: InputCommissionTemplate;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
  input: InputCommissionTemplateLimit;
};


export type MutationUpdateCompanyArgs = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_data?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_info?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']>;
  backoffice_forgot_password_url?: InputMaybe<Scalars['String']>;
  backoffice_login_url?: InputMaybe<Scalars['String']>;
  backoffice_support_email?: InputMaybe<Scalars['EMAIL']>;
  backoffice_support_url?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  employees_id?: InputMaybe<Scalars['ID']>;
  entity_type?: InputMaybe<Scalars['String']>;
  exp_date?: InputMaybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
  license_number?: InputMaybe<Scalars['String']>;
  logo_id?: InputMaybe<Scalars['ID']>;
  member_verify_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reg_address?: InputMaybe<Scalars['String']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['ID']>;
  state_reason_id?: InputMaybe<Scalars['ID']>;
  tax_id?: InputMaybe<Scalars['String']>;
  type_of_industry_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  vv_token?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCompanyLedgerSettingsArgs = {
  company_id: Scalars['ID'];
  input: CompanyLedgerSettingsInput;
};


export type MutationUpdateCompanyModuleArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateCompanyModuleIbanProviderArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateCompanyModulePaymentProviderArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateDepartmentArgs = {
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['ID']>;
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  templates?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Int']>;
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']>;
  country_id?: InputMaybe<Scalars['ID']>;
  department_id?: InputMaybe<Scalars['ID']>;
  department_position_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ip_address?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  job_title?: InputMaybe<Scalars['String']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  member_status_id?: InputMaybe<Scalars['ID']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberAccessLimitationArgs = {
  id: Scalars['ID'];
  input: InputMemberAccessLimitation;
};


export type MutationUpdateMemberProfileArgs = {
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePaymentArgs = {
  id: Scalars['ID'];
  status_id: Scalars['ID'];
};


export type MutationUpdatePaymentBankArgs = {
  id: Scalars['ID'];
  input: InputPaymentBank;
};


export type MutationUpdatePaymentProviderArgs = {
  id: Scalars['ID'];
  input: InputPaymentProvider;
};


export type MutationUpdatePaymentProviderIbanArgs = {
  id: Scalars['ID'];
  input: InputPaymentProviderIban;
};


export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID'];
  input: InputPaymentSystem;
};


export type MutationUpdatePriceListFeesArgs = {
  commission_price_list?: InputMaybe<Array<InputMaybe<PriceList>>>;
  id: Scalars['ID'];
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationUpdatePriceListPpFeesArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<PriceListPpFeeInput>;
};


export type MutationUpdatePriceListQpFeesArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<PriceListQpFeeInput>;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  input: InputProject;
};


export type MutationUpdateProjectApiSettingArgs = {
  input: Array<InputProjectApiSetting>;
  project_id: Scalars['ID'];
};


export type MutationUpdateQuoteProviderArgs = {
  id: Scalars['ID'];
  input: QuoteProviderInput;
};


export type MutationUpdateRegionArgs = {
  id: Scalars['ID'];
  input: InputRegion;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID'];
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTransferIncomingArgs = {
  id: Scalars['ID'];
  status_id: Scalars['Int'];
};


export type MutationUpdateTransferOutgoingArgs = {
  id: Scalars['ID'];
  status_id: Scalars['Int'];
};


export type MutationUpdateTransferOutgoingFeeArgs = {
  amount: Scalars['Decimal'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

/** Типы операций */
export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum OperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
  OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
  ScheduledFees = 'SCHEDULED_FEES'
}

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderBy = {
  column: Column;
  order: Order;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** PERMISSION_ACCOUNT_DETAILS */
export enum Permission_Account_Details {
  AccountDetails = 'ACCOUNT_DETAILS',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  ExportStatement = 'EXPORT_STATEMENT',
  GenerateIBAN = 'GENERATE_I_B_A_N',
  MakeTransfer = 'MAKE_TRANSFER',
  Requisites = 'REQUISITES',
  ShowBalance = 'SHOW_BALANCE',
  Statements = 'STATEMENTS'
}

/** PERMISSION_ACCOUNT_LIST */
export enum Permission_Account_List {
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  OpenAccount = 'OPEN_ACCOUNT'
}

/** PERMISSION_APPLICANTS_CORPORATE_LIST */
export enum Permission_Applicants_Corporate_List {
  AddNewCorporate = 'ADD_NEW_CORPORATE',
  DeleteApplicant = 'DELETE_APPLICANT',
  Enabled = 'ENABLED',
  Export = 'EXPORT'
}

/** PERMISSION_APPLICANTS_INDIVIDUAL_LIST */
export enum Permission_Applicants_Individual_List {
  AddNewIndividual = 'ADD_NEW_INDIVIDUAL',
  DeleteApplicant = 'DELETE_APPLICANT',
  Enabled = 'ENABLED',
  Export = 'EXPORT'
}

/** PERMISSION_COMMISSION_TEMPLATE_LIST */
export enum Permission_Commission_Template_List {
  AddNewTemplate = 'ADD_NEW_TEMPLATE',
  Enabled = 'ENABLED'
}

/** PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS */
export enum Permission_Commission_Template_Price_Lists {
  AddNewPriceList = 'ADD_NEW_PRICE_LIST',
  Enabled = 'ENABLED'
}

/** PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_ADD_NEW_FEE */
export enum Permission_Commission_Template_Price_Lists_Add_New_Fee {
  BTAFee = 'B_T_A_FEE',
  BTUFee = 'B_T_U_FEE',
  Enabled = 'ENABLED',
  ExchangeFee = 'EXCHANGE_FEE',
  ServiceFee = 'SERVICE_FEE',
  TransfersFee = 'TRANSFERS_FEE'
}

/** PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_FEES_LIST */
export enum Permission_Commission_Template_Price_Lists_Fees_List {
  Delete = 'DELETE',
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_COMMISSION_TEMPLATE_SETTINGS */
export enum Permission_Commission_Template_Settings {
  Delete = 'DELETE',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Thresholds = 'THRESHOLDS'
}

/** PERMISSION_CORPORATE_FULL_PROFILE_ACTIVE_SESSION */
export enum Permission_Corporate_Full_Profile_Active_Session {
  Enabled = 'ENABLED'
}

/** PERMISSION_CORPORATE_FULL_PROFILE_AUTHENTICATION_LOG */
export enum Permission_Corporate_Full_Profile_Authentication_Log {
  Enabled = 'ENABLED'
}

/** PERMISSION_CORPORATE_FULL_PROFILE_DOCUMENTS */
export enum Permission_Corporate_Full_Profile_Documents {
  AddNewDocument = 'ADD_NEW_DOCUMENT',
  ChangeStatus = 'CHANGE_STATUS',
  Enabled = 'ENABLED'
}

/** PERMISSION_CORPORATE_FULL_PROFILE_GENERAL */
export enum Permission_Corporate_Full_Profile_General {
  AddNewBoardMember = 'ADD_NEW_BOARD_MEMBER',
  ChangeAccountManager = 'CHANGE_ACCOUNT_MANAGER',
  Edit = 'EDIT',
  EditLabels = 'EDIT_LABELS',
  Enabled = 'ENABLED',
  LinkedBoardMembers = 'LINKED_BOARD_MEMBERS'
}

/** PERMISSION_CORPORATE_FULL_PROFILE_K_Y_C_TIMELINE */
export enum Permission_Corporate_Full_Profile_K_Y_C_Timeline {
  AccountStatus = 'ACCOUNT_STATUS',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  InternalNotes = 'INTERNAL_NOTES',
  RiskLevel = 'RISK_LEVEL',
  VerificationStatus = 'VERIFICATION_STATUS'
}

/** PERMISSION_CORPORATE_MODULES */
export enum Permission_Corporate_Modules {
  AccessToOnlineBanking = 'ACCESS_TO_ONLINE_BANKING',
  AddBankingModule = 'ADD_BANKING_MODULE',
  DeleteModule = 'DELETE_MODULE',
  DeleteModuleAccess = 'DELETE_MODULE_ACCESS',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  GrandAccess = 'GRAND_ACCESS',
  GroupSettings = 'GROUP_SETTINGS',
  ModuleStatus = 'MODULE_STATUS'
}

/** PERMISSION_DASHBOARD */
export enum Permission_Dashboard {
  AccountsRequests = 'ACCOUNTS_REQUESTS',
  Enabled = 'ENABLED',
  Tickets = 'TICKETS',
  TransferRequests = 'TRANSFER_REQUESTS',
  UsersRequests = 'USERS_REQUESTS'
}

/** PERMISSION_EMAIL_TEMPLATES_NOTIFICATIONS */
export enum Permission_Email_Templates_Notifications {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  GroupTypeCorporate = 'GROUP_TYPE_CORPORATE',
  GroupTypeIndividual = 'GROUP_TYPE_INDIVIDUAL',
  GroupTypeMember = 'GROUP_TYPE_MEMBER',
  RecipientTypeGroup = 'RECIPIENT_TYPE_GROUP',
  RecipientTypePerson = 'RECIPIENT_TYPE_PERSON'
}

/** PERMISSION_EMAIL_TEMPLATES_SETTINGS */
export enum Permission_Email_Templates_Settings {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  TypeNotificationAdministration = 'TYPE_NOTIFICATION_ADMINISTRATION',
  TypeNotificationClient = 'TYPE_NOTIFICATION_CLIENT'
}

/** PERMISSION_EMAIL_TEMPLATES_S_M_T_P_DETAILS */
export enum Permission_Email_Templates_S_M_T_P_Details {
  AddNewSMTP = 'ADD_NEW_S_M_T_P',
  DeleteSMTPTemplate = 'DELETE_S_M_T_P_TEMPLATE',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  SMTP = 'S_M_T_P'
}

/** PERMISSION_EMAIL_TEMPLATES_TAGS */
export enum Permission_Email_Templates_Tags {
  BankingAdminNotify = 'BANKING_ADMIN_NOTIFY',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  KYCAdminNotify = 'K_Y_C_ADMIN_NOTIFY',
  KYCCommon = 'K_Y_C_COMMON',
  KYCSystem = 'K_Y_C_SYSTEM'
}

/** PERMISSION_GLOBAL_SETTINGS_TRANSACTION_REGION */
export enum Permission_Global_Settings_Transaction_Region {
  AddNewRegion = 'ADD_NEW_REGION',
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_GROUPS_LIST */
export enum Permission_Groups_List {
  AddNewGroup = 'ADD_NEW_GROUP',
  Enabled = 'ENABLED'
}

/** PERMISSION_GROUPS_SETTINGS */
export enum Permission_Groups_Settings {
  Delete = 'DELETE',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  GroupTypeCorporate = 'GROUP_TYPE_CORPORATE',
  GroupTypeIndividual = 'GROUP_TYPE_INDIVIDUAL',
  GroupTypeMember = 'GROUP_TYPE_MEMBER'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_ACTIVE_SESSION */
export enum Permission_Individual_Full_Profile_Active_Session {
  Enabled = 'ENABLED'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_AUTHENTICATION_LOG */
export enum Permission_Individual_Full_Profile_Authentication_Log {
  Enabled = 'ENABLED'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_DOCUMENTS */
export enum Permission_Individual_Full_Profile_Documents {
  AddNewCategory = 'ADD_NEW_CATEGORY',
  AddNewDocument = 'ADD_NEW_DOCUMENT',
  AddNewTag = 'ADD_NEW_TAG',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  InternalNotes = 'INTERNAL_NOTES',
  RejectDetails = 'REJECT_DETAILS'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_GENERAL */
export enum Permission_Individual_Full_Profile_General {
  AddNewCorporate = 'ADD_NEW_CORPORATE',
  ChangeAccountManager = 'CHANGE_ACCOUNT_MANAGER',
  Edit = 'EDIT',
  EditLabels = 'EDIT_LABELS',
  Enabled = 'ENABLED',
  LinkedCorporate = 'LINKED_CORPORATE'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_K_Y_C_TIMELINE */
export enum Permission_Individual_Full_Profile_K_Y_C_Timeline {
  AccountStatus = 'ACCOUNT_STATUS',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  InternalNotes = 'INTERNAL_NOTES',
  RiskLevel = 'RISK_LEVEL',
  VerificationStatus = 'VERIFICATION_STATUS'
}

/** PERMISSION_INDIVIDUAL_FULL_PROFILE_MODULES */
export enum Permission_Individual_Full_Profile_Modules {
  AccountSettingsAndLogin = 'ACCOUNT_SETTINGS_AND_LOGIN',
  AddModule = 'ADD_MODULE',
  DeleteModule = 'DELETE_MODULE',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  GrandAccessBlock = 'GRAND_ACCESS_BLOCK',
  GroupSettings = 'GROUP_SETTINGS',
  ModuleStatus = 'MODULE_STATUS'
}

/** PERMISSION_I_B_A_N_PROVIDER_FULL_PROFILE */
export enum Permission_I_B_A_N_Provider_Full_Profile {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  MemberCompaniesList = 'MEMBER_COMPANIES_LIST'
}

/** PERMISSION_I_B_A_N_PROVIDER_LIST */
export enum Permission_I_B_A_N_Provider_List {
  Enabled = 'ENABLED'
}

/** PERMISSION_LOGS_ACTIVE_SESSION */
export enum Permission_Logs_Active_Session {
  Enabled = 'ENABLED'
}

/** PERMISSION_LOGS_AUTHENTICATION_LOGS */
export enum Permission_Logs_Authentication_Logs {
  Enabled = 'ENABLED'
}

/** PERMISSION_MAKE_TRANSFER */
export enum Permission_Make_Transfer {
  Enabled = 'ENABLED',
  Exchange = 'EXCHANGE',
  Fee = 'FEE',
  IWT = 'I_W_T',
  OWT = 'O_W_T',
  TBA = 'T_B_A',
  TBU = 'T_B_U'
}

/** PERMISSION_MEMBER_COMPANY_LIST */
export enum Permission_Member_Company_List {
  AddMemberCompany = 'ADD_MEMBER_COMPANY',
  Delete = 'DELETE',
  Enabled = 'ENABLED'
}

/** PERMISSION_MEMBER_COMPANY_PROFILE_DEPARTMENTS */
export enum Permission_Member_Company_Profile_Departments {
  AddNewDepartment = 'ADD_NEW_DEPARTMENT',
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_MEMBER_COMPANY_PROFILE_GENERAL */
export enum Permission_Member_Company_Profile_General {
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_MEMBER_COMPANY_PROFILE_MEMBER_LIST */
export enum Permission_Member_Company_Profile_Member_List {
  AddNewMember = 'ADD_NEW_MEMBER',
  Enabled = 'ENABLED'
}

/** PERMISSION_MEMBER_COMPANY_PROFILE_MODULES */
export enum Permission_Member_Company_Profile_Modules {
  AddBankingModule = 'ADD_BANKING_MODULE',
  Edit = 'EDIT',
  EditModuleStatus = 'EDIT_MODULE_STATUS',
  Enabled = 'ENABLED',
  IBANProviderList = 'I_B_A_N_PROVIDER_LIST',
  PaymentProviderList = 'PAYMENT_PROVIDER_LIST'
}

/** PERMISSION_MEMBER_COMPANY_PROFILE_PROJECTS_LIST */
export enum Permission_Member_Company_Profile_Projects_List {
  AddNewProject = 'ADD_NEW_PROJECT',
  Enabled = 'ENABLED'
}

/** PERMISSION_MEMBER_PROFILE_GENERAL_SETTINGS */
export enum Permission_Member_Profile_General_Settings {
  AccessLimitation = 'ACCESS_LIMITATION',
  AddNewAccess = 'ADD_NEW_ACCESS',
  BasicInfo = 'BASIC_INFO',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Settings = 'SETTINGS'
}

/** PERMISSION_MEMBER_SECURITY */
export enum Permission_Member_Security {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Password = 'PASSWORD',
  SecurePIN = 'SECURE_P_I_N',
  SecuritySettings = 'SECURITY_SETTINGS',
  TwoFA = 'TWO_F_A'
}

/** PERMISSION_PAYMENTS_EXCHANGE_DETAILS */
export enum Permission_Payments_Exchange_Details {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  History = 'HISTORY',
  PPInformation = 'P_P_INFORMATION',
  UploadDocument = 'UPLOAD_DOCUMENT'
}

/** PERMISSION_PAYMENTS_EXCHANGE_LIST */
export enum Permission_Payments_Exchange_List {
  Enabled = 'ENABLED',
  ExchangeList = 'EXCHANGE_LIST',
  Export = 'EXPORT',
  TransfersStats = 'TRANSFERS_STATS'
}

/** PERMISSION_PAYMENTS_I_W_T_DETAILS */
export enum Permission_Payments_I_W_T_Details {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  History = 'HISTORY',
  PPInformation = 'P_P_INFORMATION',
  UploadDocument = 'UPLOAD_DOCUMENT'
}

/** PERMISSION_PAYMENTS_I_W_T_LIST */
export enum Permission_Payments_I_W_T_List {
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  IWTList = 'I_W_T_LIST',
  TransfersStats = 'TRANSFERS_STATS'
}

/** PERMISSION_PAYMENTS_O_W_T_DETAILS */
export enum Permission_Payments_O_W_T_Details {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  History = 'HISTORY',
  PPInformation = 'P_P_INFORMATION',
  UploadDocument = 'UPLOAD_DOCUMENT'
}

/** PERMISSION_PAYMENTS_O_W_T_LIST */
export enum Permission_Payments_O_W_T_List {
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  OWTList = 'O_W_T_LIST',
  TransfersStats = 'TRANSFERS_STATS'
}

/** PERMISSION_PAYMENT_PROVIDER_LIST */
export enum Permission_Payment_Provider_List {
  Enabled = 'ENABLED'
}

/** PERMISSION_PAYMENT_PROVIDER_SETTINGS */
export enum Permission_Payment_Provider_Settings {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  PaymentSystemDetails = 'PAYMENT_SYSTEM_DETAILS'
}

/** PERMISSION_PAYMENT_SYSTEM_FULL_PROFILE */
export enum Permission_Payment_System_Full_Profile {
  AddNewCorrBank = 'ADD_NEW_CORR_BANK',
  BanksCorrespondent = 'BANKS_CORRESPONDENT',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_PAYMENT_SYSTEM_LIST */
export enum Permission_Payment_System_List {
  Enabled = 'ENABLED'
}

/** PERMISSION_PROJECTS_A_P_I_SETTINGS */
export enum Permission_Projects_A_P_I_Settings {
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  IBANProviderList = 'I_B_A_N_PROVIDER_LIST',
  PaymentProviderList = 'PAYMENT_PROVIDER_LIST'
}

/** PERMISSION_PROJECTS_GENERAL_SETTINGS */
export enum Permission_Projects_General_Settings {
  BasicInfo = 'BASIC_INFO',
  DefaultSettingsForClientRegistrations = 'DEFAULT_SETTINGS_FOR_CLIENT_REGISTRATIONS',
  Edit = 'EDIT',
  Enabled = 'ENABLED'
}

/** PERMISSION_REQUISITES */
export enum Permission_Requisites {
  Enabled = 'ENABLED',
  Export = 'EXPORT',
  SendRequisites = 'SEND_REQUISITES'
}

/** PERMISSION_ROLES_SETTINGS */
export enum Permission_Roles_Settings {
  Delete = 'DELETE',
  Edit = 'EDIT',
  Enabled = 'ENABLED',
  GroupTypeCorporate = 'GROUP_TYPE_CORPORATE',
  GroupTypeIndividual = 'GROUP_TYPE_INDIVIDUAL',
  GroupTypeMember = 'GROUP_TYPE_MEMBER'
}

/** PERMISSION_ROLE_LIST */
export enum Permission_Role_List {
  AddNewRole = 'ADD_NEW_ROLE',
  Enabled = 'ENABLED',
  ShowUserList = 'SHOW_USER_LIST'
}

/** PERMISSION_SIGN_PAYMENTS */
export enum Permission_Sign_Payments {
  Enabled = 'ENABLED',
  Exchange = 'EXCHANGE',
  Fee = 'FEE',
  IWT = 'I_W_T',
  OWT = 'O_W_T',
  TBA = 'T_B_A',
  TBU = 'T_B_U'
}

/** PERMISSION_STATEMENT */
export enum Permission_Statement {
  Enabled = 'ENABLED',
  Export = 'EXPORT'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

/**
 * Банки
 * Settings->Payment System -> Payment System List -> Profile
 */
export type PaymentBank = {
  __typename?: 'PaymentBank';
  /** Account Number */
  account_number: Scalars['String'];
  /** Адрес банка */
  address?: Maybe<Scalars['String']>;
  /** Код банка */
  bank_code?: Maybe<Scalars['String']>;
  /** Получить банкы корреспондент */
  bank_correspondent?: Maybe<Array<Maybe<BankCorrespondent>>>;
  /** Получить страну */
  country?: Maybe<Country>;
  /** IDs currencies and regions */
  currencies_and_regions: Array<Maybe<CurrencyAndRegionResponse>>;
  id: Scalars['ID'];
  /** Активный не активный (true/false) */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название банка */
  name: Scalars['String'];
  /** NCS Number */
  ncs_number: Scalars['String'];
  /** Платежная провидер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Платежная система */
  payment_system?: Maybe<PaymentSystem>;
  /** Код платежной системы */
  payment_system_code?: Maybe<Scalars['String']>;
  /** SWIFT */
  swift?: Maybe<Scalars['String']>;
};

/** A paginated list of PaymentBank items. */
export type PaymentBankPaginator = {
  __typename?: 'PaymentBankPaginator';
  /** A list of PaymentBank items. */
  data: Array<PaymentBank>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Платежные провайдеры
 * Banking -> Payment Providers
 */
export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  commission_price_list?: Maybe<CommissionPriceList>;
  company?: Maybe<Company>;
  /** Описание провайдера */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Название провайдера */
  name: Scalars['String'];
  /** Получить связанные платежные системы */
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

export type PaymentProviderHistory = {
  __typename?: 'PaymentProviderHistory';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** ID */
  id: Scalars['ID'];
  /** ID провайдера */
  payment_provider_id: Scalars['ID'];
  /** Информация от провайдера */
  provider_response?: Maybe<Scalars['JSON']>;
  /** ID трансфера */
  transfer_id: Scalars['ID'];
  /** Тип трансфера */
  transfer_type?: Maybe<Scalars['String']>;
};

/** Payment Provider Iban */
export type PaymentProviderIban = {
  __typename?: 'PaymentProviderIban';
  /** About */
  about?: Maybe<Scalars['String']>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить валюту */
  currency?: Maybe<Currencies>;
  /** ID */
  id: Scalars['ID'];
  /** Активность */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Название */
  name: Scalars['String'];
  /** Provider Address */
  provider_address?: Maybe<Scalars['String']>;
  /** Sort Code */
  sort_code?: Maybe<Scalars['String']>;
  /** SWIFT */
  swift?: Maybe<Scalars['String']>;
};

/** A paginated list of PaymentProviderIban items. */
export type PaymentProviderIbanPaginator = {
  __typename?: 'PaymentProviderIbanPaginator';
  /** A list of PaymentProviderIban items. */
  data: Array<PaymentProviderIban>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of PaymentProvider items. */
export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  /** A list of PaymentProvider items. */
  data: Array<PaymentProvider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Типы платежей */
export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Платежные системы
 * Settings->Payment System
 */
export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  /** Получить банк корреспондент */
  bank_correspondent?: Maybe<BankCorrespondent>;
  /** Получить Реквизиты */
  banks?: Maybe<Array<Maybe<PaymentBank>>>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  /** Получить связанные валюты */
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** Описание */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Активна или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Название платежной системы */
  name: Scalars['String'];
  /** Получить типы операций */
  operations?: Maybe<Array<Maybe<OperationType>>>;
  /** Получить Платежные провайдеры */
  providers?: Maybe<PaymentProvider>;
  /** Получить связанные регионы */
  regions?: Maybe<Array<Maybe<Region>>>;
  respondent_fees?: Maybe<Array<Maybe<RespondentFee>>>;
};

/** A paginated list of PaymentSystem items. */
export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  /** A list of PaymentSystem items. */
  data: Array<PaymentSystem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Срочность */
export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Платежи
 * Banking -> Payments List
 */
export type Payments = {
  __typename?: 'Payments';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal'];
  amount_real: Scalars['Decimal'];
  beneficiary_additional_data?: Maybe<Scalars['JSON']>;
  beneficiary_address?: Maybe<Scalars['String']>;
  beneficiary_city?: Maybe<Scalars['String']>;
  beneficiary_country?: Maybe<Country>;
  beneficiary_name?: Maybe<Scalars['String']>;
  beneficiary_state?: Maybe<Scalars['String']>;
  beneficiary_zip?: Maybe<Scalars['String']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Комиссия */
  fee?: Maybe<Scalars['Decimal']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID'];
  /** Получить связанного мембера */
  member?: Maybe<Members>;
  /** Номер платежа */
  payment_number?: Maybe<Scalars['String']>;
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанныую срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  price_list_fees?: Maybe<PriceListFee>;
  received_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Номер счета или IBAN получателя */
  recipient_account?: Maybe<Scalars['String']>;
  recipient_bank_address?: Maybe<Scalars['String']>;
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name?: Maybe<Scalars['String']>;
  recipient_bank_swift?: Maybe<Scalars['String']>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  status_id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** A paginated list of Payments items. */
export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  /** A list of Payments items. */
  data: Array<Payments>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PermissionAuth = {
  __typename?: 'PermissionAuth';
  PERMISSION_ACCOUNT_DETAILS?: Maybe<Array<Maybe<Permission_Account_Details>>>;
  PERMISSION_ACCOUNT_LIST?: Maybe<Array<Maybe<Permission_Account_List>>>;
  PERMISSION_APPLICANTS_CORPORATE_LIST?: Maybe<Array<Maybe<Permission_Applicants_Corporate_List>>>;
  PERMISSION_APPLICANTS_INDIVIDUAL_LIST?: Maybe<Array<Maybe<Permission_Applicants_Individual_List>>>;
  PERMISSION_COMMISSION_TEMPLATE_LIST?: Maybe<Array<Maybe<Permission_Commission_Template_List>>>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS?: Maybe<Array<Maybe<Permission_Commission_Template_Price_Lists>>>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_ADD_NEW_FEE?: Maybe<Array<Maybe<Permission_Commission_Template_Price_Lists_Add_New_Fee>>>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_FEES_LIST?: Maybe<Array<Maybe<Permission_Commission_Template_Price_Lists_Fees_List>>>;
  PERMISSION_COMMISSION_TEMPLATE_SETTINGS?: Maybe<Array<Maybe<Permission_Commission_Template_Settings>>>;
  PERMISSION_CORPORATE_FULL_PROFILE_ACTIVE_SESSION?: Maybe<Array<Maybe<Permission_Corporate_Full_Profile_Active_Session>>>;
  PERMISSION_CORPORATE_FULL_PROFILE_AUTHENTICATION_LOG?: Maybe<Array<Maybe<Permission_Corporate_Full_Profile_Authentication_Log>>>;
  PERMISSION_CORPORATE_FULL_PROFILE_DOCUMENTS?: Maybe<Array<Maybe<Permission_Corporate_Full_Profile_Documents>>>;
  PERMISSION_CORPORATE_FULL_PROFILE_GENERAL?: Maybe<Array<Maybe<Permission_Corporate_Full_Profile_General>>>;
  PERMISSION_CORPORATE_FULL_PROFILE_K_Y_C_TIMELINE?: Maybe<Array<Maybe<Permission_Corporate_Full_Profile_K_Y_C_Timeline>>>;
  PERMISSION_CORPORATE_MODULES?: Maybe<Array<Maybe<Permission_Corporate_Modules>>>;
  PERMISSION_DASHBOARD?: Maybe<Array<Maybe<Permission_Dashboard>>>;
  PERMISSION_EMAIL_TEMPLATES_NOTIFICATIONS?: Maybe<Array<Maybe<Permission_Email_Templates_Notifications>>>;
  PERMISSION_EMAIL_TEMPLATES_SETTINGS?: Maybe<Array<Maybe<Permission_Email_Templates_Settings>>>;
  PERMISSION_EMAIL_TEMPLATES_S_M_T_P_DETAILS?: Maybe<Array<Maybe<Permission_Email_Templates_S_M_T_P_Details>>>;
  PERMISSION_EMAIL_TEMPLATES_TAGS?: Maybe<Array<Maybe<Permission_Email_Templates_Tags>>>;
  PERMISSION_GLOBAL_SETTINGS_TRANSACTION_REGION?: Maybe<Array<Maybe<Permission_Global_Settings_Transaction_Region>>>;
  PERMISSION_GROUPS_LIST?: Maybe<Array<Maybe<Permission_Groups_List>>>;
  PERMISSION_GROUPS_SETTINGS?: Maybe<Array<Maybe<Permission_Groups_Settings>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_ACTIVE_SESSION?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_Active_Session>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_AUTHENTICATION_LOG?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_Authentication_Log>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_DOCUMENTS?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_Documents>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_GENERAL?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_General>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_K_Y_C_TIMELINE?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_K_Y_C_Timeline>>>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_MODULES?: Maybe<Array<Maybe<Permission_Individual_Full_Profile_Modules>>>;
  PERMISSION_I_B_A_N_PROVIDER_FULL_PROFILE?: Maybe<Array<Maybe<Permission_I_B_A_N_Provider_Full_Profile>>>;
  PERMISSION_I_B_A_N_PROVIDER_LIST?: Maybe<Array<Maybe<Permission_I_B_A_N_Provider_List>>>;
  PERMISSION_LOGS_ACTIVE_SESSION?: Maybe<Array<Maybe<Permission_Logs_Active_Session>>>;
  PERMISSION_LOGS_AUTHENTICATION_LOGS?: Maybe<Array<Maybe<Permission_Logs_Authentication_Logs>>>;
  PERMISSION_MAKE_TRANSFER?: Maybe<Array<Maybe<Permission_Make_Transfer>>>;
  PERMISSION_MEMBER_COMPANY_LIST?: Maybe<Array<Maybe<Permission_Member_Company_List>>>;
  PERMISSION_MEMBER_COMPANY_PROFILE_DEPARTMENTS?: Maybe<Array<Maybe<Permission_Member_Company_Profile_Departments>>>;
  PERMISSION_MEMBER_COMPANY_PROFILE_GENERAL?: Maybe<Array<Maybe<Permission_Member_Company_Profile_General>>>;
  PERMISSION_MEMBER_COMPANY_PROFILE_MEMBER_LIST?: Maybe<Array<Maybe<Permission_Member_Company_Profile_Member_List>>>;
  PERMISSION_MEMBER_COMPANY_PROFILE_MODULES?: Maybe<Array<Maybe<Permission_Member_Company_Profile_Modules>>>;
  PERMISSION_MEMBER_COMPANY_PROFILE_PROJECTS_LIST?: Maybe<Array<Maybe<Permission_Member_Company_Profile_Projects_List>>>;
  PERMISSION_MEMBER_PROFILE_GENERAL_SETTINGS?: Maybe<Array<Maybe<Permission_Member_Profile_General_Settings>>>;
  PERMISSION_MEMBER_SECURITY?: Maybe<Array<Maybe<Permission_Member_Security>>>;
  PERMISSION_PAYMENTS_EXCHANGE_DETAILS?: Maybe<Array<Maybe<Permission_Payments_Exchange_Details>>>;
  PERMISSION_PAYMENTS_EXCHANGE_LIST?: Maybe<Array<Maybe<Permission_Payments_Exchange_List>>>;
  PERMISSION_PAYMENTS_I_W_T_DETAILS?: Maybe<Array<Maybe<Permission_Payments_I_W_T_Details>>>;
  PERMISSION_PAYMENTS_I_W_T_LIST?: Maybe<Array<Maybe<Permission_Payments_I_W_T_List>>>;
  PERMISSION_PAYMENTS_O_W_T_DETAILS?: Maybe<Array<Maybe<Permission_Payments_O_W_T_Details>>>;
  PERMISSION_PAYMENTS_O_W_T_LIST?: Maybe<Array<Maybe<Permission_Payments_O_W_T_List>>>;
  PERMISSION_PAYMENT_PROVIDER_LIST?: Maybe<Array<Maybe<Permission_Payment_Provider_List>>>;
  PERMISSION_PAYMENT_PROVIDER_SETTINGS?: Maybe<Array<Maybe<Permission_Payment_Provider_Settings>>>;
  PERMISSION_PAYMENT_SYSTEM_FULL_PROFILE?: Maybe<Array<Maybe<Permission_Payment_System_Full_Profile>>>;
  PERMISSION_PAYMENT_SYSTEM_LIST?: Maybe<Array<Maybe<Permission_Payment_System_List>>>;
  PERMISSION_PROJECTS_A_P_I_SETTINGS?: Maybe<Array<Maybe<Permission_Projects_A_P_I_Settings>>>;
  PERMISSION_PROJECTS_GENERAL_SETTINGS?: Maybe<Array<Maybe<Permission_Projects_General_Settings>>>;
  PERMISSION_REQUISITES?: Maybe<Array<Maybe<Permission_Requisites>>>;
  PERMISSION_ROLES_SETTINGS?: Maybe<Array<Maybe<Permission_Roles_Settings>>>;
  PERMISSION_ROLE_LIST?: Maybe<Array<Maybe<Permission_Role_List>>>;
  PERMISSION_SIGN_PAYMENTS?: Maybe<Array<Maybe<Permission_Sign_Payments>>>;
  PERMISSION_STATEMENT?: Maybe<Array<Maybe<Permission_Statement>>>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

/** Allowed column names for PermissionCategory.permissionList.permissionType. */
export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

/** Dynamic WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']>;
  permission_category_id?: Maybe<Scalars['ID']>;
  role_id?: Maybe<Scalars['ID']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

export type PermissionType = {
  __typename?: 'PermissionType';
  PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
  PERMISSION_ACCOUNT_LIST?: Maybe<Permission_Account_List>;
  PERMISSION_APPLICANTS_CORPORATE_LIST?: Maybe<Permission_Applicants_Corporate_List>;
  PERMISSION_APPLICANTS_INDIVIDUAL_LIST?: Maybe<Permission_Applicants_Individual_List>;
  PERMISSION_COMMISSION_TEMPLATE_LIST?: Maybe<Permission_Commission_Template_List>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS?: Maybe<Permission_Commission_Template_Price_Lists>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_ADD_NEW_FEE?: Maybe<Permission_Commission_Template_Price_Lists_Add_New_Fee>;
  PERMISSION_COMMISSION_TEMPLATE_PRICE_LISTS_FEES_LIST?: Maybe<Permission_Commission_Template_Price_Lists_Fees_List>;
  PERMISSION_COMMISSION_TEMPLATE_SETTINGS?: Maybe<Permission_Commission_Template_Settings>;
  PERMISSION_CORPORATE_FULL_PROFILE_ACTIVE_SESSION?: Maybe<Permission_Corporate_Full_Profile_Active_Session>;
  PERMISSION_CORPORATE_FULL_PROFILE_AUTHENTICATION_LOG?: Maybe<Permission_Corporate_Full_Profile_Authentication_Log>;
  PERMISSION_CORPORATE_FULL_PROFILE_DOCUMENTS?: Maybe<Permission_Corporate_Full_Profile_Documents>;
  PERMISSION_CORPORATE_FULL_PROFILE_GENERAL?: Maybe<Permission_Corporate_Full_Profile_General>;
  PERMISSION_CORPORATE_FULL_PROFILE_K_Y_C_TIMELINE?: Maybe<Permission_Corporate_Full_Profile_K_Y_C_Timeline>;
  PERMISSION_CORPORATE_MODULES?: Maybe<Permission_Corporate_Modules>;
  PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
  PERMISSION_EMAIL_TEMPLATES_NOTIFICATIONS?: Maybe<Permission_Email_Templates_Notifications>;
  PERMISSION_EMAIL_TEMPLATES_SETTINGS?: Maybe<Permission_Email_Templates_Settings>;
  PERMISSION_EMAIL_TEMPLATES_S_M_T_P_DETAILS?: Maybe<Permission_Email_Templates_S_M_T_P_Details>;
  PERMISSION_EMAIL_TEMPLATES_TAGS?: Maybe<Permission_Email_Templates_Tags>;
  PERMISSION_GLOBAL_SETTINGS_TRANSACTION_REGION?: Maybe<Permission_Global_Settings_Transaction_Region>;
  PERMISSION_GROUPS_LIST?: Maybe<Permission_Groups_List>;
  PERMISSION_GROUPS_SETTINGS?: Maybe<Permission_Groups_Settings>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_ACTIVE_SESSION?: Maybe<Permission_Individual_Full_Profile_Active_Session>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_AUTHENTICATION_LOG?: Maybe<Permission_Individual_Full_Profile_Authentication_Log>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_DOCUMENTS?: Maybe<Permission_Individual_Full_Profile_Documents>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_GENERAL?: Maybe<Permission_Individual_Full_Profile_General>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_K_Y_C_TIMELINE?: Maybe<Permission_Individual_Full_Profile_K_Y_C_Timeline>;
  PERMISSION_INDIVIDUAL_FULL_PROFILE_MODULES?: Maybe<Permission_Individual_Full_Profile_Modules>;
  PERMISSION_I_B_A_N_PROVIDER_FULL_PROFILE?: Maybe<Permission_I_B_A_N_Provider_Full_Profile>;
  PERMISSION_I_B_A_N_PROVIDER_LIST?: Maybe<Permission_I_B_A_N_Provider_List>;
  PERMISSION_LOGS_ACTIVE_SESSION?: Maybe<Permission_Logs_Active_Session>;
  PERMISSION_LOGS_AUTHENTICATION_LOGS?: Maybe<Permission_Logs_Authentication_Logs>;
  PERMISSION_MAKE_TRANSFER?: Maybe<Permission_Make_Transfer>;
  PERMISSION_MEMBER_COMPANY_LIST?: Maybe<Permission_Member_Company_List>;
  PERMISSION_MEMBER_COMPANY_PROFILE_DEPARTMENTS?: Maybe<Permission_Member_Company_Profile_Departments>;
  PERMISSION_MEMBER_COMPANY_PROFILE_GENERAL?: Maybe<Permission_Member_Company_Profile_General>;
  PERMISSION_MEMBER_COMPANY_PROFILE_MEMBER_LIST?: Maybe<Permission_Member_Company_Profile_Member_List>;
  PERMISSION_MEMBER_COMPANY_PROFILE_MODULES?: Maybe<Permission_Member_Company_Profile_Modules>;
  PERMISSION_MEMBER_COMPANY_PROFILE_PROJECTS_LIST?: Maybe<Permission_Member_Company_Profile_Projects_List>;
  PERMISSION_MEMBER_PROFILE_GENERAL_SETTINGS?: Maybe<Permission_Member_Profile_General_Settings>;
  PERMISSION_MEMBER_SECURITY?: Maybe<Permission_Member_Security>;
  PERMISSION_PAYMENTS_EXCHANGE_DETAILS?: Maybe<Permission_Payments_Exchange_Details>;
  PERMISSION_PAYMENTS_EXCHANGE_LIST?: Maybe<Permission_Payments_Exchange_List>;
  PERMISSION_PAYMENTS_I_W_T_DETAILS?: Maybe<Permission_Payments_I_W_T_Details>;
  PERMISSION_PAYMENTS_I_W_T_LIST?: Maybe<Permission_Payments_I_W_T_List>;
  PERMISSION_PAYMENTS_O_W_T_DETAILS?: Maybe<Permission_Payments_O_W_T_Details>;
  PERMISSION_PAYMENTS_O_W_T_LIST?: Maybe<Permission_Payments_O_W_T_List>;
  PERMISSION_PAYMENT_PROVIDER_LIST?: Maybe<Permission_Payment_Provider_List>;
  PERMISSION_PAYMENT_PROVIDER_SETTINGS?: Maybe<Permission_Payment_Provider_Settings>;
  PERMISSION_PAYMENT_SYSTEM_FULL_PROFILE?: Maybe<Permission_Payment_System_Full_Profile>;
  PERMISSION_PAYMENT_SYSTEM_LIST?: Maybe<Permission_Payment_System_List>;
  PERMISSION_PROJECTS_A_P_I_SETTINGS?: Maybe<Permission_Projects_A_P_I_Settings>;
  PERMISSION_PROJECTS_GENERAL_SETTINGS?: Maybe<Permission_Projects_General_Settings>;
  PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
  PERMISSION_ROLES_SETTINGS?: Maybe<Permission_Roles_Settings>;
  PERMISSION_ROLE_LIST?: Maybe<Permission_Role_List>;
  PERMISSION_SIGN_PAYMENTS?: Maybe<Permission_Sign_Payments>;
  PERMISSION_STATEMENT?: Maybe<Permission_Statement>;
};

/**
 * Список разрешений
 * Settings->Manager Roles->Rol
 */
export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']>;
  display_name?: Maybe<Scalars['String']>;
  guard_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PivotTable = {
  sync?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/**
 * Цены прайс листа
 * Banking -> Цены прайс листа
 */
export type PriceListFee = {
  __typename?: 'PriceListFee';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  fee_ranges?: Maybe<Scalars['JSON']>;
  /** Тип */
  fee_type?: Maybe<FeeType>;
  /** Цены */
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  /** Период */
  period?: Maybe<FeePeriod>;
  price_list_id?: Maybe<Scalars['ID']>;
  /** Провайдер квот */
  quote_provider?: Maybe<QuoteProvider>;
  scheduled?: Maybe<PriceListFeeScheduled>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PriceListFeeCurrency = {
  __typename?: 'PriceListFeeCurrency';
  currency_id: Scalars['ID'];
  fee?: Maybe<Array<Maybe<FeeItem>>>;
  id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
};

export type PriceListFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String'];
  operation_type_id: Scalars['ID'];
  period_id?: InputMaybe<Scalars['ID']>;
  price_list_id: Scalars['ID'];
  quote_provider_id?: InputMaybe<Scalars['ID']>;
  scheduled?: InputMaybe<PriceListFeeScheduledInput>;
  type_id: Scalars['ID'];
};

export type PriceListFeeItem = {
  amount_from?: InputMaybe<Scalars['Decimal']>;
  amount_to?: InputMaybe<Scalars['Decimal']>;
  fee?: InputMaybe<Scalars['Float']>;
  mode: Scalars['String'];
  percent?: InputMaybe<Scalars['Float']>;
};

/** A paginated list of PriceListFee items. */
export type PriceListFeePaginator = {
  __typename?: 'PriceListFeePaginator';
  /** A list of PriceListFee items. */
  data: Array<PriceListFee>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PriceListFeeScheduled = {
  __typename?: 'PriceListFeeScheduled';
  end_date?: Maybe<Scalars['DateTimeUtc']>;
  end_date_id?: Maybe<Scalars['ID']>;
  recurrent_interval?: Maybe<Scalars['Int']>;
  starting_date?: Maybe<Scalars['DateTimeUtc']>;
  starting_date_id?: Maybe<Scalars['ID']>;
};

export type PriceListFeeScheduledInput = {
  end_date?: InputMaybe<Scalars['DateTimeUtc']>;
  end_date_id?: InputMaybe<Scalars['ID']>;
  recurrent_interval?: InputMaybe<Scalars['Int']>;
  starting_date?: InputMaybe<Scalars['DateTimeUtc']>;
  starting_date_id?: InputMaybe<Scalars['ID']>;
};

export type PriceListFeesList = {
  currency_id: Scalars['ID'];
  fee: Array<Array<InputMaybe<PriceListFeeItem>>>;
};

export type PriceListPpFee = {
  __typename?: 'PriceListPPFee';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  fee_ranges?: Maybe<Scalars['JSON']>;
  /** Тип */
  fee_type?: Maybe<FeeType>;
  /** Цены */
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  /** Период */
  period?: Maybe<FeePeriod>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PriceListPpFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  period_id: Scalars['ID'];
  type_id: Scalars['ID'];
};

export type PriceListQpFee = {
  __typename?: 'PriceListQpFee';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  fee_ranges?: Maybe<Scalars['JSON']>;
  /** Тип */
  fee_type?: Maybe<FeeType>;
  /** Цены */
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
  /** Период */
  period?: Maybe<FeePeriod>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PriceListQpFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String'];
  period_id: Scalars['ID'];
  quote_provider_id: Scalars['ID'];
  type_id: Scalars['ID'];
};

export type Project = {
  __typename?: 'Project';
  /** Дополнительны поля */
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  /** Аватар */
  avatar?: Maybe<Files>;
  /** URL клиента */
  client_url?: Maybe<Scalars['String']>;
  /** Компания */
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc'];
  /** Описание */
  description?: Maybe<Scalars['String']>;
  /** URL восстановления пароля */
  forgot_password_url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** URL входа */
  login_url?: Maybe<Scalars['String']>;
  /** Модуль */
  module?: Maybe<Module>;
  /** Название проекта */
  name: Scalars['String'];
  /** Настройки api проекта */
  project_api_settings?: Maybe<ProjectApiSettingsResponse>;
  /** Настройки проекта */
  project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
  /** Имя отправителя SMS */
  sms_sender_name?: Maybe<Scalars['String']>;
  /** Состояние */
  state?: Maybe<State>;
  /** Email поддержки */
  support_email?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTimeUtc'];
  /** URL */
  url?: Maybe<Scalars['String']>;
};

/** Project Api Setting */
export type ProjectApiSetting = {
  __typename?: 'ProjectApiSetting';
  /** API ключ */
  api_key?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Пароль */
  password?: Maybe<Scalars['String']>;
  /** ID проекта */
  project: Project;
  /** поставщик */
  provider?: Maybe<ProviderType>;
  /** Кошелек */
  wallet?: Maybe<Scalars['String']>;
};

export type ProjectApiSettingPassword = {
  __typename?: 'ProjectApiSettingPassword';
  /** ID */
  id: Scalars['ID'];
  /** Пароль */
  password: Scalars['String'];
};

export type ProjectApiSettingsResponse = {
  __typename?: 'ProjectApiSettingsResponse';
  iban_providers?: Maybe<Array<ProjectApiSetting>>;
  payment_providers?: Maybe<Array<ProjectApiSetting>>;
};

/** A paginated list of Project items. */
export type ProjectPaginator = {
  __typename?: 'ProjectPaginator';
  /** A list of Project items. */
  data: Array<Project>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Настройки проекта */
export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  /** Индивидуал или компани */
  applicant_type: ApplicantType;
  /** Связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Роль */
  group_role?: Maybe<GroupRole>;
  /** Тип группы */
  group_type?: Maybe<GroupType>;
  /** Связанный iban провайдер */
  iban_provider?: Maybe<PaymentProviderIban>;
  /** Связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export enum ProviderTypeEnum {
  PaymentProvider = 'PaymentProvider',
  PaymentProviderIban = 'PaymentProviderIban'
}

export type Query = {
  __typename?: 'Query';
  /** Получить аккаунт по ID */
  account?: Maybe<Account>;
  /** Получить список активных аккаунтов */
  accountActiveList?: Maybe<Array<Maybe<Account>>>;
  /** Получить лимит по ID */
  accountLimit?: Maybe<AccountLimit>;
  /** Получить список лимитов */
  accountLimits?: Maybe<AccountLimitPaginator>;
  /**
   * Получить список аккаунтов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  accountList?: Maybe<AccountPaginator>;
  /** Получить лимит по ID */
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  /** Получить список лимитов */
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  /** Получить выписку по счету */
  accountStatement?: Maybe<AccountStatement>;
  /** Получить список account states */
  accountStates: Array<AccountState>;
  /** Получить последнюю сессию по applicant_company_id */
  activeCompanySession?: Maybe<ActiveSession>;
  /** Получить последнюю сессию аппликанта */
  activeIndividualSession?: Maybe<ActiveSession>;
  /** Получить последнюю сессию */
  activeMemberSession?: Maybe<ActiveSession>;
  /**
   * Получить список сессий
   * query: {column: COMPANY, value: "", column: PROVIDER, value: "", column: GROUP, value: "", column: CREATED_AT, value: "2021-10-12"} фильтр по company, member, group, created_at
   */
  activeSessions?: Maybe<ActiveSessions>;
  /**
   * Получить список логов активности
   * query: {
   *     column: COMPANY, value: "",
   *     column: MEMBER, value: "",
   *     column: GROUP, value: "",
   *     column: DOMAIN, value: "",
   *     column: CREATED_AT, value: "2021-10-12"
   * } фильтр по company, member, group, domain, created_at
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по created_at
   */
  activityLogs?: Maybe<ActivityLogs>;
  /** Получить список аккаунтов */
  applicantAccounts?: Maybe<Array<ApplicantAccount>>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /**
   * Получить список пользователей
   * orderBy: [{ column: APPLICANT_INDIVIDUAL_ID, order: DESC }] сортировка по ID, по имени, фамилии, email
   * filter: {column: MEMBER_ID, operator: EQ, value: 2} фильтр по member_id, grant_access
   */
  applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
  /**
   * Получить список applicant companies
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  /** Получить пользователя  по ID */
  applicantCompany?: Maybe<ApplicantCompany>;
  /** Получить по ID */
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /**
   * Получить все типы бизнеса
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyBusinessTypes?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  /** Получить метку по ID */
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  /** Получить список всех модулей компании */
  applicantCompanyModules: Array<ApplicantCompanyModules>;
  /** Получить заметку  по ID */
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  /** Получить список устройств пользователя */
  applicantDevices?: Maybe<Array<ApplicantDevice>>;
  /** Получить документ */
  applicantDocument?: Maybe<ApplicantDocument>;
  /** Получить список заметок документа */
  applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
  /** Получить список категорий тегов */
  applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
  /** Получить список тегов документов */
  applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
  /** Получить список документов */
  applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
  /** Получить пользователя  по ID */
  applicantIndividual?: Maybe<ApplicantIndividual>;
  /** Получить должность по ID */
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /**
   * Получить все  должности
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  /** Получить по ID */
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /**
   * Получить все  отношения
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  /** Получить метку по ID */
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  /** Получить список всех модулей аппликанта */
  applicantIndividualModules: Array<ApplicantIndividualModules>;
  /** Получить заметку  по ID */
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  /**
   * Получить список частных пользователей
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  /** Получить уровень KYC по  ID */
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  /**
   * Получить список уровней KYC
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  /** Вывод списка связанные компании */
  applicantLinkedCompanies: Array<ApplicantLinkedCompany>;
  /** Получить профиль пользователя */
  applicantProfile?: Maybe<ApplicantProfile>;
  /** Получить реквизиты по Account_number */
  applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
  /** Получить список реквизитов */
  applicantRequisites: Array<ApplicantRequisites>;
  /** Получить уровень риска по  ID */
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  /**
   * Получить список уровней риска
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  /** Получить состояние по ID */
  applicantState?: Maybe<ApplicantState>;
  /** Получить причину по ID */
  applicantStateReason?: Maybe<ApplicantStateReason>;
  /**
   * Получить все причины
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  /**
   * Получить все состояния
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStates?: Maybe<ApplicantStatePaginator>;
  /** Получить статутс по ID */
  applicantStatus?: Maybe<ApplicantStatus>;
  /**
   * Получить все статусы
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  /** Получить список */
  applicantVerificationStatuses: Array<ApplicantVerificationStatus>;
  /** Получить список логов для корпорейта по его ID */
  authenticationCompanyLogs?: Maybe<AuthenticationLogs>;
  /** Получить список логов для индивидуала по его ID */
  authenticationIndividualLogs?: Maybe<AuthenticationLogs>;
  /**
   * Получить список логов аутентификации
   * query: {
   *     column: COMPANY, value: "",
   *     column: MEMBER, value: "",
   *     column: CLIENT_TYPE, value: "",
   *     column: GROUP, value: "",
   *     column: DOMAIN, value: "",
   *     column: IP, value: "",
   *     column: COUNTRY, value: "",
   *     column: CITY, value: "",
   *     column: PLATFORM, value: "",
   *     column: BROWSER, value: "",
   *     column: DEVICE_TYPE, value: "",
   *     column: MODEL, value: "",
   *     column: STATUS, value: "",
   *     column: EXPIRED_AT, value: "2021-10-12",
   *     column: CREATED_AT, value: "2021-10-12"
   * } фильтр по company, member, group, domain, ip, country, city, platform, browser, device_type, model, status, expired_at, created_at
   * orderBy: [{ column: EXPIRED_AT, order: DESC }] сортировка по expired_at, created_at, id
   */
  authenticationLogs?: Maybe<AuthenticationLogs>;
  /** Получить список логов для мембера по его ID */
  authenticationMemberLogs?: Maybe<AuthenticationLogs>;
  /** Получить запись */
  bankCorrespondent: BankCorrespondent;
  /** Получить список */
  bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
  /** Получить список всех бизнесов */
  businessActivities?: Maybe<BusinessActivityPaginator>;
  /** Получить по ID */
  businessActivity?: Maybe<BusinessActivity>;
  /** Получить список клиентов */
  clientList: Array<AccountClient>;
  /** Получить прайс по ID */
  commissionPriceList?: Maybe<CommissionPriceList>;
  /**
   * Получить список прайсов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  /** Получить шаблон по ID */
  commissionTemplate?: Maybe<CommissionTemplate>;
  /** Получить лимит по ID */
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Получить по ID */
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
  /** Получить список типов лимитов */
  commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  /** Получить по ID */
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  /** Получить список типов лимитов */
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  /** Получить по ID */
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** Получить список направлений */
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  /** Получить по ID */
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  /** Получить список типов лимитов */
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  /** Получить список лимитов */
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  /**
   * Получить список шаблонов
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * filter:{column: NAME, operator: LIKE, value: ""} фильтр по name
   */
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  /**
   * Получить список компаний
   * member_count: сортировка по количеству участников компании
   * county: сортировка по  стране
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по дате создания, по ID, по названию, email, url
   * created_at: {from:"2021-10-11", to: "2021-10-12"} фильтр по дате
   */
  companies?: Maybe<CompanyPaginator>;
  /** Получить компанию по ID */
  company?: Maybe<Company>;
  /** Получить пароль */
  companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
  /** Получить пароль */
  companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
  /** Получить список модулей */
  companyModules: Array<CompanyModule>;
  /** Получить список стран */
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  /** Получить список валют */
  currencies?: Maybe<CurrenciesPaginator>;
  /** Получить валюту по ID */
  currency?: Maybe<Currencies>;
  /** Получить статистику по акаунтам */
  dashboardAccountsStatistic?: Maybe<Array<Maybe<DashboardAccountsStatistic>>>;
  /** Получить статистику по тикетам */
  dashboardTicketsStatistic?: Maybe<Array<Maybe<DashboardTicketsStatistic>>>;
  /** Получить статистику по трансферам */
  dashboardTransfersStatistic?: Maybe<Array<Maybe<DashboardTransfersStatistic>>>;
  /** Получить статистику по пользователям */
  dashboardUsersStatistic?: Maybe<Array<Maybe<DashboardUsersStatistic>>>;
  /** Получить департамент по его ID */
  department?: Maybe<Department>;
  /** Получить должность по ID */
  departmentPosition?: Maybe<DepartmentPosition>;
  /**
   * Получить список должностей
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию, по ID, по is_active
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию, по полю is_active
   * hasDepartment: {column:ID,operator:EQ,value:1} фильтр по id департамента
   */
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  /**
   * Получить список департаментов
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию или по ID
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   * hasCompany: {column:ID,operator:EQ,value:1} фильтр по id компании
   */
  departments?: Maybe<DepartmentPaginator>;
  /** Получить список ducument states */
  documentStates: Array<DocumentState>;
  /** Получить список ducument types */
  documentTypes: Array<DocumentType>;
  /** Скачать список аккаунтов */
  downloadAccountList?: Maybe<RawFile>;
  /** Получить выписку по счету в формате CSV */
  downloadAccountStatementCsv?: Maybe<RawFile>;
  /** Получить выписку по счету в формате PDF */
  downloadAccountStatementPdf?: Maybe<RawFile>;
  /** Получить выписку по счету в формате XLS */
  downloadAccountStatementXls?: Maybe<RawFile>;
  /** Скачать список applicant companies */
  downloadApplicantCompaniesList?: Maybe<RawFile>;
  /** Скачать список частных пользователей */
  downloadApplicantIndividualsList?: Maybe<RawFile>;
  /** Скачать PDF с реквизитами */
  downloadApplicantRequisiteDetails?: Maybe<RawFile>;
  /** Скачать PDF с реквизитами */
  downloadRequisiteDetails?: Maybe<RawFile>;
  /** Получить детали входящего трансфера */
  downloadTransferIncomingDetails?: Maybe<RawFile>;
  /** Получить выписку по входящим трансферам */
  downloadTransferIncomings?: Maybe<RawFile>;
  /** Получить детали исходящего трансфера */
  downloadTransferOutgoingDetails?: Maybe<RawFile>;
  /** Получить выписку по исходящим трансферам */
  downloadTransferOutgoings?: Maybe<RawFile>;
  /** Получить email notification */
  emailNotification?: Maybe<EmailNotification>;
  /**
   * Получить список email notification
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   * where:{column: TYPE, operator: EQ, value: ""} фильтр по типу нотификаций
   */
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  /** Получить по smtp setting по ID */
  emailSmtp?: Maybe<EmailSmtp>;
  /** Получить список smtp настроек для компании */
  emailSmtps: Array<EmailSmtp>;
  /** Получить по билет ID */
  emailTemplate?: Maybe<EmailTemplate>;
  /** Получить по билет ID */
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   */
  emailTemplates: Array<EmailTemplate>;
  /** Получить список */
  employees: Array<Employee>;
  /** Получить деталии фи */
  feeDetails: Fee;
  /** Получить список */
  feeModes: Array<FeeMode>;
  /** Получить список  периодов комиссий */
  feePeriods: Array<FeePeriod>;
  /**
   * Получить список статусов
   * фильтр по operation_type:
   * HAS_OPERATION_TYPE_FILTER_BY_ID
   */
  feeTypes: Array<FeeType>;
  /** Получить файл по ID */
  file?: Maybe<Files>;
  /**
   * Получить список файлов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  files?: Maybe<FilesPaginator>;
  /**
   * Получить список ApplicantIndividualCompany по applicant_company_id, где type = ApplicantIndividual
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  getMatchedApplicantIndividuals: Array<ApplicantIndividualCompany>;
  /**
   * Получить список всех привязаных applicant (individual/company) по applicant_company_id
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_company_id, operator: LIKE, value: ""} фильтр по applicant_company_id
   */
  getMatchedUsers: Array<ApplicantIndividualCompany>;
  /** Получить список */
  getPaymentUrgencys: Array<PaymentUrgency>;
  /** Получить список */
  getTicketComments: Array<TicketComments>;
  /** Получить расчет комиссий для трансфера */
  getTransferFee: TransferFee;
  /** Получить расчет комиссий для exchange трансфера */
  getTransferFeeExchange: TransferFeeExchange;
  grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
  groupList?: Maybe<GroupRolePaginator>;
  /** Получить список типов групп */
  groupTypeList?: Maybe<GroupTypePaginator>;
  /** Получить тип группы по ID */
  group_type?: Maybe<GroupType>;
  /** Получить список типов групп */
  group_types: Array<GroupType>;
  /**
   * Получить список групп с ролями
   * orderBy: [{ column: IS_ACTIVE, order: DESC }] сортировка по ID, статусу, описанию
   * where:{column: ID, operator: EQ, value: ""} фильтр по ID, ID группы, ID роли, ID платежного провайдера, ID шаблона комиссий, по статусу
   */
  groups?: Maybe<GroupRolePaginator>;
  /** Получить запись */
  kycTimeline?: Maybe<KycTimeline>;
  /** Получить список */
  kycTimelines?: Maybe<KycTimelines>;
  /** Получить язык по ID */
  language?: Maybe<Languages>;
  /** Получить список языков */
  languages?: Maybe<LanguagesPaginator>;
  /** Получить участника по ID */
  member?: Maybe<Members>;
  /** Получить участника по ID */
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * filter:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: GROUP_ROLE_ID, operator:EQ, value: 8} поиск по id GROUP ROLE
   */
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  /** Получить профиль пользователя */
  memberProfile?: Maybe<MemberProfile>;
  /** Получить список статусов мембера */
  memberStatuses: Array<MemberStatus>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: DEPARTMENT_ID, operator:EQ, value: 8} поиск по id департамента
   */
  members?: Maybe<MembersPaginator>;
  /** Получить модуль по ID */
  module?: Maybe<Module>;
  /**
   * Получить список модулей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  modules: Array<Module>;
  /**
   * Получить список модулей вместе с модулем KYC
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  modulesWithKyc?: Maybe<Array<Module>>;
  /** Получить список типов операций */
  operationTypes: Array<OperationType>;
  /** Вывод списка овнеров для компаний */
  owners: Array<ApplicantIndividual>;
  /** Получить платеж по ID */
  payment?: Maybe<Payments>;
  /** Получить банк по ID */
  paymentBank?: Maybe<PaymentBank>;
  /** Получить список банков */
  paymentBanks?: Maybe<PaymentBankPaginator>;
  /** Получить провайдер по ID */
  paymentProvider?: Maybe<PaymentProvider>;
  /** Получить запись */
  paymentProviderIban: PaymentProviderIban;
  /** Получить список */
  paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
  /**
   * Получить список провайдеров
   * paymentProviderCountry: country_id - получить все провайдеры по стране
   * paymentProviderCurrency: currency_id - получить все провайдеры по валюте
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * where:{column: NAME, operator: EQ, value: ""} фильтр по name
   * hasPaymentSystems: {column:NAME,operator:GTE,value:PaymentSystemName} фильтр по платежным системам
   */
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  /**
   * Получить список статусов
   * фильтр по operation_type:
   * OPERATION_TYPE
   */
  paymentStatuses: Array<PaymentStatus>;
  /** Получить платежную систем по ID */
  paymentSystem?: Maybe<PaymentSystem>;
  /** Получить список платежных систем */
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  /** Получить уникальный список платежных систем */
  paymentSystemsList: Array<PaymentSystem>;
  /**
   * Получить список платежей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * Фильтры по
   * hasCompany: {column:NAME,operator:GTE,value:CompanyName} фильтр по имени компании
   * hasAccounts: {column:ACCOUNT_ID,operator:GTE,value:AccountNumber} фильтр по account number
   * hasOwner: {column:NAME,operator:GTE,value:MemberName} фильтр по владельцу
   */
  payments?: Maybe<PaymentsPaginator>;
  /** Получить разрешение по ID */
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список разрешений */
  permissions_tree?: Maybe<Permissions>;
  /**
   * Получить список Цен
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по имени, тип, тип операции, период
   */
  priceListFees?: Maybe<PriceListFeePaginator>;
  /** Получить список прайс листов для PP */
  priceListPPFees: Array<PriceListPpFee>;
  /** Получить список прайс листов для QP */
  priceListQpFees: Array<PriceListQpFee>;
  /** Получить компанию по ID */
  project?: Maybe<Project>;
  /** Получить пароль */
  projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
  /** Получить ProjectApiSettings */
  projectApiSettings: Array<ProjectApiSetting>;
  /** Получить список проектов */
  projects?: Maybe<ProjectPaginator>;
  /** Получить список провайдеров квот */
  quoteProviders?: Maybe<QuoteProviderPaginator>;
  region: Region;
  /** Получить список регионов */
  regions?: Maybe<RegionPaginator>;
  /** Получить реквизиты по ID */
  requisite?: Maybe<Requisite>;
  /**
   * Получить список реквизитов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  requisites: Array<Requisite>;
  /** Получить список */
  respondentFees: Array<RespondentFee>;
  /** Получить роль по ID */
  role?: Maybe<Role>;
  /**
   * Получить список ролей
   * filter: {column: NAME, value: Name}
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID или по названию
   */
  roles?: Maybe<RolePaginator>;
  /** Отправить реквизиты на email */
  sendApplicantRequisiteDetails?: Maybe<StatusType>;
  /** Отправить реквизиты на email */
  sendRequisiteDetails?: Maybe<StatusType>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  /** Получить список */
  stateReasons: Array<StateReason>;
  /** Получить список */
  states: Array<State>;
  /** Получить по билет ID */
  ticket?: Maybe<Ticket>;
  /** Получить по билет ID */
  ticketComment?: Maybe<TicketComments>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * {relation: "company", column: "name"},
   * {relation: "department", column: "name"}
   * ] сортировка по ID, компании, позиционный отдел
   * hasCompany: {column: COMPANY_ID, operator:EQ, value: 1} поиск по id компании
   * hasDepartment: {column: DEPARTMENT_ID, operator:EQ, value: 1} поиск по id Департамента
   * hasPosition: {column: DEPARTMENT_POSITION_ID, operator:EQ, value: 1} поиск по id позици
   * hasMember: {column: MEMBER_ID, operator:EQ, value: 1} поиск по id мембера
   * hasClient: {column: CLIENT_ID, operator:EQ, value: 1} поиск по id Клиента
   * where:{column: TITLE, operator: LIKE, value: ""} фильтр по имени, статуса
   */
  tickets?: Maybe<TicketPaginator>;
  /** Получить статистику по входящим платежам */
  transferExchangeStatistic?: Maybe<Array<Maybe<TransferExchangeStatistic>>>;
  /** Получить трансфер */
  transferExchnage: TransferExchange;
  /** Получить список трансферов */
  transferExchnages?: Maybe<TransferExchangePaginator>;
  /** Получить трансфер */
  transferIncoming: TransferIncoming;
  /** Получить историю входящего платежа */
  transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
  /** Получить список входящих платежей */
  transferIncomings?: Maybe<TransferIncomingPaginator>;
  /** Получить статистику по входящим платежам */
  transferIncomingsStatistic?: Maybe<Array<Maybe<TransferIncomingStatistic>>>;
  /** Получить трансфер */
  transferOutgoing: TransferOutgoing;
  /** Получить историю исходящего платежа */
  transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
  /** Получить список исходящих платежей */
  transferOutgoings?: Maybe<TransferOutgoingPaginator>;
  /** Получить статистику по исходящим платежам */
  transferOutgoingsStatistic?: Maybe<Array<Maybe<TransferOutgoingStatistic>>>;
  /** Получить второй фактор по ID */
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  /** Получить список */
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  /** Получить список */
  typeOfIndustries: Array<TypeOfIndustry>;
  userAuthData: UserAuthResponse;
  /**
   * Получить список пользователей системы
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   */
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountActiveListArgs = {
  client_id?: InputMaybe<InputAccountClients>;
};


export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountLimitsArgs = {
  filter?: InputMaybe<QueryAccountLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryAccountListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountReachedLimitsArgs = {
  filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountStatementArgs = {
  account_id: Scalars['ID'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryActiveCompanySessionArgs = {
  applicant_company_id: Scalars['ID'];
};


export type QueryActiveIndividualSessionArgs = {
  individual_id: Scalars['ID'];
};


export type QueryActiveMemberSessionArgs = {
  member_id: Scalars['ID'];
};


export type QueryActiveSessionsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryActiveSessionsStatic>;
};


export type QueryActivityLogsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryActivityLogsStatic>;
};


export type QueryApplicantAccountsArgs = {
  filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantAccountsOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantBankingAccessesArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyBusinessTypesArgs = {
  filter?: InputMaybe<QueryApplicantCompanyBusinessTypesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyModulesArgs = {
  applicant_company_id: Scalars['ID'];
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyNotesArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryApplicantDocumentInternalNotesArgs = {
  applicant_document_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagsArgs = {
  filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentTagsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentsArgs = {
  applicant_type: ApplicantType;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  update_at?: InputMaybe<DateTimeRange>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualModulesArgs = {
  applicant_individual_id: Scalars['ID'];
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualNotesArgs = {
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantLinkedCompaniesArgs = {
  applicant_individual_id: Scalars['ID'];
};


export type QueryApplicantRequisiteArgs = {
  account_number?: InputMaybe<Scalars['String']>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryAuthenticationCompanyLogsArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  owner_id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAuthenticationLogsByTypeStatic>;
};


export type QueryAuthenticationIndividualLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  individual_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAuthenticationLogsByTypeStatic>;
};


export type QueryAuthenticationLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAuthenticationLogsStatic>;
};


export type QueryAuthenticationMemberLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  member_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAuthenticationLogsByTypeStatic>;
};


export type QueryBankCorrespondentArgs = {
  id: Scalars['ID'];
};


export type QueryBankCorrespondentsArgs = {
  filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBankCorrespondentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBusinessActivitiesArgs = {
  filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryClientListArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  group_role_id?: InputMaybe<Scalars['ID']>;
  group_type?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListsArgs = {
  filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplatesArgs = {
  filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanyModuleIbanProviderPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyModuleProviderPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyModulesArgs = {
  company_id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardAccountsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardTicketsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDashboardTransfersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardUsersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  project_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryDepartmentsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryDownloadAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDownloadAccountListFilterFilterConditions>;
  type: ExportFileType;
};


export type QueryDownloadAccountStatementCsvArgs = {
  account_id: Scalars['ID'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementPdfArgs = {
  account_id: Scalars['ID'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementXlsArgs = {
  account_id: Scalars['ID'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadApplicantCompaniesListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDownloadApplicantCompaniesListFilterFilterConditions>;
  type: ExportFileType;
};


export type QueryDownloadApplicantIndividualsListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDownloadApplicantIndividualsListFilterFilterConditions>;
  type: ExportFileType;
};


export type QueryDownloadApplicantRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDownloadRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDownloadTransferIncomingDetailsArgs = {
  id: Scalars['ID'];
  type: ExportFileType;
};


export type QueryDownloadTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDownloadTransferIncomingsFilterFilterConditions>;
  type: ExportFileType;
};


export type QueryDownloadTransferOutgoingDetailsArgs = {
  id: Scalars['ID'];
  type: ExportFileType;
};


export type QueryDownloadTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDownloadTransferOutgoingsFilterFilterConditions>;
  type: ExportFileType;
};


export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
};


export type QueryFeeDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryFeeTypesArgs = {
  filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFilesArgs = {
  filter?: InputMaybe<QueryFilesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMatchedApplicantIndividualsArgs = {
  applicant_company_id: Scalars['ID'];
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};


export type QueryGetTransferFeeArgs = {
  amount: Scalars['Decimal'];
  currency_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  period_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
  respondent_fees_id: Scalars['ID'];
  urgency_id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetTransferFeeExchangeArgs = {
  amount: Scalars['Decimal'];
  currency_id_dst: Scalars['ID'];
  currency_src_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
};


export type QueryGrantedBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGrantedBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupListArgs = {
  filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupTypeListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<GroupTypeMode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypesArgs = {
  filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryKycTimelineArgs = {
  id: Scalars['ID'];
};


export type QueryKycTimelinesArgs = {
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryKycTimelinesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationsArgs = {
  filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  member_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  filter?: InputMaybe<QueryMembersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryModulesArgs = {
  orderBy?: InputMaybe<Array<QueryModulesOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWhereWhereConditions>;
};


export type QueryModulesWithKycArgs = {
  orderBy?: InputMaybe<Array<QueryModulesWithKycOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};


export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentBankArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentBanksArgs = {
  filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentBanksOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryPaymentBankCondition>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderIbanArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentProviderIbansArgs = {
  filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentProviderIbansOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentProvidersArgs = {
  filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentStatusesArgs = {
  filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentSystemsArgs = {
  filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPriceListPpFeesArgs = {
  filter?: InputMaybe<QueryPriceListPpFeesFilterFilterConditions>;
};


export type QueryPriceListQpFeesArgs = {
  filter?: InputMaybe<QueryPriceListQpFeesFilterFilterConditions>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProjectApiSettingPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryProjectApiSettingsArgs = {
  project_id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryQuoteProvidersArgs = {
  filter?: InputMaybe<QueryQuoteProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID'];
};


export type QueryRegionsArgs = {
  filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRequisitesArgs = {
  filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<QueryRolesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  groups_sort?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySendApplicantRequisiteDetailsArgs = {
  account_id: Scalars['ID'];
  email: Scalars['String'];
};


export type QuerySendRequisiteDetailsArgs = {
  account_id: Scalars['ID'];
  email: Scalars['String'];
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTicketsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferExchangeStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferExchangeStatisticFilterFilterConditions>;
};


export type QueryTransferExchnageArgs = {
  id: Scalars['ID'];
};


export type QueryTransferExchnagesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferExchnagesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferIncomingArgs = {
  id: Scalars['ID'];
};


export type QueryTransferIncomingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  transfer_id: Scalars['ID'];
};


export type QueryTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferIncomingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransferOutgoingArgs = {
  id: Scalars['ID'];
};


export type QueryTransferOutgoingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  transfer_id: Scalars['ID'];
};


export type QueryTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferOutgoingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<QueryUsersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountLimits`. */
export type QueryAccountLimitsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_ACTION_TYPE_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_PERIOD_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TRANSFER_DIRECTION_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TYPE_MIXED_ID_OR_NAME',
  HasCurrencyMixedIdOrName = 'HAS_CURRENCY_MIXED_ID_OR_NAME',
  PeriodCount = 'PERIOD_COUNT'
}

/** Input column names for Query.accountLimits.filter. */
export type QueryAccountLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']>;
  hasCommissionTemplateLimitActionTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateLimitPeriodMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateLimitTransferDirectionMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateLimitTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasCurrencyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  period_count?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStaticOperator {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStaticType {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

/** Allowed column names for Query.accountLimits.orderBy. */
export enum QueryAccountLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountLimits.orderBy. */
export type QueryAccountLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountList`. */
export type QueryAccountListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  AvailableBalance = 'AVAILABLE_BALANCE',
  CurrencyId = 'CURRENCY_ID',
  CurrentBalance = 'CURRENT_BALANCE',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullnameOrName = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME_OR_NAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IbanProviderId = 'IBAN_PROVIDER_ID',
  Id = 'ID',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ReservedBalance = 'RESERVED_BALANCE'
}

/** Input column names for Query.accountList.filter. */
export type QueryAccountListFilterStaticInput = {
  MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']>;
  account_state_id?: InputMaybe<Scalars['ID']>;
  available_balance?: InputMaybe<Scalars['Float']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  current_balance?: InputMaybe<Scalars['Float']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasClientableMixedIdOrFullnameOrName?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  iban_provider_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  reserved_balance?: InputMaybe<Scalars['Float']>;
};

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  AvailableBalance = 'available_balance',
  CurrencyId = 'currency_id',
  CurrentBalance = 'current_balance',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullnameOrName = 'hasClientableMixedIdOrFullnameOrName',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IbanProviderId = 'iban_provider_id',
  Id = 'id',
  IsPrimary = 'is_primary',
  PaymentProviderId = 'payment_provider_id',
  ReservedBalance = 'reserved_balance'
}

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  AvailableBalance = 'available_balance',
  CurrencyId = 'currency_id',
  CurrentBalance = 'current_balance',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullnameOrName = 'hasClientableMixedIdOrFullnameOrName',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IbanProviderId = 'iban_provider_id',
  Id = 'id',
  IsPrimary = 'is_primary',
  PaymentProviderId = 'payment_provider_id',
  ReservedBalance = 'reserved_balance'
}

/** Allowed column names for Query.accountList.orderBy. */
export enum QueryAccountListOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.accountList.orderBy. */
export type QueryAccountListOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountListOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

/** Input column names for Query.accountReachedLimits.filter. */
export type QueryAccountReachedLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Float']>;
  limit_currency?: InputMaybe<Scalars['String']>;
  limit_type?: InputMaybe<Scalars['String']>;
  limit_value?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  transfer_direction?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStaticOperator {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStaticType {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

/** Allowed column names for Query.accountReachedLimits.orderBy. */
export enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountReachedLimits.orderBy. */
export type QueryAccountReachedLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountReachedLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.accountStates.orderBy. */
export enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.accountStates.orderBy. */
export type QueryAccountStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryActiveSessionsStatic = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<DateTimeRange>;
  group?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type QueryActivityLogsStatic = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  domain?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Scalars['String']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantAccounts`. */
export type QueryApplicantAccountsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStatic {
  IsShow = 'IS_SHOW'
}

/** Input column names for Query.applicantAccounts.filter. */
export type QueryApplicantAccountsFilterStaticInput = {
  is_show?: InputMaybe<Scalars['Boolean']>;
};

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStaticOperator {
  IsShow = 'is_show'
}

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStaticType {
  IsShow = 'is_show'
}

/** Allowed column names for Query.applicantAccounts.orderBy. */
export enum QueryApplicantAccountsOrderByColumn {
  CurrentBalance = 'CURRENT_BALANCE',
  Id = 'ID'
}

/** Order by clause for Query.applicantAccounts.orderBy. */
export type QueryApplicantAccountsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantAccountsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantBankingAccesses`. */
export type QueryApplicantBankingAccessesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.applicantBankingAccesses.filter. */
export type QueryApplicantBankingAccessesFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']>;
  member_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Allowed column names for Query.applicantBankingAccesses.orderBy. */
export enum QueryApplicantBankingAccessesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Order by clause for Query.applicantBankingAccesses.orderBy. */
export type QueryApplicantBankingAccessesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantBankingAccessesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL'
}

/** Input column names for Query.applicantCompanies.filter. */
export type QueryApplicantCompaniesFilterStaticInput = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Allowed column names for Query.applicantCompanies.hasBusinessType. */
export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasGroupRole. */
export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasKycLevel. */
export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasOwner. */
export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasRiskLevel. */
export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasStateReason. */
export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasStatus. */
export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.orderBy. */
export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

/** Order by clause for Query.applicantCompanies.orderBy. */
export type QueryApplicantCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanies.where. */
export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantCompanyBusinessTypes`. */
export type QueryApplicantCompanyBusinessTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyBusinessTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantCompanyBusinessTypes.filter. */
export enum QueryApplicantCompanyBusinessTypesFilterStatic {
  Name = 'NAME'
}

/** Input column names for Query.applicantCompanyBusinessTypes.filter. */
export type QueryApplicantCompanyBusinessTypesFilterStaticInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.applicantCompanyBusinessTypes.filter. */
export enum QueryApplicantCompanyBusinessTypesFilterStaticOperator {
  Name = 'name'
}

/** Column names for Query.applicantCompanyBusinessTypes.filter. */
export enum QueryApplicantCompanyBusinessTypesFilterStaticType {
  Name = 'name'
}

/** Allowed column names for Query.applicantCompanyBusinessTypes.orderBy. */
export enum QueryApplicantCompanyBusinessTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyBusinessTypes.orderBy. */
export type QueryApplicantCompanyBusinessTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyBusinessTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabelsAvailable.orderBy. */
export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabelsAvailable.orderBy. */
export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.orderBy. */
export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabels.orderBy. */
export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.where. */
export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyNotes.orderBy. */
export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyNotes.orderBy. */
export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Input column names for Query.applicantCompanyRiskLevelHistory.filter. */
export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
  applicant_company_id: Scalars['ID'];
  risk_level_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
  ApplicantCompanyId = 'applicant_company_id'
}

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.orderBy. */
export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyRiskLevelHistory.orderBy. */
export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.where. */
export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantDocumentTags`. */
export type QueryApplicantDocumentTagsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStatic {
  HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME',
  Name = 'NAME'
}

/** Input column names for Query.applicantDocumentTags.filter. */
export type QueryApplicantDocumentTagsFilterStaticInput = {
  hasCategoryFilterByName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStaticOperator {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStaticType {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

/** Allowed column names for Query.applicantDocumentTags.orderBy. */
export enum QueryApplicantDocumentTagsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantDocumentTags.orderBy. */
export type QueryApplicantDocumentTagsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantDocumentTagsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantDocuments`. */
export type QueryApplicantDocumentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStatic {
  ApplicantId = 'APPLICANT_ID',
  DocumentStateId = 'DOCUMENT_STATE_ID',
  DocumentTypeId = 'DOCUMENT_TYPE_ID',
  Id = 'ID'
}

/** Input column names for Query.applicantDocuments.filter. */
export type QueryApplicantDocumentsFilterStaticInput = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  document_state_id?: InputMaybe<Scalars['ID']>;
  document_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStaticOperator {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStaticType {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

/** Allowed column names for Query.applicantDocuments.orderBy. */
export enum QueryApplicantDocumentsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantDocuments.orderBy. */
export type QueryApplicantDocumentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantDocumentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividualCompanyPositions`. */
export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

/** Input column names for Query.applicantIndividualCompanyPositions.filter. */
export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Allowed column names for Query.applicantIndividualCompanyPositions.orderBy. */
export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyPositions.orderBy. */
export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividualCompanyRelations`. */
export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

/** Input column names for Query.applicantIndividualCompanyRelations.filter. */
export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Allowed column names for Query.applicantIndividualCompanyRelations.orderBy. */
export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyRelations.orderBy. */
export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabelsAvailable.orderBy. */
export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabelsAvailable.orderBy. */
export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.orderBy. */
export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabels.orderBy. */
export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.where. */
export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
};

/** Allowed column names for Query.applicantIndividualNotes.orderBy. */
export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantIndividualNotes.orderBy. */
export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasAccountFilterByPaymentBankId = 'HAS_ACCOUNT_FILTER_BY_PAYMENT_BANK_ID',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  Phone = 'PHONE',
  ProjectId = 'PROJECT_ID'
}

/** Input column names for Query.applicantIndividuals.filter. */
export type QueryApplicantIndividualsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasAccountFilterByPaymentBankId?: InputMaybe<Scalars['ID']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasRiskLevelFilterById?: InputMaybe<Scalars['ID']>;
  hasStateReasonFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  kyc_level_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasAccountFilterByPaymentBankId = 'hasAccountFilterByPaymentBankId',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  Phone = 'phone',
  ProjectId = 'project_id'
}

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasAccountFilterByPaymentBankId = 'hasAccountFilterByPaymentBankId',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  Phone = 'phone',
  ProjectId = 'project_id'
}

/** Allowed column names for Query.applicantIndividuals.orderBy. */
export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

/** Order by clause for Query.applicantIndividuals.orderBy. */
export type QueryApplicantIndividualsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantKycLevels.orderBy. */
export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantKycLevels.orderBy. */
export type QueryApplicantKycLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantKycLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantKycLevels.where. */
export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantRiskLevelHistory.orderBy. */
export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantRiskLevelHistory.orderBy. */
export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevelHistory.where. */
export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantRiskLevels.orderBy. */
export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantRiskLevels.orderBy. */
export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevels.where. */
export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStateReasons.orderBy. */
export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStateReasons.orderBy. */
export type QueryApplicantStateReasonsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStateReasonsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStateReasons.where. */
export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStates.orderBy. */
export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStates.orderBy. */
export type QueryApplicantStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStates.where. */
export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStatuses.orderBy. */
export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStatuses.orderBy. */
export type QueryApplicantStatusesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatusesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStatuses.where. */
export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type QueryAuthenticationLogsByTypeStatic = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<DateTimeRange>;
  email?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type QueryAuthenticationLogsStatic = {
  browser?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client_type?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<DateTimeRange>;
  device_type?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  expired_at?: InputMaybe<Scalars['Date']>;
  group?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `bankCorrespondents`. */
export type QueryBankCorrespondentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStatic {
  HasCurrenciesRegionsFilterByCurrencyId = 'HAS_CURRENCIES_REGIONS_FILTER_BY_CURRENCY_ID',
  HasCurrenciesRegionsFilterByRegionId = 'HAS_CURRENCIES_REGIONS_FILTER_BY_REGION_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

/** Input column names for Query.bankCorrespondents.filter. */
export type QueryBankCorrespondentsFilterStaticInput = {
  hasCurrenciesRegionsFilterByCurrencyId?: InputMaybe<Scalars['ID']>;
  hasCurrenciesRegionsFilterByRegionId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStaticOperator {
  HasCurrenciesRegionsFilterByCurrencyId = 'hasCurrenciesRegionsFilterByCurrencyId',
  HasCurrenciesRegionsFilterByRegionId = 'hasCurrenciesRegionsFilterByRegionId',
  Id = 'id',
  Name = 'name',
  PaymentSystemId = 'payment_system_id'
}

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStaticType {
  HasCurrenciesRegionsFilterByCurrencyId = 'hasCurrenciesRegionsFilterByCurrencyId',
  HasCurrenciesRegionsFilterByRegionId = 'hasCurrenciesRegionsFilterByRegionId',
  Id = 'id',
  Name = 'name',
  PaymentSystemId = 'payment_system_id'
}

/** Allowed column names for Query.bankCorrespondents.orderBy. */
export enum QueryBankCorrespondentsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.bankCorrespondents.orderBy. */
export type QueryBankCorrespondentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBankCorrespondentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `businessActivities`. */
export type QueryBusinessActivitiesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.businessActivities.filter. */
export type QueryBusinessActivitiesFilterStaticInput = {
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.businessActivities.orderBy. */
export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.businessActivities.orderBy. */
export type QueryBusinessActivitiesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBusinessActivitiesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryClientCondition = {
  id: Scalars['ID'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  RegionId = 'REGION_ID'
}

/** Input column names for Query.commissionPriceLists.filter. */
export type QueryCommissionPriceListsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStaticType {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

/** Allowed column names for Query.commissionPriceLists.orderBy. */
export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionPriceLists.orderBy. */
export type QueryCommissionPriceListsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionPriceListsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitActionTypes.orderBy. */
export enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitActionTypes.orderBy. */
export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitActionTypes.where. */
export enum QueryCommissionTemplateLimitActionTypesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionTypes`. */
export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionTypes`. */
export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.orderBy. */
export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitPeriods.orderBy. */
export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.where. */
export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.orderBy. */
export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTransferDirections.orderBy. */
export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.where. */
export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitTypes.orderBy. */
export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTypes.orderBy. */
export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTypes.where. */
export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type QueryCommissionTemplateLimitsFilterStatic = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Decimal']>;
  commission_template_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['Int']>;
  region_id?: InputMaybe<Scalars['ID']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStatic {
  HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Input column names for Query.commissionTemplates.filter. */
export type QueryCommissionTemplatesFilterStaticInput = {
  hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStaticOperator {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStaticType {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

/** Allowed column names for Query.commissionTemplates.orderBy. */
export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplates.orderBy. */
export type QueryCommissionTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `companies`. */
export type QueryCompaniesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCompaniesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStatic {
  CountryId = 'COUNTRY_ID',
  Email = 'EMAIL',
  EntityType = 'ENTITY_TYPE',
  HasAccountsFilterById = 'HAS_ACCOUNTS_FILTER_BY_ID',
  HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Name = 'NAME',
  RegNumber = 'REG_NUMBER',
  Url = 'URL'
}

/** Input column names for Query.companies.filter. */
export type QueryCompaniesFilterStaticInput = {
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  entity_type?: InputMaybe<Scalars['String']>;
  hasAccountsFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reg_number?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStaticOperator {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasAccountsFilterById = 'hasAccountsFilterById',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStaticType {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasAccountsFilterById = 'hasAccountsFilterById',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

/** Allowed column names for Query.companies.orderBy. */
export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Order by clause for Query.companies.orderBy. */
export type QueryCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStatic {
  HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Input column names for Query.departmentPositions.filter. */
export type QueryDepartmentPositionsFilterStaticInput = {
  hasDepartmentFilterById?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStaticOperator {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStaticType {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

/** Allowed column names for Query.departmentPositions.orderBy. */
export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.departmentPositions.orderBy. */
export type QueryDepartmentPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `departments`. */
export type QueryDepartmentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Name = 'NAME'
}

/** Input column names for Query.departments.filter. */
export type QueryDepartmentsFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

/** Allowed column names for Query.departments.orderBy. */
export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.departments.orderBy. */
export type QueryDepartmentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `downloadAccountList`. */
export type QueryDownloadAccountListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDownloadAccountListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDownloadAccountListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDownloadAccountListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.downloadAccountList.filter. */
export enum QueryDownloadAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  AvailableBalance = 'AVAILABLE_BALANCE',
  CurrencyId = 'CURRENCY_ID',
  CurrentBalance = 'CURRENT_BALANCE',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IbanProviderId = 'IBAN_PROVIDER_ID',
  Id = 'ID',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ReservedBalance = 'RESERVED_BALANCE'
}

/** Input column names for Query.downloadAccountList.filter. */
export type QueryDownloadAccountListFilterStaticInput = {
  MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']>;
  account_state_id?: InputMaybe<Scalars['ID']>;
  available_balance?: InputMaybe<Scalars['Float']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  current_balance?: InputMaybe<Scalars['Float']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  iban_provider_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  reserved_balance?: InputMaybe<Scalars['Float']>;
};

/** Column names for Query.downloadAccountList.filter. */
export enum QueryDownloadAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  AvailableBalance = 'available_balance',
  CurrencyId = 'currency_id',
  CurrentBalance = 'current_balance',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IbanProviderId = 'iban_provider_id',
  Id = 'id',
  IsPrimary = 'is_primary',
  PaymentProviderId = 'payment_provider_id',
  ReservedBalance = 'reserved_balance'
}

/** Column names for Query.downloadAccountList.filter. */
export enum QueryDownloadAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  AvailableBalance = 'available_balance',
  CurrencyId = 'currency_id',
  CurrentBalance = 'current_balance',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IbanProviderId = 'iban_provider_id',
  Id = 'id',
  IsPrimary = 'is_primary',
  PaymentProviderId = 'payment_provider_id',
  ReservedBalance = 'reserved_balance'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `downloadApplicantCompaniesList`. */
export type QueryDownloadApplicantCompaniesListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDownloadApplicantCompaniesListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDownloadApplicantCompaniesListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDownloadApplicantCompaniesListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.downloadApplicantCompaniesList.filter. */
export enum QueryDownloadApplicantCompaniesListFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL'
}

/** Input column names for Query.downloadApplicantCompaniesList.filter. */
export type QueryDownloadApplicantCompaniesListFilterStaticInput = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.downloadApplicantCompaniesList.filter. */
export enum QueryDownloadApplicantCompaniesListFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Column names for Query.downloadApplicantCompaniesList.filter. */
export enum QueryDownloadApplicantCompaniesListFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `downloadApplicantIndividualsList`. */
export type QueryDownloadApplicantIndividualsListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDownloadApplicantIndividualsListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDownloadApplicantIndividualsListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDownloadApplicantIndividualsListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.downloadApplicantIndividualsList.filter. */
export enum QueryDownloadApplicantIndividualsListFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasAccountFilterByPaymentBankId = 'HAS_ACCOUNT_FILTER_BY_PAYMENT_BANK_ID',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  Phone = 'PHONE',
  ProjectId = 'PROJECT_ID'
}

/** Input column names for Query.downloadApplicantIndividualsList.filter. */
export type QueryDownloadApplicantIndividualsListFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasAccountFilterByPaymentBankId?: InputMaybe<Scalars['ID']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasRiskLevelFilterById?: InputMaybe<Scalars['ID']>;
  hasStateReasonFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  kyc_level_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.downloadApplicantIndividualsList.filter. */
export enum QueryDownloadApplicantIndividualsListFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasAccountFilterByPaymentBankId = 'hasAccountFilterByPaymentBankId',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  Phone = 'phone',
  ProjectId = 'project_id'
}

/** Column names for Query.downloadApplicantIndividualsList.filter. */
export enum QueryDownloadApplicantIndividualsListFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasAccountFilterByPaymentBankId = 'hasAccountFilterByPaymentBankId',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  Phone = 'phone',
  ProjectId = 'project_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `downloadTransferIncomings`. */
export type QueryDownloadTransferIncomingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDownloadTransferIncomingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDownloadTransferIncomingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDownloadTransferIncomingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.downloadTransferIncomings.filter. */
export enum QueryDownloadTransferIncomingsFilterStatic {
  AmountDebt = 'AMOUNT_DEBT',
  CompanyId = 'COMPANY_ID',
  FeeAmount = 'FEE_AMOUNT',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasRecipientMixedNameOrFullname = 'HAS_RECIPIENT_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Input column names for Query.downloadTransferIncomings.filter. */
export type QueryDownloadTransferIncomingsFilterStaticInput = {
  amount_debt?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  fee_amount?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasRecipientMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.downloadTransferIncomings.filter. */
export enum QueryDownloadTransferIncomingsFilterStaticOperator {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasRecipientMixedNameOrFullname = 'hasRecipientMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Column names for Query.downloadTransferIncomings.filter. */
export enum QueryDownloadTransferIncomingsFilterStaticType {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasRecipientMixedNameOrFullname = 'hasRecipientMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `downloadTransferOutgoings`. */
export type QueryDownloadTransferOutgoingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDownloadTransferOutgoingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDownloadTransferOutgoingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDownloadTransferOutgoingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.downloadTransferOutgoings.filter. */
export enum QueryDownloadTransferOutgoingsFilterStatic {
  AmountDebt = 'AMOUNT_DEBT',
  FeeAmount = 'FEE_AMOUNT',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE'
}

/** Column names for Query.downloadTransferOutgoings.filter. */
export enum QueryDownloadTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS'
}

/** Input column names for Query.downloadTransferOutgoings.filter. */
export type QueryDownloadTransferOutgoingsFilterStaticInput = {
  amount_debt?: InputMaybe<Scalars['String']>;
  fee_amount?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
  user_type?: InputMaybe<UserType>;
};

/** Column names for Query.downloadTransferOutgoings.filter. */
export enum QueryDownloadTransferOutgoingsFilterStaticOperator {
  AmountDebt = 'amount_debt',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Column names for Query.downloadTransferOutgoings.filter. */
export enum QueryDownloadTransferOutgoingsFilterStaticType {
  AmountDebt = 'amount_debt',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
  HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticEnumNotifyType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticEnumRecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

/** Input column names for Query.emailNotifications.filter. */
export type QueryEmailNotificationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']>;
  recipient_type?: InputMaybe<RecipientType>;
  type?: InputMaybe<NotifyType>;
};

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticOperator {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticType {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

/** Allowed column names for Query.emailNotifications.orderBy. */
export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailNotifications.orderBy. */
export type QueryEmailNotificationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailNotificationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.emailSmtps.orderBy. */
export enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.emailSmtps.orderBy. */
export type QueryEmailSmtpsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailSmtpsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticEnumClientType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticEnumServiceType {
  BankingAdminNotify = 'BANKING_ADMIN_NOTIFY',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  KYCAdminNotify = 'K_Y_C_ADMIN_NOTIFY',
  KYCCommon = 'K_Y_C_COMMON',
  KYCSystem = 'K_Y_C_SYSTEM'
}

/** Input column names for Query.emailTemplates.filter. */
export type QueryEmailTemplatesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterByName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  service_type?: InputMaybe<ServiceType>;
  type?: InputMaybe<ClientType>;
};

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticOperator {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticType {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

/** Allowed column names for Query.emailTemplates.orderBy. */
export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailTemplates.orderBy. */
export type QueryEmailTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `feeTypes`. */
export type QueryFeeTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryFeeTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStatic {
  HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID'
}

/** Input column names for Query.feeTypes.filter. */
export type QueryFeeTypesFilterStaticInput = {
  hasOperationTypeFilterById?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStaticOperator {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStaticType {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `files`. */
export type QueryFilesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryFilesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStatic {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

/** Input column names for Query.files.filter. */
export type QueryFilesFilterStaticInput = {
  author_id?: InputMaybe<Scalars['ID']>;
  entity_type?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStaticOperator {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStaticType {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

/** Allowed column names for Query.files.orderBy. */
export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

/** Order by clause for Query.files.orderBy. */
export type QueryFilesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFilesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `getMatchedUsers`. */
export type QueryGetMatchedUsersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStatic {
  ApplicantType = 'APPLICANT_TYPE'
}

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL'
}

/** Input column names for Query.getMatchedUsers.filter. */
export type QueryGetMatchedUsersFilterStaticInput = {
  applicant_type?: InputMaybe<ApplicantType>;
};

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticOperator {
  ApplicantType = 'applicant_type'
}

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticType {
  ApplicantType = 'applicant_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `grantedBankingAccess`. */
export type QueryGrantedBankingAccessFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.grantedBankingAccess.filter. */
export type QueryGrantedBankingAccessFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']>;
  member_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Allowed column names for Query.grantedBankingAccess.orderBy. */
export enum QueryGrantedBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Order by clause for Query.grantedBankingAccess.orderBy. */
export type QueryGrantedBankingAccessOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGrantedBankingAccessOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `groupList`. */
export type QueryGroupListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRoleProvidersFilterByCommissionTemplateId = 'HAS_GROUP_ROLE_PROVIDERS_FILTER_BY_COMMISSION_TEMPLATE_ID',
  HasGroupRoleProvidersFilterByPaymentProviderId = 'HAS_GROUP_ROLE_PROVIDERS_FILTER_BY_PAYMENT_PROVIDER_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  ModuleId = 'MODULE_ID',
  Name = 'NAME',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.groupList.filter. */
export type QueryGroupListFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasGroupRoleProvidersFilterByCommissionTemplateId?: InputMaybe<Scalars['ID']>;
  hasGroupRoleProvidersFilterByPaymentProviderId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  HasGroupRoleProvidersFilterByCommissionTemplateId = 'hasGroupRoleProvidersFilterByCommissionTemplateId',
  HasGroupRoleProvidersFilterByPaymentProviderId = 'hasGroupRoleProvidersFilterByPaymentProviderId',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  RoleId = 'role_id'
}

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  HasGroupRoleProvidersFilterByCommissionTemplateId = 'hasGroupRoleProvidersFilterByCommissionTemplateId',
  HasGroupRoleProvidersFilterByPaymentProviderId = 'hasGroupRoleProvidersFilterByPaymentProviderId',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  RoleId = 'role_id'
}

/** Allowed column names for Query.groupList.orderBy. */
export enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.groupList.orderBy. */
export type QueryGroupListOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupListOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `group_types`. */
export type QueryGroupTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStatic {
  HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
  HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
  HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID'
}

/** Input column names for Query.group_types.filter. */
export type QueryGroupTypesFilterStaticInput = {
  hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']>;
  hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']>;
  hasRolesFilterById?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStaticOperator {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStaticType {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `groups`. */
export type QueryGroupsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.groups.filter. */
export type QueryGroupsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

/** Allowed column names for Query.groups.orderBy. */
export enum QueryGroupsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.groups.orderBy. */
export type QueryGroupsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.kycTimelines.orderBy. */
export enum QueryKycTimelinesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.kycTimelines.orderBy. */
export type QueryKycTimelinesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryKycTimelinesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStatic {
  DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
  ModuleId = 'MODULE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ProjectId = 'PROJECT_ID'
}

/** Input column names for Query.memberAccessLimitations.filter. */
export type QueryMemberAccessLimitationsFilterStaticInput = {
  doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasGroupRolesFilterById?: InputMaybe<Scalars['ID']>;
  module_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStaticOperator {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStaticType {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

/** Allowed column names for Query.memberAccessLimitations.orderBy. */
export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.memberAccessLimitations.orderBy. */
export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMemberAccessLimitationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `members`. */
export type QueryMembersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMembersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStatic {
  CompanyId = 'COMPANY_ID',
  DepartmentId = 'DEPARTMENT_ID',
  DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
  HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
  Id = 'ID',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  MemberStatusId = 'MEMBER_STATUS_ID'
}

/** Input column names for Query.members.filter. */
export type QueryMembersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  department_id?: InputMaybe<Scalars['ID']>;
  department_position_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hasGroupRoleFilterById?: InputMaybe<Scalars['ID']>;
  hasRoleFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  last_login_at?: InputMaybe<Scalars['String']>;
  member_status_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStaticOperator {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStaticType {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

/** Allowed column names for Query.members.orderBy. */
export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

/** Order by clause for Query.members.orderBy. */
export type QueryMembersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMembersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modules.orderBy. */
export enum QueryModulesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.modules.orderBy. */
export type QueryModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modules.where. */
export enum QueryModulesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `modules`. */
export type QueryModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `modules`. */
export type QueryModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.modulesWithKyc.orderBy. */
export enum QueryModulesWithKycOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.modulesWithKyc.orderBy. */
export type QueryModulesWithKycOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryModulesWithKycOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modulesWithKyc.where. */
export enum QueryModulesWithKycWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `modulesWithKyc`. */
export type QueryModulesWithKycWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryModulesWithKycWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `modulesWithKyc`. */
export type QueryModulesWithKycWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `operationTypes`. */
export type QueryOperationTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryOperationTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStatic {
  FeeTypeId = 'FEE_TYPE_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  TransferType = 'TRANSFER_TYPE'
}

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticEnumTransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

/** Input column names for Query.operationTypes.filter. */
export type QueryOperationTypesFilterStaticInput = {
  fee_type_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  transfer_type?: InputMaybe<TransferType>;
};

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticOperator {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticType {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

/** Allowed column names for Query.owners.orderBy. */
export enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.owners.orderBy. */
export type QueryOwnersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryOwnersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryPaymentBankCondition = {
  address?: InputMaybe<Scalars['String']>;
  bank_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id: Scalars['ID'];
  payment_system_code?: InputMaybe<Scalars['String']>;
  payment_system_id: Scalars['ID'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentBanks`. */
export type QueryPaymentBanksFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentBanksFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStatic {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  HasCurrenciesRegionsFilterByCurrencyId = 'HAS_CURRENCIES_REGIONS_FILTER_BY_CURRENCY_ID',
  HasCurrenciesRegionsFilterByRegionId = 'HAS_CURRENCIES_REGIONS_FILTER_BY_REGION_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

/** Input column names for Query.paymentBanks.filter. */
export type QueryPaymentBanksFilterStaticInput = {
  address?: InputMaybe<Scalars['String']>;
  bank_code?: InputMaybe<Scalars['String']>;
  hasCurrenciesRegionsFilterByCurrencyId?: InputMaybe<Scalars['ID']>;
  hasCurrenciesRegionsFilterByRegionId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_code?: InputMaybe<Scalars['String']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStaticOperator {
  Address = 'address',
  BankCode = 'bank_code',
  HasCurrenciesRegionsFilterByCurrencyId = 'hasCurrenciesRegionsFilterByCurrencyId',
  HasCurrenciesRegionsFilterByRegionId = 'hasCurrenciesRegionsFilterByRegionId',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStaticType {
  Address = 'address',
  BankCode = 'bank_code',
  HasCurrenciesRegionsFilterByCurrencyId = 'hasCurrenciesRegionsFilterByCurrencyId',
  HasCurrenciesRegionsFilterByRegionId = 'hasCurrenciesRegionsFilterByRegionId',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

/** Allowed column names for Query.paymentBanks.orderBy. */
export enum QueryPaymentBanksOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentBanks.orderBy. */
export type QueryPaymentBanksOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentBanksOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentProviderIbans`. */
export type QueryPaymentProviderIbansFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStatic {
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentProviderIbans.filter. */
export type QueryPaymentProviderIbansFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStaticOperator {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStaticType {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

/** Allowed column names for Query.paymentProviderIbans.orderBy. */
export enum QueryPaymentProviderIbansOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.paymentProviderIbans.orderBy. */
export type QueryPaymentProviderIbansOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentProviderIbansOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentProviders.filter. */
export type QueryPaymentProvidersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasAccountFilterById?: InputMaybe<Scalars['ID']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.paymentProviders.orderBy. */
export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentProviders.orderBy. */
export type QueryPaymentProvidersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentProvidersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentStatuses`. */
export type QueryPaymentStatusesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStatic {
  OperationType = 'OPERATION_TYPE'
}

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingTransfer = 'INCOMING_TRANSFER',
  OutgoingTransfer = 'OUTGOING_TRANSFER',
  ScheduledFee = 'SCHEDULED_FEE'
}

/** Input column names for Query.paymentStatuses.filter. */
export type QueryPaymentStatusesFilterStaticInput = {
  operation_type?: InputMaybe<OperationTypeEnum>;
};

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticOperator {
  OperationType = 'operation_type'
}

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticType {
  OperationType = 'operation_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
  HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentSystems.filter. */
export type QueryPaymentSystemsFilterStaticInput = {
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasProvidersFilterById?: InputMaybe<Scalars['ID']>;
  hasProvidersFilterByName?: InputMaybe<Scalars['String']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['Mixed']>;
  name?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.paymentSystems.orderBy. */
export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentSystems.orderBy. */
export type QueryPaymentSystemsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentSystemsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `payments`. */
export type QueryPaymentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Input column names for Query.payments.filter. */
export type QueryPaymentsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Allowed column names for Query.payments.orderBy. */
export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

/** Order by clause for Query.payments.orderBy. */
export type QueryPaymentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.permissions.where. */
export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `priceListFees`. */
export type QueryPriceListFeesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListFeesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  PriceListId = 'PRICE_LIST_ID',
  TypeId = 'TYPE_ID'
}

/** Input column names for Query.priceListFees.filter. */
export type QueryPriceListFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  period_id?: InputMaybe<Scalars['ID']>;
  price_list_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `priceListPPFees`. */
export type QueryPriceListPpFeesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListPpFeesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListPpFeesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListPpFeesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.priceListPPFees.filter. */
export enum QueryPriceListPpFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  TypeId = 'TYPE_ID'
}

/** Input column names for Query.priceListPPFees.filter. */
export type QueryPriceListPpFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  period_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.priceListPPFees.filter. */
export enum QueryPriceListPpFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  TypeId = 'type_id'
}

/** Column names for Query.priceListPPFees.filter. */
export enum QueryPriceListPpFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  TypeId = 'type_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `priceListQpFees`. */
export type QueryPriceListQpFeesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListQpFeesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListQpFeesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListQpFeesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.priceListQpFees.filter. */
export enum QueryPriceListQpFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  PeriodId = 'PERIOD_ID',
  TypeId = 'TYPE_ID'
}

/** Input column names for Query.priceListQpFees.filter. */
export type QueryPriceListQpFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  period_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.priceListQpFees.filter. */
export enum QueryPriceListQpFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  PeriodId = 'period_id',
  TypeId = 'type_id'
}

/** Column names for Query.priceListQpFees.filter. */
export enum QueryPriceListQpFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  PeriodId = 'period_id',
  TypeId = 'type_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `projects`. */
export type QueryProjectsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProjectsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  ModuleId = 'MODULE_ID'
}

/** Input column names for Query.projects.filter. */
export type QueryProjectsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  module_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `quoteProviders`. */
export type QueryQuoteProvidersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryQuoteProvidersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryQuoteProvidersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryQuoteProvidersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.quoteProviders.filter. */
export enum QueryQuoteProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  QuoteType = 'QUOTE_TYPE'
}

/** Column names for Query.quoteProviders.filter. */
export enum QueryQuoteProvidersFilterStaticEnumQuoteType {
  API = 'A_P_I',
  Manual = 'MANUAL'
}

/** Input column names for Query.quoteProviders.filter. */
export type QueryQuoteProvidersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  quote_type?: InputMaybe<QuoteType>;
};

/** Column names for Query.quoteProviders.filter. */
export enum QueryQuoteProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  QuoteType = 'quote_type'
}

/** Column names for Query.quoteProviders.filter. */
export enum QueryQuoteProvidersFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  QuoteType = 'quote_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `regions`. */
export type QueryRegionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRegionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
  HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME'
}

/** Input column names for Query.regions.filter. */
export type QueryRegionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCountriesFilterById?: InputMaybe<Scalars['ID']>;
  hasCountriesFilterByName?: InputMaybe<Scalars['String']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStaticType {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `requisites`. */
export type QueryRequisitesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRequisitesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStatic {
  AccountNumber = 'ACCOUNT_NUMBER',
  CompanyId = 'COMPANY_ID',
  PaymentBankId = 'PAYMENT_BANK_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

/** Input column names for Query.requisites.filter. */
export type QueryRequisitesFilterStaticInput = {
  account_number?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStaticOperator {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStaticType {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `roles`. */
export type QueryRolesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRolesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  Name = 'NAME'
}

/** Input column names for Query.roles.filter. */
export type QueryRolesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStaticOperator {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStaticType {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

/** Allowed column names for Query.roles.orderBy. */
export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.roles.orderBy. */
export type QueryRolesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryRolesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `tickets`. */
export type QueryTicketsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStatic {
  ClientId = 'CLIENT_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.tickets.filter. */
export type QueryTicketsFilterStaticInput = {
  client_id?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  member_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStaticOperator {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStaticType {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

/** Allowed column names for Query.tickets.orderBy. */
export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

/** Aggregate specification for Query.tickets.orderBy.company. */
export type QueryTicketsOrderByCompany = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Aggregate specification for Query.tickets.orderBy.department. */
export type QueryTicketsOrderByDepartment = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Order by clause for Query.tickets.orderBy. */
export type QueryTicketsOrderByRelationOrderByClause = {
  /** The column that is used for ordering. */
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  /** Aggregate specification. */
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  /** Aggregate specification. */
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `transferExchangeStatistic`. */
export type QueryTransferExchangeStatisticFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferExchangeStatisticFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferExchangeStatisticFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferExchangeStatisticFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.transferExchangeStatistic.filter. */
export enum QueryTransferExchangeStatisticFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasTransferOutgoingPivotSenderMixedIdOrFullnameOrName = 'HAS_TRANSFER_OUTGOING_PIVOT_SENDER_MIXED_ID_OR_FULLNAME_OR_NAME'
}

/** Input column names for Query.transferExchangeStatistic.filter. */
export type QueryTransferExchangeStatisticFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasTransferOutgoingPivotSenderMixedIdOrFullnameOrName?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.transferExchangeStatistic.filter. */
export enum QueryTransferExchangeStatisticFilterStaticOperator {
  CompanyId = 'company_id',
  HasTransferOutgoingPivotSenderMixedIdOrFullnameOrName = 'hasTransferOutgoingPivotSenderMixedIdOrFullnameOrName'
}

/** Column names for Query.transferExchangeStatistic.filter. */
export enum QueryTransferExchangeStatisticFilterStaticType {
  CompanyId = 'company_id',
  HasTransferOutgoingPivotSenderMixedIdOrFullnameOrName = 'hasTransferOutgoingPivotSenderMixedIdOrFullnameOrName'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `transferExchnages`. */
export type QueryTransferExchnagesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferExchnagesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferExchnagesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferExchnagesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.transferExchnages.filter. */
export enum QueryTransferExchnagesFilterStatic {
  ClientId = 'CLIENT_ID',
  CompanyId = 'COMPANY_ID',
  CreditedAccountId = 'CREDITED_ACCOUNT_ID',
  DebitedAccountId = 'DEBITED_ACCOUNT_ID',
  Id = 'ID',
  RequestedById = 'REQUESTED_BY_ID',
  StatusId = 'STATUS_ID'
}

/** Input column names for Query.transferExchnages.filter. */
export type QueryTransferExchnagesFilterStaticInput = {
  client_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  credited_account_id?: InputMaybe<Scalars['ID']>;
  debited_account_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  requested_by_id?: InputMaybe<Scalars['ID']>;
  status_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.transferExchnages.filter. */
export enum QueryTransferExchnagesFilterStaticOperator {
  ClientId = 'client_id',
  CompanyId = 'company_id',
  CreditedAccountId = 'credited_account_id',
  DebitedAccountId = 'debited_account_id',
  Id = 'id',
  RequestedById = 'requested_by_id',
  StatusId = 'status_id'
}

/** Column names for Query.transferExchnages.filter. */
export enum QueryTransferExchnagesFilterStaticType {
  ClientId = 'client_id',
  CompanyId = 'company_id',
  CreditedAccountId = 'credited_account_id',
  DebitedAccountId = 'debited_account_id',
  Id = 'id',
  RequestedById = 'requested_by_id',
  StatusId = 'status_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `transferIncomings`. */
export type QueryTransferIncomingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStatic {
  AmountDebt = 'AMOUNT_DEBT',
  CompanyId = 'COMPANY_ID',
  FeeAmount = 'FEE_AMOUNT',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasRecipientMixedNameOrFullname = 'HAS_RECIPIENT_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Input column names for Query.transferIncomings.filter. */
export type QueryTransferIncomingsFilterStaticInput = {
  amount_debt?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  fee_amount?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasRecipientMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStaticOperator {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasRecipientMixedNameOrFullname = 'hasRecipientMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStaticType {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasRecipientMixedNameOrFullname = 'hasRecipientMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `transferOutgoings`. */
export type QueryTransferOutgoingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStatic {
  AmountDebt = 'AMOUNT_DEBT',
  CompanyId = 'COMPANY_ID',
  FeeAmount = 'FEE_AMOUNT',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE'
}

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS'
}

/** Input column names for Query.transferOutgoings.filter. */
export type QueryTransferOutgoingsFilterStaticInput = {
  amount_debt?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  fee_amount?: InputMaybe<Scalars['String']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
  user_type?: InputMaybe<UserType>;
};

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticOperator {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticType {
  AmountDebt = 'amount_debt',
  CompanyId = 'company_id',
  FeeAmount = 'fee_amount',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `users`. */
export type QueryUsersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryUsersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.users.filter. */
export type QueryUsersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

/** Allowed column names for Query.users.orderBy. */
export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.users.orderBy. */
export type QueryUsersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryUsersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QuoteProvider = {
  __typename?: 'QuoteProvider';
  /** Компания */
  company?: Maybe<Company>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc'];
  id: Scalars['ID'];
  /** Комиссия */
  margin_commission?: Maybe<Scalars['Float']>;
  /** Название */
  name: Scalars['String'];
  /** Тип обновления котировок */
  quote_type: QuoteType;
  /** Статус активности */
  status: ActivityStatusType;
  /** Дата обновления */
  updated_at: Scalars['DateTimeUtc'];
};

export type QuoteProviderInput = {
  /** ID компании */
  company_id: Scalars['ID'];
  /** Комиссия */
  margin_commission?: InputMaybe<Scalars['Float']>;
  /** Название */
  name: Scalars['String'];
  /** Тип обновления котировок */
  quote_type: QuoteType;
  /** Статус активности */
  status: ActivityStatusType;
};

/** A paginated list of QuoteProvider items. */
export type QuoteProviderPaginator = {
  __typename?: 'QuoteProviderPaginator';
  /** A list of QuoteProvider items. */
  data: Array<QuoteProvider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum QuoteType {
  Api = 'API',
  Manual = 'Manual'
}

export type RawFile = {
  __typename?: 'RawFile';
  base64: Scalars['String'];
};

export enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

/** Регион */
export type Region = {
  __typename?: 'Region';
  /** Получать компанию */
  company?: Maybe<Company>;
  /** Получать страны */
  countries?: Maybe<Array<Maybe<Country>>>;
  id: Scalars['ID'];
  /** Название региона */
  name: Scalars['String'];
};

/** A paginated list of Region items. */
export type RegionPaginator = {
  __typename?: 'RegionPaginator';
  /** A list of Region items. */
  data: Array<Region>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Реквизиты
 * Banking -> Account -> Requisites
 */
export type Requisite = {
  __typename?: 'Requisite';
  /** IBAN */
  account_number?: Maybe<Scalars['String']>;
  /** Связанный банк */
  bank?: Maybe<PaymentBank>;
  /** Currency */
  currency?: Maybe<Currencies>;
  /** ACCOUNT ID */
  id?: Maybe<Scalars['ID']>;
  /** Создатель */
  owner?: Maybe<ApplicantIndividual>;
};

export type RespondentFee = {
  __typename?: 'RespondentFee';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

export enum RespondentFeesEnum {
  Ben = 'BEN',
  Our = 'OUR',
  Sha = 'SHA'
}

/**
 * Роли
 * Settings->Manager Roles->Roles List
 */
export type Role = {
  __typename?: 'Role';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Описание для роли */
  description?: Maybe<Scalars['String']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** Получить список групп */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  /** Получить количество групп с данной ролью */
  groups_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_all_companies?: Maybe<Scalars['Boolean']>;
  /** Название роли */
  name: Scalars['String'];
  /** Получить список категорий полномочий */
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список полномочий */
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  /** Получить дерево разрешений */
  permissions_tree?: Maybe<Scalars['JSON']>;
};

/** A paginated list of Role items. */
export type RolePaginator = {
  __typename?: 'RolePaginator';
  /** A list of Role items. */
  data: Array<Role>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Simple pattern matching (`ILIKE`) */
  Ilike = 'ILIKE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  /** Sender name */
  sender_name: Scalars['String'];
};

export enum ServiceType {
  BankingAdminNotify = 'BankingAdminNotify',
  BankingCommon = 'BankingCommon',
  BankingSystem = 'BankingSystem',
  KycAdminNotify = 'KYCAdminNotify',
  KycCommon = 'KYCCommon',
  KycSystem = 'KYCSystem'
}

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type State = {
  __typename?: 'State';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

export type StateReason = {
  __typename?: 'StateReason';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

export type StatusType = {
  __typename?: 'StatusType';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/**
 * Билеты
 * Banking -> Tickets
 */
export type Ticket = {
  __typename?: 'Ticket';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  /** Получить комментарии */
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  /** Получить компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить Департаменты */
  department?: Maybe<Department>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Сообщение */
  message: Scalars['String'];
  /** Получить позицию */
  position?: Maybe<DepartmentPosition>;
  /** Статус */
  status?: Maybe<TicketStatus>;
  /** Название */
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** Комментарии билетов */
export type TicketComments = {
  __typename?: 'TicketComments';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  /** Сообщение */
  message: Scalars['String'];
  /** Получить билет */
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** A paginated list of Ticket items. */
export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  /** A list of Ticket items. */
  data: Array<Ticket>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TicketStatus = {
  __typename?: 'TicketStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TransferExchange = {
  __typename?: 'TransferExchange';
  /** Owner Individual|Company */
  client?: Maybe<Client>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** зачисленный счет */
  credited_account?: Maybe<Account>;
  /** дебетовый счет */
  debited_account?: Maybe<Account>;
  /** валютный курс */
  exchange_rate: Scalars['Decimal'];
  id: Scalars['ID'];
  /** Поставщик котировок */
  quote_providers?: Maybe<Array<Maybe<QuoteProvider>>>;
  /** Получить инициатора платежа (Мембер или Апликант) */
  requested_by?: Maybe<Clientable>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  /** Входящий перевод */
  transfer_incoming?: Maybe<TransferIncoming>;
  /** Исходящий  перевод */
  transfer_outgoing?: Maybe<TransferOutgoing>;
  /** Дата и время изменения */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Тип инициатора платежа */
  user_type?: Maybe<UserType>;
};

/** A paginated list of TransferExchange items. */
export type TransferExchangePaginator = {
  __typename?: 'TransferExchangePaginator';
  /** A list of TransferExchange items. */
  data: Array<TransferExchange>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TransferExchangeStatistic = {
  __typename?: 'TransferExchangeStatistic';
  count: Scalars['Int'];
  name: Scalars['String'];
  status_id: Scalars['ID'];
};

export type TransferFee = {
  __typename?: 'TransferFee';
  amount_debt: Scalars['Decimal'];
  fee_amount: Scalars['Decimal'];
  fee_pp: Scalars['Decimal'];
  fee_total: Scalars['Decimal'];
};

export type TransferFeeExchange = {
  __typename?: 'TransferFeeExchange';
  converted_amount: Scalars['Decimal'];
  fee_amount: Scalars['Decimal'];
  fee_qoute: Scalars['Decimal'];
  fee_total: Scalars['Decimal'];
  rate: Scalars['Decimal'];
};

/** Исходящие переводы */
export type TransferIncoming = {
  __typename?: 'TransferIncoming';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal'];
  amount_debt: Scalars['Decimal'];
  bank_message?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Коммиссия */
  fee?: Maybe<Fee>;
  fee_amount: Scalars['Decimal'];
  /** Все коммиссии */
  fees?: Maybe<Array<Maybe<Fee>>>;
  /** Файлы */
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID'];
  /** Получить связанный банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Номер платежа */
  payment_number: Scalars['String'];
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную информацию по провайдеру */
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанную срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']>;
  /** Получатьль платежа (Индивидуал или Компани) */
  recipient?: Maybe<Client>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Номер счета или IBAN отправителя */
  sender_account?: Maybe<Scalars['String']>;
  /** Адрес отправителя */
  sender_address?: Maybe<Scalars['String']>;
  /** Адрес банка отправителя */
  sender_bank_address?: Maybe<Scalars['String']>;
  /** Страна банка отправителя */
  sender_bank_country?: Maybe<Country>;
  /** Название банка отправителя */
  sender_bank_name?: Maybe<Scalars['String']>;
  /** SWIFT банка отправителя */
  sender_bank_swift?: Maybe<Scalars['String']>;
  /** Город отправителя */
  sender_city?: Maybe<Scalars['String']>;
  /** Страна отправителя */
  sender_country?: Maybe<Country>;
  /** Имя отправителя */
  sender_name?: Maybe<Scalars['String']>;
  /** Штат отправителя */
  sender_state?: Maybe<Scalars['String']>;
  /** Почтовый индекс отправителя */
  sender_zip?: Maybe<Scalars['String']>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']>;
  /** SWIFT field 56A (Intermediary Bank) */
  transfer_swift?: Maybe<TransferSwift>;
  /** Получить связанный тип трансфера */
  transfer_type?: Maybe<TypeOfTransfer>;
  /** Дата и время обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

/** История входящих переводов */
export type TransferIncomingHistory = {
  __typename?: 'TransferIncomingHistory';
  /** Действие */
  action?: Maybe<Scalars['String']>;
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Дата */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Статус */
  status?: Maybe<PaymentStatus>;
};

/** A paginated list of TransferIncomingHistory items. */
export type TransferIncomingHistoryPaginator = {
  __typename?: 'TransferIncomingHistoryPaginator';
  /** A list of TransferIncomingHistory items. */
  data: Array<TransferIncomingHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of TransferIncoming items. */
export type TransferIncomingPaginator = {
  __typename?: 'TransferIncomingPaginator';
  /** A list of TransferIncoming items. */
  data: Array<TransferIncoming>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingStatistic = {
  __typename?: 'TransferIncomingStatistic';
  count: Scalars['Int'];
  name: Scalars['String'];
  status_id: Scalars['ID'];
};

export type TransferObjectType = TransferIncoming | TransferOutgoing;

/** Исходящие переводы */
export type TransferOutgoing = {
  __typename?: 'TransferOutgoing';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal'];
  amount_debt: Scalars['Decimal'];
  bank_message?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Коммиссия */
  fee?: Maybe<Fee>;
  fee_amount: Scalars['Decimal'];
  /** Все коммиссии */
  fees?: Maybe<Array<Maybe<Fee>>>;
  /** Файлы */
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID'];
  /** Получить связанный банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Номер платежа */
  payment_number: Scalars['String'];
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную информацию по провайдеру */
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанныую срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']>;
  /** Номер счета или IBAN получателя */
  recipient_account: Scalars['String'];
  /** Адрес получателя */
  recipient_address: Scalars['String'];
  /** Адрес банка получателя */
  recipient_bank_address: Scalars['String'];
  /** Страна банка получателя */
  recipient_bank_country?: Maybe<Country>;
  /** Название банка получателя */
  recipient_bank_name: Scalars['String'];
  /** SWIFT код банка получателя */
  recipient_bank_swift?: Maybe<Scalars['String']>;
  /** Город получателя */
  recipient_city: Scalars['String'];
  /** Страна получателя */
  recipient_country?: Maybe<Country>;
  /** Имя получателя */
  recipient_name?: Maybe<Scalars['String']>;
  /** Штат получателя */
  recipient_state: Scalars['String'];
  /** Индекс получателя */
  recipient_zip: Scalars['String'];
  /** Получить инициатора платежа (Мембер или Апликант) */
  requested_by?: Maybe<Clientable>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Получить отправителя (Индивидуал или Компани) */
  sender?: Maybe<Client>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']>;
  /** SWIFT field 56A (Intermediary Bank) */
  transfer_swift?: Maybe<TransferSwift>;
  /** Получить связанный тип трансфера */
  transfer_type?: Maybe<TypeOfTransfer>;
  /** Дата и время обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  /** Тип инициатора платежа */
  user_type?: Maybe<UserType>;
};

/** История исходящих переводов */
export type TransferOutgoingHistory = {
  __typename?: 'TransferOutgoingHistory';
  /** Действие */
  action?: Maybe<Scalars['String']>;
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Дата */
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  /** Статус */
  status?: Maybe<PaymentStatus>;
};

/** A paginated list of TransferOutgoingHistory items. */
export type TransferOutgoingHistoryPaginator = {
  __typename?: 'TransferOutgoingHistoryPaginator';
  /** A list of TransferOutgoingHistory items. */
  data: Array<TransferOutgoingHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of TransferOutgoing items. */
export type TransferOutgoingPaginator = {
  __typename?: 'TransferOutgoingPaginator';
  /** A list of TransferOutgoing items. */
  data: Array<TransferOutgoing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingStatistic = {
  __typename?: 'TransferOutgoingStatistic';
  count: Scalars['Int'];
  name: Scalars['String'];
  status_id: Scalars['ID'];
};

export type TransferSwift = {
  __typename?: 'TransferSwift';
  aba?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  bank_address?: Maybe<Scalars['String']>;
  bank_country?: Maybe<Country>;
  bank_name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  ncs_number?: Maybe<Scalars['String']>;
  swift?: Maybe<Scalars['String']>;
};

export type TransferSwiftInput = {
  aba?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  bank_address?: InputMaybe<Scalars['String']>;
  bank_country_id?: InputMaybe<Scalars['ID']>;
  bank_name?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  ncs_number?: InputMaybe<Scalars['String']>;
  swift?: InputMaybe<Scalars['String']>;
};

export enum TransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

/** Методы двухфакторной авторизации */
export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID'];
  /** Название второго фактора */
  name: Scalars['String'];
};

/** A paginated list of TwoFactorAuthSettings items. */
export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  /** A list of TwoFactorAuthSettings items. */
  data: Array<TwoFactorAuthSettings>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthToken = {
  __typename?: 'TwoFactorAuthToken';
  auth_token?: Maybe<Scalars['String']>;
  two_factor?: Maybe<Scalars['Boolean']>;
};

export type TypeOfIndustry = {
  __typename?: 'TypeOfIndustry';
  /** ID */
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

export type TypeOfTransfer = {
  __typename?: 'TypeOfTransfer';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum UserType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
  Members = 'Members'
}

/**
 * Пользователи
 * Roles->Users
 */
export type Users = {
  __typename?: 'Users';
  /** получить компанию */
  company?: Maybe<Company>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
};

/** A paginated list of Users items. */
export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  /** A list of Users items. */
  data: Array<Users>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type DashboardAccountsStatistic = {
  __typename?: 'dashboardAccountsStatistic';
  account_state_id: Scalars['ID'];
  account_state_name: Scalars['String'];
  count: Scalars['Int'];
  payment_provider_id: Scalars['ID'];
  payment_provider_name: Scalars['String'];
};

export type DashboardTicketsStatistic = {
  __typename?: 'dashboardTicketsStatistic';
  count: Scalars['Int'];
  status_id: Scalars['ID'];
  status_name: Scalars['String'];
};

export type DashboardTransfersStatistic = {
  __typename?: 'dashboardTransfersStatistic';
  count: Scalars['Int'];
  status_name: Scalars['String'];
  transfer_type: Scalars['String'];
};

export type DashboardUsersStatistic = {
  __typename?: 'dashboardUsersStatistic';
  applicant_type: Scalars['String'];
  count: Scalars['Int'];
  status_name: Scalars['String'];
};

export type PriceList = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

export type UserAuthResponse = {
  __typename?: 'userAuthResponse';
  data?: Maybe<Users>;
  permissions: PermissionAuth;
};

export type RelationsQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsQuery = { __typename?: 'Query', applicantIndividualCompanyPositions?: { __typename?: 'ApplicantIndividualCompanyPositionPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyPosition', id: string }> } | null };


export const RelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applicantIndividualCompanyPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RelationsQuery, RelationsQueryVariables>;