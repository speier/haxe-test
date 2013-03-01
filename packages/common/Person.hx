package packages.common;

class Person {
  public var name : String;

  public function new( name : String ) {
    this.name = name;
  }

  public function greet() : String {
    return "Hello world, my name is " + this.name;
  }
}