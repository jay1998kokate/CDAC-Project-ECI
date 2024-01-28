package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.Announcement;
import java.lang.String;
import java.util.List;

public interface AnnouncementDao extends JpaRepository<Announcement, Integer>{
	List<Announcement> findByType(String type);
}
