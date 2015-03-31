package dao.hibernate;

import dao.MappedDao;
import dao.PortDao;
import entity.Port;
import org.hibernate.SessionFactory;

@MappedDao("PortDao")
public class PortDaoImpl extends AbstractDao<Port> implements PortDao {
    @Override
    protected Class getEntityClass() {
        return Port.class;
    }
}
