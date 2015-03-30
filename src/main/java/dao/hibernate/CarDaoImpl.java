package dao.hibernate;

import dao.CarDao;
import dao.MappedDao;
import entity.Car;
import org.hibernate.SessionFactory;

@MappedDao("CarDao")
public class CarDaoImpl extends AbstractDao<Car> implements CarDao {

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
