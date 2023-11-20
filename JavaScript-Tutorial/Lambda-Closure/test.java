import java.lang.FunctionalInterface;

// this is functional interface
@FunctionalInterface
interface MyInterface{

    // abstract method
    double getPiValue();
}

public class test {

    public static void main( String[] args ) {
    
    int a = 2;
    // declare a reference to MyInterface
    MyInterface ref;
    
    // lambda expression
    ref = () -> {return a;};
    
    System.out.println("Value of Pi = " + ref.getPiValue());
    } 
}