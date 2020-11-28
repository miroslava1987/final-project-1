import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Select, Row, Col, Radio, AutoComplete } from 'antd';
import { Button } from '../../Button';
import { Text, StyledInput, StyledRadio } from './StyledContactForm';
import { selectCustomer } from '../../../store/customer/slectors';
import { GlobalConfig } from '../../../GlobalConfig';
import { getCity, getStreet } from '../../../utils/novaPoshtaApi';

export const ContactForm = (props) => {
  const { handleSubmit } = props;
  const customer = useSelector(selectCustomer);
  const { name, surname, email, phone } = customer;

  const searchCode = GlobalConfig.deliveryOptions[2].NOVA_POSHTA.serchCityCode;
  const [autoCompleteCityResult, setAutoCompleteCityResult] = useState([]);
  const [autoCompleteStreetResult, setAutoCompleteStreetResult] = useState([]);
  const [delivery, setdelivery] = useState(
    GlobalConfig.deliveryOptions[0].PICKUP.value
  );

  const [form] = Form.useForm();
  // autocomplete city
  const onCityChange = (value) => {
    if (!GlobalConfig.adressFieldRegExp.test(value)) {
      setAutoCompleteCityResult([]);
    } else {
      getCity(value).then((list) => {
        return setAutoCompleteCityResult(list.map((list) => list));
      });
    }
  };
  const cityOptions = autoCompleteCityResult.map((city) => ({
    label: city,
    value: city,
  }));
  // ------------------------------------------
  // autocomplete street
  const onStreetChange = (value) => {
    if (!GlobalConfig.adressFieldRegExp.test(value)) {
      setAutoCompleteStreetResult([]);
    } else {
      getStreet(value, searchCode).then((list) => {
        setAutoCompleteStreetResult(
          list.map((list) => {
            return list;
          })
        );
      });
    }
  };
  const streetOptions = autoCompleteStreetResult.map((street) => ({
    label: street,
    value: street,
  }));
  // --------------------------------------------
  const isVisibleAdressField =
    delivery === GlobalConfig.deliveryOptions[0].PICKUP.value;

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        showArrow={false}
        style={{
          width: 76,
        }}
      />
    </Form.Item>
  );
  return (
    <Form
      layout='vertical'
      name='order'
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        name,
        surname,
        email,
        phone,
        prefix: '+380',
        delivery: GlobalConfig.deliveryOptions[0].PICKUP.value,
        payMethod: GlobalConfig.paymentOptions[0].BY_CASH.value,
      }}
    >
      <Text>Пожалуйста, заполните форму</Text>
      <Text>Выберите форму доставки и оплаты</Text>

      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name='name'
            label='Имя'
            rules={[
              {
                required: true,
                message: 'Введите имя!',
              },
              {
                pattern: GlobalConfig.textFieldRegExp,
                message: 'Имя должно состоять из букв a-z, A-Z, а-я, А-Я!',
              },
              {
                min: 2,
                message: 'Имя должно содержать минимум 2 символа!',
              },
              {
                max: 25,
                message: 'Имя должно содержать максимум 25 символов!',
              },
            ]}
          >
            <StyledInput />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='surname'
            label='Фамилия'
            rules={[
              {
                required: true,
                message: 'Введите фамилию!',
              },
              {
                pattern: GlobalConfig.textFieldRegExp,
                message: 'Фамилия должна состоять из букв a-z, A-Z, а-я, А-Я!',
              },
              {
                min: 2,
                message: 'Фамилия должна содержать минимум 2 символа!',
              },
              {
                max: 25,
                message: 'Фамилия должна содержать максимум 25 символов!',
              },
            ]}
          >
            <StyledInput />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'Некоректный E-mail ',
              },
              {
                required: true,
                message: 'Введите  E-mail!',
              },
            ]}
          >
            <StyledInput />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='phone'
            label='Телефон'
            rules={[
              { required: true, message: 'Введите номер телефона!' },
              {
                pattern: GlobalConfig.numberFieldRegExp,
                message: 'Введите правильный номер',
              },
            ]}
          >
            <StyledInput addonBefore={prefixSelector} />
          </Form.Item>
        </Col>
      </Row>
      {!isVisibleAdressField && (
        <>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name='city'
                label='Населенный пункт'
                rules={[
                  {
                    required: isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.adressFieldRegExp,
                    message: 'заполните поле кирилицей',
                  },
                ]}
              >
                <AutoComplete options={cityOptions} onChange={onCityChange}>
                  <StyledInput onChange={onCityChange} />
                </AutoComplete>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name='street'
                label='Улица'
                rules={[
                  {
                    required: isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.adressFieldRegExp,
                    message: 'Заполните поле кирилицей',
                  },
                ]}
              >
                <AutoComplete options={streetOptions} onChange={onStreetChange}>
                  <StyledInput />
                </AutoComplete>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name='house'
                label='Дом'
                rules={[
                  {
                    required: isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.adressFieldRegExp,
                    message: 'Используйте цифры и буквы',
                  },
                ]}
              >
                <StyledInput />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name='flat'
                label='Квартира'
                rules={[
                  {
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.numberFieldRegExp,
                    message: 'Используйте цифры',
                  },
                ]}
              >
                <StyledInput />
              </Form.Item>
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col span={12}>
          <Form.Item
            name='delivery'
            label='Способ доставки'
            rules={[{ message: 'Выбирите способ доставки!' }]}
          >
            <Radio.Group onChange={(val) => setdelivery(val.target.value)}>
              {GlobalConfig.deliveryOptions
                .reduce((acc, rec, index) => {
                  return acc.concat(Object.values(rec));
                }, [])
                .map(({ text, value }, index) => (
                  <StyledRadio key={index} value={value}>
                    {text}
                  </StyledRadio>
                ))}
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='payMethod'
            label='Способ оплаты'
            rules={[{ message: 'Выбирите способ оплаты!' }]}
          >
            <Radio.Group>
              {GlobalConfig.paymentOptions
                .reduce((acc, rec, index) => {
                  return acc.concat(Object.values(rec));
                }, [])
                .map(({ text, value }, index) => (
                  <StyledRadio key={index} value={value}>
                    {text}
                  </StyledRadio>
                ))}
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Button text='Подтвердить заказ' type='submit' color='green'></Button>
    </Form>
  );
};
