package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.VoterDocument;

public interface VoterDocumentDao extends JpaRepository<VoterDocument, Integer> {

}
