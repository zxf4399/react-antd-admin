import { useMemoizedFn, useMount, useSetState, useUpdateEffect } from "ahooks";
import { auto, disable, enable, isEnabled, Theme } from "darkreader";

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
  const [state, setState] = useSetState<State>({
    isDark: false,
    loading: true,
  });

  useMount(() => {
    auto(theme);

    if (isEnabled()) {
      setState({
        isDark: true,
      });
    }

    setState({
      loading: false,
    });
  });

  useUpdateEffect(() => {
    state.isDark ? enable(theme) : disable();
  }, [state.isDark]);

  const toggle = useMemoizedFn(() =>
    setState({
      isDark: !state.isDark,
    })
  );

  return [state, toggle];
};

export default useDarkReader;
