package dao.hibernate;

import dao.PortDao;
import entity.Port;
import org.hibernate.SessionFactory;

public class PortDaoImpl extends AbstractDao<Port> implements PortDao {

    public PortDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Port.class;
    }
}
