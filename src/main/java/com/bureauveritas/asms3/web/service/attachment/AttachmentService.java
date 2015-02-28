package com.bureauveritas.asms3.web.service.attachment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.attachment.Attachment;
import com.bureauveritas.asms3.web.repository.attachment.AttachmentRepository;
import com.bureauveritas.asms3.web.repository.job.JobRepository;

@Service
public class AttachmentService {

	@Autowired
	private AttachmentRepository attachmentRepository;
	
	@Autowired
	private JobRepository jobRepository;
	

	public Attachment get(Integer id) {
		return attachmentRepository.getOne(id);
	}

	public List<Attachment> save(List<Attachment> attachments) {
		//attachmentRepository.delete(attachmentRepository.findAll());
		return attachmentRepository.save(attachments);
	}

	public void delete(List<Integer> ids) {
		attachmentRepository.delete(attachmentRepository.findAll(ids));
	}

	public void delete(Integer id) {
		attachmentRepository.delete(id);
	}

	public List<Attachment> getAll() {
		return attachmentRepository.findAll();
	}

}
