package com.example.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {

    @GetMapping
    public String hello() {
        return "Hello World";
    }

    @PostMapping
    public String helloPost() {
        return "Hello World";
    }

    @PutMapping
    public String helloPut() {
        return "Hello World";
    }

    @DeleteMapping
    public String helloDelete() {
        return "Hello World";
    }

}
