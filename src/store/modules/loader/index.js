export default (state = {}, action) => {
  const { type } = action;
  const DEACTIVATE = /.*(SUCESS|FAILURE)$/.test(type) || /.*(MESSAGE)/.test(type);
  const ACTIVATE = /.*(REQUEST)$/.test(type);

  if (DEACTIVATE) return { active: false };
  if (ACTIVATE) return { active: true };

  return state;
};
