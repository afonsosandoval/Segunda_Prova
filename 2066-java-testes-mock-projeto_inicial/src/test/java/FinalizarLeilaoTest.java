import br.com.alura.leilao.dao.LeilaoDao;
import br.com.alura.leilao.model.Lance;
import br.com.alura.leilao.model.Leilao;
import br.com.alura.leilao.model.Usuario;
import br.com.alura.leilao.service.FinalizarLeilaoService;
import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FinalizarLeilaoTest
{
    private FinalizarLeilaoService service;

    @Mock
    private LeilaoDao leilaoDao;

    @BeforeEach
    public void beforeEach(){
        MockitoAnnotations.initMocks(this);
        this.service = new FinalizarLeilaoService(leilaoDao);
    }

    @Test
    void deveriaFinalizarUmLeilao(){
       List<Leilao> leiloes = Leiloes();
       Mockito.when(leilaoDao.buscarLeiloesExpirados()).thenReturn(leiloes);
       service.finalizarLeiloesExpirados();
       Leilao leilao = leiloes.get(0);
        Assertions.assertTrue(leilao.isFechado());
        Assertions.assertEquals(new BigDecimal("900"),leilao.getLanceVencedor());
        Mockito.verify(leilaoDao).salvar(leilao);
    }

    private List<Leilao> Leiloes(){
       List<Leilao> Lista = new ArrayList<>();
       Leilao leilao = new Leilao("Celular",
               new BigDecimal("500"),
                       new Usuario("Fulano"));
       Lance primeiro = new Lance(new Usuario("Beltrano"),
               new BigDecimal("600"));
       Lance segundo = new Lance(new Usuario("Ciclatrano"),
               new BigDecimal("900"));
       leilao.propoe(primeiro);
       leilao.propoe(segundo);
       Lista.add(leilao);
       return Lista;
    }
}
