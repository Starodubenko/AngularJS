package dao;

import entity.BaseEntity;
import org.hibernate.SessionFactory;

import java.util.List;

public interface Dao<T extends BaseEntity>{
    void insert(T entity);
    void update(T entity);
    void delete(T entity);

    T findById(int id);
    List<T> findAll();
}
