import { onCleanup } from "solid-js";

export const listen = <K extends keyof WindowEventMap>(
  event: K,
  handler: (event: WindowEventMap[K]) => void,
  target: EventTarget = window
) => {
  const eventHandler: EventListener = (event) =>
    handler(event as WindowEventMap[K]);
  target.addEventListener(event, eventHandler);
  onCleanup(() => {
    target.removeEventListener(event, eventHandler);
  });
};
