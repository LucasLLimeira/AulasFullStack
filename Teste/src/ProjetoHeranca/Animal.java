package ProjetoHeranca;

public class Animal {
    private String nome;

    public void setNome(String n){
        nome = n;
    }
    public String getNome(){
        return nome;
    }
    public void Comer(){
        System.out.println("Eu gosto de comer");
    }

}
