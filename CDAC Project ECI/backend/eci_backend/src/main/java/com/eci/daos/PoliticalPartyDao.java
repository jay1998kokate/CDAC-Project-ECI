package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.PoliticalParty;


public interface PoliticalPartyDao  extends JpaRepository<PoliticalParty, Integer>{
   PoliticalParty findByPoliticalPartyId(int politicalPartyId);
   PoliticalParty findByPoliticalPartyName(String  politicalPartyName);
   
}
