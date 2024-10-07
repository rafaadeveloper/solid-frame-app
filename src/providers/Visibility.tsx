import { Post } from "../hooks/post";
import { children } from "solid-js";
import clsx from "clsx";
import { isEnvBrowser } from "../utils/mic";
import { listen } from "../hooks/listen";
import { observe } from "../hooks/observe";
import { useVisibility } from "../stores/useVisibility";

export const VisibilityProvider = (props: any) => {
  const data = useVisibility();
  observe<boolean>("setVisible", data().set);

  listen("keyup", ({ code }) => {
    if (["Escape"].includes(code)) {
      if (!isEnvBrowser()) Post.create("removeFocus");
      data().set(false);
    }
  });

  const c = children(() => props.children);

  return (
    <div
      class={clsx("h-screen", {
        "bg-gray-600": isEnvBrowser(),
      })}
    >
      {data().current && c()}
    </div>
  );
};
