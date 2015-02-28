package com.bureauveritas.asms3.web.service.job;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.job.Job;
import com.bureauveritas.asms3.web.repository.job.JobRepository;

@Service
public class JobService {

	@Autowired
	private JobRepository jobRepository;

	public Job get(Integer id) {
		return jobRepository.getOne(id);
	}

	public List<Job> save(List<Job> attachments) {
		// jobRepository.delete(jobRepository.findAll());
		return jobRepository.save(attachments);
	}

	public void delete(List<Integer> ids) {
		jobRepository.delete(jobRepository.findAll(ids));
	}

	public void delete(Integer id) {
		jobRepository.delete(id);
	}

	public List<Job> getAll() {
		return jobRepository.findAll();
	}

}
