package Sobreescrita;
class Linguagem{
    public void mostrarInformacao(){
        System.out.println("Lingua Portuguesa");
    }
}
class Java extends Linguagem {
    @Override
    public void mostrarInformacao() {
        System.out.println("Linguagem Java");
    }
}
class Python extends Linguagem {
    @Override
    public void mostrarInformacao() {
        System.out.println("Linguagem Python");
    }
}
public class Main {
    public static void main(String[] args){
        Java j1 = new Java();
        j1.mostrarInformacao();

        Python p1 = new Python();
        p1.mostrarInformacao();

        Linguagem l1 = new Linguagem();
        l1.mostrarInformacao();
    }
}
