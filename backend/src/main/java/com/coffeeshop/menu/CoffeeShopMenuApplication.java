package com.coffeeshop.menu;

import com.coffeeshop.menu.model.Product;
import com.coffeeshop.menu.repository.ProductRepository;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Coffee Shop Menu API", version = "1.0", description = "API for managing coffee shop menu"))
public class CoffeeShopMenuApplication {

    public static void main(String[] args) {
        SpringApplication.run(CoffeeShopMenuApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                productRepository.save(new Product(null, "Espresso", 2.50, "Strong coffee shot", "/images/espresso.jpg", "Coffee"));
                productRepository.save(new Product(null, "Latte", 3.50, "Espresso with steamed milk", "/images/latte.jpg", "Coffee"));
                productRepository.save(new Product(null, "Croissant", 2.00, "Flaky pastry", "/images/croissant.jpg", "Pastry"));
            }
        };
    }
}