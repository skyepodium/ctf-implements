package com.example.blog.domain;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class Post {
    private long postSeq;
    private String title;
    private String content;
    private Timestamp createdAt;
    private Timestamp modifiedAt;
}
