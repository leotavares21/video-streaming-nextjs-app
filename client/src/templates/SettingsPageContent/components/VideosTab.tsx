import { FormProvider, useForm } from 'react-hook-form';
import { RiVideoAddFill, RiCloseFill } from 'react-icons/ri';

import { zodResolver } from '@hookform/resolvers/zod';
import { useModal } from 'hooks/useModal';
import { createLiveSchema } from 'schemas/createLiveSchema';
import { z } from 'zod';

import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Modal } from 'components/Modal';
import { VideosThumb } from 'components/VideosThumb';

import { User } from 'store/@types';

import { useFormFunctions } from '../hook/useFormFunctions';

type VideosTabProps = {
  user: User;
};

type CreateLiveData = z.infer<typeof createLiveSchema>;

export function VideosTab({ user }: VideosTabProps) {
  const { openModal, setOpenModal, closeModal } = useModal();

  const createLiveForm = useForm<CreateLiveData>({
    resolver: zodResolver(createLiveSchema)
  });

  const { errorMessage, addNewTag, fields, remove, watch } =
    useFormFunctions(createLiveForm);

  const { handleSubmit, reset } = createLiveForm;

  function onSubmitCreateLive(data: CreateLiveData) {
    console.log(data);
    reset();
  }

  return (
    <div className="relative">
      <Button variant="accent" onClick={() => setOpenModal(true)}>
        <span className="text-xl">Iniciar Live</span>
        <RiVideoAddFill className="text-accent text-3xl" />
      </Button>

      <Modal title="Criar nova live" isOpen={openModal} onClose={closeModal}>
        <FormProvider {...createLiveForm}>
          <form onSubmit={handleSubmit(onSubmitCreateLive)} className="p-4">
            <div className="mb-4 flex flex-col gap-4">
              <Form.Field>
                <Form.Label variant="gray-style" htmlFor="title">
                  Título
                </Form.Label>
                <Form.Input
                  name="title"
                  placeholder="Titulo"
                  variant="gray-style"
                />
                <Form.ErrorMessage field="title" />
              </Form.Field>

              <Form.Field>
                <Form.Label variant="gray-style" htmlFor="name">
                  Tags
                </Form.Label>
                <div className="flex items-center relative gap-2">
                  <Form.Input
                    name="tag"
                    placeholder="Tags"
                    variant="gray-style"
                  />
                  <button
                    type="button"
                    className="bg-accent py-1 px-4 rounded-full absolute right-1 font-medium hover:brightness-90"
                    onClick={addNewTag}
                  >
                    Adicionar
                  </button>
                </div>

                {watch('tagList') && (
                  <div className="flex flex-wrap gap-2">
                    {fields.map((tag, index) => {
                      return (
                        <span
                          className="text-gray-500 flex items-center"
                          key={tag.id}
                        >
                          {tag.name}
                          <button
                            type="button"
                            className="text-accent hover:brightness-90"
                            onClick={() => remove(index)}
                          >
                            <RiCloseFill />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
                {errorMessage && (
                  <span className="text-xs text-red-500">
                    {errorMessage.name?._errors[0]}
                  </span>
                )}
                <Form.ErrorMessage field="tagList" />
              </Form.Field>

              <Form.Field>
                <Form.Label variant="gray-style" htmlFor="description">
                  Descrição
                </Form.Label>
                <Form.TextArea
                  name="description"
                  placeholder="Descrição (opcional)"
                  variant="gray-style"
                />
                <Form.ErrorMessage field="description" />
              </Form.Field>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Criar</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>

      <section>
        <h2 className="my-8">Lives passadas</h2>

        <VideosThumb videos={user.myVideos} />
      </section>
    </div>
  );
}
