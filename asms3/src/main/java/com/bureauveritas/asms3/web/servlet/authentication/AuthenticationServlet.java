package com.bureauveritas.asms3.web.servlet.authentication;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bureauveritas.asms3.web.service.authentication.AuthenticationService;
import com.bureauveritas.asms3.web.service.mapping.MapperService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
public class AuthenticationServlet {

	@Autowired
	private MapperService mapperService;

	@Autowired
	private AuthenticationService authenticationService;

	TypeReference<Credentials> tref = new TypeReference<Credentials>() {
	};

	@RequestMapping("/auth")
	private void autheticate(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		Credentials cred = mapperService.readValue(request.getInputStream(), tref);
		boolean logged = authenticationService.login(cred.username, cred.password);
		String message = logged ? "Logged in successfull" : "Wrong username or password";
		mapperService.writeMessage(response, message, logged);
	}
}

class Credentials {

	public Credentials() {
	}

	String username;
	String password;

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}
}