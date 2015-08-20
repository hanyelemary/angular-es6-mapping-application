package demo.domain;

/**
 * A domain object representing an agent.
 */
public class Agent {

    private String name;
    private Double latitude;
    private Double longitude;
    private int age;
    private String gender;

    /**
     * public constructor
     * @param name agent's name
     * @param latitude agent's location - latitude
     * @param longitude agent's location - longitude
     * @param age agent's age
     * @param gender agent's gender
     */
    public Agent(String name, Double latitude, Double longitude, int age, String gender) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.age = age;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
