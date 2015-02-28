package com.bureauveritas.asms3.web.servlet.attachment;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bureauveritas.asms3.web.service.attachment.AttachmentTypeService;
import com.bureauveritas.asms3.web.service.mapping.MapperService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
@RequestMapping("attachmentTypes")
public class AttachmentTypeServlet {

	@SuppressWarnings("unused")
	private static final Logger LOG = Logger.getLogger(AttachmentTypeServlet.class);

	@Autowired
	private MapperService mapperService;

	@Autowired
	private AttachmentTypeService jobAttachmentTypeService;

	@RequestMapping("/list")
	private void list(HttpServletRequest request, HttpServletResponse response) throws JsonParseException, JsonMappingException, IOException {
		mapperService.writeSuccess(response, jobAttachmentTypeService.list(), "Attachment list");
	}

}
