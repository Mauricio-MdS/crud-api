const INVALID_PARAMETERS = new Error("Invalid request parameters");
const NAME_EXISTS = new Error("Name already exists");
const INVALID_CREDENTIALS = new Error("Invalid Credentials");
const NO_TOKEN = new Error("No token provided");
const INVALID_TOKEN = new Error("Invalid token");
const NOT_AUTHORIZED = new Error("Not Authorized");

export {
  INVALID_PARAMETERS,
  NAME_EXISTS,
  INVALID_CREDENTIALS,
  NO_TOKEN,
  INVALID_TOKEN,
  NOT_AUTHORIZED,
};
