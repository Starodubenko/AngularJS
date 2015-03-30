package dao.hibernate;

import dao.MappedDao;
import dao.ShipDao;
import entity.Ship;
import org.hibernate.SessionFactory;

@MappedDao("ShipDao")
public class ShipDaoImpl extends AbstractDao<Ship> implements ShipDao {

    public ShipDaoImpl() {
        super(null);
    }

    public ShipDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Ship.class;
    }
}
