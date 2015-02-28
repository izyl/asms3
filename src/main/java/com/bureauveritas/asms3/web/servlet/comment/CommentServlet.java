package com.bureauveritas.asms3.web.servlet.comment;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bureauveritas.asms3.web.business.comment.Comment;
import com.bureauveritas.asms3.web.service.comment.CommentService;
import com.bureauveritas.asms3.web.service.mapping.MapperService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
@RequestMapping("comments")
public class CommentServlet {

	@SuppressWarnings("unused")
	private static final Logger LOG = Logger.getLogger(CommentServlet.class);

	@Autowired
	private MapperService mapperService;

	@Autowired
	private CommentService commentService;

	TypeReference<List<Comment>> tref = new TypeReference<List<Comment>>() {};

	@RequestMapping("/create")
	private void create(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		List<Comment> comments = mapperService.readValue(request.getInputStream(), tref);
		mapperService.writeSuccess(response, commentService.save(comments), "list");
	}
	
	@RequestMapping("/update")
	private void update(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		List<Comment> comments = mapperService.readValue(request.getInputStream(), tref);
		mapperService.writeSuccess(response, commentService.save(comments), "list");
	}
	
	@RequestMapping("/delete")
	private void delete(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		List<Comment> comments = mapperService.readValue(request.getInputStream(), tref);
		commentService.delete(comments);
		mapperService.writeSuccess(response, null, "list");
	}

	@RequestMapping("/list")
	private void list(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		mapperService.writeSuccess(response, commentService.list(), "Attachment list");
	}

}