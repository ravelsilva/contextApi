"use client";
import { useTheme } from "@/contexto/context";

export default function Home() {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      
      <button onClick={toggleTheme}>
        Tema atual: {theme === 'light' ? '☀️ Claro' : '🌙 Escuro'}
      </button>
    </>
  );
}
