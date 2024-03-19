//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int[][] matriz = {{9, 8, 7}, {5, 3, 2,}, {6, 6, 7}};

        int[] maiorLinha = new int[3];
        int[] menorColuna = new int[3];

        for (int i = 0; i < 3; i++)
            maiorLinha[i] = 0;

        for (int i = 0; i < 3; i++)
            menorColuna[i] = 10;

        //maior elemento nas linhas


        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 3; i++)
                if (matriz[j][i] > maiorLinha[j]) {
                    maiorLinha[j] = matriz[j][i];
                }

        }
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 3; i++)
                if (matriz[i][j] < menorColuna[j]) {
                    menorColuna[j] = matriz[i][j];
                }

        }

        for(int i=0; i<3; i++)
            for(int j=0; j<3; j++)
                if(maiorLinha[i] == menorColuna[j])
                    System.out.println("Ponto de sela = " + maiorLinha[i]);
    }
}
