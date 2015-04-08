package dao;

import entity.User;

import java.util.List;

public interface UserDao extends Dao<User> {
    boolean alreadyExist(String login);
}
