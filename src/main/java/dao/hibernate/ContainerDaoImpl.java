package dao.hibernate;

import dao.ContainerDao;
import dao.MappedDao;
import entity.Container;
import org.hibernate.SessionFactory;

@MappedDao("ContainerDao")
public class ContainerDaoImpl extends AbstractDao<Container> implements ContainerDao {

    public ContainerDaoImpl() {
        super(null);
    }

    public ContainerDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Container.class;
    }
}
