package dao.hibernate;

import dao.CarDao;
import dao.MappedDao;
import entity.Car;
import org.hibernate.SessionFactory;

public class CarDaoImpl extends AbstractDaoHiber<Car> implements CarDao {

    protected CarDaoImpl() {
        super(null);
    }

    protected CarDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return Car.class;
    }
}
