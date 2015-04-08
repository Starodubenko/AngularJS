package dao.hibernate;

import dao.MappedDao;
import dao.UserDao;
import entity.User;
import org.hibernate.SessionFactory;

import javax.persistence.TypedQuery;

@MappedDao("UserDao")
public class UserDaoImpl extends AbstractDao<User> implements UserDao {
    @Override
    protected Class getEntityClass() {
        return User.class;
    }

    @Override
    public boolean alreadyExist(String login) {
        TypedQuery<User> query = em.createQuery("", User.class);
        User user = query.getSingleResult();
        return user != null;
    }
}
