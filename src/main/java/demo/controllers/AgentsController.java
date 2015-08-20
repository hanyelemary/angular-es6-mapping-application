package demo.controllers;

import demo.domain.Agent;
import demo.services.AgentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * A simple controller that gets data from the AgentsService.
 */
@RestController
@EnableAutoConfiguration
public class AgentsController {
    @Autowired
    private AgentsService agentsService;

    @RequestMapping("/agents")
    List<Agent> agents() {
        return agentsService.getAgents();
    }
}