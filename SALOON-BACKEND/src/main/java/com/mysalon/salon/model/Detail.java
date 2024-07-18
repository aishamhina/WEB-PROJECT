package com.mysalon.salon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "detail")


public class Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private long id;
    @Column(nullable = false)
    private String hairstyleDesign;
    @Column(nullable = false)
    private String nailsTreatment;
    @Column(nullable = false)
    private String upcommingAppointment;
    @Column(nullable = false)
    private String banningStyle;
    @Column(nullable = false)
    private int phoneNumber;


    public Detail(){}


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getHairstyleDesign() {
        return hairstyleDesign;
    }
    public void setHairstyleDesign(String hairstyleDesign) {
        this.hairstyleDesign = hairstyleDesign;
    }
    public String getNailsTreatment() {
        return nailsTreatment;
    }
    public void setNailsTreatment(String nailsTreatment) {
        this.nailsTreatment = nailsTreatment;
    }
    public String getUpcommingAppointment() {
        return upcommingAppointment;
    }
    public void setUpcommingAppointment(Object object) {
        this.upcommingAppointment = (String) object;
    }
    public String getBanningStyle() {
        return banningStyle;
    }
    public void setBanningStyle(String banningStyle) {
        this.banningStyle = banningStyle;
    }
    public int getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber (int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Detail (long id, String hairstyleDesign, String nailsTreatment, String upcommingAppointment, String banningStyle,
            int phoneNumber) {
        this.id = id;
        this. hairstyleDesign =  hairstyleDesign;
        this.nailsTreatment = nailsTreatment;
        this.upcommingAppointment = upcommingAppointment;
        this.banningStyle = banningStyle;
        this.phoneNumber = phoneNumber;
    }

    
}


    

