package com.bureauveritas.asms3.web.repository.attachment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bureauveritas.asms3.web.business.attachment.JobAttachmentType;

@Repository
public interface AttachmentTypeRepository extends JpaRepository<JobAttachmentType, String> {

}
