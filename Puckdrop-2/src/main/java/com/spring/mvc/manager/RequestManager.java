package com.spring.mvc.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mvc.service.ApiService;
import com.spring.mvc.service.MessageService;
import com.spring.mvc.service.UserService;

@Service
public class RequestManager {

    @Autowired
    private UserService userService;
    
    @Autowired
    private MessageService messageService;

    @Autowired
    private ApiService apiService;

    
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public MessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public ApiService getApiService() {
		return apiService;
	}

	public void setApiService(ApiService apiService) {
		this.apiService = apiService;
	}
	
}
