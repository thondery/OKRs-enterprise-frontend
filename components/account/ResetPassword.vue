<template>
  <el-row class="reset-password-form" type="flex" justify="space-between">
    <div class="reset-password-form__title">
      <span>Đặt lại mật khẩu</span>
    </div>
    <el-form
      ref="resetPasswordForm"
      :model="resetPasswordForm"
      :rules="rules"
      :status-icon="true"
      :hide-required-asterisk="false"
      label-width="150px"
      label-position="top"
      @submit.native.prevent="handleResetPasswordForm"
    >
      <div class="reset-password-form__input">
        <el-form-item prop="password" class="custom-label" label="Mật khẩu mới">
          <el-input
            v-model="resetPasswordForm.password"
            type="password"
            class="reset-password-form__input__new-password"
            placeholder="Nhập mật khẩu"
          ></el-input>
        </el-form-item>
        <el-form-item prop="matchPassword" class="custom-label" label="Nhập lại mật khẩu mới">
          <el-input
            v-model="resetPasswordForm.matchPassword"
            type="password"
            class="reset-password-form__input__match-password"
            placeholder="Nhập mật khẩu"
          ></el-input>
        </el-form-item>
      </div>
      <el-row class="reset-password-form__action" type="flex" justify="space-between">
        <el-col :span="24">
          <el-button :loading="loading" class="el-button el-button--purple el-button--medium" @click="handleResetPasswordForm">
            Đổi mật khẩu
          </el-button>
        </el-col>
        <el-col :span="24">
          <nuxt-link to="/dang-nhap"><strong>Quay lại trang</strong> <span class="reset-password-form__action--login">Đăng nhập</span></nuxt-link>
        </el-col>
      </el-row>
    </el-form>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Form } from 'element-ui';
import { ResetPasswordDTO, ResetPasswordActionDTO } from '@/constants/app.interface';
import AuthRepository from '@/repositories/AuthRepository';
import { Maps, Rule } from '@/constants/app.type';
@Component<ResetPassword>({
  name: 'ResetPassword',
})
export default class ResetPassword extends Vue {
  @Prop(String) token!: string;
  private loading: boolean = false;

  public resetPasswordForm: ResetPasswordActionDTO = {
    password: '',
    matchPassword: '',
    token: this.token,
  };

  private rules: Maps<Rule[]> = {
    password: [
      { required: true, message: 'Vui lòng nhập mật khẩu mới', trigger: 'blur' },
      { validator: this.validatePassword, trigger: ['blur', 'change'] },
    ],
    matchPassword: [
      { required: true, message: 'Vui lòng nhập lại mật khẩu' },
      { validator: this.validateMatchPassword, trigger: ['blur', 'change'] },
    ],
  };

  private validatePassword(rule: any, value: any, callback: (message?: string) => any): (message?: string) => any {
    const valid: boolean = /^(?=.*\d)[0-9a-zA-Z]{8,}$/.test(value);
    if (!valid) {
      return callback('Mật khẩu chứ ít nhất 8 ký tự và 1 chữ số');
    }
    return callback();
  }

  private validateMatchPassword(rule: any, value: any, callback: (message?: string) => any): (message?: string) => any {
    if (value !== this.resetPasswordForm.password) {
      return callback('Không trùng với mật khẩu mới');
    }
    return callback();
  }

  private handleResetPasswordForm(): void {
    (this.$refs.resetPasswordForm as Form).validate(async (isValid) => {
      if (isValid) {
        try {
          this.loading = true;
          delete this.resetPasswordForm.matchPassword;
          await AuthRepository.resetPasswordWithToken(this.resetPasswordForm).then((res: any) => {
            this.$notify({
              title: 'Trạng thái',
              message: 'Đổi mật khẩu thành công',
              type: 'success',
              duration: 2000,
            });
          });
          this.$router.push('/dang-nhap');
          this.loading = false;
        } catch (error) {
          this.loading = false;
          this.$notify({
            title: 'Trạng thái',
            message: 'Có lỗi xảy ra',
            type: 'error',
            duration: 2000,
          });
        }
      }
    });
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.reset-password-form {
  flex-direction: column;
  padding: $unit-12;
  box-shadow: $box-shadow-default;
  background-color: $white;
  @include breakpoint-down(phone) {
  }
  &__title {
    text-align: center;
    border: 10px;
    font-size: 1.75rem;
    color: $neutral-primary-4;
  }
  &__input {
    &__new-password {
    }
    &__match-password {
    }
  }
  &__action {
    margin-top: $unit-10;
    flex-direction: column;
    &--login {
      color: $blue-primary-2;
    }
  }
  .el-form-item {
    &:first-child {
      margin-top: $unit-4;
    }
    &__label {
      color: $neutral-primary-4;
      padding-bottom: $unit-1;
    }
    .el-input__inner {
      &::placeholder {
        color: $neutral-primary-1;
      }
    }
  }
  .el-row {
    .el-col:nth-child(2) {
      a {
        text-decoration: none;
        color: $neutral-primary-4;
      }
      text-align: center;
      &:nth-child(2) {
        padding-top: $unit-4;
        font-size: 0.875rem;
      }
    }
  }
  .el-button {
    font-size: $unit-5;
    width: 100%;
  }
}
</style>
