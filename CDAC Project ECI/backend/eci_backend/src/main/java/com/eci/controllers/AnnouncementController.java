package com.eci.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.entities.Announcement;
import com.eci.models.Response;
import com.eci.services.AnnouncementService;

@CrossOrigin
@RestController
@RequestMapping("/announcement")
public class AnnouncementController {
	@Autowired
	private AnnouncementService announcementService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addAnnouncement(@RequestBody Announcement announcement) {
		announcement = announcementService.addAnnouncement(announcement);
		return Response.success(announcement);
	}
	
	@GetMapping("getByType/{type}")
	public ResponseEntity<?> getAnnouncementsByType(@PathVariable("type") String type) {
		List<Announcement> announcements = announcementService.getAnnouncementsByType(type);
		return Response.success(announcements);
	}
}
