<template>
    <v-main>
        <v-container>
          <h1 class="mb-6">Usuario cadastrados</h1>
          <v-card flat class="border mb-4">
            <div class="d-flex justify-space-between">
              <v-card-title>Últimos usuários</v-card-title>
              <v-card-title>
                <v-btn @click="isDialogOpen = true" variant="tonal" size="small">Adicionar usuários</v-btn>
                <v-dialog width="600px" v-model="isDialogOpen">
                  <v-card>
                    <v-card-title>Adicionar usuário</v-card-title>
                    <v-card-text>

                      <v-row>
                        <v-col>
                          <v-text-field label="Nome" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col>
                          <v-text-field label="Email" variant="outlined" :rules="emailRules"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-select label="Cargo" variant="outlined" :items="['Admin', 'Gerente', 'Convidado']"></v-select>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn variant="tonal" @click="isDialogOpen = false">Cancelar</v-btn>
                      <v-btn variant="tonal" color="success">Salvar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-title>
            </div>

            <v-table density="compact">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Cargo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fulano</td>
                  <td>fulano@mail.com</td>
                  <td>
                    <v-chip color="primary" variant="outlined" size="small">Admin</v-chip>
                  </td>
                  <td>
                    <v-btn prepend-icon="mdi-pencil" variant="tonal" color="primary" density="compact">Editar</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-container>
    </v-main>
</template>

<script>
  export default {
      data: () => ({
        isDialogOpen: false,
        emailRules: [
                value => {
                    if(value) return true;

                    return 'O email é obrigatório'
                },
                value => {
                    if(value.includes('@')) return true;

                    return 'Email inválido'
                }
            ]
      }),
    }
</script>
