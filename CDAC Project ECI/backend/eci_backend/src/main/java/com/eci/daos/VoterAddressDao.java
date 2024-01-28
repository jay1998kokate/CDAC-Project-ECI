package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.VoterAddress;

public interface VoterAddressDao extends JpaRepository<VoterAddress, Integer> {

}
