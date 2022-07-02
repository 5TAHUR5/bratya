package ru.example.kirzavod.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

public class Utils {

    static public String saveImgForBrick(MultipartFile file, String uploadPath) throws IOException, FileIsNullException {
        if (file != null && !file.getOriginalFilename().isEmpty()) {
            File uploadDir = new File(uploadPath);

            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }
            String uuidFile = UUID.randomUUID().toString();
            String resultFilename = uuidFile + "." + file.getOriginalFilename();
            file.transferTo(new File(uploadPath + "/" + resultFilename));
            return resultFilename;
        } else {
            throw new FileIsNullException("File is null");
        }
    }

}
