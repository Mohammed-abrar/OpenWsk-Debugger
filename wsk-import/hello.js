/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  
function main(params) {
  console.log("hello World");
	return { message: 'hello World'};
}

  main({}); //remove while updateing the action