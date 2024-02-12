package org.generation.umbrellaUser.controller;

import java.util.List;

import org.generation.umbrellaUser.model.User;
import org.generation.umbrellaUser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admin/users")
public class UserController {

	private UserService userService;
	
	@Autowired
	public UserController (UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping 
	public List<User>getUsers(){
		return userService.allUsers();
	}
}
