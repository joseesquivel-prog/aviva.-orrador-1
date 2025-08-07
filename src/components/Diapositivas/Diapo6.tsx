// src/components/Diapositivas/Diapo6.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo6({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 20000); // Duración estimada de lectura
    return () => clearTimeout(timer);
  }, [onFinish]);

return (
  <div
    className="slide"
    style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
  >
      <h1
        style={{
          alignContent: 'center',
          height: '7%',
          minHeight: 25,
          fontSize: 'clamp(8px, 2.4vw, 34px)',
          color: 'white',
          background: 'rgb(105, 96, 4)',
          margin: 0,
        }}
      >
        Sostenibilidad
      </h1>
      <div style={{ flex: 1, display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            background: 'grey',
          }}
        >
          <p
            style={{
              margin: 0,
              padding: '10px 18px',
              color: 'white',
              background: 'rgb(55, 4, 75)',
            }}
          >
            La elección de materiales en cubierta facilita su separación al
            momento de reparaciones o mantenimientos reduciendo la cantidad de
            residuos producida y proceso adicionales para separación de residuos
            según su tipo
          </p>
          <div
            style={{
              flex: 1,
              backgroundImage:
                'url(/img/Presentaciones/CubiertaParapente/s_GuaduasVerdeAmarillo.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            background: 'grey',
          }}
        >
          <p
            style={{
              margin: 0,
              padding: '10px 18px',
              color: 'white',
              background: 'rgb(45, 3, 74)',
            }}
          >
            El proyecto hace un aporte ambiental positivo porque la guadua
            procesa CO2 y generar oxígeno durante el tiempo hasta su cosecha
            <br />
            <br />
            El tratamiento de la guadua se hace con minerales biodegradables y
            no contaminantes para el suelo ni el agua.
          </p>
          <div
            style={{
              flex: 1,
              backgroundImage:
                'url(/img/Presentaciones/CubiertaParapente/s_HojasGuadua.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            background: 'grey',
          }}
        >
          <p
            style={{
              margin: 0,
              padding: '10px 18px',
              color: 'white',
              background: 'rgb(36, 8, 77)',
            }}
          >
            En la elección de materiales de acabado optamos por las alternativas
            menos contaminantes disponible en el mercado
          </p>
          <div
            style={{
              flex: 1,
              backgroundImage:
                'url(/img/Presentaciones/CubiertaParapente/s_GuaduasPila.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
}
