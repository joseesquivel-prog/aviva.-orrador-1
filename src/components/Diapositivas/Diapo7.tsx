// src/components/Diapositivas/Diapo7.tsx

type Props = {
  onFinish: () => void;
};

export default function Diapo7({ onFinish }: Props) {
  const handleExit = () => {
    const exit = document.fullscreenElement
      ? document.exitFullscreen()
      : Promise.resolve();

    exit.finally(() => {
      onFinish();
      window.location.href = '/contacto.html';
    });
  };

  return (
    <div
      className="slide"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
      }}
    >
      <h1>Gracias por ver la presentación</h1>
      <button onClick={handleExit}>Salir</button>
    </div>
  );
}
