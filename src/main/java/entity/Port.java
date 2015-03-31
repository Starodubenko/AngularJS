package entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


public class Port extends BaseEntity {
    private static int MAX_SHIPS_IN_PORT = 10;
    @Transient
    @OneToMany(mappedBy = "port", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Ship> ships = new ArrayList<Ship>();

    public List<Ship> getShips() {
        return ships;
    }

    public void setShips(List<Ship> ships) {
        this.ships = ships;
    }


}
