package dao.hibernate;

import dao.Dao;
import org.hibernate.SessionFactory;

import java.util.HashMap;
import java.util.Map;

public class DaoManager {
    private final SessionFactory sessionFactory;
    private static Map<String, Dao> daosMap = new HashMap<String, Dao>();

    public DaoManager(SessionFactory sessionFactory, Map<String, Dao> daosMap) {
        this.sessionFactory = sessionFactory;
        this.daosMap = daosMap;
    }

    public Dao getDao(String name) {

        Dao dao = daosMap.get(name);

        if (dao != null) {
            dao.setSessionFactory(sessionFactory);
        }
        return dao;
    }
}
