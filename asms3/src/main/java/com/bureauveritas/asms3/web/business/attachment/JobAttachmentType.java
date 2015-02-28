package com.bureauveritas.asms3.web.business.attachment;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class JobAttachmentType implements IJobAttachmentType {

	@Id
	private String code;
	private String name;

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.bureauveritas.asms3.web.business.IJobAttachmentType#getCode()
	 */
	@Override
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.bureauveritas.asms3.web.business.IJobAttachmentType#getName()
	 */
	@Override
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
