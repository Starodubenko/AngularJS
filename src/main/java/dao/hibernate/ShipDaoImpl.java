package dao.hibernate;

import dao.MappedDao;
import dao.ShipDao;
import entity.Ship;
import org.hibernate.SessionFactory;

@MappedDao("ShipDao")
public class ShipDaoImpl extends AbstractDao<Ship> implements ShipDao {
    @Override
    protected Class getEntityClass() {
        return Ship.class;
    }
}
