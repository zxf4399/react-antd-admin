import { useLocalStorageState, useMemoizedFn, useMount } from "ahooks";
import { auto, disable, enable, isEnabled, Theme } from "darkreader";
import { useEffect, useState } from "react";

const theme: Partial<Theme> = {
  brightness: 100,
  contrast: 90,
  sepia: 10,
};

type State = {
  isDark: boolean;
  loading: boolean;
};
type UseDarkReader = () => [State, () => void];

const useDarkReader: UseDarkReader = () => {
  const [isDark, setIsDark] = useLocalStorageState("use-dark-reader", {
    defaultValue: false,
  });

  const [loading, setLoading] = useState(true);

  useMount(() => {
    auto(theme);

    if (isEnabled()) {
      setIsDark(true);
    }

    setLoading(false);
  });

  useEffect(() => {
    isDark ? enable(theme) : disable();
  }, [isDark]);

  const toggle = useMemoizedFn(() => setIsDark((prevState) => !prevState));

  return [{ isDark, loading }, toggle];
};

export default useDarkReader;
