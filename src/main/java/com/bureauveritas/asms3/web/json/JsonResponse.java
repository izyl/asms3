package com.bureauveritas.asms3.web.json;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Generic json response for T type object
 * 
 * @author lschvent
 * 
 * @param <T>
 */
public class JsonResponse<T> {

	protected boolean success = false;
	protected String id;
	protected String message;
	protected Collection<T> data;

	public JsonResponse() {

	}

	public JsonResponse(boolean success, T t) {

		this.success = success;
		addData(t);
	}

	public boolean isSuccess() {

		return success;
	}

	public void setSuccess(boolean success) {

		this.success = success;
	}

	public int getTotal() {

		if (data != null) {
			return data.size();
		}

		return 0;
	}

	public String getId() {

		return id;
	}

	public void setId(String id) {

		this.id = id;
	}

	public String getMessage() {

		return message;
	}

	public void setMessage(String message) {

		this.message = message;
	}

	public Collection<T> getData() {

		return data;
	}

	public void setData(Collection<T> data) {

		this.data = data;
	}

	public void addData(T t) {

		if (data == null) {
			data = new ArrayList<T>();
		}
		data.add(t);
	}

	public void clearMessages() {

		if (data == null) {
			data.clear();
		}
	}

}
