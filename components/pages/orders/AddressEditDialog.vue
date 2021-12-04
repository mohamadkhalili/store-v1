<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="editAddress">
      <v-card class="pa-4">
        <v-card-title class="pr-0 pb-5">
          ویرایش نشانی
        </v-card-title>

        <v-row>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="نام"
              :rules="{required: true}"
            >
              <v-text-field
                v-model="fName"
                outlined
                label="نام"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="نام خانوادگی"
              :rules="{required: true}"
            >
              <v-text-field
                v-model="lName"
                outlined
                label="نام خانوادگی"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="تلفن"
              :rules="{required: true,phone: 10}"
            >
              <v-text-field
                v-model="phone"
                outlined
                label="تلفن"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="کد پستی"
              :rules="{required: true,phone: 10}"
            >
              <v-text-field
                v-model="postalCode"
                outlined
                label="کد پستی"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="استان"
              :rules="{required: true}"
            >
              <v-autocomplete
                v-model="state"
                outlined
                label="استان"
                :items="states"
                item-text="name"
                item-value="key"
                :error-messages="errors"
                @change="changeState"
              />
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="شهر"
              :rules="{required: true}"
            >
              <v-select
                v-model="town"
                outlined
                label="شهر"
                :items="cities"
                item-text="name"
                item-value="key"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <validation-provider
          v-slot="{ errors }"
          name="آدرس"
          :rules="{required: true}"
        >
          <v-textarea
            v-model="address"
            outlined
            label="آدرس"
            :error-messages="errors"
          />
        </validation-provider>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            outlined
            type="submit"
            :disabled="invalid"
          >
            ثبت
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { CREATE_PROFILE, EDIT_PROFILE, GET_CITIES } from '../../../store/types/action-types'

export default {
  name: 'AddressEditDialog',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    dialog: {
      type: Boolean
    },
    profile: {
      type: Object,
      default: null
    },
    editModForm: {
      type: Boolean,
      default: false
    },
    createModeForm: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogInternal: this.dialog,
      fName: this.profile ? this.profile.first_name : null,
      lName: this.profile ? this.profile.last_name : null,
      state: this.profile ? this.profile.state.key : null,
      town: null, // init in mounted after request server
      phone: this.profile ? this.profile.phone : null,
      postalCode: this.profile ? this.profile.postal_code : null,
      address: this.profile ? this.profile.address : null
    }
  },
  computed: {
    cities () {
      return this.$store.state.user.user.cities
    },
    states () {
      return this.$store.state.user.user.states
    }
  },
  watch: {
    dialog (prev) {
      this.dialogInternal = prev
    }
  },
  async mounted () {
    if (this.state) {
      await this.changeState()
      this.town = this.profile.town.key
    }
  },
  methods: {
    async changeState () {
      await this.$store.dispatch('user/user/' + GET_CITIES, this.state)
      this.town = null
    },
    async editAddress () {
      if (this.editModForm) {
        await this.$store.dispatch('user/orders/' + EDIT_PROFILE, {
          id: this.profile.id,
          data: {
            first_name: this.fName,
            last_name: this.lName,
            phone: this.phone,
            postal_code: this.postalCode,
            state: this.state,
            town: this.town,
            address: this.address
          }
        })
      } else {
        await this.$store.dispatch('user/orders/' + CREATE_PROFILE, {
          first_name: this.fName,
          last_name: this.lName,
          phone: this.phone,
          postal_code: this.postalCode,
          town: this.town,
          address: this.address
        })
      }
      this.dialogInternal = false
    }
  }
}
</script>

<style scoped>

</style>
