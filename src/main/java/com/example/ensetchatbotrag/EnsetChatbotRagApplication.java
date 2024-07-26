package com.example.ensetchatbotrag;

import com.example.ensetchatbotrag.entities.Person;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class EnsetChatbotRagApplication {

    public static void main(String[] args) {
        SpringApplication.run(EnsetChatbotRagApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(PersonRepository personRepository) {
        return args -> {
            for (int i = 0; i < 100; i++) {
                Person person = Person.builder()
                        .name(UUID.randomUUID().toString().substring(0, 8))
                        .email(UUID.randomUUID().toString().substring(0, 8) + "@gmail.com")
                        .build(); // Ensure you are calling build() to finalize the object creation
                personRepository.save(person); // Save the person object to the database
            }
        };
    }


}
