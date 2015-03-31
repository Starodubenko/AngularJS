package dao.hibernate;

import dao.CarDao;
import entity.Car;
import org.hibernate.SessionFactory;

public class CarDaoImpl extends AbstractDao<Car> implements CarDao {
    @Override
    protected Class getEntityClass() {
        return Car.class;
    }
}
