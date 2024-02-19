<template>
    <v-main>
        <v-container>
          <h1 class="mb-6">Eventos cadastrados</h1>

          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card flat class="border-b">
                <img width="100%" src="https://images.pexels.com/photos/16842378/pexels-photo-16842378/free-photo-of-praia-litoral-brasil-cidade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

                <v-card-subtitle class="pt-3">Salvador - BA</v-card-subtitle>

                <v-card-text>
                  <div>Circuito carnaval</div>

                  <div>Lorem ipsum dolor, sit amet consectetur adipisicing </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn variant="outlined" color="primary" density="compact">Ver mais</v-btn>
                  <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue" density="compact">Comprar</v-btn>
                  <v-btn icon="mdi-home" variant="tonal" color="blue" density="compact"></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

        </v-container>
    </v-main>
  </template>

<script>
  export default {}
</script>
