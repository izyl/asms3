package com.bureauveritas.asms3.web.repository.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bureauveritas.asms3.web.business.comment.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
