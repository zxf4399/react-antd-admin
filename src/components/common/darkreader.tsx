import { useMemoizedFn } from "ahooks";
import { Switch } from "antd";

import useDarkReader from "@/hooks/useDarkReader";

const DarkReader = () => {
  const [{ isDark, loading }, toggle] = useDarkReader();

  const onChange = useMemoizedFn(() => {
    toggle();
  });

  return (
    !loading && (
      <Switch
        checked={isDark}
        checkedChildren="🌜"
        onChange={onChange}
        unCheckedChildren="🌞"
      />
    )
  );
};

export default DarkReader;
