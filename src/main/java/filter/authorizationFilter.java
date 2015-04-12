package filter;

import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.JWTVerifyException;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.Enumeration;
import java.util.regex.Pattern;

@WebFilter("/app/*")
public class authorizationFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        String token = getToken((HttpServletRequest) req);
        JWTVerifier jwtVerifier = new JWTVerifier("mr.Star");

        try {
            jwtVerifier.verify(token);
        } catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException | JWTVerifyException e) {
            e.printStackTrace();
        }
    }

    private String getToken(HttpServletRequest httpRequest) throws ServletException {
        String token = null;
        Enumeration<String> headerNames = httpRequest.getHeaderNames();
        final String authorizationHeader = httpRequest.getHeader("authorization");
        if (authorizationHeader == null) {
            throw new ServletException("Unauthorized: No Authorization header was found");
        }

        String[] parts = authorizationHeader.split(" ");
        if (parts.length != 2) {
            throw new ServletException("Unauthorized: Format is Authorization: Bearer [token]");
        }

        String scheme = parts[0];
        String credentials = parts[1];

        Pattern pattern = Pattern.compile("^Bearer$", Pattern.CASE_INSENSITIVE);
        if (pattern.matcher(scheme).matches()) {
            token = credentials;
        }
        return token;
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
