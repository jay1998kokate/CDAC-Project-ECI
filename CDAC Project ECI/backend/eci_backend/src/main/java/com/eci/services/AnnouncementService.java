package com.eci.services;

import java.util.List;

import com.eci.entities.Announcement;

public interface AnnouncementService {
	Announcement addAnnouncement(Announcement announcement);
	
	List<Announcement> getAnnouncementsByType(String type);
}
