package rest;

import com.auth0.jwt.JWTSigner;
import dao.UserDao;
import entity.User;
import org.apache.log4j.Logger;
import service.UserService;

import javax.faces.bean.RequestScoped;
import javax.inject.Inject;
import javax.validation.Validator;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/users")
@RequestScoped
public class MemberResourceRESTService {

    @Inject
    private Logger log;

    @Inject
    private Validator validator;

    @Inject
    private UserDao userDao;

    @Inject
    UserService userService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> listAllMembers(@HeaderParam("authorization") final String token) {
        return userDao.findAll();
    }

    @GET
    @Path("/{id:[0-9][0-9]*}")
    @Produces(MediaType.APPLICATION_JSON)
    public User lookupMemberById(@PathParam("id") int id) {
        User member = userDao.findById(id);
        if (member == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }
        return member;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, String> findUser(User user) {
        User foundUser = userDao.findByCredentials(user.getLogin(), user.getPassword());

        JWTSigner jwtSigner = new JWTSigner("mr.Star");
        String sign = jwtSigner.sign(getEntityFields(foundUser));

        Map<String, String> map = new HashMap<>();
        map.put("jwt", sign);
        return map;
    }


    private Map<String, Object> getEntityFields(Object entity) {
        Map<String, Object> result = new HashMap<>();
        BeanInfo info = null;
        try {
            info = Introspector.getBeanInfo(entity.getClass());
            for (PropertyDescriptor pd : info.getPropertyDescriptors()) {
                Method reader = pd.getReadMethod();
                result.put(pd.getName(), reader.invoke(entity));
            }
        } catch (IntrospectionException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }

        return result;
    }
}
