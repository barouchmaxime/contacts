import set from "lodash/set";
export function makeValidationForSchema(schema) {
  return (values) => {
    try {
      schema.validateSync(values, { abortEarly: false });
    } catch (e) {
      const errors = (e.inner.length ? e.inner : [e])
        .map(({ path: field, message }) => ({ field, message }))
        .reduce((acc, { field, message }) => {
          console.log(acc, field, message);
          set(acc, field, message);
          return acc;
        }, {});
      return errors;
    }
  };
}
