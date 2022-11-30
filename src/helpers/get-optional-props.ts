type TArg = Record<string, unknown>;

/**
 * creating optional classes for cn
 **/
export const getOptionalClasses = (props: any, styles: any): TArg => {
  const newProps: any = {};
  for (const key in props) {
    const kebabKey = key
      .replace(/([A-Z])/g, (found) => {
        return ` ${found.toLowerCase()}`;
      })
      .split(" ")
      .join("-");
    if (typeof props[key] === "boolean") {
      newProps[styles[kebabKey.slice(3)]] = props[key];
      continue;
    }
    newProps[styles[`${kebabKey}-${props[key]}`]] = props[key];
  }
  return newProps;
};
