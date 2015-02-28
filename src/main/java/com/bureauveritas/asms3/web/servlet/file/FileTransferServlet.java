package com.bureauveritas.asms3.web.servlet.file;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bureauveritas.asms3.web.service.file.FileTransferService;
import com.bureauveritas.asms3.web.service.mapping.MapperService;

/**
 * Servlet for file upload
 * 
 * @author izyl
 */
@Controller
@RequestMapping("fileTransfer")
public class FileTransferServlet {

	private static final Logger LOG = Logger.getLogger(FileTransferServlet.class);

	@Autowired
	private MapperService mapperService;

	@Autowired
	private FileTransferService fileTransferService;

	@RequestMapping("/transfer")
	public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		LOG.info("Servlet running");
		String action = request.getParameter("action");
		if ("download".equals(action)) {
			fileTransferService.downloadFile(request, response);

		} else if ("upload".equals(action)) {
			try {
				mapperService.writeResponse(response, fileTransferService.uploadFile(request));
			} catch (Exception e) {

				// en dev on peut renvoyer l'exception
				mapperService.writeException(response, e);
			}

		} else {
			mapperService.writeFailure(response, null, "Action " + action + " not supported");
		}
	}
}
