import { useState, useEffect } from "react";
import userflow from "userflow.js";

export function useUserflowResourceCenter() {
  const [resourceCenterState, setResourceCenterState] = useState(() =>
    userflow.getResourceCenterState()
  );

  useEffect(() => {
    function onChange() {
      setResourceCenterState(userflow.getResourceCenterState());
    }

    userflow.on("resourceCenterChanged", onChange);

    return () => userflow.off("resourceCenterChanged", onChange);
  }, []);

  const isResourceCenterAvailable = userflow.isIdentified() && resourceCenterState !== null;
  const isResourceCenterWithNotificationsEnabled = true; // Set this based on your requirements

  return {
    isResourceCenterAvailable,
    uncompletedChecklistTaskCount:
      isResourceCenterAvailable && resourceCenterState?.hasChecklist && isResourceCenterWithNotificationsEnabled
        ? resourceCenterState.uncompletedChecklistTaskCount
        : 0,
  };
}
