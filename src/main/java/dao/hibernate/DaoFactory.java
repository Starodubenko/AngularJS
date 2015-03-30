package dao.hibernate;

import dao.Dao;
import dao.DaoException;
import dao.MappedDao;
import org.hibernate.cfg.Configuration;
import org.reflections.Reflections;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;


public class DaoFactory{

    private static Map<String, Dao> daosMap = new HashMap<>();

    public DaoFactory() {

        Reflections reflections = new Reflections(DaoFactory.class.getPackage().getName());
        Set<Class<?>> daos = reflections.getTypesAnnotatedWith(MappedDao.class);

        for (Class<?> daoClass : daos) {
            MappedDao mappedDao = daoClass.getAnnotation(MappedDao.class);

            Object dao = null;
            try {
                dao = daoClass.newInstance();
            } catch (InstantiationException | IllegalAccessException e) {
                throw new DaoException(e);
            }
            Dao abstractDao = (Dao) dao;
            daosMap.put(mappedDao.value().toLowerCase(), abstractDao);
        }
    }

    private static class InstanceHoldder{
        public static DaoFactory daoFactory = new DaoFactory();
    }

    public static DaoFactory getInstance(){
        try{
            return InstanceHoldder.daoFactory;
        }catch (Throwable e){
            throw new ExceptionInInitializerError();
        }
    }

    public DaoManager getDaoManager() throws DaoException {
        return new DaoManager(new Configuration().configure().buildSessionFactory(), daosMap);
    }
}
