import packages.common.Person;

class Developer extends Person {
    public function new( name : String ) {
        super(name);
    }
}

class Test {
    static function main() {
        var frank = new Developer("Kalman Speier");
        trace(frank.greet());

        var targets:Array<String> = ["Flash", "Javascript", "PHP", "Neko", "C++", "iOS", "Android", "webOS", "C#"];
        trace("Haxe is a great language that can target:");
        for (target in targets) {
          trace (" - " + target);

        }

        trace("And many more!");
    }
}