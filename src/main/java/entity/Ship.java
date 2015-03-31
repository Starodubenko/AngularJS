package entity;

import javax.persistence.*;

@Entity
public class Ship extends BaseEntity {

    @Column
    private int totalWeightHold;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "port_id")
    private Port port = new Port();

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user = new User();

    public User getOwner() {
        return user;
    }

    public void setOwner(User user) {
        this.user = user;
    }

    public Port getPort() {
        return port;
    }

    public void setPort(Port port) {
        this.port = port;
    }

    public int getTotalWeightHold() {
        return totalWeightHold;
    }

    public void setTotalWeightHold(int totalWeightHold) {
        this.totalWeightHold = totalWeightHold;
    }
}
