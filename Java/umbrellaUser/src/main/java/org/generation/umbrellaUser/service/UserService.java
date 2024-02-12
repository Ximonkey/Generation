package org.generation.umbrellaUser.service;


import java.util.List;

import org.generation.umbrellaUser.model.User;
import org.generation.umbrellaUser.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private final UserRepository repository;
	
	@Autowired
	public UserService(UserRepository repository) {
		this.repository = repository;
	}
	
	public List<User> allUsers(){
		return repository.findAll();
	}
}
