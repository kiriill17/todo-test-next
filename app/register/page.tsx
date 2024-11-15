import { Input } from '@/components/ui/input';

export default function login() {
  return (
    <div className="flex items-center justify-center ml-20 h-screen">
      <div>
        <h1 className="text-3xl mb-8">Регистрация</h1>
        <Input placeholder="Имя" />
        <Input placeholder="mail" />
        <Input placeholder="Пароль" />
        <div className="flex flex-col mt-8">
          <button className="border pt-2 pb-2 w-full border-gray-400 rounded">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}
