public class Cao {

    String nome;
    String cor;
    private int idade;
    double peso;

    public void setIdade(int i){
        idade = i;
    }

    public int getIdade(){
        return idade;
    }

    public Cao(){
        cor = "Caramelo";
    }

    public Cao(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public void Andar(){

        System.out.println("Estou andando... " + cor);
    }

    public void DadosCao(){
        System.out.println(nome + " " + idade);
    }

    public boolean VerificarIdade(){
        if(idade > 10){
            return true;
        }
        else{
            return false;
        }

    }

}
