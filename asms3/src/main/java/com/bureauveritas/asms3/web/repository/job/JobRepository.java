package com.bureauveritas.asms3.web.repository.job;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bureauveritas.asms3.web.business.job.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
}
