package com.eci.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PoliticalPartyModel {
	
	   private int politicalPartyId;
       private String politicalPartyName;
	   private String presidentName;
	   private String  state;
	   private String district;
	   private String partySymbol;
	   private String address;
	   
}
