package com.example.au.couchbasedemo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;

@Document
public class Employee {

	@Id
	private String empId;
	private String empName;
	private String pincode;
	private String location;

	public Employee(String empId, String empName, String pincode, String location) {
		this.empId = empId;
		this.location = location;
		this.empName = empName;
		this.pincode = pincode;
		
	}

	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}

	public String getPincode() {
		return pincode;
	}
	
	public void setPinCode(String pincode) {
		this.pincode = pincode;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	public String getLocation() {
		return location;
	}

	

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	
}
