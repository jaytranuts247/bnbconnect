import { useEffect } from "react";

export const useOnClickOutsideDoubleRefs = (refMain, refSecond, handler) => {
  useEffect(
    () => {
      if (!refSecond) {
        console.log("refSecond is not existed");
        return;
      }
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          !refMain.current ||
          refMain.current.contains(event.target) ||
          refSecond.current.contains(event.target)
        ) {
          return;
        }
        console.log("refsecond is existed", refSecond.current);

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [refMain, refSecond, handler]
  );
};
