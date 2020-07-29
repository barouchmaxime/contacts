import set from "lodash/set";
export function makeValidationForSchema(schema) {
  return (values) => {
    try {
      schema.validateSync(values, { abortEarly: false });
    } catch (e) {
      const errors = (e.inner.length ? e.inner : [e])
        .map(({ path: name, message }) => ({ name, message }))
        .reduce((acc, { name, message }) => {
          console.log(acc, name, message);
          set(acc, name, message);
          return acc;
        }, {});
      return errors;
    }
  };
}
