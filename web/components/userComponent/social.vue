<template>
  <v-card>
    <div class="row justify-center">
      <div class="col-md-6 col-12">
        <v-form ref="form">
          <p class="text-h5">Social</p>
          <v-text-field
            v-model="form.fackBook"
            label="FackBook"
            outlined
            clearable
            dense
            hint="Please enter your Facebook link"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.twitter"
            label="Twitter"
            clearable
            outlined
            dense
            hint="Please enter your Twitter link"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.instagram"
            label="instagram"
            clearable
            outlined
            dense
            hint="Please enter your Instagram link"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.gitHub"
            label="GitHub"
            outlined
            dense
            clearable
            hint="Please enter your GitHub link"
            persistent-hint
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="form.codePen"
            label="CodePen"
            outlined
            dense
            clearable
            hint="Please enter your user codePen"
            persistent-hint
            class="mb-4"
          ></v-text-field>
        </v-form>
        <div class="d-flex justify-space-between">
          <slot></slot>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: 'Foobar',
      form: {
        fackBook: '',
        twitter: '',
        instagram: '',
        gitHub: '',
        codePen: '',
        slack: '',
      },
      items: ['Admin', 'Tourist'],
    }
  },
}
</script>

<style scoped>
</style>