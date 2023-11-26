package com.example.blog.controller;

import com.example.blog.domain.Post;
import com.example.blog.domain.PostSearchParam;
import com.example.blog.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/v1/post")
@RestController
public class PostController {

    private final PostService postService;

    @GetMapping("")
    public List<Post> getPostsBySearchParam(PostSearchParam postSearchParam) {
        return postService.getPostsBySearchParam(postSearchParam);
    }
}
