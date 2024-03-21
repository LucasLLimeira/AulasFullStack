package metodoTostring;

public class Main {
    public static void main(String[] args){
        String primeira = "Java";
        String segunda = "Csharp";
        String terceira = new String("Python");

        System.out.println(primeira.toUpperCase());
        System.out.println(segunda.length());
        System.out.println(terceira);

        boolean result = primeira.equals(segunda);
        System.out.println("Primeira é igual à segunda? " + result);

        result = segunda.equals(terceira);
        System.out.println("A Segunda é iqual à Segunda? " + result);

    }
}
