package com.spring.mvc.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.mvc.model.NhlTeam;

import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Service
public class ApiService {
	
	private static final String NHL_BASE_URL = "https://statsapi.web.nhl.com/api/v1";
	
	// Consumes specified endpoint, returns JSON information as String.
	public String consumeEndpoint(String endpoint) throws IOException{
	    	    	
		OkHttpClient client = new OkHttpClient();

		Request request = new Request.Builder().url(NHL_BASE_URL + endpoint).build();
		
		try (Response response = client.newCall(request).execute()) {
			return response.body().string();
		} catch (IOException e) {
		    return "Error fetching NHL endpoint: " + e.getMessage();
		}
		   
	}
	
	//Overriding for queries with parameters
	public String consumeEndpoint(String endpoint, String extraInfo) throws IOException{
    	
		OkHttpClient client = new OkHttpClient();

		Request request = new Request.Builder().url(NHL_BASE_URL + endpoint + extraInfo).build();
		
		try (Response response = client.newCall(request).execute()) {
			return response.body().string();
		} catch (IOException e) {
		    return "Error fetching NHL endpoint: " + e.getMessage();
		}
		   
	}

}
