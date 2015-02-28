package com.bureauveritas.asms3.web.service.attachment;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.attachment.JobAttachmentType;
import com.bureauveritas.asms3.web.repository.attachment.AttachmentTypeRepository;

@Service
public class AttachmentTypeService {

	@Autowired
	private AttachmentTypeRepository attachmentTypeRepository;

	public Collection<JobAttachmentType> list() {
		return attachmentTypeRepository.findAll();
	}

}
