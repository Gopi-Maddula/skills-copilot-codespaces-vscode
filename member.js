function skillsMember() {
  // Local variable that ends up within the closure
  var name = "John Doe";
  var age = 25;
  // Inner function that has access to the outer (enclosing) function's variables
  function getSkills() {
    return "JavaScript, HTML, CSS";
  }
  return getSkills();
}