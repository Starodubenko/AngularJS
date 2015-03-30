package dao.hibernate;

import dao.ShipDao;
import entity.Ship;
import org.hibernate.SessionFactory;

import java.util.List;

public class ShipDaoImpl extends AbstractDao<Ship> implements ShipDao {

    public ShipDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Ship.class;
    }
}
