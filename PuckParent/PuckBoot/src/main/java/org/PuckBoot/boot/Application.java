package org.PuckBoot.boot;

import org.PuckBoot.config.WebConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

@SpringBootApplication(exclude = {
	    DataSourceAutoConfiguration.class, 
	    DataSourceTransactionManagerAutoConfiguration.class, 
	    HibernateJpaAutoConfiguration.class
	})
@ComponentScan( {"org.PuckMiddle", "org.PuckBoot.boot", "org.PuckModel", "org.PuckBackend", "org.PuckApi"} )
public class Application extends AbstractDispatcherServletInitializer{


    public static void main(String[] args) {
    	System.out.println("BOOTING......................................");
        SpringApplication.run(Application.class, args);
    }

	@Override
	protected WebApplicationContext createServletApplicationContext() {
	    AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
	    applicationContext.register(WebConfig.class);
	    return applicationContext;
	}

	@Override
	protected String[] getServletMappings() {
		return new String[]{"/*"};
	}

	@Override
	protected WebApplicationContext createRootApplicationContext() {
		return null;
	}    
    
}
