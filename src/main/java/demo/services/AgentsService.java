package demo.services;

import demo.datasource.CSVDataSource;
import demo.domain.Agent;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/**
 * A class representing the agents service. It takes a raw csv record and converts it to an Agent object
 */
@Service("agentsService")
public class AgentsService {

    @Autowired
    private CSVDataSource csvDataSource;

    public List<Agent> getAgents() {
        Iterable<CSVRecord> records = csvDataSource.readRecords("data/cc-maps-data-set.csv");
        List<Agent> agents = new ArrayList<Agent>();

        for (CSVRecord record : records) {
            Agent agent = new Agent(
                record.get("name"),
                Double.parseDouble(record.get("latitude")),
                Double.parseDouble(record.get("longitude")),
                Integer.parseInt(record.get("age")),
                record.get("gender")
            );

            agents.add(agent);
        }

        return agents;
    }
}
