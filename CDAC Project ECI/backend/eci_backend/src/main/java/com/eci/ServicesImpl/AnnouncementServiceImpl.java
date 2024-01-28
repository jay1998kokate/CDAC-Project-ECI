package com.eci.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.AnnouncementDao;
import com.eci.entities.Announcement;
import com.eci.services.AnnouncementService;

@Service
@Transactional
public class AnnouncementServiceImpl implements AnnouncementService {
	@Autowired
	private AnnouncementDao announcementDao;

	@Override
	public Announcement addAnnouncement(Announcement announcement) {
		return announcementDao.save(announcement);
	}

	@Override
	public List<Announcement> getAnnouncementsByType(String type) {
		return announcementDao.findByType(type);
	}
}
