import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from 'schemas/profileSchema';
import { z } from 'zod';

import { Button } from 'components/Button';
import { Form } from 'components/Form';

import { handleIfIsEditing } from '../utils';

import { User } from 'store/@types';

type profileData = z.infer<typeof profileSchema>;

type ProfileTabProps = {
  user: User;
};

export function ProfileTab({ user }: ProfileTabProps) {
  const [isEditing, setIsEditing] = useState(false);

  const profileForm = useForm<profileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      description: user.description
    }
  });

  function updateProfile(data: profileData) {
    console.log(data);
  }

  const { handleSubmit } = profileForm;

  return (
    <FormProvider {...profileForm}>
      <form
        onSubmit={handleSubmit(updateProfile)}
        className="flex flex-col items-center lg:items-start lg:flex-row"
      >
        <div className="lg:w-1/2 flex flex-col items-center mb-20 lg:mb-0">
          <div className="flex flex-col items-center mt-12">
            <img
              src={user.avatar}
              alt="person"
              className="w-36 h-36 rounded-full  border-4 border-primary mb-4"
            />
            <div className="flex flex-col items-center mb-6">
              <span className="text-xl font-medium mb-4">{user.name}</span>

              <div className="flex justify-center gap-4">
                <span>59 videos</span>
                <span className="border-gray-200 px-4 border-r-2 border-l-2">
                  12 mil seguidores
                </span>
                <span>21 seguindo</span>
              </div>
            </div>

            <Form.Label htmlFor="avatar">Atualizar Foto</Form.Label>
            <Form.Input type="file" name="avatar" />
            <Form.ErrorMessage field="avatar" />
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:pl-24 pl-0 lg:border-l-2 lg:border-l-gray-200 border-l-0 relative">
          {!isEditing && (
            <button
              type="button"
              className="text-gray-200 absolute -top-6 right-0 hover:brightness-90"
              onClick={() => setIsEditing(true)}
            >
              Editar Perfil
            </button>
          )}

          <div>
            <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-4 border-b-2 border-gray-200 pb-4">
              <h2>Informações básicas</h2>

              <div className={`flex gap-4 ${handleIfIsEditing(isEditing)}`}>
                <Button variant="accent" onClick={() => setIsEditing(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Confirmar</Button>
              </div>
            </div>

            <div className="flex flex-col">
              <Form.Field>
                <Form.Label htmlFor="name">Nome</Form.Label>

                <Form.Input type="text" name="name" placeholder="Nome" />
                <Form.ErrorMessage field="name" />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="email">E-mail</Form.Label>

                <Form.Input type="email" name="email" placeholder="E-mail" />
                <Form.ErrorMessage field="email" />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="password">Senha</Form.Label>

                <Form.Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <Form.ErrorMessage field="password" />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="description">Descrição</Form.Label>

                <Form.TextArea
                  name="description"
                  placeholder="Descrição (opcional)"
                />
                <Form.ErrorMessage field="description" />
              </Form.Field>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
