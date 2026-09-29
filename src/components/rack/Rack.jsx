import { useEffect, useRef } from "react";
import { projects } from "../../constants/constants";

const Rack = () => {
  const host = useRef(null);

  useEffect(() => {
    let teardown = null,
      gone = false;
    import("./mountRack").then(({ mountRack }) => {
      if (!gone)
        teardown = mountRack(
          host.current,
          projects.map((p) => p.name)
        );
    });
    return () => {
      gone = true;
      teardown?.();
    };
  }, []);

  // The prerender empties this box so the static HTML never carries a dead WebGL canvas over the poster.
  return <div ref={host} className="rack" data-client-only="" />;
};

export default Rack;
