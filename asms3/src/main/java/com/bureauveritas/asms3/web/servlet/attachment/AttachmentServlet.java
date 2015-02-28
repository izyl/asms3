package com.bureauveritas.asms3.web.servlet.attachment;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bureauveritas.asms3.web.business.attachment.Attachment;
import com.bureauveritas.asms3.web.service.attachment.AttachmentService;
import com.bureauveritas.asms3.web.service.attachment.AttachmentTypeService;
import com.bureauveritas.asms3.web.service.mapping.MapperService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;

/**
 * 
 * Attachments servlet
 * 
 * @author izyl
 * 
 */
@Controller
@RequestMapping("attachments")
public class AttachmentServlet {

	@SuppressWarnings("unused")
	private static final Logger LOG = Logger.getLogger(AttachmentServlet.class);

	@Autowired
	private MapperService mapperService;

	@Autowired
	private AttachmentService attachmentService;

	@Autowired
	private AttachmentTypeService attachmentTypeService;

	TypeReference<List<Attachment>> tref = new TypeReference<List<Attachment>>() {
	};

	@RequestMapping("/save")
	private void save(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		List<Attachment> attachments = mapperService.readValue(request.getInputStream(), tref);
		mapperService.writeSuccess(response, attachmentService.save(attachments), "Attachments successfully saved");
	}

	@RequestMapping("/list")
	private void view(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		mapperService.writeSuccess(response, attachmentService.getAll(), "Attachment list");
	}

}
