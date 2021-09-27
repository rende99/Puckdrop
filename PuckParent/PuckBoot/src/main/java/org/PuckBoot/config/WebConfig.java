package org.PuckBoot.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan({ "org.PuckBoot", "org.PuckMiddle", "org.PuckBackend", "org.PuckApi" })
public class WebConfig {

}
