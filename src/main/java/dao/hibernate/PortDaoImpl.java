package dao.hibernate;

import dao.MappedDao;
import dao.PortDao;
import entity.Port;
import org.hibernate.SessionFactory;

@MappedDao("PortDao")
public class PortDaoImpl extends AbstractDao<Port> implements PortDao {

    public PortDaoImpl() {
        super(null);
    }

    public PortDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Port.class;
    }
}
