package functions;

import java.util.ArrayList;
import java.util.List;

public class Functions {

	public static void main(String[] args) {
		Producto chealsea = new Producto("Chealsea", 92.78);
		Producto skipper = new Producto("Skipper", 92.78);

		CarritoCompra carrito = new CarritoCompra();

		carrito.agregarProducto(chealsea);
		carrito.agregarProducto(skipper);

		double totalCarrito = carrito.calcularTotal();

		System.out.println("Total del carrito: " + totalCarrito);
	}

	static class Producto {
		String nombre;
		double precio;

		Producto(String nombre, double precio) {
			this.nombre = nombre;
			this.precio = precio;
		}
	}

	static class CarritoCompra {
		List<Producto> productos = new ArrayList<>();

		void agregarProducto(Producto barbie) {
			productos.add(barbie);
		}

		double calcularTotal() {
			double total = 0;

			for (Producto barbie : productos) {
				total += barbie.precio;
			}

			return total;
		}
	}

}
