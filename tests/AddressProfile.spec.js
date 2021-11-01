import { mount } from '@vue/test-utils'
import QuantitySelector from '../components/objects/QuantitySelector'

describe('tansk component unit tests: ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(QuantitySelector, {
      propsData: {
        AddressProfile: {
          name: 'QuantitySelector',
          complete: false
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
