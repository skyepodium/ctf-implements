package com.example.blog.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Post {
    private long postSeq;
    private String title;
    private String content;
    private String createdAt;
    private String modifiedAt;
}
