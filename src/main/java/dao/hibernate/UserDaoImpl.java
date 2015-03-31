package dao.hibernate;

import dao.MappedDao;
import dao.UserDao;
import entity.User;
import org.hibernate.SessionFactory;

@MappedDao("UserDao")
public class UserDaoImpl extends AbstractDao<User> implements UserDao {
    @Override
    protected Class getEntityClass() {
        return User.class;
    }
}
