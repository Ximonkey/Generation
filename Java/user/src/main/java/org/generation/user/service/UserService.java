package org.generation.user.service;

import java.util.ArrayList;
import java.util.List;

import org.generation.user.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	public final List<User> usuario = new ArrayList<>();
	
	public UserService() {
		usuario.add(new User(1L, "Ximena", "Muñoz", "kkimeni@gmail.com", "mono123"));
        usuario.add(new User(2L, "Juan", "Perez", "juan@gmail.com", "password123"));
        usuario.add(new User(3L, "Maria", "Lopez", "maria@gmail.com", "qwerty"));
        usuario.add(new User(4L, "Carlos", "Gomez", "carlos@gmail.com", "abc123"));
        usuario.add(new User(5L, "Ana", "Rodriguez", "ana@gmail.com", "xyz789"));
        usuario.add(new User(6L, "Pedro", "Hernandez", "pedro@gmail.com", "pass456"));
        usuario.add(new User(7L, "Laura", "Garcia", "laura@gmail.com", "letmein"));
        usuario.add(new User(8L, "Alejandro", "Martinez", "alejandro@gmail.com", "secret123"));
        usuario.add(new User(9L, "Sofia", "Diaz", "sofia@gmail.com", "p@ssw0rd"));
        usuario.add(new User(10L, "Javier", "Rios", "javier@gmail.com", "welcome123"));
	}
	
	public List<User> allUsers(){
		return usuario;
	}
}
