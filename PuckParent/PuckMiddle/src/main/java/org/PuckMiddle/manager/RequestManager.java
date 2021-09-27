package org.PuckMiddle.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.PuckApi.service.ApiService;
import org.PuckBackend.service.MessageService;
import org.PuckBackend.service.UserService;

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
