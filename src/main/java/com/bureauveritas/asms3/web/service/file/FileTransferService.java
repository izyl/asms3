package com.bureauveritas.asms3.web.service.file;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.json.JsonResponse;
import com.bureauveritas.asms3.web.json.FileUploadResponse;

@Service
public class FileTransferService {

	private static final Logger LOG = Logger.getLogger(FileTransferService.class);

	// upload settings
	private static final int MEMORY_THRESHOLD = 1024 * 1024 * 3; // 3MB
	private static final int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
	private static final int MAX_REQUEST_SIZE = 1024 * 1024 * 50; // 50MB
	// location to store file uploaded
	private final static String UPLOAD_DIR = System.getProperty("java.io.tmpdir") + File.separator + "upload";

	public JsonResponse<FileUploadResponse> uploadFile(HttpServletRequest request) throws Exception {

		JsonResponse<FileUploadResponse> response = new JsonResponse<FileUploadResponse>();

		// checks if the request actually contains upload file
		if (!ServletFileUpload.isMultipartContent(request)) {
			// if not, we stop here
			response.setSuccess(false);
			response.setMessage("Form must has enctype=multipart/form-data.");
			return response;
		}

		// configures upload settings
		DiskFileItemFactory factory = new DiskFileItemFactory();
		// sets memory threshold - beyond which files are stored in disk
		factory.setSizeThreshold(MEMORY_THRESHOLD);
		// sets temporary location to store files
		factory.setRepository(new File(System.getProperty("java.io.tmpdir")));

		ServletFileUpload upload = new ServletFileUpload(factory);

		// sets maximum size of upload file
		upload.setFileSizeMax(MAX_FILE_SIZE);

		// sets maximum size of request (include file + form data)
		upload.setSizeMax(MAX_REQUEST_SIZE);

		// creates the directory if it does not exist
		File uploadDir = new File(UPLOAD_DIR);
		if (!uploadDir.exists()) {
			uploadDir.mkdir();
		}

		String fileName = null;
		// parses the request's content to extract file data
		List<FileItem> formItems = null;
		try {
			formItems = upload.parseRequest(request);
		} catch (FileUploadException e) {
			response.setSuccess(false);
			response.setMessage("No file to upload");

			return response;
		}

		response.setSuccess(true);
		if (CollectionUtils.isNotEmpty(formItems)) {
			// iterates over form's fields
			for (FileItem item : formItems) {
				// processes only fields that are not form fields
				if (!item.isFormField()) {
					fileName = new File(item.getName()).getName();
					File storeFile = new File(UPLOAD_DIR + File.separator + fileName);

					FileUploadResponse uploadedFile = new FileUploadResponse();
					uploadedFile.setFileName(fileName);
					response.addData(uploadedFile);

					// saves the file on disk
					try {
						item.write(storeFile);
						LOG.debug("uploaded file : " + storeFile.getAbsolutePath());
					} catch (Exception e) {
						LOG.error(e);
						response.setSuccess(false);
						throw e;
					}
				}
			}
		}

		return response;
	}

	public void downloadFile(HttpServletRequest request, HttpServletResponse response) {
	}

}
