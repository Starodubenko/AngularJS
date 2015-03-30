package listener;

import dao.hibernate.DaoFactory;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class ContextListener implements ServletContextListener{

    public ContextListener() {
    }

    public void contextInitialized(ServletContextEvent sce) {
        ServletContext servletContext = sce.getServletContext();
        servletContext.setAttribute("daoFactory", DaoFactory.getInstance());
    }

    public void contextDestroyed(ServletContextEvent sce) {

    }
}
