package com.bureauveritas.asms3.web.service.comment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.comment.Comment;
import com.bureauveritas.asms3.web.repository.comment.CommentRepository;

@Service
public class CommentService {

	@Autowired
	private CommentRepository commentRepository;

	public Comment get(Integer id) {
		return commentRepository.getOne(id);
	}

	public List<Comment> save(List<Comment> attachments) {
		return commentRepository.save(attachments);
	}

	public void delete(List<Comment> comments) {
		commentRepository.delete(comments);
	}

	public void delete(Integer id) {
		commentRepository.delete(id);
	}

	public List<Comment> list() {
		return commentRepository.findAll();
	}

}
