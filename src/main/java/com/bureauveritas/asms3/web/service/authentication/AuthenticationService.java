package com.bureauveritas.asms3.web.service.authentication;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.user.User;

@Service
public class AuthenticationService {

	private static final Logger LOG = Logger.getLogger(AuthenticationService.class);

	public boolean login(String login, String password) {

		User user = getUser(login);
		boolean logged = password != null && password.equals(user.getPassword());
		LOG.info(logged ? "Loged in " + login : "Login failed for login " + login);
		return logged;
	}

	private User getUser(String login) {

		User fake = new User();
		fake.setLogin(login);
		fake.setFirstName("Mike");
		fake.setLastName("Bombarde");
		fake.setEmail("mike.bombarde@test.com");
		fake.setPassword("test");
		return fake;
	}

}
