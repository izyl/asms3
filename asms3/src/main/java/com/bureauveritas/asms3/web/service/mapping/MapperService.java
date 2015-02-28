package com.bureauveritas.asms3.web.service.mapping;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.bureauveritas.asms3.web.business.attachment.IJobAttachmentType;
import com.bureauveritas.asms3.web.business.attachment.JobAttachmentType;
import com.bureauveritas.asms3.web.json.JsonResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

@Service
public class MapperService {
	private static final Logger LOG = Logger.getLogger(MapperService.class);

	private ObjectMapper mapper = new ObjectMapper();
	private SimpleModule simpleModule = new SimpleModule();

	private MapperService() {

		// permet d'associer une class à une interface, ici on associe le type
		// concret JobAttachmentType à IJobAttachmentType
		registerInterface(IJobAttachmentType.class, JobAttachmentType.class);

		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	};

	private <T> void registerInterface(Class<T> superType, Class<? extends T> subType) {
		simpleModule.addAbstractTypeMapping(superType, subType);
		mapper.registerModule(simpleModule);

	}

	public <T> T readValue(String content, TypeReference<T> valueTypeRef) throws IOException, JsonParseException, JsonMappingException {
		return mapper.readValue(content, valueTypeRef);
	}

	public <T> T readValue(InputStream src, TypeReference<T> valueTypeRef) throws IOException, JsonParseException, JsonMappingException {
		return mapper.readValue(src, valueTypeRef);
	}

	public <T> void writeResponse(HttpServletResponse response, Collection<T> datas, String message, boolean success) {

		JsonResponse<T> jsonResponse = new JsonResponse<T>();
		jsonResponse.setSuccess(success);
		jsonResponse.setData(datas);
		jsonResponse.setMessage(message);
		response.setContentType("text/html");
		try {
			mapper.writeValue(response.getWriter(), jsonResponse);
			IOUtils.closeQuietly(response.getWriter());
		} catch (Exception e) {
			LOG.error(e);

			// En mode developpement on renvoie l'exception au développeur
			writeException(response, e);
		}
	}

	public <T> void writeMessage(HttpServletResponse response, String message, boolean success) {

		JsonResponse<T> jsonResponse = new JsonResponse<T>();
		jsonResponse.setSuccess(success);
		jsonResponse.setMessage(message);
		response.setContentType("text/html");
		try {
			mapper.writeValue(response.getWriter(), jsonResponse);
			IOUtils.closeQuietly(response.getWriter());
		} catch (Exception e) {
			LOG.error(e);

			// En mode developpement on renvoie l'exception au développeur
			writeException(response, e);
		}
	}

	public <T> void writeSuccess(HttpServletResponse response, Collection<T> datas, String message) {
		writeResponse(response, datas, message, true);
	}

	public <T> void writeFailure(HttpServletResponse response, Collection<T> datas, String message) {
		writeResponse(response, datas, message, false);
	}

	public <T> void writeResponse(HttpServletResponse response, JsonResponse<?> jsonResponse) {
		writeResponse(response, jsonResponse.getData(), jsonResponse.getMessage(), jsonResponse.isSuccess());
	}

	public void writeException(HttpServletResponse response, Exception e) {
		JsonResponse<String> clientException = new JsonResponse<String>();
		response.setContentType("text/html");
		clientException.setMessage(e.getMessage());
		clientException.setSuccess(false);

		try {
			mapper.writeValue(response.getWriter(), clientException);
			IOUtils.closeQuietly(response.getWriter());
		} catch (Exception e1) {
			LOG.error(e1);
		}
	}
}
