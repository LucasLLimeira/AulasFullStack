package Herança;

import Herança.Vendedor;
import Herança.pessoa;

public class heranca {
    public static void main(String[] args){
        pessoa p = new pessoa();
        p.nome = "Yan";

        Vendedor v = new Vendedor();
        v.nome = "Laís";
        v.comissao = 8.6;
    }
}
