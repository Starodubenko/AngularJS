import dao.CarDao;
import dao.Dao;
import dao.hibernate.DaoFactory;
import dao.hibernate.DaoManager;
import entity.Car;
import entity.Container;

import java.util.Map;

public class Main {
    public static void main(String[] args) {
        DaoManager daoManager = DaoFactory.getInstance().getDaoManager();

        Car car = new Car();

        Container container = new Container();
        container.setNumber(123321);
        container.setTotalWeight(2000);

        car.setBrand("Mersedes-Bens");
        car.setModel("S550");
//        car.setContainer(container);



        Map<String, Dao> daosMap = DaoManager.getDaosMap();
        CarDao carDao = (CarDao) daoManager.getDao("cardao");

        carDao.insert(car);
    }
}
