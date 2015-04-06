package bean;

import entity.User;

import javax.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.io.Serializable;

@ManagedBean
@SessionScoped
public class UserBean implements Serializable {

    private String login;
    private String password;

    @Inject
    private EntityManager em;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String Logining(){

        TypedQuery<User> query = em.createQuery("select u from User u " +
                "where u.login = '" + login + "' and u.password = '" + password + "'", User.class);

        try {
            User user = query.getSingleResult();
            return "";
        }catch (Exception e){
            return null;
        }

    }
}
