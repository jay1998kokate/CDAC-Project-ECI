package com.eci.controllers;

import java.io.InputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.eci.utils.StorageService;

@CrossOrigin
@Controller
public class FileController {

	@Autowired
	private StorageService storageService;

	@RequestMapping(value = "/{fileName}", produces = "image/*")
	public void download(@PathVariable("fileName") String fileName, HttpServletResponse resp) {
		Resource resource = storageService.load(fileName);
		if (resource != null) {
			try (InputStream in = resource.getInputStream()) {
				ServletOutputStream out = resp.getOutputStream();
				FileCopyUtils.copy(in, out);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}
