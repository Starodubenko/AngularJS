package dao.hibernate;

import dao.ContainerDao;
import entity.Container;
import org.hibernate.SessionFactory;

public class ContainerDaoImpl extends AbstractDao<Container> implements ContainerDao {

    public ContainerDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Container.class;
    }
}
