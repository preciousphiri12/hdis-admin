// import moment from "moment";

const Validations = {
  validate: (inputs) => {
    if (inputs?.length > 0) {
      let empty = inputs?.filter(
        (input) => input == null || input == "" || input == undefined
      );
      if (empty?.length > 0) {
        return false;
      } else return true;
    } else return false;
  },
};

export default Validations;
