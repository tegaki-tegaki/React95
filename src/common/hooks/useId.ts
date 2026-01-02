import * as React from 'react';

const useReactId = (React as any).useId as (() => string) | undefined;

function makeId() {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let id = '';
  for (let i = 0; i < 10; i += 1) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

export const useId = (idProp?: string): string => {
  const reactId = useReactId?.();
  const fallbackId = React.useMemo(() => makeId(), []);
  return idProp ?? reactId ?? fallbackId;
};
