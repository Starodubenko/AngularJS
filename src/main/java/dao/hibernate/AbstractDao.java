package dao.hibernate;

import dao.DaoException;
import entity.BaseEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.ArrayList;
import java.util.List;

public abstract class AbstractDao<T extends BaseEntity> {

    protected SessionFactory sessionFactory;

    public AbstractDao(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory){
        this.sessionFactory = sessionFactory;
    }

    public void insert(T entity) {
        Session session = null;
        try{
            session = sessionFactory.openSession();
            session.beginTransaction();
            session.save(entity);
            session.getTransaction().commit();
        }catch (Exception e){
            throw new DaoException(e);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

    public void update(T entity) {
        Session session = null;
        try{
            session = sessionFactory.openSession();
            session.beginTransaction();
            session.update(entity);
            session.getTransaction().commit();
        }catch (Exception e){
            throw new DaoException(e);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

    public void delete(T entity) {
        Session session = null;
        try{
            session = sessionFactory.openSession();
            session.beginTransaction();
            session.delete(entity);
            session.getTransaction().commit();
        }catch (Exception e){
            throw new DaoException(e);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

    public T findById(int id) {
        Session session = null;
        try{
            session = sessionFactory.openSession();
            return (T)session.load(getEntityClass(), id);
        }catch (Exception e){
            throw new DaoException(e);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

    public List<T> findAll() {
        List<T> result = new ArrayList<T>();

        Session session = null;
        try{
            session = sessionFactory.openSession();
            result = session.createCriteria(getEntityClass()).list();
        }catch (Exception e){
            throw new DaoException(e);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }

        return result;
    }

    protected abstract Class getEntityClass();
}
