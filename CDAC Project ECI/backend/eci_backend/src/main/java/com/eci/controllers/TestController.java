package com.eci.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.models.Response;

@RestController
@RequestMapping("/test")
public class TestController {
	@GetMapping("")
	public ResponseEntity<?> test() {
		return Response.success("Success...");
	}
}
