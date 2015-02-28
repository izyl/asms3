package com.bureauveritas.asms3.web.business.job;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.bureauveritas.asms3.web.business.attachment.Attachment;
import com.bureauveritas.asms3.web.business.comment.Comment;

@Entity
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<JobUser> jobUsers;

	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Attachment> attachments;

	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Comment> comments;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Attachment> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<Attachment> attachments) {
		this.attachments = attachments;
	}

	public List<JobUser> getJobUsers() {
		return jobUsers;
	}

	public void setJobUsers(List<JobUser> jobUsers) {
		this.jobUsers = jobUsers;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

}
