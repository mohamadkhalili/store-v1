import { extend } from 'vee-validate'
import { digits, required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} الزامیست.'
})
extend('phone', {
  ...digits,
  validate (value) {
    return value.length === 10 && value > 0
  },
  message: '{_field_} شامل اعداد به طول 10 می باشد.'
})
