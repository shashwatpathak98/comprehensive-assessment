package com.shashwat.doctor.controller;

import com.shashwat.doctor.entity.Doctor;
import com.shashwat.doctor.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    DoctorService service;

    @GetMapping("/findAllDoctors")
    @CrossOrigin("*")
    public List<Doctor> getAllDocs() {
        return service.getAllDoctors();
    }

    @GetMapping("/findById")
    @CrossOrigin("*")
    public Doctor getDocById(@RequestParam String registrationNumber) {
        return service.getDoctorById(registrationNumber);
    }

    @PostMapping("/saveDoctor")
    @CrossOrigin("*")
    public Doctor saveDoctor(@RequestBody Doctor doctor) {
        return service.saveDoctor(doctor);
    }

    @PutMapping("/updateDoctor")
    @CrossOrigin("*")
    public Doctor updateDoctor(@RequestBody Doctor doctor) {
        return service.updateDoctor(doctor);
    }

    @DeleteMapping("/deleteDoctor")
    @CrossOrigin("*")
    public Boolean deleteDoc(@RequestParam String registrationNumber) {
        return service.deleteDoctor(registrationNumber);
    }
}
