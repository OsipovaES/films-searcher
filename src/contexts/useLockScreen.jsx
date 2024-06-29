import { useEffect } from "react";

export const UseLockScreen = (shouldFixPage) => {
  const screenLocker = (() => {
    let isLocked = false;
    let storedScrollX = 0;
    let storedScrollY = 0;

    return {
      lockScreen() {
        if (isLocked) {
          return;
        }

        const { body } = document;
        const { scrollY, scrollX } = window;

        isLocked = true;

        storedScrollX = scrollX;
        storedScrollY = scrollY;

        body.style.width = "100%";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        body.scrollTop = storedScrollY;
        body.scrollLeft = storedScrollX;
      },
      unlockScreen() {
        if (!isLocked) {
          return;
        }

        const { body } = document;

        isLocked = false;

        body.style.width = "";
        body.style.height = "";
        body.style.overflow = "";

        window.scrollTo(storedScrollX, storedScrollY);
      },
    };
  })();

  useEffect(() => {
    if (shouldFixPage) {
      screenLocker.lockScreen();
    } else {
      screenLocker.unlockScreen();
    }

    return () => {
      screenLocker.unlockScreen();
    };
  }, [screenLocker, shouldFixPage]);
};
