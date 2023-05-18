import Link from 'next/link';

type ProfileMenuProps = {
  isVisible: boolean;
};

export function ProfileMenu({ isVisible }: ProfileMenuProps) {
  if (isVisible) {
    return (
      <div className="bg-gray-50 px-2 py-2 absolute top-full mt-1 flex flex-col gap-2 w-full rounded-md ">
        <Link href="/settings" className="text-gray-300 hover:text-black">
          Configurações
        </Link>
        <button className="px-4 bg-accent rounded-lg hover:brightness-90">
          Sair
        </button>
      </div>
    );
  }

  return <></>;
}
