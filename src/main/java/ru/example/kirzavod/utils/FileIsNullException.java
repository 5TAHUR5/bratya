package ru.example.kirzavod.utils;

public class FileIsNullException extends Exception {


    public FileIsNullException(String file_is_null) {
        super(file_is_null);
    }
}
