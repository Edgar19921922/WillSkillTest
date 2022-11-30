type TArg = Record<string, unknown>;

/**
 * creating optional classes for cn
 **/
export const getOptionalClasses = (props: any, styles: any): TArg => {
  const newProps: any = {};
  for (const key in props) {
    if (typeof props[key] === "boolean") {
      newProps[styles[key.slice(2).toLowerCase()]] = props[key];
      continue;
    }
    newProps[styles[`${key}-${props[key]}`]] = props[key];
  }
  return newProps;
};
