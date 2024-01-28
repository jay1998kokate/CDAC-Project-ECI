package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "politicalparty")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PoliticalParty {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "partyid")
	private int politicalPartyId;
	@Column(name = "partyname")
	private String politicalPartyName;
	@Column(name = "presidentName")
	private String presidentName;
	@Column(name = "state")
	private String state;
	private String district;
	@Column(name = " partysymbol")
	private String partySymbol;
	@Column(name = "address")
	private String politicalPartyAddress;

	public PoliticalParty(String politicalPartyName, String presidentName, String state, String district,
			String partySymbol, String politicalPartyAddress) {
		this.politicalPartyName = politicalPartyName;
		this.presidentName = presidentName;
		this.state = state;
		this.district = district;
		this.partySymbol = partySymbol;
		this.politicalPartyAddress = politicalPartyAddress;
	}

}
