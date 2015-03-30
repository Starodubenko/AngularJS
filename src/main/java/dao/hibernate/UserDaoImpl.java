package dao.hibernate;

import dao.MappedDao;
import dao.UserDao;
import entity.User;
import org.hibernate.SessionFactory;

@MappedDao("UserDao")
public class UserDaoImpl extends AbstractDao<User> implements UserDao {

    public UserDaoImpl() {
        super(null);
    }

    public UserDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    protected Class getEntityClass() {
        return User.class;
    }
}
